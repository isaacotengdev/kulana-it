"use client";

import { useState, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, ChevronDown, ChevronRight, ArrowRight } from "lucide-react";
import Image from "next/image";

const servicePillars = [
  {
    name: "Core & Enterprise Systems",
    href: "/core-enterprise-systems",
    services: [
      { name: "Core Banking",   href: "/core-banking" },
      { name: "ERP & CRM",      href: "/erp-and-crm" },
      { name: "Infrastructure", href: "/infrastructure" },
      { name: "Cybersecurity",  href: "/cybersecurity" },
    ],
  },
  {
    name: "Integration & Digital Connectivity",
    href: "/integration-digital-connectivity",
    services: [
      { name: "Integration",                   href: "/digital-integrations-api-management" },
      { name: "Enterprise Architecture",        href: "/enterprise-architecture" },
      { name: "AI-Native Product Engineering",  href: "/ai-native-product-engineering" },
    ],
  },
  {
    name: "Data & AI Intelligence",
    href: "/data-ai-intelligence",
    services: [
      { name: "Data", href: "/data" },
      { name: "AI",   href: "/ai" },
      { name: "RPA",  href: "/rpa" },
    ],
  },
  {
    name: "Kulana Academy",
    href: "https://www.kulana.academy/",
    external: true,
    services: [],
  },
];

const about = [{ name: "Kulana", href: "/kulana" }];

type SimpleItem = { name: string; href: string };
type NavLink =
  | { name: string; href: string; dropdown?: SimpleItem[]; isMega?: false }
  | { name: string; href: string; isMega: true };

const navLinks: NavLink[] = [
  { name: "Home",        href: "/" },
  { name: "Our Services",href: "/our-services", isMega: true },
  { name: "About us",    href: "/about-us",    dropdown: about },
  { name: "Contact us",  href: "/contact-us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const contactHref = isHome ? "#contact" : "/contact-us";
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDropdown = (name: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(name);
  };

  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const hasFlyout = (link: NavLink) =>
    "isMega" in link ? link.isMega : !!link.dropdown;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${isHome ? "bg-transparent" : "bg-[#080d28] border-b border-white/10"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logos/logo-white.svg"
              alt="Kulana IT Solutions — Technology Value Creators"
              width={210}
              height={67}
              className="h-[54px] w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => hasFlyout(link) && openDropdown(link.name)}
                onMouseLeave={() => hasFlyout(link) && closeDropdown()}
              >
                <Link
                  href={link.href}
                  className="nav-link flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors text-white/80 hover:text-white hover:bg-white/10"
                >
                  {link.name}
                  {hasFlyout(link) && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        activeDropdown === link.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {/* ── Mega-dropdown: Our Services ── */}
                {"isMega" in link && link.isMega && activeDropdown === link.name && (
                  <div
                    className="absolute top-full left-0 mt-1 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                    style={{ width: "780px" }}
                    onMouseEnter={() => openDropdown(link.name)}
                    onMouseLeave={closeDropdown}
                  >
                    <div className="grid grid-cols-4 gap-0 divide-x divide-gray-100">
                      {servicePillars.map((pillar) => (
                        <div key={pillar.name} className="p-5">
                          {/* Pillar header */}
                          {"external" in pillar && pillar.external ? (
                            <a
                              href={pillar.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block text-[11px] font-bold text-[#03B2EE] uppercase tracking-wider mb-3 hover:text-[#0299cc] transition-colors leading-snug"
                            >
                              {pillar.name}
                            </a>
                          ) : (
                            <Link
                              href={pillar.href}
                              className="block text-[11px] font-bold text-[#03B2EE] uppercase tracking-wider mb-3 hover:text-[#0299cc] transition-colors leading-snug"
                            >
                              {pillar.name}
                            </Link>
                          )}
                          {/* Service links */}
                          <ul className="space-y-0.5">
                            {pillar.services.map((svc) => (
                              <li key={svc.name}>
                                <Link
                                  href={svc.href}
                                  className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-blue-300 flex-shrink-0" />
                                  {svc.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    {/* Footer strip */}
                    <div className="px-5 py-2.5 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-xs text-gray-400">All services and solutions</span>
                      <Link
                        href="/our-services"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        Browse all <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                )}

                {/* ── Regular dropdown ── */}
                {"dropdown" in link && link.dropdown && activeDropdown === link.name && (
                  <div
                    className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
                    onMouseEnter={() => openDropdown(link.name)}
                    onMouseLeave={closeDropdown}
                  >
                    <div className="p-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-[#03B2EE] transition-colors"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block flex-shrink-0">
            <a
              href={contactHref}
              className="px-5 py-2.5 bg-[#03B2EE] hover:bg-[#0299cc] text-white text-sm font-semibold rounded-full transition-all hover:shadow-lg hover:shadow-[#03B2EE]/30 inline-flex items-center gap-1.5"
            >
              Request a Consultation
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors text-white/80 hover:bg-white/10"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`lg:hidden border-t border-white/10 ${isHome ? "bg-[#080d28]/80 backdrop-blur-md" : "bg-[#080d28]"}`}>
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.name}>
                {hasFlyout(link) ? (
                  <button
                    onClick={() =>
                      setOpenMobileSection(
                        openMobileSection === link.name ? null : link.name
                      )
                    }
                    className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-white/80 font-medium hover:bg-white/10 hover:text-white transition-colors"
                  >
                    {link.name}
                    <ChevronDown
                      className={`w-4 h-4 text-white/40 transition-transform duration-200 ${
                        openMobileSection === link.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between px-4 py-3 rounded-lg text-white/80 font-medium hover:bg-white/10 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                )}

                {/* Mobile: Our Services — pillar groups */}
                {"isMega" in link && link.isMega && openMobileSection === link.name && (
                  <div className="ml-3 mt-1 pb-2 space-y-3">
                    {servicePillars.map((pillar) => (
                      <div key={pillar.name}>
                        {"external" in pillar && pillar.external ? (
                          <a
                            href={pillar.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-2 px-4 py-1.5 text-xs font-bold text-[#03B2EE] uppercase tracking-wider hover:text-[#0299cc] transition-colors"
                          >
                            <ChevronRight className="w-3 h-3" />
                            {pillar.name}
                          </a>
                        ) : (
                          <Link
                            href={pillar.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-2 px-4 py-1.5 text-xs font-bold text-[#03B2EE] uppercase tracking-wider hover:text-[#0299cc] transition-colors"
                          >
                            <ChevronRight className="w-3 h-3" />
                            {pillar.name}
                          </Link>
                        )}
                        <div className="ml-5 space-y-0.5">
                          {pillar.services.map((svc) => (
                            <Link
                              key={svc.name}
                              href={svc.href}
                              onClick={() => setIsOpen(false)}
                              className="block px-4 py-2 text-sm text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                            >
                              {svc.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                    <Link
                      href="/our-services"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-[#03B2EE] hover:bg-white/10 rounded-lg transition-colors"
                    >
                      View all services <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}

                {/* Mobile: regular dropdowns */}
                {"dropdown" in link && link.dropdown && openMobileSection === link.name && (
                  <div className="ml-4 mt-1 space-y-1 pb-2">
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2 text-sm font-medium text-[#03B2EE] hover:bg-white/10 rounded-lg transition-colors"
                    >
                      All {link.name}
                    </Link>
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-sm text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-3 border-t border-white/10">
              <a
                href={contactHref}
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-5 py-3 bg-[#03B2EE] text-white font-semibold rounded-full hover:bg-[#0299cc] transition-colors"
              >
                Request a Consultation
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
