"use client";

import Image from "next/image";
import { Headphones, Gauge } from "lucide-react";

const partners = [
  {
    name: "HubSpot",
    category: "CRM",
    logo: "/logos/hubspot.svg",
    width: 120,
    height: 40,
  },
  {
    name: "Microsoft Dynamics 365",
    category: "ERP",
    logo: "/logos/microsoft.svg",
    width: 120,
    height: 40,
  },
  {
    name: "Dell Technologies",
    category: "Infrastructure",
    logo: "/logos/dell.svg",
    width: 100,
    height: 40,
  },
  {
    name: "Temenos",
    category: "Core Banking",
    logo: "/logos/temenos.png",
    width: 80,
    height: 80,
  },
  {
    name: "WSO2",
    category: "Integration",
    logo: "/logos/wso2.png",
    width: 80,
    height: 80,
  },
];

export default function Partners() {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-sm font-medium text-blue-600 mb-4">
            Technology Partners
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
            Powered by{" "}
            <span className="text-gradient">world-class platforms</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            We hold certified partnerships with leading global technology vendors,
            ensuring you get best-in-class solutions backed by proven platforms.
          </p>
        </div>

        {/* Partners grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {partners.map((p) => (
            <div
              key={p.name}
              className="group bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-md transition-all cursor-default"
            >
              <div className="h-16 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Image
                  src={p.logo}
                  alt={`${p.name} logo`}
                  width={p.width}
                  height={p.height}
                  className="object-contain max-h-14 w-auto"
                />
              </div>
              <div className="text-xs font-semibold text-gray-800 leading-tight mb-1">
                {p.name}
              </div>
              <div className="text-xs text-gray-400">{p.category}</div>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10 divide-y lg:divide-y-0">

            {/* ISO 9001 */}
            <div className="flex items-center gap-4 px-8 py-7 group hover:bg-white/5 transition-colors">
              <div className="w-14 h-14 flex-shrink-0 bg-white rounded-xl p-1.5 shadow-md group-hover:scale-105 transition-transform">
                <Image
                  src="/logos/iso9001.svg"
                  alt="ISO 9001 Certified"
                  width={52}
                  height={52}
                  className="object-contain w-full h-full"
                />
              </div>
              <div>
                <div className="text-white font-bold text-base leading-tight">ISO 9001</div>
                <div className="text-blue-200 text-xs mt-0.5">Quality Management</div>
              </div>
            </div>

            {/* ISO 27001 */}
            <div className="flex items-center gap-4 px-8 py-7 group hover:bg-white/5 transition-colors">
              <div className="w-14 h-14 flex-shrink-0 bg-white rounded-xl p-1.5 shadow-md group-hover:scale-105 transition-transform">
                <Image
                  src="/logos/iso27001.svg"
                  alt="ISO 27001 Certified"
                  width={52}
                  height={52}
                  className="object-contain w-full h-full"
                />
              </div>
              <div>
                <div className="text-white font-bold text-base leading-tight">ISO 27001</div>
                <div className="text-blue-200 text-xs mt-0.5">Information Security</div>
              </div>
            </div>

            {/* 24/7 Support */}
            <div className="flex items-center gap-4 px-8 py-7 group hover:bg-white/5 transition-colors">
              <div className="w-14 h-14 flex-shrink-0 bg-cyan-400/20 border border-cyan-400/30 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                <Headphones className="w-7 h-7 text-cyan-300" />
              </div>
              <div>
                <div className="text-white font-bold text-base leading-tight">24/7 Support</div>
                <div className="text-blue-200 text-xs mt-0.5">Always available</div>
              </div>
            </div>

            {/* SLA Uptime */}
            <div className="flex items-center gap-4 px-8 py-7 group hover:bg-white/5 transition-colors">
              <div className="w-14 h-14 flex-shrink-0 bg-cyan-400/20 border border-cyan-400/30 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                <Gauge className="w-7 h-7 text-cyan-300" />
              </div>
              <div>
                <div className="text-white font-bold text-base leading-tight">SLA Guaranteed</div>
                <div className="text-blue-200 text-xs mt-0.5">99.9% uptime</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
