import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const MF = "var(--font-manrope), sans-serif";

export const metadata: Metadata = {
  title: "About Us | Kulana IT Solutions",
  description:
    "Innovative Solutions, Unique Value — empowering your business to thrive in the digital age. Learn about Kulana IT Solutions, headquartered in Ghana and Mauritius.",
};

const entities = [
  {
    name: "Kulana Ghana Ltd",
    desc: "Established in 2019 in Ghana by experienced professionals with a deep understanding of digital transformation drivers. The company expanded with Kulana Services Ltd established October 31, 2022, in Mauritius, emphasising system optimisation and process automation to reduce staffing expenses.",
    image: "/images/about/Kulana Ghana Ltd_image_1600x1000px.webp",
    alt: "Kulana Ghana office and team",
  },
  {
    name: "Kulana Holdings Ltd",
    desc: "A Global Business License Company established October 31, 2022, in Mauritius, managing equity portfolios primarily in the technology sector while remaining open to diversification. It provides software sales, consultative guidance, implementation, and advisory services.",
    image: "/images/about/Kulana Ghana Ltd_image_1600x1000px.webp",
    alt: "Kulana Holdings operations",
  },
  {
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
  { num: "01", title: "Needs Assessment",        desc: "We scope the required services through a thorough assessment of your current systems, processes, and objectives." },
  { num: "02", title: "Action Plan Creation",     desc: "A detailed plan is created with tasks, deadlines, and milestones aligned to your strategic priorities." },
  { num: "03", title: "Implementation",           desc: "We implement agreed changes collaboratively using agile methods, industry best practices, and proven frameworks." },
  { num: "04", title: "Monitoring and Adjustments", desc: "Ongoing solution monitoring ensures delivery remains on course, with necessary adjustments made in real time." },
  { num: "05", title: "Reporting and Optimisation", desc: "We provide transparent reporting and continuous insights on software utilisation to sustain long-term value." },
];

export default function AboutUsPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <section className="relative overflow-hidden" style={{ height: "100vh" }}>
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
            className="relative z-10 flex flex-col w-full h-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8"
            style={{ paddingTop: "calc(5rem + 14vh)", paddingBottom: "5rem" }}
          >
            <div className="max-w-2xl">
              <p className="text-xs tracking-[0.22em] uppercase mb-8" style={{ fontFamily: MF, fontWeight: 600, color: "#57D9D4" }}>
                About Us
              </p>
              <blockquote
                className="text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-[1.2]"
                style={{ fontFamily: MF }}
              >
                &ldquo;By contracting Kulana&apos;s services, you&apos;ll be able to improve company dynamics, gain access to resources, keep up with competition and more.&rdquo;
              </blockquote>
            </div>
            <div className="mt-auto">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full transition-all hover:opacity-90"
                style={{ fontFamily: MF, fontWeight: 600, background: "#57D9D4", color: "#040d28", fontSize: "0.9rem" }}
              >
                Request a Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* ── Company entities ─────────────────────────────────────────── */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">Who We Are</h2>
              <p className="text-gray-500 text-lg max-w-3xl mx-auto">
                Kulana is a group of technology companies dedicated to empowering organisations in
                Ghana and Mauritius through enterprise-grade IT solutions, consulting, and
                implementation expertise.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {entities.map(({ name, desc, image, alt }) => (
                <div key={name} className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <div className="relative h-48 w-full">
                    <Image
                      src={image}
                      alt={alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-8">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 mb-4 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{name}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Benefits ─────────────────────────────────────────────────── */}
        <section className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6">
                Why Partner with Kulana?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We combine deep technical expertise with local market knowledge to deliver
                solutions that create real, measurable business value — not just technology
                for technology&apos;s sake.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-gray-700">
                    <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-10 border border-blue-100">
              <Image
                src="/images/about/ISO_Kulana_stamp.svg"
                alt="ISO Certified — Kulana IT Solutions"
                width={200}
                height={100}
                className="object-contain mb-6"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-3">ISO Certified Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                Kulana operates under ISO 9001 and ISO 27001 certified quality and information
                security management systems — ensuring every engagement meets the highest standards
                of quality, consistency, and data protection.
              </p>
            </div>
          </div>
        </section>

        {/* ── Process ──────────────────────────────────────────────────── */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
                Kulana&apos;s Process, Step by Step
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                A structured, transparent approach that ensures every engagement delivers
                measurable value from day one.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {steps.map(({ num, title, desc }) => (
                <div key={num} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <p className="text-4xl font-light mb-4" style={{ fontFamily: MF, color: "rgba(32,0,68,0.18)" }}>{num}</p>
                  <h3 className="font-bold text-gray-900 mb-2" style={{ fontFamily: MF }}>{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: MF }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section className="gradient-primary py-20 text-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
              Ready to work with us?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Get in touch to find out how Kulana can help your organisation thrive in the digital age.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#00D4EE] text-[#040d28] font-semibold rounded-md transition-all shadow-lg hover:bg-[#00BCDA] hover:-translate-y-0.5"
            >
              Request a Consultation
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
