import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import HeroCanvas from "@/components/HeroCanvas";
import {
  ShieldCheck, Eye, Bug, AlertTriangle, FileCheck, Lock,
  ArrowRight, CheckCircle2, Search, Zap, TrendingUp, RefreshCw,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cybersecurity | Kulana IT Solutions",
  description:
    "Protect your organisation with a comprehensive security posture — SOC monitoring, threat detection, vulnerability management, and compliance.",
};

const capabilities = [
  { Icon: Eye,          label: "SOC Monitoring",          color: "text-blue-600",    bg: "bg-blue-50",    border: "border-blue-100" },
  { Icon: Bug,          label: "Threat Detection",         color: "text-blue-600",    bg: "bg-blue-50",    border: "border-blue-100" },
  { Icon: AlertTriangle,label: "Vulnerability Management", color: "text-cyan-600",    bg: "bg-cyan-50",    border: "border-cyan-100" },
  { Icon: Lock,         label: "Incident Response",        color: "text-teal-600",    bg: "bg-teal-50",    border: "border-teal-100" },
  { Icon: FileCheck,    label: "Compliance Management",    color: "text-cyan-600",    bg: "bg-cyan-50",    border: "border-cyan-100" },
  { Icon: ShieldCheck,  label: "Penetration Testing",      color: "text-blue-600",    bg: "bg-blue-50",    border: "border-blue-100" },
];

const features = [
  { Icon: Eye,          label: "Security Operations Centre (SOC)", desc: "24/7 monitoring, detection, and response across your entire digital environment." },
  { Icon: Bug,          label: "Threat Intelligence",              desc: "Proactive threat hunting using global intelligence feeds and behavioural analytics." },
  { Icon: AlertTriangle,label: "Vulnerability Assessment",         desc: "Regular scanning, prioritisation, and remediation guidance across your attack surface." },
  { Icon: ShieldCheck,  label: "Penetration Testing",              desc: "Simulated adversarial attacks to identify and remediate exploitable weaknesses before attackers do." },
  { Icon: FileCheck,    label: "Compliance and Audit Readiness",    desc: "Frameworks mapped to ISO 27001, GDPR, PCI-DSS, and local regulatory requirements." },
  { Icon: Lock,         label: "Incident Response and Recovery",    desc: "Rapid containment, forensic investigation, and recovery plans tested and ready to activate." },
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

export default function CybersecurityPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">

        {/* Hero */}
        <section className="gradient-hero relative overflow-hidden py-28 text-white">
          <HeroCanvas variant="cybersecurity" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-cyan-300 mb-5">
              <ShieldCheck className="w-4 h-4" /> Core and Enterprise Systems
            </span>
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">Cybersecurity</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
              Protect your organisation with a comprehensive security posture — from 24/7 SOC
              monitoring and threat intelligence to vulnerability management and incident response.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {["ISO 27001 Certified", "24/7 SOC", "Threat Intelligence", "Compliance-Ready"].map((tag) => (
                <span key={tag} className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-white">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-300" /> {tag}
                </span>
              ))}
            </div>
            <Link href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:-translate-y-0.5">
              Request a Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Capability strip */}
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

        {/* Overview */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Overview</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6">
                Security that never sleeps
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                The threat landscape is evolving faster than ever. Organisations across Africa and beyond
                face sophisticated attacks targeting financial systems, customer data, and operational
                continuity. Kulana&apos;s cybersecurity practice delivers the people, processes, and
                technology to detect, respond to, and prevent security incidents at every layer.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Certified under ISO 27001, our security operations follow internationally recognised
                frameworks — giving you confidence that your environment meets the highest standards
                of information security management.
              </p>
              <div className="flex flex-wrap gap-3">
                {["SOC", "SIEM", "Zero Trust", "ISO 27001"].map((tag) => (
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
                  { Icon: Search,    step: "01", title: "Assess",   desc: "Understand your current risk posture with a comprehensive security assessment and gap analysis." },
                  { Icon: ShieldCheck, step: "02", title: "Protect", desc: "Implement preventative controls — firewalls, endpoint protection, identity management, encryption." },
                  { Icon: Eye,       step: "03", title: "Detect",   desc: "Deploy SIEM and threat intelligence tooling with 24/7 SOC monitoring to catch threats early." },
                  { Icon: RefreshCw, step: "04", title: "Respond",  desc: "Activate tested incident response playbooks to contain, investigate, and recover from incidents." },
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

        {/* Dark section — real-world applications */}
        <section className="bg-gray-950 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3">Applications</p>
              <h2 className="text-3xl font-extrabold text-white mb-3">Real-World Use Cases</h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Our cybersecurity practice protects organisations across industries facing evolving threats.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { Icon: Eye,          label: "Financial Services SOC",      desc: "24/7 threat monitoring for banks and payment processors handling high-value transactions" },
                { Icon: FileCheck,    label: "Regulatory Compliance",       desc: "ISO 27001, PCI-DSS, and GDPR audit readiness for regulated industries" },
                { Icon: AlertTriangle,label: "Ransomware Defense",          desc: "Layered controls and tested IR playbooks to prevent and rapidly recover from ransomware" },
                { Icon: Bug,          label: "Red Team Exercises",          desc: "Simulated adversarial attacks to validate security controls across enterprise environments" },
                { Icon: Lock,         label: "Cloud Security Posture",      desc: "Configuration review, CSPM, and identity hardening for cloud-first organisations" },
                { Icon: ShieldCheck,  label: "Supply Chain Security",       desc: "Third-party risk assessments and vendor security controls to protect your ecosystem" },
              ].map(({ Icon: Ic, label, desc }) => (
                <div key={label} className="group flex gap-4 p-6 rounded-2xl border border-gray-800 bg-gray-900 hover:border-blue-500/40 hover:bg-gray-800 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600/40 transition-colors">
                    <Ic className="w-5 h-5 text-blue-400" strokeWidth={1.75} />
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

        {/* Features */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">What We Deliver</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">Security Services</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                A full-spectrum cybersecurity offering covering prevention, detection, response, and compliance.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map(({ Icon, label, desc }, i) => (
                <div key={label} className="group flex gap-4 p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:border-blue-100 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <Icon className="w-5 h-5 text-white" strokeWidth={1.75} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">0{i + 1}</span>
                      <p className="font-bold text-gray-900">{label}</p>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Why It Matters</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">Benefits</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                A proactive cybersecurity posture protects your revenue, reputation, and regulatory standing.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map(({ Icon, bg, title, desc }) => (
                <div key={title} className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-100 hover:shadow-xl transition-all duration-300 overflow-hidden relative">
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

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-lg">
              Everything you need to know about our cybersecurity practice.
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
                <div className="px-6 pb-5 pt-2 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pl-14">{a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-10 md:p-14 text-white text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8 text-white" strokeWidth={1.75} />
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
                Ready to secure your organisation?
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Speak to our security specialists and get a risk assessment tailored to your environment.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:-translate-y-0.5">
                  Request a Consultation <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact-us" className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all">
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
