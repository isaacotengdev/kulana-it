import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

const MF = "var(--font-manrope), sans-serif";

export const metadata: Metadata = {
  title: "Data & AI Intelligence | Kulana IT Solutions",
  description:
    "Predictive risk analytics, automated compliance reporting, and AI governance frameworks — built for institutions where accuracy and auditability are non-negotiable.",
};

export default function DataAiIntelligencePage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero — image to be added */}
        <section className="relative overflow-hidden flex flex-col" style={{ height: "100vh", background: "#040d28" }}>
          <div
            className="relative z-10 flex flex-col w-full h-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8"
            style={{ paddingTop: "calc(5rem + 28vh)", paddingBottom: "5rem" }}
          >
            <div>
              <p className="text-xs tracking-[0.22em] uppercase mb-4" style={{ fontFamily: MF, fontWeight: 600, color: "#57D9D4" }}>
                Data &amp; AI Intelligence
              </p>
              <h1
                className="text-5xl sm:text-6xl lg:text-8xl font-bold uppercase text-white leading-[1.0]"
                style={{ fontFamily: MF }}
              >
                Data &amp; AI<br />Intelligence
              </h1>
            </div>
            <div className="mt-auto">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full transition-all hover:opacity-90"
                style={{ fontFamily: MF, fontWeight: 600, background: "#57D9D4", color: "#040d28", fontSize: "0.9rem" }}
              >
                Request a Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* The Problem We Solve */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs tracking-[0.18em] uppercase mb-6" style={{ fontFamily: MF, fontWeight: 700, color: "#200044" }}>The Problem We Solve</p>
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6" style={{ fontFamily: MF }}>
              Most organisations have data but not intelligence
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4" style={{ fontFamily: MF }}>
              In financial services and regulated industries, the gap between data and structured intelligence carries real cost: compliance exposures from manual reporting, credit decisions made without predictive models, and operational risks that analytics could have surfaced months earlier.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10" style={{ fontFamily: MF }}>
              Kulana&apos;s Data and AI Intelligence practice is built around decision science — not dashboards. We architect platforms that power regulatory compliance reporting, predictive risk models, and intelligent automation, with data governance and audit trails that regulators and risk officers require built in from the start.
            </p>
            <div className="flex flex-wrap lg:flex-nowrap gap-3">
              {["Predictive Analytics", "AI Governance", "Compliance Reporting", "MLOps"].map((tag) => (
                <span key={tag} className="flex-1 text-center py-3 px-4 border rounded-md text-sm font-semibold text-gray-700" style={{ borderColor: "#57D9D4", fontFamily: MF }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* How to Get Started */}
        <section style={{ background: "#200044" }} className="py-16 lg:py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs tracking-[0.18em] uppercase mb-14" style={{ fontFamily: MF, fontWeight: 700, color: "#a198af" }}>How to Get Started</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                { step: "01", title: "Data & AI Audit",       desc: "Map your current data assets, AI opportunities, and maturity gaps — identifying the highest-value initiatives to address first." },
                { step: "02", title: "Strategy & Architecture", desc: "Define your data platform, AI roadmap, and governance framework — cloud, lakehouse, or hybrid — matched to your regulatory context." },
                { step: "03", title: "Build & Deploy",         desc: "Engineer pipelines, train and validate models, deploy automation, and activate your teams to self-serve intelligence from governed data." },
                { step: "04", title: "Govern & Scale",         desc: "Monitor model performance, maintain audit trails, retrain on new data, and scale automation as new use cases emerge." },
              ].map(({ step, title, desc }) => (
                <div key={step}>
                  <p className="text-5xl font-light mb-3" style={{ fontFamily: MF, color: "rgba(255,255,255,0.2)" }}>{step}</p>
                  <p className="text-xl font-semibold mb-3" style={{ fontFamily: MF, color: "#57D9D4" }}>{title}</p>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: MF, color: "#a198af" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Deliver */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <span className="text-sm tracking-[0.18em] uppercase" style={{ fontFamily: MF, fontWeight: 700, color: "#200044" }}>What We Deliver</span>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight" style={{ fontFamily: MF }}>
                Three Disciplines. One Governed Intelligence Layer.
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed lg:pt-2" style={{ fontFamily: MF }}>
                Data, AI, and automation work together — each capability amplifying the next, from governed data foundations through to intelligent decision systems.
              </p>
            </div>
            <div className="space-y-10">
              {[
                {
                  num: "01", tag: "ANALYTICS & BI", title: "Data",
                  href: "/data",
                  desc: "Build a governed, analytics-ready data platform. From regulatory compliance reporting and predictive risk models to business intelligence and real-time pipelines — with data governance and audit trails built in from the start.",
                  highlights: ["Regulatory Compliance Reporting", "Predictive Risk Modelling", "Data Governance & Audit Trails", "Business Intelligence"],
                  img: "/images/data_ai_intelligence/Data.webp",
                },
                {
                  num: "02", tag: "ARTIFICIAL INTELLIGENCE", title: "AI",
                  href: "/ai",
                  desc: "Build AI that institutions can trust and regulators can audit. From credit scoring and fraud detection models to generative AI — with model validation, bias testing, and Explainable AI (XAI) built in.",
                  highlights: ["Credit Scoring & Fraud Detection", "Explainable AI (XAI)", "Model Validation & Governance", "Generative AI & LLMs"],
                  img: "/images/data_ai_intelligence/AI.webp",
                },
                {
                  num: "03", tag: "AUTOMATION", title: "RPA",
                  href: "/rpa",
                  desc: "Automate high-volume regulatory and operational workflows — from compliance data collection and report generation to reconciliations and audit pack assembly — reducing error rates and freeing skilled staff for higher-value work.",
                  highlights: ["Compliance & Audit Automation", "Regulatory Report Generation", "Reconciliation Bots", "Process Monitoring & Optimisation"],
                  img: "/images/data_ai_intelligence/RPA.webp",
                },
              ].map(({ num, tag, title, href, desc, highlights, img }) => (
                <div key={title} className="group flex flex-col lg:flex-row bg-white overflow-hidden">
                  <div className="flex-1 py-10 pr-10 lg:pr-16 pl-0 flex flex-col justify-center min-h-[288px]">
                    <p className="text-xs tracking-[0.18em] uppercase mb-3" style={{ fontFamily: MF, fontWeight: 600, color: "#a198af" }}>
                      {num} — {tag}
                    </p>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-6" style={{ fontFamily: MF, color: "#200044" }}>
                      {title}
                    </h3>
                    <div className="grid lg:grid-cols-2 gap-6 mb-8">
                      <p className="text-gray-500 leading-relaxed text-sm lg:text-base" style={{ fontFamily: MF }}>{desc}</p>
                      <ul className="space-y-2.5">
                        {highlights.map((h) => (
                          <li key={h} className="flex items-center gap-2 text-sm font-semibold text-gray-800" style={{ fontFamily: MF }}>
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
                  <div className="relative hidden lg:flex w-72 h-72 flex-shrink-0 overflow-hidden bg-gray-100">
                    <Image src={img} alt={title} fill className="object-cover object-center group-hover:scale-105 transition-transform duration-500" sizes="288px" />
                  </div>
                  <div className="relative lg:hidden w-full h-56 overflow-hidden bg-gray-100">
                    <Image src={img} alt={title} fill className="object-cover object-center" sizes="100vw" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "#57D9D4" }} className="py-16 lg:py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-20">
              <h2
                className="text-3xl lg:text-4xl font-bold leading-tight lg:w-[42%] flex-shrink-0"
                style={{ fontFamily: MF, color: "#200044" }}
              >
                Ready to build on governed intelligence?
              </h2>
              <div className="flex-1">
                <p className="text-base leading-relaxed mb-8" style={{ fontFamily: MF, color: "#200044", opacity: 0.85 }}>
                  Talk to our data and AI specialists to discuss your compliance reporting, risk modelling, or automation requirements.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-semibold transition-all hover:opacity-90"
                    style={{ fontFamily: MF, background: "#200044", color: "#ffffff" }}
                  >
                    Request a Consultation <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-semibold border transition-all hover:bg-white/20"
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
