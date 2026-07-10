import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import HeroCanvas from "@/components/HeroCanvas";
import {
  Network, Plug, Layers, Cpu,
  ArrowRight, CheckCircle2, Globe, Users, Zap, Award,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integration & Digital Connectivity | Kulana IT Solutions",
  description:
    "Seamless integration architectures and AI-native engineering — Integration, Enterprise Architecture, and AI-Native Product Engineering.",
};

const subServices = [
  {
    Icon: Plug,
    title: "Integration",
    href: "/digital-integrations-api-management",
    tag: "API & Middleware",
    gradient: "from-cyan-500 to-blue-600",
    iconBg: "bg-cyan-600",
    tagColor: "bg-cyan-50 text-cyan-700 border-cyan-100",
    desc: "Connect disparate systems, automate data flows, and manage APIs at enterprise scale. We implement WSO2 and other leading middleware platforms to create a truly unified digital ecosystem.",
    highlights: ["API Management", "Middleware Integration", "ESB & Event Streaming", "Data Synchronisation"],
  },
  {
    Icon: Layers,
    title: "Enterprise Architecture",
    href: "/enterprise-architecture",
    tag: "Architecture",
    gradient: "from-indigo-500 to-indigo-700",
    iconBg: "bg-indigo-600",
    tagColor: "bg-indigo-50 text-indigo-700 border-indigo-100",
    desc: "Design a coherent technology landscape that aligns with your business strategy. Our enterprise architects define the blueprints, standards, and governance frameworks that guide your digital evolution.",
    highlights: ["TOGAF-aligned Frameworks", "Technology Roadmapping", "Architecture Governance", "Cloud Strategy"],
  },
  {
    Icon: Cpu,
    title: "AI-Native Product Engineering",
    href: "/ai-native-product-engineering",
    tag: "AI Engineering",
    gradient: "from-violet-500 to-purple-700",
    iconBg: "bg-violet-600",
    tagColor: "bg-violet-50 text-violet-700 border-violet-100",
    desc: "Build products with intelligence at their core. We engineer AI-native applications that embed machine learning, natural language processing, and intelligent automation from day one.",
    highlights: ["LLM Integration", "ML Model Development", "Intelligent Automation", "AI Product Strategy"],
  },
];

const stats = [
  { Icon: Globe,  value: "20+", label: "Countries Served"   },
  { Icon: Users,  value: "50+", label: "Enterprise Clients" },
  { Icon: Award,  value: "2",   label: "ISO Certifications" },
  { Icon: Zap,    value: "15+", label: "Years of Expertise" },
];

export default function IntegrationDigitalConnectivityPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">

        {/* Hero */}
        <section className="gradient-hero relative overflow-hidden py-28 text-white">
          <HeroCanvas variant="integration-digital" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-cyan-300 mb-5">
              <Network className="w-4 h-4" /> Our Services
            </span>
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Integration &amp; Digital Connectivity
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
              Connect everything. Accelerate everything. Seamless integration architectures
              and AI-native engineering that unify your digital landscape.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-6">
              {stats.map(({ Icon, value, label }) => (
                <div key={label} className="flex items-center gap-3 px-5 py-3 bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm">
                  <Icon className="w-5 h-5 text-cyan-300" strokeWidth={1.75} />
                  <div className="text-left">
                    <p className="text-xl font-extrabold text-white leading-none">{value}</p>
                    <p className="text-xs text-blue-200 leading-none mt-0.5">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sub-services */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">What We Deliver</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              Three Disciplines. One Connected Enterprise.
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              From API integration and enterprise architecture to AI-native product engineering,
              we help you build a connected, future-ready digital foundation.
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
                <Network className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
                Ready to connect your digital ecosystem?
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Talk to our integration specialists and discover how we can unify your technology landscape.
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
