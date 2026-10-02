"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const MF = "var(--font-manrope), sans-serif";

const quickLinks = [
  { name: "Our Services",           href: "/our-services" },
  { name: "Kulana Academy",         href: "https://www.kulana.academy/", external: true },
  { name: "About us",               href: "/about-us" },
  { name: "Contact us",             href: "/contact-us" },
  { name: "Request a Consultation", href: "/contact-us" },
  { name: "Privacy Policy",         href: "/privacy-policy" },
  { name: "Cookies Policy",         href: "/cookies-policy" },
  { name: "IMS Policy",             href: "/ims-policy" },
];

const servicePillars = [
  {
    name: "Core & Enterprise Systems",
    subs: [
      { name: "Core Banking",   href: "/core-banking" },
      { name: "ERP & CRM",     href: "/erp-and-crm" },
      { name: "Infrastructure", href: "/infrastructure" },
      { name: "Cybersecurity",  href: "/cybersecurity" },
    ],
  },
  {
    name: "Integration & Digital Connectivity",
    subs: [
      { name: "Integration",                  href: "/integration" },
      { name: "Enterprise Architecture",       href: "/enterprise-architecture" },
      { name: "AI-Native Product Engineering", href: "/ai-native-product-engineering" },
    ],
  },
  {
    name: "Data & AI Intelligence",
    subs: [
      { name: "Data Analytics", href: "/data-analytics" },
      { name: "AI Solutions",   href: "/ai-solutions" },
      { name: "RPA",            href: "/rpa" },
    ],
  },
  { name: "Kulana Academy", subs: [] },
];

export default function Footer() {
  const [openPillar, setOpenPillar] = useState<string | null>(null);

  return (
    <footer style={{ background: "#200044", fontFamily: MF }}>

      {/* ── Top: logo + ISO badge ── */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10 flex flex-wrap items-start justify-between gap-4">
        <Link href="/">
          <Image
            src="/logos/logo.svg"
            alt="Kulana IT Solutions"
            width={210} height={67}
            className="h-[64px] w-auto object-contain"
            unoptimized priority
          />
        </Link>
        <span
          className="px-5 py-2 rounded-md text-xs tracking-wide"
          style={{ fontFamily: MF, fontWeight: 600, background: "#57D9D4", color: "#200044" }}
        >
          ISO 9001 and 27001 Certified
        </span>
      </div>

      {/* ── Main grid ── */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-12">

        {/* Col 1 — tagline + offices */}
        <div>
          <p className="text-sm leading-relaxed mb-8" style={{ fontFamily: MF, fontWeight: 400, color: "#ffffff" }}>
            Technology Value Creators – empowering organisations in Ghana and
            Mauritius through enterprise-grade IT solutions and expert consultancy.
          </p>

          {/* Ghana */}
          <div className="mb-7">
            <p className="text-xs tracking-[0.18em] uppercase mb-2" style={{ fontFamily: MF, fontWeight: 600, color: "#57D9D4" }}>Ghana</p>
            <p className="text-sm mb-2" style={{ fontFamily: MF, fontWeight: 400, color: "#ffffff" }}>The Rhombus, HRJ5+J6Q, Kanda, Accra</p>
            <a href="tel:+233540127400" className="block text-sm hover:opacity-80 transition-opacity" style={{ fontFamily: MF, fontWeight: 400, color: "#57D9D4" }}>+233 540 127 400</a>
            <a href="mailto:contact@kulana.net" className="block text-sm hover:opacity-80 transition-opacity" style={{ fontFamily: MF, fontWeight: 400, color: "#57D9D4" }}>contact@kulana.net</a>
          </div>

          {/* Mauritius */}
          <div>
            <p className="text-xs tracking-[0.18em] uppercase mb-2" style={{ fontFamily: MF, fontWeight: 600, color: "#57D9D4" }}>Mauritius</p>
            <p className="text-sm mb-2" style={{ fontFamily: MF, fontWeight: 400, color: "#ffffff" }}>
              Ground Floor Nexsky Building,<br />Hotel Avenue, Cybercity Ebene
            </p>
            <a href="tel:+23046325190" className="block text-sm hover:opacity-80 transition-opacity" style={{ fontFamily: MF, fontWeight: 400, color: "#57D9D4" }}>+230 46 32 519</a>
            <a href="mailto:contact@kulana.net" className="block text-sm hover:opacity-80 transition-opacity" style={{ fontFamily: MF, fontWeight: 400, color: "#57D9D4" }}>contact@kulana.net</a>
          </div>
        </div>

        {/* Col 2 — Quick Links */}
        <div>
          <p className="text-xs tracking-[0.18em] uppercase mb-5" style={{ fontFamily: MF, fontWeight: 600, color: "#57D9D4" }}>Quick Links</p>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.name}>
                {"external" in link && link.external ? (
                  <a href={link.href} target="_blank" rel="noopener noreferrer"
                    className="text-sm hover:opacity-70 transition-opacity"
                    style={{ fontFamily: MF, fontWeight: 400, color: "#ffffff" }}>
                    {link.name}
                  </a>
                ) : (
                  <Link href={link.href}
                    className="text-sm hover:opacity-70 transition-opacity"
                    style={{ fontFamily: MF, fontWeight: 400, color: "#ffffff" }}>
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Our Services accordion */}
        <div>
          <p className="text-xs tracking-[0.18em] uppercase mb-5" style={{ fontFamily: MF, fontWeight: 600, color: "#57D9D4" }}>Our Services</p>
          <ul className="space-y-1">
            {servicePillars.map((pillar) => {
              const isOpen = openPillar === pillar.name;
              return (
                <li key={pillar.name}>
                  <button
                    onClick={() => setOpenPillar(isOpen ? null : pillar.name)}
                    className="w-full text-left flex items-center justify-between py-2 text-sm hover:opacity-70 transition-opacity"
                    style={{ fontFamily: MF, fontWeight: 600, color: "#57D9D4" }}
                  >
                    <span>{pillar.name}</span>
                    <span className="text-base leading-none" style={{ transform: isOpen ? "rotate(90deg)" : "none", display: "inline-block", transition: "transform 0.2s" }}>›</span>
                  </button>
                  {isOpen && pillar.subs.length > 0 && (
                    <ul className="mt-1 mb-2 space-y-2 pl-2 border-l border-white/10">
                      {pillar.subs.map((sub) => (
                        <li key={sub.name}>
                          <Link href={sub.href}
                            className="text-sm hover:opacity-70 transition-opacity"
                            style={{ fontFamily: MF, fontWeight: 400, color: "#ffffff" }}>
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-end justify-between gap-6">

        {/* Large tagline */}
        <p className="text-3xl lg:text-4xl leading-tight" style={{ fontFamily: MF, fontWeight: 500, color: "#ffffff" }}>
          Technology<br />Value creators.
        </p>

        {/* Social icons + copyright */}
        <div className="flex flex-col items-end gap-4">
          <div className="flex items-center gap-2">
            {/* Facebook */}
            <a href="https://www.facebook.com/kulana.net" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center transition-opacity hover:opacity-80"
              style={{ background: "#57D9D4", borderRadius: 4 }}>
              <svg className="w-4 h-4" fill="#200044" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/company/kulana-it-solutions" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center transition-opacity hover:opacity-80"
              style={{ background: "#57D9D4", borderRadius: 4 }}>
              <svg className="w-4 h-4" fill="#200044" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
          <p className="text-xs" style={{ fontFamily: MF, fontWeight: 600, color: "#57D9D4" }}>
            &copy; 2026 Kulana – Technology Value Creators. All rights reserved.
          </p>
        </div>
      </div>

    </footer>
  );
}
