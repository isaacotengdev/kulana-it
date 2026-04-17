import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import HeroCanvas from "@/components/HeroCanvas";
import {
  LayoutGrid, DollarSign, Zap, Globe, Users, TrendingUp,
  BarChart3, Plug, CheckCircle2, ArrowRight, Search,
  Megaphone, ShoppingCart, Package, HeartHandshake, Settings,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ERP and CRM | Kulana IT Solutions",
  description:
    "Optimize your business processes and customer relationships with tailored ERP and CRM solutions leveraging Microsoft Dynamics 365 and HubSpot.",
};

const capabilities = [
  { Icon: DollarSign,    label: "Financial Management",  color: "text-blue-600",    bg: "bg-blue-50",    border: "border-blue-100" },
  { Icon: Package,       label: "Supply Chain",          color: "text-violet-600",  bg: "bg-violet-50",  border: "border-violet-100" },
  { Icon: Users,         label: "Human Resources",       color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
  { Icon: ShoppingCart,  label: "Sales Pipeline",        color: "text-cyan-600",    bg: "bg-cyan-50",    border: "border-cyan-100" },
  { Icon: Megaphone,     label: "Marketing Automation",  color: "text-amber-600",   bg: "bg-amber-50",   border: "border-amber-100" },
  { Icon: BarChart3,     label: "Analytics & Reporting", color: "text-red-500",     bg: "bg-red-50",     border: "border-red-100" },
];

const erpBenefits = [
  { Icon: DollarSign, bg: "bg-blue-600",    title: "Streamlined Financial Management", desc: "Dynamics 365 ERP simplifies financial tasks like budgeting and reporting for real-time insights and regulatory compliance." },
  { Icon: Zap,        bg: "bg-violet-600",  title: "Operational Efficiency",           desc: "Production planning and asset management ensure lean processes and responsive project handling across your organisation." },
  { Icon: Globe,      bg: "bg-cyan-600",    title: "Scalability and Flexibility",      desc: "Cloud-based infrastructure adapts to organisational growth and market shifts without disrupting operations." },
  { Icon: Plug,       bg: "bg-emerald-600", title: "Seamless Integrations",            desc: "Microsoft Power Platform enables connectivity with business applications, productivity tools, and data repositories." },
];

const crmBenefits = [
  { Icon: Users,         bg: "bg-orange-500",  title: "Unified Customer View",    desc: "HubSpot CRM consolidates customer interactions across channels for better understanding of preferences and needs." },
  { Icon: ShoppingCart,  bg: "bg-amber-500",   title: "Efficient Sales Pipeline", desc: "Lead tracking and deal management accelerate sales cycles with automated follow-ups and pipeline visibility." },
  { Icon: Megaphone,     bg: "bg-rose-500",    title: "Personalised Marketing",   desc: "Automated targeted campaigns with performance tracking enhance engagement metrics and marketing ROI." },
  { Icon: BarChart3,     bg: "bg-violet-600",  title: "Insightful Analytics",     desc: "Comprehensive reporting measures campaign effectiveness for data-driven choices and strategic planning." },
];

const faqs = [
  {
    q: "What industries suit Microsoft Dynamics 365 ERP?",
    a: "Manufacturing, retail, healthcare, professional services, and distribution sectors benefit from its adaptable architecture accommodating diverse operational requirements.",
  },
  {
    q: "How does the system handle multi-currency and multi-language needs?",
    a: "Dynamics 365 ERP supports multi-currency transactions and multi-language interfaces, allowing businesses to operate globally and manage diverse customer and vendor relationships seamlessly.",
  },
  {
    q: "What deployment options exist?",
    a: "Cloud-based options (Finance and Supply Chain Management) and on-premises solutions (Finance and Operations) serve different organisational preferences.",
  },
  {
    q: "Can it integrate with external applications?",
    a: "Yes, robust integration capabilities through Microsoft Power Platform enable connectivity with business applications, productivity tools, and data repositories.",
  },
  {
    q: "How is data security maintained?",
    a: "Dynamics 365 ERP adheres to industry-leading security standards and compliance regulations, with built-in security features, role-based access controls, data encryption, and regular updates.",
  },
  {
    q: "What advanced HubSpot CRM features exist?",
    a: "Lead scoring, email automation, pipeline management, task automation, and reporting streamline sales processes and improve team productivity.",
  },
  {
    q: "Does HubSpot track multi-channel interactions?",
    a: "HubSpot CRM consolidates customer interactions from emails, calls, meetings, social media, and website visits into a single unified timeline.",
  },
  {
    q: "How does it support sales-marketing alignment?",
    a: "Shared data, integrated workflows, and closed-loop reporting enable collaborative goal achievement between sales and marketing teams.",
  },
  {
    q: "Does it work for complex sales cycles?",
    a: "Yes, customisable deal stages, automation rules, and workflows accommodate intricate sales processes for enterprise and B2B environments.",
  },
  {
    q: "What support options exist for HubSpot?",
    a: "HubSpot provides extensive customer support resources, including online documentation, knowledge base, community forums, live chat support, and training courses through HubSpot Academy.",
  },
];

export default function ErpCrmPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="gradient-hero relative overflow-hidden py-28 text-white">
          <HeroCanvas variant="erp-crm" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-cyan-300 mb-5">
              <LayoutGrid className="w-4 h-4" /> Our Services
            </span>
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">ERP and CRM</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
              Optimise your business processes and customer relationships with our tailored ERP and CRM
              solutions, leveraging Microsoft Dynamics 365 and HubSpot to streamline operations and drive growth.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {["Microsoft Certified", "HubSpot Partner", "Cloud-Native", "Rapid Deployment"].map((tag) => (
                <span key={tag} className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-white">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-300" /> {tag}
                </span>
              ))}
            </div>
            <Link
              href="/request-quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Request a Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* ── Capability strip ─────────────────────────────────────────── */}
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

        {/* ── What is ERP and CRM? ─────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Overview</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6">
                What is ERP and CRM?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Enterprise resource planning and customer relationship management represent critical
                software tools enabling organisations to handle internal workflows and customer
                connections effectively. ERP systems consolidate business functions including finance,
                human resources, procurement, and day-to-day operations.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                As a certified partner of Microsoft Dynamics 365 and HubSpot, we bring expertise and
                experience to every ERP and CRM project — helping you implement and customise these
                platforms to your exact organisational requirements.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Finance & Ops", "Sales Automation", "Marketing Hub", "Customer Service"].map((tag) => (
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
                  { Icon: Search,   step: "01", title: "Assessment",               desc: "Experienced consultants conduct thorough analysis of current systems, workflows, and pain points to identify improvement opportunities." },
                  { Icon: BarChart3, step: "02", title: "Strategy Development",     desc: "A customised implementation roadmap aligns with your business objectives, budget constraints, and timeline requirements." },
                  { Icon: Settings,  step: "03", title: "Collaborative Implementation", desc: "Configuration, customisation, and integration occur through stakeholder engagement and iterative approaches, with training and ongoing support provided." },
                ].map(({ Icon: StepIcon, step, title, desc }) => (
                  <div key={step} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-sm">
                      <StepIcon className="w-4 h-4 text-white" strokeWidth={2} />
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

        {/* ── Platform Spotlights ───────────────────────────────────────── */}
        <section className="bg-gray-950 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3">Powered By</p>
              <h2 className="text-3xl font-extrabold text-white mb-3">World-Class Platforms</h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                We are certified implementation partners for the two most widely adopted ERP and CRM platforms globally.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">

              {/* Microsoft Dynamics 365 */}
              <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-blue-500/40 transition-colors">
                <div className="flex items-center gap-5 mb-6">
                  <div className="bg-white rounded-2xl p-4 flex items-center justify-center w-20 h-16 shadow-lg">
                    <Image src="/logos/microsoft.svg" alt="Microsoft" width={80} height={32} className="h-7 w-auto object-contain" />
                  </div>
                  <div>
                    <p className="text-white font-extrabold text-lg leading-tight">Microsoft Dynamics 365</p>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full text-xs font-semibold text-blue-400 mt-1">
                      ERP Platform
                    </span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  A unified suite of intelligent business applications combining ERP and CRM capabilities
                  with built-in AI, analytics, and seamless Microsoft 365 integration.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {["Finance & Operations", "Supply Chain Mgmt", "Human Resources", "Project Operations", "Commerce", "Power Platform"].map((m) => (
                    <div key={m} className="flex items-center gap-2 text-xs text-gray-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                      {m}
                    </div>
                  ))}
                </div>
              </div>

              {/* HubSpot */}
              <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-orange-500/40 transition-colors">
                <div className="flex items-center gap-5 mb-6">
                  <div className="bg-white rounded-2xl p-4 flex items-center justify-center w-20 h-16 shadow-lg">
                    <Image src="/logos/hubspot.svg" alt="HubSpot" width={80} height={32} className="h-7 w-auto object-contain" />
                  </div>
                  <div>
                    <p className="text-white font-extrabold text-lg leading-tight">HubSpot CRM</p>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-orange-600/20 border border-orange-500/30 rounded-full text-xs font-semibold text-orange-400 mt-1">
                      CRM Platform
                    </span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  An all-in-one inbound marketing, sales, and service platform that helps teams
                  attract visitors, convert leads, and close deals at scale.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {["Marketing Hub", "Sales Hub", "Service Hub", "CMS Hub", "Operations Hub", "HubSpot Academy"].map((m) => (
                    <div key={m} className="flex items-center gap-2 text-xs text-gray-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" />
                      {m}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ERP Benefits ─────────────────────────────────────────────── */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-10">
              <div className="bg-white border border-gray-200 rounded-xl p-2 shadow-sm">
                <Image src="/logos/microsoft.svg" alt="Microsoft" width={80} height={28} className="h-6 w-auto object-contain" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Dynamics 365</p>
                <h2 className="text-2xl font-extrabold text-gray-900">ERP Benefits</h2>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {erpBenefits.map(({ Icon, bg, title, desc }) => (
                <div key={title} className="group bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:border-blue-100 hover:bg-white hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 ${bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className={`w-11 h-11 rounded-xl ${bg} mb-5 flex items-center justify-center shadow-md`}>
                    <Icon className="w-5 h-5 text-white" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CRM Benefits ─────────────────────────────────────────────── */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-10">
              <div className="bg-white border border-gray-200 rounded-xl p-2 shadow-sm">
                <Image src="/logos/hubspot.svg" alt="HubSpot" width={80} height={28} className="h-6 w-auto object-contain" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">HubSpot</p>
                <h2 className="text-2xl font-extrabold text-gray-900">CRM Benefits</h2>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {crmBenefits.map(({ Icon, bg, title, desc }) => (
                <div key={title} className="group bg-white rounded-2xl p-7 border border-gray-100 hover:border-orange-100 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 ${bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className={`w-11 h-11 rounded-xl ${bg} mb-5 flex items-center justify-center shadow-md`}>
                    <Icon className="w-5 h-5 text-white" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Together ─────────────────────────────────────────────── */}
        <section className="bg-white py-20 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-violet-50 to-blue-50 rounded-3xl p-10 md:p-14 border border-violet-100">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div>
                  <p className="text-xs font-bold text-violet-600 uppercase tracking-widest mb-3">Better Together</p>
                  <h2 className="text-3xl font-extrabold text-gray-900 mb-5">
                    ERP + CRM: Unified Business Intelligence
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    When Dynamics 365 and HubSpot work together, every team — from finance to sales —
                    shares a single source of truth. Customer data flows seamlessly between platforms,
                    enabling faster decisions, better service, and higher revenue.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { Icon: TrendingUp,    label: "Revenue Growth",     desc: "Aligned sales and ops" },
                    { Icon: HeartHandshake,label: "Customer Retention", desc: "360° relationship view" },
                    { Icon: Zap,           label: "Faster Decisions",   desc: "Real-time shared data" },
                    { Icon: Globe,         label: "Global Scale",       desc: "Multi-region ready" },
                  ].map(({ Icon: Ic, label, desc }) => (
                    <div key={label} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                      <Ic className="w-6 h-6 text-violet-600 mb-3" strokeWidth={1.75} />
                      <p className="font-bold text-gray-900 text-sm">{label}</p>
                      <p className="text-gray-400 text-xs mt-0.5">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-lg">
              Everything you need to know about our ERP and CRM practice.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group border border-gray-200 rounded-2xl overflow-hidden">
                <summary className="flex items-start justify-between gap-4 px-6 py-5 cursor-pointer list-none font-semibold text-gray-900 hover:bg-blue-50 transition-colors">
                  <span className="flex items-start gap-3">
                    <LayoutGrid className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" strokeWidth={1.75} />
                    {q}
                  </span>
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 group-open:bg-blue-100 flex-shrink-0 transition-colors mt-0.5">
                    <svg className="w-3.5 h-3.5 text-gray-500 group-open:text-blue-600 group-open:rotate-45 transition-all duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 pt-2 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pl-14">{a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-blue-600 to-violet-600 rounded-3xl p-10 md:p-14 text-white text-center">
              <div className="flex justify-center gap-4 mb-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg p-2.5">
                  <Image src="/logos/microsoft.svg" alt="Microsoft" width={48} height={20} className="h-5 w-auto object-contain" />
                </div>
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg p-2.5">
                  <Image src="/logos/hubspot.svg" alt="HubSpot" width={48} height={20} className="h-5 w-auto object-contain" />
                </div>
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
                Ready to unify your operations and customer data?
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Talk to our certified Microsoft Dynamics 365 and HubSpot experts today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/request-quote"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:-translate-y-0.5"
                >
                  Request a Quote <ArrowRight className="w-4 h-4" />
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
