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

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden">
          <Image
            src="/images/integration_digital_connectivity/Hero image_AI-Native Product Engineering_2560×1440px.webp"
            alt="AI-Native Product Engineering"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(8,0,32,0.72) 0%, rgba(8,0,32,0.52) 45%, rgba(8,0,32,0.22) 75%, rgba(8,0,32,0.06) 100%)" }}
          />
          <div
            className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8"
            style={{ paddingTop: "calc(80px + clamp(32px, 6vw, 90px))", paddingBottom: "clamp(40px, 6vw, 90px)" }}
          >
            <div>
              <p className="inline-block tracking-normal uppercase mb-6 select-none" style={{ fontFamily: MF, fontWeight: 600, color: "#57D9D4", fontSize: "clamp(13px, 1.2vw, 18px)" }}>
                Integration &amp; Digital Connectivity
              </p>
              <h1
                className="text-white uppercase leading-tight select-none"
                style={{ fontFamily: MF, fontWeight: 500, fontSize: "clamp(32px, 4vw, 53px)" }}
              >
                AI-Native<br />Product Engineering
              </h1>
            </div>
            <div style={{ marginTop: "clamp(40px, 6vw, 90px)" }}>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-md transition-all shadow-lg hover:-translate-y-0.5"
                style={{ fontFamily: MF, fontWeight: 600, background: "#57D9D4", color: "#040d28", fontSize: "13px" }}
              >
                Request a Consultation <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Overview ─────────────────────────────────────────────────── */}
        <section className="bg-white py-10 lg:py-12">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Label + black rule */}
            <div className="mb-6">
              <span className="tracking-normal uppercase" style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "clamp(13px, 1vw, 14px)" }}>
                Overview
              </span>
              <div className="w-full h-px mt-3" style={{ background: "#000000" }} />
            </div>

            {/* Heading */}
            <h2 className="leading-tight mb-6" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(18px, 1.8vw, 26px)" }}>
              Intelligence as architecture, not a feature
            </h2>

            {/* 2-col: description left, tags right */}
            <div className="grid lg:grid-cols-[3fr_2fr] gap-8 items-start">
              <div>
                <p className="mb-8" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1.2vw, 18px)", lineHeight: "1.4" }}>
                  Most teams encounter AI as a feature request. AI-native engineering starts from a different premise: the intelligent system is the product. That changes how you design your data model, your APIs, your infrastructure, and your feedback loops — because prompts are code, inference latency is a UX constraint, and model quality needs its own test discipline.
                </p>
                <p style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1.2vw, 18px)", lineHeight: "1.4" }}>
                  Kulana&apos;s AI-native practice delivers the full engineering stack — LLM orchestration and agentic system design, RAG architectures grounded in your proprietary data, MLOps pipelines that keep models accurate over time, and responsible AI governance. We integrate these directly into the enterprise systems our other practices implement, so AI capabilities connect to the workflows where decisions are actually made.
                </p>
              </div>
              <div className="flex flex-col gap-4 items-end">
                {["LLM Orchestration", "Agentic Systems", "MLOps & LLMOps", "Responsible AI"].map((tag) => (
                  <div key={tag} className="flex items-center justify-center py-4 rounded-lg text-center"
                    style={{ border: "1.5px solid #57D9D4", fontFamily: MF, fontWeight: 700, color: "#200044", fontSize: "clamp(13px, 1vw, 14px)", maxWidth: "340px", width: "100%" }}>
                    {tag}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ── How to Get Started ───────────────────────────────────────── */}
        <section style={{ background: "#200044" }} className="py-10 lg:py-12">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Label + white rule */}
            <div className="mb-8">
              <span className="tracking-normal uppercase" style={{ fontFamily: MF, fontWeight: 600, color: "#ffffff", fontSize: "clamp(13px, 1vw, 14px)" }}>
                How to Get Started
              </span>
              <div className="w-full h-px mt-3" style={{ background: "#ffffff" }} />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                { step: "01", title: "Discover",  desc: "Identify where AI creates the most leverage in your product or process — and whether the data, latency, and accuracy requirements make a given use case viable." },
                { step: "02", title: "Design",    desc: "Architect the system — model selection, orchestration layer, retrieval strategy, evaluation framework, guardrails, and integration points." },
                { step: "03", title: "Build",     desc: "Develop iteratively from proof-of-concept through to production, with evals running at every stage and MLOps infrastructure in place before go-live." },
                { step: "04", title: "Operate",   desc: "Monitor output quality, detect drift, capture feedback signals, and retrain — so the system improves with usage rather than degrading over time." },
              ].map(({ step, title, desc }) => (
                <div key={step}>
                  <p className="leading-none mb-4" style={{ fontFamily: MF, fontWeight: 400, color: "#a198af", fontSize: "clamp(24px, 2.85vw, 41px)" }}>{step}</p>
                  <p className="mb-4" style={{ fontFamily: MF, fontWeight: 400, color: "#57D9D4", fontSize: "clamp(18px, 1.8vw, 26px)" }}>{title}</p>
                  <p style={{ fontFamily: MF, fontWeight: 400, color: "#ffffff", fontSize: "clamp(13px, 1vw, 14px)", lineHeight: "1.5" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Applications ─────────────────────────────────────────────── */}
        <section className="bg-white py-10 lg:py-12">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Label + black rule */}
            <div className="mb-6">
              <span className="tracking-normal uppercase" style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "clamp(13px, 1vw, 14px)" }}>
                Applications
              </span>
              <div className="w-full h-px mt-3" style={{ background: "#000000" }} />
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-start mb-8">
              <h2 className="leading-tight" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(18px, 1.8vw, 26px)" }}>
                Real-world<br />use cases
              </h2>
              <p className="lg:pt-2" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1.2vw, 18px)", lineHeight: "1.4" }}>
                What AI-native engineering looks like when applied to concrete enterprise problems.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { label: "Intelligent Document Processing",  desc: "Multi-stage pipelines that classify documents, extract structured fields, score confidence, and route low-confidence outputs to a human review queue." },
                { label: "Agentic Customer Support",         desc: "Support agents with tool access, conversation memory, CRM integration, and escalation logic — resolving queries autonomously and handing off with full context when human judgement is needed." },
                { label: "AI-Augmented Underwriting",        desc: "LLM-powered document analysis that extracts risk signals, applies policy rules, flags exceptions, and generates explainable outputs connected to core banking or insurance systems." },
                { label: "AI-Powered Search & Discovery",    desc: "Semantic and hybrid search that understands intent, applies business ranking rules, and returns contextually ordered results across structured and unstructured data." },
                { label: "Automated Report Generation",      desc: "Agentic systems that gather data from multiple sources, apply business logic, and produce narrative management reports — reducing analyst cycle time from hours to minutes." },
                { label: "Predictive Anomaly Detection",     desc: "ML models on operational data streams that surface anomalies with confidence scores and historical context — before they become incidents, not after." },
              ].map(({ label, desc }) => (
                <div key={label} className="bg-white border border-gray-100 rounded-xl p-6">
                  <p className="mb-3" style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "clamp(14px, 1.45vw, 21px)" }}>{label}</p>
                  <p style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1vw, 14px)", lineHeight: "1.5" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What We Deliver ──────────────────────────────────────────── */}
        <section style={{ background: "#f5f5f5" }} className="py-10 lg:py-12">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Label + black rule */}
            <div className="mb-6">
              <span className="tracking-normal uppercase" style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "clamp(13px, 1vw, 14px)" }}>
                What We Deliver
              </span>
              <div className="w-full h-px mt-3" style={{ background: "#000000" }} />
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-start mb-8">
              <h2 className="leading-tight" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(18px, 1.8vw, 26px)" }}>
                AI engineering<br />services
              </h2>
              <p className="lg:pt-2" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1.2vw, 18px)", lineHeight: "1.4" }}>
                The full engineering stack — from architecture and orchestration to evaluation, operations, and governance.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { label: "LLM Orchestration and Agentic Systems", desc: "Design and build multi-step AI systems that use tools, retrieve context, plan across steps, and integrate with your business systems." },
                { label: "RAG and Knowledge Systems",             desc: "Ground AI responses in your proprietary data — documents, databases, policies — using vector search, reranking, and retrieval strategies tuned for accuracy and latency." },
                { label: "Model Evaluation and Testing",          desc: "Eval suites that measure output quality, regression-test against prompt and model changes, and A/B test model versions in production before full rollout." },
                { label: "MLOps and LLMOps",                      desc: "Automate the full model lifecycle — training pipelines, serving infrastructure, monitoring, drift detection, and retraining triggers." },
                { label: "Enterprise AI Integration",             desc: "Embed AI capabilities directly into your ERP, CRM, core banking, or operational platforms with full audit trails and governance controls." },
                { label: "Responsible AI and Guardrails",         desc: "Input/output filtering, content moderation, confidence thresholds, human-in-the-loop escalation paths, and audit logging built in from the start." },
              ].map(({ label, desc }) => (
                <div key={label} className="bg-white border border-gray-100 rounded-xl p-6">
                  <p className="mb-3" style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "clamp(14px, 1.45vw, 21px)" }}>{label}</p>
                  <p style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1vw, 14px)", lineHeight: "1.5" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why It Matters ───────────────────────────────────────────── */}
        <section className="bg-white py-10 lg:py-12">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Label + black rule */}
            <div className="mb-6">
              <span className="tracking-normal uppercase" style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "clamp(13px, 1vw, 14px)" }}>
                Why It Matters
              </span>
              <div className="w-full h-px mt-3" style={{ background: "#000000" }} />
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-start mb-8">
              <h2 className="leading-tight" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(18px, 1.8vw, 26px)" }}>
                Why AI-native<br />products compound
              </h2>
              <p className="lg:pt-2" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1.2vw, 18px)", lineHeight: "1.4" }}>
                AI-native products improve with usage — more interactions generate better training signals. The engineering investment required to reach that point is substantial, and the gap it creates is durable.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "Compounding Competitive Advantage", desc: "AI systems improve with usage — more interactions generate better training signals. The earlier you build the feedback flywheel into your product, the wider the gap grows over time." },
                { title: "Decisions at Inference Speed",      desc: "Intelligent systems surface recommendations, flag anomalies, and complete multi-step tasks in seconds — removing human bottlenecks from processes that previously took hours." },
                { title: "Engineering-Grade Reliability",     desc: "AI-native does not mean experimental. We deliver with the same CI/CD, observability, and incident response discipline as any production software system." },
                { title: "Responsible AI by Design",          desc: "Explainability, bias auditing, confidence thresholds, and human override mechanisms are built into the architecture — not bolted on after deployment." },
              ].map(({ title, desc }) => (
                <div key={title} className="rounded-xl p-6" style={{ border: "1.5px solid #57D9D4", background: "#f1ffff" }}>
                  <p className="mb-3" style={{ fontFamily: MF, fontWeight: 400, color: "#57D9D4", fontSize: "clamp(14px, 1.45vw, 21px)" }}>{title}</p>
                  <p style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1vw, 14px)", lineHeight: "1.5" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
        <section className="bg-white py-10 lg:py-12">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Label + black rule */}
            <div className="mb-8">
              <span className="tracking-normal uppercase" style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "clamp(13px, 1vw, 14px)" }}>FAQ</span>
              <div className="w-full h-px mt-3" style={{ background: "#000000" }} />
            </div>

            {/* Row 1: heading left | description right */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 mb-6">
              <h2 className="leading-tight" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(18px, 1.8vw, 26px)" }}>
                Your questions<br />answered
              </h2>
              <p style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1.2vw, 18px)", lineHeight: "1.4" }}>
                Common questions about our AI-native product engineering practice.
              </p>
            </div>

            {/* Row 2: image left | accordion right */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
              <div className="relative w-full rounded-2xl overflow-hidden lg:mt-14" style={{ aspectRatio: "4/5", maxWidth: "320px" }}>
                <Image src="/images/Service_Core & Enterprise Systems/FAQ_Banners/AI Native Product Engineering_400x500px_banner.webp" alt="AI Native Product Engineering" fill className="object-cover object-center" sizes="320px" />
              </div>

              <div className="divide-y" style={{ borderColor: "#e5e7eb" }}>
                {faqs.map(({ q, a }) => (
                  <details key={q} className="group py-5">
                    <summary className="flex items-center justify-between gap-6 cursor-pointer list-none">
                      <span style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "clamp(13px, 1vw, 14px)", lineHeight: "1.5" }}>{q}</span>
                      <span className="flex-shrink-0 leading-none select-none" style={{ color: "#000000", fontSize: "clamp(13px, 1.2vw, 18px)" }}>
                        <span className="group-open:hidden">+</span>
                        <span className="hidden group-open:inline">−</span>
                      </span>
                    </summary>
                    <p className="mt-4" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1vw, 14px)", lineHeight: "1.5" }}>{a}</p>
                  </details>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section style={{ background: "#57D9D4" }}>
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-9 lg:py-10">
            <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-8">
              <h2
                className="leading-tight lg:w-[45%] flex-shrink-0"
                style={{ fontFamily: MF, fontWeight: 700, color: "#200044", fontSize: "clamp(20px, 2.1vw, 31px)" }}
              >
                Ready to build AI<br />into your product?
              </h2>
              <div className="flex-1">
                <p className="mb-8" style={{ fontFamily: MF, fontWeight: 400, color: "#200044", fontSize: "clamp(13px, 1vw, 14px)", lineHeight: "1.5" }}>
                  Talk to our AI engineering team — we will help you identify the right use case, validate feasibility, and build a system that is production-ready from day one.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md transition-all hover:opacity-90"
                    style={{ fontFamily: MF, fontWeight: 600, background: "#200044", color: "#ffffff", fontSize: "13px" }}
                  >
                    Request a Consultation <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md border transition-all hover:bg-white/20"
                    style={{ fontFamily: MF, fontWeight: 600, color: "#200044", borderColor: "#200044", fontSize: "13px" }}
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
