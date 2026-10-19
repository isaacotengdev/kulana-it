import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck, Eye, Bug, AlertTriangle, FileCheck, Lock,
  ArrowRight, Zap,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cybersecurity | Kulana IT Solutions",
  description:
    "Protect your organisation with a comprehensive security posture — SOC monitoring, threat detection, vulnerability management, and compliance.",
};


const features = [
  { Icon: Eye,          label: "SOC Monitoring",          desc: "24/7 monitoring, detection, and response." },
  { Icon: Bug,          label: "Threat Intelligence",     desc: "Threat hunting powered by global intelligence feeds." },
  { Icon: AlertTriangle,label: "Vulnerability Assessment",desc: "Scanning, prioritisation, and remediation guidance." },
  { Icon: ShieldCheck,  label: "Penetration Testing",     desc: "Simulated attacks to uncover exploitable weaknesses." },
  { Icon: FileCheck,    label: "Compliance & Audit",      desc: "ISO 27001, GDPR, PCI-DSS, and regulatory readiness." },
  { Icon: Lock,         label: "Incident Response",       desc: "Rapid containment, forensic investigation, and recovery." },
];

const benefits = [
  { Icon: Eye,       bg: "bg-blue-600",    title: "Continuous Protection",  desc: "Around-the-clock monitoring means threats are detected and contained before they become incidents." },
  { Icon: FileCheck, bg: "bg-teal-600",    title: "Regulatory Confidence",  desc: "Meet ISO 27001, GDPR, and sector-specific compliance requirements with confidence." },
  { Icon: ShieldCheck, bg: "bg-cyan-600",  title: "Reduced Risk Exposure",  desc: "Proactive vulnerability management and threat hunting reduce your exploitable attack surface." },
  { Icon: Zap,       bg: "bg-cyan-500",    title: "Faster Response Times",  desc: "Tested incident response playbooks minimise dwell time and reduce the cost of a breach." },
];

const faqs = [
  {
    q: "What is a Security Operations Centre (SOC)?",
    a: "A SOC is a centralised function staffed by security analysts who monitor, detect, and respond to threats across your entire digital environment — 24 hours a day, 7 days a week. Kulana operates a managed SOC service, meaning you get expert coverage without building an in-house team.",
  },
  {
    q: "How does penetration testing differ from vulnerability scanning?",
    a: "Vulnerability scanning is automated — it identifies known weaknesses in your systems. Penetration testing goes further: trained security professionals simulate real adversarial attacks to exploit those weaknesses and demonstrate the actual impact. Both are essential components of a mature security programme.",
  },
  {
    q: "What frameworks does Kulana's cybersecurity practice align to?",
    a: "We work within internationally recognised frameworks including ISO 27001, NIST Cybersecurity Framework, CIS Controls, PCI-DSS, and GDPR. For African markets, we also align to sector-specific regulatory requirements.",
  },
  {
    q: "How quickly can you respond to a security incident?",
    a: "Our incident response SLAs depend on severity classification. Critical incidents — such as active ransomware or data breaches — receive immediate response. Our IR team follows tested playbooks to contain, investigate, and recover quickly, minimising dwell time and business impact.",
  },
  {
    q: "What is Zero Trust and should we adopt it?",
    a: "Zero Trust is a security model that assumes no user, device, or network — inside or outside your perimeter — should be trusted by default. Every access request is verified. For most organisations, adopting Zero Trust principles significantly reduces the blast radius of a breach. We can assess your readiness and design a phased adoption plan.",
  },
  {
    q: "How do you handle data privacy during a security engagement?",
    a: "All security engagements are governed by strict confidentiality agreements. Our engineers operate under controlled conditions with clearly defined scopes, and any sensitive data encountered during assessments or monitoring is handled in compliance with applicable data protection laws.",
  },
  {
    q: "Do you offer security awareness training for employees?",
    a: "Yes. Human error remains the leading cause of security breaches. We offer tailored security awareness programmes — including phishing simulations, policy training, and role-specific modules — to build a security-conscious culture across your organisation.",
  },
  {
    q: "What is the difference between project-based and managed security services?",
    a: "Project-based engagements are scoped and time-limited — a penetration test, a compliance audit, or a one-time security architecture review. You get a deliverable and a report, and the engagement ends. Managed security services are ongoing: Kulana monitors your environment continuously, responds to alerts, produces regular threat reports, and acts as an extension of your team. Most organisations start with a project-based assessment to understand their posture, then move to a managed model for continuous protection.",
  },
];

const MF = "var(--font-manrope), sans-serif";

export default function CybersecurityPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden">
          <Image
            src="/images/Service_Core & Enterprise Systems/Cybersecurity/Hero image_Cybersecurity_2560×1440px.webp"
            alt="Cybersecurity"
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
                Cybersecurity
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
              Security that never sleeps
            </h2>

            {/* 2-col: description left, tags right */}
            <div className="grid lg:grid-cols-[3fr_2fr] gap-8 items-start">
              <div>
                <p className="mb-8" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1.2vw, 18px)", lineHeight: "1.4" }}>
                  The threat landscape is evolving faster than ever. Organisations across Africa and beyond face sophisticated attacks targeting financial systems, customer data, and operational continuity. Kulana&apos;s cybersecurity practice delivers the people, processes, and technology to detect, respond to, and prevent security incidents at every layer.
                </p>
                <p style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1.2vw, 18px)", lineHeight: "1.4" }}>
                  Certified under ISO 27001, our security operations follow internationally recognised frameworks — giving you confidence that your environment meets the highest standards of information security management.
                </p>
              </div>
              <div className="flex flex-col gap-4 items-end">
                {["SOC", "SIEM", "Zero Trust", "ISO 27001"].map((tag) => (
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

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                { step: "01", title: "Assess",  desc: "Understand your current risk posture with a comprehensive security assessment and gap analysis." },
                { step: "02", title: "Protect", desc: "Implement preventative controls — firewalls, endpoint protection, identity management, encryption." },
                { step: "03", title: "Detect",  desc: "Deploy SIEM and threat intelligence tooling with 24/7 SOC monitoring to catch threats early." },
                { step: "04", title: "Respond", desc: "Activate tested incident response playbooks to contain, investigate, and recover from incidents." },
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
                Real-World Use Cases
              </h2>
              <p className="lg:pt-2" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1.2vw, 18px)", lineHeight: "1.4" }}>
                Our cybersecurity practice protects organisations across industries facing evolving threats.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { label: "Financial Services SOC",  desc: "24/7 threat monitoring for banks and payment providers." },
                { label: "Regulatory Compliance",   desc: "ISO 27001, PCI-DSS, and GDPR audit readiness." },
                { label: "Ransomware Defense",      desc: "Layered protection and rapid ransomware recovery." },
                { label: "Red Team Exercises",      desc: "Simulated attacks to test security controls." },
                { label: "Cloud Security Posture",  desc: "Cloud configuration review and identity hardening." },
                { label: "Supply Chain Security",   desc: "Third-party risk assessment and vendor security controls." },
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
                Security Services
              </h2>
              <p className="lg:pt-2" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1.2vw, 18px)", lineHeight: "1.4" }}>
                A full-spectrum cybersecurity offering covering prevention, detection, response, and compliance.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map(({ label, desc }) => (
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
                Benefits
              </h2>
              <p className="lg:pt-2" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1.2vw, 18px)", lineHeight: "1.4" }}>
                A proactive cybersecurity posture protects your revenue, reputation, and regulatory standing.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map(({ title, desc }) => (
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
                Find answers to common questions about our cybersecurity services and approach.
              </p>
            </div>

            {/* Row 2: image left | accordion right */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
              <div className="relative w-full rounded-2xl overflow-hidden lg:mt-14" style={{ aspectRatio: "4/5", maxWidth: "320px" }}>
                <Image
                  src="/images/Service_Core & Enterprise Systems/FAQ_Banners/Cybersecurity_400x500px_banner.webp"
                  alt="Cybersecurity" fill className="object-cover object-center" sizes="320px"
                />
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
                Ready to secure<br />your organisation?
              </h2>
              <div className="flex-1">
                <p className="mb-8" style={{ fontFamily: MF, fontWeight: 400, color: "#200044", fontSize: "clamp(13px, 1vw, 14px)", lineHeight: "1.5" }}>
                  Speak to our security specialists and get a risk assessment tailored to your environment.
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
