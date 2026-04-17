import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import HeroCanvas from "@/components/HeroCanvas";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI & Cloud AI | Kulana Academy",
  description:
    "Learn how to integrate AI and cloud technologies into your business processes to improve efficiency, reduce costs, and stay ahead in a competitive market.",
};

const tracks = [
  {
    name: "Predictive AI",
    modules: [
      { num: "01", title: "Predictive AI Fundamentals", desc: "Core concepts, models, and practical applications of predictive AI systems in business contexts." },
      { num: "02", title: "Advanced Predictive AI", desc: "Deep-dive into advanced predictive techniques, neural network architectures, and optimisation." },
      { num: "03", title: "Predictive AI Lab", desc: "Case study exercises applying predictive AI knowledge to real-world business problem-solving." },
    ],
  },
  {
    name: "Generative AI",
    modules: [
      { num: "04", title: "Generative AI Foundations", desc: "Introduction to generative models, large language models, and their business applications." },
      { num: "05", title: "Advanced Generative AI", desc: "GANs, VAEs, diffusion models, and advanced generative techniques for enterprise use cases." },
      { num: "06", title: "Generative AI Lab", desc: "Applied exercises using generative AI tools and techniques in practical business scenarios." },
    ],
  },
  {
    name: "AI Engineering",
    modules: [
      { num: "07", title: "Predictive AI Engineering", desc: "Engineering practices for building, deploying, and maintaining predictive AI systems at scale." },
      { num: "08", title: "Neural Network Optimisation", desc: "Techniques for optimising neural network performance, training efficiency, and production readiness." },
      { num: "09", title: "AI Engineering Lab", desc: "Hands-on exercises applying AI engineering patterns to design and deploy production AI systems." },
    ],
  },
  {
    name: "Generative AI Engineering",
    modules: [
      { num: "10", title: "Generative AI Engineering", desc: "Engineering and deployment of generative AI systems including GANs, VAEs, and diffusion architectures." },
      { num: "11", title: "Generative Models in Practice", desc: "Real-world implementation patterns, fine-tuning strategies, and evaluation frameworks." },
      { num: "12", title: "Generative Engineering Lab", desc: "Applied exercises implementing and evaluating generative AI solutions for business scenarios." },
    ],
  },
  {
    name: "AI Architecture",
    modules: [
      { num: "13", title: "AI System Architecture", desc: "Architectural patterns for designing scalable, resilient, and maintainable AI systems." },
      { num: "14", title: "Scalability & Resiliency", desc: "Design approaches for AI system scalability, fault tolerance, and performance under load." },
      { num: "15", title: "AI Architecture Lab", desc: "Architecture design exercises using patterns and case studies from real enterprise deployments." },
    ],
  },
  {
    name: "Agentic AI",
    modules: [
      { num: "16", title: "Agentic AI Concepts", desc: "Introduction to autonomous AI agents, agent architectures, and orchestration frameworks." },
      { num: "17", title: "Agent Coordination", desc: "Multi-agent systems, coordination protocols, and designing collaborative AI agent networks." },
      { num: "18", title: "Autonomous Systems Lab", desc: "Applied exercises building and evaluating autonomous AI agent systems for business applications." },
    ],
  },
];

export default function AiCloudAiPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="gradient-hero relative overflow-hidden py-28 text-white">
          <HeroCanvas variant="ai-cloud" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-cyan-300 font-medium mb-4 uppercase tracking-widest text-sm">Kulana Academy</p>
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">AI & Cloud AI</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
              Learn how to integrate AI and cloud technologies into your business processes to improve
              efficiency, reduce costs, and stay ahead in a competitive market.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Register Your Interest
            </Link>
          </div>
        </section>

        {/* ── Program Overview ─────────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6">
                AI & Cloud AI Professional Program
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Delivered collaboratively with Arcitura, this initiative equips participants with
                practical guidance for adopting AI technologies in scalable cloud environments. Training
                is offered in both in-person and virtual formats, structured to support certification
                achievement and real-world implementation.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                The programme helps professionals understand practical AI application within cloud
                environments to enhance operations and business results — building foundational and
                advanced competencies through focused tracks.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-10 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Program Structure</h3>
              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                  <p><span className="font-semibold text-gray-900">18 modules</span> across 6 focused tracks covering Predictive AI, Generative AI, Engineering, Architecture, and Agentic AI.</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                  <p><span className="font-semibold text-gray-900">Flexible delivery</span> — virtual workshops, in-person sessions, or self-paced learning kits.</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                  <p><span className="font-semibold text-gray-900">Official certification</span> from Arcitura upon passing required exams via Pearson VUE.</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                  <p><span className="font-semibold text-gray-900">Digital badges</span> issued through Credly/Acclaim to verify and share your credentials.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Course Modules ───────────────────────────────────────────── */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">Course Modules</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                18 modules across 6 specialist tracks, combining theory, advanced concepts, and
                hands-on labs for each area of the curriculum.
              </p>
            </div>
            <div className="space-y-12">
              {tracks.map((track) => (
                <div key={track.name}>
                  <h3 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-3">
                    <span className="w-2 h-6 bg-blue-600 rounded-full inline-block" />
                    {track.name}
                  </h3>
                  <div className="grid md:grid-cols-3 gap-5">
                    {track.modules.map(({ num, title, desc }) => (
                      <div key={num} className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all">
                        <div className="text-xs font-bold text-blue-600 mb-2">Module {num}</div>
                        <h4 className="font-bold text-gray-900 mb-2">{title}</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section className="gradient-primary py-20 text-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
              Ready to lead with AI?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Contact us to register your interest or find out more about the AI & Cloud AI programme.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Get in Touch
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
