import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

const MF = "var(--font-manrope), sans-serif";

export const metadata: Metadata = {
  title: "Digital Integrations & API Management | Kulana IT Solutions",
  description:
    "Unlock seamless connectivity. Our middleware and integration practice ensures your systems communicate effectively, driving efficiency, agility, and productivity throughout your organisation.",
};

const faqs = [
  {
    q: "What types of systems can be integrated with middleware?",
    a: "Middleware integrates legacy systems, ERP, CRM, cloud-based applications, databases, and web services — regardless of vendor or technology stack.",
  },
  {
    q: "How does middleware facilitate communication between different software applications?",
    a: "Middleware acts as a mediator between disparate software applications by providing a common platform for communication. It abstracts complexity, allowing seamless data exchange across different formats and protocols.",
  },
  {
    q: "Why is middleware important for businesses with complex IT landscapes?",
    a: "It simplifies integration through standardised communication approaches, enabling interoperability, accelerated development, and reduced costs across heterogeneous environments.",
  },
  {
    q: "How can middleware solutions improve data security?",
    a: "Solutions include authentication, authorisation, encryption, and data masking to protect sensitive information during transmission and processing between systems.",
  },
  {
    q: "What are common challenges during implementation?",
    a: "Interoperability issues, performance bottlenecks, data consistency concerns, vendor lock-in, and integration complexity require careful planning and robust architecture design.",
  },
  {
    q: "How does middleware support scalability?",
    a: "It decouples systems, enabling modular architectures that scale horizontally or vertically without disrupting existing infrastructure or downstream integrations.",
  },
  {
    q: "What should we consider when selecting an integration platform?",
    a: "The most important factors are: the protocols and standards your existing systems use (REST, SOAP, AMQP, etc.), the volume and latency requirements of your data flows, whether you need an event-driven or request-driven architecture, the vendor's support model and long-term roadmap, and total cost of ownership including licensing, implementation, and maintenance. WSO2, for example, is well-suited to enterprise API management and high-volume event streaming — but the right platform depends on your specific landscape. Kulana runs an assessment before recommending any tooling.",
  },
  {
    q: "What role does middleware play in digital transformation?",
    a: "Middleware removes the point-to-point dependency problem: without it, connecting five systems requires up to ten direct integrations, each brittle and hard to maintain. Middleware creates a central integration layer where each system connects once — to the middleware — rather than to every other system. This makes it possible to add, replace, or upgrade individual systems without rewriting integrations, which is what makes digital transformation programs sustainable rather than one-off projects.",
  },
  {
    q: "How do we measure the return on an integration project?",
    a: "The clearest measures are operational: how many manual data transfers or reconciliation steps were eliminated, how long end-to-end processes now take versus before, and what error rates look like in data flowing between systems. On the business side, look at time-to-decision (faster data = faster action), the cost of building new integrations after the platform is in place versus before, and any revenue impact from systems that can now talk to each other. Kulana defines these baseline metrics during the assessment phase so ROI can be tracked from day one.",
  },
];

export default function DigitalIntegrationsPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden">
          <Image
            src="/images/integration_digital_connectivity/Hero image_Integration_2560×1440px.webp"
            alt="Digital Integrations and API Management"
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
                Integration
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
              What is a middleware and integration practice?
            </h2>

            {/* 2-col: description left, tags right */}
            <div className="grid lg:grid-cols-[3fr_2fr] gap-8 items-start">
              <div>
                <p className="mb-8" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1.2vw, 18px)", lineHeight: "1.4" }}>
                  Businesses depend on multiple software systems for operations and data management. The challenge lies in ensuring these systems communicate effectively across different technologies, formats, and protocols.
                </p>
                <p style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1.2vw, 18px)", lineHeight: "1.4" }}>
                  Kulana&apos;s middleware and integration practice bridges gaps between software applications, databases, and platforms — whether connecting legacy systems with modern cloud solutions or linking enterprise applications. We provide solutions customised to your specific business requirements, built on WSO2 and leading integration platforms.
                </p>
              </div>
              <div className="flex flex-col gap-4 items-end">
                {["WSO2", "REST & GraphQL", "Event-Driven", "API Gateway"].map((tag) => (
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
                { step: "01", title: "Assessment",           desc: "We evaluate your business needs, system landscape, data flows, and integration requirements through stakeholder collaboration." },
                { step: "02", title: "Strategy",             desc: "A comprehensive integration strategy aligned with business objectives, IT infrastructure, and budget constraints." },
                { step: "03", title: "Implementation",       desc: "Iterative, collaborative delivery using best practices and cutting-edge technologies for scalable, secure, future-proof solutions." },
                { step: "04", title: "Operate & Optimise",  desc: "Ongoing monitoring, optimisation, and governance of your integration layer as your systems and business needs evolve." },
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
                Integration patterns<br />we use
              </h2>
              <p className="lg:pt-2" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1.2vw, 18px)", lineHeight: "1.4" }}>
                We select the right pattern for your context — from lightweight APIs to enterprise event-driven architectures.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { label: "Point-to-Point",      desc: "Direct, lightweight connections for simple two-system scenarios where overhead is not justified." },
                { label: "ESB / Middleware",     desc: "Central hub routing messages across many systems reliably — ideal for complex enterprise landscapes." },
                { label: "API-First",            desc: "Expose capabilities as governed APIs consumed by any client — mobile, partner, or internal system." },
                { label: "Event-Driven",         desc: "Asynchronous event streams for real-time, decoupled architectures that scale independently." },
                { label: "ETL / ELT Pipelines",  desc: "Batch or real-time data transformation and loading at scale for analytics and reporting." },
                { label: "iPaaS / Cloud",        desc: "Managed integration platform as a service for cloud estates reducing infrastructure overhead." },
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
                Integration and API<br />management services
              </h2>
              <p className="lg:pt-2" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1.2vw, 18px)", lineHeight: "1.4" }}>
                End-to-end integration capability covering connectivity, security, governance, and real-time monitoring.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { label: "API Gateway",           desc: "Centralised gateway for routing, rate limiting, authentication, and monitoring of all API traffic." },
                { label: "Event Streaming",        desc: "Real-time event pipelines using Apache Kafka and WSO2 Streaming Integrator for decoupled, scalable architectures." },
                { label: "Data Integration",       desc: "Reliable data movement between source systems, data warehouses, and analytics platforms with transformation and validation." },
                { label: "API Security",           desc: "OAuth2, JWT, mTLS, and API key management to protect every endpoint from unauthorised access." },
                { label: "Microservices",          desc: "Service mesh and microservice integration patterns that enable independent deployment and horizontal scaling." },
                { label: "Real-time Monitoring",   desc: "End-to-end visibility into API performance, integration health, and SLA compliance across your entire estate." },
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
                What seamless<br />integration delivers
              </h2>
              <p className="lg:pt-2" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1.2vw, 18px)", lineHeight: "1.4" }}>
                Seamlessly connecting your systems delivers measurable results across efficiency, data quality, and customer experience.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "Streamlined Processes",         desc: "Integration eliminates data silos and ensures smooth system communication, reducing manual effort and increasing operational efficiency." },
                { title: "Improved Data Quality",         desc: "Middleware automates data exchange and validation, reducing errors, duplication, and inconsistencies for better data integrity." },
                { title: "Enhanced Agility",              desc: "Integrated systems enable faster decision-making, market responsiveness, and flexibility to adapt to evolving business requirements." },
                { title: "End-to-End Security",           desc: "Authentication, authorisation, encryption, and data masking protect sensitive information during transmission between systems." },
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
                Everything you need to know about our middleware and integration practice.
              </p>
            </div>

            {/* Row 2: image left | accordion right */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
              <div className="relative w-full rounded-2xl overflow-hidden lg:mt-14" style={{ aspectRatio: "4/5", maxWidth: "320px" }}>
                <Image src="/images/Service_Core & Enterprise Systems/FAQ_Banners/Integration_400x500px_banner.webp" alt="Digital Integration" fill className="object-cover object-center" sizes="320px" />
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
                Ready to seamlessly<br />connect your systems?
              </h2>
              <div className="flex-1">
                <p className="mb-8" style={{ fontFamily: MF, fontWeight: 400, color: "#200044", fontSize: "clamp(13px, 1vw, 14px)", lineHeight: "1.5" }}>
                  Optimise your business processes with Kulana&apos;s middleware and integration solutions.
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
