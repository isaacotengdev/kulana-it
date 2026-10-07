import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

const MF = "var(--font-manrope), sans-serif";

export const metadata: Metadata = {
  title: "AI-Native Product Engineering | Kulana IT Solutions",
  description:
    "Build software where intelligence is the product, not a feature. LLM orchestration, agentic systems, MLOps, model evaluation, and responsible AI engineering for enterprise products.",
};

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
      <main>

        {/* Hero — image to be added */}
        <section className="relative overflow-hidden flex flex-col" style={{ height: "100vh", background: "#040d28" }}>
          <div
            className="relative z-10 flex flex-col w-full h-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8"
            style={{ paddingTop: "calc(5rem + 28vh)", paddingBottom: "5rem" }}
          >
            <div>
              <p className="text-xs tracking-[0.22em] uppercase mb-4" style={{ fontFamily: MF, fontWeight: 600, color: "#57D9D4" }}>
                Integration &amp; Digital Connectivity
              </p>
              <h1
                className="text-5xl sm:text-6xl lg:text-8xl font-bold uppercase text-white leading-[1.0]"
                style={{ fontFamily: MF }}
              >
                AI-Native<br />Product Engineering
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

        {/* Overview */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs tracking-[0.18em] uppercase mb-6" style={{ fontFamily: MF, fontWeight: 700, color: "#200044" }}>Overview</p>
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6" style={{ fontFamily: MF }}>
              Intelligence as architecture, not a feature
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4" style={{ fontFamily: MF }}>
              Most teams encounter AI as a feature request. AI-native engineering starts from a different premise: the intelligent system is the product. That changes how you design your data model, your APIs, your infrastructure, and your feedback loops — because prompts are code, inference latency is a UX constraint, and model quality needs its own test discipline.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10" style={{ fontFamily: MF }}>
              Kulana&apos;s AI-native practice delivers the full engineering stack — LLM orchestration and agentic system design, RAG architectures grounded in your proprietary data, MLOps pipelines that keep models accurate over time, and responsible AI governance. We integrate these directly into the enterprise systems our other practices implement, so AI capabilities connect to the workflows where decisions are actually made.
            </p>
            <div className="flex flex-wrap lg:flex-nowrap gap-3">
              {["LLM Orchestration", "Agentic Systems", "MLOps & LLMOps", "Responsible AI"].map((tag) => (
                <span key={tag} className="flex-1 text-center py-3 px-4 border rounded-md text-sm font-semibold text-gray-700" style={{ borderColor: "#57D9D4", fontFamily: MF }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* How to Get Started */}
        <section style={{ background: "#200044" }} className="py-16 lg:py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs tracking-[0.18em] uppercase mb-14" style={{ fontFamily: MF, fontWeight: 700, color: "#a198af" }}>How to Get Started</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                { step: "01", title: "Discover",  desc: "Identify where AI creates the most leverage in your product or process — and whether the data, latency, and accuracy requirements make a given use case viable." },
                { step: "02", title: "Design",    desc: "Architect the system — model selection, orchestration layer, retrieval strategy, evaluation framework, guardrails, and integration points." },
                { step: "03", title: "Build",     desc: "Develop iteratively from proof-of-concept through to production, with evals running at every stage and MLOps infrastructure in place before go-live." },
                { step: "04", title: "Operate",   desc: "Monitor output quality, detect drift, capture feedback signals, and retrain — so the system improves with usage rather than degrading over time." },
              ].map(({ step, title, desc }) => (
                <div key={step}>
                  <p className="text-5xl font-light mb-3" style={{ fontFamily: MF, color: "rgba(255,255,255,0.2)" }}>{step}</p>
                  <p className="text-xl font-semibold mb-3" style={{ fontFamily: MF, color: "#57D9D4" }}>{title}</p>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: MF, color: "#a198af" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs tracking-[0.18em] uppercase mb-10" style={{ fontFamily: MF, fontWeight: 700, color: "#200044" }}>Applications</p>
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-snug" style={{ fontFamily: MF }}>
                Real-world use cases
              </h2>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: MF }}>
                What AI-native engineering looks like when applied to concrete enterprise problems.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { label: "Intelligent Document Processing",  desc: "Multi-stage pipelines that classify documents, extract structured fields, score confidence, and route low-confidence outputs to a human review queue." },
                { label: "Agentic Customer Support",         desc: "Support agents with tool access, conversation memory, CRM integration, and escalation logic — resolving queries autonomously and handing off with full context when human judgement is needed." },
                { label: "AI-Augmented Underwriting",        desc: "LLM-powered document analysis that extracts risk signals, applies policy rules, flags exceptions, and generates explainable outputs connected to core banking or insurance systems." },
                { label: "AI-Powered Search & Discovery",    desc: "Semantic and hybrid search that understands intent, applies business ranking rules, and returns contextually ordered results across structured and unstructured data." },
                { label: "Automated Report Generation",      desc: "Agentic systems that gather data from multiple sources, apply business logic, and produce narrative management reports — reducing analyst cycle time from hours to minutes." },
                { label: "Predictive Anomaly Detection",     desc: "ML models on operational data streams that surface anomalies with confidence scores and historical context — before they become incidents, not after." },
              ].map(({ label, desc }) => (
                <div key={label} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-base font-bold mb-3" style={{ fontFamily: MF, color: "#200044" }}>{label}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: MF }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Deliver */}
        <section style={{ background: "#f5f5f5" }} className="py-16 lg:py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs tracking-[0.18em] uppercase mb-10" style={{ fontFamily: MF, fontWeight: 700, color: "#200044" }}>What We Deliver</p>
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-snug" style={{ fontFamily: MF }}>
                AI engineering services
              </h2>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: MF }}>
                The full engineering stack — from architecture and orchestration to evaluation, operations, and governance.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { label: "LLM Orchestration and Agentic Systems", desc: "Design and build multi-step AI systems that use tools, retrieve context, plan across steps, and integrate with your business systems." },
                { label: "RAG and Knowledge Systems",             desc: "Ground AI responses in your proprietary data — documents, databases, policies — using vector search, reranking, and retrieval strategies tuned for accuracy and latency." },
                { label: "Model Evaluation and Testing",          desc: "Eval suites that measure output quality, regression-test against prompt and model changes, and A/B test model versions in production before full rollout." },
                { label: "MLOps and LLMOps",                      desc: "Automate the full model lifecycle — training pipelines, serving infrastructure, monitoring, drift detection, and retraining triggers." },
                { label: "Enterprise AI Integration",             desc: "Embed AI capabilities directly into your ERP, CRM, core banking, or operational platforms with full audit trails and governance controls." },
                { label: "Responsible AI and Guardrails",         desc: "Input/output filtering, content moderation, confidence thresholds, human-in-the-loop escalation paths, and audit logging built in from the start." },
              ].map(({ label, desc }) => (
                <div key={label} className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-base font-bold mb-3" style={{ fontFamily: MF, color: "#200044" }}>{label}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: MF }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs tracking-[0.18em] uppercase mb-10" style={{ fontFamily: MF, fontWeight: 700, color: "#200044" }}>Why It Matters</p>
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-snug" style={{ fontFamily: MF }}>
                Why AI-native products compound
              </h2>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: MF }}>
                AI-native products improve with usage — more interactions generate better training signals. The engineering investment required to reach that point is substantial, and the gap it creates is durable.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Compounding Competitive Advantage", desc: "AI systems improve with usage — more interactions generate better training signals. The earlier you build the feedback flywheel into your product, the wider the gap grows over time." },
                { title: "Decisions at Inference Speed",      desc: "Intelligent systems surface recommendations, flag anomalies, and complete multi-step tasks in seconds — removing human bottlenecks from processes that previously took hours." },
                { title: "Engineering-Grade Reliability",     desc: "AI-native does not mean experimental. We deliver with the same CI/CD, observability, and incident response discipline as any production software system." },
                { title: "Responsible AI by Design",          desc: "Explainability, bias auditing, confidence thresholds, and human override mechanisms are built into the architecture — not bolted on after deployment." },
              ].map(({ title, desc }) => (
                <div key={title} className="p-8 border rounded-xl" style={{ borderColor: "#57D9D4" }}>
                  <h3 className="text-lg font-bold text-gray-900 mb-3" style={{ fontFamily: MF }}>{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: MF }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-6 mb-12">
              <p className="text-xs tracking-[0.18em] uppercase flex-shrink-0 leading-none" style={{ fontFamily: MF, fontWeight: 700, color: "#200044" }}>FAQ</p>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div>
                <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-8" style={{ fontFamily: MF }}>
                  Your questions<br />answered
                </h2>
                <div className="relative w-full max-w-xs aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100">
                  <Image src="/images/integration_digital_connectivity/AI-Native Product Engineering.webp" alt="AI Native Product Engineering" fill className="object-cover object-center" sizes="320px" />
                </div>
              </div>
              <div>
                <p className="text-gray-600 leading-relaxed mb-10" style={{ fontFamily: MF }}>
                  Common questions about our AI-native product engineering practice.
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

        {/* CTA */}
        <section style={{ background: "#57D9D4" }} className="py-16 lg:py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-20">
              <h2
                className="text-3xl lg:text-4xl font-bold leading-tight lg:w-[42%] flex-shrink-0"
                style={{ fontFamily: MF, color: "#200044" }}
              >
                Ready to build AI into your product?
              </h2>
              <div className="flex-1">
                <p className="text-base leading-relaxed mb-8" style={{ fontFamily: MF, color: "#200044", opacity: 0.85 }}>
                  Talk to our AI engineering team — we will help you identify the right use case, validate feasibility, and build a system that is production-ready from day one.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-semibold transition-all hover:opacity-90"
                    style={{ fontFamily: MF, background: "#200044", color: "#ffffff" }}
                  >
                    Request a Consultation <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-semibold border transition-all hover:bg-white/20"
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
