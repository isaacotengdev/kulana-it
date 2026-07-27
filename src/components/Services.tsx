"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Server, Network, Brain, GraduationCap, CheckCircle2 } from "lucide-react";

const pillars = [
  {
    icon: Server,
    number: "01",
    title: "Core and Enterprise Systems",
    tagline: "The backbone of enterprise operations",
    description:
      "Mission-critical systems that power financial institutions and enterprises with reliability, security, and performance at scale.",
    services: ["Core Banking", "ERP & CRM", "Infrastructure", "Cybersecurity"],
    href: "/core-enterprise-systems",
    image: "/images/kulana/hero.jpg",
  },
  {
    icon: Network,
    number: "02",
    title: "Integration and Digital Connectivity",
    tagline: "Connect everything. Accelerate everything.",
    description:
      "Seamless integration architectures and AI-native engineering that unify your digital landscape and unlock new business potential.",
    services: ["Integration", "Enterprise Architecture", "AI-Native Product Engineering"],
    href: "/integration-digital-connectivity",
    image: "/images/about/step-5-reporting.jpg",
  },
  {
    icon: Brain,
    number: "03",
    title: "Data and AI Intelligence",
    tagline: "Turn data into your competitive edge",
    description:
      "Advanced data strategies, artificial intelligence, and intelligent automation that transform raw information into strategic advantage.",
    services: ["Data", "AI", "RPA"],
    href: "/data-ai-intelligence",
    image: "/images/about/step-1-assessment.jpg",
  },
  {
    icon: GraduationCap,
    number: "04",
    title: "Kulana Academy",
    tagline: "Bridging technology gaps in your workforce.",
    description:
      "Industry aligned programmes that equip your workforce with the required skills to drive business.",
    services: [] as string[],
    href: "https://www.kulana.academy/",
    external: true,
    image: "/images/about/step-3-implementation.jpg",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#F0F4F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-sm font-medium text-blue-600 mb-4">
            What We Do
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Four integrated pillars delivering end-to-end technology solutions — from enterprise
            systems and digital connectivity to data intelligence and capability building.
          </p>
        </div>

        {/* Pillar cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
              >
                {/* Card header — photo background with gradient overlay */}
                <div className="relative overflow-hidden">
                  <Image
                    src={pillar.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover brightness-110"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(135deg, rgba(26,35,50,0.58) 0%, rgba(42,53,72,0.52) 50%, rgba(0,200,216,0.38) 100%)" }}
                  />
                  <div className="absolute top-4 right-6 text-8xl font-black text-white/5 select-none leading-none z-10">
                    {pillar.number}
                  </div>
                  <div className="relative z-10 px-8 pt-8 pb-10">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-[#00C8D8]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-[#00C8D8] text-sm font-medium">{pillar.tagline}</p>
                  </div>
                </div>

                {/* Card body — white */}
                <div className="bg-white px-8 py-7">
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  {/* Sub-services grid */}
                  <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-8">
                    {pillar.services.map((svc) => (
                      <div key={svc} className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#00C8D8] flex-shrink-0" />
                        <span className="text-sm font-medium text-gray-700">{svc}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  {"external" in pillar && pillar.external ? (
                    <a
                      href={pillar.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#00b3c2] hover:text-[#1A2332] transition-colors group/cta"
                    >
                      Explore {pillar.title}
                      <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                    </a>
                  ) : (
                    <Link
                      href={pillar.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#00b3c2] hover:text-[#1A2332] transition-colors group/cta"
                    >
                      Explore {pillar.title}
                      <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200 hover:-translate-y-0.5"
          >
            Discuss Your Requirements
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
