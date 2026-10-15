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

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden">
          <Image
            src="/images/integration_digital_connectivity/Hero image_Enterprise Architecture_2560×1440px.webp"
            alt="Enterprise Architecture"
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
            className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8"
            style={{ paddingTop: "calc(80px + clamp(32px, 6vw, 90px))", paddingBottom: "clamp(40px, 6vw, 90px)" }}
          >
            <div>
              <p className="inline-block tracking-normal uppercase mb-6 select-none" style={{ fontFamily: MF, fontWeight: 600, color: "#57D9D4", fontSize: "clamp(13px, 1.2vw, 18px)" }}>
                Integration &amp; Digital Connectivity
              </p>
              <h1
                className="text-white uppercase leading-tight select-none"
                style={{ fontFamily: MF, fontWeight: 500, fontSize: "clamp(32px, 4vw, 53px)" }}
              >
                Enterprise<br />Architecture
              </h1>
            </div>
            <div style={{ marginTop: "clamp(40px, 6vw, 90px)" }}>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-md transition-all shadow-lg hover:-translate-y-0.5"
                style={{ fontFamily: MF, fontWeight: 600, background: "#57D9D4", color: "#040d28", fontSize: "13px" }}
              >
                Request a Consultation <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Overview ─────────────────────────────────────────────────── */}
        <section className="bg-white py-10 lg:py-12">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Label + black rule */}
            <div className="mb-6">
              <span className="tracking-normal uppercase" style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "clamp(13px, 1vw, 14px)" }}>
                Overview
              </span>
              <div className="w-full h-px mt-3" style={{ background: "#000000" }} />
            </div>

            {/* Heading */}
            <h2 className="leading-tight mb-6" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(18px, 1.8vw, 26px)" }}>
              Build your technology on solid foundations
            </h2>

            {/* 2-col: description left, tags right */}
            <div className="grid lg:grid-cols-[3fr_2fr] gap-8 items-start">
              <div>
                <p className="mb-8" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1.2vw, 18px)", lineHeight: "1.4" }}>
                  Without deliberate architecture, technology landscapes grow organically into fragmented, expensive, and hard-to-change systems. Enterprise architecture provides the structure — the blueprints, the standards, and the governance — that keeps your landscape aligned to business intent as you grow and change.
                </p>
                <p style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1.2vw, 18px)", lineHeight: "1.4" }}>
                  Kulana&apos;s enterprise architects work at every level — from multi-year strategic roadmaps to hands-on solution designs — ensuring that every technology decision is consistent, deliberate, and traceable back to business value.
                </p>
              </div>
              <div className="flex flex-col gap-4 items-end">
                {["TOGAF", "ArchiMate", "Cloud Strategy", "Architecture Governance"].map((tag) => (
                  <div key={tag} className="flex items-center justify-center py-4 rounded-lg text-center"
                    style={{ border: "1.5px solid #57D9D4", fontFamily: MF, fontWeight: 700, color: "#200044", fontSize: "clamp(13px, 1vw, 14px)", maxWidth: "340px", width: "100%" }}>
                    {tag}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ── How to Get Started ───────────────────────────────────────── */}
        <section style={{ background: "#200044" }} className="py-10 lg:py-12">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Label + white rule */}
            <div className="mb-8">
              <span className="tracking-normal uppercase" style={{ fontFamily: MF, fontWeight: 600, color: "#ffffff", fontSize: "clamp(13px, 1vw, 14px)" }}>
                How to Get Started
              </span>
              <div className="w-full h-px mt-3" style={{ background: "#ffffff" }} />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                { step: "01", title: "Discover",  desc: "Map your current state — applications, integrations, data flows, and technology platforms across the landscape." },
                { step: "02", title: "Design",    desc: "Define your target architecture and the principles, patterns, and standards that guide decisions going forward." },
                { step: "03", title: "Govern",    desc: "Establish review processes and architecture boards to keep implementations aligned to the agreed design." },
                { step: "04", title: "Evolve",    desc: "Continuously update roadmaps and designs as business priorities, technology, and the competitive landscape evolve." },
              ].map(({ step, title, desc }) => (
                <div key={step}>
                  <p className="leading-none mb-4" style={{ fontFamily: MF, fontWeight: 400, color: "#a198af", fontSize: "clamp(24px, 2.85vw, 41px)" }}>{step}</p>
                  <p className="mb-4" style={{ fontFamily: MF, fontWeight: 400, color: "#57D9D4", fontSize: "clamp(18px, 1.8vw, 26px)" }}>{title}</p>
                  <p style={{ fontFamily: MF, fontWeight: 400, color: "#ffffff", fontSize: "clamp(13px, 1vw, 14px)", lineHeight: "1.5" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Applications ─────────────────────────────────────────────── */}
        <section className="bg-white py-10 lg:py-12">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Label + black rule */}
            <div className="mb-6">
              <span className="tracking-normal uppercase" style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "clamp(13px, 1vw, 14px)" }}>
                Applications
              </span>
              <div className="w-full h-px mt-3" style={{ background: "#000000" }} />
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-start mb-8">
              <h2 className="leading-tight" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(18px, 1.8vw, 26px)" }}>
                Real-world<br />use cases
              </h2>
              <p className="lg:pt-2" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1.2vw, 18px)", lineHeight: "1.4" }}>
                Enterprise architecture creates value across every stage of an organisation&apos;s digital evolution.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { label: "Cloud Migration Strategy",         desc: "Defining the workload placement, connectivity, and operating model for a cloud-first transformation." },
                { label: "Legacy Modernisation",             desc: "Sequenced decommissioning of legacy systems with minimal disruption to operations." },
                { label: "Multi-Year Technology Roadmap",    desc: "Aligning capital investment in technology to business growth plans across a 3-5 year horizon." },
                { label: "Architecture Governance Setup",    desc: "Establishing ARBs, design standards, and pattern libraries for a growing engineering organisation." },
                { label: "M&A Integration Architecture",     desc: "Planning the integration of acquired company technology stacks into the parent organisation." },
                { label: "Portfolio Rationalisation",        desc: "Identifying duplication and consolidating vendor relationships across a complex application landscape." },
              ].map(({ label, desc }) => (
                <div key={label} className="bg-white border border-gray-100 rounded-xl p-6">
                  <p className="mb-3" style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "clamp(14px, 1.45vw, 21px)" }}>{label}</p>
                  <p style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1vw, 14px)", lineHeight: "1.5" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What We Deliver ──────────────────────────────────────────── */}
        <section style={{ background: "#f5f5f5" }} className="py-10 lg:py-12">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Label + black rule */}
            <div className="mb-6">
              <span className="tracking-normal uppercase" style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "clamp(13px, 1vw, 14px)" }}>
                What We Deliver
              </span>
              <div className="w-full h-px mt-3" style={{ background: "#000000" }} />
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-start mb-8">
              <h2 className="leading-tight" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(18px, 1.8vw, 26px)" }}>
                Architecture<br />services
              </h2>
              <p className="lg:pt-2" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1.2vw, 18px)", lineHeight: "1.4" }}>
                From strategic roadmaps to hands-on solution designs, we work across every layer of your technology landscape.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { label: "TOGAF-Aligned Architecture",   desc: "Enterprise architecture practice built on TOGAF and other leading frameworks for structured, consistent delivery." },
                { label: "Technology Roadmapping",       desc: "Multi-year technology roadmaps that align investments to business strategy and manage vendor lifecycle." },
                { label: "Solution Architecture Design", desc: "Detailed solution designs for new systems, integrations, and migrations — built to last and built to scale." },
                { label: "Architecture Governance",      desc: "Governance frameworks, architecture review boards, and standards libraries that keep your landscape coherent." },
                { label: "Cloud and Hybrid Strategy",    desc: "Define your cloud target state and migration pathway — cloud-native, hybrid, or multi-cloud." },
                { label: "Architecture Assessments",     desc: "Independent review of your current architecture to identify risks, technical debt, and improvement opportunities." },
              ].map(({ label, desc }) => (
                <div key={label} className="bg-white border border-gray-100 rounded-xl p-6">
                  <p className="mb-3" style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "clamp(14px, 1.45vw, 21px)" }}>{label}</p>
                  <p style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1vw, 14px)", lineHeight: "1.5" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why It Matters ───────────────────────────────────────────── */}
        <section className="bg-white py-10 lg:py-12">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Label + black rule */}
            <div className="mb-6">
              <span className="tracking-normal uppercase" style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "clamp(13px, 1vw, 14px)" }}>
                Why It Matters
              </span>
              <div className="w-full h-px mt-3" style={{ background: "#000000" }} />
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-start mb-8">
              <h2 className="leading-tight" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(18px, 1.8vw, 26px)" }}>
                What deliberate<br />architecture delivers
              </h2>
              <p className="lg:pt-2" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1.2vw, 18px)", lineHeight: "1.4" }}>
                Deliberate architecture delivers measurable improvements to delivery speed, cost control, and strategic agility.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "Strategic Alignment",  desc: "Technology investments that directly support and enable business strategy — not the other way around." },
                { title: "Reduced Complexity",   desc: "A coherent, governed landscape that eliminates duplication and simplifies integration." },
                { title: "Faster Delivery",      desc: "Reusable patterns, clear standards, and pre-approved designs that accelerate project delivery." },
                { title: "Lower Risk",           desc: "Architecture governance that prevents rogue implementations and costly technical debt from accumulating." },
              ].map(({ title, desc }) => (
                <div key={title} className="rounded-xl p-6" style={{ border: "1.5px solid #57D9D4", background: "#f1ffff" }}>
                  <p className="mb-3" style={{ fontFamily: MF, fontWeight: 400, color: "#57D9D4", fontSize: "clamp(14px, 1.45vw, 21px)" }}>{title}</p>
                  <p style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1vw, 14px)", lineHeight: "1.5" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
        <section className="bg-white py-10 lg:py-12">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Label + black rule */}
            <div className="mb-8">
              <span className="tracking-normal uppercase" style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "clamp(13px, 1vw, 14px)" }}>FAQ</span>
              <div className="w-full h-px mt-3" style={{ background: "#000000" }} />
            </div>

            {/* Row 1: heading left | description right */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 mb-6">
              <h2 className="leading-tight" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(18px, 1.8vw, 26px)" }}>
                Your questions<br />answered
              </h2>
              <p style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1.2vw, 18px)", lineHeight: "1.4" }}>
                Everything you need to know about our enterprise architecture practice.
              </p>
            </div>

            {/* Row 2: image left | accordion right */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
              <div className="relative w-full rounded-2xl overflow-hidden lg:mt-14" style={{ aspectRatio: "4/5", maxWidth: "320px" }}>
                <Image src="/images/integration_digital_connectivity/Enterprise Architecture.webp" alt="Enterprise Architecture" fill className="object-cover object-center" sizes="320px" />
              </div>

              <div className="divide-y" style={{ borderColor: "#e5e7eb" }}>
                {faqs.map(({ q, a }) => (
                  <details key={q} className="group py-5">
                    <summary className="flex items-center justify-between gap-6 cursor-pointer list-none">
                      <span style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "clamp(13px, 1vw, 14px)", lineHeight: "1.5" }}>{q}</span>
                      <span className="flex-shrink-0 leading-none select-none" style={{ color: "#000000", fontSize: "clamp(13px, 1.2vw, 18px)" }}>
                        <span className="group-open:hidden">+</span>
                        <span className="hidden group-open:inline">−</span>
                      </span>
                    </summary>
                    <p className="mt-4" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1vw, 14px)", lineHeight: "1.5" }}>{a}</p>
                  </details>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section style={{ background: "#57D9D4" }}>
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-9 lg:py-10">
            <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-8">
              <h2
                className="leading-tight lg:w-[45%] flex-shrink-0"
                style={{ fontFamily: MF, fontWeight: 700, color: "#200044", fontSize: "clamp(20px, 2.1vw, 31px)" }}
              >
                Ready to architect<br />your digital future?
              </h2>
              <div className="flex-1">
                <p className="mb-8" style={{ fontFamily: MF, fontWeight: 400, color: "#200044", fontSize: "clamp(13px, 1vw, 14px)", lineHeight: "1.5" }}>
                  Speak to our enterprise architects and start building a coherent technology landscape.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md transition-all hover:opacity-90"
                    style={{ fontFamily: MF, fontWeight: 600, background: "#200044", color: "#ffffff", fontSize: "13px" }}
                  >
                    Request a Consultation <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md border transition-all hover:bg-white/20"
                    style={{ fontFamily: MF, fontWeight: 600, color: "#200044", borderColor: "#200044", fontSize: "13px" }}
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
