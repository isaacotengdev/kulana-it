import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

const MF = "var(--font-manrope), sans-serif";

export const metadata: Metadata = {
  title: "Data Intelligence | Kulana IT Solutions",
  description:
    "Predictive risk modelling, regulatory compliance reporting, credit scoring, and actuarial analytics — Kulana's data practice for financial services and regulated enterprises.",
};

const faqs = [
  {
    q: "Where do we start if our data is scattered across many systems?",
    a: "We begin with a data landscape assessment — mapping every source, format, and owner. From there we design an integration architecture that brings data together without disrupting existing systems.",
  },
  {
    q: "What is a data warehouse and do we need one?",
    a: "A data warehouse is a centralised repository optimised for analytics. Whether you need one depends on your data volume, query complexity, and reporting needs — we help you make the right choice between warehouse, lakehouse, or hybrid architectures.",
  },
  {
    q: "How long does a data engineering project typically take?",
    a: "A foundational data pipeline delivering business-ready dashboards typically takes 6–12 weeks. More complex platforms with multiple source integrations and governance layers are phased over 3–6 months.",
  },
  {
    q: "What is data governance and why does it matter?",
    a: "Data governance defines who owns data, how it is defined, and who can access it. Without governance, the same metric can mean different things in different reports — eroding trust and slowing decisions.",
  },
  {
    q: "Can you work with our existing BI tools?",
    a: "Yes. We work with Power BI, Tableau, Looker, Metabase, and other tools. We can extend what you already have or recommend a better fit if your current tooling is holding you back.",
  },
  {
    q: "How do you ensure data quality?",
    a: "We implement automated validation rules, data profiling, anomaly detection, and quality scoring at each stage of the pipeline — so problems are caught and flagged before they reach your dashboards.",
  },
  {
    q: "What cloud platforms do you support?",
    a: "We work across Azure (Synapse, Fabric), AWS (Redshift, Glue), and Google Cloud (BigQuery, Dataflow), as well as on-premise and hybrid environments common across African enterprises.",
  },
  {
    q: "How do you handle data privacy and compliance?",
    a: "We build privacy-by-design into every data architecture — encryption at rest and in transit, role-based access controls, data masking, and full audit trails aligned with GDPR and local data protection laws.",
  },
  {
    q: "What is Explainable AI and why does it matter for regulated industries?",
    a: "Explainable AI (XAI) refers to models that can surface the reasons behind a prediction or decision — not just the output. A credit scoring model might return a probability, but XAI frameworks show which factors drove that score. For regulated industries this matters because regulators increasingly require institutions to justify automated decisions, and internal risk committees need to interrogate model behaviour before sign-off. We build XAI outputs into predictive models so they can be audited, challenged, and explained to non-technical stakeholders.",
  },
  {
    q: "How do you validate models before they go into production?",
    a: "We follow a structured model validation process: the dataset is split so the model is trained on one portion and tested on held-out data it has never seen. For risk models we apply back-testing against historical outcomes — comparing model predictions to what actually happened. We also run champion-challenger tests where a new model runs in parallel against the existing approach before any cutover. Bias testing is applied to check whether the model performs consistently across demographic segments. The full validation report becomes part of the audit trail.",
  },
];

export default function DataPage() {
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
                Data
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
              Data as a strategic asset
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4" style={{ fontFamily: MF }}>
              In financial services and regulated industries, the gap between data and structured intelligence carries real cost: compliance exposures from manual reporting, credit decisions made without predictive models, and operational risks that analytics could have surfaced months earlier.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10" style={{ fontFamily: MF }}>
              Kulana&apos;s data practice is built around decision science. We architect platforms that power regulatory compliance reporting, predictive risk models, and management intelligence — with data governance, model validation frameworks, and the audit trails that regulators and risk officers require built in from the start.
            </p>
            <div className="flex flex-wrap lg:flex-nowrap gap-3">
              {["Azure Synapse", "Power BI", "dbt", "Apache Kafka"].map((tag) => (
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
                { step: "01", title: "Data Discovery",   desc: "We audit your existing data landscape — sources, quality, ownership, and gaps — and identify the highest-value opportunities to address first." },
                { step: "02", title: "Platform Design",  desc: "We architect the right data platform for your scale and context — warehouse, lakehouse, or streaming — and design governance structures from day one." },
                { step: "03", title: "Build & Activate", desc: "We engineer pipelines, build dashboards, and enable your teams to self-serve insight — then support and evolve the platform as your data needs grow." },
                { step: "04", title: "Scale & Govern",   desc: "Continuous data quality monitoring, model revalidation, and governance reviews keep your data platform accurate and compliant as your business grows." },
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
                We apply data engineering and analytics across industries to solve concrete business problems.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { label: "Regulatory Compliance Reporting", desc: "Automated pipelines that prepare, validate, and format regulatory submissions on schedule — with full data lineage." },
                { label: "Predictive Risk Modelling",       desc: "Credit risk, default probability, and operational risk models validated against historical data before production deployment." },
                { label: "Credit Scoring & Fraud Detection",desc: "ML-informed scorecards and anomaly detection models that flag high-risk applications and suspicious transactions in real time." },
                { label: "Actuarial Analytics",             desc: "Data infrastructure and reporting layers supporting reserve calculations, claims analysis, and pricing decisions." },
                { label: "Customer Analytics",              desc: "Unified customer profiles with churn prediction, lifetime value modelling, and segmentation across all touchpoints." },
                { label: "Management Reporting & BI",       desc: "Automated management accounts and executive dashboards replacing manual spreadsheet consolidation." },
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
                Data engineering and analytics services
              </h2>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: MF }}>
                A full-spectrum data capability covering engineering, governance, analytics, and compliance — built for scale.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { label: "Data Engineering",      desc: "Pipelines, transformations, and ingestion frameworks that move data from source to analytics-ready at any scale." },
                { label: "Business Intelligence",  desc: "Dashboards, reports, and self-service analytics layers that put accurate, governed insight in the hands of every team." },
                { label: "Advanced Analytics",     desc: "Predictive models, clustering, anomaly detection, and statistical analysis applied to your highest-priority business problems." },
                { label: "Data Governance",        desc: "Ownership frameworks, data catalogues, lineage tracking, and quality standards that make your data trustworthy and auditable." },
                { label: "Data Quality",           desc: "Automated profiling, validation rules, anomaly detection, and quality scoring built into every stage of the pipeline." },
                { label: "Real-time Streaming",    desc: "Event-driven data architectures using Apache Kafka and cloud streaming services for real-time decision support." },
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
                What a governed data capability unlocks
              </h2>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: MF }}>
                A well-built data capability pays dividends across every function — from finance and operations to sales and product.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Faster, Better Decisions",      desc: "Replace gut-feel decisions with data-backed insight — giving every team the information they need, in the format they need it, when they need it." },
                { title: "Operational Efficiency",         desc: "Eliminate manual reporting, reduce reconciliation time, and automate data flows so your people focus on work that matters." },
                { title: "Risk & Compliance Confidence",   desc: "Governance frameworks, model validation, audit trails, and XAI outputs ensure your models and data meet regulatory requirements — and can be interrogated by auditors." },
                { title: "Revenue & Growth Opportunities", desc: "Identify high-value customer segments, forecast demand, and surface cross-sell opportunities hidden inside your existing data." },
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
                  <Image src="/images/integration_digital_connectivity/Integration.webp" alt="Data Engineering" fill className="object-cover object-center" sizes="320px" />
                </div>
              </div>
              <div>
                <p className="text-gray-600 leading-relaxed mb-10" style={{ fontFamily: MF }}>
                  Common questions about our data engineering and analytics practice.
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
                Ready to make your data work for you?
              </h2>
              <div className="flex-1">
                <p className="text-base leading-relaxed mb-8" style={{ fontFamily: MF, color: "#200044", opacity: 0.85 }}>
                  Talk to our data specialists and discover how a well-built data platform can accelerate decisions and drive measurable business outcomes.
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
