import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import HeroCanvas from "@/components/HeroCanvas";
import {
  RefreshCw, Search, Bot, Activity, GitMerge, BarChart3,
  ArrowRight, CheckCircle2, Globe, Users, Zap, Award,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RPA — Robotic Process Automation | Kulana IT Solutions",
  description:
    "Automate repetitive business processes at scale with Robotic Process Automation — process discovery, bot development, and intelligent automation.",
};

const capabilities = [
  { Icon: Search,    label: "Process Discovery",     color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
  { Icon: Bot,       label: "Bot Development",       color: "text-teal-600",    bg: "bg-teal-50",    border: "border-teal-100" },
  { Icon: Activity,  label: "Attended Automation",   color: "text-blue-600",    bg: "bg-blue-50",    border: "border-blue-100" },
  { Icon: RefreshCw, label: "Unattended Automation", color: "text-cyan-600",    bg: "bg-cyan-50",    border: "border-cyan-100" },
  { Icon: GitMerge,  label: "Process Orchestration", color: "text-indigo-600",  bg: "bg-indigo-50",  border: "border-indigo-100" },
  { Icon: BarChart3, label: "Analytics & Reporting", color: "text-amber-600",   bg: "bg-amber-50",   border: "border-amber-100" },
];

const features = [
  { label: "Process Discovery & Mining",      desc: "Map and analyse your current processes using process mining tools to identify the highest-value automation candidates." },
  { label: "Attended Bot Development",        desc: "Desktop bots that work alongside your staff — triggered by user actions to handle repetitive steps in real time." },
  { label: "Unattended Bot Development",      desc: "Fully autonomous bots that run on a schedule or trigger — processing thousands of transactions without human intervention." },
  { label: "Intelligent Document Processing", desc: "Combine RPA with OCR and AI to extract, validate, and route data from invoices, forms, and documents automatically." },
  { label: "Exception Handling & Logging",    desc: "Robust exception management, alerting, and audit trails that keep automation reliable and compliant." },
  { label: "Orchestration & Monitoring",      desc: "Centralised control rooms to schedule, monitor, and optimise your entire bot fleet in real time." },
];

const benefits = [
  { title: "Significant Cost Savings",  desc: "Bots work 24/7 without breaks, errors, or overtime — dramatically reducing the cost of high-volume processes." },
  { title: "Near-Zero Error Rates",     desc: "Rules-based automation eliminates the human errors that accumulate across thousands of repetitive transactions." },
  { title: "Speed & Scalability",       desc: "Scale capacity up or down instantly — bots handle peak volumes without hiring or training additional staff." },
  { title: "Employee Satisfaction",     desc: "Free your teams from tedious, repetitive work so they can focus on creative, high-value tasks." },
];

const stats = [
  { Icon: Globe,  value: "20+", label: "Countries Served"   },
  { Icon: Users,  value: "50+", label: "Enterprise Clients" },
  { Icon: Award,  value: "2",   label: "ISO Certifications" },
  { Icon: Zap,    value: "15+", label: "Years of Expertise" },
];

export default function RpaPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">

        {/* Hero */}
        <section className="gradient-hero relative overflow-hidden py-28 text-white">
          <HeroCanvas variant="rpa" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-cyan-300 mb-5">
              <RefreshCw className="w-4 h-4" /> Data &amp; AI Intelligence
            </span>
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Robotic Process Automation
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
              Automate repetitive, rule-based processes at scale. Free your teams to focus on
              high-value work while bots handle the rest — accurately, tirelessly, and at speed.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {["Process Discovery", "Attended Bots", "Unattended Bots", "Intelligent Automation"].map((tag) => (
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
                Let software robots do the heavy lifting
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Across every industry, organisations spend enormous human effort on high-volume,
                repetitive tasks — data entry, reconciliation, report generation, form processing.
                These tasks are perfect candidates for automation — and RPA makes that automation
                fast to deploy, easy to maintain, and non-invasive to existing systems.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Kulana&apos;s RPA practice combines process expertise with leading automation platforms
                to identify, design, build, and operate bots that deliver measurable ROI — typically
                within weeks of deployment.
              </p>
              <div className="flex flex-wrap gap-3">
                {["UiPath", "Power Automate", "Process Mining", "IDP"].map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full text-xs font-semibold text-emerald-700">
                    <CheckCircle2 className="w-3 h-3" /> {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-10 border border-emerald-100">
              <div className="space-y-5">
                {[
                  { step: "01", title: "Discover",   desc: "Map processes using process mining to identify automation candidates ranked by ROI and feasibility." },
                  { step: "02", title: "Design",     desc: "Document the process in detail — inputs, decision logic, exceptions, and outputs — as a bot blueprint." },
                  { step: "03", title: "Build",      desc: "Develop, test, and quality-assure the bot in a controlled environment before promoting to production." },
                  { step: "04", title: "Scale",      desc: "Monitor performance, handle exceptions, and continuously optimise — then scale to more processes." },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center shadow-sm">
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
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">RPA Services</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map(({ label, desc }, i) => (
                <div key={label} className="group flex gap-4 p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:border-emerald-100 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
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
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Why Automate</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">Benefits</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map(({ title, desc }) => (
                <div key={title} className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-emerald-100 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-600 mb-5 flex items-center justify-center shadow-md">
                    <RefreshCw className="w-6 h-6 text-white" strokeWidth={1.75} />
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
                <RefreshCw className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
                Ready to automate your processes?
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Talk to our automation specialists and discover which processes to automate first for the fastest ROI.
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
