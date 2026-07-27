import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import HeroCanvas from "@/components/HeroCanvas";
import {
  RefreshCw, Search, Bot, Activity, GitMerge, BarChart3,
  ArrowRight, CheckCircle2, Settings, Zap, TrendingUp, Users,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RPA — Robotic Process Automation | Kulana IT Solutions",
  description:
    "Automate repetitive business processes at scale with Robotic Process Automation — process discovery, bot development, and intelligent automation.",
};

const capabilities = [
  { Icon: Search,    label: "Process Discovery",     color: "text-blue-600",    bg: "bg-blue-50",    border: "border-blue-100" },
  { Icon: Bot,       label: "Bot Development",       color: "text-teal-600",    bg: "bg-teal-50",    border: "border-teal-100" },
  { Icon: Activity,  label: "Attended Automation",   color: "text-blue-600",    bg: "bg-blue-50",    border: "border-blue-100" },
  { Icon: RefreshCw, label: "Unattended Automation", color: "text-cyan-600",    bg: "bg-cyan-50",    border: "border-cyan-100" },
  { Icon: GitMerge,  label: "Process Orchestration", color: "text-teal-600",    bg: "bg-teal-50",    border: "border-teal-100"   },
  { Icon: BarChart3, label: "Analytics and Reporting", color: "text-cyan-600",    bg: "bg-cyan-50",    border: "border-cyan-100"   },
];

const features = [
  { Icon: Search,    label: "Process Discovery and Mining",     desc: "Map and analyse your current processes using process mining tools to identify the highest-value automation candidates." },
  { Icon: Activity,  label: "Attended Bot Development",        desc: "Desktop bots that work alongside your staff — triggered by user actions to handle repetitive steps in real time." },
  { Icon: Bot,       label: "Unattended Bot Development",      desc: "Fully autonomous bots that run on a schedule or trigger — processing thousands of transactions without human intervention." },
  { Icon: GitMerge,  label: "Intelligent Document Processing", desc: "Combine RPA with OCR and AI to extract, validate, and route data from invoices, forms, and documents automatically." },
  { Icon: RefreshCw, label: "Exception Handling and Logging",   desc: "Robust exception management, alerting, and audit trails that keep automation reliable and compliant." },
  { Icon: BarChart3, label: "Orchestration and Monitoring",     desc: "Centralised control rooms to schedule, monitor, and optimise your entire bot fleet in real time." },
];

const benefits = [
  { Icon: Zap,       bg: "bg-blue-600",    title: "Significant Cost Savings",  desc: "Bots work 24/7 without breaks, errors, or overtime — dramatically reducing the cost of high-volume processes." },
  { Icon: TrendingUp,bg: "bg-teal-600",    title: "Near-Zero Error Rates",     desc: "Rules-based automation eliminates the human errors that accumulate across thousands of repetitive transactions." },
  { Icon: RefreshCw, bg: "bg-cyan-600",    title: "Speed and Scalability",      desc: "Scale capacity up or down instantly — bots handle peak volumes without hiring or training additional staff." },
  { Icon: Users,     bg: "bg-cyan-500",    title: "Employee Satisfaction",     desc: "Free your teams from tedious, repetitive work so they can focus on creative, high-value tasks." },
];

const faqs = [
  {
    q: "What types of processes are best suited for RPA?",
    a: "RPA works best on processes that are rule-based (following defined logic), high-volume, repetitive, involve structured data (forms, spreadsheets, databases), and currently require human interaction with digital systems. Ideal candidates include invoice processing, data entry, report generation, employee onboarding, and reconciliation tasks.",
  },
  {
    q: "How quickly can RPA deliver return on investment?",
    a: "Most RPA deployments deliver measurable ROI within weeks of going live. Attended bots can be deployed in as little as 2–4 weeks for simple processes. Complex unattended automation programmes with multiple integrations typically take 2–3 months end-to-end. We help you prioritise processes by ROI to maximise early returns.",
  },
  {
    q: "What platforms do you use for RPA development?",
    a: "We work primarily with UiPath and Microsoft Power Automate — two of the most widely adopted RPA platforms globally. Platform selection depends on your existing Microsoft licensing, IT environment, and the complexity of automation required. Both platforms support attended, unattended, and hybrid automation patterns.",
  },
  {
    q: "Is RPA the same as AI or machine learning?",
    a: "No — traditional RPA follows explicit rules and cannot handle variation or ambiguity without human guidance. However, combining RPA with AI capabilities (such as OCR, NLP, and ML models) creates Intelligent Process Automation (IPA) that can handle unstructured inputs like handwritten forms or variable document formats.",
  },
  {
    q: "What happens when a bot encounters an exception?",
    a: "We design robust exception handling into every bot — unrecognised inputs trigger defined fallback paths, human review queues, or alert escalations rather than silent failures. Our monitoring platforms provide real-time visibility into bot performance, exception rates, and processing volumes.",
  },
  {
    q: "Does RPA require changes to our existing systems?",
    a: "Typically no — one of RPA's key advantages is that bots interact with your existing systems through the same user interface that humans use. This means you can automate without API access or system modifications. However, where APIs are available, we prefer them for greater reliability and performance.",
  },
  {
    q: "How is bot security managed?",
    a: "Bots operate under dedicated service accounts with the minimum privileges required. Credentials are stored in encrypted vaults — never hardcoded. All bot activity is logged for audit purposes. We follow ISO 27001-aligned security practices for all automation development and deployment.",
  },
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
              <RefreshCw className="w-4 h-4" /> Data and AI Intelligence
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
                  { Icon: Search,   step: "01", title: "Discover",   desc: "Map processes using process mining to identify automation candidates ranked by ROI and feasibility." },
                  { Icon: Settings, step: "02", title: "Design",     desc: "Document the process in detail — inputs, decision logic, exceptions, and outputs — as a bot blueprint." },
                  { Icon: Bot,      step: "03", title: "Build",      desc: "Develop, test, and quality-assure the bot in a controlled environment before promoting to production." },
                  { Icon: TrendingUp, step: "04", title: "Scale",    desc: "Monitor performance, handle exceptions, and continuously optimise — then scale to more processes." },
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

        {/* Dark section — real-world use cases */}
        <section className="bg-gray-950 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3">Applications</p>
              <h2 className="text-3xl font-extrabold text-white mb-3">Real-World Use Cases</h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                RPA delivers rapid, measurable ROI across industries wherever repetitive digital work exists.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { Icon: BarChart3, label: "Finance and Accounts Payable",  desc: "Automated invoice extraction, 3-way matching, and payment processing with near-zero error rates" },
                { Icon: Users,     label: "HR Onboarding",                desc: "End-to-end employee onboarding — from system provisioning to document generation and compliance checks" },
                { Icon: RefreshCw, label: "Data Reconciliation",          desc: "Automated reconciliation across ERP, banking, and operational systems at month-end close" },
                { Icon: GitMerge,  label: "Claims Processing",            desc: "Insurance claims intake, validation, and routing — reducing cycle time from days to minutes" },
                { Icon: Activity,  label: "Regulatory Reporting",         desc: "Automated extraction, formatting, and submission of compliance reports to regulatory bodies" },
                { Icon: Search,    label: "Customer Data Management",     desc: "Synchronisation of customer records across CRM, ERP, and support systems to maintain a single source of truth" },
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
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">RPA Services</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                End-to-end automation capability — from process discovery to bot deployment and ongoing managed operations.
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
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Why Automate</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">Benefits</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                RPA delivers fast, measurable impact on cost, quality, and employee experience.
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
              Everything you need to know about our RPA and intelligent automation practice.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group border border-gray-200 rounded-2xl overflow-hidden">
                <summary className="flex items-start justify-between gap-4 px-6 py-5 cursor-pointer list-none font-semibold text-gray-900 hover:bg-blue-50 transition-colors">
                  <span className="flex items-start gap-3">
                    <RefreshCw className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" strokeWidth={1.75} />
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
                <RefreshCw className="w-8 h-8 text-white" strokeWidth={1.75} />
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
                Ready to automate your processes?
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Talk to our automation specialists and discover which processes to automate first for the fastest ROI.
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
