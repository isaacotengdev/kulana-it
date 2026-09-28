"use client";

import { ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function TechChallenge() {
  const pathname = usePathname();
  const contactHref = pathname === "/" ? "#contact" : "/contact-us";

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(to right, #2d0070 0%, #080d28 45%, #080d28 100%)" }}
    >
      {/* Africa image — right side, full height, no cropping */}
      <div className="absolute inset-y-0 right-0 hidden lg:block" style={{ width: "55%" }}>
        <Image
          src="/images/image.png"
          alt="Africa connectivity at night"
          fill
          className="object-contain"
          style={{ objectPosition: "right center" }}
          unoptimized
        />
        {/* Left fade into section gradient */}
        <div
          className="absolute inset-y-0 left-0 w-1/2 pointer-events-none"
          style={{ background: "linear-gradient(to right, #080d28 0%, rgba(8,13,40,0.6) 60%, transparent 100%)" }}
        />
      </div>

      {/* Text content — sits above the image */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="lg:w-1/2">
          <p className="text-sm font-bold tracking-[0.22em] uppercase text-[#00D4EE] mb-5">
            Have a Technology Challenge?
          </p>
          <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-10">
            Let&apos;s Solve It<br />
            <span className="text-[#00D4EE]">Together.</span>
          </h2>
          <a
            href={contactHref}
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#00D4EE] text-white text-base font-semibold rounded-md hover:bg-[#00D4EE] hover:text-[#040d28] transition-all"
          >
            Discuss Your Requirements <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
