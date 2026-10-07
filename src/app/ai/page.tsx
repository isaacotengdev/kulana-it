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

        {/* Hero */}
        <section className="relative overflow-hidden" style={{ height: "100vh" }}>
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
            style={{ background: "linear-gradient(to right, rgba(8,0,32,0.72) 0%, rgba(8,0,32,0.52) 45%, rgba(8,0,32,0.22) 75%, rgba(8,0,32,0.06) 100%)" }}
          />
          <div
            className="relative z-10 flex flex-col w-full h-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8"
            style={{ paddingTop: "calc(5rem + 28vh)", paddingBottom: "5rem" }}
          >
            <div>
              <p className="text-xs tracking-[0.22em] uppercase mb-4" style={{ fontFamily: MF, fontWeight: 600, color: "#57D9D4" }}>
                Data &amp; AI Intelligence
              </p>
              <h1
                className="text-5xl sm:text-6xl lg:text-8xl font-bold uppercase text-white leading-[1.0]"
                style={{ fontFamily: MF }}
              >
                Artificial<br />Intelligence
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
              Turn data into decisions with enterprise AI
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4" style={{ fontFamily: MF }}>
              AI is no longer experimental — it is a core competitive driver for enterprises that want to lead in their markets. But moving from pilot to production requires the right strategy, the right architecture, and the right operating model.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10" style={{ fontFamily: MF }}>
              Kulana&apos;s AI practice brings together data engineering, machine learning, and domain expertise to deliver AI solutions that are production-grade, explainable, and aligned with your business objectives — not just technically impressive.
            </p>
            <div className="flex flex-wrap lg:flex-nowrap gap-3">
              {["TensorFlow", "PyTorch", "Azure OpenAI", "MLOps"].map((tag) => (
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
                { step: "01", title: "Assess",   desc: "Audit your data assets, existing systems, and business problems to identify the highest-value AI opportunities." },
                { step: "02", title: "Design",   desc: "Architect the right AI approach — custom models, fine-tuned LLMs, or AI-powered workflow automation — matched to the use case." },
                { step: "03", title: "Build",    desc: "Engineer, train, evaluate, and deploy your AI solution with rigorous testing and responsible AI controls built in." },
                { step: "04", title: "Operate",  desc: "Monitor model performance, retrain on new data, and continuously improve — keeping your AI accurate and impactful over time." },
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
                Enterprise AI creates measurable value across every industry and business function.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { label: "Fraud Detection",                  desc: "Real-time anomaly detection models that flag suspicious transactions before they are processed." },
                { label: "Intelligent Document Processing",  desc: "Automated extraction and classification of data from invoices, contracts, and regulatory filings." },
                { label: "Demand Forecasting",               desc: "ML models that predict demand patterns to optimise inventory, staffing, and procurement." },
                { label: "Customer Churn Prediction",        desc: "Identify at-risk customers before they leave and trigger targeted retention interventions." },
                { label: "AI-Powered Search",                desc: "Semantic search across enterprise knowledge bases, documents, and product catalogues." },
                { label: "Regulatory Compliance AI",         desc: "Automated screening and classification to support KYC, AML, and regulatory reporting." },
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
                AI services from strategy to production
              </h2>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: MF }}>
                A full-spectrum AI practice covering strategy, engineering, deployment, and responsible governance.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { label: "AI Readiness Assessment",        desc: "Evaluate your data maturity, infrastructure, and organisational readiness — then map a pragmatic path to AI adoption with clear ROI." },
                { label: "Custom Machine Learning Models", desc: "Design, train, and deploy bespoke ML models for forecasting, classification, anomaly detection, and recommendation at enterprise scale." },
                { label: "Generative AI Integration",      desc: "Embed large language models and multimodal AI into your products and workflows — from intelligent assistants to automated document processing." },
                { label: "AI Data Engineering",            desc: "Build the feature stores, data lakes, and real-time pipelines that feed your models with clean, reliable, and governed data." },
                { label: "MLOps and Model Lifecycle",      desc: "Automate model training, versioning, A/B testing, and drift monitoring so your AI systems stay accurate and production-ready." },
                { label: "AI Governance and Ethics",       desc: "Implement explainability frameworks, bias audits, and compliance controls to ensure your AI is transparent, fair, and regulatorily sound." },
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
                What production-grade AI delivers
              </h2>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: MF }}>
                Enterprise AI that is explainable, governed, and aligned with your business objectives — not just technically impressive.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Faster Decision-Making",      desc: "Real-time AI inference surfaces insights in seconds — reducing the lag between data and action across every business unit." },
                { title: "Measurable Efficiency",       desc: "Intelligent automation and predictive models cut operational overhead while improving the accuracy of high-stakes outcomes." },
                { title: "Competitive Differentiation", desc: "AI-powered products and services create moats that are hard for competitors to replicate — and sticky for the customers who rely on them." },
                { title: "Lower Risk",                  desc: "Responsible AI practices, robust monitoring, and human-in-the-loop controls keep your AI systems auditable and trustworthy." },
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
                  <Image src="/images/integration_digital_connectivity/AI-Native Product Engineering.webp" alt="AI" fill className="object-cover object-center" sizes="320px" />
                </div>
              </div>
              <div>
                <p className="text-gray-600 leading-relaxed mb-10" style={{ fontFamily: MF }}>
                  Everything you need to know about our AI practice.
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
                Ready to build with AI?
              </h2>
              <div className="flex-1">
                <p className="text-base leading-relaxed mb-8" style={{ fontFamily: MF, color: "#200044", opacity: 0.85 }}>
                  Talk to our AI specialists and discover where intelligent automation and machine learning can create the most impact in your organisation.
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
