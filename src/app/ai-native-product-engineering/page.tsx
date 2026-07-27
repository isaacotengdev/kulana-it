import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import HeroCanvas from "@/components/HeroCanvas";
import {
  Cpu, Brain, Zap, MessageSquare, Eye, GitMerge,
  ArrowRight, CheckCircle2, Search, Settings, TrendingUp, Shield,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI-Native Product Engineering | Kulana IT Solutions",
  description:
    "Build products with intelligence at their core — LLM integration, machine learning, generative AI, and AI product strategy.",
};

const capabilities = [
  { Icon: Brain,        label: "LLM Integration",       color: "text-blue-600",    bg: "bg-blue-50",    border: "border-blue-100"  },
  { Icon: Cpu,          label: "ML Model Development",  color: "text-blue-600",    bg: "bg-blue-50",    border: "border-blue-100"  },
  { Icon: MessageSquare,label: "Generative AI",         color: "text-teal-600",    bg: "bg-teal-50",    border: "border-teal-100"  },
  { Icon: Eye,          label: "Computer Vision",        color: "text-blue-600",    bg: "bg-blue-50",    border: "border-blue-100"  },
  { Icon: GitMerge,     label: "AI Integration",        color: "text-cyan-600",    bg: "bg-cyan-50",    border: "border-cyan-100"  },
  { Icon: Zap,          label: "AI Product Strategy",   color: "text-cyan-600",    bg: "bg-cyan-50",    border: "border-cyan-100"  },
];

const features = [
  { Icon: Brain,        label: "LLM and Generative AI Integration", desc: "Embed large language models — GPT, Claude, Gemini — into your products and workflows with robust, production-grade architectures." },
  { Icon: Cpu,          label: "Machine Learning Development",    desc: "Build and deploy custom ML models for classification, prediction, recommendation, and anomaly detection." },
  { Icon: Zap,          label: "AI Product Strategy",             desc: "Define where AI creates the most value in your product, and build a roadmap to get there responsibly and at pace." },
  { Icon: Eye,          label: "Computer Vision",                 desc: "Document processing, visual inspection, and image recognition — trained on your data and deployed in your environment." },
  { Icon: MessageSquare,label: "Natural Language Processing",     desc: "Extract, classify, and understand unstructured text at scale — from financial documents to customer communications." },
  { Icon: GitMerge,     label: "RAG and Knowledge Systems",        desc: "Build retrieval-augmented generation systems that ground AI responses in your proprietary data and knowledge bases." },
];

const benefits = [
  { Icon: TrendingUp, bg: "bg-blue-600",    title: "Competitive Differentiation", desc: "AI capabilities built into your core product create moats that are hard for competitors to replicate quickly." },
  { Icon: Zap,        bg: "bg-teal-600",    title: "Faster Decision-Making",      desc: "Intelligent systems surface insights and recommendations at the moment they are needed, not after the fact." },
  { Icon: Cpu,        bg: "bg-cyan-600",    title: "Operational Leverage",        desc: "AI handles high-volume, cognitive tasks at scale — freeing your team to focus on higher-value work." },
  { Icon: Shield,     bg: "bg-cyan-500",    title: "Responsible AI by Design",    desc: "We build with explainability, bias mitigation, and governance frameworks embedded from day one." },
];

const faqs = [
  {
    q: "What does 'AI-native' mean in product engineering?",
    a: "AI-native means intelligence is designed into the product architecture from day one — not bolted on as a feature. It shapes data models, APIs, UX, and infrastructure decisions from the start. This results in products that are more capable, more differentiated, and easier to evolve as AI capabilities advance.",
  },
  {
    q: "What large language models do you work with?",
    a: "We work across all major LLM providers — including OpenAI (GPT-4o), Anthropic (Claude), Google (Gemini), and open-source models via Hugging Face and Ollama. We select the right model for your use case based on performance, cost, data privacy requirements, and latency constraints.",
  },
  {
    q: "What is RAG and when should we use it?",
    a: "Retrieval-Augmented Generation (RAG) is a pattern that grounds LLM responses in your specific knowledge base — documents, databases, or real-time data — rather than relying solely on the model's training data. Use RAG when you need AI to answer questions accurately about your proprietary content, policies, products, or operational data.",
  },
  {
    q: "How do you handle AI data privacy and security?",
    a: "We design AI systems with privacy-by-default — data minimisation, access controls, encryption, and audit logging. Where models are used for sensitive data, we evaluate on-premise or private cloud deployment options and ensure no customer data is used to train third-party models without explicit consent.",
  },
  {
    q: "What is MLOps and why does it matter?",
    a: "MLOps (Machine Learning Operations) is the practice of automating the deployment, monitoring, and retraining of ML models in production. Without MLOps, models degrade silently as data changes. We implement MLOps pipelines that catch drift, trigger retraining, and manage model versions — keeping your AI accurate and reliable over time.",
  },
  {
    q: "How long does it take to go from AI concept to production?",
    a: "A focused proof-of-concept — validating a specific AI use case — typically takes 4–6 weeks. A production-grade AI system with full MLOps, monitoring, and integration into your product takes 3–6 months depending on data readiness and integration complexity. We deliver in iterative sprints so you see value early.",
  },
  {
    q: "Can you fine-tune models on our data?",
    a: "Yes. Fine-tuning is appropriate when a base model needs to learn your domain-specific terminology, style, or task patterns. We manage the full fine-tuning pipeline — data curation, training, evaluation, and deployment — on your chosen infrastructure or a managed platform.",
  },
  {
    q: "How do you ensure AI systems are fair and explainable?",
    a: "Responsible AI is built into our engineering process from the start. We conduct bias audits on training data, implement explainability tools (such as SHAP or LIME for ML models), create human-in-the-loop review points for high-stakes decisions, and document model cards for transparency and auditability.",
  },
];

export default function AiNativeProductEngineeringPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">

        {/* Hero */}
        <section className="gradient-hero relative overflow-hidden py-28 text-white">
          <HeroCanvas variant="ai-native" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-cyan-300 mb-5">
              <Cpu className="w-4 h-4" /> Integration and Digital Connectivity
            </span>
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">AI-Native Product Engineering</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
              Build products with intelligence at their core — LLM integration, machine learning,
              generative AI, and AI strategy that delivers measurable business outcomes.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {["LLM Integration", "Generative AI", "ML Models", "AI Strategy"].map((tag) => (
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
                Intelligence as a product feature, not an afterthought
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                The era of bolt-on AI is over. Organisations that will lead their sectors in the
                next decade are those building AI into the fabric of their products from day one —
                not adding it as a feature after the fact.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Kulana&apos;s AI-native product engineering team combines deep AI research knowledge
                with enterprise engineering discipline. We design, build, and ship AI-powered
                products that are production-grade, explainable, and aligned to real business value.
              </p>
              <div className="flex flex-wrap gap-3">
                {["RAG", "Fine-tuning", "MLOps", "Responsible AI"].map((tag) => (
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
                  { Icon: Search,   step: "01", title: "Discover",  desc: "Identify where AI creates the most value in your product, process, or customer experience." },
                  { Icon: Settings, step: "02", title: "Design",    desc: "Architect the AI system — models, data pipelines, APIs, guardrails, and evaluation frameworks." },
                  { Icon: Cpu,      step: "03", title: "Build",     desc: "Develop and iterate using agile ML engineering — from prototype to production." },
                  { Icon: TrendingUp, step: "04", title: "Operate", desc: "Monitor model performance, manage drift, retrain on new data, and continuously improve." },
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
                AI-native product engineering drives impact across industries and product categories.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { Icon: MessageSquare, label: "Intelligent Customer Assistants", desc: "LLM-powered support agents that resolve queries, escalate intelligently, and learn from interactions" },
                { Icon: Eye,           label: "Document Intelligence",           desc: "Automated extraction, classification, and routing of data from contracts, invoices, and forms" },
                { Icon: Brain,         label: "Recommendation Engines",          desc: "Personalised product, content, and service recommendations powered by ML models trained on your data" },
                { Icon: Cpu,           label: "Predictive Maintenance",          desc: "Anomaly detection on sensor and operational data to predict failures before they occur" },
                { Icon: GitMerge,      label: "AI-Powered Search",               desc: "Semantic and hybrid search experiences that understand intent, not just keywords" },
                { Icon: Zap,           label: "Automated Quality Inspection",    desc: "Computer vision models that detect defects and non-conformances at machine speed" },
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
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">AI Engineering Services</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                End-to-end AI product engineering — from strategy and architecture to deployment and ongoing operations.
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
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Why AI-Native</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">Benefits</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Building AI into the core of your product creates advantages that compound over time.
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
              Everything you need to know about our AI-native product engineering practice.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group border border-gray-200 rounded-2xl overflow-hidden">
                <summary className="flex items-start justify-between gap-4 px-6 py-5 cursor-pointer list-none font-semibold text-gray-900 hover:bg-blue-50 transition-colors">
                  <span className="flex items-start gap-3">
                    <Cpu className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" strokeWidth={1.75} />
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
                <Cpu className="w-8 h-8 text-white" strokeWidth={1.75} />
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
                Ready to build AI into your product?
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Talk to our AI engineering team and discover how to embed intelligence at the core of your offering.
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
