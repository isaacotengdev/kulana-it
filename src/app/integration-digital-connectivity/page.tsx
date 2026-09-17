import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import HeroCanvas from "@/components/HeroCanvas";
import {
  Network, Plug, Layers, Cpu,
  ArrowRight, CheckCircle2, Rocket, ShieldCheck,
  Zap, Building2, Globe, GitBranch, Search, Settings, TrendingUp,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integration & Digital Connectivity | Kulana IT Solutions",
  description:
    "API-first integration architecture that accelerates time-to-market and de-risks legacy connectivity — so transformation programmes move at business speed, not plumbing speed.",
};

const subServices = [
  {
    Icon: Plug,
    title: "Integration",
    href: "/digital-integrations-api-management",
    tag: "API & Middleware",
    gradient: "from-cyan-500 to-blue-600",
    iconBg: "bg-cyan-600",
    tagColor: "bg-cyan-50 text-cyan-700 border-cyan-100",
    desc: "Replace fragile point-to-point connections with a governed integration layer. We implement WSO2 and leading middleware platforms so every system in your estate connects through a managed, versioned, documented API fabric — not a web of undocumented custom code.",
    highlights: ["API Management & Gateway", "Middleware & ESB", "Event Streaming", "Legacy System Wrapping"],
  },
  {
    Icon: Layers,
    title: "Enterprise Architecture",
    href: "/enterprise-architecture",
    tag: "Architecture",
    gradient: "from-teal-500 to-teal-700",
    iconBg: "bg-teal-600",
    tagColor: "bg-teal-50 text-teal-700 border-teal-100",
    desc: "Integration without architecture is just more complexity. Our enterprise architects define the blueprints, API standards, and governance frameworks that ensure your integration investments compound rather than accumulate technical debt.",
    highlights: ["TOGAF-aligned Frameworks", "API Standards & Governance", "Technology Roadmapping", "Cloud and Hybrid Strategy"],
  },
  {
    Icon: Cpu,
    title: "AI-Native Product Engineering",
    href: "/ai-native-product-engineering",
    tag: "AI Engineering",
    gradient: "from-blue-500 to-teal-600",
    iconBg: "bg-blue-600",
    tagColor: "bg-blue-50 text-blue-700 border-blue-100",
    desc: "A well-integrated enterprise unlocks the next layer: AI-native products that compose your existing capabilities through APIs rather than rebuilding them. We engineer agentic systems, LLM orchestration, and intelligent automation directly on top of your integration layer.",
    highlights: ["LLM Orchestration & Agents", "RAG and Knowledge Systems", "MLOps and Model Evaluation", "Enterprise AI Integration"],
  },
];

const strategicThemes = [
  {
    Icon: Rocket,
    color: "text-cyan-600",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
    title: "Speed-to-Market",
    body: "When integration is managed infrastructure, new digital products compose existing capabilities through APIs instead of re-plumbing every connection. Time-to-integrate drops from months to weeks — and the business gets to market faster.",
  },
  {
    Icon: ShieldCheck,
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
    title: "De-Risking Legacy Integration",
    body: "Core banking systems, ERPs, and legacy platforms are too valuable to replace and too fragile to touch directly. An API layer wraps them in a governed interface — exposing their data and functions to modern systems without modifying core code.",
  },
  {
    Icon: TrendingUp,
    color: "text-teal-600",
    bg: "bg-teal-50",
    border: "border-teal-100",
    title: "Transformation Velocity",
    body: "Organisations with API-first architectures respond to market change faster. New partners, channels, and digital products connect to an existing API fabric rather than triggering a new integration project — compressing the time between decision and deployment.",
  },
];

const scenarios = [
  {
    Icon: Building2,
    label: "Unlocking Legacy Core Banking",
    desc: "Wrap a legacy core banking system with a managed API layer so mobile apps, fintech partners, and new digital products can consume its data and functions — without touching the core or risking a migration",
  },
  {
    Icon: Globe,
    label: "Open Banking and Ecosystem Integration",
    desc: "Connect to third-party fintech providers, payment rails, credit bureaus, and regulatory reporting platforms through a single API gateway with standardised authentication, rate limiting, and audit trails",
  },
  {
    Icon: GitBranch,
    label: "ERP and CRM Unification",
    desc: "Synchronise financial, operational, and customer data across ERP and CRM platforms in real time — eliminating the manual reconciliation and data lag that slows reporting and decision-making",
  },
  {
    Icon: Zap,
    label: "Digital Product Launch in Weeks",
    desc: "Accelerate new digital channel launches by composing existing back-end capabilities through APIs — customer onboarding, account enquiry, transaction processing — rather than rebuilding each integration from scratch",
  },
  {
    Icon: Cpu,
    label: "AI Products Built on Your Integration Layer",
    desc: "Once your systems are API-connected, AI capabilities can be layered on top — document processing, intelligent search, automated reporting — using your own data without rebuilding integration plumbing for each use case",
  },
  {
    Icon: Settings,
    label: "Integration Governance and Rationalisation",
    desc: "Audit and rationalise an estate of undocumented point-to-point integrations, replacing them with a governed API fabric that is versioned, monitored, and owned — reducing operational risk and change management overhead",
  },
];

export default function IntegrationDigitalConnectivityPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">

        {/* Hero */}
        <section className="gradient-hero relative overflow-hidden py-28 text-white">
          <HeroCanvas variant="integration-digital" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-cyan-300 mb-5">
              <Network className="w-4 h-4" /> Our Services
            </span>
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Integration and Digital Connectivity
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
              Transformation programmes stall when integration becomes the bottleneck.
              We build the API-first connectivity layer that lets your systems, partners, and
              digital products move at business speed — not plumbing speed.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["API-First Architecture", "Legacy Connectivity", "WSO2", "Enterprise Architecture"].map((tag) => (
                <span key={tag} className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-white">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-300" /> {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Strategic themes strip */}
        <section className="bg-white border-b border-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6">
              {strategicThemes.map(({ Icon, color, bg, border, title, body }) => (
                <div key={title} className={`flex gap-4 p-6 rounded-2xl border ${border} ${bg}`}>
                  <div className={`w-11 h-11 rounded-xl bg-white border ${border} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                    <Icon className={`w-5 h-5 ${color}`} strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-1.5">{title}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">The Problem We Solve</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6">
                Integration is where transformation programmes fail
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Most enterprises reach a point where their technology estate works against
                them. Core banking, ERP, CRM, and operational systems each hold critical
                data — but none of them talk to each other without custom, undocumented
                point-to-point connections. Every new initiative triggers another integration
                project. The backlog grows faster than the business can ship.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                API-first connectivity changes this equation. A managed integration layer
                transforms your existing systems into composable services — wrapped in
                governed, versioned APIs that new products, partners, and AI capabilities
                can connect to without re-plumbing every time. Transformation then moves at
                the speed of business logic, not integration engineering.
              </p>
              <div className="flex flex-wrap gap-3">
                {["WSO2", "REST & GraphQL", "Event-Driven", "TOGAF"].map((tag) => (
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
                  { Icon: Search,   step: "01", title: "Integration Audit",    desc: "Map your current integration estate — every system, connection, and data flow — to identify fragility, duplication, and the highest-priority gaps." },
                  { Icon: Layers,   step: "02", title: "Architecture Design",   desc: "Define the target integration architecture: API gateway strategy, event streaming approach, data ownership, and governance standards." },
                  { Icon: Plug,     step: "03", title: "Platform Deployment",   desc: "Implement and configure the integration platform — migrating critical integrations from point-to-point to managed, monitored API connections." },
                  { Icon: TrendingUp, step: "04", title: "Enable and Scale",   desc: "Onboard internal teams and external partners to the API fabric, and iterate as new use cases — including AI products — are built on top." },
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

        {/* Scenarios — dark section */}
        <section className="bg-gray-950 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3">In Practice</p>
              <h2 className="text-3xl font-extrabold text-white mb-3">What Integration Enables</h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                API-first connectivity is not a technical end in itself — it is what unlocks these outcomes.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {scenarios.map(({ Icon: Ic, label, desc }) => (
                <div key={label} className="group flex gap-4 p-6 rounded-2xl border border-gray-800 bg-gray-900 hover:border-cyan-800/50 hover:bg-gray-800 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-600/40 transition-colors">
                    <Ic className="w-5 h-5 text-cyan-400" strokeWidth={1.75} />
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

        {/* Sub-services */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">What We Deliver</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              Three Disciplines. One Connected Enterprise.
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Integration, architecture, and AI engineering work together — each layer enabling
              the next, from connectivity foundation through to intelligent product capabilities.
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
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#03B2EE] flex-shrink-0" />
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

        {/* CTA */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-10 md:p-14 text-white text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Network className="w-8 h-8 text-white" strokeWidth={1.75} />
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
                Stop letting integration slow you down
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Talk to our integration architects and discover how an API-first connectivity
                layer can accelerate your transformation — and de-risk the legacy systems
                that are holding it back.
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
