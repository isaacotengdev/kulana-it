import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import HeroCanvas from "@/components/HeroCanvas";
import {
  Layers, Map, GitBranch, Settings, Cloud, BarChart3,
  ArrowRight, CheckCircle2, Globe, Users, Zap, Award,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Architecture | Kulana IT Solutions",
  description:
    "Design coherent technology landscapes aligned to your business strategy — TOGAF frameworks, technology roadmapping, architecture governance, and cloud strategy.",
};

const capabilities = [
  { Icon: Map,       label: "Technology Roadmapping",   color: "text-indigo-600",  bg: "bg-indigo-50",  border: "border-indigo-100" },
  { Icon: Layers,    label: "Architecture Frameworks",  color: "text-violet-600",  bg: "bg-violet-50",  border: "border-violet-100" },
  { Icon: GitBranch, label: "Solution Design",          color: "text-blue-600",    bg: "bg-blue-50",    border: "border-blue-100" },
  { Icon: Settings,  label: "Governance & Standards",   color: "text-slate-700",   bg: "bg-slate-50",   border: "border-slate-200" },
  { Icon: Cloud,     label: "Cloud Strategy",           color: "text-cyan-600",    bg: "bg-cyan-50",    border: "border-cyan-100" },
  { Icon: BarChart3, label: "Architecture Reviews",     color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
];

const features = [
  { label: "TOGAF-Aligned Architecture",   desc: "Enterprise architecture practice built on TOGAF and other leading frameworks for structured, consistent delivery." },
  { label: "Technology Roadmapping",       desc: "Multi-year technology roadmaps that align investments to business strategy and manage vendor lifecycle." },
  { label: "Solution Architecture Design", desc: "Detailed solution designs for new systems, integrations, and migrations — built to last and built to scale." },
  { label: "Architecture Governance",      desc: "Governance frameworks, architecture review boards, and standards libraries that keep your landscape coherent." },
  { label: "Cloud & Hybrid Strategy",      desc: "Define your cloud target state and migration pathway — cloud-native, hybrid, or multi-cloud." },
  { label: "Architecture Assessments",     desc: "Independent review of your current architecture to identify risks, technical debt, and improvement opportunities." },
];

const benefits = [
  { title: "Strategic Alignment",    desc: "Technology investments that directly support and enable business strategy — not the other way around." },
  { title: "Reduced Complexity",     desc: "A coherent, governed landscape that eliminates duplication and simplifies integration." },
  { title: "Faster Delivery",        desc: "Reusable patterns, clear standards, and pre-approved designs that accelerate project delivery." },
  { title: "Lower Risk",             desc: "Architecture governance that prevents rogue implementations and costly technical debt from accumulating." },
];

const stats = [
  { Icon: Globe,  value: "20+", label: "Countries Served"   },
  { Icon: Users,  value: "50+", label: "Enterprise Clients" },
  { Icon: Award,  value: "2",   label: "ISO Certifications" },
  { Icon: Zap,    value: "15+", label: "Years of Expertise" },
];

export default function EnterpriseArchitecturePage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">

        {/* Hero */}
        <section className="gradient-hero relative overflow-hidden py-28 text-white">
          <HeroCanvas variant="enterprise-arch" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-cyan-300 mb-5">
              <Layers className="w-4 h-4" /> Integration &amp; Digital Connectivity
            </span>
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">Enterprise Architecture</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
              Design a coherent technology landscape aligned to your business strategy —
              frameworks, roadmaps, and governance that guide your digital evolution.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {["TOGAF Aligned", "Cloud Strategy", "Architecture Governance", "Solution Design"].map((tag) => (
                <span key={tag} className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-white">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-300" /> {tag}
                </span>
              ))}
            </div>
            <Link href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:-translate-y-0.5">
              Request a Quote <ArrowRight className="w-4 h-4" />
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
                Build your technology on solid foundations
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Without deliberate architecture, technology landscapes grow organically into
                fragmented, expensive, and hard-to-change systems. Enterprise architecture
                provides the structure — the blueprints, the standards, and the governance — that
                keeps your landscape aligned to business intent as you grow and change.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Kulana&apos;s enterprise architects work at every level — from multi-year strategic
                roadmaps to hands-on solution designs — ensuring that every technology decision
                is consistent, deliberate, and traceable back to business value.
              </p>
              <div className="flex flex-wrap gap-3">
                {["TOGAF", "ArchiMate", "ITIL", "Cloud Native"].map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full text-xs font-semibold text-indigo-700">
                    <CheckCircle2 className="w-3 h-3" /> {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-10 border border-indigo-100">
              <div className="space-y-5">
                {[
                  { step: "01", title: "Discover",  desc: "Map your current state — applications, integrations, data flows, and technology platforms." },
                  { step: "02", title: "Design",    desc: "Define your target architecture and the principles, patterns, and standards that guide it." },
                  { step: "03", title: "Govern",    desc: "Establish review processes and architecture boards to keep implementations aligned to the design." },
                  { step: "04", title: "Evolve",    desc: "Continuously update roadmaps and designs as business priorities and technology evolve." },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center shadow-sm">
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
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">Architecture Services</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map(({ label, desc }, i) => (
                <div key={label} className="group flex gap-4 p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:border-indigo-100 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
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
                <div key={title} className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-indigo-100 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-600 mb-5 flex items-center justify-center shadow-md">
                    <Layers className="w-6 h-6 text-white" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-white border-y border-gray-100 py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map(({ Icon, value, label }) => (
                <div key={label} className="text-center">
                  <Icon className="w-6 h-6 text-blue-600 mx-auto mb-3" strokeWidth={1.75} />
                  <p className="text-3xl font-extrabold text-gray-900">{value}</p>
                  <p className="text-gray-500 text-sm mt-1">{label}</p>
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
                <Layers className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
                Ready to architect your digital future?
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Speak to our enterprise architects and start building a coherent technology landscape.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:-translate-y-0.5">
                  Request a Quote <ArrowRight className="w-4 h-4" />
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
