import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import HeroCanvas from "@/components/HeroCanvas";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kulana Academy | Kulana IT Solutions",
  description:
    "Keep your workforce aligned with the latest advancements in technology. Kulana Academy, partnering with Arcitura, delivers professional IT training programmes.",
};

const courses = [
  {
    title: "AI & Cloud AI",
    href: "/ai-cloud-ai",
    type: "Professional Program",
    desc: "Learn how to integrate AI and cloud technologies into your business processes to improve efficiency, reduce costs, and stay ahead in a competitive market.",
  },
  {
    title: "Digital Transformation",
    href: "/digital-transformation",
    type: "Professional Program",
    desc: "Support your organisation's growth by developing the operational skills needed to implement effective digital change across teams and systems.",
  },
  {
    title: "Next-Gen Data Science",
    href: "/next-gen-data-science",
    type: "Professional Program",
    desc: "Discover how data can drive smarter business decisions with practical training designed to help your team turn information into strategic insight.",
  },
  {
    title: "Cloud Computing",
    href: "/cloud-computing",
    type: "Professional Program",
    desc: "Understand how cloud solutions can enhance business scalability, resilience, and security through structured learning and certification-backed expertise.",
  },
];

const deliveryModes = [
  {
    title: "Workshops",
    desc: "Hands-on in-person meetings combining expert presentations with collaborative discussion and practical exercises.",
  },
  {
    title: "Professional Classes",
    desc: "Instructor-guided learning for structured skill development and professional certification preparation.",
  },
  {
    title: "Onsite",
    desc: "On-premise training conducted by certified trainers at your organisation's location for maximum convenience.",
  },
  {
    title: "Virtual / Online",
    desc: "Remote learning via video conferencing with live or recorded content access for teams in any location.",
  },
];

export default function KulanaAcademyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="gradient-hero relative overflow-hidden py-28 text-white">
          <HeroCanvas variant="academy" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">Kulana Academy</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Keep your workforce aligned with the latest advancements in technology.
            </p>
          </div>
        </section>

        {/* ── Overview ─────────────────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6">
                Grow your business with Kulana Academy
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Kulana Academy, partnering with Arcitura, delivers online IT training courses.
                The platform assists businesses in upskilling employees through
                professionally-designed programs recognised by thousands for valuable
                digital-era certifications.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our programmes are available through multiple delivery formats tailored to
                certification achievement and real-world business relevance — supporting
                professionals at every stage of their digital journey.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {deliveryModes.map(({ title, desc }) => (
                <div key={title} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
                  <div className="font-bold text-gray-900 mb-2">{title}</div>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Courses grid */}
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Our Programmes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((c) => (
              <Link
                key={c.title}
                href={c.href}
                className="group p-8 rounded-2xl border border-gray-200 hover:border-blue-200 hover:shadow-xl transition-all"
              >
                <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-2">{c.type}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {c.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">{c.desc}</p>
                <span className="inline-block mt-4 text-sm font-medium text-blue-600 group-hover:underline">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section className="gradient-primary py-20 text-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
              Ready to upskill your team?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Contact us to register your interest or request a custom corporate training package.
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
