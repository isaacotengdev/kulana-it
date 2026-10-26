"use client";

import { useState, type ReactNode } from "react";
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
      "Mission-critical systems that power financial institutions\nand enterprises with reliability, security, and performance\nat scale. We help you modernise, integrate and manage your\ncore systems so you can focus on what matters most\n– your business.",
    services: [
      { name: "Core Banking",  href: "/core-banking" },
      { name: "ERP & CRM",     href: "/erp-and-crm" },
      { name: "Infrastructure", href: "/infrastructure" },
      { name: "Cybersecurity", href: "/cybersecurity" },
    ],
    href: "/core-enterprise-systems",
    image: "/images/Links_homepage/1-image_1600x1000px.webp",
    imageTagline: "STABLE SYSTEMS.\nSTRONGER BUSINESS.",
  },
  {
    number: "02",
    tagline: "Connect Your Digital Ecosystem",
    title: "Integration & Digital Connectivity",
    description:
      "Connect systems, platforms and people across your organisation.\nOur integration and architecture expertise helps you unlock\nnew possibilities and accelerate your digital transformation.",
    descEl: <>Connect systems, platforms and people across your organisation. Our integration<br />and architecture expertise helps you unlock new possibilities and accelerate your<br />digital transformation.</> as ReactNode,
    services: [
      { name: "Integration",                   href: "/integration" },
      { name: "Enterprise Architecture",       href: "/enterprise-architecture" },
      { name: "AI-Native Product Engineering", href: "/ai-native-product-engineering" },
    ],
    href: "/integration-digital-connectivity",
    image: "/images/Links_homepage/Integration and Digital Connectivity_image_1600x1000px.webp",
    imageTagline: "Connected for\nWhat's Next.",
  },
  {
    number: "03",
    tagline: "Turn Data Into Business Advantage",
    title: "Data & AI Intelligence",
    description:
      "Turn your data into insight, automation and measurable impact.\nWe design data strategies and AI solutions that help you make\nsmarter decisions and create new value.",
    services: [
      { name: "Data", href: "/data" },
      { name: "AI",   href: "/ai" },
      { name: "RPA",  href: "/rpa" },
    ],
    href: "/data-ai-intelligence",
    image: "/images/Links_homepage/3-image_1600x1000px.webp",
    imageTagline: "Data Today.\nOpportunities Tomorrow.",
  },
  {
    number: "04",
    tagline: "Build the Skills to Move Forward",
    title: "Kulana Academy",
    description:
      "People make transformation happen. Our industry-aligned\nprogrammes equip your workforce with the skills and confidence\nto thrive in a digital world.",
    services: [] as { name: string; href: string }[],
    href: "https://www.kulana.academy/",
    external: true,
    image: "/images/Links_homepage/4-image_1600x1000px.webp",
    imageTagline: "Skills That Move\nYou Forward.",
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="services" style={{ background: "#ffffff" }}>

      {/* ── Intro header ── */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-8">
        <div className="mb-6">
          <span className="tracking-normal uppercase" style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "clamp(13px, 1vw, 14px)" }}>
            Our Services
          </span>
          <div className="w-full h-px mt-3" style={{ background: "#000000" }} />
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <h2 className="leading-tight" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(18px, 1.8vw, 26px)" }}>
            What Can We Solve<br />for You?
          </h2>
          <p className="lg:pt-2" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1.2vw, 18px)", lineHeight: "1.4" }}>
            Four integrated pillars delivering end-to-end technology solutions — from enterprise systems and digital connectivity to data intelligence and capability building.
          </p>
        </div>
      </div>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full h-px" style={{ background: "#e5e7eb" }} />
      </div>

      {/* ── Pillar rows ── */}
      {pillars.map((pillar, i) => {
        const isOpen = openIndex === i;

        return isOpen ? (

          /* ── EXPANDED ── */
          <div key={pillar.number} className="relative overflow-hidden lg:min-h-[460px]" style={{ background: "#200044" }}>

            {/* Image — absolute, covers right 35% */}
            <div className="absolute top-0 right-0 bottom-0 w-[35%] hidden lg:block">
              <Image src={pillar.image} alt={pillar.title} fill className="object-cover" sizes="35vw" />
              <div className="absolute bottom-10 left-8">
                <span className="w-8 h-px block mb-3" style={{ background: "#57D9D4" }} />
                <p className="text-2xl uppercase leading-snug whitespace-pre-line"
                  style={{ fontFamily: MF, fontWeight: 400, color: "#57D9D4" }}>
                  {pillar.imageTagline}
                </p>
              </div>
            </div>

            {/* Content — container-aligned; number sits just outside the left padding */}
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-9 relative">

              {/* Number — absolute inside content div, pulled left flush to text start */}
              <span
                className="hidden lg:block absolute leading-none select-none"
                style={{
                  left: 0,
                  top: "3rem",
                  transform: "translateX(calc(-100% - 12px))",
                  fontFamily: MF, fontWeight: 400, color: "#57D9D4",
                  fontSize: "clamp(24px, 2.85vw, 41px)",
                }}
              >
                {pillar.number}
              </span>

              {/* Mobile collapse button */}
              <button
                onClick={() => setOpenIndex(-1)}
                className="lg:hidden absolute top-6 right-4 w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/10 transition-all"
              >
                <Minus className="w-4 h-4" />
              </button>

              {/* Mobile number */}
              <span className="block lg:hidden leading-none select-none mb-4"
                style={{ fontFamily: MF, fontWeight: 400, color: "#57D9D4", fontSize: "clamp(24px, 2.85vw, 41px)" }}>
                {pillar.number}
              </span>

              <p className="tracking-normal uppercase mb-2"
                style={{ fontFamily: MF, fontWeight: 600, color: "#57D9D4", fontSize: "clamp(13px, 1vw, 14px)" }}>
                {pillar.tagline}
              </p>

              {/* Collapse button — at top of image boundary */}
              <button
                onClick={() => setOpenIndex(-1)}
                className="hidden lg:flex absolute w-10 h-10 rounded-full border border-white/40 items-center justify-center text-white hover:bg-white/10 transition-all"
                style={{ top: "1.5rem", right: "34%" }}
              >
                <Minus className="w-4 h-4" />
              </button>
              <h2 className="leading-tight text-white mb-6"
                style={{ fontFamily: MF, fontWeight: 700, fontSize: "clamp(18px, 1.8vw, 26px)" }}>
                {pillar.title}
              </h2>

              {/* Description + services */}
              <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-8 mb-8">
                <p className="lg:max-w-[48%]" style={{ fontFamily: MF, fontWeight: 400, color: "#ffffff", fontSize: "clamp(13px, 1vw, 14px)", lineHeight: "1.5", whiteSpace: "pre-line" }}>
                  {pillar.description}
                </p>
                {pillar.services.length > 0 && (
                  <ul className="flex-shrink-0 text-white">
                    {pillar.services.map((svc) => (
                      <li key={svc.name}>
                        <Link href={svc.href} className="group/svc flex items-center gap-2 hover:text-[#57D9D4] transition-colors"
                          style={{ fontFamily: MF, fontWeight: 700, fontSize: "clamp(13px, 1vw, 14px)", lineHeight: "1.4" }}>
                          <ArrowRight className="w-4 h-4 flex-shrink-0 transition-transform group-hover/svc:translate-x-0.5" style={{ color: "#57D9D4", strokeWidth: 2.5 }} />
                          <span className="underline-offset-4 group-hover/svc:underline">{svc.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* CTA */}
              {"external" in pillar && pillar.external ? (
                <a href={pillar.href} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-md transition-all hover:opacity-90"
                  style={{ fontFamily: MF, fontWeight: 600, background: "#57D9D4", color: "#040d28", fontSize: "13px" }}>
                  Explore {pillar.title} <ArrowRight className="w-4 h-4" />
                </a>
              ) : (
                <Link href={pillar.href}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-md transition-all hover:opacity-90"
                  style={{ fontFamily: MF, fontWeight: 600, background: "#57D9D4", color: "#040d28", fontSize: "13px" }}>
                  Explore {pillar.title} <ArrowRight className="w-4 h-4" />
                </Link>
              )}

            </div>

          </div>

        ) : (

          /* ── COLLAPSED ── */
          <div key={pillar.number} style={{ background: "#ffffff" }}>
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="w-full h-px" style={{ background: "#e5e7eb" }} />
              <div className="grid grid-cols-[auto_1fr] lg:grid-cols-[auto_1fr_auto] gap-4 lg:gap-8 items-start py-8 lg:py-10 lg:pl-16">

                {/* Number */}
                <span
                  className="leading-none select-none flex-shrink-0 lg:-ml-16"
                  style={{ fontFamily: MF, fontWeight: 400, color: "#a198af", fontSize: "clamp(24px, 2.85vw, 41px)" }}
                >
                  {pillar.number}
                </span>

                {/* Text */}
                <div>
                  <p className="tracking-normal uppercase mb-1"
                    style={{ fontFamily: MF, fontWeight: 600, color: "#a198af", fontSize: "clamp(13px, 1vw, 14px)" }}>
                    {pillar.tagline}
                  </p>
                  <h3 className="leading-tight"
                    style={{ fontFamily: MF, fontWeight: 700, color: "#200044", fontSize: "clamp(18px, 1.8vw, 26px)", marginBottom: "25px" }}>
                    {pillar.title}
                  </h3>
                  <p className="max-w-xl" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1vw, 14px)", lineHeight: "1.5" }}>
                    {"descEl" in pillar ? pillar.descEl : pillar.description}
                  </p>
                </div>

                {/* Button + Image — top-aligned, button flush left of image */}
                <div className="hidden lg:flex items-start gap-3 self-start flex-shrink-0">
                  <button
                    onClick={() => setOpenIndex(i)}
                    className="mt-1 w-9 h-9 flex items-center justify-center transition-all border rounded-full flex-shrink-0"
                    style={{ borderColor: "#a198af", color: "#a198af", background: "#ffffff" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#57D9D4"; (e.currentTarget as HTMLElement).style.color = "#57D9D4"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#a198af"; (e.currentTarget as HTMLElement).style.color = "#a198af"; }}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                  <div className="relative overflow-hidden flex-shrink-0"
                    style={{ width: "432px", aspectRatio: "16/10" }}>
                    <Image src={pillar.image} alt={pillar.title} fill className="object-cover" sizes="432px" />
                    <div className="absolute inset-0 flex flex-col justify-center pl-5 pr-4"
                      style={{ background: "rgba(8,13,40,0.25)" }}>
                      <span className="w-8 h-px block mb-3" style={{ background: "#ffffff" }} />
                      <p className="text-xl leading-snug whitespace-pre-line"
                        style={{ fontFamily: MF, fontWeight: 400, color: "#ffffff" }}>
                        {pillar.imageTagline}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mobile expand button */}
                <button
                  onClick={() => setOpenIndex(i)}
                  className="lg:hidden col-start-2 flex self-start mt-1 w-9 h-9 items-center justify-center transition-all border rounded-full flex-shrink-0"
                  style={{ borderColor: "#a198af", color: "#a198af", background: "#ffffff" }}
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
