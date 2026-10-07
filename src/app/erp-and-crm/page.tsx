import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
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
  { Icon: Package,       label: "Supply Chain",          color: "text-teal-600",    bg: "bg-teal-50",    border: "border-teal-100"   },
  { Icon: Users,         label: "Human Resources",       color: "text-teal-600",    bg: "bg-teal-50",    border: "border-teal-100" },
  { Icon: ShoppingCart,  label: "Sales Pipeline",        color: "text-cyan-600",    bg: "bg-cyan-50",    border: "border-cyan-100" },
  { Icon: Megaphone,     label: "Marketing Automation",  color: "text-cyan-600",    bg: "bg-cyan-50",    border: "border-cyan-100"  },
  { Icon: BarChart3,     label: "Analytics and Reporting", color: "text-blue-600",    bg: "bg-blue-50",    border: "border-blue-100" },
];

const features = [
  { Icon: DollarSign,   label: "Financial Management",        desc: "Dynamics 365 ERP simplifies budgeting, reporting, and financial close for real-time insights and regulatory compliance." },
  { Icon: Package,      label: "Supply Chain and Operations",  desc: "Production planning and asset management ensure lean processes and responsive project handling across your organisation." },
  { Icon: Users,        label: "Human Resources",             desc: "End-to-end HR management from recruitment and onboarding to payroll and performance — built for scale." },
  { Icon: ShoppingCart, label: "Sales Pipeline Management",   desc: "Lead tracking and deal management accelerate sales cycles with automated follow-ups and real-time pipeline visibility." },
  { Icon: Megaphone,    label: "Marketing Automation",        desc: "Automated targeted campaigns with performance tracking enhance engagement metrics and marketing ROI." },
  { Icon: BarChart3,    label: "Analytics & Reporting",       desc: "Comprehensive dashboards and reporting across ERP and CRM data for data-driven decisions and strategic planning." },
  { Icon: Plug,         label: "Seamless Integrations",       desc: "Microsoft Power Platform enables connectivity with business applications, productivity tools, and data repositories." },
  { Icon: Globe,        label: "Global Scale and Flexibility", desc: "Cloud-based infrastructure adapts to organisational growth and market shifts across regions without disruption." },
  { Icon: HeartHandshake, label: "Unified Customer View",     desc: "HubSpot CRM consolidates customer interactions across email, calls, social, and website into a single timeline." },
];

const benefits = [
  { Icon: DollarSign,     bg: "bg-blue-600",    title: "Streamlined Financial Management", desc: "Dynamics 365 ERP simplifies financial tasks like budgeting and reporting for real-time insights and regulatory compliance." },
  { Icon: Users,          bg: "bg-teal-600",    title: "Unified Customer View",            desc: "HubSpot CRM consolidates customer interactions across channels for better understanding of preferences and needs." },
  { Icon: Zap,            bg: "bg-cyan-600",    title: "Operational Efficiency",           desc: "Production planning, asset management, and process automation ensure lean operations across your organisation." },
  { Icon: TrendingUp,     bg: "bg-cyan-500",    title: "Revenue Growth",                   desc: "Aligned sales and marketing data, pipeline visibility, and AI-driven insights help teams close more deals at higher value." },
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
    q: "What deployment options exist for Microsoft Dynamics 365?",
    a: "Dynamics 365 is primarily a cloud-hosted platform delivered via Microsoft Azure. Most modules — including Finance, Supply Chain Management, and Sales — run in the cloud, with updates managed by Microsoft. For organisations with specific data-residency or on-premises requirements, hybrid configurations are possible, and Microsoft's on-premises product (Dynamics 365 Business Central on-premises) exists for smaller deployments. Kulana will recommend the right model based on your compliance, infrastructure, and scale requirements.",
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
    q: "What post-implementation support does Kulana provide for HubSpot?",
    a: "Kulana provides hands-on support after go-live — including configuration adjustments, user training, troubleshooting, and ongoing optimisation as your sales and marketing processes evolve. HubSpot itself offers documentation, a knowledge base, and community forums. Paid HubSpot tiers also include direct chat and phone support from HubSpot's own team. Kulana acts as your local partner for day-to-day guidance and platform administration.",
  },
];

const MF = "var(--font-manrope), sans-serif";

export default function ErpCrmPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden" style={{ height: "100vh" }}>
          <Image
            src="/images/Service_Core & Enterprise Systems/ERP_CRM/Hero image_ERP and CRM_2560×1440px.webp"
            alt="ERP & CRM"
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
                ERP &amp; CRM
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

        {/* ── What is ERP and CRM? ─────────────────────────────────────── */}
        <section className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
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

        {/* ── Platform Spotlights ───────────────────────────────────────── */}
        <section className="bg-gray-950 py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <div className="bg-white rounded-2xl p-5 flex items-center justify-center w-32 h-20 shadow-lg">
                    <Image src="/logos/microsoft.svg" alt="Microsoft" width={120} height={48} className="h-10 w-auto object-contain" />
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
                  <div className="bg-white rounded-2xl p-5 flex items-center justify-center w-32 h-20 shadow-lg">
                    <Image src="/logos/hubspot.svg" alt="HubSpot" width={120} height={48} className="h-10 w-auto object-contain" />
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

        {/* ── Features ─────────────────────────────────────────────────── */}
        <section className="bg-white py-24">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">What We Deliver</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
                ERP and CRM Capabilities
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                A unified set of capabilities spanning both Microsoft Dynamics 365 and HubSpot — covering every function from finance to customer success.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map(({ Icon, label, desc }, i) => (
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
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Why Modernise</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">Benefits</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                When ERP and CRM work together, every team — from finance to sales — shares a single source of truth and moves faster.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map(({ Icon, bg, title, desc }) => (
                <div key={title} className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-100 hover:shadow-xl transition-all duration-300 overflow-hidden relative">
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
                Find answers to common questions about our ERP and CRM services and approach.
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
                Ready to unify your operations and customer data?
              </h2>
              <div className="flex-1">
                <p className="text-sm lg:text-base mb-6 leading-relaxed" style={{ fontFamily: MF, color: "#200044" }}>
                  Talk to our certified Microsoft Dynamics 365 and HubSpot experts today.
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
