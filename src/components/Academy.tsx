"use client";

import Image from "next/image";

export default function Academy() {
  return (
    <section id="academy" className="py-9 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <a
          href="https://www.kulana.academy/"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Image
            src="/images/Banner_Kulana Academy kopie.webp"
            alt="Kulana Academy — Build the skills to move your business forward. Explore Kulana Academy."
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
