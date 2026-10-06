"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Plus, Minus, ArrowRight } from "lucide-react";

const MF = "var(--font-manrope), sans-serif";

const pillars = [
  {
    number: "01",
    tagline: "Keep Your Critical Systems Running",
    title: "Core & Enterprise Systems",
    description:
      "Mission-critical systems that power financial institutions and enterprises with reliability, security, and performance at scale. We help you modernise, integrate and manage your core systems so you can focus on what matters most – your business.",
    services: ["Core Banking", "ERP & CRM", "Infrastructure", "Cybersecurity"],
    href: "/core-enterprise-systems",
    image: "/images/Links_homepage/1-image_1600x1000px.webp",
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
    image: "/images/Links_homepage/2-image_1600x1000px.png",
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
    image: "/images/Links_homepage/3-image_1600x1000px.webp",
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
    image: "/images/Links_homepage/4-image_1600x1000px.webp",
    imageTagline: "Skills That Move\nYou Forward.",
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="services" style={{ background: "#f1ffff" }}>

      {/* ── Intro header ── */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="mb-10">
          <span className="text-xs tracking-[0.2em] uppercase" style={{ fontFamily: MF, fontWeight: 600, color: "#000000" }}>
            Our Services
          </span>
          <div className="w-full h-px mt-3" style={{ background: "#000000" }} />
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
            What Can We Solve<br />for You?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed lg:pt-2">
            Four integrated pillars delivering end-to-end technology solutions — from enterprise systems and digital connectivity to data intelligence and capability building.
          </p>
        </div>
      </div>

      {/* ── Pillar rows ── */}
      {pillars.map((pillar, i) => {
        const isOpen = openIndex === i;

        return isOpen ? (

          /* ── EXPANDED ── */
          <div key={pillar.number} className="relative overflow-hidden" style={{ background: "#200044" }}>
            <div className="grid lg:grid-cols-[2fr_1fr] min-h-[460px]">

              {/* Left — content */}
              <div
                className="relative py-10 lg:py-14 flex flex-col justify-center pr-4 lg:pr-16"
                style={{ paddingLeft: "clamp(1rem, calc((100vw - 89.75rem) / 2 + 2rem), 8rem)" }}
              >

                {/* Collapse button — top right of left panel */}
                <button
                  onClick={() => setOpenIndex(-1)}
                  className="absolute top-4 right-4 lg:top-6 lg:right-6 w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/10 transition-all"
                >
                  <Minus className="w-4 h-4" />
                </button>

                {/* Number + tagline/title block — number flows on mobile, absolute on desktop */}
                <div className="relative lg:pl-20 mb-6">
                  <span
                    className="block lg:absolute lg:left-0 lg:top-0 leading-none select-none mb-2 lg:mb-0"
                    style={{ fontFamily: MF, fontWeight: 400, color: "#57D9D4", fontSize: "clamp(2.5rem, 6vw, 3.75rem)" }}
                  >
                    {pillar.number}
                  </span>
                  <p
                    className="text-xs tracking-[0.18em] uppercase mb-2"
                    style={{ fontFamily: MF, fontWeight: 600, color: "#57D9D4" }}
                  >
                    {pillar.tagline}
                  </p>
                  <h2
                    className="text-3xl lg:text-5xl xl:text-6xl leading-tight text-white"
                    style={{ fontFamily: MF, fontWeight: 700 }}
                  >
                    {pillar.title}
                  </h2>
                </div>

                {/* Description + services list */}
                <div className="grid lg:grid-cols-2 gap-x-10 gap-y-4 mb-8 lg:pl-20">
                  <p className="text-base lg:text-lg leading-relaxed" style={{ fontFamily: MF, fontWeight: 400, color: "#ffffff" }}>
                    {pillar.description}
                  </p>
                  {pillar.services.length > 0 && (
                    <ul className="space-y-2">
                      {pillar.services.map((svc) => (
                        <li key={svc} className="flex items-center gap-2 text-base lg:text-lg" style={{ fontFamily: MF, fontWeight: 700, color: "#ffffff" }}>
                          <ArrowRight className="w-4 h-4 flex-shrink-0" style={{ color: "#57D9D4", strokeWidth: 2.5 }} />
                          {svc}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Solid CTA button */}
                <div className="lg:pl-20">
                  {"external" in pillar && pillar.external ? (
                    <a
                      href={pillar.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="self-start inline-flex items-center gap-2 px-7 py-3 rounded-md transition-all hover:opacity-90"
                      style={{ fontFamily: MF, fontWeight: 600, background: "#57D9D4", color: "#200044", fontSize: "0.875rem" }}
                    >
                      Explore {pillar.title} <ArrowRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <Link
                      href={pillar.href}
                      className="self-start inline-flex items-center gap-2 px-7 py-3 rounded-md transition-all hover:opacity-90"
                      style={{ fontFamily: MF, fontWeight: 600, background: "#57D9D4", color: "#200044", fontSize: "0.875rem" }}
                    >
                      Explore {pillar.title} <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>

              {/* Right — image flush to right edge, no padding */}
              <div className="relative hidden lg:block">
                <Image src={pillar.image} alt={pillar.title} fill className="object-cover" sizes="50vw" />
                {/* Tagline overlay */}
                <div className="absolute bottom-10 left-8 right-0">
                  <span className="w-8 h-px block mb-3" style={{ background: "#57D9D4" }} />
                  <p
                    className="text-2xl uppercase leading-snug whitespace-pre-line"
                    style={{ fontFamily: MF, fontWeight: 400, color: "#57D9D4" }}
                  >
                    {pillar.imageTagline}
                  </p>
                </div>
              </div>

            </div>

          </div>

        ) : (

          /* ── COLLAPSED ── */
          <div key={pillar.number} className="mb-2 lg:mb-10 last:mb-0" style={{ background: "#f1ffff" }}>
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-[auto_1fr_auto] lg:grid-cols-[auto_1fr_auto_auto] gap-4 lg:gap-8 items-start lg:items-center py-6 lg:py-10">

                {/* Number */}
                <span
                  className="leading-none w-12 lg:w-20 select-none"
                  style={{ fontFamily: MF, fontWeight: 400, color: "#a198af", fontSize: "clamp(2rem, 4vw, 3.75rem)" }}
                >
                  {pillar.number}
                </span>

                {/* Text */}
                <div>
                  <p
                    className="text-xs tracking-[0.18em] uppercase mb-1"
                    style={{ fontFamily: MF, fontWeight: 600, color: "#a198af" }}
                  >
                    {pillar.tagline}
                  </p>
                  <h3
                    className="text-lg lg:text-2xl leading-tight mb-2"
                    style={{ fontFamily: MF, fontWeight: 700, color: "#200044" }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed max-w-lg"
                    style={{ fontFamily: MF, fontWeight: 400, color: "#000000" }}
                  >
                    {pillar.description}
                  </p>
                </div>

                {/* Expand button — visible on all sizes */}
                <button
                  onClick={() => setOpenIndex(i)}
                  className="flex self-start mt-1 w-9 h-9 items-center justify-center transition-all border rounded-full flex-shrink-0"
                  style={{ borderColor: "#a198af", color: "#a198af", background: "#f1ffff" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#57D9D4"; (e.currentTarget as HTMLElement).style.color = "#57D9D4"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#a198af"; (e.currentTarget as HTMLElement).style.color = "#a198af"; }}
                >
                  <Plus className="w-4 h-4" />
                </button>

                {/* Thumbnail — desktop only, 4th column */}
                <div className="hidden lg:block relative w-72 h-52 overflow-hidden flex-shrink-0">
                  <Image src={pillar.image} alt={pillar.title} fill className="object-cover" sizes="288px" />
                  <div className="absolute inset-0" style={{ background: "rgba(8,13,40,0.02)" }} />
                  <div className="absolute inset-0 flex flex-col justify-center pl-5 pr-4">
                    <span className="w-8 h-px block mb-3" style={{ background: "#ffffff" }} />
                    <p
                      className="text-xl leading-snug whitespace-pre-line"
                      style={{ fontFamily: MF, fontWeight: 400, color: "#ffffff" }}
                    >
                      {pillar.imageTagline}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
