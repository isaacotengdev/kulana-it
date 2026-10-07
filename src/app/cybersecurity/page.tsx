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

        {/* Hero */}
        <section className="relative overflow-hidden" style={{ height: "100vh" }}>
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
            className="relative z-10 flex flex-col w-full h-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8"
            style={{ paddingTop: "calc(5rem + 28vh)", paddingBottom: "5rem" }}
          >
            <div>
              <p
                className="text-xs tracking-[0.22em] uppercase mb-4"
                style={{ fontFamily: MF, fontWeight: 600, color: "#57D9D4" }}
              >
                Core &amp; Enterprise Systems
              </p>
              <h1
                className="text-5xl sm:text-6xl lg:text-8xl font-bold uppercase text-white leading-[1.0]"
                style={{ fontFamily: MF }}
              >
                Cybersecurity
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
              Security that never sleeps
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4" style={{ fontFamily: MF }}>
              The threat landscape is evolving faster than ever. Organisations across Africa and beyond face sophisticated attacks targeting financial systems, customer data, and operational continuity. Kulana&apos;s cybersecurity practice delivers the people, processes, and technology to detect, respond to, and prevent security incidents at every layer.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10" style={{ fontFamily: MF }}>
              Certified under ISO 27001, our security operations follow internationally recognised frameworks — giving you confidence that your environment meets the highest standards of information security management.
            </p>
            <div className="flex flex-wrap lg:flex-nowrap gap-3">
              {["SOC", "SIEM", "Zero Trust", "ISO 27001"].map((tag) => (
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
                { step: "01", title: "Assess",  desc: "Understand your current risk posture with a comprehensive security assessment and gap analysis." },
                { step: "02", title: "Protect", desc: "Implement preventative controls — firewalls, endpoint protection, identity management, encryption." },
                { step: "03", title: "Detect",  desc: "Deploy SIEM and threat intelligence tooling with 24/7 SOC monitoring to catch threats early." },
                { step: "04", title: "Respond", desc: "Activate tested incident response playbooks to contain, investigate, and recover from incidents." },
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
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-14">
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-snug" style={{ fontFamily: MF }}>
                Real-World Use Cases
              </h2>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: MF }}>
                Our cybersecurity practice protects organisations across industries facing evolving threats.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { label: "Financial Services SOC",  desc: "24/7 threat monitoring for banks and payment providers." },
                { label: "Regulatory Compliance",   desc: "ISO 27001, PCI-DSS, and GDPR audit readiness." },
                { label: "Ransomware Defense",      desc: "Layered protection and rapid ransomware recovery." },
                { label: "Red Team Exercises",      desc: "Simulated attacks to test security controls." },
                { label: "Cloud Security Posture",  desc: "Cloud configuration review and identity hardening." },
                { label: "Supply Chain Security",   desc: "Third-party risk assessment and vendor security controls." },
              ].map(({ label, desc }) => (
                <div key={label} className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-2" style={{ fontFamily: MF }}>{label}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: MF }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Deliver */}
        <section style={{ background: "#f5f5f5" }} className="py-16 lg:py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs tracking-[0.18em] uppercase mb-10" style={{ fontFamily: MF, fontWeight: 700, color: "#200044" }}>What We Deliver</p>
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-14">
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-snug" style={{ fontFamily: MF }}>
                Security Services
              </h2>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: MF }}>
                A full-spectrum cybersecurity offering covering prevention, detection, response, and compliance.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map(({ label, desc }) => (
                <div key={label} className="bg-white border border-gray-100 rounded-2xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-2" style={{ fontFamily: MF }}>{label}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: MF }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs tracking-[0.18em] uppercase mb-10" style={{ fontFamily: MF, fontWeight: 700, color: "#200044" }}>Why It Matters</p>
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-14">
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-snug" style={{ fontFamily: MF }}>
                Benefits
              </h2>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: MF }}>
                A proactive cybersecurity posture protects your revenue, reputation, and regulatory standing.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map(({ title, desc }) => (
                <div key={title} className="border rounded-2xl p-8" style={{ borderColor: "#57D9D4" }}>
                  <h3 className="font-semibold text-lg text-gray-900 mb-3" style={{ fontFamily: MF }}>{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: MF }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <p className="text-xs tracking-[0.18em] uppercase leading-none mb-4" style={{ fontFamily: MF, fontWeight: 700, color: "#200044" }}>FAQ</p>
              <div className="h-px bg-gray-200 w-full" />
            </div>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div>
                <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-8" style={{ fontFamily: MF }}>
                  Your questions<br />answered
                </h2>
                <div className="relative w-full max-w-xs aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100">
                  <Image src="/images/Service_Core & Enterprise Systems/Cybersecurity/Hero image_Cybersecurity_2560×1440px.webp" alt="Cybersecurity" fill className="object-cover object-center" sizes="320px" />
                </div>
              </div>
              <div>
                <p className="text-gray-600 leading-relaxed mb-10" style={{ fontFamily: MF }}>
                  Find answers to common questions about our cybersecurity services and approach.
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
        <section style={{ background: "#57D9D4" }}>
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-20">
              <h2
                className="text-3xl lg:text-4xl font-extrabold leading-tight lg:w-[40%] flex-shrink-0"
                style={{ fontFamily: MF, color: "#200044" }}
              >
                Ready to secure your organisation?
              </h2>
              <div className="flex-1">
                <p className="text-sm lg:text-base mb-6 leading-relaxed" style={{ fontFamily: MF, color: "#200044" }}>
                  Speak to our security specialists and get a risk assessment tailored to your environment.
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
