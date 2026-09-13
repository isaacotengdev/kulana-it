import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import HeroCanvas from "@/components/HeroCanvas";
import {
  Cpu, Brain, Zap, MessageSquare, Eye, GitMerge,
  ArrowRight, CheckCircle2, Search, Settings, TrendingUp, Shield,
  FlaskConical, Layers, RefreshCw, FileText,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI-Native Product Engineering | Kulana IT Solutions",
  description:
    "Build software where intelligence is the product, not a feature. LLM orchestration, agentic systems, MLOps, model evaluation, and responsible AI engineering for enterprise products.",
};

const capabilities = [
  { Icon: Brain,        label: "LLM Orchestration",        color: "text-blue-600",    bg: "bg-blue-50",    border: "border-blue-100"  },
  { Icon: GitMerge,     label: "Agentic Systems",           color: "text-blue-600",    bg: "bg-blue-50",    border: "border-blue-100"  },
  { Icon: RefreshCw,    label: "MLOps & LLMOps",           color: "text-teal-600",    bg: "bg-teal-50",    border: "border-teal-100"  },
  { Icon: FlaskConical, label: "Model Evaluation",          color: "text-blue-600",    bg: "bg-blue-50",    border: "border-blue-100"  },
  { Icon: Layers,       label: "RAG & Knowledge Systems",   color: "text-cyan-600",    bg: "bg-cyan-50",    border: "border-cyan-100"  },
  { Icon: Shield,       label: "Responsible AI",            color: "text-cyan-600",    bg: "bg-cyan-50",    border: "border-cyan-100"  },
];

const features = [
  {
    Icon: Brain,
    label: "LLM Orchestration and Agentic Systems",
    desc: "Design and build multi-step AI systems that use tools, retrieve context, plan across steps, and integrate with your business systems — from simple prompt chains to complex multi-agent workflows with state, memory, and escalation logic.",
  },
  {
    Icon: Layers,
    label: "RAG and Knowledge Systems",
    desc: "Ground AI responses in your proprietary data — documents, databases, policies, and operational records — using vector search, reranking, and retrieval strategies tuned for accuracy and production latency.",
  },
  {
    Icon: FlaskConical,
    label: "Model Evaluation and Testing",
    desc: "AI systems require evaluation frameworks, not just unit tests. We build eval suites that measure output quality, regression-test against prompt and model changes, and A/B test model versions in production before full rollout.",
  },
  {
    Icon: RefreshCw,
    label: "MLOps and LLMOps",
    desc: "Automate the full model lifecycle — training pipelines, serving infrastructure, monitoring, drift detection, and retraining triggers — so your AI stays accurate as data and usage patterns change.",
  },
  {
    Icon: GitMerge,
    label: "Enterprise AI Integration",
    desc: "Embed AI capabilities directly into your ERP, CRM, core banking, or operational platforms — connecting intelligence to the systems where decisions are made, with full audit trails and governance controls.",
  },
  {
    Icon: Shield,
    label: "Responsible AI and Guardrails",
    desc: "Production AI requires more than a good model. We build input/output filtering, content moderation, confidence thresholds, human-in-the-loop escalation paths, and audit logging into every system from the start.",
  },
];

const benefits = [
  { Icon: TrendingUp, bg: "bg-blue-600",  title: "Compounding Competitive Advantage", desc: "AI systems improve with usage — more interactions generate better training signals. The earlier you build the feedback flywheel into your product, the wider the gap grows over time." },
  { Icon: Zap,        bg: "bg-teal-600",  title: "Decisions at Inference Speed",      desc: "Intelligent systems surface recommendations, flag anomalies, and complete multi-step tasks in seconds — removing human bottlenecks from processes that previously took hours." },
  { Icon: Cpu,        bg: "bg-cyan-600",  title: "Engineering-Grade Reliability",     desc: "AI-native does not mean experimental. We deliver with the same CI/CD, observability, and incident response discipline as any production software system." },
  { Icon: Shield,     bg: "bg-cyan-500",  title: "Responsible AI by Design",          desc: "Explainability, bias auditing, confidence thresholds, and human override mechanisms are built into the architecture — not bolted on after deployment." },
];

const faqs = [
  {
    q: "What does 'AI-native' mean in product engineering?",
    a: "AI-native means the intelligent system is a first-class architectural concern — not a feature added later. It shapes decisions about data schemas, API contracts, infrastructure, feedback loops, and UX from day one. This is meaningfully different from 'adding AI' to an existing product, which usually produces fragile integrations that are hard to improve over time.",
  },
  {
    q: "What is an AI agent and how is it different from a chatbot?",
    a: "A chatbot generates a response to a single message. An AI agent can take actions — call external tools, query databases, write to systems, and execute plans that span multiple steps — to autonomously complete a task. We design agents with explicit tool registries, state machines, memory systems, and escalation paths. They are not prompt wrappers; they are distributed systems with an AI decision-making core.",
  },
  {
    q: "What large language models do you work with?",
    a: "We work across all major providers — OpenAI (GPT-4o), Anthropic (Claude), Google (Gemini), and open-source models via Hugging Face and Ollama. Model selection is driven by your use case, latency requirements, data privacy constraints, and cost profile. We design systems that are model-agnostic where possible, so you are not locked in as the landscape evolves.",
  },
  {
    q: "What is RAG and when should we use it?",
    a: "Retrieval-Augmented Generation (RAG) grounds an LLM's responses in your specific knowledge — documents, policies, product data, operational records — rather than relying on the model's training data alone. Use RAG when you need AI to answer accurately about your proprietary content, when hallucination risk is unacceptable, or when the knowledge changes frequently and fine-tuning would be impractical.",
  },
  {
    q: "How do you evaluate whether an AI system is actually working?",
    a: "Traditional software has unit tests; AI systems need evaluation frameworks. We build eval suites that test model outputs against expected results, measure regression when prompts or model versions change, and A/B test variants in production. Evaluation methods include heuristic checks (format, structure, keyword presence), model-graded scoring using a judge LLM, and human review on representative sample sets — with all results tracked over time to catch quality drift before it reaches users.",
  },
  {
    q: "What is MLOps and why does it matter?",
    a: "MLOps (Machine Learning Operations) is the discipline of shipping and operating ML models with the same rigour as software — automated deployment pipelines, model versioning, performance monitoring, and drift detection. Without MLOps, models degrade silently as data distributions shift. We implement LLMOps pipelines with the same principles applied to language model systems — prompt versioning, output monitoring, and structured retraining triggers.",
  },
  {
    q: "How do you handle AI data privacy and security?",
    a: "We design AI systems with privacy-by-default — data minimisation, role-based access, encryption at rest and in transit, and full audit logging. Where models process sensitive data, we evaluate on-premise or private cloud deployment, and ensure no customer data is used to train third-party models without explicit consent.",
  },
  {
    q: "How long does it take to go from concept to a production AI system?",
    a: "A focused proof-of-concept validating a specific use case typically takes 4–6 weeks. A production-grade system with MLOps, monitoring, and enterprise integration takes 3–6 months depending on data readiness and integration complexity. We work in iterative sprints so you see working software early and can validate direction before committing to the full build.",
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
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              AI-Native Product Engineering
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
              A discipline where intelligence is the product, not a feature. We design, build,
              and operate AI systems — agentic architectures, LLM orchestration, model evaluation,
              and MLOps — with the engineering rigour that production environments demand.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {["LLM Orchestration", "Agentic Systems", "MLOps & LLMOps", "Responsible AI"].map((tag) => (
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
                Intelligence as architecture, not a feature
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Most teams encounter AI as a feature request. AI-native engineering starts
                from a different premise: the intelligent system is the product. That changes
                how you design your data model, your APIs, your infrastructure, and your
                feedback loops — because prompts are code, inference latency is a UX
                constraint, and model quality needs its own test discipline.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Kulana&apos;s AI-native practice delivers the full engineering stack — LLM
                orchestration and agentic system design, RAG architectures grounded in your
                proprietary data, MLOps pipelines that keep models accurate over time, and
                responsible AI governance. We integrate these directly into the enterprise
                systems — ERP, CRM, core banking — our other practices implement, so AI
                capabilities connect to the workflows where decisions are actually made.
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
                  { Icon: Search,      step: "01", title: "Discover",  desc: "Identify where AI creates the most leverage in your product or process — and whether the data, latency, and accuracy requirements make a given use case viable." },
                  { Icon: Settings,    step: "02", title: "Design",    desc: "Architect the system — model selection, orchestration layer, retrieval strategy, evaluation framework, guardrails, and integration points." },
                  { Icon: Cpu,         step: "03", title: "Build",     desc: "Develop iteratively from proof-of-concept through to production, with evals running at every stage and MLOps infrastructure in place before go-live." },
                  { Icon: TrendingUp,  step: "04", title: "Operate",   desc: "Monitor output quality, detect drift, capture feedback signals, and retrain — so the system improves with usage rather than degrading over time." },
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
                What AI-native engineering looks like when applied to concrete enterprise problems.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  Icon: FileText,
                  label: "Intelligent Document Processing",
                  desc: "Multi-stage pipelines that classify documents, extract structured fields, score confidence, and route low-confidence outputs to a human review queue — not just OCR with a language model on top",
                },
                {
                  Icon: MessageSquare,
                  label: "Agentic Customer Support",
                  desc: "Support agents with tool access, conversation memory, CRM integration, and escalation logic — resolving queries autonomously and handing off with full context when human judgement is needed",
                },
                {
                  Icon: Brain,
                  label: "AI-Augmented Underwriting",
                  desc: "LLM-powered document analysis that extracts risk signals, applies policy rules, flags exceptions, and generates explainable outputs — connected directly to core banking or insurance systems",
                },
                {
                  Icon: Eye,
                  label: "AI-Powered Search and Discovery",
                  desc: "Semantic and hybrid search that understands intent, applies business ranking rules, and returns contextually ordered results across structured and unstructured data at query latency",
                },
                {
                  Icon: GitMerge,
                  label: "Automated Report Generation",
                  desc: "Agentic systems that gather data from multiple sources, apply business logic, and produce narrative management reports — reducing analyst cycle time from hours to minutes",
                },
                {
                  Icon: Zap,
                  label: "Predictive Anomaly Detection",
                  desc: "ML models on operational data streams that surface anomalies with confidence scores and historical context — before they become incidents, not after",
                },
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
                The full engineering stack — from architecture and orchestration to evaluation, operations, and governance.
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
                AI-native products compound. Systems that capture feedback improve over time — and
                the engineering investment required to reach that point is substantial.
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
              Common questions about our AI-native product engineering practice.
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
                Talk to our AI engineering team — we will help you identify the right use case,
                validate feasibility, and build a system that is production-ready from day one.
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
