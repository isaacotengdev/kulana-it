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

        {/* Hero */}
        <section className="relative overflow-hidden" style={{ minHeight: "840px" }}>
          <Image
            src="/images/Data_AI_Intelligence/Hero image_Data & AI Intelligence_2560×1440px.webp"
            alt="Data and AI Intelligence"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(8,0,32,0.72) 0%, rgba(8,0,32,0.52) 45%, rgba(8,0,32,0.22) 75%, rgba(8,0,32,0.06) 100%)" }}
          />
          <div
            className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8"
            style={{ paddingTop: "calc(80px + 90px)", paddingBottom: "90px" }}
          >
            <div>
              <p
                className="inline-block tracking-normal uppercase mb-6"
                style={{ fontFamily: MF, fontWeight: 600, color: "#57D9D4", fontSize: "24px" }}
              >
                Most Organisations Have Data But Not Intelligence
              </p>
              <h1
                className="text-white uppercase leading-tight"
                style={{ fontFamily: MF, fontWeight: 500, fontSize: "clamp(45px, 5.6vw, 72px)" }}
              >
                Data &amp; AI<br />Intelligence
              </h1>
            </div>
            <div style={{ marginTop: "140px" }} className="flex items-end justify-between">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-md transition-all shadow-lg hover:-translate-y-0.5"
                style={{ fontFamily: MF, fontWeight: 600, background: "#57D9D4", color: "#040d28", fontSize: "16px" }}
              >
                Request a Consultation <ArrowRight className="w-5 h-5" />
              </Link>
              <p
                className="hidden lg:block uppercase text-right"
                style={{ fontFamily: MF, fontWeight: 400, color: "#57D9D4", fontSize: "24px", lineHeight: "28px" }}
              >
                Decision Science.<br />Not Dashboards.
              </p>
            </div>
          </div>
        </section>

        {/* The Problem We Solve */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="mb-10">
              <span className="tracking-normal uppercase" style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "13px" }}>
                The Problem We Solve
              </span>
              <div className="w-full h-px mt-3" style={{ background: "#000000" }} />
            </div>

            <h2 className="leading-tight mb-10" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "36px" }}>
              Most organisations have data but not intelligence
            </h2>

            <div className="grid lg:grid-cols-[3fr_2fr] gap-12 items-start">
              <div>
                <p className="mb-8" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "24px", lineHeight: "32px" }}>
                  In financial services and regulated industries, the gap between data and structured intelligence carries real cost: compliance exposures from manual reporting, credit decisions made without predictive models, and operational risks that analytics could have surfaced months earlier.
                </p>
                <p style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "24px", lineHeight: "32px" }}>
                  Kulana&apos;s Data and AI Intelligence practice is built around decision science — not dashboards. We architect platforms that power regulatory compliance reporting, predictive risk models, and intelligent automation, with data governance and audit trails that regulators and risk officers require built in from the start.
                </p>
              </div>
              <div className="flex flex-col gap-4 items-end">
                {["Predictive Analytics", "AI Governance", "Compliance Reporting", "MLOps"].map((tag) => (
                  <div key={tag} className="flex items-center justify-center py-4 rounded-lg text-center"
                    style={{ border: "1.5px solid #57D9D4", fontFamily: MF, fontWeight: 700, color: "#200044", fontSize: "20px", maxWidth: "340px", width: "100%" }}>
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How to Get Started */}
        <section style={{ background: "#200044" }} className="py-16 lg:py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="mb-12">
              <span className="tracking-normal uppercase" style={{ fontFamily: MF, fontWeight: 600, color: "#ffffff", fontSize: "13px" }}>
                How to Get Started
              </span>
              <div className="w-full h-px mt-3" style={{ background: "#ffffff" }} />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                { step: "01", title: "Data & AI Audit",        desc: "Map your current data assets, AI opportunities, and maturity gaps — identifying the highest-value initiatives to address first." },
                { step: "02", title: "Strategy & Architecture", desc: "Define your data platform, AI roadmap, and governance framework — cloud, lakehouse, or hybrid — matched to your regulatory context." },
                { step: "03", title: "Build & Deploy",          desc: "Engineer pipelines, train and validate models, deploy automation, and activate your teams to self-serve intelligence from governed data." },
                { step: "04", title: "Govern & Scale",          desc: "Monitor model performance, maintain audit trails, retrain on new data, and scale automation as new use cases emerge." },
              ].map(({ step, title, desc }) => (
                <div key={step}>
                  <p className="leading-none mb-4" style={{ fontFamily: MF, fontWeight: 400, color: "#a198af", fontSize: "56px" }}>{step}</p>
                  <p className="mb-4 leading-tight" style={{ fontFamily: MF, fontWeight: 600, color: "#57D9D4", fontSize: "28px", minHeight: "75px", display: "flex", alignItems: "flex-start" }}>{title}</p>
                  <p style={{ fontFamily: MF, fontWeight: 400, color: "#ffffff", fontSize: "20px", lineHeight: "24px" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Deliver */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="mb-10">
              <span className="tracking-normal uppercase" style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "13px" }}>
                What We Deliver
              </span>
              <div className="w-full h-px mt-3" style={{ background: "#000000" }} />
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
              <h2 className="leading-tight" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "36px" }}>
                Three Disciplines. One Governed Intelligence Layer.
              </h2>
              <p className="lg:pt-2" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "24px", lineHeight: "32px" }}>
                Data, AI, and automation work together — each capability amplifying the next, from governed data foundations through to intelligent decision systems.
              </p>
            </div>

            <div>
              {[
                {
                  num: "01", tag: "ANALYTICS & BI", title: "Data",
                  href: "/data",
                  desc: "Build a governed, analytics-ready data platform. From regulatory compliance reporting and predictive risk models to business intelligence and real-time pipelines — with data governance and audit trails built in from the start.",
                  highlights: ["Regulatory Compliance Reporting", "Predictive Risk Modelling", "Data Governance & Audit Trails", "Business Intelligence"],
                  img: "/images/Data_AI_Intelligence/Data_image_1600x1000px.webp",
                },
                {
                  num: "02", tag: "ARTIFICIAL INTELLIGENCE", title: "AI",
                  href: "/ai",
                  desc: "Build AI that institutions can trust and regulators can audit. From credit scoring and fraud detection models to generative AI — with model validation, bias testing, and Explainable AI (XAI) built in.",
                  highlights: ["Credit Scoring & Fraud Detection", "Explainable AI (XAI)", "Model Validation & Governance", "Generative AI & LLMs"],
                  img: "/images/Data_AI_Intelligence/AI_image_1600x1000px.webp",
                },
                {
                  num: "03", tag: "AUTOMATION", title: "RPA",
                  href: "/rpa",
                  desc: "Automate high-volume regulatory and operational workflows — from compliance data collection and report generation to reconciliations and audit pack assembly — reducing error rates and freeing skilled staff for higher-value work.",
                  highlights: ["Compliance & Audit Automation", "Regulatory Report Generation", "Reconciliation Bots", "Process Monitoring & Optimisation"],
                  img: "/images/Data_AI_Intelligence/RPA_image_1600x1000px.webp",
                },
              ].map(({ num, tag, title, href, desc, highlights, img }) => (
                <div key={title}>
                  <div className="group flex flex-col lg:flex-row gap-10 py-10">
                    <div className="flex-1 flex flex-col">
                      <p className="tracking-normal uppercase mb-3" style={{ fontFamily: MF, fontWeight: 600, color: "#a198af", fontSize: "13px" }}>
                        {num} — {tag}
                      </p>
                      <h3 className="mb-6 leading-tight" style={{ fontFamily: MF, fontWeight: 700, color: "#200044", fontSize: "36px" }}>
                        {title}
                      </h3>
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
                    <div className="hidden lg:block flex-shrink-0" style={{ width: "432px" }}>
                      <div className="relative overflow-hidden" style={{ width: "432px", height: "270px" }}>
                        <Image src={img} alt={title} fill className="object-cover object-center" sizes="432px" />
                      </div>
                    </div>
                    <div className="relative lg:hidden w-full overflow-hidden" style={{ aspectRatio: "16/10" }}>
                      <Image src={img} alt={title} fill className="object-cover object-center" sizes="100vw" />
                    </div>
                  </div>
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
              <h2
                className="leading-tight lg:w-[45%] flex-shrink-0"
                style={{ fontFamily: MF, fontWeight: 700, color: "#200044", fontSize: "42px" }}
              >
                Ready to build on governed intelligence?
              </h2>
              <div className="flex-1">
                <p className="mb-8" style={{ fontFamily: MF, fontWeight: 400, color: "#200044", fontSize: "20px", lineHeight: "24px" }}>
                  Talk to our data and AI specialists to discuss your compliance reporting, risk modelling, or automation requirements.
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
