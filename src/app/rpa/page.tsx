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
                Robotic Process<br />Automation
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

        {/* Overview */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs tracking-[0.18em] uppercase mb-6" style={{ fontFamily: MF, fontWeight: 700, color: "#200044" }}>Overview</p>
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6" style={{ fontFamily: MF }}>
              Let software robots do the heavy lifting
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4" style={{ fontFamily: MF }}>
              Across every industry, organisations spend enormous human effort on high-volume, repetitive tasks — data entry, reconciliation, report generation, form processing. These tasks are perfect candidates for automation — and RPA makes that automation fast to deploy, easy to maintain, and non-invasive to existing systems.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10" style={{ fontFamily: MF }}>
              Kulana&apos;s RPA practice combines process expertise with leading automation platforms to identify, design, build, and operate bots that deliver measurable ROI — typically within weeks of deployment.
            </p>
            <div className="flex flex-wrap lg:flex-nowrap gap-3">
              {["UiPath", "Power Automate", "Process Mining", "IDP"].map((tag) => (
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
                { step: "01", title: "Discover", desc: "Map processes using process mining to identify automation candidates ranked by ROI and feasibility." },
                { step: "02", title: "Design",   desc: "Document the process in detail — inputs, decision logic, exceptions, and outputs — as a bot blueprint." },
                { step: "03", title: "Build",    desc: "Develop, test, and quality-assure the bot in a controlled environment before promoting to production." },
                { step: "04", title: "Scale",    desc: "Monitor performance, handle exceptions, and continuously optimise — then scale to more processes." },
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

        {/* Applications */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs tracking-[0.18em] uppercase mb-10" style={{ fontFamily: MF, fontWeight: 700, color: "#200044" }}>Applications</p>
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-snug" style={{ fontFamily: MF }}>
                Real-world use cases
              </h2>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: MF }}>
                RPA delivers rapid, measurable ROI across industries wherever repetitive digital work exists.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { label: "Finance and Accounts Payable",   desc: "Automated invoice extraction, 3-way matching, and payment processing with near-zero error rates." },
                { label: "HR Onboarding",                  desc: "End-to-end employee onboarding — from system provisioning to document generation and compliance checks." },
                { label: "Data Reconciliation",            desc: "Automated reconciliation across ERP, banking, and operational systems at month-end close." },
                { label: "Claims Processing",              desc: "Insurance claims intake, validation, and routing — reducing cycle time from days to minutes." },
                { label: "Regulatory Reporting",           desc: "Automated extraction, formatting, and submission of compliance reports to regulatory bodies." },
                { label: "Customer Data Management",       desc: "Synchronisation of customer records across CRM, ERP, and support systems to maintain a single source of truth." },
              ].map(({ label, desc }) => (
                <div key={label} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-base font-bold mb-3" style={{ fontFamily: MF, color: "#200044" }}>{label}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: MF }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Deliver */}
        <section style={{ background: "#f5f5f5" }} className="py-16 lg:py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs tracking-[0.18em] uppercase mb-10" style={{ fontFamily: MF, fontWeight: 700, color: "#200044" }}>What We Deliver</p>
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-snug" style={{ fontFamily: MF }}>
                End-to-end RPA services
              </h2>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: MF }}>
                From process discovery to bot deployment and ongoing managed operations — full-cycle automation capability.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { label: "Process Discovery and Mining",      desc: "Map and analyse your current processes using process mining tools to identify the highest-value automation candidates." },
                { label: "Attended Bot Development",          desc: "Desktop bots that work alongside your staff — triggered by user actions to handle repetitive steps in real time." },
                { label: "Unattended Bot Development",        desc: "Fully autonomous bots that run on a schedule or trigger — processing thousands of transactions without human intervention." },
                { label: "Intelligent Document Processing",   desc: "Combine RPA with OCR and AI to extract, validate, and route data from invoices, forms, and documents automatically." },
                { label: "Exception Handling and Logging",    desc: "Robust exception management, alerting, and audit trails that keep automation reliable and compliant." },
                { label: "Orchestration and Monitoring",      desc: "Centralised control rooms to schedule, monitor, and optimise your entire bot fleet in real time." },
              ].map(({ label, desc }) => (
                <div key={label} className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-base font-bold mb-3" style={{ fontFamily: MF, color: "#200044" }}>{label}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: MF }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs tracking-[0.18em] uppercase mb-10" style={{ fontFamily: MF, fontWeight: 700, color: "#200044" }}>Why It Matters</p>
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-snug" style={{ fontFamily: MF }}>
                The business case for automation
              </h2>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: MF }}>
                RPA delivers fast, measurable impact on cost, quality, and employee experience.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Significant Cost Savings",  desc: "Bots work 24/7 without breaks, errors, or overtime — dramatically reducing the cost of high-volume processes." },
                { title: "Near-Zero Error Rates",     desc: "Rules-based automation eliminates the human errors that accumulate across thousands of repetitive transactions." },
                { title: "Speed and Scalability",     desc: "Scale capacity up or down instantly — bots handle peak volumes without hiring or training additional staff." },
                { title: "Employee Satisfaction",     desc: "Free your teams from tedious, repetitive work so they can focus on creative, high-value tasks." },
              ].map(({ title, desc }) => (
                <div key={title} className="p-8 border rounded-xl" style={{ borderColor: "#57D9D4" }}>
                  <h3 className="text-lg font-bold text-gray-900 mb-3" style={{ fontFamily: MF }}>{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: MF }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-6 mb-12">
              <p className="text-xs tracking-[0.18em] uppercase flex-shrink-0 leading-none" style={{ fontFamily: MF, fontWeight: 700, color: "#200044" }}>FAQ</p>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div>
                <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-8" style={{ fontFamily: MF }}>
                  Your questions<br />answered
                </h2>
                <div className="relative w-full max-w-xs aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100">
                  <Image src="/images/integration_digital_connectivity/Integration.webp" alt="RPA and Automation" fill className="object-cover object-center" sizes="320px" />
                </div>
              </div>
              <div>
                <p className="text-gray-600 leading-relaxed mb-10" style={{ fontFamily: MF }}>
                  Everything you need to know about our RPA and intelligent automation practice.
                </p>
                <div className="divide-y divide-gray-200">
              {faqs.map(({ q, a }) => (
                <details key={q} className="group py-6">
                  <summary className="flex items-center justify-between gap-6 cursor-pointer list-none">
                    <span className="font-semibold text-gray-900" style={{ fontFamily: MF }}>{q}</span>
                    <span className="flex-shrink-0 text-xl leading-none text-gray-400 select-none">
                      <span className="group-open:hidden">+</span>
                      <span className="hidden group-open:inline">−</span>
                    </span>
                  </summary>
                  <p className="text-gray-500 text-sm leading-relaxed mt-4" style={{ fontFamily: MF }}>{a}</p>
                </details>
              ))}
                </div>
              </div>
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
                Ready to automate your processes?
              </h2>
              <div className="flex-1">
                <p className="text-base leading-relaxed mb-8" style={{ fontFamily: MF, color: "#200044", opacity: 0.85 }}>
                  Talk to our automation specialists and discover which processes to automate first for the fastest ROI.
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
