"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

const MF = "var(--font-manrope), sans-serif";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Fallback image — shown until the video loads, or if WebM is unsupported */}
      <Image
        src="/images/Links_homepage/Hero image_2560×1440px.webp"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority
      />
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover object-center"
        src="/images/Service_Core & Enterprise Systems/globe-2-aurora.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ background: "rgba(8, 0, 32, 0.3)" }} />

      <div
        className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ paddingTop: "calc(80px + clamp(32px, 6vw, 90px))", paddingBottom: "clamp(40px, 6vw, 90px)" }}
      >
        {/* Eyebrow — no border, plain text */}
        <span
          className="inline-block tracking-normal uppercase mb-6"
          style={{ fontFamily: MF, fontWeight: 600, color: "#57D9D4", fontSize: "clamp(13px, 1.2vw, 18px)" }}
        >
          Trusted IT Partner&nbsp;&nbsp;|&nbsp;&nbsp;Ghana and Mauritius
        </span>

        <h1
          className="text-white uppercase leading-tight select-none"
          style={{ fontFamily: MF, fontWeight: 500, fontSize: "clamp(32px, 4vw, 53px)" }}
        >
          Technology
          <br />
          Experts For
          <br />
          Your Business.
        </h1>

        <div className="flex flex-wrap gap-4" style={{ marginTop: "clamp(40px, 6vw, 90px)" }}>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md transition-all shadow-lg hover:-translate-y-0.5"
            style={{ fontFamily: MF, fontWeight: 600, fontSize: "13px", background: "#57D9D4", color: "#040d28" }}
          >
            Request a Consultation
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent rounded-md hover:bg-white/10 transition-all border"
            style={{ fontFamily: MF, fontWeight: 600, fontSize: "13px", color: "#57D9D4", borderColor: "#57D9D4" }}
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
