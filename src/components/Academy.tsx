"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function Academy() {
  return (
    <section id="academy" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <a
          href="https://www.kulana.academy/"
          target="_blank"
          rel="noopener noreferrer"
          className="group block relative rounded-2xl overflow-hidden"
          style={{ background: "linear-gradient(135deg, #1a0060 0%, #2d0090 40%, #0a0050 100%)" }}
        >
          {/* Circuit/grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(87,235,187,0.6) 1px, transparent 1px),
                linear-gradient(90deg, rgba(87,235,187,0.6) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />
          {/* Extra purple glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 px-10 py-14 lg:py-16">

            {/* Left — text */}
            <div className="flex gap-6 items-start max-w-xl">
              {/* Cyan bar */}
              <div className="w-1 self-stretch rounded-full flex-shrink-0" style={{ background: "#57EBBB" }} />
              <div>
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-white uppercase leading-tight mb-5">
                  Build the skills to<br />
                  move your business<br />
                  forward.
                </h2>
                <p className="text-white/70 text-sm lg:text-base leading-relaxed max-w-sm">
                  Industry-aligned training designed to equip teams with
                  the skills they need for a rapidly changing digital world.
                </p>
              </div>
            </div>

            {/* Right — logo + CTA */}
            <div className="flex flex-col items-center lg:items-end gap-8 flex-shrink-0">
              {/* Kulana Academy logo: icon from logo.svg + divider + "Academy" text */}
              <div className="flex items-center gap-4">
                <Image
                  src="/logos/logo.svg"
                  alt="Kulana"
                  width={120}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
                <span className="w-px h-12 bg-[#57EBBB]/40" />
                <span className="text-2xl font-bold leading-tight" style={{ color: "#57EBBB" }}>
                  Kulana<br />Academy
                </span>
              </div>
              <span
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold transition-all group-hover:scale-105"
                style={{ background: "#57EBBB", color: "#040d28" }}
              >
                Explore Kulana Academy
                <ExternalLink className="w-4 h-4" />
              </span>
            </div>

          </div>
        </a>
      </div>
    </section>
  );
}
