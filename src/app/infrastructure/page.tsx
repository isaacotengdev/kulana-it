import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import HeroCanvas from "@/components/HeroCanvas";
import {
  Server, Cloud, Network, Shield, RefreshCw, MonitorCheck,
  ArrowRight, CheckCircle2, Globe, Users, Zap, Award,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Infrastructure | Kulana IT Solutions",
  description:
    "Design, build, and manage resilient IT infrastructure — data centers, cloud environments, network architecture, and 24/7 operations.",
};

const capabilities = [
  { Icon: Server,       label: "Data Center Design",     color: "text-slate-700",   bg: "bg-slate-50",   border: "border-slate-200" },
  { Icon: Cloud,        label: "Cloud Infrastructure",   color: "text-blue-600",    bg: "bg-blue-50",    border: "border-blue-100" },
  { Icon: Network,      label: "Network Architecture",   color: "text-cyan-600",    bg: "bg-cyan-50",    border: "border-cyan-100" },
  { Icon: MonitorCheck, label: "24/7 Monitoring",        color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
  { Icon: RefreshCw,    label: "Disaster Recovery",      color: "text-amber-600",   bg: "bg-amber-50",   border: "border-amber-100" },
  { Icon: Shield,       label: "Security Hardening",     color: "text-red-500",     bg: "bg-red-50",     border: "border-red-100" },
];

const features = [
  { label: "Data Center Build & Co-location", desc: "Design and build high-availability data centers or manage your co-location deployments." },
  { label: "Hybrid & Multi-Cloud",           desc: "Seamlessly extend on-premise environments into AWS, Azure, or Google Cloud." },
  { label: "Network & SD-WAN",               desc: "Design resilient, software-defined networks that scale with your business." },
  { label: "Virtualisation & HCI",           desc: "VMware, Nutanix, and hyper-converged infrastructure to reduce hardware sprawl." },
  { label: "Backup & Disaster Recovery",     desc: "Automated backup, replication, and tested DR plans to protect critical workloads." },
  { label: "Infrastructure Monitoring",      desc: "24/7 NOC services, proactive alerting, and capacity planning to prevent downtime." },
];

const benefits = [
  { title: "High Availability", desc: "Engineered uptime with redundant power, cooling, and network paths." },
  { title: "Scalability",       desc: "Infrastructure that grows with your business without costly redesigns." },
  { title: "Cost Optimisation", desc: "Right-size your environment and eliminate waste with continuous optimisation." },
  { title: "Risk Mitigation",   desc: "Tested DR plans and hardened security that keep your operations running." },
];

const stats = [
  { Icon: Globe,  value: "20+", label: "Countries Served"   },
  { Icon: Users,  value: "50+", label: "Enterprise Clients" },
  { Icon: Award,  value: "2",   label: "ISO Certifications" },
  { Icon: Zap,    value: "15+", label: "Years of Expertise" },
];

export default function InfrastructurePage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">

        {/* Hero */}
        <section className="gradient-hero relative overflow-hidden py-28 text-white">
          <HeroCanvas variant="infrastructure" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-cyan-300 mb-5">
              <Server className="w-4 h-4" /> Core &amp; Enterprise Systems
            </span>
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">Infrastructure</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
              Design, build, and manage the resilient IT infrastructure that underpins your business —
              from data centers and cloud environments to networks and 24/7 operations.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {["Dell Certified", "Cloud-Ready", "ISO 27001", "24/7 NOC"].map((tag) => (
                <span key={tag} className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-white">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-300" /> {tag}
                </span>
              ))}
            </div>
            <Link href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:-translate-y-0.5">
              Request a Quote <ArrowRight className="w-4 h-4" />
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
                The foundation your business runs on
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Modern enterprises depend on IT infrastructure that is resilient, secure, and
                adaptable. Whether you are running a traditional data center, migrating to the cloud,
                or operating a hybrid environment, Kulana delivers the expertise to design, deploy,
                and manage every layer of your infrastructure stack.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Backed by our partnership with Dell Technologies and certified under ISO 9001 and
                ISO 27001, we bring global standards and African operational experience together.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Data Center", "Hybrid Cloud", "Networking", "HCI"].map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-xs font-semibold text-blue-700">
                    <CheckCircle2 className="w-3 h-3" /> {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-10 border border-slate-100">
              <div className="space-y-5">
                {[
                  { step: "01", title: "Assessment", desc: "Audit your current environment — servers, network, storage, cloud spend — and identify gaps and risks." },
                  { step: "02", title: "Design",     desc: "Produce a detailed architecture design aligned to your business requirements, budget, and growth plans." },
                  { step: "03", title: "Deploy",     desc: "Implement and configure infrastructure using best-practice methodologies with minimal disruption." },
                  { step: "04", title: "Operate",    desc: "Provide ongoing 24/7 NOC support, monitoring, patching, and optimisation as a managed service." },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-slate-700 flex items-center justify-center shadow-sm">
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

        {/* Partner: Dell */}
        <section className="bg-gray-950 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3">Powered By</p>
                <h2 className="text-3xl font-extrabold text-white mb-5">
                  Delivered on World-Class Hardware
                </h2>
                <p className="text-gray-400 leading-relaxed mb-8">
                  As a Dell Technologies partner, Kulana designs and deploys infrastructure on proven,
                  enterprise-grade hardware — from PowerEdge servers and PowerStore arrays to
                  networking and hyper-converged solutions.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "#1",   label: "Server Vendor Worldwide" },
                    { value: "150+", label: "Countries" },
                    { value: "HCI",  label: "Hyper-Converged Leader" },
                    { value: "End-to-End", label: "Solutions Portfolio" },
                  ].map(({ value, label }) => (
                    <div key={label} className="bg-gray-900 border border-gray-800 rounded-2xl p-4">
                      <p className="text-2xl font-extrabold text-white">{value}</p>
                      <p className="text-gray-400 text-sm mt-0.5">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-6">
                <div className="bg-white rounded-3xl p-10 shadow-2xl flex items-center justify-center w-full">
                  <Image src="/logos/dell.svg" alt="Dell Technologies" width={180} height={60} className="h-14 w-auto object-contain" />
                </div>
                <div className="flex gap-3 flex-wrap justify-center">
                  {["Certified Partner", "Hardware Supply", "Managed Services"].map((b) => (
                    <span key={b} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-xs font-semibold text-white">
                      <CheckCircle2 className="w-3 h-3 text-cyan-400" /> {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">What We Deliver</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">Services We Provide</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                From initial design to ongoing managed operations, we cover the full infrastructure lifecycle.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map(({ label, desc }, i) => (
                <div key={label} className="group flex gap-4 p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:border-blue-100 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-slate-700 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
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
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Why Modernise</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">Benefits</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map(({ title, desc }) => (
                <div key={title} className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-100 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-slate-700 mb-5 flex items-center justify-center shadow-md">
                    <Server className="w-6 h-6 text-white" strokeWidth={1.75} />
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
                <Server className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
                Ready to build a resilient infrastructure?
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Talk to our infrastructure specialists and get a tailored design for your environment.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:-translate-y-0.5">
                  Request a Quote <ArrowRight className="w-4 h-4" />
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
