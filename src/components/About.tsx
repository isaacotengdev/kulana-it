"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

const MF = "var(--font-manrope), sans-serif";

const pillars = [
  {
    label: "African Expertise",
    sub: "Ghana & Mauritius",
    icon: "/images/Links_homepage/Map_icon_64x64px.svg",
  },
  {
    label: "End-to-End Solutions",
    sub: "Strategy to Implementation",
    icon: "/images/Links_homepage/End-to-end_icon_64x64px.svg",
  },
  {
    label: "Global Standards",
    sub: "Certified Processes & Partnerships",
    icon: "/images/Links_homepage/Standards_icon_64x64px.svg",
  },
  {
    label: "Long-Term Support",
    sub: "Support & Knowledge Transfer",
    icon: "/images/Links_homepage/Handshake_icon_64x64px.svg",
  },
];

export default function About() {
  return (
    <section id="about" className="py-12" style={{ background: "#f9fffe" }}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section label with line */}
        <div className="mb-6">
          <span
            className="tracking-normal uppercase"
            style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "clamp(13px, 1vw, 14px)" }}
          >
            About Kulana IT
          </span>
          <div className="w-full h-px mt-3" style={{ background: "#000000" }} />
        </div>

        {/* Heading + description row */}
        <div className="grid lg:grid-cols-2 gap-8 mb-6 items-start">
          <h2
            className="leading-tight"
            style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(18px, 1.8vw, 26px)" }}
          >
            Driving Digital Transformation<br />Across Africa
          </h2>
          <p
            className="lg:pt-2"
            style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1.2vw, 18px)", lineHeight: "1.4" }}
          >
            We combine global technology expertise with deep local knowledge to
            help organisations across Africa modernise, connect and grow.
          </p>
        </div>

        {/* Four pillars */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {pillars.map((p) => (
            <div key={p.label} className="flex flex-col items-center text-center">
              <div className="mb-5">
                <Image src={p.icon} alt={p.label} width={64} height={64} className="w-14 h-14" unoptimized />
              </div>
              <p
                className="tracking-normal uppercase mb-2"
                style={{ fontFamily: MF, fontWeight: 700, color: "#000000", fontSize: "clamp(13px, 1vw, 14px)", lineHeight: "1.5" }}
              >
                {p.label}
              </p>
              <p style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1vw, 14px)", lineHeight: "1.5" }}>
                {p.sub}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <a
            href="/about-us"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md transition-all hover:opacity-90"
            style={{ fontFamily: MF, fontWeight: 600, fontSize: "13px", background: "#57d9d4", color: "#040d28" }}
          >
            Discover Kulana
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
