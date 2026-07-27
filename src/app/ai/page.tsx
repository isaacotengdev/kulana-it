import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import HeroCanvas from "@/components/HeroCanvas";
import {
  Brain, Cpu, Database, MessageSquare, BarChart3, Shield,
  ArrowRight, CheckCircle2, Search, Settings, TrendingUp, Zap,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artificial Intelligence Services | Kulana IT Solutions",
  description:
    "Enterprise AI consulting, model deployment, and intelligent automation. From machine learning to generative AI, Kulana helps you operationalise AI at scale.",
};

const capabilities = [
  { Icon: Brain,        label: "AI Strategy",           color: "text-blue-600",  bg: "bg-blue-50",    border: "border-blue-100"  },
  { Icon: Cpu,          label: "ML Engineering",         color: "text-blue-600",  bg: "bg-blue-50",    border: "border-blue-100"  },
  { Icon: MessageSquare,label: "Generative AI",          color: "text-blue-600",  bg: "bg-blue-50",    border: "border-blue-100"  },
  { Icon: Database,     label: "AI Data Pipelines",      color: "text-cyan-600",  bg: "bg-cyan-50",    border: "border-cyan-100"  },
  { Icon: BarChart3,    label: "MLOps and Monitoring",   color: "text-teal-600",  bg: "bg-teal-50",    border: "border-teal-100"  },
  { Icon: Shield,       label: "Responsible AI",         color: "text-teal-600",  bg: "bg-teal-50",    border: "border-teal-100"  },
];

const features = [
  { Icon: Brain,        label: "AI Readiness Assessment",        desc: "Evaluate your data maturity, infrastructure, and organisational readiness — then map a pragmatic path to AI adoption with clear ROI." },
  { Icon: Cpu,          label: "Custom Machine Learning Models", desc: "Design, train, and deploy bespoke ML models for forecasting, classification, anomaly detection, and recommendation at enterprise scale." },
  { Icon: MessageSquare,label: "Generative AI Integration",      desc: "Embed large language models and multimodal AI into your products and workflows — from intelligent assistants to automated document processing." },
  { Icon: Database,     label: "AI Data Engineering",            desc: "Build the feature stores, data lakes, and real-time pipelines that feed your models with clean, reliable, and governed data." },
  { Icon: BarChart3,    label: "MLOps and Model Lifecycle",      desc: "Automate model training, versioning, A/B testing, and drift monitoring so your AI systems stay accurate and production-ready." },
  { Icon: Shield,       label: "AI Governance and Ethics",       desc: "Implement explainability frameworks, bias audits, and compliance controls to ensure your AI is transparent, fair, and regulatorily sound." },
];

const benefits = [
  { Icon: Zap,       bg: "bg-blue-600",    title: "Faster Decision-Making",      desc: "Real-time AI inference surfaces insights in seconds — reducing the lag between data and action across every business unit." },
  { Icon: TrendingUp,bg: "bg-teal-600",    title: "Measurable Efficiency",       desc: "Intelligent automation and predictive models cut operational overhead while improving the accuracy of high-stakes outcomes." },
  { Icon: Brain,     bg: "bg-cyan-600",    title: "Competitive Differentiation", desc: "AI-powered products and services create moats that are hard for competitors to replicate — and sticky for the customers who rely on them." },
  { Icon: Shield,    bg: "bg-cyan-500",    title: "Lower Risk",                  desc: "Responsible AI practices, robust monitoring, and human-in-the-loop controls keep your AI systems auditable and trustworthy." },
];

const faqs = [
  {
    q: "How do we know if we are ready for AI?",
    a: "AI readiness depends on three factors: data (do you have sufficient, reliable data for the use case?), infrastructure (can you support model training and inference?), and organisation (do you have the processes and people to govern AI?). We conduct an AI readiness assessment that evaluates all three dimensions and gives you a clear, honest picture of where to start.",
  },
  {
    q: "What is the difference between machine learning and generative AI?",
    a: "Machine learning models learn patterns from data to make predictions or decisions — for example, forecasting demand or detecting fraud. Generative AI models (like GPT or Claude) generate new content — text, images, code — based on a prompt. Both are valuable, and many enterprise solutions combine them.",
  },
  {
    q: "How do you select the right AI model for a use case?",
    a: "Model selection depends on the task type, data volume, latency requirements, cost, and data privacy constraints. We evaluate open-source models (Llama, Mistral), proprietary APIs (OpenAI, Anthropic, Google), and custom-trained models — and recommend the best fit rather than the most expensive option.",
  },
  {
    q: "What does model drift mean and how do you address it?",
    a: "Model drift occurs when the real-world data your model encounters in production diverges from the data it was trained on — causing predictions to become less accurate over time. We address this through MLOps pipelines that continuously monitor model performance, detect statistical drift, and trigger retraining automatically.",
  },
  {
    q: "Can AI be integrated into our existing software systems?",
    a: "Yes. We design AI integrations as APIs or embedded SDKs that connect to your existing ERP, CRM, data platforms, and customer-facing applications. AI capabilities can be surfaced through your existing interfaces without requiring a full system rebuild.",
  },
  {
    q: "How do you handle AI ethics and bias?",
    a: "Responsible AI is built into our engineering process. We audit training data for representation gaps, implement fairness metrics in model evaluation, build explainability tools for high-stakes decisions, and document model behaviour through model cards. We also design human-in-the-loop checkpoints where AI decisions carry significant risk.",
  },
  {
    q: "What ongoing support do you provide after AI deployment?",
    a: "We offer managed AI services that include model monitoring, performance reporting, drift alerts, retraining pipelines, and platform updates. We also provide regular reviews to assess whether the model continues to meet business objectives and where additional data or feature engineering could improve performance.",
  },
];

export default function AiPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">

        {/* Hero */}
        <section className="gradient-hero relative overflow-hidden py-28 text-white">
          <HeroCanvas variant="ai-cloud" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-cyan-300 mb-5">
              <Brain className="w-4 h-4" /> Data and AI Intelligence
            </span>
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Artificial Intelligence
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
              From strategy to production — we help enterprises design, build, and operate
              AI systems that generate real business value, responsibly and at scale.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {["AI Strategy", "Machine Learning", "Generative AI", "MLOps"].map((tag) => (
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
                Turn data into decisions with enterprise AI
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                AI is no longer experimental — it is a core competitive driver for enterprises
                that want to lead in their markets. But moving from pilot to production requires
                the right strategy, the right architecture, and the right operating model.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Kulana&apos;s AI practice brings together data engineering, machine learning, and
                domain expertise to deliver AI solutions that are production-grade, explainable,
                and aligned with your business objectives — not just technically impressive.
              </p>
              <div className="flex flex-wrap gap-3">
                {["TensorFlow", "PyTorch", "Azure OpenAI", "AWS SageMaker"].map((tag) => (
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
                  { Icon: Search,   step: "01", title: "Assess",  desc: "Audit your data assets, existing systems, and business problems to identify the highest-value AI opportunities." },
                  { Icon: Settings, step: "02", title: "Design",  desc: "Architect the right AI approach — custom models, fine-tuned LLMs, or AI-powered workflow automation — matched to the use case." },
                  { Icon: Cpu,      step: "03", title: "Build",   desc: "Engineer, train, evaluate, and deploy your AI solution with rigorous testing and responsible AI controls built in." },
                  { Icon: TrendingUp, step: "04", title: "Operate", desc: "Monitor model performance, retrain on new data, and continuously improve — keeping your AI accurate and impactful over time." },
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
                Enterprise AI creates measurable value across every industry and business function.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { Icon: Brain,        label: "Fraud Detection",            desc: "Real-time anomaly detection models that flag suspicious transactions before they are processed" },
                { Icon: MessageSquare,label: "Intelligent Document Processing", desc: "Automated extraction and classification of data from invoices, contracts, and regulatory filings" },
                { Icon: Cpu,          label: "Demand Forecasting",         desc: "ML models that predict demand patterns to optimise inventory, staffing, and procurement" },
                { Icon: BarChart3,    label: "Customer Churn Prediction",  desc: "Identify at-risk customers before they leave and trigger targeted retention interventions" },
                { Icon: Database,     label: "AI-Powered Search",          desc: "Semantic search across enterprise knowledge bases, documents, and product catalogues" },
                { Icon: Shield,       label: "Regulatory Compliance AI",   desc: "Automated screening and classification to support KYC, AML, and regulatory reporting" },
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
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">AI Services</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                A full-spectrum AI practice covering strategy, engineering, deployment, and responsible governance.
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
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Why AI with Kulana</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">Benefits</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Enterprise AI that is production-grade, explainable, and aligned with your business objectives.
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
              Everything you need to know about our AI practice.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group border border-gray-200 rounded-2xl overflow-hidden">
                <summary className="flex items-start justify-between gap-4 px-6 py-5 cursor-pointer list-none font-semibold text-gray-900 hover:bg-blue-50 transition-colors">
                  <span className="flex items-start gap-3">
                    <Brain className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" strokeWidth={1.75} />
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
                <Brain className="w-8 h-8 text-white" strokeWidth={1.75} />
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
                Ready to build with AI?
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Talk to our AI specialists and discover where intelligent automation and machine
                learning can create the most impact in your organisation.
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
