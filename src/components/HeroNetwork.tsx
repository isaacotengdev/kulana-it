"use client";

import { useEffect, useRef } from "react";

// Brand teal, as used for the hero eyebrow and buttons
const TEAL = "87, 217, 212";
const GRID = 22;

// 8 compass directions, clockwise from east; odd indices are 45° diagonals
const DIRS: [number, number][] = [[1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1], [0, -1], [1, -1]];

type Pt = { x: number; y: number };
type Trace = { pts: Pt[]; lens: number[]; total: number; flash: [number, number] };
type Chip = { x: number; y: number; w: number; h: number };
type Packet = { trace: Trace; dist: number; speed: number; reverse: boolean };

/** Point at distance d along a trace polyline */
function pointAt(t: Trace, d: number): Pt {
  for (let i = 0; i < t.lens.length; i++) {
    if (d <= t.lens[i]) {
      const a = t.pts[i];
      const b = t.pts[i + 1];
      const k = t.lens[i] === 0 ? 0 : d / t.lens[i];
      return { x: a.x + (b.x - a.x) * k, y: a.y + (b.y - a.y) * k };
    }
    d -= t.lens[i];
  }
  return t.pts[t.pts.length - 1];
}

/**
 * Circuit-board animation: chips with traces routed at 90°/45° angles, and data
 * packets travelling along the traces. The board is drawn once to an offscreen
 * layer; only the packets animate. Static when the user prefers reduced motion,
 * paused while the hero is off-screen or the tab is hidden.
 */
export default function HeroNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const board = document.createElement("canvas");
    const bctx = board.getContext("2d")!;
    let width = 0;
    let height = 0;
    let traces: Trace[] = [];
    let chips: Chip[] = [];
    let packets: Packet[] = [];
    let frame = 0;
    let visible = true;
    let time = 0;

    const build = () => {
      const cols = Math.ceil(width / GRID) + 1;
      const rows = Math.ceil(height / GRID) + 1;
      const used = new Uint8Array(cols * rows);
      const free = (c: number, r: number) => c >= 0 && r >= 0 && c < cols && r < rows && !used[r * cols + c];
      const mark = (c: number, r: number) => { used[r * cols + c] = 1; };
      traces = [];
      chips = [];

      // Route a trace from a grid cell, turning 45° now and then, until it hits something
      const walk = (c: number, r: number, dir: number, maxSteps: number) => {
        const cells: [number, number][] = [[c, r]];
        mark(c, r);
        const turns = [0];
        for (let s = 0; s < maxSteps; s++) {
          let d = dir;
          if (s > 1 && Math.random() < 0.18) d = (dir + (Math.random() < 0.5 ? 1 : 7)) % 8;
          const [dx, dy] = DIRS[d];
          const nc = c + dx;
          const nr = r + dy;
          if (!free(nc, nr)) break;
          if (d !== dir) turns.push(cells.length - 1);
          dir = d;
          c = nc;
          r = nr;
          cells.push([c, r]);
          mark(c, r);
        }
        if (cells.length < 4) return;
        turns.push(cells.length - 1);
        const pts = turns.map((i) => ({ x: cells[i][0] * GRID, y: cells[i][1] * GRID }));
        const lens = pts.slice(1).map((p, i) => Math.hypot(p.x - pts[i].x, p.y - pts[i].y));
        traces.push({ pts, lens, total: lens.reduce((a, b) => a + b, 0), flash: [0, 0] });
      };

      // Chips, kept to the right so the headline stays clear on wide screens
      const minCol = width > 900 ? Math.floor(cols * 0.45) : 1;
      const chipCount = width > 900 ? 4 : 2;
      for (let n = 0, tries = 0; n < chipCount && tries < 60; tries++) {
        const w = 3 + Math.floor(Math.random() * 3);
        const h = 3 + Math.floor(Math.random() * 2);
        const c0 = minCol + Math.floor(Math.random() * Math.max(1, cols - minCol - w - 2));
        const r0 = 2 + Math.floor(Math.random() * Math.max(1, rows - h - 4));
        let ok = true;
        for (let r = r0 - 3; r <= r0 + h + 3 && ok; r++)
          for (let c = c0 - 3; c <= c0 + w + 3 && ok; c++) if (!free(c, r)) ok = false;
        if (!ok) continue;
        for (let r = r0; r <= r0 + h; r++) for (let c = c0; c <= c0 + w; c++) mark(c, r);
        chips.push({ x: c0 * GRID, y: r0 * GRID, w: w * GRID, h: h * GRID });
        n++;
      }

      // Pins: one trace out of every pin on each chip edge
      for (const ch of chips) {
        const c0 = ch.x / GRID, r0 = ch.y / GRID, c1 = c0 + ch.w / GRID, r1 = r0 + ch.h / GRID;
        for (let c = c0 + 1; c < c1; c++) {
          if (Math.random() < 0.85) walk(c, r0 - 1, 6, 30);
          if (Math.random() < 0.85) walk(c, r1 + 1, 2, 30);
        }
        for (let r = r0 + 1; r < r1; r++) {
          if (Math.random() < 0.85) walk(c0 - 1, r, 4, 30);
          if (Math.random() < 0.85) walk(c1 + 1, r, 0, 30);
        }
      }

      // Loose traces filling the rest of the board
      const loose = Math.round((cols * rows) / 45);
      for (let i = 0; i < loose; i++) {
        const c = Math.floor(Math.random() * cols);
        const r = Math.floor(Math.random() * rows);
        if (free(c, r)) walk(c, r, Math.floor(Math.random() * 4) * 2, 14);
      }
    };

    const drawBoard = () => {
      bctx.clearRect(0, 0, width, height);
      bctx.lineCap = "round";
      bctx.lineJoin = "round";

      bctx.strokeStyle = `rgba(${TEAL}, 0.22)`;
      bctx.lineWidth = 1.2;
      for (const t of traces) {
        bctx.beginPath();
        bctx.moveTo(t.pts[0].x, t.pts[0].y);
        for (const p of t.pts.slice(1)) bctx.lineTo(p.x, p.y);
        bctx.stroke();
      }

      // Pads at the end of each trace
      bctx.fillStyle = "rgba(8, 0, 32, 0.9)";
      bctx.strokeStyle = `rgba(${TEAL}, 0.45)`;
      for (const t of traces) {
        const end = t.pts[t.pts.length - 1];
        bctx.beginPath();
        bctx.arc(end.x, end.y, 2.6, 0, Math.PI * 2);
        bctx.fill();
        bctx.stroke();
      }

      // Chips with pins and a die outline
      for (const ch of chips) {
        bctx.fillStyle = "rgba(10, 4, 40, 0.92)";
        bctx.strokeStyle = `rgba(${TEAL}, 0.55)`;
        bctx.lineWidth = 1.2;
        bctx.beginPath();
        bctx.roundRect(ch.x, ch.y, ch.w, ch.h, 4);
        bctx.fill();
        bctx.stroke();
        bctx.strokeStyle = `rgba(${TEAL}, 0.2)`;
        bctx.beginPath();
        bctx.roundRect(ch.x + 8, ch.y + 8, ch.w - 16, ch.h - 16, 2);
        bctx.stroke();
      }
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      for (const c of [canvas, board]) {
        c.width = width * dpr;
        c.height = height * dpr;
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      bctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
      drawBoard();
      packets = [];
    };

    const glow = (x: number, y: number, r: number, a: number) => {
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, `rgba(${TEAL}, ${a})`);
      g.addColorStop(1, `rgba(${TEAL}, 0)`);
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(board, 0, 0, width, height);

      // Chips breathe slowly
      const breathe = 0.25 + 0.15 * Math.sin(time / 60);
      ctx.strokeStyle = `rgba(${TEAL}, ${breathe})`;
      ctx.lineWidth = 2;
      for (const ch of chips) {
        ctx.beginPath();
        ctx.roundRect(ch.x - 2, ch.y - 2, ch.w + 4, ch.h + 4, 6);
        ctx.stroke();
      }

      // Pads flash when a packet arrives
      for (const t of traces) {
        t.flash.forEach((f, i) => {
          if (f <= 0) return;
          const p = i === 0 ? t.pts[0] : t.pts[t.pts.length - 1];
          glow(p.x, p.y, 10, f);
        });
      }

      // Packets: bright head with a fading tail
      for (const p of packets) {
        for (let k = 6; k >= 0; k--) {
          const d = p.dist - k * 5;
          if (d < 0) continue;
          const at = pointAt(p.trace, p.reverse ? p.trace.total - d : d);
          if (k === 0) glow(at.x, at.y, 9, 0.95);
          else {
            ctx.fillStyle = `rgba(${TEAL}, ${0.5 * (1 - k / 7)})`;
            ctx.beginPath();
            ctx.arc(at.x, at.y, 1.6, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
    };

    const step = () => {
      time++;
      const maxPackets = Math.max(4, Math.round(traces.length / 8));
      if (traces.length && packets.length < maxPackets && Math.random() < 0.08) {
        const trace = traces[Math.floor(Math.random() * traces.length)];
        packets.push({ trace, dist: 0, speed: 1.4 + Math.random() * 1.6, reverse: Math.random() < 0.3 });
      }
      packets = packets.filter((p) => {
        p.dist += p.speed;
        if (p.dist < p.trace.total) return true;
        p.trace.flash[p.reverse ? 0 : 1] = 0.9;
        return false;
      });
      for (const t of traces) t.flash = [Math.max(0, t.flash[0] - 0.03), Math.max(0, t.flash[1] - 0.03)];

      draw();
      frame = requestAnimationFrame(step);
    };

    const start = () => {
      cancelAnimationFrame(frame);
      if (!reduceMotion && visible && !document.hidden) frame = requestAnimationFrame(step);
    };

    const ro = new ResizeObserver(() => {
      resize();
      draw();
    });
    ro.observe(canvas);

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      start();
    });
    io.observe(canvas);

    document.addEventListener("visibilitychange", start);

    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", start);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{
        // Fade the board back behind the headline
        maskImage: "linear-gradient(to right, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.6) 35%, black 60%)",
        WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.6) 35%, black 60%)",
      }}
      aria-hidden="true"
    />
  );
}
