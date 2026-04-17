import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import HeroCanvas from "@/components/HeroCanvas";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next-Gen Data Science | Kulana Academy",
  description:
    "Discover how data can drive smarter business decisions with practical training designed to help your team turn information into strategic insight.",
};

const tracks = [
  {
    name: "Business Technology",
    modules: [
      { num: "01", title: "Business Automation Technology Overview", desc: "Non-technical coverage of Cloud Computing, RPA, and IoT — drivers, benefits, goals, risks, and challenges for managers." },
      { num: "02", title: "Data Science Technology Overview", desc: "Introductory coverage of Big Data, Machine Learning, and AI for professionals requiring a general strategic understanding." },
      { num: "03", title: "Digital & Security Technology Overview", desc: "Non-technical introduction to Digital Transformation, Blockchain, and Cybersecurity — drivers, benefits, goals, and challenges." },
    ],
  },
  {
    name: "RPA — Robotic Process Automation",
    modules: [
      { num: "01", title: "Fundamental RPA", desc: "Components, models, bot types, architectures, and utilisation models of contemporary RPA environments." },
      { num: "02", title: "Intelligent Automation", desc: "Relationship between AI and RPA, autonomous decision-making types, and intelligent automation solution scenarios." },
      { num: "03", title: "RPA Lab", desc: "Applied exercises and problems testing RPA knowledge with hands-on demonstrations of proficiency." },
    ],
  },
  {
    name: "Cybersecurity",
    modules: [
      { num: "01", title: "Fundamental Cybersecurity", desc: "Essential cybersecurity solutions, foundational environment components, frameworks, and metrics." },
      { num: "02", title: "Advanced Cybersecurity", desc: "Building blocks of cybersecurity environments, cyber threats, protection mechanisms, and mitigation strategies." },
      { num: "03", title: "Cybersecurity Lab", desc: "Applied exercises testing cybersecurity knowledge through real-world problem-solving scenarios." },
    ],
  },
  {
    name: "Containerisation",
    modules: [
      { num: "01", title: "Fundamental Containerisation", desc: "Containerisation models, technologies, mechanisms, and the business and technical impact of container utilisation." },
      { num: "02", title: "Containerisation Technology & Architecture", desc: "Deep-dive into architectures, hosting models, deployment models, and advanced topics including security and lifecycle." },
      { num: "03", title: "Containerisation Lab", desc: "Applied exercises for hands-on proficiency in containerisation architecture models and patterns." },
    ],
  },
  {
    name: "Internet of Things (IoT)",
    modules: [
      { num: "01", title: "Fundamental IoT", desc: "Business and technical essentials of IoT, use cases, concepts, models, technologies, and introductory architecture." },
      { num: "02", title: "IoT Technology & Architecture", desc: "IoT architectural models, enabling technologies, telemetry data processing, and scalability approaches." },
      { num: "03", title: "IoT Lab", desc: "Hands-on exercises applying IoT knowledge through real-world problem-solving scenarios and devices." },
    ],
  },
  {
    name: "Artificial Intelligence",
    modules: [
      { num: "01", title: "Fundamental Artificial Intelligence", desc: "Essential AI and neural network coverage — learning approaches, functional areas, and step-by-step AI system assembly." },
      { num: "02", title: "Advanced Artificial Intelligence", desc: "Data preparation, neural network design and optimisation, performance measurement, and AI design patterns." },
      { num: "03", title: "AI Lab", desc: "Applied exercises testing AI system knowledge through real-world machine learning and deep learning scenarios." },
    ],
  },
  {
    name: "Machine Learning",
    modules: [
      { num: "01", title: "Fundamental Machine Learning", desc: "How machine learning works, common limitations, business goal utilisation, and common algorithm types." },
      { num: "02", title: "Advanced Machine Learning", desc: "Algorithms, methods, and models of contemporary machine learning applied to diverse business problems." },
      { num: "03", title: "Machine Learning Lab", desc: "Applied exercises testing machine learning knowledge through real-world problem-solving and technique proficiency." },
    ],
  },
  {
    name: "Blockchain",
    modules: [
      { num: "01", title: "Fundamental Blockchain", desc: "End-to-end blockchain functionality, technology and architecture, industry drivers, and component interactions." },
      { num: "02", title: "Blockchain Technology & Architecture", desc: "Inner workings, key design patterns, techniques, architectural models, and customisation for business requirements." },
      { num: "03", title: "Blockchain Lab", desc: "Hands-on exercises applying blockchain knowledge — technologies, mechanisms, and security controls." },
    ],
  },
  {
    name: "DevOps",
    modules: [
      { num: "01", title: "Fundamental DevOps", desc: "DevOps practices, models, techniques, benefits, challenges, and comparison to traditional development approaches." },
      { num: "02", title: "DevOps in Practice", desc: "DevOps lifecycle execution, CI/CD approaches, deployment pipeline creation, and data flow management." },
      { num: "03", title: "DevOps Lab", desc: "Applied exercises using DevOps concepts, case study problem-solving, and metrics application." },
    ],
  },
];

export default function NextGenDataSciencePage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="gradient-hero relative overflow-hidden py-28 text-white">
          <HeroCanvas variant="next-gen-data-science" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-cyan-300 font-medium mb-4 uppercase tracking-widest text-sm">Kulana Academy</p>
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">Next-Gen Data Science</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
              Discover how data can drive smarter business decisions with practical training designed to
              help your team turn information into strategic insight.
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
                Next-Gen Data Science Professional Program
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                In partnership with Arcitura, the Next Gen Data Science Professional Program helps
                professionals develop the knowledge to turn business data into actionable insights,
                supporting better decision-making and long-term value creation.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                The programme is available through virtual workshops, in-person sessions, and
                self-paced resources aligned with globally recognised certifications — providing a
                practical, business-oriented approach using modern data science tools and techniques.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-10 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Program Structure</h3>
              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                  <p><span className="font-semibold text-gray-900">9 specialist tracks</span> — Business Technology, RPA, Cybersecurity, IoT, AI, ML, Blockchain, Containerisation, and DevOps.</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                  <p><span className="font-semibold text-gray-900">3 modules per track</span> — fundamental concepts, advanced techniques, and hands-on lab exercises.</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                  <p><span className="font-semibold text-gray-900">Arcitura certification</span> with digital credentials issued through Credly/Acclaim.</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                  <p><span className="font-semibold text-gray-900">Exams</span> via Pearson VUE OnVUE, certified test centres, or facilitated sessions with Certified Trainers.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Course Modules ───────────────────────────────────────────── */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">Course Tracks & Modules</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                9 specialist tracks with 3 modules each — covering fundamentals, advanced concepts,
                and applied labs for every area of modern data science.
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
                      <div key={`${track.name}-${num}`} className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all">
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
              Ready to unlock the power of data science?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Contact us to register your interest or find out more about the Next-Gen Data Science programme.
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
