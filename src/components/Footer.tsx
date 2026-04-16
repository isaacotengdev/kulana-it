"use client";

import { Share2, Globe, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  Services: [
    "Core Banking",
    "Data Center & SOC",
    "ERP & CRM Solutions",
    "Project Management",
    "Predictive Analytics",
    "API Integrations",
  ],
  Academy: [
    "Cloud & Infrastructure",
    "Cybersecurity Training",
    "Data & Analytics",
    "Enterprise Software",
  ],
  Company: ["About Us", "Our Team", "Careers", "News & Insights", "Contact Us"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="#home" className="inline-block mb-5">
              {/* White pill so the dark tagline text reads on the dark footer */}
              <div className="bg-white rounded-xl px-3 py-2 inline-flex">
                <Image
                  src="/logos/logo.svg"
                  alt="Kulana IT Solutions — Technology Value Creators"
                  width={160}
                  height={51}
                  className="h-11 w-auto object-contain"
                />
              </div>
            </a>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              End-to-end IT solutions and consultancy for enterprises across
              Africa. We turn technology into your competitive advantage.
            </p>

            {/* Contact info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>The Rhombus, Kanda, Accra, Ghana</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="tel:+233540127400" className="hover:text-white transition-colors">
                  +233 540 127 400
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="mailto:info@kulana.net" className="hover:text-white transition-colors">
                  info@kulana.net
                </a>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3 mt-7">
              {[
                { icon: Share2, label: "Facebook" },
                { icon: Globe, label: "LinkedIn" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-white font-semibold text-sm mb-4">{heading}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm hover:text-white hover:translate-x-0.5 inline-block transition-all"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <span>&copy; {new Date().getFullYear()} Kulana IT Solutions. All rights reserved.</span>
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
