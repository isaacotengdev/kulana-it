"use client";

import Image from "next/image";
import { GraduationCap, ExternalLink } from "lucide-react";

const solutions = [
  {
    title: "Tailored Corporate Training",
    desc: "Professional development workshops aligned with corporate needs and industry standards.",
    image: "/images/academy/corporate-training.jpg",
  },
  {
    title: "On-Demand Course Portfolio",
    desc: "Foundational courses for beginners and advanced pathways for professionals.",
    image: "/images/academy/online-course.jpg",
  },
  {
    title: "E-Learning Development",
    desc: "Custom e-learning solutions with interactive designs, and immersive simulations.",
    image: "/images/academy/elearning-dev.jpg",
  },
];

export default function Academy() {
  return (
    <section id="academy" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-sm font-medium text-blue-600 mb-5">
              <GraduationCap className="w-4 h-4" />
              Kulana Academy
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Grow your business with{" "}
              <span className="text-gradient">Kulana Academy</span>
            </h2>
          </div>
          <div>
            <p className="text-gray-500 leading-relaxed mb-6">
              Kulana Academy, partnering with Arcitura, delivers professional IT training
              programmes that assist businesses in upskilling employees through
              professionally-designed programs. Keep your workforce aligned with the
              latest advancements in technology.
            </p>
            <a
              href="https://www.kulana.academy/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-md hover:shadow-blue-200"
            >
              Visit Kulana Academy
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Technology Enablement Solutions */}
        <div className="text-center mb-10">
          <h3 className="text-3xl lg:text-4xl font-extrabold text-[#1A2332]">
            Technology Enablement Solutions
          </h3>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-[#00C8D8]" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map(({ title, desc, image }) => (
            <a
              key={title}
              href="https://www.kulana.academy/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Photo with brand gradient overlay */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-105"
                />
              </div>

              {/* Brand-navy panel — overlaps bottom of image */}
              <div className="relative -mt-8 mx-3 rounded-2xl overflow-hidden z-10 shadow-lg">
                {/* Teal accent bar */}
                <div className="h-1 bg-gradient-to-r from-[#00C8D8] to-blue-500" />
                <div className="bg-[#1A2332] px-6 py-6">
                  <h4 className="text-base font-bold text-[#00C8D8] mb-2 leading-snug">
                    {title}
                  </h4>
                  <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
