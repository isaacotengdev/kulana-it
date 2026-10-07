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

const MF = "var(--font-manrope), sans-serif";

export default function EnterpriseArchitecturePage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <section className="gradient-hero relative overflow-hidden flex items-center text-white" style={{ height: "100vh", paddingTop: "5rem" }}>
          <HeroCanvas variant="enterprise-arch" />
          <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
            <Link href="/contact-us" className="inline-flex items-center gap-2 px-8 py-4 bg-[#00D4EE] text-[#040d28] font-semibold rounded-md transition-all shadow-lg hover:bg-[#00BCDA] hover:-translate-y-0.5">
              Request a Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Capability strip */}
        <section className="bg-white border-b border-gray-100 py-10">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <section className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
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
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs tracking-[0.18em] uppercase mb-8" style={{ fontFamily: MF, fontWeight: 700, color: "#200044" }}>FAQ</p>
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-snug" style={{ fontFamily: MF }}>
                Your questions<br />answered
              </h2>
              <p className="text-gray-600 leading-relaxed lg:pt-2" style={{ fontFamily: MF }}>
                Everything you need to know about our enterprise architecture practice.
              </p>
            </div>
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
        </section>

        {/* CTA */}
        <section style={{ background: "#57D9D4" }}>
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-20">
              <h2
                className="text-3xl lg:text-4xl font-extrabold leading-tight lg:w-[40%] flex-shrink-0"
                style={{ fontFamily: MF, color: "#200044" }}
              >
                Ready to architect your digital future?
              </h2>
              <div className="flex-1">
                <p className="text-sm lg:text-base mb-6 leading-relaxed" style={{ fontFamily: MF, color: "#200044" }}>
                  Speak to our enterprise architects and start building a coherent technology landscape.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-md transition-all hover:opacity-90"
                    style={{ fontFamily: MF, background: "#200044", color: "#ffffff" }}
                  >
                    Request a Consultation <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-md border transition-all hover:bg-white/20"
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
