"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function TechChallenge() {
  const pathname = usePathname();
  const contactHref = pathname === "/" ? "#contact" : "/contact-us";

  return (
    <section className="py-9 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <a href={contactHref} className="block">
          <Image
            src="/images/Banner_CTA.webp"
            alt="Have a Technology Challenge? Let's Solve It Together. Discuss Your Requirements."
            width={2560}
            height={640}
            className="w-full h-auto"
            sizes="(max-width: 1436px) 100vw, 1436px"
            priority
            unoptimized
          />
        </a>
      </div>
    </section>
  );
}
