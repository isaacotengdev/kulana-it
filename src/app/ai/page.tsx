import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

const MF = "var(--font-manrope), sans-serif";

export const metadata: Metadata = {
  title: "Artificial Intelligence Services | Kulana IT Solutions",
  description:
    "Enterprise AI consulting, model deployment, and intelligent automation. From machine learning to generative AI, Kulana helps you operationalise AI at scale.",
};

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
      <main>

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden" style={{ minHeight: "840px" }}>
          <Image
            src="/images/Data_AI_Intelligence/Hero image_AI_2560×1440px.webp"
            alt="Artificial Intelligence"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(8,0,32,0.40) 0%, rgba(8,0,32,0.25) 45%, rgba(8,0,32,0.10) 75%, rgba(8,0,32,0.02) 100%)" }}
          />
          <div
            className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8"
            style={{ paddingTop: "calc(80px + 90px)", paddingBottom: "90px" }}
          >
            <div>
              <p className="inline-block tracking-[0.18em] uppercase mb-6" style={{ fontFamily: MF, fontWeight: 600, color: "#57D9D4", fontSize: "30px" }}>
                Data &amp; AI Intelligence
              </p>
              <h1
                className="text-white uppercase leading-tight"
                style={{ fontFamily: MF, fontWeight: 500, fontSize: "clamp(56px, 7vw, 90px)" }}
              >
                Artificial<br />Intelligence
              </h1>
            </div>
            <div style={{ marginTop: "140px" }}>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-md transition-all shadow-lg hover:-translate-y-0.5"
                style={{ fontFamily: MF, fontWeight: 600, background: "#57D9D4", color: "#040d28", fontSize: "20px" }}
              >
                Request a Consultation <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Overview ─────────────────────────────────────────────────── */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Label + black rule */}
            <div className="mb-10">
              <span className="tracking-[0.18em] uppercase" style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "25px" }}>
                Overview
              </span>
              <div className="w-full h-px mt-3" style={{ background: "#000000" }} />
            </div>

            {/* Heading */}
            <h2 className="leading-tight mb-10" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "45px" }}>
              Turn data into decisions with enterprise AI
            </h2>

            {/* 2-col: description left, tags right */}
            <div className="grid lg:grid-cols-[3fr_2fr] gap-12 items-start">
              <div>
                <p className="mb-8" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "30px", lineHeight: "40px" }}>
                  AI is no longer experimental — it is a core competitive driver for enterprises that want to lead in their markets. But moving from pilot to production requires the right strategy, the right architecture, and the right operating model.
                </p>
                <p style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "30px", lineHeight: "40px" }}>
                  Kulana&apos;s AI practice brings together data engineering, machine learning, and domain expertise to deliver AI solutions that are production-grade, explainable, and aligned with your business objectives — not just technically impressive.
                </p>
              </div>
              <div className="flex flex-col gap-4 items-end">
                {["TensorFlow", "PyTorch", "Azure OpenAI", "MLOps"].map((tag) => (
                  <div key={tag} className="flex items-center justify-center py-4 rounded-lg text-center"
                    style={{ border: "1.5px solid #57D9D4", fontFamily: MF, fontWeight: 700, color: "#200044", fontSize: "25px", maxWidth: "340px", width: "100%" }}>
                    {tag}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ── How to Get Started ───────────────────────────────────────── */}
        <section style={{ background: "#200044" }} className="py-16 lg:py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Label + white rule */}
            <div className="mb-12">
              <span className="tracking-[0.18em] uppercase" style={{ fontFamily: MF, fontWeight: 600, color: "#ffffff", fontSize: "25px" }}>
                How to Get Started
              </span>
              <div className="w-full h-px mt-3" style={{ background: "#ffffff" }} />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                { step: "01", title: "Assess",   desc: "Audit your data assets, existing systems, and business problems to identify the highest-value AI opportunities." },
                { step: "02", title: "Design",   desc: "Architect the right AI approach — custom models, fine-tuned LLMs, or AI-powered workflow automation — matched to the use case." },
                { step: "03", title: "Build",    desc: "Engineer, train, evaluate, and deploy your AI solution with rigorous testing and responsible AI controls built in." },
                { step: "04", title: "Operate",  desc: "Monitor model performance, retrain on new data, and continuously improve — keeping your AI accurate and impactful over time." },
              ].map(({ step, title, desc }) => (
                <div key={step}>
                  <p className="leading-none mb-4" style={{ fontFamily: MF, fontWeight: 400, color: "#a198af", fontSize: "70px" }}>{step}</p>
                  <p className="mb-4" style={{ fontFamily: MF, fontWeight: 400, color: "#57D9D4", fontSize: "45px" }}>{title}</p>
                  <p style={{ fontFamily: MF, fontWeight: 400, color: "#ffffff", fontSize: "25px", lineHeight: "30px" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Applications ─────────────────────────────────────────────── */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Label + black rule */}
            <div className="mb-10">
              <span className="tracking-[0.18em] uppercase" style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "25px" }}>
                Applications
              </span>
              <div className="w-full h-px mt-3" style={{ background: "#000000" }} />
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
              <h2 className="leading-tight" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "45px" }}>
                Real-world use cases
              </h2>
              <p className="lg:pt-2" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "30px", lineHeight: "40px" }}>
                Enterprise AI creates measurable value across every industry and business function.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { label: "Fraud Detection",                  desc: "Real-time anomaly detection models that flag suspicious transactions before they are processed." },
                { label: "Intelligent Document Processing",  desc: "Automated extraction and classification of data from invoices, contracts, and regulatory filings." },
                { label: "Demand Forecasting",               desc: "ML models that predict demand patterns to optimise inventory, staffing, and procurement." },
                { label: "Customer Churn Prediction",        desc: "Identify at-risk customers before they leave and trigger targeted retention interventions." },
                { label: "AI-Powered Search",                desc: "Semantic search across enterprise knowledge bases, documents, and product catalogues." },
                { label: "Regulatory Compliance AI",         desc: "Automated screening and classification to support KYC, AML, and regulatory reporting." },
              ].map(({ label, desc }) => (
                <div key={label} className="bg-white border border-gray-100 rounded-xl p-6">
                  <p className="mb-3" style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "35px" }}>{label}</p>
                  <p style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "25px", lineHeight: "30px" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What We Deliver ──────────────────────────────────────────── */}
        <section style={{ background: "#f5f5f5" }} className="py-16 lg:py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Label + black rule */}
            <div className="mb-10">
              <span className="tracking-[0.18em] uppercase" style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "25px" }}>
                What We Deliver
              </span>
              <div className="w-full h-px mt-3" style={{ background: "#000000" }} />
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
              <h2 className="leading-tight" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "45px" }}>
                AI services from strategy to production
              </h2>
              <p className="lg:pt-2" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "30px", lineHeight: "40px" }}>
                A full-spectrum AI practice covering strategy, engineering, deployment, and responsible governance.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { label: "AI Readiness Assessment",        desc: "Evaluate your data maturity, infrastructure, and organisational readiness — then map a pragmatic path to AI adoption with clear ROI." },
                { label: "Custom Machine Learning Models", desc: "Design, train, and deploy bespoke ML models for forecasting, classification, anomaly detection, and recommendation at enterprise scale." },
                { label: "Generative AI Integration",      desc: "Embed large language models and multimodal AI into your products and workflows — from intelligent assistants to automated document processing." },
                { label: "AI Data Engineering",            desc: "Build the feature stores, data lakes, and real-time pipelines that feed your models with clean, reliable, and governed data." },
                { label: "MLOps and Model Lifecycle",      desc: "Automate model training, versioning, A/B testing, and drift monitoring so your AI systems stay accurate and production-ready." },
                { label: "AI Governance and Ethics",       desc: "Implement explainability frameworks, bias audits, and compliance controls to ensure your AI is transparent, fair, and regulatorily sound." },
              ].map(({ label, desc }) => (
                <div key={label} className="bg-white border border-gray-100 rounded-xl p-6">
                  <p className="mb-3" style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "35px" }}>{label}</p>
                  <p style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "25px", lineHeight: "30px" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why It Matters ───────────────────────────────────────────── */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Label + black rule */}
            <div className="mb-10">
              <span className="tracking-[0.18em] uppercase" style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "25px" }}>
                Why It Matters
              </span>
              <div className="w-full h-px mt-3" style={{ background: "#000000" }} />
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
              <h2 className="leading-tight" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "45px" }}>
                What production-grade AI delivers
              </h2>
              <p className="lg:pt-2" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "30px", lineHeight: "40px" }}>
                Enterprise AI that is explainable, governed, and aligned with your business objectives — not just technically impressive.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "Faster Decision-Making",      desc: "Real-time AI inference surfaces insights in seconds — reducing the lag between data and action across every business unit." },
                { title: "Measurable Efficiency",       desc: "Intelligent automation and predictive models cut operational overhead while improving the accuracy of high-stakes outcomes." },
                { title: "Competitive Differentiation", desc: "AI-powered products and services create moats that are hard for competitors to replicate — and sticky for the customers who rely on them." },
                { title: "Lower Risk",                  desc: "Responsible AI practices, robust monitoring, and human-in-the-loop controls keep your AI systems auditable and trustworthy." },
              ].map(({ title, desc }) => (
                <div key={title} className="rounded-xl p-6" style={{ border: "1.5px solid #57D9D4", background: "#f1ffff" }}>
                  <p className="mb-3" style={{ fontFamily: MF, fontWeight: 400, color: "#57D9D4", fontSize: "35px" }}>{title}</p>
                  <p style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "25px", lineHeight: "30px" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Label + black rule */}
            <div className="mb-12">
              <span className="tracking-[0.18em] uppercase" style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "25px" }}>FAQ</span>
              <div className="w-full h-px mt-3" style={{ background: "#000000" }} />
            </div>

            {/* Row 1: heading left | description right */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-10">
              <h2 className="leading-tight" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "45px" }}>
                Your questions<br />answered
              </h2>
              <p style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "30px", lineHeight: "40px" }}>
                Everything you need to know about our AI practice.
              </p>
            </div>

            {/* Row 2: image left | accordion right */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div className="relative w-full rounded-2xl overflow-hidden lg:mt-24" style={{ aspectRatio: "4/5", maxWidth: "320px" }}>
                <Image src="/images/integration_digital_connectivity/AI-Native Product Engineering.webp" alt="AI" fill className="object-cover object-center" sizes="320px" />
              </div>

              <div className="divide-y" style={{ borderColor: "#e5e7eb" }}>
                {faqs.map(({ q, a }) => (
                  <details key={q} className="group py-5">
                    <summary className="flex items-center justify-between gap-6 cursor-pointer list-none">
                      <span style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "25px", lineHeight: "30px" }}>{q}</span>
                      <span className="flex-shrink-0 leading-none select-none" style={{ color: "#000000", fontSize: "22px" }}>
                        <span className="group-open:hidden">+</span>
                        <span className="hidden group-open:inline">−</span>
                      </span>
                    </summary>
                    <p className="mt-4" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "25px", lineHeight: "30px" }}>{a}</p>
                  </details>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section style={{ background: "#57D9D4" }}>
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-20">
              <h2
                className="leading-tight lg:w-[45%] flex-shrink-0"
                style={{ fontFamily: MF, fontWeight: 700, color: "#200044", fontSize: "53px" }}
              >
                Ready to build with AI?
              </h2>
              <div className="flex-1">
                <p className="mb-8" style={{ fontFamily: MF, fontWeight: 400, color: "#200044", fontSize: "25px", lineHeight: "30px" }}>
                  Talk to our AI specialists and discover where intelligent automation and machine learning can create the most impact in your organisation.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md transition-all hover:opacity-90"
                    style={{ fontFamily: MF, fontWeight: 600, background: "#200044", color: "#ffffff", fontSize: "20px" }}
                  >
                    Request a Consultation <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md border transition-all hover:bg-white/20"
                    style={{ fontFamily: MF, fontWeight: 600, color: "#200044", borderColor: "#200044", fontSize: "20px" }}
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
