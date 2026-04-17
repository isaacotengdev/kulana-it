"use client";

import { useEffect, useRef } from "react";

// ─── Shared colour helpers ────────────────────────────────────────────────────
const C = (r: number, g: number, b: number, a: number) => `rgba(${r},${g},${b},${a})`;
const CYAN  = (a: number) => C(0, 212, 255, a);
const BLUE  = (a: number) => C(0, 120, 255, a);
const WHITE = (a: number) => C(255, 255, 255, a);
const GREEN = (a: number) => C(0, 230, 160, a);
const RED   = (a: number) => C(255, 70,  70,  a);

// ─── Radial glow helper ───────────────────────────────────────────────────────
function glow(
  ctx: CanvasRenderingContext2D,
  x: number, y: number, r: number,
  inner: string, outer: string
) {
  const g = ctx.createRadialGradient(x, y, 0, x, y, r);
  g.addColorStop(0, inner);
  g.addColorStop(1, outer);
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fillStyle = g;
  ctx.fill();
}

// ─── dot on a moving arc ─────────────────────────────────────────────────────
function packetDot(
  ctx: CanvasRenderingContext2D,
  ax: number, ay: number, bx: number, by: number,
  t: number, colour: string
) {
  const mx = (ax + bx) / 2;
  const my = (ay + by) / 2 - Math.hypot(bx - ax, by - ay) * 0.22;
  const px = (1 - t) ** 2 * ax + 2 * (1 - t) * t * mx + t ** 2 * bx;
  const py = (1 - t) ** 2 * ay + 2 * (1 - t) * t * my + t ** 2 * by;
  glow(ctx, px, py, 9, colour, C(0, 212, 255, 0));
  ctx.beginPath(); ctx.arc(px, py, 3, 0, Math.PI * 2);
  ctx.fillStyle = WHITE(0.95); ctx.fill();
}

// ═══════════════════════════════════════════════════════════════════════════════
//  1.  CORE BANKING
//  Animated candlestick chart + floating currencies + transaction arcs
// ═══════════════════════════════════════════════════════════════════════════════
function drawCoreBanking(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  const base = h * 0.68;

  // ── animated chart lines ──
  [
    { amp: 28, freq: 0.013, speed: 0.0009, slope: -0.03, alpha: 0.45, lw: 2,   col: CYAN  },
    { amp: 18, freq: 0.009, speed: 0.0006, slope: -0.02, alpha: 0.3,  lw: 1.5, col: BLUE  },
    { amp: 12, freq: 0.018, speed: 0.0012, slope: -0.015,alpha: 0.2,  lw: 1,   col: GREEN },
  ].forEach(({ amp, freq, speed, slope, alpha, lw, col }) => {
    ctx.beginPath();
    for (let x = 0; x <= w; x += 2) {
      const y = base + Math.sin(x * freq + t * speed) * amp + slope * x;
      x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.strokeStyle = col(alpha); ctx.lineWidth = lw; ctx.stroke();
  });

  // ── candlestick bars ──
  const cols = 14;
  const bw = (w / cols) * 0.45;
  for (let i = 0; i < cols; i++) {
    const bx = (w / cols) * (i + 0.5);
    const phase = t * 0.0009 + i * 0.55;
    const bh = 16 + Math.abs(Math.sin(phase)) * 55;
    const by = h * 0.65 - bh;
    const up = Math.sin(phase + i) > 0;
    ctx.fillStyle   = up ? CYAN(0.3) : BLUE(0.22);
    ctx.strokeStyle = up ? CYAN(0.5) : BLUE(0.38);
    ctx.lineWidth = 0.8;
    ctx.beginPath(); ctx.rect(bx - bw / 2, by, bw, bh); ctx.fill(); ctx.stroke();
    // wick
    ctx.beginPath(); ctx.moveTo(bx, by - bh * 0.25); ctx.lineTo(bx, by + bh + bh * 0.15);
    ctx.strokeStyle = up ? CYAN(0.45) : BLUE(0.3); ctx.lineWidth = 1; ctx.stroke();
  }

  // ── floating currency symbols ──
  const symbols = ["$", "£", "€", "₵", "₦", "﷼", "¥"];
  symbols.forEach((sym, i) => {
    const sx = (w / symbols.length) * i + w / (symbols.length * 2);
    const sy = h - ((t * 0.04 + i * 65) % (h + 40));
    const a = 0.1 + Math.abs(Math.sin(t * 0.001 + i)) * 0.18;
    ctx.font = `bold ${18 + (i % 3) * 6}px sans-serif`;
    ctx.fillStyle = WHITE(a);
    ctx.textAlign = "center";
    ctx.fillText(sym, sx, sy);
  });

  // ── bank-branch transaction nodes ──
  const nodes = [
    { x: w * 0.08, y: h * 0.32 }, { x: w * 0.26, y: h * 0.22 },
    { x: w * 0.50, y: h * 0.30 }, { x: w * 0.74, y: h * 0.20 },
    { x: w * 0.92, y: h * 0.28 },
  ];
  nodes.forEach((a, i) => {
    if (i === nodes.length - 1) return;
    const b = nodes[i + 1];
    ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
    ctx.strokeStyle = CYAN(0.18); ctx.lineWidth = 1; ctx.stroke();
    const p = ((t * 0.00028 + i * 0.22) % 1);
    packetDot(ctx, a.x, a.y, b.x, b.y, p, CYAN(0.9));
  });
  // second set of reverse packets
  nodes.forEach((a, i) => {
    if (i === 0) return;
    const b = nodes[i - 1];
    const p = ((t * 0.00022 + i * 0.31) % 1);
    packetDot(ctx, a.x, a.y, b.x, b.y, p, GREEN(0.8));
  });
  nodes.forEach(({ x, y }, i) => {
    const pulse = (Math.sin(t * 0.002 + i * 1.2) + 1) / 2;
    ctx.beginPath(); ctx.arc(x, y, 16 + pulse * 8, 0, Math.PI * 2);
    ctx.strokeStyle = CYAN(0.28 - pulse * 0.18); ctx.lineWidth = 1.5; ctx.stroke();
    glow(ctx, x, y, 14, CYAN(0.35 + pulse * 0.1), CYAN(0));
    ctx.beginPath(); ctx.arc(x, y, 6, 0, Math.PI * 2);
    ctx.fillStyle = WHITE(0.9); ctx.fill();
  });
}

// ═══════════════════════════════════════════════════════════════════════════════
//  2.  DATA CENTER & SOC
//  Server racks + central security shield + inbound threat particles
// ═══════════════════════════════════════════════════════════════════════════════
function drawDataCenter(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  const cx = w / 2, cy = h / 2;
  const SHIELD = Math.min(w, h) * 0.17;

  // ── server racks (left + right) ──
  const drawRack = (ox: number, oy: number) => {
    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 3; c++) {
        const rx = ox + c * 46, ry = oy + r * 17;
        ctx.fillStyle = BLUE(0.12); ctx.strokeStyle = CYAN(0.22); ctx.lineWidth = 0.6;
        ctx.beginPath(); ctx.rect(rx, ry, 40, 12); ctx.fill(); ctx.stroke();
        const on = Math.sin(t * 0.003 + r * 0.9 + c * 1.7) > -0.2;
        ctx.beginPath(); ctx.arc(rx + 34, ry + 6, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = on ? CYAN(0.95) : CYAN(0.18); ctx.fill();
        if (on) {
          const fw = (Math.sin(t * 0.004 + r + c) + 1) / 2 * 22;
          ctx.fillStyle = CYAN(0.14); ctx.fillRect(rx + 4, ry + 4, fw, 4);
        }
      }
    }
  };
  drawRack(w * 0.04, h * 0.22);
  drawRack(w * 0.70, h * 0.22);

  // ── shield glow halo ──
  const sp = (Math.sin(t * 0.0014) + 1) / 2;
  glow(ctx, cx, cy, SHIELD * 2.2, CYAN(0.12 + sp * 0.08), CYAN(0));

  // ── shield shape ──
  ctx.save(); ctx.translate(cx, cy);
  const s = SHIELD;
  ctx.beginPath();
  ctx.moveTo(0, -s);
  ctx.lineTo(s * 0.68, -s * 0.48);
  ctx.lineTo(s * 0.68, s * 0.18);
  ctx.quadraticCurveTo(s * 0.68, s * 0.82, 0, s);
  ctx.quadraticCurveTo(-s * 0.68, s * 0.82, -s * 0.68, s * 0.18);
  ctx.lineTo(-s * 0.68, -s * 0.48);
  ctx.closePath();
  ctx.fillStyle = CYAN(0.07); ctx.fill();
  ctx.strokeStyle = CYAN(0.48 + sp * 0.28); ctx.lineWidth = 2; ctx.stroke();
  // checkmark inside
  ctx.strokeStyle = WHITE(0.55); ctx.lineWidth = 2.5; ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(-s * 0.22, 0); ctx.lineTo(-s * 0.04, s * 0.22); ctx.lineTo(s * 0.28, -s * 0.25);
  ctx.stroke();
  ctx.restore();

  // ── inbound threat particles ──
  for (let i = 0; i < 10; i++) {
    const angle = (i / 10) * Math.PI * 2 + t * 0.00035;
    const maxDist = SHIELD * 2.8;
    const dist = maxDist - ((t * 0.045 + i * 18) % maxDist);
    if (dist < SHIELD * 0.9) continue;
    const px = cx + Math.cos(angle) * dist;
    const py = cy + Math.sin(angle) * dist;
    ctx.beginPath(); ctx.arc(px, py, 3.5, 0, Math.PI * 2);
    ctx.fillStyle = RED(0.65 - dist / (maxDist * 2));
    ctx.fill();
    ctx.beginPath(); ctx.moveTo(px, py);
    ctx.lineTo(px - Math.cos(angle) * 14, py - Math.sin(angle) * 14);
    ctx.strokeStyle = RED(0.22); ctx.lineWidth = 1.5; ctx.stroke();
  }

  // ── data lines: racks → shield ──
  [[w * 0.21, h * 0.33], [w * 0.21, h * 0.56], [w * 0.79, h * 0.33], [w * 0.79, h * 0.56]].forEach(([px, py], i) => {
    ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(cx, cy);
    ctx.strokeStyle = CYAN(0.1); ctx.lineWidth = 1;
    ctx.setLineDash([4, 7]); ctx.stroke(); ctx.setLineDash([]);
    const p = ((t * 0.00032 + i * 0.25) % 1);
    const dx = px + (cx - px) * p, dy = py + (cy - py) * p;
    glow(ctx, dx, dy, 7, CYAN(0.85), CYAN(0));
    ctx.beginPath(); ctx.arc(dx, dy, 2.5, 0, Math.PI * 2);
    ctx.fillStyle = WHITE(0.9); ctx.fill();
  });

  // ── binary rain (top) ──
  for (let i = 0; i < 12; i++) {
    const bx = (w / 12) * i + w / 24;
    const by = ((t * 0.06 + i * 30) % (h * 0.18));
    ctx.font = "9px monospace";
    ctx.fillStyle = CYAN(0.18);
    ctx.textAlign = "center";
    ctx.fillText((i + Math.floor(t * 0.01)) % 2 === 0 ? "1" : "0", bx, by + 10);
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
//  3.  ERP & CRM
//  Department ring + central hub + animated data flow
// ═══════════════════════════════════════════════════════════════════════════════
function drawErpCrm(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  const cx = w / 2, cy = h / 2;
  const R = Math.min(w, h) * 0.30;
  const depts = ["Finance", "HR", "Sales", "Supply", "CRM", "Analytics"];
  const dCols = [CYAN, BLUE, GREEN, (a:number)=>C(100,180,255,a), (a:number)=>C(0,200,200,a), (a:number)=>C(160,220,255,a)];

  const pts = depts.map((_, i) => {
    const a = (i / depts.length) * Math.PI * 2 - Math.PI / 2;
    return { x: cx + Math.cos(a) * R, y: cy + Math.sin(a) * R };
  });

  // faint cross-connections
  for (let i = 0; i < pts.length; i++)
    for (let j = i + 1; j < pts.length; j++) {
      ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y);
      ctx.strokeStyle = CYAN(0.06); ctx.lineWidth = 0.7; ctx.stroke();
    }

  // ring arcs with packets
  pts.forEach((a, i) => {
    const b = pts[(i + 1) % pts.length];
    ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
    ctx.strokeStyle = CYAN(0.22); ctx.lineWidth = 1; ctx.stroke();
    const p = ((t * 0.00038 + i * 0.167) % 1);
    packetDot(ctx, a.x, a.y, b.x, b.y, p, CYAN(0.9));
  });

  // spokes to center with packets
  pts.forEach((n, i) => {
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(n.x, n.y);
    ctx.strokeStyle = CYAN(0.1); ctx.lineWidth = 1;
    ctx.setLineDash([3, 6]); ctx.stroke(); ctx.setLineDash([]);
    const p = ((t * 0.00042 + i * 0.22) % 1);
    const dx = cx + (n.x - cx) * p, dy = cy + (n.y - cy) * p;
    ctx.beginPath(); ctx.arc(dx, dy, 2.5, 0, Math.PI * 2);
    ctx.fillStyle = dCols[i](0.75); ctx.fill();
  });

  // hub
  const hp = (Math.sin(t * 0.002) + 1) / 2;
  glow(ctx, cx, cy, 50 + hp * 18, CYAN(0.2 + hp * 0.08), CYAN(0));
  ctx.beginPath(); ctx.arc(cx, cy, 22, 0, Math.PI * 2);
  ctx.fillStyle = CYAN(0.1); ctx.strokeStyle = CYAN(0.55); ctx.lineWidth = 2;
  ctx.fill(); ctx.stroke();
  ctx.font = "8px sans-serif"; ctx.fillStyle = WHITE(0.7); ctx.textAlign = "center";
  ctx.fillText("ERP/CRM", cx, cy + 3);

  // dept nodes
  pts.forEach(({ x, y }, i) => {
    const pulse = (Math.sin(t * 0.002 + i) + 1) / 2;
    ctx.beginPath(); ctx.arc(x, y, 22 + pulse * 9, 0, Math.PI * 2);
    ctx.strokeStyle = dCols[i](0.22 - pulse * 0.12); ctx.lineWidth = 1.5; ctx.stroke();
    ctx.beginPath(); ctx.arc(x, y, 14, 0, Math.PI * 2);
    ctx.fillStyle = dCols[i](0.15); ctx.strokeStyle = dCols[i](0.65); ctx.lineWidth = 1.5;
    ctx.fill(); ctx.stroke();
    ctx.font = "9px sans-serif"; ctx.fillStyle = WHITE(0.7); ctx.textAlign = "center";
    ctx.fillText(depts[i], x, y + 28);
  });
}

// ═══════════════════════════════════════════════════════════════════════════════
//  4.  DIGITAL INTEGRATIONS & API
//  Services left ↔ API Gateway ↔ Services right
// ═══════════════════════════════════════════════════════════════════════════════
function drawDigitalIntegrations(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  const cx = w / 2, cy = h / 2;
  const gw = 82, gh = 130;
  const lSvcs = ["CRM", "ERP", "Mobile", "Legacy"];
  const rSvcs = ["Cloud", "Analytics", "IoT", "Partner"];

  const lNodes = lSvcs.map((n, i) => ({ name: n, x: w * 0.10, y: cy - 56 + i * 38 }));
  const rNodes = rSvcs.map((n, i) => ({ name: n, x: w * 0.90, y: cy - 56 + i * 38 }));

  // gateway glow
  glow(ctx, cx, cy, 90, CYAN(0.13), CYAN(0));
  ctx.fillStyle = CYAN(0.07); ctx.strokeStyle = CYAN(0.5); ctx.lineWidth = 1.5;
  ctx.beginPath();
  (ctx as CanvasRenderingContext2D & { roundRect: (x:number,y:number,w:number,h:number,r:number)=>void })
    .roundRect(cx - gw/2, cy - gh/2, gw, gh, 14);
  ctx.fill(); ctx.stroke();
  ctx.font = "bold 11px sans-serif"; ctx.fillStyle = WHITE(0.7); ctx.textAlign = "center";
  ctx.fillText("API", cx, cy - 8);
  ctx.font = "9px sans-serif"; ctx.fillStyle = CYAN(0.85); ctx.fillText("GATEWAY", cx, cy + 8);

  // internal data streams through gateway
  for (let i = 0; i < 5; i++) {
    const sy = cy - gh / 2 + 16 + i * 20;
    if (sy > cy + gh / 2 - 10) continue;
    const dir = i % 2 === 0 ? 1 : -1;
    const p = ((t * (0.0003 + i * 0.00005) + i * 0.2) % 1);
    const sx = dir > 0 ? cx - gw / 2 + 5 + p * (gw - 10) : cx + gw / 2 - 5 - p * (gw - 10);
    ctx.beginPath(); ctx.arc(sx, sy, 2.5, 0, Math.PI * 2);
    ctx.fillStyle = dir > 0 ? CYAN(0.75) : GREEN(0.75); ctx.fill();
  }

  // connections + packets
  [...lNodes.map(n => ({ ...n, left: true })), ...rNodes.map(n => ({ ...n, left: false }))].forEach((node, idx) => {
    const gateX = node.left ? cx - gw / 2 : cx + gw / 2;
    const gateY = cy - 40 + (idx % 4) * 26;
    ctx.beginPath(); ctx.moveTo(node.x + (node.left ? 24 : -24), node.y); ctx.lineTo(gateX, gateY);
    ctx.strokeStyle = CYAN(0.14); ctx.lineWidth = 1; ctx.stroke();

    const p = ((t * 0.00038 + idx * 0.26) % 1);
    const fromX = node.left ? node.x + 24 : gateX;
    const toX   = node.left ? gateX : node.x - 24;
    const dx = fromX + (toX - fromX) * p;
    const dy = node.y + (gateY - node.y) * p;
    ctx.beginPath(); ctx.arc(dx, dy, 3.5, 0, Math.PI * 2);
    ctx.fillStyle = node.left ? CYAN(0.85) : GREEN(0.85); ctx.fill();

    // service box
    ctx.beginPath();
    (ctx as CanvasRenderingContext2D & { roundRect: (x:number,y:number,w:number,h:number,r:number)=>void })
      .roundRect(node.x - 24, node.y - 12, 48, 24, 7);
    ctx.fillStyle = BLUE(0.12); ctx.strokeStyle = CYAN(0.32); ctx.lineWidth = 1;
    ctx.fill(); ctx.stroke();
    ctx.font = "9px sans-serif"; ctx.fillStyle = WHITE(0.65); ctx.textAlign = "center";
    ctx.fillText(node.name, node.x, node.y + 4);
  });
}

// ═══════════════════════════════════════════════════════════════════════════════
//  5.  PROJECT MANAGEMENT
//  Gantt chart + milestone diamonds + animated scan line
// ═══════════════════════════════════════════════════════════════════════════════
function drawProjectManagement(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  const L = w * 0.10, R = w * 0.92, TW = R - L;
  const TOP = h * 0.16, timeY = h * 0.76;
  const tasks = [
    { name: "Discovery",   s: 0.00, e: 0.24, row: 0 },
    { name: "Planning",    s: 0.14, e: 0.44, row: 1 },
    { name: "Development", s: 0.34, e: 0.74, row: 2 },
    { name: "Testing",     s: 0.64, e: 0.87, row: 3 },
    { name: "Launch",      s: 0.81, e: 1.00, row: 4 },
  ];
  const rowH = (timeY - TOP) / 5;

  // zebra background
  tasks.forEach(({ row }) => {
    if (row % 2 === 0) {
      ctx.fillStyle = BLUE(0.04);
      ctx.fillRect(L, TOP + row * rowH, TW, rowH);
    }
  });

  // today scan line
  const scanX = L + ((t * 0.00014) % 1) * TW;
  ctx.beginPath(); ctx.moveTo(scanX, TOP - 10); ctx.lineTo(scanX, timeY + 14);
  ctx.strokeStyle = CYAN(0.38); ctx.lineWidth = 1.5;
  ctx.setLineDash([4, 4]); ctx.stroke(); ctx.setLineDash([]);

  // bars
  tasks.forEach(({ name, s, e, row }, idx) => {
    const bx = L + s * TW, bw = (e - s) * TW, by = TOP + row * rowH + rowH * 0.22, bh = rowH * 0.55;
    ctx.fillStyle = BLUE(0.07); ctx.fillRect(L, by, TW, bh);

    const fill = Math.min(1, ((t * 0.00018 + idx * 0.18) % 1.8));
    const fw = bw * Math.min(1, fill * 1.4);
    const gr = ctx.createLinearGradient(bx, 0, bx + fw, 0);
    gr.addColorStop(0, CYAN(0.5)); gr.addColorStop(1, GREEN(0.35));
    ctx.fillStyle = gr; ctx.fillRect(bx, by, fw, bh);
    ctx.strokeStyle = CYAN(0.22); ctx.lineWidth = 1; ctx.strokeRect(bx, by, bw, bh);

    ctx.font = "10px sans-serif"; ctx.fillStyle = WHITE(0.55);
    ctx.textAlign = "left"; ctx.fillText(name, L - 4, by + bh * 0.68);

    if (fill >= 0.75) {
      ctx.font = "13px sans-serif"; ctx.fillStyle = GREEN(0.9);
      ctx.textAlign = "center"; ctx.fillText("✓", bx + bw + 14, by + bh * 0.72);
    }
  });

  // timeline axis
  ctx.beginPath(); ctx.moveTo(L, timeY); ctx.lineTo(R, timeY);
  ctx.strokeStyle = CYAN(0.3); ctx.lineWidth = 2; ctx.stroke();

  // milestone diamonds
  [0, 0.25, 0.50, 0.75, 1.0].forEach((frac, i) => {
    const mx = L + frac * TW;
    const pulse = (Math.sin(t * 0.002 + i * 1.3) + 1) / 2;
    ctx.beginPath(); ctx.moveTo(mx, TOP - 12); ctx.lineTo(mx, timeY);
    ctx.strokeStyle = CYAN(0.1); ctx.lineWidth = 1;
    ctx.setLineDash([3, 5]); ctx.stroke(); ctx.setLineDash([]);
    ctx.save(); ctx.translate(mx, timeY); ctx.rotate(Math.PI / 4);
    ctx.fillStyle = CYAN(0.7 + pulse * 0.2);
    ctx.fillRect(-6, -6, 12, 12); ctx.restore();
    ctx.beginPath(); ctx.arc(mx, timeY, 14 + pulse * 7, 0, Math.PI * 2);
    ctx.strokeStyle = CYAN(0.22 - pulse * 0.14); ctx.lineWidth = 1; ctx.stroke();
  });
}

// ═══════════════════════════════════════════════════════════════════════════════
//  6.  PREDICTIVE ANALYSIS
//  Scatter plot + regression line + future prediction cone
// ═══════════════════════════════════════════════════════════════════════════════
function drawPredictiveAnalysis(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  const L = w * 0.08, R = w * 0.74, T = h * 0.12, B = h * 0.84;
  const CW = R - L, CH = B - T;

  // axes
  ctx.beginPath(); ctx.moveTo(L, T); ctx.lineTo(L, B); ctx.lineTo(R + CW * 0.32, B);
  ctx.strokeStyle = CYAN(0.28); ctx.lineWidth = 1.5; ctx.stroke();

  // grid
  for (let i = 1; i <= 4; i++) {
    ctx.strokeStyle = CYAN(0.07); ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(L, T + CH / 4 * i); ctx.lineTo(R + CW * 0.32, T + CH / 4 * i); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(L + CW / 4 * i, T); ctx.lineTo(L + CW / 4 * i, B); ctx.stroke();
  }

  // scatter data
  const pts: [number, number][] = [
    [.06,.85],[.13,.78],[.19,.73],[.24,.68],[.30,.62],[.36,.56],[.42,.52],
    [.48,.47],[.54,.41],[.60,.36],[.66,.32],[.72,.27],[.79,.22],[.86,.18],
  ];
  pts.forEach(([px, py], i) => {
    const alpha = Math.min(1, t * 0.00028 - i * 0.045);
    if (alpha <= 0) return;
    const scatter = Math.sin(i * 7.9) * CH * 0.045;
    const sx = L + px * CW, sy = T + py * CH + scatter;
    glow(ctx, sx, sy, 10, CYAN(alpha * 0.35), CYAN(0));
    ctx.beginPath(); ctx.arc(sx, sy, 4.5, 0, Math.PI * 2);
    ctx.fillStyle = CYAN(Math.min(0.85, alpha));
    ctx.strokeStyle = WHITE(Math.min(0.3, alpha)); ctx.lineWidth = 1;
    ctx.fill(); ctx.stroke();
  });

  // regression line
  const rA = Math.min(0.6, t * 0.00025);
  ctx.beginPath(); ctx.moveTo(L + CW * .05, T + CH * .86); ctx.lineTo(R, T + CH * .14);
  ctx.strokeStyle = GREEN(rA); ctx.lineWidth = 2.2; ctx.stroke();

  // future cone
  const fA = Math.min(0.45, t * 0.0002);
  const predX = R, predY = T + CH * .11;
  const endX = R + CW * 0.3;
  ctx.beginPath(); ctx.moveTo(predX, predY);
  ctx.lineTo(endX, predY - CH * 0.13); ctx.lineTo(endX, predY + CH * 0.13);
  ctx.closePath();
  ctx.fillStyle = GREEN(fA * 0.3); ctx.fill();
  ctx.strokeStyle = GREEN(fA * 0.6); ctx.lineWidth = 1; ctx.stroke();
  ctx.beginPath(); ctx.moveTo(predX, predY); ctx.lineTo(endX, predY - CH * 0.05);
  ctx.strokeStyle = GREEN(fA); ctx.lineWidth = 1.8;
  ctx.setLineDash([5, 4]); ctx.stroke(); ctx.setLineDash([]);

  // scanning dot
  const sp = (t * 0.00026) % 1.4;
  if (sp < 1) {
    const dx = L + CW * .05 + sp * (R - L - CW * .05);
    const dy = T + CH * (.86 - sp * .72);
    glow(ctx, dx, dy, 14, GREEN(0.85), GREEN(0));
    ctx.beginPath(); ctx.arc(dx, dy, 5, 0, Math.PI * 2);
    ctx.fillStyle = WHITE(0.9); ctx.fill();
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
//  7.  AI & CLOUD AI
//  Multi-layer neural network with firing pulses + cloud shapes
// ═══════════════════════════════════════════════════════════════════════════════
function drawAiCloud(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  const cx = w / 2, cy = h / 2;
  const layers = [
    { x: cx - w * 0.34, n: 4 }, { x: cx - w * 0.14, n: 6 },
    { x: cx + w * 0.06, n: 6 }, { x: cx + w * 0.26, n: 4 },
    { x: cx + w * 0.43, n: 2 },
  ];
  const LH = h * 0.68;

  type Node = { x: number; y: number; li: number; ni: number };
  const nodes: Node[] = [];
  layers.forEach(({ x, n }, li) => {
    for (let ni = 0; ni < n; ni++) {
      nodes.push({ x, y: cy - LH / 2 + (LH / (n - 1 || 1)) * ni + (n === 1 ? LH / 2 : 0), li, ni });
    }
  });

  // connections
  for (let li = 0; li < layers.length - 1; li++) {
    const from = nodes.filter(n => n.li === li);
    const to   = nodes.filter(n => n.li === li + 1);
    from.forEach(f => to.forEach(tt => {
      const act = (Math.sin(t * 0.001 + f.ni * 0.35 + tt.ni * 0.6) + 1) / 2;
      ctx.beginPath(); ctx.moveTo(f.x, f.y); ctx.lineTo(tt.x, tt.y);
      ctx.strokeStyle = CYAN(0.04 + act * 0.22); ctx.lineWidth = 0.5 + act * 0.6; ctx.stroke();
      if (act > 0.6) {
        const p = ((t * 0.0009 + f.ni * 0.18 + tt.ni * 0.12 + li * 0.27) % 1);
        const px = f.x + (tt.x - f.x) * p, py = f.y + (tt.y - f.y) * p;
        ctx.beginPath(); ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = CYAN(act * 0.85); ctx.fill();
      }
    }));
  }

  // neurons
  nodes.forEach(({ x, y, li, ni }) => {
    const act = (Math.sin(t * 0.0016 + ni * 0.85 + li * 0.7) + 1) / 2;
    const r = 7 + act * 5;
    glow(ctx, x, y, r * 2.8, CYAN(act * 0.42), CYAN(0));
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = CYAN(0.1 + act * 0.22); ctx.strokeStyle = CYAN(0.4 + act * 0.42);
    ctx.lineWidth = 1.5; ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.arc(x, y, 3, 0, Math.PI * 2);
    ctx.fillStyle = WHITE(0.65 + act * 0.32); ctx.fill();
  });

  // label layers
  const labels = ["Input", "Hidden", "Hidden", "Hidden", "Output"];
  layers.forEach(({ x }, li) => {
    ctx.font = "8px sans-serif"; ctx.fillStyle = CYAN(0.4);
    ctx.textAlign = "center"; ctx.fillText(labels[li], x, cy + LH / 2 + 18);
  });

  // clouds top
  [[w * 0.14, h * 0.1, 20], [w * 0.5, h * 0.06, 26], [w * 0.86, h * 0.1, 18]].forEach(([cx2, cy2, s]) => {
    ctx.beginPath();
    ctx.arc(cx2, cy2, s, Math.PI, 0);
    ctx.arc(cx2 + s * 0.65, cy2, s * 0.65, Math.PI, 0);
    ctx.arc(cx2 - s * 0.55, cy2, s * 0.55, Math.PI, 0);
    ctx.arc(cx2 - s * 0.05, cy2 + s * 0.35, s * 1.05, 0, Math.PI);
    ctx.closePath();
    ctx.fillStyle = BLUE(0.09); ctx.strokeStyle = BLUE(0.22); ctx.lineWidth = 1;
    ctx.fill(); ctx.stroke();
  });
}

// ═══════════════════════════════════════════════════════════════════════════════
//  8.  DIGITAL TRANSFORMATION
//  Pixel grid: blocky squares → glowing circles, wave sweeps left→right
// ═══════════════════════════════════════════════════════════════════════════════
function drawDigitalTransformation(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  const COLS = 22, ROWS = 9;
  const cw = w / COLS, rh = h / ROWS;
  const waveX = ((t * 0.00014) % 1.25) * w;

  for (let col = 0; col < COLS; col++) {
    for (let row = 0; row < ROWS; row++) {
      const cx2 = col * cw + cw / 2, cy2 = row * rh + rh / 2;
      const d = cx2 - waveX;
      const tf = Math.max(0, Math.min(1, 1 - d / (w * 0.22)));
      const sz = cw * 0.18 + tf * cw * 0.14;
      const a = 0.07 + tf * 0.28;

      if (tf < 0.5) {
        ctx.fillStyle = BLUE(a); ctx.strokeStyle = BLUE(a * 1.6); ctx.lineWidth = 0.5;
        ctx.beginPath(); ctx.rect(cx2 - sz, cy2 - sz, sz * 2, sz * 2);
        ctx.fill(); ctx.stroke();
      } else {
        glow(ctx, cx2, cy2, sz * 2.2, CYAN(a * 1.4), CYAN(0));
        ctx.beginPath(); ctx.arc(cx2, cy2, sz, 0, Math.PI * 2);
        ctx.fillStyle = CYAN(a); ctx.strokeStyle = CYAN(a * 2.2); ctx.lineWidth = 0.7;
        ctx.fill(); ctx.stroke();
      }
      if (Math.abs(d) < cw * 2) {
        const fa = (1 - Math.abs(d) / (cw * 2)) * 0.7;
        ctx.beginPath(); ctx.arc(cx2, cy2, sz * 0.35, 0, Math.PI * 2);
        ctx.fillStyle = WHITE(fa * 0.55); ctx.fill();
      }
    }
  }

  // wave front vertical line
  const wg = ctx.createLinearGradient(waveX - 32, 0, waveX + 12, 0);
  wg.addColorStop(0, CYAN(0)); wg.addColorStop(0.65, CYAN(0.55)); wg.addColorStop(1, WHITE(0.35));
  ctx.beginPath(); ctx.moveTo(waveX, 0); ctx.lineTo(waveX, h);
  ctx.strokeStyle = wg; ctx.lineWidth = 2.2; ctx.stroke();
}

// ═══════════════════════════════════════════════════════════════════════════════
//  9.  CLOUD COMPUTING
//  Server farm at bottom → data ascending → cloud instances at top
// ═══════════════════════════════════════════════════════════════════════════════
function drawCloudComputing(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  const clouds = [
    { x: w * 0.18, y: h * 0.15, s: 38 }, { x: w * 0.50, y: h * 0.10, s: 50 }, { x: w * 0.82, y: h * 0.15, s: 38 },
  ];
  clouds.forEach(({ x, y, s }, i) => {
    const pulse = (Math.sin(t * 0.0013 + i * 1.6) + 1) / 2;
    const sc = s * (1 + pulse * 0.04);
    ctx.beginPath();
    ctx.arc(x, y, sc, Math.PI, 0);
    ctx.arc(x + sc * 0.62, y, sc * 0.62, Math.PI, 0);
    ctx.arc(x - sc * 0.52, y, sc * 0.52, Math.PI, 0);
    ctx.arc(x - sc * 0.05, y + sc * 0.32, sc * 1.08, 0, Math.PI);
    ctx.closePath();
    ctx.fillStyle = BLUE(0.12); ctx.strokeStyle = CYAN(0.3 + pulse * 0.18); ctx.lineWidth = 1.5;
    ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.arc(x, y, sc * 1.3 + pulse * sc * 0.28, 0, Math.PI * 2);
    ctx.strokeStyle = CYAN(0.15 - pulse * 0.12); ctx.lineWidth = 1; ctx.stroke();
    // cloud label
    ctx.font = "9px sans-serif"; ctx.fillStyle = CYAN(0.6);
    ctx.textAlign = "center"; ctx.fillText(`Node ${i + 1}`, x, y + 6);
  });

  // servers at bottom
  const sCount = 6, sw = 36, sh = 18, sY = h * 0.83;
  const sSpacing = w / (sCount + 1);
  for (let i = 0; i < sCount; i++) {
    const sx = sSpacing * (i + 1);
    ctx.fillStyle = BLUE(0.13); ctx.strokeStyle = CYAN(0.28); ctx.lineWidth = 1;
    ctx.beginPath(); ctx.rect(sx - sw / 2, sY - sh / 2, sw, sh); ctx.fill(); ctx.stroke();
    const led = Math.sin(t * 0.003 + i * 1.8) > 0;
    ctx.beginPath(); ctx.arc(sx + sw / 2 - 5, sY, 2.5, 0, Math.PI * 2);
    ctx.fillStyle = led ? CYAN(0.95) : CYAN(0.18); ctx.fill();

    const cloud = clouds[Math.floor(i * clouds.length / sCount)];
    ctx.beginPath(); ctx.moveTo(sx, sY - sh / 2); ctx.lineTo(cloud.x, cloud.y + 22);
    ctx.strokeStyle = CYAN(0.07); ctx.lineWidth = 1;
    ctx.setLineDash([3, 7]); ctx.stroke(); ctx.setLineDash([]);

    const p = ((t * 0.00032 + i * 0.17) % 1);
    const px = sx + (cloud.x - sx) * p, py = sY - sh/2 + (cloud.y + 22 - sY + sh/2) * p;
    glow(ctx, px, py, 8, CYAN(0.85), CYAN(0));
    ctx.beginPath(); ctx.arc(px, py, 2.8, 0, Math.PI * 2);
    ctx.fillStyle = WHITE(0.9); ctx.fill();
  }

  // horizontal distribution grid
  for (let i = 0; i < 3; i++) {
    const gy = h * 0.32 + i * h * 0.1;
    ctx.beginPath(); ctx.moveTo(w * 0.04, gy); ctx.lineTo(w * 0.96, gy);
    ctx.strokeStyle = CYAN(0.06); ctx.lineWidth = 1;
    ctx.setLineDash([4, 9]); ctx.stroke(); ctx.setLineDash([]);
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
//  10.  NEXT-GEN DATA SCIENCE
//  Data stream → ML funnel → live charts (line + bars + scatter)
// ═══════════════════════════════════════════════════════════════════════════════
function drawNextGenDataScience(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  const cy = h / 2;
  const funnelX = w * 0.30, outX = w * 0.46;

  // input streams
  for (let i = 0; i < 8; i++) {
    const sy = cy - h * 0.26 + i * (h * 0.52 / 7);
    ctx.beginPath(); ctx.moveTo(0, sy); ctx.lineTo(funnelX, sy);
    ctx.strokeStyle = CYAN(0.1); ctx.lineWidth = 1; ctx.stroke();
    const p = ((t * (0.0003 + i * 0.000035) + i * 0.13) % 1);
    ctx.beginPath(); ctx.arc(p * funnelX, sy, 3, 0, Math.PI * 2);
    ctx.fillStyle = CYAN(0.7); ctx.fill();
  }

  // ML funnel
  ctx.beginPath();
  ctx.moveTo(funnelX, cy - h * 0.27); ctx.lineTo(funnelX + w * 0.11, cy - h * 0.06);
  ctx.lineTo(funnelX + w * 0.11, cy + h * 0.06); ctx.lineTo(funnelX, cy + h * 0.27);
  ctx.closePath();
  ctx.fillStyle = BLUE(0.1); ctx.strokeStyle = CYAN(0.35); ctx.lineWidth = 1.5;
  ctx.fill(); ctx.stroke();
  ctx.font = "bold 9px sans-serif"; ctx.fillStyle = CYAN(0.75); ctx.textAlign = "center";
  ctx.fillText("ML", funnelX + w * 0.055, cy - 3);
  ctx.font = "8px sans-serif"; ctx.fillText("MODEL", funnelX + w * 0.055, cy + 9);

  // line chart output (top right)
  ctx.beginPath();
  for (let x = 0; x <= w * 0.22; x += 4) {
    const y = h * 0.26 + Math.sin(x * 0.055 + t * 0.002) * h * 0.09 + Math.cos(x * 0.032) * h * 0.04;
    x === 0 ? ctx.moveTo(outX + x, y) : ctx.lineTo(outX + x, y);
  }
  ctx.strokeStyle = GREEN(0.55); ctx.lineWidth = 2; ctx.stroke();
  // chart axis
  ctx.beginPath(); ctx.moveTo(outX, h * 0.15); ctx.lineTo(outX, h * 0.38);
  ctx.lineTo(outX + w * 0.22, h * 0.38);
  ctx.strokeStyle = CYAN(0.2); ctx.lineWidth = 1; ctx.stroke();

  // bar chart (middle right)
  const bCount = 7, bMaxH = h * 0.16, bw = w * 0.19 / bCount;
  for (let i = 0; i < bCount; i++) {
    const bh = bMaxH * (0.28 + (Math.sin(t * 0.0012 + i * 0.95) + 1) / 2 * 0.72);
    ctx.fillStyle = CYAN(0.22 + (i / bCount) * 0.18);
    ctx.fillRect(outX + 4 + i * bw * 1.12, cy + h * 0.02 - bh, bw * 0.85, bh);
  }
  ctx.beginPath(); ctx.moveTo(outX, cy + h * 0.02); ctx.lineTo(outX + w * 0.22, cy + h * 0.02);
  ctx.strokeStyle = CYAN(0.2); ctx.lineWidth = 1; ctx.stroke();

  // scatter (bottom right)
  for (let i = 0; i < 16; i++) {
    const sx = outX + Math.sin(i * 2.4) * w * 0.1 + w * 0.1;
    const sy = h * 0.72 + Math.cos(i * 1.9) * h * 0.11;
    const a = (Math.sin(t * 0.0012 + i * 0.6) + 1) / 2 * 0.65 + 0.18;
    ctx.beginPath(); ctx.arc(sx, sy, 3.8, 0, Math.PI * 2);
    ctx.fillStyle = GREEN(a); ctx.fill();
  }

  // output stream to right edge
  for (let i = 0; i < 5; i++) {
    const sy = cy - h * 0.17 + i * h * 0.085;
    const p = ((t * 0.00038 + i * 0.2) % 1);
    const px = outX + w * 0.24 + p * (w - outX - w * 0.24);
    ctx.beginPath(); ctx.arc(px, sy, 2.8, 0, Math.PI * 2);
    ctx.fillStyle = GREEN(0.65); ctx.fill();
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
//  11.  OUR SERVICES  –  orbiting service constellation
// ═══════════════════════════════════════════════════════════════════════════════
function drawOurServices(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  const cx = w / 2, cy = h / 2;
  const R = Math.min(w, h) * 0.28;
  const labels = ["Core Banking", "Data Center", "ERP & CRM", "API Mgmt", "PMO", "Predictive"];
  const spin = t * 0.00018;

  // orbit rings
  [R, R * 0.56].forEach((r, i) => {
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.strokeStyle = CYAN(0.09); ctx.lineWidth = 1;
    ctx.setLineDash(i === 0 ? [4, 9] : [3, 7]); ctx.stroke(); ctx.setLineDash([]);
  });

  // central hub
  const hp = (Math.sin(t * 0.0018) + 1) / 2;
  glow(ctx, cx, cy, 55 + hp * 18, CYAN(0.2 + hp * 0.08), CYAN(0));
  ctx.beginPath(); ctx.arc(cx, cy, 26, 0, Math.PI * 2);
  ctx.fillStyle = CYAN(0.1); ctx.strokeStyle = CYAN(0.55); ctx.lineWidth = 2;
  ctx.fill(); ctx.stroke();
  ctx.font = "bold 8px sans-serif"; ctx.fillStyle = WHITE(0.7); ctx.textAlign = "center";
  ctx.fillText("KULANA", cx, cy + 3);

  // service nodes
  labels.forEach((label, i) => {
    const angle = spin + (i / labels.length) * Math.PI * 2;
    const nx = cx + Math.cos(angle) * R, ny = cy + Math.sin(angle) * R;
    const pulse = (Math.sin(t * 0.002 + i) + 1) / 2;

    // spoke
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(nx, ny);
    ctx.strokeStyle = CYAN(0.08 + pulse * 0.04); ctx.lineWidth = 1; ctx.stroke();

    // packet on spoke
    const p = ((t * 0.00042 + i * 0.18) % 1);
    const dx = cx + (nx - cx) * p, dy = cy + (ny - cy) * p;
    ctx.beginPath(); ctx.arc(dx, dy, 2.5, 0, Math.PI * 2);
    ctx.fillStyle = CYAN(0.75); ctx.fill();

    // node
    ctx.beginPath(); ctx.arc(nx, ny, 20 + pulse * 6, 0, Math.PI * 2);
    ctx.strokeStyle = CYAN(0.18 - pulse * 0.1); ctx.lineWidth = 1; ctx.stroke();
    ctx.beginPath(); ctx.arc(nx, ny, 14, 0, Math.PI * 2);
    ctx.fillStyle = BLUE(0.18); ctx.strokeStyle = CYAN(0.5); ctx.lineWidth = 1.5;
    ctx.fill(); ctx.stroke();

    ctx.font = "7.5px sans-serif"; ctx.fillStyle = WHITE(0.65); ctx.textAlign = "center";
    ctx.fillText(label, nx, ny + 28);
  });
}

// ═══════════════════════════════════════════════════════════════════════════════
//  12.  KULANA ACADEMY
//  Learning path with certification badge at the end
// ═══════════════════════════════════════════════════════════════════════════════
function drawAcademy(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  const L = w * 0.06, R = w * 0.94, cy = h * 0.55, PW = R - L;
  const courses = [
    { label: "Fundamentals", sub: "Foundation" },
    { label: "AI & Cloud", sub: "Arcitura" },
    { label: "Data Science", sub: "Next-Gen" },
    { label: "Digital Tx", sub: "Programme" },
    { label: "Certified", sub: "Expert 🎓" },
  ];
  const fill = Math.min(1, ((t * 0.00019) % 1.6));

  // track base
  ctx.beginPath(); ctx.moveTo(L, cy); ctx.lineTo(R, cy);
  ctx.strokeStyle = BLUE(0.18); ctx.lineWidth = 4; ctx.stroke();

  // progress fill
  const pg = ctx.createLinearGradient(L, 0, R, 0);
  pg.addColorStop(0, CYAN(0.65)); pg.addColorStop(1, GREEN(0.45));
  ctx.beginPath(); ctx.moveTo(L, cy); ctx.lineTo(L + PW * Math.min(1, fill * 1.18), cy);
  ctx.strokeStyle = pg; ctx.lineWidth = 4; ctx.stroke();

  // flying knowledge particles
  for (let i = 0; i < 7; i++) {
    const px = L + ((t * 0.00026 + i * 0.15) % 1) * PW;
    const py = cy + Math.sin(t * 0.0032 + i * 2.1) * h * 0.11;
    const a = (Math.sin(t * 0.002 + i * 1.3) + 1) / 2 * 0.35 + 0.15;
    ctx.beginPath(); ctx.arc(px, py, 3, 0, Math.PI * 2);
    ctx.fillStyle = CYAN(a); ctx.fill();
  }

  // nodes
  courses.forEach(({ label, sub }, i) => {
    const nx = L + (i / (courses.length - 1)) * PW;
    const done = fill > i * 0.22;
    const pulse = (Math.sin(t * 0.002 + i) + 1) / 2;
    const isLast = i === courses.length - 1;

    // floating card
    const cw = isLast ? 72 : 66, ch = 34;
    const cx2 = nx - cw / 2, cy2 = cy - 64 - (i % 2 === 0 ? 0 : 22);
    ctx.beginPath();
    (ctx as CanvasRenderingContext2D & { roundRect:(x:number,y:number,w:number,h:number,r:number)=>void })
      .roundRect(cx2, cy2, cw, ch, 8);
    ctx.fillStyle = done ? CYAN(0.13) : BLUE(0.08);
    ctx.strokeStyle = done ? CYAN(0.45) : CYAN(0.14);
    ctx.lineWidth = 1; ctx.fill(); ctx.stroke();
    ctx.font = "bold 8.5px sans-serif"; ctx.fillStyle = done ? WHITE(0.88) : WHITE(0.42);
    ctx.textAlign = "center"; ctx.fillText(label, nx, cy2 + 13);
    ctx.font = "8px sans-serif"; ctx.fillStyle = done ? CYAN(0.85) : CYAN(0.28);
    ctx.fillText(sub, nx, cy2 + 25);

    // stem
    ctx.beginPath(); ctx.moveTo(nx, cy2 + ch); ctx.lineTo(nx, cy - 14);
    ctx.strokeStyle = done ? CYAN(0.28) : CYAN(0.1); ctx.lineWidth = 1;
    ctx.setLineDash([2, 3]); ctx.stroke(); ctx.setLineDash([]);

    // pulse ring
    if (done) {
      ctx.beginPath(); ctx.arc(nx, cy, 22 + pulse * 9, 0, Math.PI * 2);
      ctx.strokeStyle = CYAN(0.18 - pulse * 0.12); ctx.lineWidth = 1; ctx.stroke();
    }

    // node
    ctx.beginPath(); ctx.arc(nx, cy, isLast ? 18 : 14, 0, Math.PI * 2);
    ctx.fillStyle = done ? CYAN(0.22) : BLUE(0.1);
    ctx.strokeStyle = done ? (isLast ? `rgba(255,215,0,0.85)` : CYAN(0.75)) : CYAN(0.2);
    ctx.lineWidth = isLast && done ? 2.5 : 1.8; ctx.fill(); ctx.stroke();

    ctx.font = isLast && done ? "14px sans-serif" : "12px sans-serif";
    ctx.fillStyle = done ? WHITE(0.92) : WHITE(0.28); ctx.textAlign = "center";
    ctx.fillText(done ? (isLast ? "★" : "✓") : "·", nx, cy + 5);
  });
}

// ═══════════════════════════════════════════════════════════════════════════════
//  13.  ABOUT US  –  World map with city nodes and arc connections
// ═══════════════════════════════════════════════════════════════════════════════
const CONTINENTS: [number, number][][] = [
  [[37.1,-5.4],[37.3,2.5],[36.9,10.2],[33.3,11.3],[30.1,32.9],[22.0,37.4],[11.8,44.9],[0.4,42.2],[-4.1,39.7],[-11.6,43.7],[-26.3,32.9],[-34.8,20.0],[-34.4,18.5],[-22.8,14.5],[-16.0,11.6],[4.8,-8.4],[5.1,-16.7],[14.9,-17.5],[22.0,14.2],[30.2,9.5],[37.1,-5.4]],
  [[71.0,25.0],[60.0,5.0],[51.0,2.5],[43.4,-1.8],[36.0,-5.5],[36.1,-9.5],[38.7,-9.2],[43.4,-8.9],[48.5,-4.7],[51.5,2.6],[54.5,8.2],[57.7,10.6],[63.0,8.0],[71.0,25.0]],
  [[37.0,36.5],[37.1,42.0],[30.5,47.8],[24.1,56.5],[22.5,59.5],[12.5,45.0],[11.5,43.5],[15.0,42.0],[22.0,36.5],[29.5,35.0],[31.0,34.0],[33.0,35.5],[37.0,36.5]],
  [[28.0,72.5],[23.8,68.0],[8.0,77.5],[7.9,80.0],[10.0,80.2],[20.0,86.7],[22.7,88.5],[26.0,92.0],[29.0,80.0],[28.0,72.5]],
  [[13.5,100.0],[10.0,99.5],[5.4,100.3],[1.3,103.8],[3.1,101.7],[6.1,102.2],[10.5,104.0],[13.5,100.0]],
  [[49.0,-123.0],[49.0,-95.0],[48.0,-84.5],[44.0,-76.0],[41.5,-70.0],[25.0,-80.0],[25.7,-80.2],[29.5,-95.0],[32.5,-117.0],[49.0,-123.0]],
  [[12.0,-72.0],[8.0,-62.0],[5.0,-52.0],[-5.0,-35.0],[-15.0,-39.0],[-23.0,-43.0],[-34.0,-53.0],[-55.0,-68.0],[-55.0,-72.0],[-18.0,-70.0],[0.0,-78.0],[12.0,-72.0]],
];
const MAP_CITIES = [
  {lat:5.6,lon:-0.2,p:true},{lat:6.5,lon:3.4,p:true},{lat:5.4,lon:-4.0,p:false},
  {lat:-1.3,lon:36.8,p:true},{lat:30.0,lon:31.2,p:true},{lat:-26.2,lon:28.0,p:true},
  {lat:25.2,lon:55.3,p:true},{lat:24.7,lon:46.7,p:false},{lat:51.5,lon:-0.1,p:true},
  {lat:40.7,lon:-74.0,p:false},{lat:1.4,lon:103.8,p:false},{lat:19.1,lon:72.9,p:false},
  {lat:33.6,lon:-7.6,p:false},{lat:-6.8,lon:39.3,p:false},{lat:14.7,lon:-17.4,p:false},{lat:0.3,lon:32.6,p:false},
];
const MAP_CONNECTIONS: [number,number][] = [
  [0,1],[0,2],[0,12],[0,14],[0,8],[1,4],[1,5],[3,4],[3,13],[3,15],[3,6],
  [4,6],[4,7],[4,8],[5,6],[5,13],[6,7],[6,11],[8,9],[8,12],[10,11],[10,3],[9,0],
];
function drawAbout(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  const proj = (lat: number, lon: number) => {
    const sc = 1.5, mw = w * sc, mh = mw / 2;
    return { x: (w - mw) / 2 + ((lon + 180) / 360) * mw, y: (h - mh) / 2 + ((90 - lat) / 180) * mh };
  };
  const ctrl = (ax:number,ay:number,bx:number,by:number) => ({ cx:(ax+bx)/2, cy:(ay+by)/2-Math.hypot(bx-ax,by-ay)*0.25 });
  const bez = (s:number,ax:number,ay:number,cx:number,cy:number,bx:number,by:number) => ({
    x:(1-s)**2*ax+2*(1-s)*s*cx+s**2*bx, y:(1-s)**2*ay+2*(1-s)*s*cy+s**2*by
  });
  CONTINENTS.forEach(shape => {
    ctx.beginPath();
    shape.forEach(([lat,lon],i)=>{ const {x,y}=proj(lat,lon); i===0?ctx.moveTo(x,y):ctx.lineTo(x,y); });
    ctx.closePath(); ctx.fillStyle=C(0,180,216,.05); ctx.fill();
    ctx.strokeStyle=C(0,180,216,.22); ctx.lineWidth=1; ctx.stroke();
  });
  const nodes = MAP_CITIES.map(({lat,lon})=>proj(lat,lon));
  MAP_CONNECTIONS.forEach(([i,j])=>{
    const a=nodes[i],b=nodes[j],{cx:cx2,cy:cy2}=ctrl(a.x,a.y,b.x,b.y);
    ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.quadraticCurveTo(cx2,cy2,b.x,b.y);
    ctx.strokeStyle=C(0,180,216,.28); ctx.lineWidth=1.3; ctx.stroke();
  });
  MAP_CONNECTIONS.forEach(([i,j],idx)=>{
    const a=nodes[i],b=nodes[j],{cx:cx2,cy:cy2}=ctrl(a.x,a.y,b.x,b.y);
    [0,.5].forEach(offset=>{
      const tp=((t*.00025+idx*.137+offset)%1);
      const {x:px,y:py}=bez(tp,a.x,a.y,cx2,cy2,b.x,b.y);
      glow(ctx,px,py,10,C(0,212,255,.9),C(0,212,255,0));
      ctx.beginPath(); ctx.arc(px,py,3,0,Math.PI*2); ctx.fillStyle=WHITE(.95); ctx.fill();
    });
  });
  nodes.forEach(({x,y},idx)=>{
    const {p}=MAP_CITIES[idx];
    if(p){ const pulse=(Math.sin(t*.0015+idx*1.1)+1)/2;
      ctx.beginPath(); ctx.arc(x,y,14+pulse*12,0,Math.PI*2);
      ctx.strokeStyle=C(0,212,255,.35-pulse*.25); ctx.lineWidth=1.5; ctx.stroke(); }
    glow(ctx,x,y,p?18:10,p?C(0,212,255,.55):C(0,212,255,.3),C(0,212,255,0));
    ctx.beginPath(); ctx.arc(x,y,p?6:3.5,0,Math.PI*2); ctx.fillStyle=WHITE(.95); ctx.fill();
  });
}

// ═══════════════════════════════════════════════════════════════════════════════
//  14.  KULANA  –  Three-value pillars + orbiting particles
// ═══════════════════════════════════════════════════════════════════════════════
function drawKulana(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  const cx = w / 2, cy = h / 2;
  const OR = Math.min(w, h) * 0.33;

  // outer orbiting particles
  for (let i = 0; i < 14; i++) {
    const angle = (i / 14) * Math.PI * 2 + t * 0.0008;
    const ox = cx + Math.cos(angle) * OR, oy = cy + Math.sin(angle) * OR;
    const sz = 2.5 + Math.sin(t * 0.0022 + i * 0.8) * 1.2;
    ctx.beginPath(); ctx.arc(ox, oy, sz, 0, Math.PI * 2);
    ctx.fillStyle = CYAN(0.38 + Math.sin(angle) * 0.18); ctx.fill();
  }
  ctx.beginPath(); ctx.arc(cx, cy, OR, 0, Math.PI * 2);
  ctx.strokeStyle = CYAN(0.1); ctx.lineWidth = 1;
  ctx.setLineDash([4, 11]); ctx.stroke(); ctx.setLineDash([]);
  ctx.beginPath(); ctx.arc(cx, cy, OR * 0.6, 0, Math.PI * 2);
  ctx.strokeStyle = CYAN(0.07); ctx.lineWidth = 1; ctx.stroke();

  // three value nodes
  const values = ["Honesty", "Integrity", "Trust"];
  values.forEach((val, i) => {
    const angle = (i / values.length) * Math.PI * 2 - Math.PI / 2;
    const nx = cx + Math.cos(angle) * OR * 0.6, ny = cy + Math.sin(angle) * OR * 0.6;
    const nextA = ((i + 1) / values.length) * Math.PI * 2 - Math.PI / 2;
    const nx2 = cx + Math.cos(nextA) * OR * 0.6, ny2 = cy + Math.sin(nextA) * OR * 0.6;
    const pulse = (Math.sin(t * 0.002 + i * 2.2) + 1) / 2;

    // pillar-to-center & between pillars
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(nx, ny);
    ctx.strokeStyle = CYAN(0.16 + pulse * 0.1); ctx.lineWidth = 1; ctx.stroke();
    ctx.beginPath(); ctx.moveTo(nx, ny); ctx.lineTo(nx2, ny2);
    ctx.strokeStyle = CYAN(0.12); ctx.lineWidth = 1;
    ctx.setLineDash([3, 5]); ctx.stroke(); ctx.setLineDash([]);

    // packet
    const pp = ((t * 0.0004 + i * 0.34) % 1);
    packetDot(ctx, cx, cy, nx, ny, pp, CYAN(0.85));

    // ring + node
    ctx.beginPath(); ctx.arc(nx, ny, 26 + pulse * 10, 0, Math.PI * 2);
    ctx.strokeStyle = CYAN(0.14 - pulse * 0.09); ctx.lineWidth = 1; ctx.stroke();
    ctx.beginPath(); ctx.arc(nx, ny, 18, 0, Math.PI * 2);
    ctx.fillStyle = CYAN(0.1 + pulse * 0.08); ctx.strokeStyle = CYAN(0.52 + pulse * 0.22);
    ctx.lineWidth = 2; ctx.fill(); ctx.stroke();

    ctx.font = "9px sans-serif"; ctx.fillStyle = WHITE(0.78); ctx.textAlign = "center";
    ctx.fillText(val, nx, ny + 34);
  });

  // central core
  const cp = (Math.sin(t * 0.0018) + 1) / 2;
  glow(ctx, cx, cy, 55 + cp * 22, CYAN(0.24 + cp * 0.1), CYAN(0));
  ctx.beginPath(); ctx.arc(cx, cy, 24, 0, Math.PI * 2);
  ctx.fillStyle = CYAN(0.12); ctx.strokeStyle = CYAN(0.58); ctx.lineWidth = 2;
  ctx.fill(); ctx.stroke();
  ctx.font = "bold 8px sans-serif"; ctx.fillStyle = WHITE(0.72); ctx.textAlign = "center";
  ctx.fillText("KULANA", cx, cy + 3);
}

// ═══════════════════════════════════════════════════════════════════════════════
//  Variant map + component
// ═══════════════════════════════════════════════════════════════════════════════
export type HeroVariant =
  | "core-banking" | "data-center" | "erp-crm" | "digital-integrations"
  | "project-management" | "predictive-analysis" | "ai-cloud"
  | "digital-transformation" | "cloud-computing" | "next-gen-data-science"
  | "our-services" | "academy" | "about" | "kulana";

const DRAW_FNS: Record<HeroVariant, (ctx: CanvasRenderingContext2D, w: number, h: number, t: number) => void> = {
  "core-banking":           drawCoreBanking,
  "data-center":            drawDataCenter,
  "erp-crm":                drawErpCrm,
  "digital-integrations":   drawDigitalIntegrations,
  "project-management":     drawProjectManagement,
  "predictive-analysis":    drawPredictiveAnalysis,
  "ai-cloud":               drawAiCloud,
  "digital-transformation": drawDigitalTransformation,
  "cloud-computing":        drawCloudComputing,
  "next-gen-data-science":  drawNextGenDataScience,
  "our-services":           drawOurServices,
  "academy":                drawAcademy,
  "about":                  drawAbout,
  "kulana":                 drawKulana,
};

interface Props { variant?: HeroVariant; }

export default function HeroCanvas({ variant = "about" }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animId: number;

    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);

    const fn = DRAW_FNS[variant] ?? drawAbout;
    const draw = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      fn(ctx, canvas.width, canvas.height, time);
      animId = requestAnimationFrame(draw);
    };
    animId = requestAnimationFrame(draw);

    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, [variant]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}
