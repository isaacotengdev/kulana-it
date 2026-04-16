"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

const services = [
  { name: "Core Banking", href: "#services" },
  { name: "Data Center & SOC", href: "#services" },
  { name: "ERP & CRM Solutions", href: "#services" },
  { name: "Project Management Consulting", href: "#services" },
  { name: "Predictive Analytics", href: "#services" },
  { name: "Digital Integrations & API", href: "#services" },
];

const academy = [
  { name: "Cloud & Infrastructure", href: "#academy" },
  { name: "Cybersecurity Training", href: "#academy" },
  { name: "Data & Analytics", href: "#academy" },
  { name: "Enterprise Software", href: "#academy" },
];

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services", dropdown: services },
  { name: "Academy", href: "#academy", dropdown: academy },
  { name: "About Us", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <div
              className={`rounded-xl px-2 py-1 transition-colors ${
                scrolled ? "bg-transparent" : "bg-white/10 backdrop-blur-sm"
              }`}
            >
              <Image
                src="/logos/logo.svg"
                alt="Kulana IT Solutions — Technology Value Creators"
                width={148}
                height={47}
                className="h-10 w-auto object-contain"
                priority
              />
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  className={`nav-link flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    scrolled
                      ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                  {link.dropdown && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        activeDropdown === link.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </a>

                {/* Dropdown */}
                {link.dropdown && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                    <div className="p-2">
                      {link.dropdown.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-blue-200"
            >
              Request a Quote
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
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
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between px-4 py-3 rounded-lg text-gray-800 font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="w-4 h-4 text-gray-400" />}
                </a>
                {link.dropdown && (
                  <div className="ml-4 mt-1 space-y-1">
                    {link.dropdown.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-gray-100">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-5 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
