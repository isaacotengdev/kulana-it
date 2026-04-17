import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import HeroCanvas from "@/components/HeroCanvas";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Transformation | Kulana Academy",
  description:
    "Support your organisation's growth by developing the operational skills needed to implement effective digital change across teams and systems.",
};

const modules = [
  { num: "01", title: "Fundamental Digital Transformation", desc: "Covers practices, models, technologies, benefits, challenges, and adoption considerations for digital change." },
  { num: "02", title: "Digital Transformation in Practice", desc: "Explores contemporary technologies, business process improvements, leadership models, and digital trust." },
  { num: "03", title: "Fundamental Cloud Computing", desc: "End-to-end coverage of cloud topics relevant to digital transformation initiatives." },
  { num: "04", title: "Fundamental Blockchain", desc: "Explains blockchain architecture and its business applications in accessible, practical terms." },
  { num: "05", title: "Fundamental IoT", desc: "Covers Internet of Things essentials from both business and technical perspectives." },
  { num: "06", title: "Cloud Architecture", desc: "Technical examination of cloud platforms, SaaS, PaaS, IaaS, elasticity, and containerisation." },
  { num: "07", title: "Blockchain Architecture", desc: "Explores blockchain design patterns, architectural models, and enterprise integration approaches." },
  { num: "08", title: "IoT Architecture", desc: "Breaks down IoT environments into building blocks, design patterns, and deployment models." },
  { num: "09", title: "Fundamental Big Data", desc: "Overview of Big Data science, data analysis practices, and business value extraction." },
  { num: "10", title: "Fundamental Machine Learning", desc: "Easy-to-understand introduction to machine learning systems, algorithms, and business applications." },
  { num: "11", title: "Fundamental AI", desc: "Coverage of artificial intelligence and neural networks explained in plain, accessible language." },
  { num: "12", title: "Advanced Big Data", desc: "In-depth exploration of data science methodologies, advanced analysis techniques, and engineering practices." },
  { num: "13", title: "Advanced Machine Learning", desc: "Algorithms, methods, and models for solving complex business problems with machine learning." },
  { num: "14", title: "Advanced AI", desc: "Data preparation, neural network design, optimisation techniques, and production AI deployment." },
  { num: "15", title: "Fundamental Cybersecurity", desc: "Essential cybersecurity solutions, practices, and foundational security concepts for digital organisations." },
  { num: "16", title: "Advanced Cybersecurity", desc: "Technology mechanisms, cyber threats, mitigation strategies, and advanced security architectures." },
  { num: "17", title: "Fundamental RPA", desc: "Robotic process automation components, bot types, architectures, and business automation use cases." },
  { num: "18", title: "Advanced RPA and Intelligent Automation", desc: "Combining AI with RPA for autonomous decision-making and intelligent end-to-end process automation." },
];

export default function DigitalTransformationPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="gradient-hero relative overflow-hidden py-28 text-white">
          <HeroCanvas variant="digital-transformation" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-cyan-300 font-medium mb-4 uppercase tracking-widest text-sm">Kulana Academy</p>
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">Digital Transformation</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
              Support your organisation&apos;s growth by developing the operational skills needed to
              implement effective digital change across teams and systems.
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
                Digital Transformation Professional Program
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                The programme, developed by Arcitura, equips professionals with practical strategies
                to navigate digital change. Participants learn to align technology with business
                objectives, enhance customer experience, and drive innovation across their organisation.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Training is offered through virtual workshops, on-site sessions, self-paced kits, and
                eLearning — with certification pathways that prepare IT and business professionals to
                lead transformation projects with confidence.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-10 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Program Structure</h3>
              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                  <p><span className="font-semibold text-gray-900">18 course modules</span> covering Cloud, Blockchain, IoT, Big Data, AI, ML, Cybersecurity, and RPA.</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                  <p><span className="font-semibold text-gray-900">Flexible delivery</span> — virtual workshops, on-site sessions, or self-paced eLearning kits.</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                  <p><span className="font-semibold text-gray-900">Arcitura certification</span> awarded upon passing exams via Pearson VUE OnVUE, test centres, or on-site.</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                  <p><span className="font-semibold text-gray-900">Verified digital badges</span> issued through Credly/Acclaim to share your certification credentials.</p>
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
                18 comprehensive modules spanning fundamental and advanced topics across all key
                digital transformation technology domains.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {modules.map(({ num, title, desc }) => (
                <div key={num} className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all">
                  <div className="text-xs font-bold text-blue-600 mb-2">Module {num}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section className="gradient-primary py-20 text-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
              Ready to lead digital change?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Contact us to register your interest or find out more about the Digital Transformation programme.
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
