import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

const MF = "var(--font-manrope), sans-serif";

export const metadata: Metadata = {
  title: "Enterprise Architecture | Kulana IT Solutions",
  description:
    "Design coherent technology landscapes aligned to your business strategy — TOGAF frameworks, technology roadmapping, architecture governance, and cloud strategy.",
};

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
      <main>

        {/* Hero — image to be added */}
        <section className="relative overflow-hidden flex flex-col" style={{ height: "100vh", background: "#040d28" }}>
          <div
            className="relative z-10 flex flex-col w-full h-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8"
            style={{ paddingTop: "calc(5rem + 28vh)", paddingBottom: "5rem" }}
          >
            <div>
              <p className="text-xs tracking-[0.22em] uppercase mb-4" style={{ fontFamily: MF, fontWeight: 600, color: "#57D9D4" }}>
                Integration &amp; Digital Connectivity
              </p>
              <h1
                className="text-5xl sm:text-6xl lg:text-8xl font-bold uppercase text-white leading-[1.0]"
                style={{ fontFamily: MF }}
              >
                Enterprise<br />Architecture
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
              Build your technology on solid foundations
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4" style={{ fontFamily: MF }}>
              Without deliberate architecture, technology landscapes grow organically into fragmented, expensive, and hard-to-change systems. Enterprise architecture provides the structure — the blueprints, the standards, and the governance — that keeps your landscape aligned to business intent as you grow and change.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10" style={{ fontFamily: MF }}>
              Kulana&apos;s enterprise architects work at every level — from multi-year strategic roadmaps to hands-on solution designs — ensuring that every technology decision is consistent, deliberate, and traceable back to business value.
            </p>
            <div className="flex flex-wrap lg:flex-nowrap gap-3">
              {["TOGAF", "ArchiMate", "Cloud Strategy", "Architecture Governance"].map((tag) => (
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
                { step: "01", title: "Discover",  desc: "Map your current state — applications, integrations, data flows, and technology platforms across the landscape." },
                { step: "02", title: "Design",    desc: "Define your target architecture and the principles, patterns, and standards that guide decisions going forward." },
                { step: "03", title: "Govern",    desc: "Establish review processes and architecture boards to keep implementations aligned to the agreed design." },
                { step: "04", title: "Evolve",    desc: "Continuously update roadmaps and designs as business priorities, technology, and the competitive landscape evolve." },
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
                Enterprise architecture creates value across every stage of an organisation&apos;s digital evolution.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { label: "Cloud Migration Strategy",         desc: "Defining the workload placement, connectivity, and operating model for a cloud-first transformation." },
                { label: "Legacy Modernisation",             desc: "Sequenced decommissioning of legacy systems with minimal disruption to operations." },
                { label: "Multi-Year Technology Roadmap",    desc: "Aligning capital investment in technology to business growth plans across a 3-5 year horizon." },
                { label: "Architecture Governance Setup",    desc: "Establishing ARBs, design standards, and pattern libraries for a growing engineering organisation." },
                { label: "M&A Integration Architecture",     desc: "Planning the integration of acquired company technology stacks into the parent organisation." },
                { label: "Portfolio Rationalisation",        desc: "Identifying duplication and consolidating vendor relationships across a complex application landscape." },
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
                Architecture services
              </h2>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: MF }}>
                From strategic roadmaps to hands-on solution designs, we work across every layer of your technology landscape.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { label: "TOGAF-Aligned Architecture",   desc: "Enterprise architecture practice built on TOGAF and other leading frameworks for structured, consistent delivery." },
                { label: "Technology Roadmapping",       desc: "Multi-year technology roadmaps that align investments to business strategy and manage vendor lifecycle." },
                { label: "Solution Architecture Design", desc: "Detailed solution designs for new systems, integrations, and migrations — built to last and built to scale." },
                { label: "Architecture Governance",      desc: "Governance frameworks, architecture review boards, and standards libraries that keep your landscape coherent." },
                { label: "Cloud and Hybrid Strategy",    desc: "Define your cloud target state and migration pathway — cloud-native, hybrid, or multi-cloud." },
                { label: "Architecture Assessments",     desc: "Independent review of your current architecture to identify risks, technical debt, and improvement opportunities." },
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
                What deliberate architecture delivers
              </h2>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: MF }}>
                Deliberate architecture delivers measurable improvements to delivery speed, cost control, and strategic agility.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Strategic Alignment",  desc: "Technology investments that directly support and enable business strategy — not the other way around." },
                { title: "Reduced Complexity",   desc: "A coherent, governed landscape that eliminates duplication and simplifies integration." },
                { title: "Faster Delivery",      desc: "Reusable patterns, clear standards, and pre-approved designs that accelerate project delivery." },
                { title: "Lower Risk",           desc: "Architecture governance that prevents rogue implementations and costly technical debt from accumulating." },
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
                  <Image src="/images/integration_digital_connectivity/Enterprise Architecture.webp" alt="Enterprise Architecture" fill className="object-cover object-center" sizes="320px" />
                </div>
              </div>
              <div>
                <p className="text-gray-600 leading-relaxed mb-10" style={{ fontFamily: MF }}>
                  Everything you need to know about our enterprise architecture practice.
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
                Ready to architect your digital future?
              </h2>
              <div className="flex-1">
                <p className="text-base leading-relaxed mb-8" style={{ fontFamily: MF, color: "#200044", opacity: 0.85 }}>
                  Speak to our enterprise architects and start building a coherent technology landscape.
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
