"use client";

import { ArrowRight } from "lucide-react";

const pillars = [
  {
    label: "African Expertise",
    sub: "Ghana & Mauritius",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="#57EBBB" strokeWidth="2" className="w-14 h-14">
        {/* Africa outline — simplified */}
        <path d="M28 8 c-4 1-8 3-10 7-3 4-3 8-2 12-2 2-4 4-4 8 0 5 2 9 5 13 2 3 4 6 4 10 1 4 3 7 6 8 2 1 5 0 7-2 3-3 4-7 4-11 2-1 5-2 6-5 2-3 1-7-1-9 3-2 5-5 5-9 0-5-2-9-5-13-1-2-3-3-4-5-1-3 0-6-2-8-2-2-5-3-9-2z" strokeLinejoin="round"/>
        <circle cx="24" cy="42" r="1.5" fill="#57EBBB" stroke="none"/>
      </svg>
    ),
  },
  {
    label: "End-to-End Solutions",
    sub: "Strategy to Implementation",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="#57EBBB" strokeWidth="2" className="w-14 h-14">
        <circle cx="32" cy="32" r="5" fill="#57EBBB" stroke="none"/>
        <circle cx="14" cy="22" r="3.5"/>
        <circle cx="50" cy="22" r="3.5"/>
        <circle cx="14" cy="44" r="3.5"/>
        <circle cx="50" cy="44" r="3.5"/>
        <line x1="32" y1="27" x2="14" y2="25.5"/>
        <line x1="32" y1="27" x2="50" y2="25.5"/>
        <line x1="32" y1="37" x2="14" y2="40.5"/>
        <line x1="32" y1="37" x2="50" y2="40.5"/>
      </svg>
    ),
  },
  {
    label: "Global Standards",
    sub: "Certified Processes & Partnerships",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="#57EBBB" strokeWidth="2" className="w-14 h-14">
        <path d="M32 10 L50 18 L50 34 C50 45 32 54 32 54 C32 54 14 45 14 34 L14 18 Z" strokeLinejoin="round"/>
        <polyline points="24,32 30,38 42,26" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Long-Term Support",
    sub: "Support & Knowledge Transfer",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="#57EBBB" strokeWidth="2" className="w-14 h-14">
        <path d="M10 38 C10 38 14 28 22 28 C26 28 28 32 32 32 C36 32 38 28 42 28 C50 28 54 38 54 38" strokeLinecap="round"/>
        <path d="M10 38 L14 44 C18 50 26 52 32 48 C38 52 46 50 50 44 L54 38" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 28 C22 22 27 18 32 18 C37 18 42 22 42 28" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="py-20" style={{ background: "#eaf9f9" }}>
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
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold transition-all hover:scale-105"
            style={{ background: "#57EBBB", color: "#040d28" }}
          >
            Discover Kulana
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
