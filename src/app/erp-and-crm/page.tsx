import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import {
  DollarSign, Zap, Globe, Users, TrendingUp,
  BarChart3, Plug, ArrowRight,
  Megaphone, ShoppingCart, Package, HeartHandshake,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ERP and CRM | Kulana IT Solutions",
  description:
    "Optimize your business processes and customer relationships with tailored ERP and CRM solutions leveraging Microsoft Dynamics 365 and HubSpot.",
};

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
        <section className="relative overflow-hidden min-h-[480px] lg:min-h-[840px]">
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
            className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8"
            style={{ paddingTop: "calc(80px + clamp(32px, 6vw, 90px))", paddingBottom: "clamp(40px, 6vw, 90px)" }}
          >
            <div>
              <p
                className="inline-block tracking-normal uppercase mb-6"
                style={{ fontFamily: MF, fontWeight: 600, color: "#57D9D4", fontSize: "clamp(13px, 1.2vw, 18px)" }}
              >
                Core &amp; Enterprise Systems
              </p>
              <h1
                className="text-white uppercase leading-tight"
                style={{ fontFamily: MF, fontWeight: 500, fontSize: "clamp(32px, 4vw, 53px)" }}
              >
                ERP &amp; CRM
              </h1>
            </div>
            <div style={{ marginTop: "clamp(48px, 10vw, 140px)" }}>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-md transition-all shadow-lg hover:-translate-y-0.5"
                style={{ fontFamily: MF, fontWeight: 600, background: "#57D9D4", color: "#040d28", fontSize: "13px" }}
              >
                Request a Consultation <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Overview ─────────────────────────────────────────────────── */}
        <section className="bg-white py-10 lg:py-12">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Label + black rule */}
            <div className="mb-6">
              <span className="tracking-normal uppercase" style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "11px" }}>
                Overview
              </span>
              <div className="w-full h-px mt-3" style={{ background: "#000000" }} />
            </div>

            {/* Heading */}
            <h2 className="leading-tight mb-6" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(18px, 1.8vw, 26px)" }}>
              What is ERP and CRM?
            </h2>

            {/* 2-col: description left, tags right */}
            <div className="grid lg:grid-cols-[3fr_2fr] gap-8 items-start">
              <div>
                <p className="mb-8" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1.2vw, 18px)", lineHeight: "1.4" }}>
                  We help organisations streamline internal operations and strengthen customer relationships by implementing integrated ERP and CRM solutions. Our solutions bring together critical business functions — including finance, human resources, procurement, operations and customer management — to improve efficiency and provide greater visibility across the organisation.
                </p>
                <p style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1.2vw, 18px)", lineHeight: "1.4" }}>
                  As a certified partner of Microsoft Dynamics 365 and HubSpot, we combine platform expertise with a deep understanding of business needs to implement and customise solutions that fit each organisation&apos;s processes, goals and requirements.
                </p>
              </div>
              <div className="flex flex-col gap-4 items-end">
                {["Finance & Ops", "Sales Automation", "Marketing Hub", "Customer Service"].map((tag) => (
                  <div key={tag} className="flex items-center justify-center py-4 rounded-lg text-center"
                    style={{ border: "1.5px solid #57D9D4", fontFamily: MF, fontWeight: 700, color: "#200044", fontSize: "clamp(13px, 1vw, 14px)", maxWidth: "340px", width: "100%" }}>
                    {tag}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ── How to Get Started ───────────────────────────────────────── */}
        <section className="py-10 lg:py-12" style={{ background: "#200044" }}>
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Label + white rule */}
            <div className="mb-8">
              <span className="tracking-normal uppercase" style={{ fontFamily: MF, fontWeight: 600, color: "#ffffff", fontSize: "11px" }}>
                How to Get Started
              </span>
              <div className="w-full h-px mt-3" style={{ background: "#ffffff" }} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
              {[
                { step: "01", title: "Assessment",     desc: "Experienced consultants conduct thorough analysis of current systems, workflows, and pain points to identify improvement opportunities." },
                { step: "02", title: "Strategy",       desc: "A customised implementation roadmap aligns with your business objectives, budget constraints, and timeline requirements." },
                { step: "03", title: "Implementation", desc: "Configuration, customisation, and integration occur through stakeholder engagement and iterative approaches, with training and ongoing support provided." },
              ].map(({ step, title, desc }) => (
                <div key={step}>
                  <p className="leading-none mb-4" style={{ fontFamily: MF, fontWeight: 400, color: "#a198af", fontSize: "clamp(24px, 2.85vw, 41px)" }}>{step}</p>
                  <p className="mb-4" style={{ fontFamily: MF, fontWeight: 400, color: "#57D9D4", fontSize: "clamp(18px, 1.8vw, 26px)" }}>{title}</p>
                  <p style={{ fontFamily: MF, fontWeight: 400, color: "#ffffff", fontSize: "clamp(13px, 1vw, 14px)", lineHeight: "1.5" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Powered By ───────────────────────────────────────────────── */}
        <section className="bg-white py-10 lg:py-12">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Label + black rule */}
            <div className="mb-6">
              <span className="tracking-normal uppercase" style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "11px" }}>
                Powered By
              </span>
              <div className="w-full h-px mt-3" style={{ background: "#000000" }} />
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-start mb-8">
              <h2 className="leading-tight" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(18px, 1.8vw, 26px)" }}>
                World-Class Platforms
              </h2>
              <p className="lg:pt-2" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1.2vw, 18px)", lineHeight: "1.4" }}>
                We are certified implementation partners for the two most widely adopted ERP and CRM platforms globally.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">

              {/* Microsoft Dynamics 365 */}
              <div className="bg-white border border-gray-100 rounded-xl p-8">
                <Image src="/images/Service_Core & Enterprise Systems/ERP_CRM/Microsoft_logo_color.svg" alt="Microsoft" width={140} height={48} className="h-10 w-auto object-contain mb-6" />
                <p className="text-xs tracking-normal uppercase font-bold text-gray-400 mb-3" style={{ fontFamily: MF }}>ERP Platform</p>
                <p className="mb-3" style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "clamp(14px, 1.45vw, 21px)" }}>Microsoft Dynamics 365</p>
                <p className="mb-6" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1vw, 14px)", lineHeight: "1.5" }}>
                  A unified suite of intelligent business applications combining ERP and CRM capabilities
                  with built-in AI, analytics, and seamless Microsoft 365 integration.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {["Finance & Operations", "Project Operations", "Supply Chain Mgmt", "Commerce", "Human Resources", "Power Platform"].map((m) => (
                    <div key={m} className="flex items-center gap-2" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1vw, 14px)" }}>
                      <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#57D9D4" }} />
                      {m}
                    </div>
                  ))}
                </div>
              </div>

              {/* HubSpot */}
              <div className="bg-white border border-gray-100 rounded-xl p-8">
                <Image src="/images/Service_Core & Enterprise Systems/ERP_CRM/HubSpot_Logo.svg" alt="HubSpot" width={140} height={48} className="h-10 w-auto object-contain mb-6" />
                <p className="text-xs tracking-normal uppercase font-bold text-gray-400 mb-3" style={{ fontFamily: MF }}>CRM Platform</p>
                <p className="mb-3" style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "clamp(14px, 1.45vw, 21px)" }}>HubSpot CRM</p>
                <p className="mb-6" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1vw, 14px)", lineHeight: "1.5" }}>
                  An all-in-one inbound marketing, sales, and service platform that helps teams
                  attract visitors, convert leads, and close deals at scale.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {["Marketing Hub", "Sales Hub", "Service Hub", "CMS Hub", "Operations Hub", "HubSpot Academy"].map((m) => (
                    <div key={m} className="flex items-center gap-2" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1vw, 14px)" }}>
                      <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#57D9D4" }} />
                      {m}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Capabilities ─────────────────────────────────────────────── */}
        <section style={{ background: "#f5f5f5" }} className="py-10 lg:py-12">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Label + black rule */}
            <div className="mb-6">
              <span className="tracking-normal uppercase" style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "11px" }}>
                Capabilities
              </span>
              <div className="w-full h-px mt-3" style={{ background: "#000000" }} />
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-start mb-8">
              <h2 className="leading-tight" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(18px, 1.8vw, 26px)" }}>
                ERP and CRM Capabilities
              </h2>
              <p className="lg:pt-2" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1.2vw, 18px)", lineHeight: "1.4" }}>
                A unified set of capabilities spanning both Microsoft Dynamics 365 and HubSpot — covering every function from finance to customer success.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map(({ label, desc }) => (
                <div key={label} className="bg-white border border-gray-100 rounded-xl p-6">
                  <p className="mb-3" style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "clamp(14px, 1.45vw, 21px)" }}>{label}</p>
                  <p style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1vw, 14px)", lineHeight: "1.5" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Modernise ────────────────────────────────────────────── */}
        <section className="bg-white py-10 lg:py-12">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Label + black rule */}
            <div className="mb-6">
              <span className="tracking-normal uppercase" style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "11px" }}>
                Why Modernise
              </span>
              <div className="w-full h-px mt-3" style={{ background: "#000000" }} />
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-start mb-8">
              <h2 className="leading-tight" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(18px, 1.8vw, 26px)" }}>
                Benefits
              </h2>
              <p className="lg:pt-2" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1.2vw, 18px)", lineHeight: "1.4" }}>
                When ERP and CRM work together, every team — from finance to sales — shares a single source of truth and moves faster.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map(({ title, desc }) => (
                <div key={title} className="rounded-xl p-6" style={{ border: "1.5px solid #57D9D4", background: "#f1ffff" }}>
                  <p className="mb-3" style={{ fontFamily: MF, fontWeight: 400, color: "#57D9D4", fontSize: "clamp(14px, 1.45vw, 21px)" }}>{title}</p>
                  <p style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1vw, 14px)", lineHeight: "1.5" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
        <section className="bg-white py-10 lg:py-12">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Label + black rule */}
            <div className="mb-8">
              <span className="tracking-normal uppercase" style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "11px" }}>FAQ</span>
              <div className="w-full h-px mt-3" style={{ background: "#000000" }} />
            </div>

            {/* Row 1: heading left | description right */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 mb-6">
              <h2 className="leading-tight" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(18px, 1.8vw, 26px)" }}>
                Your questions<br />answered
              </h2>
              <p style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1.2vw, 18px)", lineHeight: "1.4" }}>
                Find answers to common questions about our ERP and CRM services and approach.
              </p>
            </div>

            {/* Row 2: image left | accordion right */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
              <div className="relative w-full rounded-2xl overflow-hidden lg:mt-14" style={{ aspectRatio: "4/5", maxWidth: "320px" }}>
                <Image src="/images/Service_Core & Enterprise Systems/ERP_CRM/Hero image_ERP and CRM_2560×1440px.webp" alt="ERP and CRM" fill className="object-cover object-center" sizes="320px" />
              </div>

              <div className="divide-y" style={{ borderColor: "#e5e7eb" }}>
                {faqs.map(({ q, a }) => (
                  <details key={q} className="group py-5">
                    <summary className="flex items-center justify-between gap-6 cursor-pointer list-none">
                      <span style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "clamp(13px, 1vw, 14px)", lineHeight: "1.5" }}>{q}</span>
                      <span className="flex-shrink-0 leading-none select-none" style={{ color: "#000000", fontSize: "clamp(13px, 1.2vw, 18px)" }}>
                        <span className="group-open:hidden">+</span>
                        <span className="hidden group-open:inline">−</span>
                      </span>
                    </summary>
                    <p className="mt-4" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1vw, 14px)", lineHeight: "1.5" }}>{a}</p>
                  </details>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section style={{ background: "#57D9D4" }}>
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-9 lg:py-10">
            <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-8">
              <h2
                className="leading-tight lg:w-[45%] flex-shrink-0"
                style={{ fontFamily: MF, fontWeight: 700, color: "#200044", fontSize: "clamp(20px, 2.1vw, 31px)" }}
              >
                Ready to unify your operations and customer data?
              </h2>
              <div className="flex-1">
                <p className="mb-8" style={{ fontFamily: MF, fontWeight: 400, color: "#200044", fontSize: "clamp(13px, 1vw, 14px)", lineHeight: "1.5" }}>
                  Talk to our certified Microsoft Dynamics 365 and HubSpot experts today.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md transition-all hover:opacity-90"
                    style={{ fontFamily: MF, fontWeight: 600, background: "#200044", color: "#ffffff", fontSize: "13px" }}
                  >
                    Request a Consultation <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md border transition-all hover:bg-white/20"
                    style={{ fontFamily: MF, fontWeight: 600, color: "#200044", borderColor: "#200044", fontSize: "13px" }}
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
