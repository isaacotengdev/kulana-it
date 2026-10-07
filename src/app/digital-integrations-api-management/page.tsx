import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import HeroCanvas from "@/components/HeroCanvas";
import {
  Plug, GitMerge, Shield, Zap, Database, Users,
  ArrowRight, CheckCircle2, Search, BarChart3, Settings,
  RefreshCw, Lock, Globe, Layers, Activity,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Integrations & API Management | Kulana IT Solutions",
  description:
    "Unlock seamless connectivity. Our middleware and integration practice ensures your systems communicate effectively, driving efficiency, agility, and productivity throughout your organisation.",
};

const capabilities = [
  { Icon: GitMerge,  label: "API Gateway",            color: "text-blue-600",    bg: "bg-blue-50",    border: "border-blue-100" },
  { Icon: RefreshCw, label: "Event Streaming",         color: "text-teal-600",    bg: "bg-teal-50",    border: "border-teal-100"   },
  { Icon: Database,  label: "Data Integration",        color: "text-teal-600",    bg: "bg-teal-50",    border: "border-teal-100" },
  { Icon: Shield,    label: "API Security",            color: "text-blue-600",    bg: "bg-blue-50",    border: "border-blue-100" },
  { Icon: Layers,    label: "Microservices",           color: "text-cyan-600",    bg: "bg-cyan-50",    border: "border-cyan-100"  },
  { Icon: Activity,  label: "Real-time Monitoring",   color: "text-cyan-600",    bg: "bg-cyan-50",    border: "border-cyan-100" },
];

const benefits = [
  { Icon: GitMerge, bg: "bg-blue-600",    title: "Streamlined Processes",         desc: "Integration eliminates data silos and ensures smooth system communication, reducing manual effort and increasing operational efficiency." },
  { Icon: Database, bg: "bg-teal-600",    title: "Improved Data Quality",         desc: "Middleware automates data exchange and validation, reducing errors, duplication, and inconsistencies for better data integrity." },
  { Icon: Zap,      bg: "bg-cyan-600",    title: "Cost Savings and ROI",          desc: "Process optimisation, reduced manual effort, and minimised duplication deliver significant savings and rapid return on investment." },
  { Icon: Globe,    bg: "bg-blue-600",    title: "Enhanced Agility",              desc: "Integrated systems enable faster decision-making, market responsiveness, and flexibility to adapt to evolving business requirements." },
  { Icon: Users,    bg: "bg-teal-600",    title: "Enhanced Customer Experiences", desc: "A unified customer data view enables personalised interactions, targeted campaigns, and superior service delivery." },
  { Icon: Lock,     bg: "bg-cyan-500",    title: "End-to-End Security",           desc: "Authentication, authorisation, encryption, and data masking protect sensitive information during transmission between systems." },
];

const integrationPatterns = [
  { Icon: Plug,      label: "Point-to-Point",    desc: "Direct, lightweight connections for simple two-system scenarios" },
  { Icon: Layers,    label: "ESB / Middleware",  desc: "Central hub routing messages across many systems reliably" },
  { Icon: GitMerge,  label: "API-First",         desc: "Expose capabilities as governed APIs consumed by any client" },
  { Icon: RefreshCw, label: "Event-Driven",      desc: "Asynchronous event streams for real-time, decoupled architectures" },
  { Icon: Database,  label: "ETL / ELT Pipelines", desc: "Batch or real-time data transformation and loading at scale" },
  { Icon: Globe,     label: "iPaaS / Cloud",     desc: "Managed integration platform as a service for cloud estates" },
];

const faqs = [
  {
    q: "What types of systems can be integrated with middleware?",
    a: "Middleware integrates legacy systems, ERP, CRM, cloud-based applications, databases, and web services — regardless of vendor or technology stack.",
  },
  {
    q: "How does middleware facilitate communication between different software applications?",
    a: "Middleware acts as a mediator between disparate software applications by providing a common platform for communication. It abstracts complexity, allowing seamless data exchange across different formats and protocols.",
  },
  {
    q: "Why is middleware important for businesses with complex IT landscapes?",
    a: "It simplifies integration through standardised communication approaches, enabling interoperability, accelerated development, and reduced costs across heterogeneous environments.",
  },
  {
    q: "How can middleware solutions improve data security?",
    a: "Solutions include authentication, authorisation, encryption, and data masking to protect sensitive information during transmission and processing between systems.",
  },
  {
    q: "What are common challenges during implementation?",
    a: "Interoperability issues, performance bottlenecks, data consistency concerns, vendor lock-in, and integration complexity require careful planning and robust architecture design.",
  },
  {
    q: "How does middleware support scalability?",
    a: "It decouples systems, enabling modular architectures that scale horizontally or vertically without disrupting existing infrastructure or downstream integrations.",
  },
  {
    q: "What should we consider when selecting an integration platform?",
    a: "The most important factors are: the protocols and standards your existing systems use (REST, SOAP, AMQP, etc.), the volume and latency requirements of your data flows, whether you need an event-driven or request-driven architecture, the vendor's support model and long-term roadmap, and total cost of ownership including licensing, implementation, and maintenance. WSO2, for example, is well-suited to enterprise API management and high-volume event streaming — but the right platform depends on your specific landscape. Kulana runs an assessment before recommending any tooling.",
  },
  {
    q: "How is system compatibility ensured during integration?",
    a: "Through careful analysis of requirements, data formats, protocols, and integration patterns — middleware supports standard interfaces and protocols to bridge disparate systems.",
  },
  {
    q: "What role does middleware play in digital transformation?",
    a: "Middleware removes the point-to-point dependency problem: without it, connecting five systems requires up to ten direct integrations, each brittle and hard to maintain. Middleware creates a central integration layer where each system connects once — to the middleware — rather than to every other system. This makes it possible to add, replace, or upgrade individual systems without rewriting integrations, which is what makes digital transformation programs sustainable rather than one-off projects.",
  },
  {
    q: "How do we measure the return on an integration project?",
    a: "The clearest measures are operational: how many manual data transfers or reconciliation steps were eliminated, how long end-to-end processes now take versus before, and what error rates look like in data flowing between systems. On the business side, look at time-to-decision (faster data = faster action), the cost of building new integrations after the platform is in place versus before, and any revenue impact from systems that can now talk to each other — for example, a CRM connected to your billing system enabling faster invoicing. Kulana defines these baseline metrics during the assessment phase so ROI can be tracked from day one.",
  },
];

const MF = "var(--font-manrope), sans-serif";

export default function DigitalIntegrationsPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="gradient-hero relative overflow-hidden flex items-center text-white" style={{ height: "100vh", paddingTop: "5rem" }}>
          <HeroCanvas variant="digital-integrations" />
          <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-cyan-300 mb-5">
              <Plug className="w-4 h-4" /> Integration and Digital Connectivity
            </span>
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Digital Integrations and<br />API Management
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
              Unlock the potential of seamless connectivity. Our middleware and integration practice ensures
              your systems communicate effectively, driving efficiency, agility, and productivity
              throughout your organisation.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {["WSO2 Certified", "API-First", "Event-Driven", "Cloud-Ready"].map((tag) => (
                <span key={tag} className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-white">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-300" /> {tag}
                </span>
              ))}
            </div>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#00D4EE] text-[#040d28] font-semibold rounded-md transition-all shadow-lg hover:bg-[#00BCDA] hover:-translate-y-0.5"
            >
              Request a Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* ── Capability strip ─────────────────────────────────────────── */}
        <section className="bg-white border-b border-gray-100 py-10">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* ── Overview ─────────────────────────────────────────────────── */}
        <section className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Overview</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6">
                What is Middleware and Integration Practice?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Businesses depend on multiple software systems for operations and data management. The
                challenge lies in ensuring these systems communicate effectively across different
                technologies, formats, and protocols.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Kulana&apos;s middleware and integration practice bridges gaps between software applications,
                databases, and platforms — whether connecting legacy systems with modern cloud solutions
                or linking enterprise applications. We provide solutions customised to your specific
                business requirements.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Legacy Modernisation", "Cloud Integration", "Real-time APIs", "ESB & Messaging"].map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-xs font-semibold text-blue-700">
                    <CheckCircle2 className="w-3 h-3" /> {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-10 border border-blue-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">How to Get Started</h3>
              </div>
              <div className="space-y-5">
                {[
                  { Icon: Search,   step: "01", title: "Assessment",          desc: "Our expert team evaluates your specific business needs, system landscape, data flows, and integration requirements through stakeholder collaboration." },
                  { Icon: BarChart3, step: "02", title: "Strategy Development", desc: "A comprehensive integration strategy is created, aligned with business objectives, IT infrastructure, and budget constraints." },
                  { Icon: Settings,  step: "03", title: "Implementation",       desc: "An iterative, collaborative approach leveraging best practices and cutting-edge technologies to deliver scalable, secure, future-proof solutions." },
                ].map(({ Icon: StepIcon, step, title, desc }) => (
                  <div key={step} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-sm">
                      <StepIcon className="w-4 h-4 text-white" strokeWidth={1.75} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">{step}</span>
                        <span className="font-semibold text-gray-900">{title}</span>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── WSO2 Platform spotlight ──────────────────────────────────── */}
        <section className="bg-gray-950 py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3">Powered By</p>
                <h2 className="text-3xl font-extrabold text-white mb-5">
                  Built on the World&apos;s Leading Open-Source Integration Platform
                </h2>
                <p className="text-gray-400 leading-relaxed mb-8">
                  Kulana is a certified WSO2 implementation partner. WSO2 provides an open-source,
                  cloud-native integration platform trusted by hundreds of enterprises globally —
                  including Fortune 500 companies and leading financial institutions.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "500+",   label: "Enterprise Customers" },
                    { value: "90+",    label: "Countries" },
                    { value: "#1",     label: "Open-Source API Manager" },
                    { value: "Cloud",  label: "Native Architecture" },
                  ].map(({ value, label }) => (
                    <div key={label} className="bg-gray-900 border border-gray-800 rounded-2xl p-4">
                      <p className="text-2xl font-extrabold text-white">{value}</p>
                      <p className="text-gray-400 text-sm mt-0.5">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center gap-8">
                <div className="bg-white rounded-3xl p-10 shadow-2xl flex items-center justify-center w-full max-w-xs">
                  <Image
                    src="/logos/wso2.png"
                    alt="WSO2"
                    width={180}
                    height={72}
                    className="h-14 w-auto object-contain"
                  />
                </div>
                <div className="flex flex-wrap gap-3 justify-center">
                  {["API Manager", "Enterprise Integrator", "Identity Server", "Streaming Integrator"].map((p) => (
                    <span key={p} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-xs font-semibold text-white">
                      <CheckCircle2 className="w-3 h-3 text-cyan-400" /> {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Integration patterns ──────────────────────────────────────── */}
        <section className="bg-white py-24">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Architecture</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
                Integration Patterns We Use
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                We select the right pattern for your context — from lightweight APIs to
                enterprise event-driven architectures.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {integrationPatterns.map(({ Icon, label, desc }, i) => (
                <div key={label} className="group flex gap-4 p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:border-blue-100 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <Icon className="w-5 h-5 text-white" strokeWidth={1.75} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">0{i + 1}</span>
                      <p className="font-bold text-gray-900">{label}</p>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Benefits ─────────────────────────────────────────────────── */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Why It Matters</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">Benefits</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Seamlessly connecting your systems delivers measurable results across efficiency,
                data quality, and customer experience.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map(({ Icon, bg, title, desc }) => (
                <div key={title} className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 ${bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className={`w-12 h-12 rounded-2xl ${bg} mb-5 flex items-center justify-center shadow-md`}>
                    <Icon className="w-6 h-6 text-white" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs tracking-[0.18em] uppercase mb-8" style={{ fontFamily: MF, fontWeight: 700, color: "#200044" }}>FAQ</p>
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-snug" style={{ fontFamily: MF }}>
                Your questions<br />answered
              </h2>
              <p className="text-gray-600 leading-relaxed lg:pt-2" style={{ fontFamily: MF }}>
                Everything you need to know about our middleware and integration practice.
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

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section style={{ background: "#57D9D4" }}>
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-20">
              <h2
                className="text-3xl lg:text-4xl font-extrabold leading-tight lg:w-[40%] flex-shrink-0"
                style={{ fontFamily: MF, color: "#200044" }}
              >
                Ready to seamlessly connect your systems?
              </h2>
              <div className="flex-1">
                <p className="text-sm lg:text-base mb-6 leading-relaxed" style={{ fontFamily: MF, color: "#200044" }}>
                  Optimise your business processes with Kulana&apos;s middleware and integration solutions.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-md transition-all hover:opacity-90"
                    style={{ fontFamily: MF, background: "#200044", color: "#ffffff" }}
                  >
                    Request a Consultation <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-md border transition-all hover:bg-white/20"
                    style={{ fontFamily: MF, color: "#200044", borderColor: "#200044" }}
                  >
                    Contact us <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
