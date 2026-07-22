import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import HeroCanvas from "@/components/HeroCanvas";
import {
  BarChart3, TrendingUp, Database, ShieldCheck,
  Users, Zap, Target, CheckCircle2, ArrowRight, Search,
  RefreshCw, LineChart, Filter, Activity,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Intelligence | Kulana IT Solutions",
  description:
    "Transform raw data into strategic advantage. Kulana's data practice covers data strategy, engineering, governance, analytics, and business intelligence for enterprises across Africa and the Middle East.",
};

const capabilities = [
  { Icon: Database,    label: "Data Engineering",      color: "text-blue-600",    bg: "bg-blue-50",    border: "border-blue-100" },
  { Icon: BarChart3,   label: "Business Intelligence",  color: "text-cyan-600",    bg: "bg-cyan-50",    border: "border-cyan-100" },
  { Icon: LineChart,   label: "Advanced Analytics",     color: "text-violet-600",  bg: "bg-violet-50",  border: "border-violet-100" },
  { Icon: ShieldCheck, label: "Data Governance",        color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
  { Icon: Filter,      label: "Data Quality",           color: "text-amber-600",   bg: "bg-amber-50",   border: "border-amber-100" },
  { Icon: Activity,    label: "Real-time Streaming",    color: "text-red-500",     bg: "bg-red-50",     border: "border-red-100" },
];

const benefits = [
  { Icon: BarChart3,   bg: "bg-blue-600",    title: "Faster, Better Decisions",      desc: "Replace gut-feel decisions with data-backed insight — giving every team the information they need, in the format they need it, when they need it." },
  { Icon: Zap,         bg: "bg-emerald-600", title: "Operational Efficiency",         desc: "Eliminate manual reporting, reduce reconciliation time, and automate data flows so your people focus on work that matters." },
  { Icon: ShieldCheck, bg: "bg-red-500",     title: "Risk & Compliance Confidence",   desc: "Data governance frameworks and audit trails ensure your data meets regulatory requirements and internal quality standards consistently." },
  { Icon: TrendingUp,  bg: "bg-violet-600",  title: "Revenue & Growth Opportunities", desc: "Identify high-value customer segments, forecast demand, and surface cross-sell opportunities hidden inside your existing data." },
  { Icon: Users,       bg: "bg-amber-500",   title: "Unified Data View",              desc: "Break down silos with a single source of truth — one platform where every function accesses consistent, trusted data." },
  { Icon: Target,      bg: "bg-cyan-600",    title: "Competitive Advantage",          desc: "Organisations that treat data as a strategic asset respond faster to market shifts and outperform peers who are still working from spreadsheets." },
  { Icon: RefreshCw,   bg: "bg-indigo-600",  title: "Continuous Improvement",         desc: "Data-driven feedback loops let you measure what works, iterate quickly, and compound gains across every part of the business." },
];

const useCases = [
  { emoji: "🏦", label: "Financial Reporting",      desc: "Automated, accurate management accounts and regulatory reports" },
  { emoji: "📦", label: "Supply Chain Visibility",  desc: "End-to-end inventory and logistics data in a single dashboard" },
  { emoji: "🎯", label: "Customer 360",             desc: "Unified customer profiles across CRM, sales, and support data" },
  { emoji: "⚙️", label: "Operational Analytics",    desc: "Real-time KPIs to monitor and optimise business performance" },
  { emoji: "📈", label: "Sales Intelligence",        desc: "Pipeline analytics and revenue forecasting for leadership" },
  { emoji: "🌐", label: "Data Monetisation",         desc: "Turn proprietary data into products or partner insights" },
];

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
];

export default function DataPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">

        {/* Hero */}
        <section className="gradient-hero relative overflow-hidden py-28 text-white">
          <HeroCanvas variant="predictive-analysis" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-cyan-300 mb-5">
              <BarChart3 className="w-4 h-4" /> Data &amp; AI Intelligence
            </span>
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Data
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
              Turn raw data into your most valuable asset. We design, build, and operate
              data platforms that give your organisation a single source of truth — and the
              analytics to act on it with confidence.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {["Data Engineering", "Business Intelligence", "Data Governance", "Real-time Analytics"].map((tag) => (
                <span key={tag} className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-white">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-300" /> {tag}
                </span>
              ))}
            </div>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Request a Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Capability strip */}
        <section className="bg-white border-b border-gray-100 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {capabilities.map(({ Icon, label, color, bg, border }) => (
                <div key={label} className={`flex flex-col items-center text-center gap-2.5 p-4 rounded-2xl border ${border} ${bg}`}>
                  <div className={`w-10 h-10 rounded-xl bg-white border ${border} flex items-center justify-center shadow-sm`}>
                    <Icon className={`w-5 h-5 ${color}`} strokeWidth={1.75} />
                  </div>
                  <span className="text-xs font-semibold text-gray-700 leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Overview</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6">
                Data as a strategic asset
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Most organisations collect enormous amounts of data but struggle to extract value
                from it. Information sits in siloed systems, reports take days to produce, and
                leadership makes decisions based on incomplete pictures. That gap between data
                and insight is where Kulana operates.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We build the pipelines, platforms, and governance frameworks that transform
                scattered data into a reliable, governed, and accessible asset — then layer
                analytics and BI on top so every team can make faster, smarter decisions.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Azure Synapse", "Power BI", "dbt", "Apache Kafka"].map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-xs font-semibold text-blue-700">
                    <CheckCircle2 className="w-3 h-3" /> {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-10 border border-blue-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Our Delivery Approach</h3>
              </div>
              <div className="space-y-5">
                {[
                  { Icon: Search,     step: "01", title: "Data Discovery",        desc: "We audit your existing data landscape — sources, quality, ownership, and gaps — and identify the highest-value opportunities to address first." },
                  { Icon: Database,   step: "02", title: "Platform Design",        desc: "We architect the right data platform for your scale and context — warehouse, lakehouse, or streaming — and design governance structures from day one." },
                  { Icon: TrendingUp, step: "03", title: "Build & Activate",       desc: "We engineer pipelines, build dashboards, and enable your teams to self-serve insight — then support and evolve the platform as your data needs grow." },
                ].map(({ Icon: StepIcon, step, title, desc }) => (
                  <div key={step} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-sm">
                      <StepIcon className="w-4 h-4 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">{step}</span>
                        <span className="font-semibold text-gray-900">{title}</span>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="bg-gray-950 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3">Applications</p>
              <h2 className="text-3xl font-extrabold text-white mb-3">Real-World Use Cases</h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                We apply data engineering and analytics across industries to solve concrete business problems.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {useCases.map(({ emoji, label, desc }) => (
                <div key={label} className="group flex gap-4 p-6 rounded-2xl border border-gray-800 bg-gray-900 hover:border-blue-500/40 hover:bg-gray-800 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0 text-2xl group-hover:bg-blue-600/40 transition-colors">
                    {emoji}
                  </div>
                  <div>
                    <p className="font-bold text-white mb-1">{label}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Why It Matters</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">Benefits</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                A well-built data capability pays dividends across every function in your organisation —
                from finance and operations to sales and product.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map(({ Icon, bg, title, desc }) => (
                <div key={title} className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 ${bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className={`w-12 h-12 rounded-2xl ${bg} mb-5 flex items-center justify-center shadow-md`}>
                    <Icon className="w-6 h-6 text-white" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-lg">
              Common questions about our data engineering and analytics practice.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group border border-gray-200 rounded-2xl overflow-hidden">
                <summary className="flex items-start justify-between gap-4 px-6 py-5 cursor-pointer list-none font-semibold text-gray-900 hover:bg-blue-50 transition-colors">
                  <span className="flex items-start gap-3">
                    <BarChart3 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" strokeWidth={1.75} />
                    {q}
                  </span>
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 group-open:bg-blue-100 flex-shrink-0 transition-colors mt-0.5">
                    <svg className="w-3.5 h-3.5 text-gray-500 group-open:text-blue-600 group-open:rotate-45 transition-all duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 pt-2 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pl-14">{a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-10 md:p-14 text-white text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Database className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
                Ready to make your data work for you?
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Talk to our data specialists and discover how a well-built data platform
                can accelerate decisions and drive measurable business outcomes.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:-translate-y-0.5"
                >
                  Request a Consultation <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
