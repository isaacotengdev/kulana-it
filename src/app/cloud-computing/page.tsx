import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import HeroCanvas from "@/components/HeroCanvas";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud Computing | Kulana Academy",
  description:
    "Understand how cloud solutions can enhance business scalability, resilience, and security through structured learning and certification-backed expertise.",
};

const modules = [
  { num: "01", title: "Fundamental Cloud Computing", desc: "End-to-end coverage of cloud concepts, models, benefits, and business drivers for cloud adoption." },
  { num: "02", title: "Fundamental Cloud Architecture", desc: "Core cloud architectural patterns, design principles, and deployment models for scalable solutions." },
  { num: "03", title: "Fundamental Cloud Security", desc: "Essential cloud security concepts, threat models, controls, and compliance frameworks." },
  { num: "04", title: "Fundamental Cloud Governance", desc: "Cloud governance frameworks, policy management, cost optimisation, and organisational controls." },
  { num: "05", title: "Fundamental Cloud Storage", desc: "Cloud storage types, access patterns, performance characteristics, and data management strategies." },
  { num: "06", title: "Fundamental Cloud Virtualisation", desc: "Virtualisation technologies, hypervisors, containers, and the foundation of cloud infrastructure." },
  { num: "07", title: "Advanced Cloud Architecture", desc: "Advanced architectural patterns, multi-cloud strategies, and enterprise cloud design at scale." },
  { num: "08", title: "Advanced Cloud Security", desc: "In-depth security architecture, zero-trust models, threat detection, and incident response in the cloud." },
  { num: "09", title: "Advanced Cloud Governance", desc: "Enterprise governance frameworks, FinOps practices, and automated policy enforcement mechanisms." },
  { num: "10", title: "Advanced Cloud Storage", desc: "High-performance storage architectures, distributed file systems, and enterprise data management patterns." },
  { num: "11", title: "Advanced Cloud Virtualisation", desc: "Advanced containerisation, orchestration with Kubernetes, and serverless architecture patterns." },
  { num: "12", title: "Cloud Technology Concepts", desc: "Comprehensive overview of cloud technologies, ecosystem components, and integration approaches." },
  { num: "13", title: "Cloud Technology Lab", desc: "Hands-on exercises applying cloud technology knowledge to real-world infrastructure scenarios." },
  { num: "14", title: "Cloud Architecture Lab", desc: "Applied architecture design exercises using best-practice patterns and case studies." },
  { num: "15", title: "Cloud Security Lab", desc: "Practical security exercises covering threat modelling, controls implementation, and incident response." },
  { num: "16", title: "Cloud Governance Lab", desc: "Applied governance exercises including policy creation, cost management, and compliance validation." },
  { num: "17", title: "Cloud Storage Lab", desc: "Hands-on storage configuration, performance testing, and data lifecycle management exercises." },
  { num: "18", title: "Cloud Virtualisation Lab", desc: "Practical containerisation and virtualisation exercises building production-ready cloud environments." },
];

export default function CloudComputingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="gradient-hero relative overflow-hidden py-28 text-white">
          <HeroCanvas variant="cloud-computing" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-cyan-300 font-medium mb-4 uppercase tracking-widest text-sm">Kulana Academy</p>
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">Cloud Computing</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
              Understand how cloud solutions can enhance business scalability, resilience, and security
              through structured learning and certification-backed expertise.
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
                Cloud Computing Professional Program
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                The Cloud Computing Professional Program, developed by Arcitura, equips organisations
                with practical knowledge for adopting and managing cloud technologies. The programme
                offers virtual or on-site workshops, self-paced learning kits, and eLearning options
                tailored for certification and business relevance.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                This initiative prepares professionals to lead cloud adoption strategies enhancing
                business scalability, security, and agility through modular tracks addressing core
                business priorities and technical requirements.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-10 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Program Structure</h3>
              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                  <p><span className="font-semibold text-gray-900">18 modules</span> spanning fundamental courses, advanced topics, and hands-on labs across all cloud domains.</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                  <p><span className="font-semibold text-gray-900">Flexible delivery</span> — virtual workshops, on-site sessions, or self-paced eLearning kits.</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                  <p><span className="font-semibold text-gray-900">Official Arcitura certificate</span> upon passing required assessments through Pearson VUE online or test centres.</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                  <p><span className="font-semibold text-gray-900">Digital badge</span> through Credly/Acclaim to verify and share your cloud computing credentials.</p>
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
                18 modules covering fundamental concepts, advanced architecture, security, governance,
                storage, and virtualisation — each with dedicated labs.
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
              Ready to master cloud computing?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Contact us to register your interest or find out more about the Cloud Computing programme.
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
