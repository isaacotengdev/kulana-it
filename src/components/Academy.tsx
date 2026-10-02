"use client";

import Image from "next/image";

const ACADEMY_FONT = "var(--font-inter), sans-serif";
const DARK_BLUE    = "#200044";
const GREEN        = "#57EBBB";

export default function Academy() {
  return (
    <section id="academy" className="relative overflow-hidden" style={{ minHeight: "360px" }}>
      {/* Background photo — fills entire section */}
      <Image
        src="/images/Links_homepage/CTA_KA_banner_2560×640px.webp"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority
      />

      {/* Blue tint overlay — lighter so background image shows through */}
      <div className="absolute inset-0" style={{ background: `rgba(18, 22, 110, 0.62)` }} />

      {/* Content — not a link; only the button is clickable */}
      <div className="relative z-10">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="flex flex-col lg:flex-row items-stretch justify-between gap-16">

            {/* Left: green accent bar + headline + description */}
            <div className="flex flex-col justify-center">
              <div className="flex gap-6 items-stretch mb-6">
                <div
                  className="w-[8px] flex-shrink-0 self-stretch"
                  style={{ background: GREEN }}
                />
                <h2
                  className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-[1.1]"
                  style={{ fontFamily: ACADEMY_FONT }}
                >
                  Build the skills to<br />
                  move your business<br />
                  forward.
                </h2>
              </div>
              <p
                className="text-base lg:text-lg leading-relaxed text-white max-w-lg"
                style={{ fontFamily: ACADEMY_FONT }}
              >
                Industry-aligned training designed to equip teams with
                the skills they need for a rapidly changing digital world.
              </p>
            </div>

            {/* Right: logo at top, button at bottom — only button is clickable */}
            <div className="flex-shrink-0 flex flex-col justify-between gap-10 lg:gap-0">
              {/* Logo row — top */}
              <div className="flex items-center gap-6">
                <Image
                  src="/logos/logo-icon.svg"
                  alt="Kulana Academy icon"
                  width={80}
                  height={80}
                  className="w-20 h-20 object-contain"
                  unoptimized
                />
                <span className="w-[6px] h-20" style={{ background: GREEN }} />
                <div style={{ fontFamily: ACADEMY_FONT, lineHeight: 1.15 }}>
                  <div className="text-4xl font-bold" style={{ color: GREEN }}>Kulana</div>
                  <div className="text-4xl font-bold" style={{ color: GREEN }}>Academy</div>
                </div>
              </div>
              {/* Button — bottom, only clickable element */}
              <a
                href="https://www.kulana.academy/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-4 rounded-full font-bold transition-all hover:opacity-90 whitespace-nowrap"
                style={{ background: GREEN, color: DARK_BLUE, fontFamily: ACADEMY_FONT, fontSize: "1rem" }}
              >
                Explore Kulana Academy
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
