"use client";

import Image from "next/image";

const MF = "var(--font-manrope), sans-serif";
const LOGO_FILTER = "grayscale(100%) brightness(0) invert(0.65)";

export default function Partners() {
  return (
    <section style={{ background: "#ffffff" }}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Label + rule */}
        <div className="mb-10">
          <span
            className="text-xs tracking-[0.2em] uppercase"
            style={{ fontFamily: MF, fontWeight: 600, color: "#000000" }}
          >
            Technology Partners
          </span>
          <div className="w-full h-px mt-3" style={{ background: "#000000" }} />
        </div>

        {/* Heading + description */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-start">
          <h2
            className="text-4xl lg:text-5xl leading-tight"
            style={{ fontFamily: MF, fontWeight: 400, color: "#000000" }}
          >
            Powered by World-Class<br />Platforms
          </h2>
          <p
            className="text-lg leading-relaxed lg:pt-2"
            style={{ fontFamily: MF, fontWeight: 400, color: "#000000" }}
          >
            We hold certified partnerships with leading global technology
            vendors, giving you access to best-in-class solutions backed
            by proven technologies.
          </p>
        </div>

        {/* Partner logos — flat row, uniform gray */}
        <div className="flex flex-wrap items-center justify-center lg:justify-between gap-8 lg:gap-10">

          <Image src="/images/Links_homepage/DELL_logo_384x75px.svg" alt="Dell" width={150} height={30}
            className="object-contain h-11 w-auto" style={{ filter: LOGO_FILTER }} unoptimized />

          <Image src="/images/Links_homepage/HubSpot_logo_384x75px.svg" alt="HubSpot" width={170} height={30}
            className="object-contain h-11 w-auto" style={{ filter: LOGO_FILTER }} unoptimized />

          <Image src="/images/Links_homepage/Microsoft_logo_384x75px.svg" alt="Microsoft" width={190} height={30}
            className="object-contain h-11 w-auto" style={{ filter: LOGO_FILTER }} unoptimized />

          <Image src="/images/Links_homepage/Temenos_logo_384x75px.svg" alt="Temenos" width={190} height={30}
            className="object-contain h-11 w-auto" style={{ filter: LOGO_FILTER }} unoptimized />

          <Image src="/images/Links_homepage/WSO2_logo_384x75px.svg" alt="WSO2" width={150} height={30}
            className="object-contain h-11 w-auto" style={{ filter: LOGO_FILTER }} unoptimized />

        </div>

      </div>
    </section>
  );
}
