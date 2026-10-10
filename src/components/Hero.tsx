"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

const MF = "var(--font-manrope), sans-serif";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/Links_homepage/Hero image_2560×1440px.webp"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority
      />
      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ background: "rgba(8, 0, 32, 0.62)" }} />

      <div
        className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ paddingTop: "calc(80px + 90px)", paddingBottom: "90px" }}
      >
        {/* Eyebrow — no border, plain text */}
        <span
          className="inline-block tracking-[0.18em] uppercase mb-6"
          style={{ fontFamily: MF, fontWeight: 600, color: "#57D9D4", fontSize: "30px" }}
        >
          Trusted IT Partner&nbsp;&nbsp;|&nbsp;&nbsp;Ghana and Mauritius
        </span>

        <h1
          className="text-white uppercase leading-tight"
          style={{ fontFamily: MF, fontWeight: 500, fontSize: "clamp(56px, 7vw, 90px)" }}
        >
          Technology
          <br />
          Experts For
          <br />
          Your Business.
        </h1>

        <div className="flex flex-wrap gap-4" style={{ marginTop: "140px" }}>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md transition-all shadow-lg hover:-translate-y-0.5"
            style={{ fontFamily: MF, fontWeight: 600, fontSize: "20px", background: "#57D9D4", color: "#040d28" }}
          >
            Request a Consultation
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent rounded-md hover:bg-white/10 transition-all border"
            style={{ fontFamily: MF, fontWeight: 600, fontSize: "20px", color: "#57D9D4", borderColor: "#57D9D4" }}
          >
            Explore Services
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
    </section>
  );
}
