"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Plus, Minus, ArrowRight } from "lucide-react";

const pillars = [
  {
    number: "01",
    tagline: "Keep Your Critical Systems Running",
    title: "Core & Enterprise Systems",
    description:
      "Mission-critical systems that power financial institutions and enterprises with reliability, security, and performance at scale. We help you modernise, integrate and manage your core systems so you can focus on what matters most – your business.",
    services: ["Core Banking", "ERP & CRM", "Infrastructure", "Cybersecurity"],
    href: "/core-enterprise-systems",
    image: "/images/kulana/hero.jpg",
    imageTagline: "STABLE SYSTEMS.\nSTRONGER BUSINESS.",
  },
  {
    number: "02",
    tagline: "Connect Your Digital Ecosystem",
    title: "Integration & Digital Connectivity",
    description:
      "Connect systems, platforms and people across your organisation. Our integration and architecture expertise helps you unlock new possibilities and accelerate your digital transformation.",
    services: ["Integration", "Enterprise Architecture", "AI-Native Product Engineering"],
    href: "/integration-digital-connectivity",
    image: "/images/about/step-5-reporting.jpg",
    imageTagline: "Connected for\nWhat's Next.",
  },
  {
    number: "03",
    tagline: "Turn Data Into Business Advantage",
    title: "Data & AI Intelligence",
    description:
      "Turn your data into insight, automation and measurable impact. We design data strategies and AI solutions that help you make smarter decisions and create new value.",
    services: ["Data", "AI", "RPA"],
    href: "/data-ai-intelligence",
    image: "/images/about/step-1-assessment.jpg",
    imageTagline: "Data Today.\nOpportunities Tomorrow.",
  },
  {
    number: "04",
    tagline: "Build the Skills to Move Forward",
    title: "Kulana Academy",
    description:
      "People make transformation happen. Our industry-aligned programmes equip your workforce with the skills and confidence to thrive in a digital world.",
    services: [] as string[],
    href: "https://www.kulana.academy/",
    external: true,
    image: "/images/about/step-3-implementation.jpg",
    imageTagline: "Skills That Move\nYou Forward.",
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="services" className="bg-white">
      {pillars.map((pillar, i) => {
        const isOpen = openIndex === i;

        return isOpen ? (
          /* ── EXPANDED ROW ── */
          <div
            key={pillar.number}
            className="relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #2d0070 0%, #080d28 50%, #073b54 80%, #085d72 100%)" }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-0 min-h-[420px]">

                {/* Left — content */}
                <div className="py-14 pr-0 lg:pr-16 flex flex-col justify-center">
                  <div className="flex items-start gap-6 mb-6">
                    <span className="text-5xl font-black text-[#57EBBB] leading-none flex-shrink-0">
                      {pillar.number}
                    </span>
                    <div>
                      <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#57EBBB] mb-2">
                        {pillar.tagline}
                      </p>
                      <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                        {pillar.title}
                      </h2>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-x-12 gap-y-2 mb-8">
                    <p className="text-white/70 text-sm leading-relaxed lg:col-span-1">
                      {pillar.description}
                    </p>
                    {pillar.services.length > 0 && (
                      <ul className="space-y-2">
                        {pillar.services.map((svc) => (
                          <li key={svc} className="flex items-center gap-2 text-[#57EBBB] font-semibold text-sm">
                            <ArrowRight className="w-4 h-4 flex-shrink-0" />
                            {svc}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {pillar.external ? (
                    <a
                      href={pillar.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="self-start inline-flex items-center gap-2 px-7 py-3 border border-[#57EBBB] text-[#57EBBB] text-sm font-semibold rounded-md hover:bg-[#57EBBB] hover:text-[#040d28] transition-all"
                    >
                      Explore {pillar.title} <ArrowRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <Link
                      href={pillar.href}
                      className="self-start inline-flex items-center gap-2 px-7 py-3 border border-[#57EBBB] text-[#57EBBB] text-sm font-semibold rounded-md hover:bg-[#57EBBB] hover:text-[#040d28] transition-all"
                    >
                      Explore {pillar.title} <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>

                {/* Right — photo with tagline + collapse button */}
                <div className="relative hidden lg:block">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                  <div className="absolute inset-0 bg-[#080d28]/55" />
                  {/* tagline */}
                  <div className="absolute bottom-10 left-8 right-8">
                    <span className="w-8 h-px bg-[#57EBBB] block mb-3" />
                    <p className="text-2xl font-bold text-[#57EBBB] uppercase leading-snug whitespace-pre-line">
                      {pillar.imageTagline}
                    </p>
                  </div>
                  {/* collapse button */}
                  <button
                    onClick={() => setOpenIndex(-1)}
                    className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/10 transition-all"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </div>

            {/* Mobile collapse button */}
            <button
              onClick={() => setOpenIndex(-1)}
              className="lg:hidden absolute top-6 right-6 w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white"
            >
              <Minus className="w-4 h-4" />
            </button>
          </div>

        ) : (
          /* ── COLLAPSED ROW ── */
          <div
            key={pillar.number}
            className="border-b border-gray-100 last:border-0"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-[auto_1fr_auto_auto] gap-8 items-center py-10">

                {/* Number */}
                <span className="text-6xl font-black text-gray-200 leading-none w-20 select-none">
                  {pillar.number}
                </span>

                {/* Text */}
                <div>
                  <p className="text-xs font-bold tracking-[0.18em] uppercase text-gray-400 mb-1">
                    {pillar.tagline}
                  </p>
                  <h3 className="text-xl lg:text-2xl font-bold text-[#1a0060] mb-2 leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-lg">
                    {pillar.description}
                  </p>
                </div>

                {/* Thumbnail */}
                <div className="hidden lg:block relative w-52 h-32 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    className="object-cover"
                    sizes="208px"
                  />
                  <div className="absolute inset-0 bg-[#080d28]/50" />
                  <p className="absolute bottom-3 left-3 right-3 text-white text-xs font-semibold leading-snug whitespace-pre-line">
                    {pillar.imageTagline}
                  </p>
                </div>

                {/* Expand button */}
                <button
                  onClick={() => setOpenIndex(i)}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:border-[#57EBBB] hover:text-[#57EBBB] transition-all flex-shrink-0"
                >
                  <Plus className="w-4 h-4" />
                </button>

              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
