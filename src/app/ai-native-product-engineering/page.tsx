import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import HeroCanvas from "@/components/HeroCanvas";
import {
  Cpu, Brain, Zap, MessageSquare, Eye, GitMerge,
  ArrowRight, CheckCircle2, Globe, Users, Award,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI-Native Product Engineering | Kulana IT Solutions",
  description:
    "Build products with intelligence at their core — LLM integration, machine learning, generative AI, and AI product strategy.",
};

const capabilities = [
  { Icon: Brain,        label: "LLM Integration",       color: "text-violet-600",  bg: "bg-violet-50",  border: "border-violet-100" },
  { Icon: Cpu,          label: "ML Model Development",  color: "text-purple-600",  bg: "bg-purple-50",  border: "border-purple-100" },
  { Icon: MessageSquare,label: "Generative AI",         color: "text-indigo-600",  bg: "bg-indigo-50",  border: "border-indigo-100" },
  { Icon: Eye,          label: "Computer Vision",        color: "text-blue-600",    bg: "bg-blue-50",    border: "border-blue-100" },
  { Icon: GitMerge,     label: "AI Integration",        color: "text-cyan-600",    bg: "bg-cyan-50",    border: "border-cyan-100" },
  { Icon: Zap,          label: "AI Product Strategy",   color: "text-amber-600",   bg: "bg-amber-50",   border: "border-amber-100" },
];

const features = [
  { label: "LLM & Generative AI Integration", desc: "Embed large language models — GPT, Claude, Gemini — into your products and workflows with robust, production-grade architectures." },
  { label: "Machine Learning Development",    desc: "Build and deploy custom ML models for classification, prediction, recommendation, and anomaly detection." },
  { label: "AI Product Strategy",             desc: "Define where AI creates the most value in your product, and build a roadmap to get there responsibly and at pace." },
  { label: "Computer Vision",                 desc: "Document processing, visual inspection, and image recognition — trained on your data and deployed in your environment." },
  { label: "Natural Language Processing",     desc: "Extract, classify, and understand unstructured text at scale — from financial documents to customer communications." },
  { label: "RAG & Knowledge Systems",         desc: "Build retrieval-augmented generation systems that ground AI responses in your proprietary data and knowledge bases." },
];

const benefits = [
  { title: "Competitive Differentiation", desc: "AI capabilities built into your core product create moats that are hard for competitors to replicate quickly." },
  { title: "Faster Decision-Making",      desc: "Intelligent systems surface insights and recommendations at the moment they are needed, not after the fact." },
  { title: "Operational Leverage",        desc: "AI handles high-volume, cognitive tasks at scale — freeing your team to focus on higher-value work." },
  { title: "Responsible AI by Design",    desc: "We build with explainability, bias mitigation, and governance frameworks embedded from day one." },
];

const stats = [
  { Icon: Globe,  value: "20+", label: "Countries Served"   },
  { Icon: Users,  value: "50+", label: "Enterprise Clients" },
  { Icon: Award,  value: "2",   label: "ISO Certifications" },
  { Icon: Zap,    value: "15+", label: "Years of Expertise" },
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
              <Cpu className="w-4 h-4" /> Integration &amp; Digital Connectivity
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
                  <span key={tag} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-violet-50 border border-violet-100 rounded-full text-xs font-semibold text-violet-700">
                    <CheckCircle2 className="w-3 h-3" /> {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-violet-50 to-indigo-50 rounded-3xl p-10 border border-violet-100">
              <div className="space-y-5">
                {[
                  { step: "01", title: "Discover",  desc: "Identify where AI creates the most value in your product, process, or customer experience." },
                  { step: "02", title: "Design",    desc: "Architect the AI system — models, data pipelines, APIs, guardrails, and evaluation frameworks." },
                  { step: "03", title: "Build",     desc: "Develop and iterate using agile ML engineering — from prototype to production." },
                  { step: "04", title: "Operate",   desc: "Monitor model performance, manage drift, retrain on new data, and continuously improve." },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-violet-600 flex items-center justify-center shadow-sm">
                      <span className="text-xs font-black text-white">{step}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">{title}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">What We Deliver</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">AI Engineering Services</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map(({ label, desc }, i) => (
                <div key={label} className="group flex gap-4 p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:border-violet-100 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-violet-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <span className="text-xs font-black text-white">0{i + 1}</span>
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

        {/* Benefits */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Why AI-Native</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">Benefits</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map(({ title, desc }) => (
                <div key={title} className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-violet-100 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-violet-600 mb-5 flex items-center justify-center shadow-md">
                    <Brain className="w-6 h-6 text-white" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-white border-y border-gray-100 py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map(({ Icon, value, label }) => (
                <div key={label} className="text-center">
                  <Icon className="w-6 h-6 text-blue-600 mx-auto mb-3" strokeWidth={1.75} />
                  <p className="text-3xl font-extrabold text-gray-900">{value}</p>
                  <p className="text-gray-500 text-sm mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-10 md:p-14 text-white text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Cpu className="w-8 h-8 text-white" strokeWidth={1.5} />
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
