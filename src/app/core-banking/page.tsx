import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import HeroCanvas from "@/components/HeroCanvas";
import {
  Landmark, Users, Zap, BadgeCheck, TrendingUp,
  ShieldCheck, CreditCard, RefreshCw, Globe, ArrowRight,
  CheckCircle2, Search, BarChart3, Layers, Lock,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Core Banking | Kulana IT Solutions",
  description:
    "Elevate financial operations and customer satisfaction with Kulana's cutting-edge core banking solutions, ensuring unparalleled reliability and efficiency in your banking infrastructure.",
};

const benefits = [
  {
    Icon: Users,
    bg: "bg-blue-600",
    title: "Enhanced Customer Experiences",
    desc: "Deliver personalised banking, omnichannel engagement, and seamless transactions that keep customers at the centre of every interaction.",
  },
  {
    Icon: Zap,
    bg: "bg-violet-600",
    title: "Operational Efficiency",
    desc: "Automate routine workflows, reduce manual effort, and significantly lower operational costs across your banking operations.",
  },
  {
    Icon: BadgeCheck,
    bg: "bg-emerald-600",
    title: "Regulatory Compliance",
    desc: "Built-in compliance features, comprehensive audit trails, reporting capabilities, and robust data security to meet evolving regulations.",
  },
  {
    Icon: TrendingUp,
    bg: "bg-amber-500",
    title: "Innovation and Agility",
    desc: "Rapidly launch new products, configure services flexibly, and scale with confidence to stay ahead of the competition.",
  },
];

const capabilities = [
  { Icon: CreditCard, label: "Account Management",       color: "text-blue-600",    bg: "bg-blue-50",    border: "border-blue-100" },
  { Icon: RefreshCw,  label: "Transaction Processing",   color: "text-violet-600",  bg: "bg-violet-50",  border: "border-violet-100" },
  { Icon: ShieldCheck,label: "Fraud & AML Controls",     color: "text-red-500",     bg: "bg-red-50",     border: "border-red-100" },
  { Icon: Globe,      label: "Digital Channel Ready",    color: "text-cyan-600",    bg: "bg-cyan-50",    border: "border-cyan-100" },
  { Icon: BarChart3,  label: "Regulatory Reporting",     color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
  { Icon: Layers,     label: "Microservices Architecture",color: "text-amber-600",  bg: "bg-amber-50",   border: "border-amber-100" },
];

const modules = [
  { Icon: Landmark,   label: "Core Ledger",          desc: "Real-time account and general ledger processing" },
  { Icon: CreditCard, label: "Loans & Deposits",     desc: "End-to-end origination, servicing and collections" },
  { Icon: Globe,      label: "Digital Channels",     desc: "Mobile, internet, and API-first banking" },
  { Icon: Users,      label: "CRM",                  desc: "360° customer relationship management" },
  { Icon: Lock,       label: "Compliance & Risk",    desc: "AML, KYC, fraud detection and audit" },
  { Icon: BarChart3,  label: "Analytics & BI",       desc: "Dashboards, reporting, and predictive insights" },
];

const faqs = [
  {
    q: "What are the key features of a modern core banking system?",
    a: "Modern core banking systems include CRM, account management, transaction processing, loan origination, payment processing, compliance controls, reporting, and analytics — all integrated in a single platform.",
  },
  {
    q: "How does core banking support digital transformation?",
    a: "Core banking digitises banking operations end-to-end, enabling digital channel launches and leveraging APIs, microservices, and cloud technologies to create truly connected financial services.",
  },
  {
    q: "What are the common challenges in core banking migration?",
    a: "Typical challenges include data migration complexities, legacy system integration, managing downtime risk, staff training, regulatory compliance, and change management across the organisation.",
  },
  {
    q: "How does core banking improve customer retention?",
    a: "By enabling personalised experiences, tailored product offerings, and proactive advice powered by analytics and AI, banks can build deeper, longer-lasting customer relationships.",
  },
  {
    q: "What role does core banking play in digital innovations?",
    a: "Core banking is the foundation for mobile banking, internet banking, digital wallets, peer-to-peer payments, and automated financial advice — enabling banks to compete with digital challengers.",
  },
  {
    q: "How does core banking support regulatory compliance?",
    a: "Modern platforms include AML controls, KYC verification, fraud detection, real-time transaction monitoring, and automated regulatory reporting to keep institutions continuously compliant.",
  },
  {
    q: "What post-implementation support does Kulana provide?",
    a: "We provide ongoing system monitoring, performance tuning, platform updates, staff training, and dedicated technical support to ensure your core banking investment delivers long-term value.",
  },
  {
    q: "How does core banking optimise infrastructure?",
    a: "Through cloud-based solutions, scalable microservices architectures, containerisation, serverless computing, and agile delivery practices that reduce infrastructure overhead.",
  },
  {
    q: "What are the emerging trends in core banking?",
    a: "Cloud-native architectures, API-first strategies, modular composable platforms, open banking ecosystems, and early-stage decentralised finance (DeFi) integrations are reshaping the industry.",
  },
  {
    q: "What are the implementation risks and how are they managed?",
    a: "Risks include project delays, cost overruns, data migration errors, downtime, security vulnerabilities, and compliance gaps. Kulana mitigates these through rigorous planning, proven frameworks, and transparent project governance.",
  },
];

export default function CoreBankingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="gradient-hero relative overflow-hidden py-28 text-white">
          <HeroCanvas variant="core-banking" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-cyan-300 mb-5">
              <Landmark className="w-4 h-4" /> Our Services
            </span>
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">Core Banking</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
              Elevate financial operations and customer satisfaction with our cutting-edge core banking
              solutions, ensuring unparalleled reliability and efficiency in your banking infrastructure.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {["Temenos Certified", "API-First", "Cloud-Native", "Regulatory Ready"].map((tag) => (
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

        {/* ── What is Core Banking ─────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Overview</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6">
                What is Core Banking Practice?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Core banking refers to the centralised processing and management of banking transactions,
                customer accounts, and financial products. It integrates account opening, deposits, loans,
                and payments into a single, cohesive platform.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                The practice helps financial institutions — from retail banks and credit unions to
                digital challengers — modernise their systems using the latest technologies and industry
                best practices to stay competitive and compliant.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Retail Banking", "Digital Channels", "Open Banking", "Payments"].map((tag) => (
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
                  { Icon: Search,    step: "01", title: "Assessment",      desc: "We assess your current systems, processes, and infrastructure to understand where you are today." },
                  { Icon: BarChart3, step: "02", title: "Strategy",        desc: "Our consultants align business objectives, customer needs, regulatory requirements, and your technology landscape into a tailored core banking strategy." },
                  { Icon: Zap,       step: "03", title: "Implementation",  desc: "Using agile methodologies, industry-leading platforms, and proven frameworks, we deliver collaboratively, iteratively, and transparently." },
                ].map(({ Icon: StepIcon, step, title, desc }) => (
                  <div key={step} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-sm">
                      <StepIcon className="w-4 h-4 text-white" strokeWidth={2} />
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

        {/* ── Platform: Temenos ────────────────────────────────────────── */}
        <section className="bg-gray-950 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3">Powered By</p>
                <h2 className="text-3xl font-extrabold text-white mb-5">
                  Built on the World&apos;s Leading Core Banking Platform
                </h2>
                <p className="text-gray-400 leading-relaxed mb-8">
                  Kulana is a certified Temenos implementation partner. Temenos powers over 3,000
                  financial institutions across 150 countries — including some of the world&apos;s largest
                  retail, corporate, and digital banks.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "3,000+", label: "Financial Institutions" },
                    { value: "150",    label: "Countries" },
                    { value: "1B+",    label: "People Banked" },
                    { value: "Top 10", label: "Global Banks" },
                  ].map(({ value, label }) => (
                    <div key={label} className="bg-gray-900 border border-gray-800 rounded-2xl p-4">
                      <p className="text-2xl font-extrabold text-white">{value}</p>
                      <p className="text-gray-400 text-sm mt-0.5">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-8">
                <div className="bg-white rounded-3xl p-10 shadow-2xl flex items-center justify-center">
                  <Image
                    src="/logos/temenos.png"
                    alt="Temenos"
                    width={220}
                    height={80}
                    className="h-16 w-auto object-contain"
                  />
                </div>
                <div className="flex gap-3 flex-wrap justify-center">
                  {["Certified Partner", "Implementation", "Support & Managed Services"].map((b) => (
                    <span key={b} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-xs font-semibold text-white">
                      <CheckCircle2 className="w-3 h-3 text-cyan-400" /> {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Platform Modules ─────────────────────────────────────────── */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Platform</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
                Core Modules We Deliver
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Every module is configurable to your institution&apos;s requirements — from a single-module
                deployment to a full platform transformation.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {modules.map(({ Icon, label, desc }, i) => (
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

        {/* ── Benefits ─────────────────────────────────────────────────── */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Why Modernise</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">Benefits</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Modernising your core banking infrastructure delivers measurable impact across every
                dimension of your financial operations.
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

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-lg">
              Everything you need to know about our core banking practice.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group border border-gray-200 rounded-2xl overflow-hidden">
                <summary className="flex items-start justify-between gap-4 px-6 py-5 cursor-pointer list-none font-semibold text-gray-900 hover:bg-blue-50 transition-colors">
                  <span className="flex items-start gap-3">
                    <Landmark className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" strokeWidth={1.75} />
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

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-10 md:p-14 text-white text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Landmark className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
                Ready to modernise your core banking?
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Talk to our experts and get a tailored strategy for your institution.
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
