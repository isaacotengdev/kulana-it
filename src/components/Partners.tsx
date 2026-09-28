"use client";

import Image from "next/image";

const partners = [
  { name: "Dell Technologies", logo: "/logos/dell.svg",      width: 100, height: 40 },
  { name: "HubSpot",           logo: "/logos/hubspot.svg",   width: 120, height: 40 },
  { name: "Microsoft",         logo: "/logos/microsoft.svg", width: 130, height: 40 },
  { name: "Temenos",           logo: "/logos/temenos.png",   width: 130, height: 40 },
  { name: "WSO2",              logo: "/logos/wso2.png",      width: 90,  height: 40 },
];

export default function Partners() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Label + rule */}
        <div className="flex items-center gap-4 mb-10">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 whitespace-nowrap">
            Technology Partners
          </span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Heading + description */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-start">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
            Powered by World-Class<br />Platforms
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed lg:pt-2">
            We hold certified partnerships with leading global technology
            vendors, giving you access to best-in-class solutions backed
            by proven technologies.
          </p>
        </div>

        {/* Partner logos — flat row, grayscale */}
        <div className="flex flex-wrap items-center justify-between gap-10">
          {partners.map((p) => (
            <div key={p.name} className="flex items-center justify-center">
              <Image
                src={p.logo}
                alt={p.name}
                width={p.width}
                height={p.height}
                className="object-contain h-14 w-auto transition-all duration-300"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
