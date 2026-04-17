import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import HeroCanvas from "@/components/HeroCanvas";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Kulana IT Solutions",
  description:
    "Innovative Solutions, Unique Value — empowering your business to thrive in the digital age. Learn about Kulana IT Solutions and our mission across Africa and the Middle East.",
};

const entities = [
  {
    name: "Kulana Ghana Ltd",
    desc: "Established in 2019 in Ghana by experienced professionals with a deep understanding of digital transformation drivers. The company expanded with Kulana Services Ltd established October 31, 2022, in Mauritius, emphasising system optimisation and process automation to reduce staffing expenses.",
    image: "/images/about/company-1.jpg",
    alt: "Kulana Ghana office and team",
  },
  {
    name: "Kulana Holdings Ltd",
    desc: "A Global Business License Company established October 31, 2022, in Mauritius, managing equity portfolios primarily in the technology sector while remaining open to diversification. It provides software sales, consultative guidance, implementation, and advisory services.",
    image: "/images/about/company-2.jpg",
    alt: "Kulana Holdings operations",
  },
  {
    name: "Kulana Services Ltd",
    desc: "Established October 31, 2022, in Mauritius. The entity focuses on operational efficiencies and workflow automation, offering software sales, comprehensive solutions, consulting expertise, and implementation services tailored to enterprise needs.",
    image: "/images/about/company-3.jpg",
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
  {
    num: "01",
    title: "Needs Assessment",
    desc: "We scope the required services through a thorough assessment of your current systems, processes, and objectives.",
    image: "/images/about/step-1-assessment.jpg",
    alt: "Needs assessment consultation",
  },
  {
    num: "02",
    title: "Action Plan Creation",
    desc: "A detailed plan is created with tasks, deadlines, and milestones aligned to your strategic priorities.",
    image: "/images/about/step-2-planning.jpg",
    alt: "Action plan and remote work",
  },
  {
    num: "03",
    title: "Implementation",
    desc: "We implement agreed changes collaboratively using agile methods, industry best practices, and proven frameworks.",
    image: "/images/about/step-3-implementation.jpg",
    alt: "Implementation and team collaboration",
  },
  {
    num: "04",
    title: "Monitoring & Adjustments",
    desc: "Ongoing solution monitoring ensures delivery remains on course, with necessary adjustments made in real time.",
    image: "/images/about/step-4-monitoring.jpg",
    alt: "Monitoring and adjustments",
  },
  {
    num: "05",
    title: "Reporting & Optimisation",
    desc: "We provide transparent reporting and continuous insights on software utilisation to sustain long-term value.",
    image: "/images/about/step-5-reporting.jpg",
    alt: "Reporting and software optimisation",
  },
];

export default function AboutUsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="gradient-hero relative overflow-hidden py-28 text-white">
          <HeroCanvas variant="about" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">About Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Innovative Solutions, Unique Value — Empowering Your Business to Thrive in the Digital Age.
            </p>
          </div>
        </section>

        {/* ── Intro quote ──────────────────────────────────────────────── */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <blockquote className="text-xl lg:text-2xl text-gray-700 font-medium leading-relaxed">
            &ldquo;By contracting Kulana&apos;s services, you&apos;ll be able to improve company dynamics,
            gain access to resources, keep up with competition and more.&rdquo;
          </blockquote>
        </section>

        {/* ── Company entities ─────────────────────────────────────────── */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">Who We Are</h2>
              <p className="text-gray-500 text-lg max-w-3xl mx-auto">
                Kulana is a group of technology companies dedicated to empowering organisations across
                Africa and the Middle East through enterprise-grade IT solutions, consulting, and
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
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
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
                src="/images/about/iso-stamp.png"
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              {steps.map(({ num, title, desc, image, alt }) => (
                <div key={num} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <div className="relative h-44 w-full">
                    <Image
                      src={image}
                      alt={alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 20vw"
                    />
                    <div className="absolute top-3 left-3 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{num}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
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
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Request a Quote
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
