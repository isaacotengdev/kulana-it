"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

const services = [
  { name: "Core Banking", href: "/core-banking" },
  { name: "Data Center & Security Operations Centre", href: "/data-center-security-operations-centre" },
  { name: "ERP and CRM", href: "/erp-and-crm" },
  { name: "Digital Integrations & API Management", href: "/digital-integrations-api-management" },
  { name: "Project Management Consulting", href: "/project-management-consulting" },
  { name: "Predictive Analysis", href: "/predictive-analysis" },
];

const academy = [
  { name: "AI & Cloud AI", href: "/ai-cloud-ai" },
  { name: "Digital Transformation", href: "/digital-transformation" },
  { name: "Next-Gen Data Science", href: "/next-gen-data-science" },
  { name: "Cloud Computing", href: "/cloud-computing" },
];

const about = [
  { name: "Kulana", href: "/kulana" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Our Services", href: "/our-services", dropdown: services },
  { name: "Kulana Academy", href: "/kulana-academy", dropdown: academy },
  { name: "About us", href: "/about-us", dropdown: about },
  { name: "Contact us", href: "/#contact" },
];

export default function Navbar() {
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="rounded-xl px-2 py-1">
              <Image
                src="/logos/logo.svg"
                alt="Kulana IT Solutions — Technology Value Creators"
                width={148}
                height={47}
                className="h-10 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && openDropdown(link.name)}
                onMouseLeave={() => link.dropdown && closeDropdown()}
              >
                <Link
                  href={link.href}
                  className="nav-link flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                >
                  {link.name}
                  {link.dropdown && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        activeDropdown === link.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                {link.dropdown && activeDropdown === link.name && (
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
                          className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
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

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/#contact"
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-blue-200"
            >
              Request a Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors text-gray-700 hover:bg-gray-100"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.dropdown ? (
                  <button
                    onClick={() =>
                      setOpenMobileSection(
                        openMobileSection === link.name ? null : link.name
                      )
                    }
                    className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-gray-800 font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    {link.name}
                    <ChevronDown
                      className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                        openMobileSection === link.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between px-4 py-3 rounded-lg text-gray-800 font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                )}

                {link.dropdown && openMobileSection === link.name && (
                  <div className="ml-4 mt-1 space-y-1 pb-2">
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      All {link.name}
                    </Link>
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-gray-100">
              <Link
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-5 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
