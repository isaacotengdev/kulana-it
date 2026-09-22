"use client";

import Image from "next/image";

const partners = [
  {
    name: "Temenos",
    category: "Core Banking",
    logo: "/logos/temenos.png",
    width: 80,
    height: 80,
  },
  {
    name: "Microsoft Dynamics 365",
    category: "ERP & CRM",
    logo: "/logos/microsoft.svg",
    width: 120,
    height: 40,
  },
  {
    name: "HubSpot",
    category: "ERP & CRM",
    logo: "/logos/hubspot.svg",
    width: 120,
    height: 40,
  },
  {
    name: "WSO2",
    category: "Integration",
    logo: "/logos/wso2.png",
    width: 80,
    height: 80,
  },
  {
    name: "Dell Technologies",
    category: "Infrastructure",
    logo: "/logos/dell.svg",
    width: 100,
    height: 40,
  },
];

export default function Partners() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-white/20 rounded-full text-sm font-medium text-[#03B2EE] mb-4">
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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {partners.map((p) => (
            <div
              key={p.name}
              className="group bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-[#03B2EE]/40 hover:bg-blue-50/50 hover:shadow-md transition-all cursor-default"
            >
              <div className="h-16 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Image
                  src={p.logo}
                  alt={`${p.name} logo`}
                  width={p.width}
                  height={p.height}
                  className="object-contain max-h-14 h-auto w-auto"
                />
              </div>
              <div className="text-xs font-semibold text-gray-800 leading-tight mb-1">
                {p.name}
              </div>
              <div className="text-xs text-gray-400">{p.category}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
