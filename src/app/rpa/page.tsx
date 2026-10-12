import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

const MF = "var(--font-manrope), sans-serif";

export const metadata: Metadata = {
  title: "RPA — Robotic Process Automation | Kulana IT Solutions",
  description:
    "Automate repetitive business processes at scale with Robotic Process Automation — process discovery, bot development, and intelligent automation.",
};

const faqs = [
  {
    q: "What types of processes are best suited for RPA?",
    a: "RPA works best on processes that are rule-based (following defined logic), high-volume, repetitive, involve structured data (forms, spreadsheets, databases), and currently require human interaction with digital systems. Ideal candidates include invoice processing, data entry, report generation, employee onboarding, and reconciliation tasks.",
  },
  {
    q: "How quickly can RPA deliver return on investment?",
    a: "Most RPA deployments deliver measurable ROI within weeks of going live. Attended bots can be deployed in as little as 2–4 weeks for simple processes. Complex unattended automation programmes with multiple integrations typically take 2–3 months end-to-end. We help you prioritise processes by ROI to maximise early returns.",
  },
  {
    q: "What platforms do you use for RPA development?",
    a: "We work primarily with UiPath and Microsoft Power Automate — two of the most widely adopted RPA platforms globally. Platform selection depends on your existing Microsoft licensing, IT environment, and the complexity of automation required. Both platforms support attended, unattended, and hybrid automation patterns.",
  },
  {
    q: "Is RPA the same as AI or machine learning?",
    a: "No — traditional RPA follows explicit rules and cannot handle variation or ambiguity without human guidance. However, combining RPA with AI capabilities (such as OCR, NLP, and ML models) creates Intelligent Process Automation (IPA) that can handle unstructured inputs like handwritten forms or variable document formats.",
  },
  {
    q: "What happens when a bot encounters an exception?",
    a: "We design robust exception handling into every bot — unrecognised inputs trigger defined fallback paths, human review queues, or alert escalations rather than silent failures. Our monitoring platforms provide real-time visibility into bot performance, exception rates, and processing volumes.",
  },
  {
    q: "Does RPA require changes to our existing systems?",
    a: "Typically no — one of RPA's key advantages is that bots interact with your existing systems through the same user interface that humans use. This means you can automate without API access or system modifications. However, where APIs are available, we prefer them for greater reliability and performance.",
  },
  {
    q: "How is bot security managed?",
    a: "Bots operate under dedicated service accounts with the minimum privileges required. Credentials are stored in encrypted vaults — never hardcoded. All bot activity is logged for audit purposes. We follow ISO 27001-aligned security practices for all automation development and deployment.",
  },
];

export default function RpaPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden" style={{ minHeight: "840px" }}>
          <Image
            src="/images/Data_AI_Intelligence/Hero image_RPA_2560×1440px.webp"
            alt="RPA and Intelligent Automation"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(8,0,32,0.40) 0%, rgba(8,0,32,0.25) 45%, rgba(8,0,32,0.10) 75%, rgba(8,0,32,0.02) 100%)" }}
          />
          <div
            className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8"
            style={{ paddingTop: "calc(80px + 90px)", paddingBottom: "90px" }}
          >
            <div>
              <p className="inline-block tracking-[0.18em] uppercase mb-6" style={{ fontFamily: MF, fontWeight: 600, color: "#57D9D4", fontSize: "30px" }}>
                Data &amp; AI Intelligence
              </p>
              <h1
                className="text-white uppercase leading-tight"
                style={{ fontFamily: MF, fontWeight: 500, fontSize: "clamp(56px, 7vw, 90px)" }}
              >
                Robotic Process<br />Automation
              </h1>
            </div>
            <div style={{ marginTop: "140px" }}>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-md transition-all shadow-lg hover:-translate-y-0.5"
                style={{ fontFamily: MF, fontWeight: 600, background: "#57D9D4", color: "#040d28", fontSize: "20px" }}
              >
                Request a Consultation <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Overview ─────────────────────────────────────────────────── */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Label + black rule */}
            <div className="mb-10">
              <span className="tracking-[0.18em] uppercase" style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "25px" }}>
                Overview
              </span>
              <div className="w-full h-px mt-3" style={{ background: "#000000" }} />
            </div>

            {/* Heading */}
            <h2 className="leading-tight mb-10" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "45px" }}>
              Let software robots do the heavy lifting
            </h2>

            {/* 2-col: description left, tags right */}
            <div className="grid lg:grid-cols-[3fr_2fr] gap-12 items-start">
              <div>
                <p className="mb-8" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "30px", lineHeight: "40px" }}>
                  Across every industry, organisations spend enormous human effort on high-volume, repetitive tasks — data entry, reconciliation, report generation, form processing. These tasks are perfect candidates for automation — and RPA makes that automation fast to deploy, easy to maintain, and non-invasive to existing systems.
                </p>
                <p style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "30px", lineHeight: "40px" }}>
                  Kulana&apos;s RPA practice combines process expertise with leading automation platforms to identify, design, build, and operate bots that deliver measurable ROI — typically within weeks of deployment.
                </p>
              </div>
              <div className="flex flex-col gap-4 items-end">
                {["UiPath", "Power Automate", "Process Mining", "IDP"].map((tag) => (
                  <div key={tag} className="flex items-center justify-center py-4 rounded-lg text-center"
                    style={{ border: "1.5px solid #57D9D4", fontFamily: MF, fontWeight: 700, color: "#200044", fontSize: "25px", maxWidth: "340px", width: "100%" }}>
                    {tag}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ── How to Get Started ───────────────────────────────────────── */}
        <section style={{ background: "#200044" }} className="py-16 lg:py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Label + white rule */}
            <div className="mb-12">
              <span className="tracking-[0.18em] uppercase" style={{ fontFamily: MF, fontWeight: 600, color: "#ffffff", fontSize: "25px" }}>
                How to Get Started
              </span>
              <div className="w-full h-px mt-3" style={{ background: "#ffffff" }} />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                { step: "01", title: "Discover", desc: "Map processes using process mining to identify automation candidates ranked by ROI and feasibility." },
                { step: "02", title: "Design",   desc: "Document the process in detail — inputs, decision logic, exceptions, and outputs — as a bot blueprint." },
                { step: "03", title: "Build",    desc: "Develop, test, and quality-assure the bot in a controlled environment before promoting to production." },
                { step: "04", title: "Scale",    desc: "Monitor performance, handle exceptions, and continuously optimise — then scale to more processes." },
              ].map(({ step, title, desc }) => (
                <div key={step}>
                  <p className="leading-none mb-4" style={{ fontFamily: MF, fontWeight: 400, color: "#a198af", fontSize: "70px" }}>{step}</p>
                  <p className="mb-4" style={{ fontFamily: MF, fontWeight: 400, color: "#57D9D4", fontSize: "45px" }}>{title}</p>
                  <p style={{ fontFamily: MF, fontWeight: 400, color: "#ffffff", fontSize: "25px", lineHeight: "30px" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Applications ─────────────────────────────────────────────── */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Label + black rule */}
            <div className="mb-10">
              <span className="tracking-[0.18em] uppercase" style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "25px" }}>
                Applications
              </span>
              <div className="w-full h-px mt-3" style={{ background: "#000000" }} />
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
              <h2 className="leading-tight" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "45px" }}>
                Real-world use cases
              </h2>
              <p className="lg:pt-2" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "30px", lineHeight: "40px" }}>
                RPA delivers rapid, measurable ROI across industries wherever repetitive digital work exists.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { label: "Finance and Accounts Payable",   desc: "Automated invoice extraction, 3-way matching, and payment processing with near-zero error rates." },
                { label: "HR Onboarding",                  desc: "End-to-end employee onboarding — from system provisioning to document generation and compliance checks." },
                { label: "Data Reconciliation",            desc: "Automated reconciliation across ERP, banking, and operational systems at month-end close." },
                { label: "Claims Processing",              desc: "Insurance claims intake, validation, and routing — reducing cycle time from days to minutes." },
                { label: "Regulatory Reporting",           desc: "Automated extraction, formatting, and submission of compliance reports to regulatory bodies." },
                { label: "Customer Data Management",       desc: "Synchronisation of customer records across CRM, ERP, and support systems to maintain a single source of truth." },
              ].map(({ label, desc }) => (
                <div key={label} className="bg-white border border-gray-100 rounded-xl p-6">
                  <p className="mb-3" style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "35px" }}>{label}</p>
                  <p style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "25px", lineHeight: "30px" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What We Deliver ──────────────────────────────────────────── */}
        <section style={{ background: "#f5f5f5" }} className="py-16 lg:py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Label + black rule */}
            <div className="mb-10">
              <span className="tracking-[0.18em] uppercase" style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "25px" }}>
                What We Deliver
              </span>
              <div className="w-full h-px mt-3" style={{ background: "#000000" }} />
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
              <h2 className="leading-tight" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "45px" }}>
                End-to-end RPA services
              </h2>
              <p className="lg:pt-2" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "30px", lineHeight: "40px" }}>
                From process discovery to bot deployment and ongoing managed operations — full-cycle automation capability.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { label: "Process Discovery and Mining",      desc: "Map and analyse your current processes using process mining tools to identify the highest-value automation candidates." },
                { label: "Attended Bot Development",          desc: "Desktop bots that work alongside your staff — triggered by user actions to handle repetitive steps in real time." },
                { label: "Unattended Bot Development",        desc: "Fully autonomous bots that run on a schedule or trigger — processing thousands of transactions without human intervention." },
                { label: "Intelligent Document Processing",   desc: "Combine RPA with OCR and AI to extract, validate, and route data from invoices, forms, and documents automatically." },
                { label: "Exception Handling and Logging",    desc: "Robust exception management, alerting, and audit trails that keep automation reliable and compliant." },
                { label: "Orchestration and Monitoring",      desc: "Centralised control rooms to schedule, monitor, and optimise your entire bot fleet in real time." },
              ].map(({ label, desc }) => (
                <div key={label} className="bg-white border border-gray-100 rounded-xl p-6">
                  <p className="mb-3" style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "35px" }}>{label}</p>
                  <p style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "25px", lineHeight: "30px" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why It Matters ───────────────────────────────────────────── */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Label + black rule */}
            <div className="mb-10">
              <span className="tracking-[0.18em] uppercase" style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "25px" }}>
                Why It Matters
              </span>
              <div className="w-full h-px mt-3" style={{ background: "#000000" }} />
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
              <h2 className="leading-tight" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "45px" }}>
                The business case for automation
              </h2>
              <p className="lg:pt-2" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "30px", lineHeight: "40px" }}>
                RPA delivers fast, measurable impact on cost, quality, and employee experience.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "Significant Cost Savings",  desc: "Bots work 24/7 without breaks, errors, or overtime — dramatically reducing the cost of high-volume processes." },
                { title: "Near-Zero Error Rates",     desc: "Rules-based automation eliminates the human errors that accumulate across thousands of repetitive transactions." },
                { title: "Speed and Scalability",     desc: "Scale capacity up or down instantly — bots handle peak volumes without hiring or training additional staff." },
                { title: "Employee Satisfaction",     desc: "Free your teams from tedious, repetitive work so they can focus on creative, high-value tasks." },
              ].map(({ title, desc }) => (
                <div key={title} className="rounded-xl p-6" style={{ border: "1.5px solid #57D9D4", background: "#f1ffff" }}>
                  <p className="mb-3" style={{ fontFamily: MF, fontWeight: 400, color: "#57D9D4", fontSize: "35px" }}>{title}</p>
                  <p style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "25px", lineHeight: "30px" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Label + black rule */}
            <div className="mb-12">
              <span className="tracking-[0.18em] uppercase" style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "25px" }}>FAQ</span>
              <div className="w-full h-px mt-3" style={{ background: "#000000" }} />
            </div>

            {/* Row 1: heading left | description right */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-10">
              <h2 className="leading-tight" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "45px" }}>
                Your questions<br />answered
              </h2>
              <p style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "30px", lineHeight: "40px" }}>
                Everything you need to know about our RPA and intelligent automation practice.
              </p>
            </div>

            {/* Row 2: image left | accordion right */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div className="relative w-full rounded-2xl overflow-hidden lg:mt-24" style={{ aspectRatio: "4/5", maxWidth: "320px" }}>
                <Image src="/images/integration_digital_connectivity/Integration.webp" alt="RPA and Automation" fill className="object-cover object-center" sizes="320px" />
              </div>

              <div className="divide-y" style={{ borderColor: "#e5e7eb" }}>
                {faqs.map(({ q, a }) => (
                  <details key={q} className="group py-5">
                    <summary className="flex items-center justify-between gap-6 cursor-pointer list-none">
                      <span style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "25px", lineHeight: "30px" }}>{q}</span>
                      <span className="flex-shrink-0 leading-none select-none" style={{ color: "#000000", fontSize: "22px" }}>
                        <span className="group-open:hidden">+</span>
                        <span className="hidden group-open:inline">−</span>
                      </span>
                    </summary>
                    <p className="mt-4" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "25px", lineHeight: "30px" }}>{a}</p>
                  </details>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section style={{ background: "#57D9D4" }}>
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-20">
              <h2
                className="leading-tight lg:w-[45%] flex-shrink-0"
                style={{ fontFamily: MF, fontWeight: 700, color: "#200044", fontSize: "53px" }}
              >
                Ready to automate your processes?
              </h2>
              <div className="flex-1">
                <p className="mb-8" style={{ fontFamily: MF, fontWeight: 400, color: "#200044", fontSize: "25px", lineHeight: "30px" }}>
                  Talk to our automation specialists and discover which processes to automate first for the fastest ROI.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md transition-all hover:opacity-90"
                    style={{ fontFamily: MF, fontWeight: 600, background: "#200044", color: "#ffffff", fontSize: "20px" }}
                  >
                    Request a Consultation <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md border transition-all hover:bg-white/20"
                    style={{ fontFamily: MF, fontWeight: 600, color: "#200044", borderColor: "#200044", fontSize: "20px" }}
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
