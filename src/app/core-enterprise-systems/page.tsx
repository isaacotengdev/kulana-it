import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

const MF = "var(--font-manrope), sans-serif";

export const metadata: Metadata = {
  title: "Core & Enterprise Systems | Kulana IT Solutions",
  description:
    "Mission-critical systems that power financial institutions and enterprises — Core Banking, ERP & CRM, Infrastructure, and Cybersecurity.",
};

const subServices = [
  {
    number: "01",
    title: "Core Banking",
    href: "/core-banking",
    tagline: "Financial Services",
    image: "/images/Service_Core & Enterprise Systems/Core banking_image.webp",
    desc: "End-to-end implementation and support for modern core banking platforms. We help financial institutions modernise their systems with Temenos and other industry-leading platforms.",
    highlights: ["Account Management", "Loan Origination", "Digital Channels", "Regulatory Reporting"],
  },
  {
    number: "02",
    title: "ERP & CRM",
    href: "/erp-and-crm",
    tagline: "Business Operations",
    image: "/images/Service_Core & Enterprise Systems/ERP & CRM_image.webp",
    desc: "Streamline operations with Microsoft Dynamics 365 and HubSpot CRM — tailored to your workflows, integrated with your existing systems, and designed for long-term growth.",
    highlights: ["Microsoft Dynamics 365", "HubSpot CRM", "Process Automation", "Reporting & BI"],
  },
  {
    number: "03",
    title: "Infrastructure",
    href: "/infrastructure",
    tagline: "Scalable & Secure",
    image: "/images/Service_Core & Enterprise Systems/Infrastructure_image.webp",
    desc: "Design, build, and manage resilient data centers and IT infrastructure. We deliver scalable, high-availability environments that underpin your critical business operations.",
    highlights: ["Data Center Design", "Cloud Infrastructure", "Network Architecture", "24/7 Operations"],
  },
  {
    number: "04",
    title: "Cybersecurity",
    href: "/cybersecurity",
    tagline: "Protect Your Business",
    image: "/images/Service_Core & Enterprise Systems/Cybersecurity_image.webp",
    desc: "Protect your organisation with a comprehensive security posture — from SOC monitoring and threat intelligence to vulnerability assessments and incident response.",
    highlights: ["Security Operations Centre", "Threat Detection", "Vulnerability Management", "Compliance"],
  },
];

export default function CoreEnterpriseSystemsPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <section
          className="relative overflow-hidden flex items-center"
          style={{ height: "100vh", paddingTop: "5rem" }}
        >
          {/* Background image — boosted brightness */}
          <Image
            src="/images/Links_homepage/1-image_1600x1000px.webp"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
            style={{ filter: "brightness(1.4)" }}
          />
          {/* Gradient overlay — darker left for text legibility, opens up on the right */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(8,0,32,0.72) 0%, rgba(8,0,32,0.55) 45%, rgba(8,0,32,0.20) 75%, rgba(8,0,32,0.08) 100%)" }}
          />

          {/* Content */}
          <div className="relative w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between">

              {/* Left: tagline + heading + button */}
              <div className="lg:w-[62%]">
                <p
                  className="text-xs tracking-[0.22em] uppercase mb-6"
                  style={{ fontFamily: MF, fontWeight: 600, color: "#57D9D4" }}
                >
                  Keep Your Critical Systems Running
                </p>
                <h1
                  className="text-5xl sm:text-6xl lg:text-7xl leading-[1.0] uppercase text-white mb-12"
                  style={{ fontFamily: MF, fontWeight: 700 }}
                >
                  Core &amp; Enterprise<br />Systems
                </h1>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full transition-all hover:opacity-90"
                  style={{ fontFamily: MF, fontWeight: 600, background: "#57D9D4", color: "#040d28", fontSize: "0.9rem" }}
                >
                  Request a Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Right: caption — bottom-aligned with button */}
              <div className="hidden lg:block text-right pb-1">
                <p
                  className="text-base lg:text-lg uppercase leading-snug"
                  style={{ fontFamily: MF, fontWeight: 400, color: "#57D9D4" }}
                >
                  Stable Systems.<br />Stronger Business.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Sub-services */}
        <section className="bg-white py-24">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-sm tracking-[0.18em] uppercase" style={{ fontFamily: MF, fontWeight: 700, color: "#200044" }}>
              What We Deliver
            </span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
              Four Disciplines. One Integrated Practice.
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed lg:pt-2">
              Our Core and Enterprise Systems practice spans the full spectrum of critical business
              technology — delivered by specialists with deep domain knowledge.
            </p>
          </div>

          <div className="space-y-10">
            {subServices.map(({ number, title, href, tagline, image, desc, highlights }) => (
              <div
                key={title}
                className="group grid grid-cols-1 lg:grid-cols-[60%_40%] bg-white overflow-hidden"
              >
                {/* Left — content */}
                <div className="pt-8 pb-8 pr-8 lg:pt-10 lg:pb-10 lg:pr-16 pl-0 flex flex-col justify-center">
                  <p className="text-xs tracking-[0.18em] uppercase mb-3" style={{ fontFamily: MF, fontWeight: 600, color: "#a198af" }}>
                    {number} — {tagline}
                  </p>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-6" style={{ fontFamily: MF, color: "#200044" }}>
                    {title}
                  </h3>
                  {/* Description + bullets side by side */}
                  <div className="grid lg:grid-cols-2 gap-6 mb-8">
                    <p className="text-gray-500 leading-relaxed text-sm lg:text-base">{desc}</p>
                    <ul className="space-y-2.5">
                      {highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-sm font-semibold text-gray-800">
                          <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#57D9D4" }} />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={href}
                    className="self-start inline-flex items-center gap-2 px-6 py-2.5 rounded-md text-sm font-semibold transition-all hover:opacity-90"
                    style={{ fontFamily: MF, background: "#57D9D4", color: "#040d28" }}
                  >
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Right — square image */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        </section>

        {/* CTA */}
        <section style={{ background: "#57D9D4" }}>
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-20">
              {/* Left — heading (fixed width ~40%) */}
              <h2
                className="text-3xl lg:text-4xl font-extrabold leading-tight lg:w-[40%] flex-shrink-0"
                style={{ fontFamily: MF, color: "#200044" }}
              >
                Ready to strengthen your enterprise systems?
              </h2>
              {/* Right — description + buttons */}
              <div className="flex-1">
                <p className="text-sm lg:text-base mb-6 leading-relaxed" style={{ fontFamily: MF, color: "#200044" }}>
                  Speak to our specialists and discover the right technology foundation for your organisation.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-md transition-all hover:opacity-90"
                    style={{ fontFamily: MF, background: "#200044", color: "#ffffff" }}
                  >
                    Request a Consultation <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-md border transition-all hover:bg-white/20"
                    style={{ fontFamily: MF, color: "#200044", borderColor: "#200044" }}
                  >
                    Contact us <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
