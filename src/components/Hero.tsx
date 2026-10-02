"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/images/Links_homepage/Hero image_2560×1440px.webp"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority
      />
      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0" style={{ background: "rgba(8, 0, 32, 0.62)" }} />

      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left content */}
          <div>
            {/* Label with border box */}
            <span
              className="inline-block text-xs tracking-[0.18em] uppercase mb-6 px-4 py-2 rounded-sm border"
              style={{ fontFamily: "var(--font-manrope), sans-serif", fontWeight: 600, color: "#57D9D4", borderColor: "#57D9D4" }}
            >
              Trusted IT Partner&nbsp;&nbsp;|&nbsp;&nbsp;Ghana and Mauritius
            </span>

            <h1
              className="text-5xl lg:text-6xl xl:text-7xl text-white leading-tight mb-6 uppercase"
              style={{ fontFamily: "var(--font-manrope), sans-serif", fontWeight: 500 }}
            >
              Technology
              <br />
              Experts For
              <br />
              Your Business.
            </h1>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-md transition-all shadow-lg hover:-translate-y-0.5"
                style={{ fontFamily: "var(--font-manrope), sans-serif", fontWeight: 600, background: "#57D9D4", color: "#040d28" }}
              >
                Request a Consultation
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent rounded-md hover:bg-white/10 transition-all border"
                style={{ fontFamily: "var(--font-manrope), sans-serif", fontWeight: 600, color: "#57D9D4", borderColor: "#57D9D4" }}
              >
                Explore Services
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

            </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
    </section>
  );
}
