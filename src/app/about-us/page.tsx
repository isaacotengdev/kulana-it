import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

const MF = "var(--font-manrope), sans-serif";

export const metadata: Metadata = {
  title: "About Us | Kulana IT Solutions",
  description:
    "Innovative Solutions, Unique Value — empowering your business to thrive in the digital age. Learn about Kulana IT Solutions, headquartered in Ghana and Mauritius.",
};

const entities = [
  {
    country: "Ghana",
    name: "Kulana Ghana Ltd",
    desc: "Established in 2019 in Ghana by experienced professionals with a deep understanding of digital transformation drivers. The company expanded with Kulana Services Ltd established October 31, 2022, in Mauritius, emphasising system optimisation and process automation to reduce staffing expenses.",
    image: "/images/about/Kulana Ghana Ltd_image_1600x1000px.webp",
    alt: "Kulana Ghana office and team",
  },
  {
    country: "Mauritius",
    name: "Kulana Holdings Ltd",
    desc: "A Global Business License Company established October 31, 2022, in Mauritius, managing equity portfolios primarily in the technology sector while remaining open to diversification. It provides software sales, consultative guidance, implementation, and advisory services.",
    image: "/images/about/Kulana Ghana Ltd_image_1600x1000px.webp",
    alt: "Kulana Holdings operations",
  },
  {
    country: "Mauritius",
    name: "Kulana Services Ltd",
    desc: "Established October 31, 2022, in Mauritius. The entity focuses on operational efficiencies and workflow automation, offering software sales, comprehensive solutions, consulting expertise, and implementation services tailored to enterprise needs.",
    image: "/images/about/Kulana Services Ltd_image_1600x1000px.webp",
    alt: "Kulana Services team at work",
  },
];

const benefits = [
  "Improve operational efficiency and effectiveness",
  "Better handle organisational change",
  "Enhance agility responding to market shifts",
  "Move quickly without technology concerns",
  "Reduce costs and improve margins",
  "Optimise technology use",
  "Enhance customer experience",
  "Access expert resources across domains",
];

const steps = [
  { num: "01", title: "Needs Assessment",          desc: "We scope the required services through a thorough assessment of your current systems, processes, and objectives." },
  { num: "02", title: "Action Plan Creation",       desc: "A detailed plan is created with tasks, deadlines, and milestones aligned to your strategic priorities." },
  { num: "03", title: "Implementation",             desc: "We implement agreed changes collaboratively using agile methods, industry best practices, and proven frameworks." },
  { num: "04", title: "Monitoring and Adjustments", desc: "Ongoing solution monitoring ensures delivery remains on course, with necessary adjustments made in real time." },
  { num: "05", title: "Reporting and Optimisation", desc: "We provide transparent reporting and continuous insights on software utilisation to sustain long-term value." },
];

export default function AboutUsPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <section className="relative overflow-hidden min-h-[480px] md:min-h-[620px] lg:min-h-[840px]">
          <Image
            src="/images/about/Hero image_About us_2560×1440px.webp"
            alt="About Kulana IT Solutions"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(8,0,32,0.80) 0%, rgba(8,0,32,0.55) 45%, rgba(8,0,32,0.25) 75%, rgba(8,0,32,0.08) 100%)" }}
          />
          <div
            className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8"
            style={{ paddingTop: "calc(80px + clamp(32px, 6vw, 90px))", paddingBottom: "clamp(40px, 6vw, 90px)" }}
          >
            <div>
              <blockquote
                className="text-white leading-[1.3]"
                style={{ fontFamily: MF, fontWeight: 400, fontSize: "clamp(19px, 2.35vw, 32px)", maxWidth: "980px" }}
              >
                &ldquo;By contracting Kulana&apos;s services, you&apos;ll be able to improve company dynamics, gain access to resources, keep up with competition and more.&rdquo;
              </blockquote>
            </div>
            <div style={{ marginTop: "clamp(48px, 10vw, 140px)" }}>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-md transition-all shadow-lg hover:-translate-y-0.5"
                style={{ fontFamily: MF, fontWeight: 600, background: "#57D9D4", color: "#040d28", fontSize: "13px" }}
              >
                Request a Consultation <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Who We Are ───────────────────────────────────────────────── */}
        <section className="bg-white py-10 lg:py-12">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="mb-6">
              <span className="tracking-normal uppercase" style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "11px" }}>
                Who We Are
              </span>
              <div className="w-full h-px mt-3" style={{ background: "#000000" }} />
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-6 items-start">
              <h2 className="leading-tight" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(18px, 1.8vw, 26px)" }}>
                Three Companies.<br />A Shared Purpose.
              </h2>
              <p className="lg:pt-2" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1.2vw, 18px)", lineHeight: "1.4" }}>
                Kulana is a group of technology companies dedicated to empowering organisations
                in Ghana and Mauritius through enterprise-grade IT solutions, consulting, and
                implementation expertise.
              </p>
            </div>

            <div className="divide-y divide-gray-100">
              {entities.map(({ country, name, desc, image, alt }) => (
                <div key={name} className="grid lg:grid-cols-5 gap-10 py-9 items-center">
                  <div className="lg:col-span-2">
                    <p className="uppercase tracking-normal mb-3"
                      style={{ fontFamily: MF, fontWeight: 600, color: "#a198af", fontSize: "clamp(13px, 1vw, 14px)" }}>
                      {country}
                    </p>
                    <h3 className="mb-5 leading-tight" style={{ fontFamily: MF, fontWeight: 600, color: "#200044", fontSize: "clamp(14px, 1.45vw, 21px)" }}>
                      {name}
                    </h3>
                    <p style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1vw, 14px)", lineHeight: "1.5" }}>
                      {desc}
                    </p>
                  </div>
                  <div className="relative lg:col-span-3 w-full overflow-hidden" style={{ aspectRatio: "16/10" }}>
                    <Image src={image} alt={alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 60vw" />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── Our Advantage ────────────────────────────────────────────── */}
        <section className="bg-white py-10 lg:py-12">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="mb-6">
              <span className="tracking-normal uppercase" style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "11px" }}>
                Our Advantage
              </span>
              <div className="w-full h-px mt-3" style={{ background: "#000000" }} />
            </div>

            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <h2 className="leading-tight" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(18px, 1.8vw, 26px)" }}>
                Why Partner<br />with Kulana?
              </h2>
              <div>
                <p className="mb-8" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1.2vw, 18px)", lineHeight: "1.4" }}>
                  We combine deep technical expertise with local market knowledge to deliver
                  solutions that create real, measurable business value – not just technology
                  for technology&apos;s sake.
                </p>
                <ul className="space-y-3">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1vw, 14px)", lineHeight: "1.5" }}>
                      <ArrowRight className="w-4 h-4 flex-shrink-0" style={{ color: "#57D9D4" }} />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* ── Our Commitment ───────────────────────────────────────────── */}
        <section style={{ background: "#57D9D4" }} className="py-10 lg:py-12">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="mb-6">
              <span className="tracking-normal uppercase" style={{ fontFamily: MF, fontWeight: 600, color: "#200044", fontSize: "11px" }}>
                Our Commitment
              </span>
              <div className="w-full h-px mt-3" style={{ background: "#200044" }} />
            </div>

            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <h2 className="leading-tight" style={{ fontFamily: MF, fontWeight: 400, color: "#200044", fontSize: "clamp(18px, 1.8vw, 26px)" }}>
                ISO Certified<br />Quality
              </h2>
              <p style={{ fontFamily: MF, fontWeight: 400, color: "#200044", fontSize: "clamp(13px, 1.2vw, 18px)", lineHeight: "1.4" }}>
                Kulana operates under ISO 9001 and ISO 27001 certified management systems,
                ensuring the highest standards of quality, consistency and information security.
              </p>
              <div className="flex justify-center lg:justify-end">
                <Image
                  src="/images/about/ISO_Kulana_stamp.svg"
                  alt="ISO 27001:2022 and ISO 9001:2015 certified"
                  width={310}
                  height={144}
                  className="object-contain w-full max-w-xs"
                  unoptimized
                />
              </div>
            </div>

          </div>
        </section>

        {/* ── Process ──────────────────────────────────────────────────── */}
        <section className="bg-white py-10 lg:py-12">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="mb-6">
              <span className="tracking-normal uppercase" style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "11px" }}>
                Kulana&apos;s Process, Step by Step
              </span>
              <div className="w-full h-px mt-3" style={{ background: "#000000" }} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {steps.map(({ num, title, desc }) => (
                <div key={num}>
                  <p className="leading-none mb-4" style={{ fontFamily: MF, fontWeight: 400, color: "#a198af", fontSize: "clamp(24px, 2.85vw, 41px)" }}>{num}</p>
                  <h3 className="mb-3 leading-tight lg:min-h-[90px] flex items-start" style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "clamp(14px, 1.45vw, 21px)" }}>{title}</h3>
                  <p style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1vw, 14px)", lineHeight: "1.5" }}>{desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section style={{ background: "#57D9D4" }}>
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-9 lg:py-10">
            <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-8">
              <h2
                className="leading-tight lg:w-[45%] flex-shrink-0"
                style={{ fontFamily: MF, fontWeight: 700, color: "#200044", fontSize: "clamp(20px, 2.1vw, 31px)" }}
              >
                Ready to work<br />with us?
              </h2>
              <div className="flex-1">
                <p className="mb-8" style={{ fontFamily: MF, fontWeight: 400, color: "#200044", fontSize: "clamp(13px, 1vw, 14px)", lineHeight: "1.5" }}>
                  Get in touch to find out how Kulana can help your organisation thrive in the digital age.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md transition-all hover:opacity-90"
                    style={{ fontFamily: MF, fontWeight: 600, background: "#200044", color: "#ffffff", fontSize: "13px" }}
                  >
                    Let&apos;s Talk <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/#services"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md border transition-all hover:bg-white/20"
                    style={{ fontFamily: MF, fontWeight: 600, color: "#200044", borderColor: "#200044", fontSize: "13px" }}
                  >
                    Explore Our Services <ArrowRight className="w-4 h-4" />
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
