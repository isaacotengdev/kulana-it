"use client";

import { ArrowRight, Handshake } from "lucide-react";
import Image from "next/image";

const pillars = [
  {
    label: "African Expertise",
    sub: "Ghana & Mauritius",
    icon: (
      <Image
        src="/images/africa-map.svg"
        alt="Africa map"
        width={56}
        height={56}
        className="w-14 h-14"
        unoptimized
      />
    ),
  },
  {
    label: "End-to-End Solutions",
    sub: "Strategy to Implementation",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="#00D4EE" strokeWidth="3.5" strokeLinecap="round" className="w-14 h-14">
        {/* Center hub */}
        <circle cx="32" cy="32" r="6" fill="#00D4EE" stroke="none"/>
        {/* Satellite nodes */}
        <circle cx="13" cy="18" r="4"/>
        <circle cx="50" cy="14" r="4"/>
        <circle cx="54" cy="38" r="4"/>
        <circle cx="18" cy="52" r="4"/>
        {/* Connecting lines */}
        <line x1="27" y1="28" x2="17" y2="22"/>
        <line x1="37" y1="27" x2="46" y2="18"/>
        <line x1="38" y1="34" x2="50" y2="37"/>
        <line x1="28" y1="37" x2="22" y2="48"/>
      </svg>
    ),
  },
  {
    label: "Global Standards",
    sub: "Certified Processes & Partnerships",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="#00D4EE" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-14">
        {/* Rounded shield */}
        <path d="M32 8 L51 17 L51 34 C51 46 32 56 32 56 C32 56 13 46 13 34 L13 17 Z"/>
        {/* Checkmark */}
        <polyline points="22,33 29,40 43,25"/>
      </svg>
    ),
  },
  {
    label: "Long-Term Support",
    sub: "Support & Knowledge Transfer",
    icon: <Handshake className="w-14 h-14" stroke="#00D4EE" strokeWidth={2} />,
  },
];

export default function About() {
  return (
    <section id="about" className="py-20" style={{ background: "#f9fffe" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section label with line */}
        <div className="flex items-center gap-4 mb-10">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500">
            About Kulana IT
          </span>
          <div className="flex-1 h-px bg-gray-300" />
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
              <div className="mb-5">{p.icon}</div>
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
