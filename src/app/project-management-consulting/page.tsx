import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import HeroCanvas from "@/components/HeroCanvas";
import {
  ClipboardList, CheckCircle2, ArrowRight, Search,
  TrendingUp, Zap, BarChart3, Users, ShieldCheck,
  Kanban, Calendar, Target, Award, RefreshCw, Settings,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Management Consulting | Kulana IT Solutions",
  description:
    "Unlock the full potential of your project management with expert PMO consulting. Comprehensive services to establish, optimise, and transform your PMO.",
};

const capabilities = [
  { Icon: Kanban,       label: "PMO Setup & Design",     color: "text-blue-600",    bg: "bg-blue-50",    border: "border-blue-100" },
  { Icon: Calendar,     label: "Portfolio Management",   color: "text-violet-600",  bg: "bg-violet-50",  border: "border-violet-100" },
  { Icon: Target,       label: "Governance Frameworks",  color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
  { Icon: Users,        label: "Stakeholder Management", color: "text-cyan-600",    bg: "bg-cyan-50",    border: "border-cyan-100" },
  { Icon: ShieldCheck,  label: "Risk Management",        color: "text-red-500",     bg: "bg-red-50",     border: "border-red-100" },
  { Icon: BarChart3,    label: "Performance Metrics",    color: "text-amber-600",   bg: "bg-amber-50",   border: "border-amber-100" },
];

const benefits = [
  { Icon: CheckCircle2, bg: "bg-blue-600",    title: "Improved Project Delivery",           desc: "Standardised practices, governance frameworks, and tools minimise risks and achieve project success across your portfolio." },
  { Icon: Zap,          bg: "bg-emerald-600", title: "Increased Organisational Agility",    desc: "Automation streamlines workflows, reduces manual effort, optimises resources, and improves productivity organisation-wide." },
  { Icon: BarChart3,    bg: "bg-violet-600",  title: "Enhanced Decision-Making",            desc: "Executives gain visibility, insights, and analytics for informed resource allocation and investment prioritisation." },
  { Icon: TrendingUp,   bg: "bg-amber-500",   title: "Maximisation of ROI",                 desc: "Aligns projects with strategic objectives, optimises resource allocation, and monitors performance metrics to maximise returns." },
];

const pmoTypes = [
  {
    type: "Supportive PMO",
    icon: "📋",
    color: "border-blue-200 bg-blue-50",
    tagColor: "bg-blue-100 text-blue-700",
    desc: "Provides guidance, templates, and best practices. Teams retain autonomy while benefiting from centralised knowledge and tools.",
    traits: ["Template library", "Training & coaching", "Best practice sharing", "Advisory support"],
  },
  {
    type: "Controlling PMO",
    icon: "🎛️",
    color: "border-violet-200 bg-violet-50",
    tagColor: "bg-violet-100 text-violet-700",
    desc: "Focuses on governance and compliance. Enforces standards, monitors adherence, and ensures consistency across the portfolio.",
    traits: ["Governance enforcement", "Compliance tracking", "Process standardisation", "Audit & review"],
  },
  {
    type: "Directive PMO",
    icon: "🚀",
    color: "border-emerald-200 bg-emerald-50",
    tagColor: "bg-emerald-100 text-emerald-700",
    desc: "Actively manages projects and makes key decisions. Highest control level, used for strategic or high-risk initiatives.",
    traits: ["Direct project management", "Resource ownership", "Executive alignment", "End-to-end delivery"],
  },
];

const methodologies = [
  { Icon: RefreshCw, label: "Agile / Scrum",    desc: "Iterative delivery for dynamic, fast-changing projects" },
  { Icon: Calendar,  label: "Waterfall / PRINCE2", desc: "Structured, sequential delivery for defined-scope work" },
  { Icon: Kanban,    label: "Hybrid",           desc: "Blending agile and traditional for complex programmes" },
  { Icon: Settings,  label: "SAFe / LeSS",      desc: "Scaled agile frameworks for enterprise transformations" },
];

const faqs = [
  {
    q: "What is the role of a PMO in an organisation?",
    a: "A Project Management Office (PMO) is responsible for standardising project management practices, providing governance, and supporting project delivery across the organisation.",
  },
  {
    q: "What are the different types of PMOs?",
    a: "Common types include supportive PMOs (providing guidance and templates), controlling PMOs (focusing on governance and compliance), and directive PMOs (actively involved in delivery and decision-making).",
  },
  {
    q: "How can PMO consulting help organisations improve project delivery?",
    a: "Consulting establishes standardised practices and governance frameworks, providing expertise to optimise planning, execution, and control processes for consistent, successful delivery.",
  },
  {
    q: "What are the key components of an effective PMO?",
    a: "Project governance, portfolio management, resource management, risk management, stakeholder management, and performance measurement are all essential components.",
  },
  {
    q: "How can organisations measure PMO effectiveness?",
    a: "Assessment of KPIs including delivery performance, success rates, customer satisfaction, resource utilisation, and ROI provides a comprehensive picture of PMO impact.",
  },
  {
    q: "What are common challenges in establishing a PMO?",
    a: "Defining scope and mandate, gaining executive support, managing expectations, building capabilities, and overcoming resistance to change are the most frequent obstacles.",
  },
  {
    q: "How can PMO consulting help overcome resistance to change?",
    a: "Through change management expertise, communication strategies, and stakeholder engagement plans that demonstrate the benefits of the initiative to all affected parties.",
  },
  {
    q: "What are emerging trends in PMO consulting?",
    a: "Emerging trends include the adoption of agile and hybrid project management methodologies, the use of predictive analytics and AI for project planning and risk management, and value-stream-focused PMO models.",
  },
  {
    q: "How can organisations ensure long-term PMO success?",
    a: "Invest in ongoing support, training, professional development, continuous process improvement, and strategic alignment reviews to keep the PMO delivering value.",
  },
  {
    q: "What are potential risks associated with PMO consulting engagements?",
    a: "Scope creep, budget overruns, timeline delays, stakeholder conflicts, and change resistance require thorough risk assessments and experienced consultants to navigate effectively.",
  },
];

export default function ProjectManagementPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="gradient-hero relative overflow-hidden py-28 text-white">
          <HeroCanvas variant="project-management" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-cyan-300 mb-5">
              <ClipboardList className="w-4 h-4" /> Our Services
            </span>
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Project Management<br />Consulting
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
              Unlock the full potential of your project management with expert PMO consulting. We provide
              comprehensive services to help organisations establish, optimise, and transform their PMOs
              to deliver successful projects and drive strategic initiatives.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {["PMO Setup", "Agile & Waterfall", "Risk Governance", "Portfolio Mgmt"].map((tag) => (
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

        {/* ── What is PMO? ─────────────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Overview</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6">
                What is a Project Management Office?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                A Project Management Office functions as a centralised organisational unit managing
                standardised practices, governance, and project support. It ensures that projects across
                the business are delivered consistently and aligned to strategic objectives.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Kulana's PMO consulting assists organisations in establishing new offices, revitalising
                existing ones, or implementing organisational transformation initiatives — partnering
                with you to achieve your project goals and propel your business forward.
              </p>
              <div className="flex flex-wrap gap-3">
                {["PMO Establishment", "Process Optimisation", "Change Management", "Training & Coaching"].map((tag) => (
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
                  { Icon: Search,       step: "01", title: "Assessment Phase",     desc: "Experienced consultants conduct thorough analysis of current project management capabilities, processes, maturity levels, portfolio assessment, and governance structure." },
                  { Icon: Target,       step: "02", title: "Strategy Development", desc: "A tailored PMO consulting strategy aligned with organisational goals, culture, and strategic priorities — delivering a roadmap with tangible business value." },
                  { Icon: ClipboardList, step: "03", title: "Implementation",      desc: "A collaborative, iterative approach ensuring stakeholder engagement and alignment while implementing best practices, tools, and processes for effective governance." },
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

        {/* ── PMO Types ────────────────────────────────────────────────── */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Structure</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
                Types of PMO We Deliver
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                We help you choose and build the right PMO model for your organisation&apos;s
                maturity, culture, and strategic goals.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-6">
              {pmoTypes.map(({ type, icon, color, tagColor, desc, traits }) => (
                <div key={type} className={`rounded-3xl border p-8 ${color}`}>
                  <div className="flex items-start justify-between mb-5">
                    <span className="text-3xl">{icon}</span>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${tagColor}`}>{type}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{desc}</p>
                  <ul className="space-y-2">
                    {traits.map((t) => (
                      <li key={t} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Methodologies ────────────────────────────────────────────── */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Approach</p>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Delivery Methodologies</h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                We match the methodology to your project type — not the other way around.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {methodologies.map(({ Icon, label, desc }) => (
                <div key={label} className="group flex flex-col gap-4 p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:border-blue-100 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <Icon className="w-5 h-5 text-white" strokeWidth={1.75} />
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

        {/* ── Benefits ─────────────────────────────────────────────────── */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Why It Matters</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">Benefits</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                A well-established PMO delivers measurable impact across project delivery,
                decision-making, and return on investment.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map(({ Icon, bg, title, desc }) => (
                <div key={title} className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
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
              Everything you need to know about our PMO consulting practice.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group border border-gray-200 rounded-2xl overflow-hidden">
                <summary className="flex items-start justify-between gap-4 px-6 py-5 cursor-pointer list-none font-semibold text-gray-900 hover:bg-blue-50 transition-colors">
                  <span className="flex items-start gap-3">
                    <ClipboardList className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" strokeWidth={1.75} />
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
                <Award className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
                Ready to transform your project management?
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Partner with us to achieve your project goals and propel your business forward.
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
