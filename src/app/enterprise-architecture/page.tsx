import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import HeroCanvas from "@/components/HeroCanvas";
import {
  Layers, Map, GitBranch, Settings, Cloud, BarChart3,
  ArrowRight, CheckCircle2, Search, TrendingUp, Zap, Shield,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Architecture | Kulana IT Solutions",
  description:
    "Design coherent technology landscapes aligned to your business strategy — TOGAF frameworks, technology roadmapping, architecture governance, and cloud strategy.",
};

const capabilities = [
  { Icon: Map,       label: "Technology Roadmapping",   color: "text-teal-600",    bg: "bg-teal-50",    border: "border-teal-100"   },
  { Icon: Layers,    label: "Architecture Frameworks",  color: "text-blue-600",    bg: "bg-blue-50",    border: "border-blue-100"   },
  { Icon: GitBranch, label: "Solution Design",          color: "text-blue-600",    bg: "bg-blue-50",    border: "border-blue-100" },
  { Icon: Settings,  label: "Governance and Standards",  color: "text-teal-600",    bg: "bg-teal-50",    border: "border-teal-100" },
  { Icon: Cloud,     label: "Cloud Strategy",           color: "text-cyan-600",    bg: "bg-cyan-50",    border: "border-cyan-100" },
  { Icon: BarChart3, label: "Architecture Reviews",     color: "text-blue-600",    bg: "bg-blue-50",    border: "border-blue-100" },
];

const features = [
  { Icon: Layers,    label: "TOGAF-Aligned Architecture",   desc: "Enterprise architecture practice built on TOGAF and other leading frameworks for structured, consistent delivery." },
  { Icon: Map,       label: "Technology Roadmapping",       desc: "Multi-year technology roadmaps that align investments to business strategy and manage vendor lifecycle." },
  { Icon: GitBranch, label: "Solution Architecture Design", desc: "Detailed solution designs for new systems, integrations, and migrations — built to last and built to scale." },
  { Icon: Settings,  label: "Architecture Governance",      desc: "Governance frameworks, architecture review boards, and standards libraries that keep your landscape coherent." },
  { Icon: Cloud,     label: "Cloud and Hybrid Strategy",    desc: "Define your cloud target state and migration pathway — cloud-native, hybrid, or multi-cloud." },
  { Icon: BarChart3, label: "Architecture Assessments",     desc: "Independent review of your current architecture to identify risks, technical debt, and improvement opportunities." },
];

const benefits = [
  { Icon: TrendingUp, bg: "bg-blue-600",    title: "Strategic Alignment",    desc: "Technology investments that directly support and enable business strategy — not the other way around." },
  { Icon: Layers,     bg: "bg-teal-600",    title: "Reduced Complexity",     desc: "A coherent, governed landscape that eliminates duplication and simplifies integration." },
  { Icon: Zap,        bg: "bg-cyan-600",    title: "Faster Delivery",        desc: "Reusable patterns, clear standards, and pre-approved designs that accelerate project delivery." },
  { Icon: Shield,     bg: "bg-cyan-500",    title: "Lower Risk",             desc: "Architecture governance that prevents rogue implementations and costly technical debt from accumulating." },
];

const faqs = [
  {
    q: "What is enterprise architecture and why does it matter?",
    a: "Enterprise architecture (EA) is the discipline of designing and governing a coherent technology landscape that is aligned to business strategy. Without it, technology landscapes grow organically into fragmented, expensive systems that are hard to change. EA provides the blueprints, standards, and governance that keep your landscape intentional as you grow.",
  },
  {
    q: "What is TOGAF and do we need it?",
    a: "TOGAF (The Open Group Architecture Framework) is the world's most widely adopted enterprise architecture framework. It provides a structured approach to designing, planning, implementing, and governing your technology landscape. Whether you formally adopt TOGAF or use it as a reference, its principles help teams deliver architecture consistently.",
  },
  {
    q: "How does enterprise architecture support cloud migration?",
    a: "EA defines your target state architecture — which workloads move to cloud, which stay on-premise, and how they connect. Without this clarity, cloud migrations become expensive and disorganised. Our architects produce cloud strategy documents, workload assessments, and migration roadmaps that give your programme a clear direction.",
  },
  {
    q: "What is an architecture review board (ARB)?",
    a: "An ARB is a governance body that reviews proposed technology solutions against your architectural standards before they are approved for implementation. It prevents rogue implementations, enforces reuse of existing patterns, and maintains landscape coherence across multiple project teams.",
  },
  {
    q: "How do you handle technical debt as part of architecture?",
    a: "We identify and quantify technical debt during architecture assessments, then prioritise remediation based on business impact and risk. Our roadmaps include explicit technical debt reduction milestones alongside new capability delivery — so debt is managed intentionally, not ignored.",
  },
  {
    q: "Can you work with our existing architecture team?",
    a: "Yes. We frequently work alongside internal architecture teams — either augmenting capacity on specific programmes, providing independent review and challenge, or helping establish new architecture practices and governance frameworks where none exist.",
  },
  {
    q: "What deliverables does an enterprise architecture engagement produce?",
    a: "Typical deliverables include a current-state architecture assessment, target architecture design, technology roadmap, architecture principles and standards, solution architecture documents for specific projects, and governance frameworks including ARB charters and decision logs.",
  },
];

export default function EnterpriseArchitecturePage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">

        {/* Hero */}
        <section className="gradient-hero relative overflow-hidden py-28 text-white">
          <HeroCanvas variant="enterprise-arch" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-cyan-300 mb-5">
              <Layers className="w-4 h-4" /> Integration and Digital Connectivity
            </span>
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">Enterprise Architecture</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
              Design a coherent technology landscape aligned to your business strategy —
              frameworks, roadmaps, and governance that guide your digital evolution.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {["TOGAF Aligned", "Cloud Strategy", "Architecture Governance", "Solution Design"].map((tag) => (
                <span key={tag} className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-white">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-300" /> {tag}
                </span>
              ))}
            </div>
            <Link href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:-translate-y-0.5">
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
                Build your technology on solid foundations
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Without deliberate architecture, technology landscapes grow organically into
                fragmented, expensive, and hard-to-change systems. Enterprise architecture
                provides the structure — the blueprints, the standards, and the governance — that
                keeps your landscape aligned to business intent as you grow and change.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Kulana&apos;s enterprise architects work at every level — from multi-year strategic
                roadmaps to hands-on solution designs — ensuring that every technology decision
                is consistent, deliberate, and traceable back to business value.
              </p>
              <div className="flex flex-wrap gap-3">
                {["TOGAF", "ArchiMate", "ITIL", "Cloud Native"].map((tag) => (
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
                <h3 className="text-xl font-bold text-gray-900">How to Get Started</h3>
              </div>
              <div className="space-y-5">
                {[
                  { Icon: Search,    step: "01", title: "Discover",  desc: "Map your current state — applications, integrations, data flows, and technology platforms." },
                  { Icon: Layers,    step: "02", title: "Design",    desc: "Define your target architecture and the principles, patterns, and standards that guide it." },
                  { Icon: Settings,  step: "03", title: "Govern",    desc: "Establish review processes and architecture boards to keep implementations aligned to the design." },
                  { Icon: TrendingUp,step: "04", title: "Evolve",    desc: "Continuously update roadmaps and designs as business priorities and technology evolve." },
                ].map(({ Icon: StepIcon, step, title, desc }) => (
                  <div key={step} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-sm">
                      <StepIcon className="w-4 h-4 text-white" strokeWidth={1.75} />
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

        {/* Dark section — real-world applications */}
        <section className="bg-gray-950 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3">Applications</p>
              <h2 className="text-3xl font-extrabold text-white mb-3">Real-World Use Cases</h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Enterprise architecture creates value across every stage of an organisation&apos;s digital evolution.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { Icon: Cloud,     label: "Cloud Migration Strategy",      desc: "Defining the workload placement, connectivity, and operating model for a cloud-first transformation" },
                { Icon: GitBranch, label: "Legacy Modernisation",          desc: "Sequenced decommissioning of legacy systems with minimal disruption to operations" },
                { Icon: Map,       label: "Multi-Year Technology Roadmap",  desc: "Aligning capital investment in technology to business growth plans across a 3-5 year horizon" },
                { Icon: Settings,  label: "Architecture Governance Setup",  desc: "Establishing ARBs, design standards, and pattern libraries for a growing engineering organisation" },
                { Icon: Layers,    label: "M and A Integration Architecture", desc: "Planning the integration of acquired company technology stacks into the parent organisation" },
                { Icon: BarChart3, label: "Technology Portfolio Rationalisation", desc: "Identifying duplication and consolidating vendor relationships across a complex application landscape" },
              ].map(({ Icon: Ic, label, desc }) => (
                <div key={label} className="group flex gap-4 p-6 rounded-2xl border border-gray-800 bg-gray-900 hover:border-blue-500/40 hover:bg-gray-800 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600/40 transition-colors">
                    <Ic className="w-5 h-5 text-blue-400" strokeWidth={1.75} />
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

        {/* Features */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">What We Deliver</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">Architecture Services</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                From strategic roadmaps to hands-on solution designs, we work across every layer of your technology landscape.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map(({ Icon, label, desc }, i) => (
                <div key={label} className="group flex gap-4 p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:border-blue-100 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <Icon className="w-5 h-5 text-white" strokeWidth={1.75} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">0{i + 1}</span>
                      <p className="font-bold text-gray-900">{label}</p>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
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
                Deliberate architecture delivers measurable improvements to delivery speed, cost control, and strategic agility.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map(({ Icon, bg, title, desc }) => (
                <div key={title} className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-100 hover:shadow-xl transition-all duration-300 overflow-hidden relative">
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
              Everything you need to know about our enterprise architecture practice.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group border border-gray-200 rounded-2xl overflow-hidden">
                <summary className="flex items-start justify-between gap-4 px-6 py-5 cursor-pointer list-none font-semibold text-gray-900 hover:bg-blue-50 transition-colors">
                  <span className="flex items-start gap-3">
                    <Layers className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" strokeWidth={1.75} />
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
                <Layers className="w-8 h-8 text-white" strokeWidth={1.75} />
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
                Ready to architect your digital future?
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Speak to our enterprise architects and start building a coherent technology landscape.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:-translate-y-0.5">
                  Request a Consultation <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact-us" className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all">
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
