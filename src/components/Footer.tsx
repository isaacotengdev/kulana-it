"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { name: "Our Services",            href: "/our-services" },
  { name: "Kulana Academy",          href: "https://www.kulana.academy/", external: true },
  { name: "About us",                href: "/about-us" },
  { name: "Contact us",              href: "/contact-us" },
  { name: "Request a Consultation",  href: "/contact-us" },
  { name: "Privacy Policy",          href: "/privacy-policy" },
  { name: "Cookies Policy",          href: "/cookies-policy" },
  { name: "IMS Policy",              href: "/ims-policy" },
];

const serviceLinks = [
  { name: "Core & Enterprise Systems",          href: "/core-enterprise-systems",              isPillar: true },
  { name: "Core Banking",                       href: "/core-banking" },
  { name: "ERP & CRM",                          href: "/erp-and-crm" },
  { name: "Infrastructure",                     href: "/infrastructure" },
  { name: "Cybersecurity",                      href: "/cybersecurity" },
  { name: "Integration & Digital Connectivity", href: "/integration-digital-connectivity",     isPillar: true },
  { name: "Integration",                        href: "/digital-integrations-api-management" },
  { name: "Enterprise Architecture",            href: "/enterprise-architecture" },
  { name: "AI-Native Engineering",              href: "/ai-native-product-engineering" },
  { name: "Data & AI Intelligence",             href: "/data-ai-intelligence",                 isPillar: true },
  { name: "Data",                               href: "/data" },
  { name: "AI",                                 href: "/ai" },
  { name: "RPA",                                href: "/rpa" },
  { name: "Kulana Academy",                     href: "https://www.kulana.academy/",           isPillar: true, external: true },
];

export default function Footer() {
  return (
    <footer
      className="text-white/70"
      style={{ background: "linear-gradient(135deg, #2d0070 0%, #080d28 40%, #0a1535 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Logo */}
        <Link href="/" className="inline-block mb-12">
          <Image
            src="/logos/logo.svg"
            alt="Kulana IT Solutions — Technology Value Creators"
            width={210}
            height={67}
            className="h-14 w-auto object-contain"
            priority
          />
        </Link>

        {/* Main grid: 2 offices + quick links + services */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Office: Mauritius */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.18em] uppercase text-[#57EBBB] mb-5">
              Ebene, Mauritius
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#03B2EE] flex-shrink-0 mt-0.5" />
                <span>Ground Floor Nexsky Building, Hotel Avenue, Cybercity Ebene, Mauritius</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#03B2EE] flex-shrink-0" />
                <a href="tel:+23046325190" className="hover:text-white transition-colors">
                  +230 46 32 5190
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#03B2EE] flex-shrink-0" />
                <a href="mailto:contact@kulana.net" className="hover:text-white transition-colors">
                  contact@kulana.net
                </a>
              </div>
            </div>
          </div>

          {/* Office: Ghana */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.18em] uppercase text-[#57EBBB] mb-5">
              Accra, Ghana
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#03B2EE] flex-shrink-0 mt-0.5" />
                <div>
                  <div>The Rhombus, HRJ5+J6Q, Kanda, Accra</div>
                  <div className="text-white/50 mt-1">P.O. Box CT 1856, Cantonments Accra, Ghana</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#03B2EE] flex-shrink-0" />
                <a href="tel:+233540127400" className="hover:text-white transition-colors">
                  +233 540 127 400
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#03B2EE] flex-shrink-0" />
                <a href="mailto:contact@kulana.net" className="hover:text-white transition-colors">
                  contact@kulana.net
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.18em] uppercase text-[#57EBBB] mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {"external" in link && link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:text-white hover:translate-x-0.5 inline-block transition-all"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white hover:translate-x-0.5 inline-block transition-all"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.18em] uppercase text-[#57EBBB] mb-5">
              Our Services
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.name} className={link.isPillar ? "mt-4 first:mt-0" : "pl-3"}>
                  {"external" in link && link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm inline-block transition-all hover:translate-x-0.5 ${
                        link.isPillar ? "text-white font-semibold hover:text-[#03B2EE]" : "text-white/60 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className={`text-sm inline-block transition-all hover:translate-x-0.5 ${
                        link.isPillar ? "text-white font-semibold hover:text-[#03B2EE]" : "text-white/60 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/50">
          <span>&copy; 2026 Kulana – Technology Value Creators. All rights reserved.</span>
          <span
            className="px-5 py-2 rounded-full text-xs font-bold tracking-wide"
            style={{ background: "#57EBBB", color: "#040d28" }}
          >
            ISO 9001 and 27001 Certified
          </span>
        </div>
      </div>
    </footer>
  );
}
