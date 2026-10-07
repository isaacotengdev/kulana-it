import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import {
  Server, Cloud, Network, Shield, RefreshCw, MonitorCheck,
  ArrowRight, CheckCircle2, Search, Settings, Zap, TrendingUp,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Infrastructure | Kulana IT Solutions",
  description:
    "Design, build, and manage resilient IT infrastructure — data centers, cloud environments, network architecture, and 24/7 operations.",
};

const capabilities = [
  { Icon: Server,       label: "Data Center Design",     color: "text-blue-600",    bg: "bg-blue-50",    border: "border-blue-100" },
  { Icon: Cloud,        label: "Cloud Infrastructure",   color: "text-blue-600",    bg: "bg-blue-50",    border: "border-blue-100" },
  { Icon: Network,      label: "Network Architecture",   color: "text-cyan-600",    bg: "bg-cyan-50",    border: "border-cyan-100" },
  { Icon: MonitorCheck, label: "24/7 Monitoring",        color: "text-teal-600",    bg: "bg-teal-50",    border: "border-teal-100" },
  { Icon: RefreshCw,    label: "Disaster Recovery",      color: "text-cyan-600",    bg: "bg-cyan-50",    border: "border-cyan-100"  },
  { Icon: Shield,       label: "Security Hardening",     color: "text-blue-600",    bg: "bg-blue-50",    border: "border-blue-100" },
];

const features = [
  { Icon: Server,       label: "Data Center Build and Co-location", desc: "Design and build high-availability data centers or manage your co-location deployments." },
  { Icon: Cloud,        label: "Hybrid and Multi-Cloud",           desc: "Seamlessly extend on-premise environments into AWS, Azure, or Google Cloud." },
  { Icon: Network,      label: "Network and SD-WAN",               desc: "Design resilient, software-defined networks that scale with your business." },
  { Icon: Zap,          label: "Virtualisation and HCI",           desc: "VMware, Nutanix, and hyper-converged infrastructure to reduce hardware sprawl." },
  { Icon: RefreshCw,    label: "Backup and Disaster Recovery",     desc: "Automated backup, replication, and tested DR plans to protect critical workloads." },
  { Icon: MonitorCheck, label: "Infrastructure Monitoring",       desc: "24/7 NOC services, proactive alerting, and capacity planning to prevent downtime." },
];

const benefits = [
  { Icon: MonitorCheck, bg: "bg-blue-600",    title: "High Availability",    desc: "Engineered uptime with redundant power, cooling, and network paths." },
  { Icon: TrendingUp,   bg: "bg-teal-600",    title: "Scalability",          desc: "Infrastructure that grows with your business without costly redesigns." },
  { Icon: Zap,          bg: "bg-cyan-600",    title: "Cost Optimisation",    desc: "Right-size your environment and eliminate waste with continuous optimisation." },
  { Icon: Shield,       bg: "bg-cyan-500",    title: "Risk Mitigation",      desc: "Tested DR plans and hardened security that keep your operations running." },
];

const faqs = [
  {
    q: "What is the difference between co-location and a private data center?",
    a: "Co-location means housing your own servers in a third-party facility — you own the hardware but share power, cooling, and physical security. A private data center gives you full control but requires significant capital investment. We help you evaluate both options based on your workload, budget, and risk profile.",
  },
  {
    q: "How do you approach hybrid cloud architecture?",
    a: "We design hybrid environments that extend on-premise workloads into public clouds (AWS, Azure, Google Cloud) using secure, low-latency connectivity. Workloads are placed based on cost, performance, data sovereignty, and regulatory requirements.",
  },
  {
    q: "What is SD-WAN and why does it matter?",
    a: "Software-Defined Wide Area Networking (SD-WAN) replaces traditional MPLS with intelligent, policy-driven routing over multiple connections. It reduces cost, improves performance, and enables centralised management across branch offices.",
  },
  {
    q: "How does Kulana ensure infrastructure security?",
    a: "We implement defence-in-depth — network segmentation, firewall hardening, endpoint protection, identity and access management, encryption at rest and in transit, and regular vulnerability assessments aligned to ISO 27001.",
  },
  {
    q: "What disaster recovery SLAs can you deliver?",
    a: "Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO) vary by workload criticality. We design tiered DR strategies — from warm standby to active-active configurations — and test them regularly to validate SLAs.",
  },
  {
    q: "Do you offer 24/7 monitoring and managed services?",
    a: "Yes. Our Network Operations Centre (NOC) provides continuous monitoring, proactive alerting, capacity planning, and incident response. We offer tiered managed service packages aligned to your operational requirements.",
  },
  {
    q: "How long does an infrastructure deployment typically take?",
    a: "A standard server and network deployment takes 4–8 weeks. Large-scale data center builds or complex cloud migrations are phased over 3–6 months. We provide a detailed project plan after the initial assessment.",
  },
  {
    q: "What certifications does Kulana hold for infrastructure work?",
    a: "Kulana is certified under ISO 9001 (Quality Management) and ISO 27001 (Information Security). We are also a Dell Technologies partner with trained and certified engineers across storage, compute, and networking.",
  },
];

const MF = "var(--font-manrope), sans-serif";

export default function InfrastructurePage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <section className="relative overflow-hidden" style={{ height: "100vh" }}>
          <Image
            src="/images/Service_Core & Enterprise Systems/infrastructure/Hero image_Infrastructure_2560×1440px.webp"
            alt="Infrastructure"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
            style={{ filter: "brightness(1.5)" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(8,0,32,0.68) 0%, rgba(8,0,32,0.50) 45%, rgba(8,0,32,0.20) 75%, rgba(8,0,32,0.06) 100%)" }}
          />
          <div
            className="relative z-10 flex flex-col w-full h-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8"
            style={{ paddingTop: "calc(5rem + 28vh)", paddingBottom: "5rem" }}
          >
            <div>
              <p
                className="text-xs tracking-[0.22em] uppercase mb-4"
                style={{ fontFamily: MF, fontWeight: 600, color: "#57D9D4" }}
              >
                Core &amp; Enterprise Systems
              </p>
              <h1
                className="text-5xl sm:text-6xl lg:text-8xl font-bold uppercase text-white leading-[1.0]"
                style={{ fontFamily: MF }}
              >
                Infrastructure
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
            <p
              className="text-xs tracking-[0.18em] uppercase mb-6"
              style={{ fontFamily: MF, fontWeight: 700, color: "#200044" }}
            >
              Overview
            </p>
            <h2
              className="text-3xl lg:text-4xl font-light text-gray-900 mb-6"
              style={{ fontFamily: MF }}
            >
              The foundation your business runs on
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Modern enterprises depend on IT infrastructure that is resilient, secure, and adaptable. Whether you are running a traditional data center, migrating to the cloud, or operating a hybrid environment, Kulana delivers the expertise to design, deploy, and manage every layer of your infrastructure stack.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10">
              Backed by our partnership with Dell Technologies and certified under ISO 9001 and ISO 27001, we bring global standards and African operational experience together.
            </p>
            <div className="flex gap-3 w-full">
              {["Data Center", "Hybrid Cloud", "Networking", "HCI"].map((tag) => (
                <span
                  key={tag}
                  className="flex-1 flex items-center justify-center py-2.5 rounded-lg text-sm font-semibold text-gray-800 text-center"
                  style={{ fontFamily: MF, border: "1.5px solid #57D9D4" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* How to Get Started */}
        <section className="py-16 lg:py-20" style={{ background: "#200044" }}>
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <p
              className="text-xs tracking-[0.18em] uppercase mb-14"
              style={{ fontFamily: MF, fontWeight: 700, color: "#ffffff" }}
            >
              How to Get Started
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
              {[
                { step: "01", title: "Assessment", desc: "Audit your current environment — servers, network, storage, cloud spend — and identify gaps and risks." },
                { step: "02", title: "Design",     desc: "Produce a detailed architecture design aligned to your business requirements, budget, and growth plans." },
                { step: "03", title: "Deploy",     desc: "Implement and configure infrastructure using best-practice methodologies with minimal disruption." },
                { step: "04", title: "Operate",    desc: "Provide ongoing 24/7 NOC support, monitoring, patching, and optimisation as a managed service." },
              ].map(({ step, title, desc }) => (
                <div key={step}>
                  <p
                    className="text-5xl lg:text-6xl font-light mb-3 leading-none"
                    style={{ fontFamily: MF, color: "#a198af" }}
                  >
                    {step}
                  </p>
                  <p
                    className="text-xl lg:text-2xl font-semibold mb-4"
                    style={{ fontFamily: MF, color: "#57D9D4" }}
                  >
                    {title}
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: MF, color: "rgba(255,255,255,0.75)" }}
                  >
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner: Dell */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <p
              className="text-xs tracking-[0.18em] uppercase mb-10"
              style={{ fontFamily: MF, fontWeight: 700, color: "#200044" }}
            >
              Powered By
            </p>
            {/* Heading left · description + logo right */}
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-14">
              <h2
                className="text-3xl lg:text-4xl font-light text-gray-900 leading-snug"
                style={{ fontFamily: MF }}
              >
                Delivered on World-Class Hardware
              </h2>
              <div>
                <p className="text-gray-600 leading-relaxed mb-8" style={{ fontFamily: MF }}>
                  As a Dell Technologies partner, Kulana designs and deploys infrastructure on proven, enterprise-grade hardware — from PowerEdge servers and PowerStore arrays to networking and hyper-converged solutions.
                </p>
                <Image src="/logos/dell.svg" alt="Dell Technologies" width={120} height={40} className="h-9 w-auto object-contain" />
              </div>
            </div>
            {/* Stats row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-10 border-t border-gray-100">
              {[
                { value: "#1",         label: "Server Vendor Worldwide" },
                { value: "150+",       label: "Countries" },
                { value: "HCI",        label: "Hyper-Converged Leader" },
                { value: "End-to-End", label: "Solutions Portfolio" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1" style={{ fontFamily: MF }}>{value}</p>
                  <p className="text-sm text-gray-500" style={{ fontFamily: MF }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 lg:py-20" style={{ background: "#f5f5f5" }}>
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <p
              className="text-xs tracking-[0.18em] uppercase mb-8"
              style={{ fontFamily: MF, fontWeight: 700, color: "#200044" }}
            >
              What We Deliver
            </p>
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
              <h2
                className="text-3xl lg:text-4xl font-light text-gray-900 leading-snug"
                style={{ fontFamily: MF }}
              >
                Services<br />We Provide
              </h2>
              <p className="text-gray-600 leading-relaxed lg:pt-2" style={{ fontFamily: MF }}>
                From initial design to ongoing managed operations, we cover the full infrastructure lifecycle.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Data Center & Co-location",   desc: "Design, build, and manage resilient data centres." },
                { title: "Hybrid & Multi-Cloud",         desc: "Extend infrastructure across AWS, Azure, and Google Cloud." },
                { title: "Network & SD-WAN",             desc: "Resilient networks built to scale with your business." },
                { title: "Virtualisation & HCI",         desc: "Reduce hardware sprawl with virtualised infrastructure." },
                { title: "Backup & Disaster Recovery",   desc: "Automated backup, replication, and disaster recovery." },
                { title: "Infrastructure Monitoring",    desc: "24/7 monitoring, proactive alerts, and capacity planning." },
              ].map(({ title, desc }) => (
                <div key={title} className="bg-white rounded-xl p-6 border border-gray-100">
                  <p className="font-semibold text-gray-900 mb-2" style={{ fontFamily: MF }}>{title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: MF }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <p
              className="text-xs tracking-[0.18em] uppercase mb-8"
              style={{ fontFamily: MF, fontWeight: 700, color: "#200044" }}
            >
              Why Modernise
            </p>
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
              <h2
                className="text-3xl lg:text-4xl font-light text-gray-900 leading-snug"
                style={{ fontFamily: MF }}
              >
                Benefits
              </h2>
              <p className="text-gray-600 leading-relaxed lg:pt-2" style={{ fontFamily: MF }}>
                A well-designed infrastructure foundation reduces risk, cuts cost, and enables every part of your business to move faster.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "High Availability",   desc: "Engineered uptime with redundant power, cooling, and network paths." },
                { title: "Scalability",          desc: "Infrastructure that grows with your business without costly redesigns." },
                { title: "Cost Optimisation",   desc: "Right-size your environment and eliminate waste with continuous optimisation." },
                { title: "Risk Mitigation",      desc: "Tested DR plans and hardened security that keep your operations running." },
              ].map(({ title, desc }) => (
                <div
                  key={title}
                  className="rounded-xl p-6"
                  style={{ border: "1.5px solid #57D9D4" }}
                >
                  <p className="font-semibold mb-2" style={{ fontFamily: MF, color: "#57D9D4" }}>{title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: MF }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <p
              className="text-xs tracking-[0.18em] uppercase mb-8"
              style={{ fontFamily: MF, fontWeight: 700, color: "#200044" }}
            >
              FAQ
            </p>
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
              <h2
                className="text-3xl lg:text-4xl font-light text-gray-900 leading-snug"
                style={{ fontFamily: MF }}
              >
                Your questions<br />answered
              </h2>
              <p className="text-gray-600 leading-relaxed lg:pt-2" style={{ fontFamily: MF }}>
                Find answers to common questions about our infrastructure services and approach.
              </p>
            </div>
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
        </section>

        {/* CTA */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-10 md:p-14 text-white text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Server className="w-8 h-8 text-white" strokeWidth={1.75} />
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
                Ready to build a resilient infrastructure?
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Talk to our infrastructure specialists and get a tailored design for your environment.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact-us" className="inline-flex items-center gap-2 px-8 py-4 bg-[#00D4EE] text-[#040d28] font-semibold rounded-md transition-all shadow-lg hover:bg-[#00BCDA] hover:-translate-y-0.5">
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
