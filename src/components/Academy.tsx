"use client";

import Image from "next/image";

// Academy brand: Font = Inter, Dark Blue = #200178, Green = #57EBBB
const ACADEMY_FONT = "var(--font-inter), sans-serif";
const DARK_BLUE    = "#200178";
const GREEN        = "#57EBBB";

export default function Academy() {
  return (
    <section id="academy" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto" style={{ fontFamily: ACADEMY_FONT }}>
        <a
          href="https://www.kulana.academy/"
          target="_blank"
          rel="noopener noreferrer"
          className="group block relative rounded-2xl overflow-hidden"
          style={{ background: DARK_BLUE }}
        >
          {/* Dot grid texture */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(rgba(87,235,187,0.55) 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
            }}
          />
          {/* Circuit line grid */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, rgba(87,235,187,0.6) 0px, rgba(87,235,187,0.6) 1px, transparent 1px, transparent 40px),
                repeating-linear-gradient(90deg, rgba(87,235,187,0.6) 0px, rgba(87,235,187,0.6) 1px, transparent 1px, transparent 40px)
              `,
            }}
          />
          {/* Left depth */}
          <div
            className="absolute inset-y-0 left-0 w-1/2 pointer-events-none"
            style={{ background: `radial-gradient(ellipse at 0% 50%, ${DARK_BLUE} 30%, transparent 80%)` }}
          />
          {/* Right warm bokeh */}
          <div
            className="absolute inset-y-0 right-0 w-2/5 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 90% 40%, rgba(160,60,0,0.4) 0%, rgba(100,20,0,0.2) 45%, transparent 70%)" }}
          />
          <div
            className="absolute pointer-events-none"
            style={{ top: "20%", right: "28%", width: 80, height: 80, borderRadius: "50%", background: "radial-gradient(circle, rgba(180,70,0,0.3) 0%, transparent 70%)" }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 px-12 py-14 lg:py-16">

            {/* Left: headline + description */}
            <div className="flex gap-5 items-stretch max-w-2xl">
              <div className="w-[4px] rounded-full flex-shrink-0 self-stretch" style={{ background: GREEN }} />
              <div>
                <h2
                  className="text-3xl lg:text-4xl xl:text-[2.75rem] font-extrabold text-white uppercase leading-[1.1] mb-6 tracking-tight"
                  style={{ fontFamily: ACADEMY_FONT }}
                >
                  Build the skills to<br />
                  move your business<br />
                  forward.
                </h2>
                <p className="text-white/60 text-sm lg:text-base leading-relaxed max-w-md">
                  Industry-aligned training designed to equip teams with
                  the skills they need for a rapidly changing digital world.
                </p>
              </div>
            </div>

            {/* Right: logo + CTA */}
            <div className="flex flex-col items-center gap-8 flex-shrink-0">
              <div className="flex items-center gap-5">
                <Image
                  src="/logos/logo-icon.svg"
                  alt="Kulana icon"
                  width={56}
                  height={56}
                  className="w-14 h-14 object-contain"
                  style={{ filter: "brightness(0) saturate(100%) invert(82%) sepia(40%) saturate(500%) hue-rotate(110deg) brightness(105%)" }}
                />
                <span className="w-px h-14 rounded-full" style={{ background: `rgba(87,235,187,0.45)` }} />
                <div className="leading-tight" style={{ fontFamily: ACADEMY_FONT }}>
                  <div className="text-2xl font-bold" style={{ color: GREEN }}>Kulana</div>
                  <div className="text-2xl font-bold" style={{ color: GREEN }}>Academy</div>
                </div>
              </div>

              <button
                onClick={() => window.open("https://www.kulana.academy/", "_blank")}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-bold transition-all group-hover:scale-105 whitespace-nowrap"
                style={{ background: GREEN, color: "#000000", fontFamily: ACADEMY_FONT }}
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
