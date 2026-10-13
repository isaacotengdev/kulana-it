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
        <section className="relative overflow-hidden" style={{ minHeight: "840px" }}>
          <Image
            src="/images/Links_homepage/1-image_1600x1000px.webp"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
            style={{ filter: "brightness(1.4)" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(8,0,32,0.72) 0%, rgba(8,0,32,0.55) 45%, rgba(8,0,32,0.20) 75%, rgba(8,0,32,0.08) 100%)" }}
          />
          <div
            className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8"
            style={{ paddingTop: "calc(80px + 90px)", paddingBottom: "90px" }}
          >
            {/* Top — label + heading */}
            <div>
              <p
                className="inline-block tracking-normal uppercase mb-6"
                style={{ fontFamily: MF, fontWeight: 600, color: "#57D9D4", fontSize: "24px" }}
              >
                Keep Your Critical Systems Running
              </p>
              <h1
                className="text-white uppercase leading-tight"
                style={{ fontFamily: MF, fontWeight: 500, fontSize: "clamp(45px, 5.6vw, 72px)" }}
              >
                Core &amp; Enterprise<br />Systems
              </h1>
            </div>

            {/* Bottom — button left, tagline right */}
            <div style={{ marginTop: "140px" }} className="flex items-end justify-between">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-md transition-all shadow-lg hover:-translate-y-0.5"
                style={{ fontFamily: MF, fontWeight: 600, background: "#57D9D4", color: "#040d28", fontSize: "16px" }}
              >
                Request a Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <p
                className="hidden lg:block uppercase text-right"
                style={{ fontFamily: MF, fontWeight: 400, color: "#57D9D4", fontSize: "24px", lineHeight: "28px" }}
              >
                Stable Systems.<br />Stronger Business.
              </p>
            </div>
          </div>
        </section>

        {/* Sub-services */}
        <section className="bg-white py-24">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Label + black rule */}
          <div className="mb-10">
            <span className="tracking-normal uppercase" style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "13px" }}>
              What We Deliver
            </span>
            <div className="w-full h-px mt-3" style={{ background: "#000000" }} />
          </div>

          {/* Heading + description */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            <h2 className="leading-tight" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "36px" }}>
              Four Disciplines. One Integrated Practice.
            </h2>
            <p className="lg:pt-2" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "24px", lineHeight: "32px" }}>
              Our Core and Enterprise Systems practice spans the full spectrum of critical business
              technology — delivered by specialists with deep domain knowledge.
            </p>
          </div>

          {/* Sub-service cards */}
          <div>
            {subServices.map(({ number, title, href, tagline, image, desc, highlights }) => (
              <div key={title}>
                <div className="group flex flex-col lg:flex-row gap-10 py-10">
                  {/* Left — content */}
                  <div className="flex-1 flex flex-col">
                    <p className="tracking-normal uppercase mb-3" style={{ fontFamily: MF, fontWeight: 600, color: "#a198af", fontSize: "13px" }}>
                      {number} — {tagline}
                    </p>
                    <h3 className="mb-6 leading-tight" style={{ fontFamily: MF, fontWeight: 700, color: "#200044", fontSize: "36px" }}>
                      {title}
                    </h3>
                    {/* Description + bullets side by side */}
                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                      <p style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "20px", lineHeight: "24px" }}>{desc}</p>
                      <ul className="space-y-0">
                        {highlights.map((h) => (
                          <li key={h} className="flex items-center gap-3" style={{ lineHeight: "32px" }}>
                            <ArrowRight className="w-4 h-4 flex-shrink-0" style={{ color: "#57D9D4" }} />
                            <span style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "20px" }}>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      href={href}
                      className="self-start inline-flex items-center gap-2 px-6 py-3 rounded-md transition-all hover:opacity-90"
                      style={{ fontFamily: MF, fontWeight: 600, background: "#57D9D4", color: "#040d28", fontSize: "16px" }}
                    >
                      Learn more <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Right — 432×270 image, top-aligned */}
                  <div className="hidden lg:block flex-shrink-0" style={{ width: "432px" }}>
                    <div className="relative overflow-hidden" style={{ width: "432px", height: "270px" }}>
                      <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover object-center"
                        sizes="432px"
                      />
                    </div>
                  </div>

                  {/* Mobile — 16:10 */}
                  <div className="relative lg:hidden w-full overflow-hidden" style={{ aspectRatio: "16/10" }}>
                    <Image src={image} alt={title} fill className="object-cover object-center" sizes="100vw" />
                  </div>
                </div>
                {/* Gray separator */}
                <div className="w-full h-px" style={{ background: "#d1d5db" }} />
              </div>
            ))}
          </div>

        </div>
        </section>

        {/* CTA */}
        <section style={{ background: "#57D9D4" }}>
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-20">
              {/* Left — heading */}
              <h2
                className="leading-tight lg:w-[45%] flex-shrink-0"
                style={{ fontFamily: MF, fontWeight: 700, color: "#200044", fontSize: "42px" }}
              >
                Ready to strengthen your Enterprise Systems?
              </h2>
              {/* Right — description + buttons */}
              <div className="flex-1">
                <p className="mb-8" style={{ fontFamily: MF, fontWeight: 400, color: "#200044", fontSize: "20px", lineHeight: "24px" }}>
                  Speak to our specialists and discover the right technology foundation for your organisation.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md transition-all hover:opacity-90"
                    style={{ fontFamily: MF, fontWeight: 600, background: "#200044", color: "#ffffff", fontSize: "16px" }}
                  >
                    Request a Consultation <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md border transition-all hover:bg-white/20"
                    style={{ fontFamily: MF, fontWeight: 600, color: "#200044", borderColor: "#200044", fontSize: "16px" }}
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
