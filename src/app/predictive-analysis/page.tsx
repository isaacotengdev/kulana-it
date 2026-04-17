import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import HeroCanvas from "@/components/HeroCanvas";
import {
  BarChart3, TrendingUp, Brain, Database, ShieldCheck,
  Users, Zap, Target, CheckCircle2, ArrowRight, Search,
  RefreshCw, LineChart, Filter, Activity,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Predictive Analysis | Kulana IT Solutions",
  description:
    "Anticipate the future with confidence. Our predictive analysis practice empowers businesses to leverage data-driven insights for strategic decision-making and proactive planning.",
};

const capabilities = [
  { Icon: LineChart,  label: "Forecasting Models",     color: "text-blue-600",    bg: "bg-blue-50",    border: "border-blue-100" },
  { Icon: Brain,      label: "Machine Learning",        color: "text-violet-600",  bg: "bg-violet-50",  border: "border-violet-100" },
  { Icon: Database,   label: "Data Engineering",        color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
  { Icon: ShieldCheck,label: "Risk Analytics",          color: "text-red-500",     bg: "bg-red-50",     border: "border-red-100" },
  { Icon: Filter,     label: "Data Governance",         color: "text-amber-600",   bg: "bg-amber-50",   border: "border-amber-100" },
  { Icon: Activity,   label: "Real-time Dashboards",   color: "text-cyan-600",    bg: "bg-cyan-50",    border: "border-cyan-100" },
];

const benefits = [
  { Icon: BarChart3,  bg: "bg-blue-600",    title: "Data-driven Insights",          desc: "Gain actionable insights from your data to make informed business decisions and drive innovation across your organisation." },
  { Icon: Zap,        bg: "bg-emerald-600", title: "Optimised Operations",          desc: "Enhance efficiency through process optimisation and resource allocation grounded in analytics and real-world patterns." },
  { Icon: ShieldCheck,bg: "bg-red-500",     title: "Risk Management",               desc: "Identify and mitigate potential risks by analysing historical data and predicting future outcomes before they occur." },
  { Icon: TrendingUp, bg: "bg-violet-600",  title: "Predictive Modelling",          desc: "Leverage predictive analytics to anticipate future trends, mitigate risks, and capitalise on emerging opportunities." },
  { Icon: Users,      bg: "bg-amber-500",   title: "Personalised Customer Experience", desc: "Tailor customer interactions using behaviour and preference analysis to deliver more relevant, impactful engagements." },
  { Icon: Target,     bg: "bg-cyan-600",    title: "Competitive Advantage",         desc: "Stay ahead of the competition by leveraging data and analytics to innovate and adapt to market changes in real time." },
  { Icon: RefreshCw,  bg: "bg-indigo-600",  title: "Continuous Improvement",        desc: "Use analytics systematically to refine strategies, accelerate growth, and sustain performance over the long term." },
];

const useCases = [
  { emoji: "🏦", label: "Fraud Detection",         desc: "Real-time anomaly scoring across transactions" },
  { emoji: "📦", label: "Demand Forecasting",      desc: "Predict inventory needs before shortages hit" },
  { emoji: "🎯", label: "Customer Churn",          desc: "Identify at-risk customers before they leave" },
  { emoji: "⚙️", label: "Predictive Maintenance",  desc: "Pre-empt equipment failures with sensor data" },
  { emoji: "📈", label: "Sales Forecasting",       desc: "Accurate pipeline and revenue predictions" },
  { emoji: "🌐", label: "Market Intelligence",     desc: "Anticipate competitive and market shifts" },
];

const faqs = [
  {
    q: "How accurate are predictive analysis models?",
    a: "Models achieve high accuracy levels but remain probabilistic — they never guarantee 100% precision. Quality data and rigorous evaluation support reliable predictions over time.",
  },
  {
    q: "What are key challenges and limitations?",
    a: "Data quality and availability present the primary obstacles. Poor-quality or incomplete data can lead to biased or inaccurate results, making data governance a critical foundation.",
  },
  {
    q: "What resources and expertise are required?",
    a: "Implementation needs skilled data scientists, relevant data sources, robust processing infrastructure, and advanced analytics technologies tailored to your business context.",
  },
  {
    q: "How does predictive analysis comply with privacy regulations?",
    a: "Compliance involves data anonymisation, encryption, access controls, and adherence to relevant laws and standards such as GDPR and regional data protection frameworks.",
  },
  {
    q: "What are data collection best practices?",
    a: "Identify relevant sources, ensure quality and consistency, preprocess missing values and outliers, and select analytical features aligned with specific business objectives.",
  },
  {
    q: "What data types are used in predictive analysis?",
    a: "The service incorporates transactional data, demographics, behavioural information, market trends, social signals, and sensor data — combining structured and unstructured sources.",
  },
  {
    q: "What can organisations do with predictive analysis results?",
    a: "Results inform strategy, optimise processes, identify growth opportunities, manage risks, and enhance overall competitive performance across business units.",
  },
  {
    q: "What data collection pitfalls should be avoided?",
    a: "Common errors include relying on incomplete or biased data, overlooking quality issues, ignoring ethical considerations, and misaligning data efforts with business targets.",
  },
  {
    q: "What factors affect data quality?",
    a: "Inaccuracies, inconsistencies, incompleteness, duplication, bias, and errors in collection, storage, processing, or integration all impact the quality of analytical outputs.",
  },
  {
    q: "How is data integrity ensured throughout the process?",
    a: "The team implements validation, verification, cleansing, governance adherence, and integrated quality checks across workflows to maintain reliable, trustworthy data.",
  },
];

export default function PredictiveAnalysisPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="gradient-hero relative overflow-hidden py-28 text-white">
          <HeroCanvas variant="predictive-analysis" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-cyan-300 mb-5">
              <BarChart3 className="w-4 h-4" /> Our Services
            </span>
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Predictive Analysis
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
              Anticipate the future with confidence. Our predictive analysis practice empowers businesses
              to leverage data-driven insights for strategic decision-making and proactive planning.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {["Machine Learning", "Real-time Analytics", "Risk Modelling", "BI Dashboards"].map((tag) => (
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

        {/* ── What is Predictive Analysis? ─────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Overview</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6">
                What is Predictive Analysis?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Predictive analysis employs historical data, statistical algorithms, and machine learning
                techniques to forecast future outcomes or trends. Organisations use this approach to
                identify opportunities, mitigate risks, and understand customer behaviours.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                The practice applies to sales forecasting, fraud detection, risk management, marketing
                optimisation, and resource planning. In today&apos;s data-driven landscape, extracting
                insights from information is essential for competitive positioning and sound
                decision-making.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Statistical Modelling", "ML Pipelines", "Data Visualisation", "Prescriptive Analytics"].map((tag) => (
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
                  { Icon: Search,    step: "01", title: "Discovery",                desc: "We collaborate to identify the analyses aligned with your organisational objectives and uncover previously hidden, actionable data patterns." },
                  { Icon: Brain,     step: "02", title: "Implementation Planning",  desc: "Our experts develop customised implementation plans, including tool recommendations, partnership suggestions, and data governance frameworks." },
                  { Icon: TrendingUp, step: "03", title: "Delivery & Optimisation", desc: "We balance desired information depth against time investment, delivering insights and continuously refining models to improve accuracy and business impact." },
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

        {/* ── Use cases ────────────────────────────────────────────────── */}
        <section className="bg-gray-950 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3">Applications</p>
              <h2 className="text-3xl font-extrabold text-white mb-3">Real-World Use Cases</h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                We apply predictive analytics across industries and business functions to deliver tangible outcomes.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {useCases.map(({ emoji, label, desc }) => (
                <div key={label} className="group flex gap-4 p-6 rounded-2xl border border-gray-800 bg-gray-900 hover:border-blue-500/40 hover:bg-gray-800 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0 text-2xl group-hover:bg-blue-600/40 transition-colors">
                    {emoji}
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
                Experience the power of data-driven decision-making and unlock the full potential of
                your data for strategic business success.
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
              Everything you need to know about our predictive analysis practice.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group border border-gray-200 rounded-2xl overflow-hidden">
                <summary className="flex items-start justify-between gap-4 px-6 py-5 cursor-pointer list-none font-semibold text-gray-900 hover:bg-blue-50 transition-colors">
                  <span className="flex items-start gap-3">
                    <BarChart3 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" strokeWidth={1.75} />
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
                <TrendingUp className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
                Ready to unlock the power of your data?
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Partner with us to drive strategic business success through data and predictive analytics.
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
