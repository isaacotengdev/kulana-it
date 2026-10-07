import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import {
  Network, Plug, Layers, Cpu,
  ArrowRight, CheckCircle2,
  Zap, Building2, Globe, GitBranch, Settings, Search,
} from "lucide-react";

const MF = "var(--font-manrope), sans-serif";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integration & Digital Connectivity | Kulana IT Solutions",
  description:
    "API-first integration architecture that accelerates time-to-market and de-risks legacy connectivity — so transformation programmes move at business speed, not plumbing speed.",
};



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
      <main>

        {/* Hero */}
        <section className="relative overflow-hidden" style={{ height: "100vh" }}>
          <Image
            src="/images/integration_digital_connectivity/Hero image_Integration and Digital Connectivity_2560×1440px.webp"
            alt="Integration and Digital Connectivity"
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
            className="relative z-10 flex flex-col w-full h-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8"
            style={{ paddingTop: "calc(5rem + 28vh)", paddingBottom: "5rem" }}
          >
            <div>
              <p
                className="text-xs tracking-[0.22em] uppercase mb-4"
                style={{ fontFamily: MF, fontWeight: 600, color: "#57D9D4" }}
              >
                Integration &amp; Digital Connectivity
              </p>
              <h1
                className="text-5xl sm:text-6xl lg:text-8xl font-bold uppercase text-white leading-[1.0]"
                style={{ fontFamily: MF }}
              >
                Integration &amp;<br />Digital Connectivity
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
            <p className="text-xs tracking-[0.18em] uppercase mb-10" style={{ fontFamily: MF, fontWeight: 700, color: "#200044" }}>The Problem We Solve</p>
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-10">
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-snug" style={{ fontFamily: MF }}>
                Integration is where transformation programmes fail
              </h2>
              <div>
                <p className="text-gray-600 leading-relaxed mb-4" style={{ fontFamily: MF }}>
                  Most enterprises reach a point where their technology estate works against them. Core banking, ERP, CRM, and operational systems each hold critical data — but none of them talk to each other without custom, undocumented point-to-point connections. Every new initiative triggers another integration project. The backlog grows faster than the business can ship.
                </p>
                <p className="text-gray-600 leading-relaxed" style={{ fontFamily: MF }}>
                  API-first connectivity changes this equation. A managed integration layer transforms your existing systems into composable services — wrapped in governed, versioned APIs that new products, partners, and AI capabilities can connect to without re-plumbing every time. Transformation then moves at the speed of business logic, not integration engineering.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap lg:flex-nowrap gap-3">
              {["WSO2", "REST & GraphQL", "Event-Driven", "TOGAF"].map((tag) => (
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
                { step: "01", title: "Integration Audit",    desc: "Map your current integration estate — every system, connection, and data flow — to identify fragility, duplication, and the highest-priority gaps." },
                { step: "02", title: "Architecture Design",  desc: "Define the target integration architecture: API gateway strategy, event streaming approach, data ownership, and governance standards." },
                { step: "03", title: "Platform Deployment",  desc: "Implement and configure the integration platform — migrating critical integrations from point-to-point to managed, monitored API connections." },
                { step: "04", title: "Enable and Scale",     desc: "Onboard internal teams and external partners to the API fabric, and iterate as new use cases — including AI products — are built on top." },
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

        {/* Scenarios — dark section */}
        <section className="bg-gray-950 py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* What We Deliver */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs tracking-[0.18em] uppercase mb-10" style={{ fontFamily: MF, fontWeight: 700, color: "#200044" }}>What We Deliver</p>
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-snug" style={{ fontFamily: MF }}>
                Three Disciplines. One Connected Enterprise.
              </h2>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: MF }}>
                Integration, architecture, and AI engineering work together — each layer enabling the next, from connectivity foundation through to intelligent product capabilities.
              </p>
            </div>
            <div className="space-y-20">
              {[
                {
                  num: "01", tag: "API & MIDDLEWARE", title: "Integration",
                  href: "/digital-integrations-api-management",
                  desc: "Replace fragile point-to-point connections with a governed integration layer. We implement WSO2 and leading middleware platforms so every system in your estate connects through a managed, versioned, documented API fabric — not a web of undocumented custom code.",
                  highlights: ["API Management & Gateway", "Middleware & ESB", "Event Streaming", "Legacy System Wrapping"],
                  img: "/images/integration_digital_connectivity/Integration.webp",
                },
                {
                  num: "02", tag: "ARCHITECTURE", title: "Enterprise Architecture",
                  href: "/enterprise-architecture",
                  desc: "Integration without architecture is just more complexity. Our enterprise architects define the blueprints, API standards, and governance frameworks that ensure your integration investments compound rather than accumulate technical debt.",
                  highlights: ["TOGAF-aligned Frameworks", "API Standards & Governance", "Technology Roadmapping", "Cloud and Hybrid Strategy"],
                  img: "/images/integration_digital_connectivity/Enterprise Architecture.webp",
                },
                {
                  num: "03", tag: "AI ENGINEERING", title: "AI-Native Product Engineering",
                  href: "/ai-native-product-engineering",
                  desc: "A well-integrated enterprise unlocks the next layer: AI-native products that compose your existing capabilities through APIs rather than rebuilding them. We engineer agentic systems, LLM orchestration, and intelligent automation directly on top of your integration layer.",
                  highlights: ["LLM Orchestration & Agents", "RAG and Knowledge Systems", "MLOps and Model Evaluation", "Enterprise AI Integration"],
                  img: "/images/integration_digital_connectivity/AI-Native Product Engineering.webp",
                },
              ].map(({ num, tag, title, href, desc, highlights, img }) => (
                <div key={title} className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <p className="text-xs tracking-[0.15em] uppercase font-bold mb-4" style={{ fontFamily: MF, color: "#57D9D4" }}>{num} — {tag}</p>
                    <h3 className="text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: MF, color: "#57D9D4" }}>{title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6" style={{ fontFamily: MF }}>{desc}</p>
                    <div className="space-y-2 mb-8">
                      {highlights.map((h) => (
                        <div key={h} className="flex items-center gap-2">
                          <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#57D9D4" }} />
                          <span className="text-sm text-gray-600" style={{ fontFamily: MF }}>{h}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={href}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-md transition-all hover:opacity-90"
                      style={{ fontFamily: MF, background: "#57D9D4", color: "#040d28" }}
                    >
                      Learn more <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden">
                    <Image src={img} alt={title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                  </div>
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
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#00D4EE] text-[#040d28] font-semibold rounded-md transition-all shadow-lg hover:bg-[#00BCDA] hover:-translate-y-0.5"
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
