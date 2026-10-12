"use client";

import Image from "next/image";

const MF   = "var(--font-manrope), sans-serif";
const GREEN = "#57EBBB";
const DARK  = "#200044";

export default function Academy() {
  return (
    <section id="academy" className="relative overflow-hidden" style={{ minHeight: "360px" }}>
      <Image
        src="/images/Links_homepage/CTA_KA_banner_2560×640px.webp"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0" style={{ background: "rgba(18, 22, 110, 0.62)" }} />

      <div className="relative z-10">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">

          {/* 2-col × 2-row grid: [heading | logo] / [description | button] */}
          <div className="grid lg:grid-cols-2 gap-x-16 items-start">

            {/* Row 1 left — green bar + heading */}
            <div className="flex gap-6 items-stretch mb-6">
              <div className="w-2 flex-shrink-0 self-stretch my-3" style={{ background: GREEN }} />
              <h2
                className="leading-tight text-white"
                style={{ fontFamily: MF, fontWeight: 700, fontSize: "clamp(36px, 4.5vw, 56px)" }}
              >
                Build the skills to<br />
                move your business<br />
                forward.
              </h2>
            </div>

            {/* Row 1 right — logo */}
            <div className="flex items-center gap-5 justify-end mb-6">
              <Image
                src="/logos/logo-icon.svg"
                alt="Kulana Academy icon"
                width={80}
                height={80}
                className="w-20 h-20 object-contain"
                style={{ filter: "brightness(0) saturate(100%) invert(82%) sepia(37%) saturate(494%) hue-rotate(106deg) brightness(98%) contrast(95%)" }}
                unoptimized
              />
              <span className="w-[5px] h-20 flex-shrink-0" style={{ background: GREEN }} />
              <div style={{ fontFamily: MF, fontWeight: 700, fontSize: "36px", lineHeight: 1.15 }}>
                <div className="text-[#57EBBB]">Kulana</div>
                <div className="text-white">Academy</div>
              </div>
            </div>

            {/* Row 2 left — description */}
            <p style={{ fontFamily: MF, fontWeight: 400, color: "#ffffff", fontSize: "20px", lineHeight: "30px", paddingLeft: "32px" }}>
              Industry-aligned training designed to equip teams with
              the skills they need for a rapidly changing digital world.
            </p>

            {/* Row 2 right — button */}
            <div className="flex justify-end">
              <a
                href="https://www.kulana.academy/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-4 rounded-full transition-all hover:opacity-90 whitespace-nowrap"
                style={{ fontFamily: MF, fontWeight: 600, fontSize: "20px", background: GREEN, color: DARK }}
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
