import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import HeroCanvas from "@/components/HeroCanvas";
import {
  ShieldCheck, Eye, Bug, AlertTriangle, FileCheck, Lock,
  ArrowRight, CheckCircle2,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cybersecurity | Kulana IT Solutions",
  description:
    "Protect your organisation with a comprehensive security posture — SOC monitoring, threat detection, vulnerability management, and compliance.",
};

const capabilities = [
  { Icon: Eye,          label: "SOC Monitoring",          color: "text-red-600",     bg: "bg-red-50",     border: "border-red-100" },
  { Icon: Bug,          label: "Threat Detection",         color: "text-orange-600",  bg: "bg-orange-50",  border: "border-orange-100" },
  { Icon: AlertTriangle,label: "Vulnerability Management", color: "text-amber-600",   bg: "bg-amber-50",   border: "border-amber-100" },
  { Icon: Lock,         label: "Incident Response",        color: "text-slate-700",   bg: "bg-slate-50",   border: "border-slate-200" },
  { Icon: FileCheck,    label: "Compliance Management",    color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
  { Icon: ShieldCheck,  label: "Penetration Testing",      color: "text-blue-600",    bg: "bg-blue-50",    border: "border-blue-100" },
];

const features = [
  { label: "Security Operations Centre (SOC)", desc: "24/7 monitoring, detection, and response across your entire digital environment." },
  { label: "Threat Intelligence",              desc: "Proactive threat hunting using global intelligence feeds and behavioural analytics." },
  { label: "Vulnerability Assessment",         desc: "Regular scanning, prioritisation, and remediation guidance across your attack surface." },
  { label: "Penetration Testing",              desc: "Simulated adversarial attacks to identify and remediate exploitable weaknesses before attackers do." },
  { label: "Compliance & Audit Readiness",     desc: "Frameworks mapped to ISO 27001, GDPR, PCI-DSS, and local regulatory requirements." },
  { label: "Incident Response & Recovery",     desc: "Rapid containment, forensic investigation, and recovery plans tested and ready to activate." },
];

const benefits = [
  { title: "Continuous Protection",  desc: "Around-the-clock monitoring means threats are detected and contained before they become incidents." },
  { title: "Regulatory Confidence",  desc: "Meet ISO 27001, GDPR, and sector-specific compliance requirements with confidence." },
  { title: "Reduced Risk Exposure",  desc: "Proactive vulnerability management and threat hunting reduce your exploitable attack surface." },
  { title: "Faster Response Times",  desc: "Tested incident response playbooks minimise dwell time and reduce the cost of a breach." },
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
              <ShieldCheck className="w-4 h-4" /> Core &amp; Enterprise Systems
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
                  <span key={tag} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-50 border border-red-100 rounded-full text-xs font-semibold text-red-700">
                    <CheckCircle2 className="w-3 h-3" /> {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-slate-50 rounded-3xl p-10 border border-red-100">
              <div className="space-y-5">
                {[
                  { step: "01", title: "Assess",   desc: "Understand your current risk posture with a comprehensive security assessment and gap analysis." },
                  { step: "02", title: "Protect",  desc: "Implement preventative controls — firewalls, endpoint protection, identity management, encryption." },
                  { step: "03", title: "Detect",   desc: "Deploy SIEM and threat intelligence tooling with 24/7 SOC monitoring to catch threats early." },
                  { step: "04", title: "Respond",  desc: "Activate tested incident response playbooks to contain, investigate, and recover from incidents." },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center shadow-sm">
                      <span className="text-xs font-black text-white">{step}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">{title}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
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
              {features.map(({ label, desc }, i) => (
                <div key={label} className="group flex gap-4 p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:border-red-100 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <span className="text-xs font-black text-white">0{i + 1}</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">{label}</p>
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
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map(({ title, desc }) => (
                <div key={title} className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-red-100 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-red-600 mb-5 flex items-center justify-center shadow-md">
                    <ShieldCheck className="w-6 h-6 text-white" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
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
                <ShieldCheck className="w-8 h-8 text-white" strokeWidth={1.5} />
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
