"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const MF = "var(--font-manrope), sans-serif";

const quickLinks = [
  { name: "Kulana Academy",         href: "https://www.kulana.academy/", external: true },
  { name: "About us",               href: "/about-us" },
  { name: "Contact us",             href: "/contact-us" },
  { name: "Request a Consultation", href: "/contact-us" },
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
      { name: "Data", href: "/data" },
      { name: "AI",   href: "/ai" },
      { name: "RPA",  href: "/rpa" },
    ],
  },
  { name: "Kulana Academy", href: "https://www.kulana.academy/", external: true, subs: [] },
];

export default function Footer() {
  const [openPillar, setOpenPillar] = useState<string | null>(null);

  return (
    <footer style={{ background: "#200044", fontFamily: MF }}>

      {/* ── Top: logo + ISO badge ── */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6 flex flex-wrap items-start justify-between gap-4">
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
          style={{ fontFamily: MF, fontWeight: 600, background: "#57D9D4", color: "#040d28" }}
        >
          ISO 9001 and 27001 Certified
        </span>
      </div>

      {/* ── Main grid ── */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 grid md:grid-cols-3 lg:grid-cols-[1.2fr_1fr_1.5fr] gap-10 md:gap-8 lg:gap-16">

        {/* Col 1 — tagline + offices */}
        <div>
          <p className="mb-8" style={{ fontFamily: MF, fontWeight: 400, color: "#ffffff", fontSize: "13px", lineHeight: "1.6" }}>
            Technology Value Creators – empowering organisations in Ghana and
            Mauritius through enterprise-grade IT solutions and expert consultancy.
          </p>

          {/* Ghana */}
          <div className="mb-8">
            <p className="tracking-normal uppercase mb-3" style={{ fontFamily: MF, fontWeight: 600, color: "#57D9D4", fontSize: "14px" }}>Ghana</p>
            <p className="mb-2" style={{ fontFamily: MF, fontWeight: 400, color: "#ffffff", fontSize: "13px", lineHeight: "1.6" }}>The Rhombus, HRJ5+J6Q, Kanda, Accra</p>
            <a href="tel:+233540127400" className="block hover:opacity-80 transition-opacity" style={{ fontFamily: MF, fontWeight: 400, color: "#57D9D4", fontSize: "13px", lineHeight: "1.6" }}>+233 540 127 400</a>
            <a href="mailto:contact@kulana.net" className="block hover:opacity-80 transition-opacity" style={{ fontFamily: MF, fontWeight: 400, color: "#57D9D4", fontSize: "13px", lineHeight: "1.6" }}>contact@kulana.net</a>
          </div>

          {/* Mauritius */}
          <div>
            <p className="tracking-normal uppercase mb-3" style={{ fontFamily: MF, fontWeight: 600, color: "#57D9D4", fontSize: "14px" }}>Mauritius</p>
            <p className="mb-2" style={{ fontFamily: MF, fontWeight: 400, color: "#ffffff", fontSize: "13px", lineHeight: "1.6" }}>
              Ground Floor Nexsky Building,<br />Hotel Avenue, Cybercity Ebene
            </p>
            <a href="tel:+23046325190" className="block hover:opacity-80 transition-opacity" style={{ fontFamily: MF, fontWeight: 400, color: "#57D9D4", fontSize: "13px", lineHeight: "1.6" }}>+230 46 32 519</a>
            <a href="mailto:contact@kulana.net" className="block hover:opacity-80 transition-opacity" style={{ fontFamily: MF, fontWeight: 400, color: "#57D9D4", fontSize: "13px", lineHeight: "1.6" }}>contact@kulana.net</a>
          </div>
        </div>

        {/* Col 2 — Quick Links */}
        <div className="lg:pl-8">
          <p className="tracking-normal uppercase mb-5" style={{ fontFamily: MF, fontWeight: 600, color: "#57D9D4", fontSize: "14px" }}>Quick Links</p>
          <ul className="space-y-0">
            {quickLinks.map((link) => (
              <li key={link.name} style={{ lineHeight: "1.6", marginBottom: "8px" }}>
                {"external" in link && link.external ? (
                  <a href={link.href} target="_blank" rel="noopener noreferrer"
                    className="hover:opacity-70 transition-opacity"
                    style={{ fontFamily: MF, fontWeight: 400, color: "#ffffff", fontSize: "13px" }}>
                    {link.name}
                  </a>
                ) : (
                  <Link href={link.href}
                    className="hover:opacity-70 transition-opacity"
                    style={{ fontFamily: MF, fontWeight: 400, color: "#ffffff", fontSize: "13px" }}>
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Our Services accordion */}
        <div>
          <p className="tracking-normal uppercase mb-5" style={{ fontFamily: MF, fontWeight: 600, color: "#57D9D4", fontSize: "14px" }}>Our Services</p>
          <ul className="space-y-1">
            {servicePillars.map((pillar) => {
              const isOpen = openPillar === pillar.name;
              const linkStyle = { fontFamily: MF, fontWeight: 600, color: "#57D9D4", fontSize: "13px" };
              return (
                <li key={pillar.name}>
                  {"href" in pillar ? (
                    <a
                      href={pillar.href}
                      target="_blank" rel="noopener noreferrer"
                      className="block py-2 hover:opacity-70 transition-opacity"
                      style={linkStyle}
                    >
                      {pillar.name}
                    </a>
                  ) : (
                    <button
                      onClick={() => setOpenPillar(isOpen ? null : pillar.name)}
                      className="w-full text-left flex items-center justify-between py-2 hover:opacity-70 transition-opacity"
                      style={linkStyle}
                    >
                      <span>{pillar.name}</span>
                      <span style={{ transform: isOpen ? "rotate(90deg)" : "none", display: "inline-block", transition: "transform 0.2s", fontSize: "13px" }}>›</span>
                    </button>
                  )}
                  {isOpen && pillar.subs.length > 0 && (
                    <ul className="mt-1 mb-2 space-y-2 pl-3 border-l border-white/10">
                      {pillar.subs.map((sub) => (
                        <li key={sub.name}>
                          <Link href={sub.href}
                            className="hover:opacity-70 transition-opacity"
                            style={{ fontFamily: MF, fontWeight: 400, color: "#ffffff", fontSize: "13px", lineHeight: "1.6" }}>
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
        <p className="text-2xl lg:text-3xl leading-tight" style={{ fontFamily: MF, fontWeight: 500, color: "#ffffff" }}>
          Technology<br />Value Creators.
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
          <p style={{ fontFamily: MF, fontWeight: 400, color: "#57D9D4", fontSize: "12px", lineHeight: "1.6" }}>
            &copy; 2026 Kulana – Technology Value Creators. All rights reserved.
          </p>
        </div>
      </div>

    </footer>
  );
}
