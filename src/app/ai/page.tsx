import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import HeroCanvas from "@/components/HeroCanvas";
import {
  Brain, Cpu, Database, MessageSquare, BarChart3, Shield,
  ArrowRight, CheckCircle2, Globe, Users, Zap, Award,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artificial Intelligence Services | Kulana IT Solutions",
  description:
    "Enterprise AI consulting, model deployment, and intelligent automation. From machine learning to generative AI, Kulana helps you operationalise AI at scale.",
};

const capabilities = [
  { Icon: Brain,        label: "AI Strategy",           color: "text-violet-600", bg: "bg-violet-50",  border: "border-violet-100" },
  { Icon: Cpu,          label: "ML Engineering",         color: "text-purple-600", bg: "bg-purple-50",  border: "border-purple-100" },
  { Icon: MessageSquare,label: "Generative AI",          color: "text-blue-600",   bg: "bg-blue-50",    border: "border-blue-100"   },
  { Icon: Database,     label: "AI Data Pipelines",      color: "text-cyan-600",   bg: "bg-cyan-50",    border: "border-cyan-100"   },
  { Icon: BarChart3,    label: "MLOps & Monitoring",     color: "text-teal-600",   bg: "bg-teal-50",    border: "border-teal-100"   },
  { Icon: Shield,       label: "Responsible AI",         color: "text-indigo-600", bg: "bg-indigo-50",  border: "border-indigo-100" },
];

const features = [
  { label: "AI Readiness Assessment",        desc: "Evaluate your data maturity, infrastructure, and organisational readiness — then map a pragmatic path to AI adoption with clear ROI." },
  { label: "Custom Machine Learning Models", desc: "Design, train, and deploy bespoke ML models for forecasting, classification, anomaly detection, and recommendation at enterprise scale." },
  { label: "Generative AI Integration",      desc: "Embed large language models and multimodal AI into your products and workflows — from intelligent assistants to automated document processing." },
  { label: "AI Data Engineering",            desc: "Build the feature stores, data lakes, and real-time pipelines that feed your models with clean, reliable, and governed data." },
  { label: "MLOps & Model Lifecycle",        desc: "Automate model training, versioning, A/B testing, and drift monitoring so your AI systems stay accurate and production-ready." },
  { label: "AI Governance & Ethics",         desc: "Implement explainability frameworks, bias audits, and compliance controls to ensure your AI is transparent, fair, and regulatorily sound." },
];

const benefits = [
  { title: "Faster Decision-Making",   desc: "Real-time AI inference surfaces insights in seconds — reducing the lag between data and action across every business unit." },
  { title: "Measurable Efficiency",    desc: "Intelligent automation and predictive models cut operational overhead while improving the accuracy of high-stakes outcomes." },
  { title: "Competitive Differentiation", desc: "AI-powered products and services create moats that are hard for competitors to replicate — and sticky for the customers who rely on them." },
  { title: "Lower Risk",               desc: "Responsible AI practices, robust monitoring, and human-in-the-loop controls keep your AI systems auditable and trustworthy." },
];

const stats = [
  { Icon: Globe,  value: "20+", label: "Countries Served"    },
  { Icon: Users,  value: "50+", label: "Enterprise Clients"  },
  { Icon: Award,  value: "2",   label: "ISO Certifications"  },
  { Icon: Zap,    value: "15+", label: "Years of Expertise"  },
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
              <Brain className="w-4 h-4" /> Data &amp; AI Intelligence
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
                  <span key={tag} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-violet-50 border border-violet-100 rounded-full text-xs font-semibold text-violet-700">
                    <CheckCircle2 className="w-3 h-3" /> {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-10 border border-violet-100">
              <div className="space-y-5">
                {[
                  { step: "01", title: "Assess",  desc: "Audit your data assets, existing systems, and business problems to identify the highest-value AI opportunities." },
                  { step: "02", title: "Design",  desc: "Architect the right AI approach — custom models, fine-tuned LLMs, or AI-powered workflow automation — matched to the use case." },
                  { step: "03", title: "Build",   desc: "Engineer, train, evaluate, and deploy your AI solution with rigorous testing and responsible AI controls built in." },
                  { step: "04", title: "Operate", desc: "Monitor model performance, retrain on new data, and continuously improve — keeping your AI accurate and impactful over time." },
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
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">AI Services</h2>
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
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Why AI with Kulana</p>
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
            <div className="bg-gradient-to-br from-violet-600 to-blue-600 rounded-3xl p-10 md:p-14 text-white text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
                Ready to build with AI?
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Talk to our AI specialists and discover where intelligent automation and machine
                learning can create the most impact in your organisation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-violet-700 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:-translate-y-0.5">
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
