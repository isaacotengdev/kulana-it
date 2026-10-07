import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
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
    bg: "bg-teal-600",
    title: "Operational Efficiency",
    desc: "Automate routine workflows, reduce manual effort, and significantly lower operational costs across your banking operations.",
  },
  {
    Icon: BadgeCheck,
    bg: "bg-blue-600",
    title: "Regulatory Compliance",
    desc: "Built-in compliance features, comprehensive audit trails, reporting capabilities, and robust data security to meet evolving regulations.",
  },
  {
    Icon: TrendingUp,
    bg: "bg-cyan-500",
    title: "Innovation and Agility",
    desc: "Rapidly launch new products, configure services flexibly, and scale with confidence to stay ahead of the competition.",
  },
];

const capabilities = [
  { Icon: CreditCard, label: "Account Management",       color: "text-blue-600",    bg: "bg-blue-50",    border: "border-blue-100" },
  { Icon: RefreshCw,  label: "Transaction Processing",   color: "text-teal-600",    bg: "bg-teal-50",    border: "border-teal-100"   },
  { Icon: ShieldCheck,label: "Fraud and AML Controls",    color: "text-blue-600",    bg: "bg-blue-50",    border: "border-blue-100" },
  { Icon: Globe,      label: "Digital Channel Ready",    color: "text-cyan-600",    bg: "bg-cyan-50",    border: "border-cyan-100" },
  { Icon: BarChart3,  label: "Regulatory Reporting",     color: "text-teal-600",    bg: "bg-teal-50",    border: "border-teal-100" },
  { Icon: Layers,     label: "Microservices Architecture",color: "text-cyan-600",   bg: "bg-cyan-50",    border: "border-cyan-100"  },
];

const modules = [
  { Icon: Landmark,   label: "Core Ledger",          desc: "Real-time account and general ledger processing" },
  { Icon: CreditCard, label: "Loans and Deposits",    desc: "End-to-end origination, servicing and collections" },
  { Icon: Globe,      label: "Digital Channels",     desc: "Mobile, internet, and API-first banking" },
  { Icon: Users,      label: "CRM",                  desc: "360° customer relationship management" },
  { Icon: Lock,       label: "Compliance and Risk",   desc: "AML, KYC, fraud detection and audit" },
  { Icon: BarChart3,  label: "Analytics and BI",      desc: "Dashboards, reporting, and predictive insights" },
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

const MF = "var(--font-manrope), sans-serif";

export default function CoreBankingPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden" style={{ height: "100vh" }}>
          <Image
            src="/images/Service_Core & Enterprise Systems/core_banking/Hero image Core banking_2560×1440px.webp"
            alt="Core Banking"
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
                Core Banking
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


        {/* ── Overview ─────────────────────────────────────────────────── */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs tracking-[0.18em] uppercase mb-6" style={{ fontFamily: MF, fontWeight: 700, color: "#200044" }}>Overview</p>
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6" style={{ fontFamily: MF }}>
              What is Core Banking Practice?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4" style={{ fontFamily: MF }}>
              We help financial institutions modernise and manage the systems at the heart of their banking operations — from customer accounts and deposits to loans, payments and financial products. Our core banking solutions bring these critical functions together into a secure, integrated and scalable platform.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10" style={{ fontFamily: MF }}>
              Working with retail banks, credit unions and digital challengers, we combine deep industry expertise with modern technology and proven best practices to improve efficiency, enhance customer experiences and help institutions stay competitive, resilient and compliant.
            </p>
            <div className="flex gap-3 w-full">
              {["Retail Banking", "Digital Channels", "Open Banking", "Payments"].map((tag) => (
                <span key={tag} className="flex-1 flex items-center justify-center py-2.5 rounded-lg text-sm font-semibold text-gray-800 text-center"
                  style={{ fontFamily: MF, border: "1.5px solid #57D9D4" }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── How to Get Started ───────────────────────────────────────── */}
        <section className="py-16 lg:py-20" style={{ background: "#200044" }}>
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs tracking-[0.18em] uppercase mb-14" style={{ fontFamily: MF, fontWeight: 700, color: "#ffffff" }}>
              How to Get Started
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
              {[
                { step: "01", title: "Assessment",     desc: "We assess your current systems, processes, and infrastructure to understand where you are today." },
                { step: "02", title: "Strategy",       desc: "Our consultants align business objectives, customer needs, regulatory requirements, and your technology landscape into a tailored core banking strategy." },
                { step: "03", title: "Implementation", desc: "Using agile methodologies, industry-leading platforms, and proven frameworks, we deliver collaboratively, iteratively, and transparently." },
              ].map(({ step, title, desc }) => (
                <div key={step}>
                  <p className="text-5xl lg:text-6xl font-light mb-3 leading-none" style={{ fontFamily: MF, color: "#a198af" }}>{step}</p>
                  <p className="text-xl lg:text-2xl font-semibold mb-4" style={{ fontFamily: MF, color: "#57D9D4" }}>{title}</p>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: MF, color: "rgba(255,255,255,0.75)" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Powered By ───────────────────────────────────────────────── */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs tracking-[0.18em] uppercase mb-10" style={{ fontFamily: MF, fontWeight: 700, color: "#200044" }}>Powered By</p>
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-14">
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-snug" style={{ fontFamily: MF }}>
                Built on the World&apos;s Leading Core Banking Platform
              </h2>
              <div>
                <p className="text-gray-600 leading-relaxed mb-8" style={{ fontFamily: MF }}>
                  Kulana is a certified Temenos implementation partner. Temenos powers over 3,000 financial institutions across 150 countries — including some of the world&apos;s largest retail, corporate, and digital banks.
                </p>
                <Image src="/images/Service_Core & Enterprise Systems/core_banking/Temenos logo.svg" alt="Temenos" width={160} height={48} className="h-10 w-auto object-contain" />
              </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-10 border-t border-gray-100">
              {[
                { value: "3,000+", label: "Financial Institutions" },
                { value: "150",    label: "Countries" },
                { value: "1B+",    label: "People Banked" },
                { value: "Top 10", label: "Global Banks" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1" style={{ fontFamily: MF }}>{value}</p>
                  <p className="text-sm text-gray-500" style={{ fontFamily: MF }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Platform Modules ─────────────────────────────────────────── */}
        <section className="py-16 lg:py-20" style={{ background: "#f5f5f5" }}>
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs tracking-[0.18em] uppercase mb-8" style={{ fontFamily: MF, fontWeight: 700, color: "#200044" }}>Platform</p>
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-snug" style={{ fontFamily: MF }}>
                Core Modules<br />We Deliver
              </h2>
              <p className="text-gray-600 leading-relaxed lg:pt-2" style={{ fontFamily: MF }}>
                Every module is configurable to your institution&apos;s requirements — from a single-module deployment to a full platform transformation.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {modules.map(({ label, desc }) => (
                <div key={label} className="bg-white rounded-xl p-6 border border-gray-100">
                  <p className="font-semibold text-gray-900 mb-2" style={{ fontFamily: MF }}>{label}</p>
                  <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: MF }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Benefits ─────────────────────────────────────────────────── */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs tracking-[0.18em] uppercase mb-8" style={{ fontFamily: MF, fontWeight: 700, color: "#200044" }}>Why Modernise</p>
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-snug" style={{ fontFamily: MF }}>Benefits</h2>
              <p className="text-gray-600 leading-relaxed lg:pt-2" style={{ fontFamily: MF }}>
                Modernising your core banking infrastructure delivers measurable impact across every dimension of your financial operations.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map(({ title, desc }) => (
                <div key={title} className="rounded-xl p-6" style={{ border: "1.5px solid #57D9D4" }}>
                  <p className="font-semibold mb-2" style={{ fontFamily: MF, color: "#57D9D4" }}>{title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: MF }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
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
                  <Image src="/images/Service_Core & Enterprise Systems/core_banking/Hero image Core banking_2560×1440px.webp" alt="Core Banking" fill className="object-cover object-center" sizes="320px" />
                </div>
              </div>
              <div>
                <p className="text-gray-600 leading-relaxed mb-10" style={{ fontFamily: MF }}>
                  Find answers to common questions about our core banking services and approach.
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

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section style={{ background: "#57D9D4" }}>
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-20">
              <h2
                className="text-3xl lg:text-4xl font-extrabold leading-tight lg:w-[40%] flex-shrink-0"
                style={{ fontFamily: MF, color: "#200044" }}
              >
                Ready to modernise your core banking?
              </h2>
              <div className="flex-1">
                <p className="text-sm lg:text-base mb-6 leading-relaxed" style={{ fontFamily: MF, color: "#200044" }}>
                  Talk to our experts and get a tailored strategy for your institution.
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
