"use client";

import Image from "next/image";

export default function Academy() {
  return (
    <section id="academy" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <a
          href="https://www.kulana.academy/"
          target="_blank"
          rel="noopener noreferrer"
          className="group block relative rounded-2xl overflow-hidden"
          style={{ background: "linear-gradient(135deg, #1a0060 0%, #2d0090 50%, #0a0050 100%)" }}
        >
          {/* Digital dot-grid background pattern */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(rgba(87,235,187,0.18) 1px, transparent 1px)`,
              backgroundSize: "28px 28px",
            }}
          />
          {/* Soft left glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-950/60 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 px-12 py-14 lg:py-16">

            {/* ── Left: headline + description ── */}
            <div className="flex gap-5 items-stretch max-w-2xl">
              {/* Cyan accent bar */}
              <div className="w-[4px] rounded-full flex-shrink-0 self-stretch" style={{ background: "#57EBBB" }} />

              <div>
                <h2 className="text-3xl lg:text-4xl xl:text-[2.75rem] font-black text-white uppercase leading-[1.1] mb-6 tracking-tight">
                  Build the skills to<br />
                  move your business<br />
                  forward.
                </h2>
                <p className="text-white/65 text-sm lg:text-base leading-relaxed max-w-md">
                  Industry-aligned training designed to equip teams with
                  the skills they need for a rapidly changing digital world.
                </p>
              </div>
            </div>

            {/* ── Right: Kulana Academy logo + CTA ── */}
            <div className="flex flex-col items-center lg:items-center gap-8 flex-shrink-0">
              {/* Icon | Kulana\nAcademy */}
              <div className="flex items-center gap-5">
                <Image
                  src="/logos/logo-icon.svg"
                  alt="Kulana icon"
                  width={56}
                  height={56}
                  className="w-14 h-14 object-contain"
                />
                {/* Vertical divider */}
                <span className="w-px h-14 rounded-full" style={{ background: "rgba(87,235,187,0.5)" }} />
                {/* Text */}
                <div className="leading-tight">
                  <div className="text-2xl font-bold" style={{ color: "#57EBBB" }}>Kulana</div>
                  <div className="text-2xl font-bold" style={{ color: "#57EBBB" }}>Academy</div>
                </div>
              </div>

              {/* CTA pill */}
              <button
                onClick={() => window.open("https://www.kulana.academy/", "_blank")}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-bold transition-all group-hover:scale-105 whitespace-nowrap"
                style={{ background: "#57EBBB", color: "#040d28" }}
              >
                Explore Kulana Academy
              </button>
            </div>

          </div>
        </a>
      </div>
    </section>
  );
}
