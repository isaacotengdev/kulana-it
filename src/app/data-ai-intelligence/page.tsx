import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import HeroCanvas from "@/components/HeroCanvas";
import {
  Brain, BarChart3, Zap, RefreshCw,
  ArrowRight, CheckCircle2, ShieldCheck, FileCheck, Eye,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data & AI Intelligence | Kulana IT Solutions",
  description:
    "Predictive risk analytics, automated compliance reporting, and AI governance frameworks — built for institutions where accuracy and auditability are non-negotiable.",
};

const subServices = [
  {
    Icon: BarChart3,
    title: "Data",
    href: "/data",
    tag: "Analytics & BI",
    gradient: "from-cyan-500 to-blue-600",
    iconBg: "bg-cyan-600",
    tagColor: "bg-cyan-50 text-cyan-700 border-cyan-100",
    desc: "Build a governed, analytics-ready data platform. From regulatory compliance reporting and predictive risk models to business intelligence and real-time pipelines — with data governance and audit trails built in from the start.",
    highlights: [
      "Regulatory Compliance Reporting",
      "Predictive Risk Modelling",
      "Data Governance & Audit Trails",
      "Business Intelligence",
    ],
  },
  {
    Icon: Brain,
    title: "AI",
    href: "/ai",
    tag: "Artificial Intelligence",
    gradient: "from-blue-500 to-teal-600",
    iconBg: "bg-blue-600",
    tagColor: "bg-blue-50 text-blue-700 border-blue-100",
    desc: "Build AI that institutions can trust and regulators can audit. From credit scoring and fraud detection models to generative AI — with model validation, bias testing, and Explainable AI (XAI) built in.",
    highlights: [
      "Credit Scoring & Fraud Detection",
      "Explainable AI (XAI)",
      "Model Validation & Governance",
      "Generative AI & LLMs",
    ],
  },
  {
    Icon: RefreshCw,
    title: "RPA",
    href: "/rpa",
    tag: "Automation",
    gradient: "from-teal-500 to-blue-600",
    iconBg: "bg-teal-600",
    tagColor: "bg-teal-50 text-teal-700 border-teal-100",
    desc: "Automate high-volume regulatory and operational workflows — from compliance data collection and report generation to reconciliations and audit pack assembly — reducing error rates and freeing skilled staff for higher-value work.",
    highlights: [
      "Compliance & Audit Automation",
      "Regulatory Report Generation",
      "Reconciliation Bots",
      "Process Monitoring & Optimisation",
    ],
  },
];

const strategicCapabilities = [
  {
    Icon: Zap,
    color: "text-cyan-600",
    bg: "bg-cyan-50",
    title: "Predictive Risk Analytics",
    body: "Credit risk, default probability, and operational risk models built with statistical rigour and back-tested against historical data before deployment into production decision flows.",
  },
  {
    Icon: FileCheck,
    color: "text-blue-600",
    bg: "bg-blue-50",
    title: "Automated Compliance & Audit Reporting",
    body: "Automated pipelines that pull, transform, and format regulatory submissions on schedule — reducing cycle times, eliminating manual reconciliation errors, and creating a verifiable data lineage.",
  },
  {
    Icon: Eye,
    color: "text-teal-600",
    bg: "bg-teal-50",
    title: "Data Governance & Explainable AI",
    body: "Model validation frameworks, audit trails, and Explainable AI (XAI) outputs that help risk officers, auditors, and boards understand exactly how conclusions are reached — essential for regulated environments.",
  },
];

export default function DataAiIntelligencePage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">

        {/* Hero */}
        <section className="gradient-hero relative overflow-hidden py-28 text-white">
          <HeroCanvas variant="data-ai" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-cyan-300 mb-5">
              <Brain className="w-4 h-4" /> Our Services
            </span>
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Data and AI Intelligence
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
              Move beyond dashboards to decision science. Our Data and AI Intelligence practice
              delivers predictive risk analytics, automated compliance reporting, and governance
              frameworks built for institutions where accuracy and auditability are non-negotiable.
            </p>
          </div>
        </section>

        {/* Sub-services */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">What We Deliver</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              Data. AI. Automation. All Together.
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Three integrated capabilities that turn raw information into governed intelligence,
              automated workflows, and decisions that withstand regulatory scrutiny.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {subServices.map(({ Icon, title, href, tag, gradient, iconBg, tagColor, desc, highlights }) => (
              <div
                key={title}
                className="group bg-white rounded-3xl border border-gray-100 hover:border-blue-100 hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className={`h-1.5 bg-gradient-to-r ${gradient}`} />
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${iconBg} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" strokeWidth={1.75} />
                    </div>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${tagColor}`}>
                      {tag}
                    </span>
                  </div>
                  <h2 className="text-xl font-extrabold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">{desc}</p>
                  <div className="space-y-2 mb-6">
                    {highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00C8D8] flex-shrink-0" />
                        <span className="text-xs font-medium text-gray-600">{h}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors group/link"
                  >
                    Learn more <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Strategic capabilities callout */}
        <section className="bg-gray-950 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3">Where We Focus</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
                High-Value Capabilities for Regulated Institutions
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Financial services and regulated industries demand more than generic analytics.
                These are the capabilities we have built specifically for that context.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {strategicCapabilities.map(({ Icon, color, bg, title, body }) => (
                <div key={title} className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-cyan-800 transition-colors">
                  <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center mb-5`}>
                    <Icon className={`w-6 h-6 ${color}`} strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-10 md:p-14 text-white text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8 text-white" strokeWidth={1.75} />
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
                Ready to build on governed intelligence?
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Talk to our data and AI specialists to discuss your compliance reporting,
                risk modelling, or automation requirements.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact-us"
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
