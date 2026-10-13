"use client";

import { ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const MF = "var(--font-manrope), sans-serif";

export default function TechChallenge() {
  const pathname = usePathname();
  const contactHref = pathname === "/" ? "#contact" : "/contact-us";

  return (
    <section className="relative overflow-hidden">
      {/* Background photo */}
      <Image
        src="/images/Links_homepage/CTA_banner_2560×640px.webp"
        alt=""
        fill
        className="object-cover"
        style={{ objectPosition: "58% 45%" }}
        sizes="100vw"
        priority
      />
      {/* Gradient overlay — dark purple left, fades to transparent right so globe shows */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to right, rgba(40,0,100,0.97) 0%, rgba(20,0,60,0.90) 30%, rgba(8,0,32,0.55) 55%, rgba(8,0,32,0.10) 75%, transparent 90%)" }}
      />
      {/* Right-edge vignette to cover orange strip at image boundary */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to left, rgba(4,13,40,0.92) 0%, transparent 8%)" }}
      />

      {/* Text content */}
      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        <div className="lg:w-[55%]">

          {/* Label */}
          <p
            className="tracking-normal uppercase mb-6 whitespace-nowrap"
            style={{ fontFamily: MF, fontWeight: 500, color: "#57D9D4", fontSize: "28px" }}
          >
            Have a Technology Challenge?
          </p>

          {/* Heading */}
          <h2 className="leading-tight mb-10" style={{ fontFamily: MF, fontWeight: 700, fontSize: "72px" }}>
            <span style={{ color: "#ffffff" }}>Let&apos;s Solve It</span>
            <br />
            <span style={{ color: "#57D9D4" }}>Together.</span>
          </h2>

          {/* Button */}
          <a
            href={contactHref}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md border transition-all hover:bg-[#57D9D4]/10"
            style={{ fontFamily: MF, fontWeight: 600, color: "#ffffff", borderColor: "#57D9D4", fontSize: "16px" }}
          >
            Discuss Your Requirements
            <ArrowRight className="w-4 h-4" style={{ color: "#57D9D4" }} />
          </a>
        </div>
      </div>
    </section>
  );
}
