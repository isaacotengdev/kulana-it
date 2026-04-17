import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import HeroCanvas from "@/components/HeroCanvas";
import {
  Server, ShieldCheck, Eye, AlertTriangle, RefreshCw, Scale,
  Activity, Lock, Cpu, Network, Database, HardDrive,
  CheckCircle2, ArrowRight, Zap, BadgeCheck,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Center & Security Operations Centre | Kulana IT Solutions",
  description:
    "Secure your digital assets and operations with expert data center and SOC solutions. End-to-end design, build, and management of secure data center and SOC environments.",
};

const capabilities = [
  { Icon: Server,        label: "Data Center Design & Build",     color: "text-blue-600",    bg: "bg-blue-50",    border: "border-blue-100" },
  { Icon: Eye,           label: "Security Operations Centre",      color: "text-violet-600",  bg: "bg-violet-50",  border: "border-violet-100" },
  { Icon: AlertTriangle, label: "Threat Detection & Response",     color: "text-red-500",     bg: "bg-red-50",     border: "border-red-100" },
  { Icon: RefreshCw,     label: "Disaster Recovery Planning",      color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
  { Icon: Scale,         label: "Regulatory Compliance",           color: "text-amber-600",   bg: "bg-amber-50",   border: "border-amber-100" },
  { Icon: Activity,      label: "24 / 7 Infrastructure Monitoring",color: "text-cyan-600",    bg: "bg-cyan-50",    border: "border-cyan-100" },
];

const benefits = [
  {
    Icon: ShieldCheck,
    color: "text-blue-600",
    bg: "bg-blue-600",
    title: "Enhanced Cybersecurity Posture",
    desc: "Real-time threat detection, analysis, and response capabilities to minimise breach impact and ensure operational continuity.",
  },
  {
    Icon: Server,
    color: "text-emerald-600",
    bg: "bg-emerald-600",
    title: "Improved Data Center Resilience",
    desc: "Redundant architecture and disaster recovery solutions protecting against data loss, downtime, and service disruptions.",
  },
  {
    Icon: BadgeCheck,
    color: "text-violet-600",
    bg: "bg-violet-600",
    title: "Regulatory Compliance",
    desc: "Achievement of industry regulation, data protection law, and cybersecurity standard compliance while reducing liabilities.",
  },
  {
    Icon: Zap,
    color: "text-amber-600",
    bg: "bg-amber-600",
    title: "Operational Efficiency",
    desc: "Optimisation of operations, automation of routine tasks, and streamlined security processes that reduce costs across your infrastructure.",
  },
];

const infraLayers = [
  { Icon: Cpu,       label: "Compute",    desc: "High-performance servers & virtualisation" },
  { Icon: HardDrive, label: "Storage",    desc: "Scalable SAN / NAS / object storage" },
  { Icon: Network,   label: "Networking", desc: "SDN, load balancing & segmentation" },
  { Icon: Lock,      label: "Security",   desc: "Zero-trust, IAM & encryption at rest" },
  { Icon: Database,  label: "Data",       desc: "Databases, backup & archival tiers" },
  { Icon: Activity,  label: "Monitoring", desc: "SIEM, log analytics & alerting" },
];

const faqs = [
  {
    q: "What are the key components of a modern data center?",
    a: "Computing infrastructure (servers, storage, networking), power and cooling systems, physical security controls, environmental monitoring, fire suppression systems, and remote management tools.",
  },
  {
    q: "How does a SOC help detect and respond to cybersecurity threats?",
    a: "SOCs monitor network traffic, system logs, security events, and user activities in real-time to detect anomalies and intrusions, with analysts investigating incidents and responding to threats as they emerge.",
  },
  {
    q: "What are common cybersecurity threats facing data centers?",
    a: "Malware infections, ransomware attacks, phishing scams, insider threats, DDoS attacks, and advanced persistent threats that can potentially cause data breaches and financial losses.",
  },
  {
    q: "How can organisations ensure physical data center security?",
    a: "Implement access controls, video surveillance, intrusion detection systems, biometric authentication, and environmental monitoring to protect the physical infrastructure.",
  },
  {
    q: "What are key considerations when designing a secure data center?",
    a: "Threat modelling, risk assessment, security architecture design, access controls, encryption, data segregation, disaster recovery planning, and regulatory compliance are all critical factors.",
  },
  {
    q: "How can organisations optimise data center infrastructure?",
    a: "Adopt virtualisation, software-defined networking (SDN), hyperconverged infrastructure (HCI), cloud computing, and containerisation technologies to reduce overhead and improve efficiency.",
  },
  {
    q: "What are emerging trends in data center and SOC technology?",
    a: "Artificial intelligence and machine learning for threat detection, zero-trust security architectures, edge computing, hybrid cloud deployments, and security operations automation are reshaping the industry.",
  },
  {
    q: "How can organisations ensure data center resilience and availability?",
    a: "Implement redundant infrastructure, high-availability configurations, disaster recovery plans, business continuity strategies, and regular testing and monitoring to ensure uptime.",
  },
];

export default function DataCenterPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="gradient-hero relative overflow-hidden py-28 text-white">
          <HeroCanvas variant="data-center" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-cyan-300 mb-5">
              <ShieldCheck className="w-4 h-4" /> Our Services
            </span>
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Data Center &amp;<br />Security Operations Centre
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
              Secure your digital assets and operations with expert data center and SOC solutions,
              ensuring reliability, security, and efficiency for your critical business operations.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {["SOC 24 / 7", "ISO Certified", "End-to-End", "Zero-Trust Ready"].map((tag) => (
                <span key={tag} className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-white">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-300" /> {tag}
                </span>
              ))}
            </div>
            <Link
              href="/request-quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Request a Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* ── Capability strip ─────────────────────────────────────────── */}
        <section className="bg-white border-b border-gray-100 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* ── What is Data Center and SOC? ─────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Overview</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6">
                What is a Data Center &amp; Security Operations Center?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                A data center serves as a centralised facility housing computing, storage, and
                networking equipment supporting organisational operations. A Security Operations
                Center (SOC) functions as a centralised monitoring unit responsible for identifying,
                analysing, and responding to cybersecurity incidents.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Kulana provides end-to-end solutions for designing, building, and operating secure
                data center and SOC environments — assisting with establishing new facilities,
                upgrading infrastructure, or strengthening your cybersecurity posture.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Design & Build", "Threat Intelligence", "Compliance", "Managed SOC"].map((tag) => (
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
                  {
                    step: "01",
                    Icon: Eye,
                    title: "Assessment Phase",
                    desc: "Evaluate your organisation's current data center architecture, security controls, threat landscape, and incident response capabilities.",
                  },
                  {
                    step: "02",
                    Icon: Scale,
                    title: "Strategy Development",
                    desc: "Create a customised roadmap aligned with your organisational goals, regulatory requirements, and risk tolerance.",
                  },
                  {
                    step: "03",
                    Icon: Zap,
                    title: "Collaborative Implementation",
                    desc: "Deploy industry best practices and advanced security technologies through stakeholder engagement and iterative processes.",
                  },
                ].map(({ step, Icon: StepIcon, title, desc }) => (
                  <div key={step} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-600 text-white text-sm font-bold flex items-center justify-center shadow-sm">
                      <StepIcon className="w-4 h-4" strokeWidth={2} />
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

        {/* ── Infrastructure Layers ────────────────────────────────────── */}
        <section className="bg-gray-950 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3">Architecture</p>
              <h2 className="text-3xl font-extrabold text-white mb-3">Infrastructure Layers We Cover</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                From bare-metal compute to SIEM-driven monitoring — every layer of your data center stack, secured and optimised.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {infraLayers.map(({ Icon, label, desc }) => (
                <div key={label} className="group flex gap-4 p-6 rounded-2xl border border-gray-800 bg-gray-900 hover:border-blue-500/40 hover:bg-gray-800 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600/40 transition-colors">
                    <Icon className="w-5 h-5 text-blue-400" strokeWidth={1.75} />
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

        {/* ── Benefits ─────────────────────────────────────────────────── */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Why It Matters</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">Benefits</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                A modern, well-managed data center and SOC delivers measurable security,
                resilience, and operational advantages across your organisation.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map(({ Icon, bg, title, desc }) => (
                <div key={title} className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-100 hover:shadow-xl transition-all duration-300 overflow-hidden relative">
                  {/* Subtle top accent line */}
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

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-lg">
              Everything you need to know about our data center and SOC practice.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group border border-gray-200 rounded-2xl overflow-hidden">
                <summary className="flex items-start justify-between gap-4 px-6 py-5 cursor-pointer list-none font-semibold text-gray-900 hover:bg-blue-50 transition-colors">
                  <span className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" strokeWidth={1.75} />
                    {q}
                  </span>
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 group-open:bg-blue-100 flex-shrink-0 transition-colors mt-0.5">
                    <svg className="w-3.5 h-3.5 text-gray-500 group-open:text-blue-600 group-open:rotate-45 transition-all duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 pt-2 text-gray-500 leading-relaxed border-t border-gray-100 text-sm pl-14">{a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-10 md:p-14 text-white text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
                Ready to secure your infrastructure?
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Talk to our experts and get a tailored data center and SOC strategy for your organisation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/request-quote"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:-translate-y-0.5"
                >
                  Request a Quote <ArrowRight className="w-4 h-4" />
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
