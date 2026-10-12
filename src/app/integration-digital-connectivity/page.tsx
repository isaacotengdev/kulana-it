import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

const MF = "var(--font-manrope), sans-serif";

export const metadata: Metadata = {
  title: "Integration & Digital Connectivity | Kulana IT Solutions",
  description:
    "API-first integration architecture that accelerates time-to-market and de-risks legacy connectivity — so transformation programmes move at business speed, not plumbing speed.",
};

const scenarios = [
  {
    label: "Unlocking Legacy Core Banking",
    desc: "Wrap a legacy core banking system with a managed API layer so mobile apps, fintech partners, and new digital products can consume its data and functions — without touching the core or risking a migration",
  },
  {
    label: "Open Banking and Ecosystem Integration",
    desc: "Connect to third-party fintech providers, payment rails, credit bureaus, and regulatory reporting platforms through a single API gateway with standardised authentication, rate limiting, and audit trails",
  },
  {
    label: "ERP and CRM Unification",
    desc: "Synchronise financial, operational, and customer data across ERP and CRM platforms in real time — eliminating the manual reconciliation and data lag that slows reporting and decision-making",
  },
  {
    label: "Digital Product Launch in Weeks",
    desc: "Accelerate new digital channel launches by composing existing back-end capabilities through APIs — customer onboarding, account enquiry, transaction processing — rather than rebuilding each integration from scratch",
  },
  {
    label: "AI Products Built on Your Integration Layer",
    desc: "Once your systems are API-connected, AI capabilities can be layered on top — document processing, intelligent search, automated reporting — using your own data without rebuilding integration plumbing for each use case",
  },
  {
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
        <section className="relative overflow-hidden" style={{ minHeight: "840px" }}>
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
            className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8"
            style={{ paddingTop: "calc(80px + 90px)", paddingBottom: "90px" }}
          >
            <div>
              <p
                className="inline-block tracking-[0.18em] uppercase mb-6"
                style={{ fontFamily: MF, fontWeight: 600, color: "#57D9D4", fontSize: "30px" }}
              >
                Integration Is Where Transformation Programmes Fail
              </p>
              <h1
                className="text-white uppercase leading-tight"
                style={{ fontFamily: MF, fontWeight: 500, fontSize: "clamp(56px, 7vw, 90px)" }}
              >
                Integration &amp;<br />Digital Connectivity
              </h1>
            </div>
            <div style={{ marginTop: "140px" }} className="flex items-end justify-between">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-md transition-all shadow-lg hover:-translate-y-0.5"
                style={{ fontFamily: MF, fontWeight: 600, background: "#57D9D4", color: "#040d28", fontSize: "20px" }}
              >
                Request a Consultation <ArrowRight className="w-5 h-5" />
              </Link>
              <p
                className="hidden lg:block uppercase text-right"
                style={{ fontFamily: MF, fontWeight: 400, color: "#57D9D4", fontSize: "30px", lineHeight: "35px" }}
              >
                Connected Systems.<br />Faster Transformation.
              </p>
            </div>
          </div>
        </section>

        {/* The Problem We Solve */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="mb-10">
              <span className="tracking-[0.18em] uppercase" style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "25px" }}>
                The Problem We Solve
              </span>
              <div className="w-full h-px mt-3" style={{ background: "#000000" }} />
            </div>

            <h2 className="leading-tight mb-10" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "45px" }}>
              Integration is where transformation programmes fail
            </h2>

            <div className="grid lg:grid-cols-[3fr_2fr] gap-12 items-start">
              <div>
                <p className="mb-8" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "30px", lineHeight: "40px" }}>
                  Most enterprises reach a point where their technology estate works against them. Core banking, ERP, CRM, and operational systems each hold critical data — but none of them talk to each other without custom, undocumented point-to-point connections. Every new initiative triggers another integration project. The backlog grows faster than the business can ship.
                </p>
                <p style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "30px", lineHeight: "40px" }}>
                  API-first connectivity changes this equation. A managed integration layer transforms your existing systems into composable services — wrapped in governed, versioned APIs that new products, partners, and AI capabilities can connect to without re-plumbing every time. Transformation then moves at the speed of business logic, not integration engineering.
                </p>
              </div>
              <div className="flex flex-col gap-4 items-end">
                {["WSO2", "REST & GraphQL", "Event-Driven", "TOGAF"].map((tag) => (
                  <div key={tag} className="flex items-center justify-center py-4 rounded-lg text-center"
                    style={{ border: "1.5px solid #57D9D4", fontFamily: MF, fontWeight: 700, color: "#200044", fontSize: "25px", maxWidth: "340px", width: "100%" }}>
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How to Get Started */}
        <section style={{ background: "#200044" }} className="py-16 lg:py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="mb-12">
              <span className="tracking-[0.18em] uppercase" style={{ fontFamily: MF, fontWeight: 600, color: "#ffffff", fontSize: "25px" }}>
                How to Get Started
              </span>
              <div className="w-full h-px mt-3" style={{ background: "#ffffff" }} />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                { step: "01", title: "Integration Audit",   desc: "Map your current integration estate — every system, connection, and data flow — to identify fragility, duplication, and the highest-priority gaps." },
                { step: "02", title: "Architecture Design", desc: "Define the target integration architecture: API gateway strategy, event streaming approach, data ownership, and governance standards." },
                { step: "03", title: "Platform Deployment", desc: "Implement and configure the integration platform — migrating critical integrations from point-to-point to managed, monitored API connections." },
                { step: "04", title: "Enable and Scale",    desc: "Onboard internal teams and external partners to the API fabric, and iterate as new use cases — including AI products — are built on top." },
              ].map(({ step, title, desc }) => (
                <div key={step}>
                  <p className="leading-none mb-4" style={{ fontFamily: MF, fontWeight: 400, color: "#a198af", fontSize: "70px" }}>{step}</p>
                  <p className="mb-4" style={{ fontFamily: MF, fontWeight: 400, color: "#57D9D4", fontSize: "45px" }}>{title}</p>
                  <p style={{ fontFamily: MF, fontWeight: 400, color: "#ffffff", fontSize: "25px", lineHeight: "30px" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Deliver */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="mb-10">
              <span className="tracking-[0.18em] uppercase" style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "25px" }}>
                What We Deliver
              </span>
              <div className="w-full h-px mt-3" style={{ background: "#000000" }} />
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
              <h2 className="leading-tight" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "45px" }}>
                Three Disciplines. One Connected Enterprise.
              </h2>
              <p className="lg:pt-2" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "30px", lineHeight: "40px" }}>
                Integration, architecture, and AI engineering work together — each layer enabling the next, from connectivity foundation through to intelligent product capabilities.
              </p>
            </div>

            <div>
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
                <div key={title}>
                  <div className="group flex flex-col lg:flex-row gap-10 py-10">
                    <div className="flex-1 flex flex-col">
                      <p className="tracking-[0.18em] uppercase mb-3" style={{ fontFamily: MF, fontWeight: 600, color: "#a198af", fontSize: "25px" }}>
                        {num} — {tag}
                      </p>
                      <h3 className="mb-6 leading-tight" style={{ fontFamily: MF, fontWeight: 700, color: "#200044", fontSize: "45px" }}>
                        {title}
                      </h3>
                      <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <p style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "25px", lineHeight: "30px" }}>{desc}</p>
                        <ul className="space-y-0">
                          {highlights.map((h) => (
                            <li key={h} className="flex items-center gap-3" style={{ lineHeight: "40px" }}>
                              <ArrowRight className="w-4 h-4 flex-shrink-0" style={{ color: "#57D9D4" }} />
                              <span style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "25px" }}>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Link
                        href={href}
                        className="self-start inline-flex items-center gap-2 px-6 py-3 rounded-md transition-all hover:opacity-90"
                        style={{ fontFamily: MF, fontWeight: 600, background: "#57D9D4", color: "#200044", fontSize: "20px" }}
                      >
                        Learn more <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                    <div className="hidden lg:block flex-shrink-0" style={{ width: "432px" }}>
                      <div className="relative overflow-hidden" style={{ width: "432px", height: "270px" }}>
                        <Image src={img} alt={title} fill className="object-cover object-center" sizes="432px" />
                      </div>
                    </div>
                    <div className="relative lg:hidden w-full overflow-hidden" style={{ aspectRatio: "16/10" }}>
                      <Image src={img} alt={title} fill className="object-cover object-center" sizes="100vw" />
                    </div>
                  </div>
                  <div className="w-full h-px" style={{ background: "#d1d5db" }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* In Practice */}
        <section style={{ background: "#f5f5f5" }} className="py-16 lg:py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="mb-10">
              <span className="tracking-[0.18em] uppercase" style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "25px" }}>
                In Practice
              </span>
              <div className="w-full h-px mt-3" style={{ background: "#000000" }} />
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
              <h2 className="leading-tight" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "45px" }}>
                What Integration Enables
              </h2>
              <p className="lg:pt-2" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "30px", lineHeight: "40px" }}>
                API-first connectivity is not a technical end in itself — it is what unlocks these outcomes.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {scenarios.map(({ label, desc }) => (
                <div key={label} className="bg-white rounded-xl p-6 border border-gray-100">
                  <p className="mb-3" style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "35px" }}>{label}</p>
                  <p style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "25px", lineHeight: "30px" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "#57D9D4" }}>
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-20">
              <h2
                className="leading-tight lg:w-[45%] flex-shrink-0"
                style={{ fontFamily: MF, fontWeight: 700, color: "#200044", fontSize: "53px" }}
              >
                Stop letting integration slow you down.
              </h2>
              <div className="flex-1">
                <p className="mb-8" style={{ fontFamily: MF, fontWeight: 400, color: "#200044", fontSize: "25px", lineHeight: "30px" }}>
                  Talk to our integration architects and discover how an API-first connectivity layer can accelerate your transformation — and de-risk the legacy systems that are holding it back.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md transition-all hover:opacity-90"
                    style={{ fontFamily: MF, fontWeight: 600, background: "#200044", color: "#ffffff", fontSize: "20px" }}
                  >
                    Request a Consultation <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md border transition-all hover:bg-white/20"
                    style={{ fontFamily: MF, fontWeight: 600, color: "#200044", borderColor: "#200044", fontSize: "20px" }}
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
