"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const serviceLinks = [
  { name: "Core Banking", href: "/core-banking" },
  { name: "Data Center & Security Operations Centre", href: "/data-center-security-operations-centre" },
  { name: "ERP and CRM", href: "/erp-and-crm" },
  { name: "Digital Integrations & API Management", href: "/digital-integrations-api-management" },
  { name: "Project Management Consulting", href: "/project-management-consulting" },
  { name: "Predictive Analysis", href: "/predictive-analysis" },
];

const quickLinks = [
  { name: "Our Services", href: "/our-services" },
  { name: "Kulana Academy", href: "/kulana-academy" },
  { name: "About us", href: "/about-us" },
  { name: "Contact us", href: "/contact-us" },
  { name: "Request a quote", href: "/request-quote" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Cookies Policy", href: "/cookies-policy" },
  { name: "IMS Policy", href: "/ims-policy" },
  { name: "Learn More Form", href: "/learn-more-form" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-5">
              <div className="bg-white rounded-xl px-3 py-2 inline-flex">
                <Image
                  src="/logos/logo.svg"
                  alt="Kulana IT Solutions — Technology Value Creators"
                  width={160}
                  height={51}
                  className="h-11 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Technology Value Creators — empowering organisations across Africa
              and the Middle East through enterprise-grade IT solutions and expert consultancy.
            </p>

            {/* Contact info */}
            <div className="space-y-3 text-sm mb-7">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>The Rhombus, HRJ5+J6Q, Kanda, Accra, Ghana</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="tel:+233540127400" className="hover:text-white transition-colors">
                  +233 540 127 400
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="tel:+23046325190" className="hover:text-white transition-colors">
                  +230 46 32 519
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="mailto:contact@kulana.net" className="hover:text-white transition-colors">
                  contact@kulana.net
                </a>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/KulanaLtdGhana"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/kulanaltd"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white hover:translate-x-0.5 inline-block transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Our Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white hover:translate-x-0.5 inline-block transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <span>&copy; 2025 Kulana – Technology Value Creators. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
              ISO 9001 &amp; 27001 Certified
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
