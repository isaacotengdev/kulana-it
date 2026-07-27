import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import HeroCanvas from "@/components/HeroCanvas";
import {
  Brain, BarChart3, Zap, RefreshCw,
  ArrowRight, CheckCircle2,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data & AI Intelligence | Kulana IT Solutions",
  description:
    "Turn data into strategic advantage with Kulana's Data, AI, and RPA services — advanced analytics, artificial intelligence, and intelligent process automation.",
};

const subServices = [
  {
    Icon: BarChart3,
    title: "Data",
    href: "/predictive-analysis",
    tag: "Analytics & BI",
    gradient: "from-cyan-500 to-blue-600",
    iconBg: "bg-cyan-600",
    tagColor: "bg-cyan-50 text-cyan-700 border-cyan-100",
    desc: "Build a data-driven organisation. From data strategy and governance to warehousing, pipelines, and business intelligence, we help you unlock the full value of your data assets.",
    highlights: ["Data Strategy & Governance", "Data Warehousing", "Business Intelligence", "Predictive Analytics"],
  },
  {
    Icon: Brain,
    title: "AI",
    href: "/ai-cloud-ai",
    tag: "Artificial Intelligence",
    gradient: "from-blue-500 to-teal-600",
    iconBg: "bg-blue-600",
    tagColor: "bg-blue-50 text-blue-700 border-blue-100",
    desc: "Deploy intelligent solutions that learn, adapt, and improve over time. From machine learning models to generative AI and large language models, we build AI that delivers measurable outcomes.",
    highlights: ["Machine Learning", "Generative AI & LLMs", "Computer Vision", "AI Strategy & Roadmapping"],
  },
  {
    Icon: RefreshCw,
    title: "RPA",
    href: "/rpa",
    tag: "Automation",
    gradient: "from-teal-500 to-blue-600",
    iconBg: "bg-teal-600",
    tagColor: "bg-teal-50 text-teal-700 border-teal-100",
    desc: "Automate repetitive, rule-based processes at scale with Robotic Process Automation. Free your teams to focus on high-value work while bots handle the rest — accurately and at speed.",
    highlights: ["Process Discovery & Design", "Bot Development & Deployment", "Attended & Unattended Bots", "Process Monitoring & Optimisation"],
  },
];

export default function DataAiIntelligencePage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">

        {/* Hero */}
        <section className="gradient-hero relative overflow-hidden py-28 text-white">
          <HeroCanvas variant="data-ai" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-cyan-300 mb-5">
              <Brain className="w-4 h-4" /> Our Services
            </span>
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Data and AI Intelligence
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
              Turn data into your competitive edge. Advanced analytics, artificial intelligence,
              and intelligent automation that drive smarter decisions at every level.
            </p>
          </div>
        </section>

        {/* Sub-services */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">What We Deliver</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              Data. AI. Automation. All Together.
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Our Data and AI Intelligence practice helps organisations harness the power of their
              data, apply intelligence at scale, and automate processes that slow them down.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {subServices.map(({ Icon, title, href, tag, gradient, iconBg, tagColor, desc, highlights }) => (
              <div
                key={title}
                className="group bg-white rounded-3xl border border-gray-100 hover:border-blue-100 hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className={`h-1.5 bg-gradient-to-r ${gradient}`} />
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${iconBg} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" strokeWidth={1.75} />
                    </div>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${tagColor}`}>
                      {tag}
                    </span>
                  </div>
                  <h2 className="text-xl font-extrabold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">{desc}</p>
                  <div className="space-y-2 mb-6">
                    {highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00C8D8] flex-shrink-0" />
                        <span className="text-xs font-medium text-gray-600">{h}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors group/link"
                  >
                    Learn more <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
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
                Ready to unlock the power of your data?
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Talk to our data and AI specialists to discover how intelligence can transform your organisation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:-translate-y-0.5"
                >
                  Request a Consultation <ArrowRight className="w-4 h-4" />
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
