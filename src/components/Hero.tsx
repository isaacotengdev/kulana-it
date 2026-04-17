"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Play, Shield, Cpu, TrendingUp } from "lucide-react";

const highlights = [
  { icon: Shield, label: "ISO Certified", desc: "Enterprise Security" },
  { icon: Cpu, label: "10+ Technologies", desc: "Cutting-edge Stack" },
  { icon: TrendingUp, label: "10+ Projects", desc: "Delivered Successfully" },
];

// Simplified continent outlines as [lat, lon] arrays (equirectangular)
const CONTINENTS: [number, number][][] = [
  // Africa
  [
    [37.1, -5.4], [37.3, 2.5], [36.9, 10.2], [33.3, 11.3], [30.1, 32.9],
    [22.0, 37.4], [11.8, 44.9], [0.4, 42.2], [-4.1, 39.7], [-11.6, 43.7],
    [-26.3, 32.9], [-34.8, 20.0], [-34.4, 18.5], [-22.8, 14.5],
    [-16.0, 11.6], [4.8, -8.4], [5.1, -16.7], [14.9, -17.5],
    [22.0, 14.2], [30.2, 9.5], [37.1, -5.4],
  ],
  // Europe (simplified western)
  [
    [71.0, 25.0], [60.0, 5.0], [51.0, 2.5], [43.4, -1.8],
    [36.0, -5.5], [36.1, -9.5], [38.7, -9.2], [43.4, -8.9],
    [48.5, -4.7], [51.5, 2.6], [54.5, 8.2], [57.7, 10.6],
    [63.0, 8.0], [71.0, 25.0],
  ],
  // Arabian Peninsula & Levant
  [
    [37.0, 36.5], [37.1, 42.0], [30.5, 47.8], [24.1, 56.5],
    [22.5, 59.5], [12.5, 45.0], [11.5, 43.5], [15.0, 42.0],
    [22.0, 36.5], [29.5, 35.0], [31.0, 34.0], [33.0, 35.5],
    [37.0, 36.5],
  ],
  // South Asia
  [
    [28.0, 72.5], [23.8, 68.0], [8.0, 77.5], [7.9, 80.0],
    [10.0, 80.2], [20.0, 86.7], [22.7, 88.5], [26.0, 92.0],
    [29.0, 80.0], [28.0, 72.5],
  ],
  // Southeast Asia (Malay Peninsula)
  [
    [13.5, 100.0], [10.0, 99.5], [5.4, 100.3], [1.3, 103.8],
    [3.1, 101.7], [6.1, 102.2], [10.5, 104.0], [13.5, 100.0],
  ],
  // North America (east coast + southern outline)
  [
    [49.0, -123.0], [49.0, -95.0], [48.0, -84.5], [44.0, -76.0],
    [41.5, -70.0], [25.0, -80.0], [25.7, -80.2], [29.5, -95.0],
    [32.5, -117.0], [49.0, -123.0],
  ],
  // South America (simplified)
  [
    [12.0, -72.0], [8.0, -62.0], [5.0, -52.0], [-5.0, -35.0],
    [-15.0, -39.0], [-23.0, -43.0], [-34.0, -53.0], [-55.0, -68.0],
    [-55.0, -72.0], [-18.0, -70.0], [0.0, -78.0], [12.0, -72.0],
  ],
];

// City nodes across Africa, Middle East, and global hubs
const CITIES = [
  { name: "Accra",          lat:   5.6, lon:   -0.2, primary: true  },
  { name: "Lagos",          lat:   6.5, lon:    3.4, primary: true  },
  { name: "Abidjan",        lat:   5.4, lon:   -4.0, primary: false },
  { name: "Nairobi",        lat:  -1.3, lon:   36.8, primary: true  },
  { name: "Cairo",          lat:  30.0, lon:   31.2, primary: true  },
  { name: "Johannesburg",   lat: -26.2, lon:   28.0, primary: true  },
  { name: "Dubai",          lat:  25.2, lon:   55.3, primary: true  },
  { name: "Riyadh",         lat:  24.7, lon:   46.7, primary: false },
  { name: "London",         lat:  51.5, lon:   -0.1, primary: true  },
  { name: "New York",       lat:  40.7, lon:  -74.0, primary: false },
  { name: "Singapore",      lat:   1.4, lon:  103.8, primary: false },
  { name: "Mumbai",         lat:  19.1, lon:   72.9, primary: false },
  { name: "Casablanca",     lat:  33.6, lon:   -7.6, primary: false },
  { name: "Dar es Salaam",  lat:  -6.8, lon:   39.3, primary: false },
  { name: "Dakar",          lat:  14.7, lon:  -17.4, primary: false },
  { name: "Kampala",        lat:   0.3, lon:   32.6, primary: false },
];

// [from index, to index]
const CONNECTIONS: [number, number][] = [
  [0,  1],  // Accra – Lagos
  [0,  2],  // Accra – Abidjan
  [0, 12],  // Accra – Casablanca
  [0, 14],  // Accra – Dakar
  [0,  8],  // Accra – London
  [1,  4],  // Lagos – Cairo
  [1,  5],  // Lagos – Johannesburg
  [3,  4],  // Nairobi – Cairo
  [3, 13],  // Nairobi – Dar es Salaam
  [3, 15],  // Nairobi – Kampala
  [3,  6],  // Nairobi – Dubai
  [4,  6],  // Cairo – Dubai
  [4,  7],  // Cairo – Riyadh
  [4,  8],  // Cairo – London
  [5,  6],  // Johannesburg – Dubai
  [5, 13],  // Johannesburg – Dar es Salaam
  [6,  7],  // Dubai – Riyadh
  [6, 11],  // Dubai – Mumbai
  [8,  9],  // London – New York
  [8, 12],  // London – Casablanca
  [10, 11], // Singapore – Mumbai
  [10,  3], // Singapore – Nairobi
  [9,  0],  // New York – Accra (transatlantic)
];

function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Equirectangular projection — scaled up 1.5× and centered on Africa
    const project = (lat: number, lon: number) => {
      const scale = 1.5;
      const mapW = canvas.width * scale;
      const mapH = mapW / 2;
      const offsetX = (canvas.width - mapW) / 2;
      const offsetY = (canvas.height - mapH) / 2;
      return {
        x: offsetX + ((lon + 180) / 360) * mapW,
        y: offsetY + ((90 - lat) / 180) * mapH,
      };
    };

    // Control point for arc: lift midpoint toward top
    const arcControl = (
      ax: number, ay: number,
      bx: number, by: number
    ) => ({
      cx: (ax + bx) / 2,
      cy: (ay + by) / 2 - Math.hypot(bx - ax, by - ay) * 0.25,
    });

    // Position on quadratic bezier at t
    const bezier = (
      t: number,
      ax: number, ay: number,
      cx: number, cy: number,
      bx: number, by: number
    ) => ({
      x: (1 - t) ** 2 * ax + 2 * (1 - t) * t * cx + t ** 2 * bx,
      y: (1 - t) ** 2 * ay + 2 * (1 - t) * t * cy + t ** 2 * by,
    });

    const draw = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // ── Continent outlines ──────────────────────────────────────────
      for (const shape of CONTINENTS) {
        ctx.beginPath();
        shape.forEach(([lat, lon], i) => {
          const { x, y } = project(lat, lon);
          i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        });
        ctx.closePath();
        ctx.fillStyle = "rgba(0,180,216,0.05)";
        ctx.fill();
        ctx.strokeStyle = "rgba(0,180,216,0.22)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      const nodes = CITIES.map(({ lat, lon }) => project(lat, lon));

      // ── Connection arcs ─────────────────────────────────────────────
      for (const [i, j] of CONNECTIONS) {
        const a = nodes[i];
        const b = nodes[j];
        const { cx, cy } = arcControl(a.x, a.y, b.x, b.y);

        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.quadraticCurveTo(cx, cy, b.x, b.y);
        ctx.strokeStyle = "rgba(0,180,216,0.28)";
        ctx.lineWidth = 1.3;
        ctx.stroke();
      }

      // ── Animated data packets ────────────────────────────────────────
      for (let idx = 0; idx < CONNECTIONS.length; idx++) {
        const [i, j] = CONNECTIONS[idx];
        const a = nodes[i];
        const b = nodes[j];
        const { cx, cy } = arcControl(a.x, a.y, b.x, b.y);

        // Staggered phase per connection, two packets per arc
        for (const offset of [0, 0.5]) {
          const t = ((time * 0.00025 + idx * 0.137 + offset) % 1);
          const { x: px, y: py } = bezier(t, a.x, a.y, cx, cy, b.x, b.y);

          // Glow
          const g = ctx.createRadialGradient(px, py, 0, px, py, 10);
          g.addColorStop(0, "rgba(0,212,255,0.9)");
          g.addColorStop(1, "rgba(0,212,255,0)");
          ctx.beginPath();
          ctx.arc(px, py, 10, 0, Math.PI * 2);
          ctx.fillStyle = g;
          ctx.fill();

          // Core dot
          ctx.beginPath();
          ctx.arc(px, py, 3, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(255,255,255,0.95)";
          ctx.fill();
        }
      }

      // ── City nodes ──────────────────────────────────────────────────
      for (let idx = 0; idx < CITIES.length; idx++) {
        const { primary } = CITIES[idx];
        const { x, y } = nodes[idx];

        if (primary) {
          // Pulsing outer ring
          const pulse = (Math.sin(time * 0.0015 + idx * 1.1) + 1) / 2;
          const ringR = 14 + pulse * 12;
          ctx.beginPath();
          ctx.arc(x, y, ringR, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(0,212,255,${0.35 - pulse * 0.25})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }

        // Glow halo
        const halo = ctx.createRadialGradient(x, y, 0, x, y, primary ? 18 : 10);
        halo.addColorStop(0, primary ? "rgba(0,212,255,0.55)" : "rgba(0,212,255,0.3)");
        halo.addColorStop(1, "rgba(0,212,255,0)");
        ctx.beginPath();
        ctx.arc(x, y, primary ? 18 : 10, 0, Math.PI * 2);
        ctx.fillStyle = halo;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(x, y, primary ? 6 : 3.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.95)";
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden gradient-hero"
    >
      {/* World network animation */}
      <NetworkCanvas />

      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-300/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm text-cyan-300 font-medium mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Trusted IT Partner Across Africa and The Middle East
            </div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight mb-6">
              Technology
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
                experts
              </span>{" "}
              for
              <br />
              your business
            </h1>

            <p className="text-lg text-blue-100/80 max-w-xl mb-10 leading-relaxed">
              Your company&apos;s technology is your competitive edge. Kulana takes a
              holistic approach to your organisation&apos;s digital transformation. We are
              the technology experts you need to drive your business forward.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-4 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Request a Quote
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all backdrop-blur-sm"
              >
                <Play className="w-4 h-4" />
                Explore Services
              </a>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-white/20">
              {[
                { value: "4+", label: "Years Experience" },
                { value: "10+", label: "Enterprise Clients" },
                { value: "2", label: "African Offices" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-blue-200 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right content — floating cards */}
          <div className="hidden lg:flex flex-col gap-4 items-end">
            {highlights.map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="w-72 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 flex items-center gap-4 hover:bg-white/15 transition-all cursor-default"
              >
                <div className="w-12 h-12 bg-cyan-400/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-cyan-300" />
                </div>
                <div>
                  <div className="text-white font-semibold">{label}</div>
                  <div className="text-blue-200 text-sm">{desc}</div>
                </div>
              </div>
            ))}

            {/* Main visual card */}
            <div className="w-72 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 backdrop-blur-md border border-cyan-400/30 rounded-2xl p-6 mt-2">
              <div className="text-white font-bold text-lg mb-3">
                End-to-End IT Solutions
              </div>
              <div className="space-y-2">
                {["Strategy", "Implementation", "Support", "Training"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-blue-100">
                    <div className="w-4 h-4 rounded-full bg-cyan-400/30 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
