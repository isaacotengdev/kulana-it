import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import HeroCanvas from "@/components/HeroCanvas";
import {
  Landmark, Server, LayoutGrid, Plug, ClipboardList, BarChart3,
  ShieldCheck, ArrowRight, CheckCircle2, Award, BadgeCheck,
  Globe, Users, Zap,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Kulana IT Solutions",
  description:
    "Enterprise IT services across Africa and the Middle East — Core Banking, Data Center, ERP & CRM, Digital Integrations, Project Management, and Predictive Analysis.",
};

const services = [
  {
    title: "Core Banking",
    href: "/core-banking",
    Icon: Landmark,
    gradient: "from-blue-500 to-blue-700",
    iconBg: "bg-blue-600",
    border: "border-blue-100",
    tag: "Financial Services",
    tagColor: "bg-blue-50 text-blue-700 border-blue-100",
    hoverBorder: "hover:border-blue-300",
    partnerLogos: ["/logos/temenos.png"],
    partnerNames: ["Temenos"],
    desc: "End-to-end implementation and support for modern core banking platforms across African financial institutions.",
  },
  {
    title: "Data Center & Security Operations Centre",
    href: "/data-center-security-operations-centre",
    Icon: Server,
    gradient: "from-slate-600 to-slate-800",
    iconBg: "bg-slate-700",
    border: "border-slate-100",
    tag: "Infrastructure & Security",
    tagColor: "bg-slate-50 text-slate-700 border-slate-200",
    hoverBorder: "hover:border-slate-300",
    partnerLogos: ["/logos/dell.svg"],
    partnerNames: ["Dell"],
    desc: "Design, build, and manage resilient data centers and 24/7 security operations for your enterprise.",
  },
  {
    title: "ERP and CRM",
    href: "/erp-and-crm",
    Icon: LayoutGrid,
    gradient: "from-violet-500 to-violet-700",
    iconBg: "bg-violet-600",
    border: "border-violet-100",
    tag: "Business Operations",
    tagColor: "bg-violet-50 text-violet-700 border-violet-100",
    hoverBorder: "hover:border-violet-300",
    partnerLogos: ["/logos/microsoft.svg", "/logos/hubspot.svg"],
    partnerNames: ["Microsoft", "HubSpot"],
    desc: "Streamline business processes with leading ERP and CRM platforms tailored to your organisation.",
  },
  {
    title: "Digital Integrations & API Management",
    href: "/digital-integrations-api-management",
    Icon: Plug,
    gradient: "from-cyan-500 to-blue-600",
    iconBg: "bg-cyan-600",
    border: "border-cyan-100",
    tag: "Integration",
    tagColor: "bg-cyan-50 text-cyan-700 border-cyan-100",
    hoverBorder: "hover:border-cyan-300",
    partnerLogos: ["/logos/wso2.png"],
    partnerNames: ["WSO2"],
    desc: "Connect systems, automate workflows, and manage APIs at scale with enterprise-grade integration solutions.",
  },
  {
    title: "Project Management Consulting",
    href: "/project-management-consulting",
    Icon: ClipboardList,
    gradient: "from-emerald-500 to-teal-600",
    iconBg: "bg-emerald-600",
    border: "border-emerald-100",
    tag: "Consulting",
    tagColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
    hoverBorder: "hover:border-emerald-300",
    partnerLogos: [],
    partnerNames: [],
    desc: "Expert project delivery and PMO setup to ensure your IT initiatives are delivered on time and on budget.",
  },
  {
    title: "Predictive Analysis",
    href: "/predictive-analysis",
    Icon: BarChart3,
    gradient: "from-amber-500 to-orange-600",
    iconBg: "bg-amber-500",
    border: "border-amber-100",
    tag: "Analytics & AI",
    tagColor: "bg-amber-50 text-amber-700 border-amber-100",
    hoverBorder: "hover:border-amber-300",
    partnerLogos: [],
    partnerNames: [],
    desc: "Turn raw data into strategic advantage with advanced analytics, machine learning, and business intelligence.",
  },
];

const stats = [
  { Icon: Globe,     value: "20+", label: "Countries Served"     },
  { Icon: Users,     value: "50+", label: "Enterprise Clients"   },
  { Icon: Award,     value: "2",   label: "ISO Certifications"   },
  { Icon: Zap,       value: "15+", label: "Years of Expertise"   },
];

const differentiators = [
  { Icon: ShieldCheck, title: "ISO 9001 & 27001 Certified",  desc: "Independently audited quality and information security management systems." },
  { Icon: Globe,       title: "Pan-African Footprint",       desc: "Offices in Ghana and Mauritius with delivery across 20+ countries." },
  { Icon: BadgeCheck,  title: "Proven Technology Partners",  desc: "Alliances with Temenos, Dell, Microsoft, HubSpot, and WSO2." },
  { Icon: Users,       title: "Dedicated Expert Teams",      desc: "Specialists embedded in your project from strategy through to go-live." },
];

const allPartners = [
  { name: "Temenos",      src: "/logos/temenos.png",   h: "h-7"  },
  { name: "Dell",         src: "/logos/dell.svg",      h: "h-6"  },
  { name: "Microsoft",    src: "/logos/microsoft.svg", h: "h-6"  },
  { name: "HubSpot",      src: "/logos/hubspot.svg",   h: "h-6"  },
  { name: "WSO2",         src: "/logos/wso2.png",      h: "h-7"  },
];

export default function OurServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="gradient-hero relative overflow-hidden py-28 text-white">
          <HeroCanvas variant="our-services" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-cyan-300 mb-5">
              <Zap className="w-4 h-4" /> Enterprise IT Solutions
            </span>
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
              Enterprise-grade IT solutions designed to drive digital transformation
              across Africa and the Middle East.
            </p>
            {/* Stats row */}
            <div className="flex flex-wrap justify-center gap-6 mt-6">
              {stats.map(({ Icon, value, label }) => (
                <div key={label} className="flex items-center gap-3 px-5 py-3 bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm">
                  <Icon className="w-5 h-5 text-cyan-300" strokeWidth={1.75} />
                  <div className="text-left">
                    <p className="text-xl font-extrabold text-white leading-none">{value}</p>
                    <p className="text-xs text-blue-200 leading-none mt-0.5">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Services grid ─────────────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              Six Practice Areas. One Trusted Partner.
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              From core banking to predictive analytics, our specialists deliver end-to-end
              solutions built on industry-leading platforms and frameworks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map(({ title, href, Icon, gradient, iconBg, border, tag, tagColor, hoverBorder, partnerLogos, partnerNames, desc }) => (
              <Link
                key={title}
                href={href}
                className={`group relative bg-white rounded-3xl border ${border} ${hoverBorder} hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col`}
              >
                {/* Gradient top bar */}
                <div className={`h-1.5 bg-gradient-to-r ${gradient}`} />

                <div className="p-7 flex flex-col flex-1">
                  {/* Icon + tag row */}
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-13 h-13 rounded-2xl ${iconBg} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}
                      style={{ width: "52px", height: "52px" }}>
                      <Icon className="w-6 h-6 text-white" strokeWidth={1.75} />
                    </div>
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold border ${tagColor}`}>
                      {tag}
                    </span>
                  </div>

                  <h2 className="text-lg font-extrabold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                    {title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{desc}</p>

                  {/* Partner logos */}
                  {partnerLogos.length > 0 && (
                    <div className="mt-5 pt-4 border-t border-gray-100 flex items-center gap-3">
                      <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Powered by</span>
                      <div className="flex items-center gap-3">
                        {partnerLogos.map((src, i) => (
                          <Image
                            key={src}
                            src={src}
                            alt={partnerNames[i]}
                            width={72}
                            height={24}
                            className="h-5 w-auto object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Learn more */}
                  <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-blue-600 group-hover:gap-2.5 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Why Kulana ───────────────────────────────────────────────── */}
        <section className="bg-gray-50 border-y border-gray-100 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Why Kulana</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
                The Kulana Difference
              </h2>
              <p className="text-gray-500 text-lg max-w-xl mx-auto">
                We combine global standards with deep local knowledge to deliver outcomes that matter.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {differentiators.map(({ Icon, title, desc }) => (
                <div key={title} className="group flex flex-col items-start gap-4 p-6 rounded-2xl bg-white border border-gray-100 hover:border-blue-100 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <Icon className="w-6 h-6 text-white" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-1.5">{title}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Partners + Certifications ─────────────────────────────────── */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Partner logos */}
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Strategic Technology Partners</p>
                <div className="grid grid-cols-3 gap-4">
                  {allPartners.map(({ name, src, h }) => (
                    <div key={name} className="flex items-center justify-center bg-gray-50 border border-gray-100 rounded-2xl px-4 py-5 hover:border-blue-100 hover:bg-blue-50 transition-all">
                      <Image
                        src={src}
                        alt={name}
                        width={120}
                        height={40}
                        className={`${h} w-auto object-contain`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Our Certifications</p>
                <div className="space-y-4">
                  {[
                    {
                      src: "/logos/iso9001.svg",
                      title: "ISO 9001 : 2015",
                      label: "Quality Management System",
                      desc: "Independently audited and certified for consistent delivery of quality IT solutions.",
                      color: "border-emerald-200 bg-emerald-50",
                      dot: "bg-emerald-500",
                    },
                    {
                      src: "/logos/iso27001.svg",
                      title: "ISO 27001 : 2013",
                      label: "Information Security Management",
                      desc: "Certified framework ensuring confidentiality, integrity, and availability of all data.",
                      color: "border-blue-200 bg-blue-50",
                      dot: "bg-blue-500",
                    },
                  ].map(({ src, title, label, desc, color, dot }) => (
                    <div key={title} className={`flex items-start gap-5 p-5 rounded-2xl border ${color}`}>
                      <div className="w-14 h-14 bg-white rounded-xl border border-gray-100 shadow-sm flex items-center justify-center flex-shrink-0 p-2">
                        <Image src={src} alt={title} width={48} height={48} className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-extrabold text-gray-900 text-sm">{title}</p>
                          <span className={`w-1.5 h-1.5 rounded-full ${dot} inline-block`} />
                          <span className="text-[11px] font-semibold text-gray-400">{label}</span>
                        </div>
                        <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-10 md:p-14 text-white text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
                Ready to transform your organisation?
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Speak to a Kulana consultant today and discover which services will deliver
                the most value for your business.
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
