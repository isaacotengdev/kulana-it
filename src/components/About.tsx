"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

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
    <section id="about" className="py-20" style={{ background: "#f9fffe" }}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section label with line */}
        <div className="mb-10">
          <span
            className="text-xs tracking-[0.2em] uppercase"
            style={{ fontFamily: "var(--font-manrope), sans-serif", fontWeight: 600, color: "#000000" }}
          >
            About Kulana IT
          </span>
          <div className="w-full h-px mt-3" style={{ background: "#000000" }} />
        </div>

        {/* Heading + description row */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-start">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Driving Digital Transformation<br />Across Africa
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed lg:pt-2">
            We combine global technology expertise with deep local knowledge to
            help organisations across Africa modernise, connect and grow.
          </p>
        </div>

        {/* Four pillars */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
          {pillars.map((p) => (
            <div key={p.label} className="flex flex-col items-center text-center">
              <div className="mb-5">
                <Image src={p.icon} alt={p.label} width={64} height={64} className="w-14 h-14" unoptimized />
              </div>
              <p className="text-xs font-bold tracking-[0.15em] uppercase text-[#1a0060] mb-2">
                {p.label}
              </p>
              <p className="text-sm text-gray-600 leading-snug">{p.sub}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <a
            href="/kulana"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md text-sm font-semibold transition-all hover:shadow-lg hover:shadow-[#00D4EE]/40"
            style={{ background: "#00D4EE", color: "#040d28" }}
          >
            Discover Kulana
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
