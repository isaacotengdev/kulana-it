"use client";

import Image from "next/image";

const MF = "var(--font-manrope), sans-serif";

export default function Partners() {
  return (
    <section style={{ background: "#ffffff" }}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Label + rule */}
        <div className="mb-6">
          <span
            className="tracking-normal uppercase"
            style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "clamp(13px, 1vw, 14px)" }}
          >
            Technology Partners
          </span>
          <div className="w-full h-px mt-3" style={{ background: "#000000" }} />
        </div>

        {/* Heading + description */}
        <div className="grid lg:grid-cols-2 gap-8 mb-6 items-start">
          <h2
            className="leading-tight"
            style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(18px, 1.8vw, 26px)" }}
          >
            Powered by World-Class<br />Platforms
          </h2>
          <p
            className="lg:pt-2"
            style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1.2vw, 18px)", lineHeight: "1.4" }}
          >
            We hold certified partnerships with leading global technology
            vendors, giving you access to best-in-class solutions backed
            by proven technologies.
          </p>
        </div>

        {/* Partner logos — flat row, original vendor colours */}
        <div className="flex flex-wrap items-center justify-center lg:justify-between gap-8 lg:gap-10">

          <Image src="/images/Service_Core & Enterprise Systems/infrastructure/DELL_logo_color.svg" alt="Dell" width={150} height={30}
            className="object-contain h-14 w-auto" unoptimized />

          <Image src="/images/Service_Core & Enterprise Systems/ERP_CRM/HubSpot_Logo.svg" alt="HubSpot" width={170} height={30}
            className="object-contain h-11 w-auto" unoptimized />

          <Image src="/images/Service_Core & Enterprise Systems/ERP_CRM/Microsoft_logo_color.svg" alt="Microsoft" width={190} height={30}
            className="object-contain h-10 w-auto" unoptimized />

          <Image src="/images/Service_Core & Enterprise Systems/core_banking/Temenos logo.svg" alt="Temenos" width={190} height={30}
            className="object-contain h-9 w-auto" unoptimized />

          <Image src="/images/Links_homepage/WSO2_logo_color.svg" alt="WSO2" width={150} height={30}
            className="object-contain h-11 w-auto" unoptimized />

        </div>

      </div>
    </section>
  );
}
