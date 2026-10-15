import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Infrastructure | Kulana IT Solutions",
  description:
    "Design, build, and manage resilient IT infrastructure — data centers, cloud environments, network architecture, and 24/7 operations.",
};

const faqs = [
  {
    q: "What is the difference between co-location and a private data center?",
    a: "Co-location means housing your own servers in a third-party facility — you own the hardware but share power, cooling, and physical security. A private data center gives you full control but requires significant capital investment. We help you evaluate both options based on your workload, budget, and risk profile.",
  },
  {
    q: "How do you approach hybrid cloud architecture?",
    a: "We design hybrid environments that extend on-premise workloads into public clouds (AWS, Azure, Google Cloud) using secure, low-latency connectivity. Workloads are placed based on cost, performance, data sovereignty, and regulatory requirements.",
  },
  {
    q: "What is SD-WAN and why does it matter?",
    a: "Software-Defined Wide Area Networking (SD-WAN) replaces traditional MPLS with intelligent, policy-driven routing over multiple connections. It reduces cost, improves performance, and enables centralised management across branch offices.",
  },
  {
    q: "How does Kulana ensure infrastructure security?",
    a: "We implement defence-in-depth — network segmentation, firewall hardening, endpoint protection, identity and access management, encryption at rest and in transit, and regular vulnerability assessments aligned to ISO 27001.",
  },
  {
    q: "What disaster recovery SLAs can you deliver?",
    a: "Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO) vary by workload criticality. We design tiered DR strategies — from warm standby to active-active configurations — and test them regularly to validate SLAs.",
  },
  {
    q: "Do you offer 24/7 monitoring and managed services?",
    a: "Yes. Our Network Operations Centre (NOC) provides continuous monitoring, proactive alerting, capacity planning, and incident response. We offer tiered managed service packages aligned to your operational requirements.",
  },
  {
    q: "How long does an infrastructure deployment typically take?",
    a: "A standard server and network deployment takes 4–8 weeks. Large-scale data center builds or complex cloud migrations are phased over 3–6 months. We provide a detailed project plan after the initial assessment.",
  },
  {
    q: "What certifications does Kulana hold for infrastructure work?",
    a: "Kulana is certified under ISO 9001 (Quality Management) and ISO 27001 (Information Security). We are also a Dell Technologies partner with trained and certified engineers across storage, compute, and networking.",
  },
];

const MF = "var(--font-manrope), sans-serif";

export default function InfrastructurePage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden">
          <Image
            src="/images/Service_Core & Enterprise Systems/infrastructure/Hero image_Infrastructure_2560×1440px.webp"
            alt="Infrastructure"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
            style={{ filter: "brightness(1.5)" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(8,0,32,0.68) 0%, rgba(8,0,32,0.50) 45%, rgba(8,0,32,0.20) 75%, rgba(8,0,32,0.06) 100%)" }}
          />
          <div
            className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8"
            style={{ paddingTop: "calc(80px + clamp(32px, 6vw, 90px))", paddingBottom: "clamp(40px, 6vw, 90px)" }}
          >
            <div>
              <p
                className="inline-block tracking-normal uppercase mb-6 select-none"
                style={{ fontFamily: MF, fontWeight: 600, color: "#57D9D4", fontSize: "clamp(13px, 1.2vw, 18px)" }}
              >
                Core &amp; Enterprise Systems
              </p>
              <h1
                className="text-white uppercase leading-tight select-none"
                style={{ fontFamily: MF, fontWeight: 500, fontSize: "clamp(32px, 4vw, 53px)" }}
              >
                Infrastructure
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
              The foundation your business runs on
            </h2>

            {/* 2-col: description left, tags right */}
            <div className="grid lg:grid-cols-[3fr_2fr] gap-8 items-start">
              <div>
                <p className="mb-8" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1.2vw, 18px)", lineHeight: "1.4" }}>
                  Modern enterprises depend on IT infrastructure that is resilient, secure, and adaptable. Whether you are running a traditional data center, migrating to the cloud, or operating a hybrid environment, Kulana delivers the expertise to design, deploy, and manage every layer of your infrastructure stack.
                </p>
                <p style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1.2vw, 18px)", lineHeight: "1.4" }}>
                  Backed by our partnership with Dell Technologies and certified under ISO 9001 and ISO 27001, we bring global standards and African operational experience together.
                </p>
              </div>
              <div className="flex flex-col gap-4 items-end">
                {["Data Center", "Hybrid Cloud", "Networking", "HCI"].map((tag) => (
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
        <section className="py-10 lg:py-12" style={{ background: "#200044" }}>
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Label + white rule */}
            <div className="mb-8">
              <span className="tracking-normal uppercase" style={{ fontFamily: MF, fontWeight: 600, color: "#ffffff", fontSize: "clamp(13px, 1vw, 14px)" }}>
                How to Get Started
              </span>
              <div className="w-full h-px mt-3" style={{ background: "#ffffff" }} />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
              {[
                { step: "01", title: "Assessment", desc: "Audit your current environment — servers, network, storage, cloud spend — and identify gaps and risks." },
                { step: "02", title: "Design",     desc: "Produce a detailed architecture design aligned to your business requirements, budget, and growth plans." },
                { step: "03", title: "Deploy",     desc: "Implement and configure infrastructure using best-practice methodologies with minimal disruption." },
                { step: "04", title: "Operate",    desc: "Provide ongoing 24/7 NOC support, monitoring, patching, and optimisation as a managed service." },
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

        {/* ── Powered By ───────────────────────────────────────────────── */}
        <section className="bg-white py-10 lg:py-12">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Label + black rule */}
            <div className="mb-6">
              <span className="tracking-normal uppercase" style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "clamp(13px, 1vw, 14px)" }}>
                Powered By
              </span>
              <div className="w-full h-px mt-3" style={{ background: "#000000" }} />
            </div>

            {/* Heading left · description + logo right */}
            <div className="grid lg:grid-cols-2 gap-8 items-start mb-8">
              <h2 className="leading-tight" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(18px, 1.8vw, 26px)" }}>
                Delivered on World-Class<br />Hardware
              </h2>
              <div>
                <p className="mb-8" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1.2vw, 18px)", lineHeight: "1.4" }}>
                  As a Dell Technologies partner, Kulana designs and deploys infrastructure on proven, enterprise-grade hardware — from PowerEdge servers and PowerStore arrays to networking and hyper-converged solutions.
                </p>
                <Image src="/logos/dell.svg" alt="Dell Technologies" width={120} height={40} className="h-9 w-auto object-contain" />
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-6 border-t border-gray-100">
              {[
                { value: "#1",         label: "Server Vendor Worldwide" },
                { value: "150+",       label: "Countries" },
                { value: "HCI",        label: "Hyper-Converged Leader" },
                { value: "End-to-End", label: "Solutions Portfolio" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="leading-tight mb-1" style={{ fontFamily: MF, fontWeight: 700, color: "#000000", fontSize: "clamp(21px, 2.25vw, 32px)" }}>{value}</p>
                  <p style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1vw, 14px)" }}>{label}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── What We Deliver ──────────────────────────────────────────── */}
        <section className="py-10 lg:py-12" style={{ background: "#f5f5f5" }}>
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
                Services<br />We Provide
              </h2>
              <p className="lg:pt-2" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1.2vw, 18px)", lineHeight: "1.4" }}>
                From initial design to ongoing managed operations, we cover the full infrastructure lifecycle.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Data Center & Co-location",   desc: "Design, build, and manage resilient data centres." },
                { title: "Hybrid & Multi-Cloud",         desc: "Extend infrastructure across AWS, Azure, and Google Cloud." },
                { title: "Network & SD-WAN",             desc: "Resilient networks built to scale with your business." },
                { title: "Virtualisation & HCI",         desc: "Reduce hardware sprawl with virtualised infrastructure." },
                { title: "Backup & Disaster Recovery",   desc: "Automated backup, replication, and disaster recovery." },
                { title: "Infrastructure Monitoring",    desc: "24/7 monitoring, proactive alerts, and capacity planning." },
              ].map(({ title, desc }) => (
                <div key={title} className="bg-white border border-gray-100 rounded-xl p-6">
                  <p className="mb-3" style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "clamp(14px, 1.45vw, 21px)" }}>{title}</p>
                  <p style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1vw, 14px)", lineHeight: "1.5" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Modernise ────────────────────────────────────────────── */}
        <section className="bg-white py-10 lg:py-12">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Label + black rule */}
            <div className="mb-6">
              <span className="tracking-normal uppercase" style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "clamp(13px, 1vw, 14px)" }}>
                Why Modernise
              </span>
              <div className="w-full h-px mt-3" style={{ background: "#000000" }} />
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-start mb-8">
              <h2 className="leading-tight" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(18px, 1.8vw, 26px)" }}>
                Benefits
              </h2>
              <p className="lg:pt-2" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1.2vw, 18px)", lineHeight: "1.4" }}>
                A well-designed infrastructure foundation reduces risk, cuts cost, and enables every part of your business to move faster.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "High Availability",   desc: "Engineered uptime with redundant power, cooling, and network paths." },
                { title: "Scalability",          desc: "Infrastructure that grows with your business without costly redesigns." },
                { title: "Cost Optimisation",   desc: "Right-size your environment and eliminate waste with continuous optimisation." },
                { title: "Risk Mitigation",      desc: "Tested DR plans and hardened security that keep your operations running." },
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
                Find answers to common questions about our infrastructure services and approach.
              </p>
            </div>

            {/* Row 2: image left | accordion right */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
              <div className="relative w-full rounded-2xl overflow-hidden lg:mt-14" style={{ aspectRatio: "4/5", maxWidth: "320px" }}>
                <Image src="/images/Service_Core & Enterprise Systems/infrastructure/Hero image_Infrastructure_2560×1440px.webp" alt="Infrastructure" fill className="object-cover object-center" sizes="320px" />
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
                Ready to build a<br />resilient infrastructure?
              </h2>
              <div className="flex-1">
                <p className="mb-8" style={{ fontFamily: MF, fontWeight: 400, color: "#200044", fontSize: "clamp(13px, 1vw, 14px)", lineHeight: "1.5" }}>
                  Talk to our infrastructure specialists and get a tailored design for your environment.
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
