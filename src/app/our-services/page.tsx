import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import HeroCanvas from "@/components/HeroCanvas";
import {
  Server, Network, Brain, GraduationCap,
  ShieldCheck, ArrowRight, CheckCircle2, Award, BadgeCheck,
  Globe, Users, Zap,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Kulana IT Solutions",
  description:
    "Enterprise IT services across Africa and the Middle East — Core & Enterprise Systems, Integration & Digital Connectivity, Data & AI Intelligence, and Kulana Academy.",
};

const services = [
  {
    title: "Core & Enterprise Systems",
    href: "/core-enterprise-systems",
    Icon: Server,
    gradient: "from-blue-500 to-blue-700",
    iconBg: "bg-blue-600",
    border: "border-blue-100",
    tag: "Enterprise",
    tagColor: "bg-blue-50 text-blue-700 border-blue-100",
    hoverBorder: "hover:border-blue-300",
    partnerLogos: ["/logos/temenos.png", "/logos/dell.svg"],
    partnerNames: ["Temenos", "Dell"],
    desc: "Mission-critical systems that power financial institutions and enterprises — Core Banking, ERP & CRM, Infrastructure, and Cybersecurity.",
    subServices: ["Core Banking", "ERP & CRM", "Infrastructure", "Cybersecurity"],
  },
  {
    title: "Integration & Digital Connectivity",
    href: "/integration-digital-connectivity",
    Icon: Network,
    gradient: "from-cyan-500 to-blue-600",
    iconBg: "bg-cyan-600",
    border: "border-cyan-100",
    tag: "Integration",
    tagColor: "bg-cyan-50 text-cyan-700 border-cyan-100",
    hoverBorder: "hover:border-cyan-300",
    partnerLogos: ["/logos/wso2.png"],
    partnerNames: ["WSO2"],
    desc: "Seamless integration architectures and AI-native engineering that unify your digital landscape and unlock new business potential.",
    subServices: ["Integration", "Enterprise Architecture", "AI-Native Product Engineering"],
  },
  {
    title: "Data & AI Intelligence",
    href: "/data-ai-intelligence",
    Icon: Brain,
    gradient: "from-violet-500 to-purple-700",
    iconBg: "bg-violet-600",
    border: "border-violet-100",
    tag: "Data & AI",
    tagColor: "bg-violet-50 text-violet-700 border-violet-100",
    hoverBorder: "hover:border-violet-300",
    partnerLogos: [],
    partnerNames: [],
    desc: "Advanced data strategies, artificial intelligence, and intelligent automation that transform raw information into strategic advantage.",
    subServices: ["Data", "AI", "RPA"],
  },
  {
    title: "Kulana Academy",
    href: "https://www.kulana.academy/",
    external: true,
    Icon: GraduationCap,
    gradient: "from-emerald-500 to-teal-600",
    iconBg: "bg-emerald-600",
    border: "border-emerald-100",
    tag: "Training",
    tagColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
    hoverBorder: "hover:border-emerald-300",
    partnerLogos: [],
    partnerNames: [],
    desc: "Structured training programmes and partner offerings that elevate your team's digital capabilities and keep your workforce future-ready.",
    subServices: [] as string[],
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
  { name: "Temenos",      src: "/logos/temenos.png",   h: "h-10" },
  { name: "Dell",         src: "/logos/dell.svg",      h: "h-9"  },
  { name: "Microsoft",    src: "/logos/microsoft.svg", h: "h-9"  },
  { name: "HubSpot",      src: "/logos/hubspot.svg",   h: "h-9"  },
  { name: "WSO2",         src: "/logos/wso2.png",      h: "h-10" },
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
              Four Practice Areas. One Trusted Partner.
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              From core banking to AI intelligence, our specialists deliver end-to-end
              solutions across four integrated pillars built on industry-leading platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-7">
            {services.map(({ title, href, Icon, gradient, iconBg, border, tag, tagColor, hoverBorder, partnerLogos, partnerNames, desc, subServices, ...rest }) => {
              const isExternal = "external" in rest && (rest as { external?: boolean }).external;
              const cardClass = `group relative bg-white rounded-3xl border ${border} ${hoverBorder} hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col`;
              const inner = (
                <>
                  <div className={`h-1.5 bg-gradient-to-r ${gradient}`} />
                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-5">
                      <div className={`rounded-2xl ${iconBg} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}
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
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
                    {subServices.length > 0 && (
                      <div className="flex flex-wrap gap-2 flex-1">
                        {subServices.map((s) => (
                          <span key={s} className="inline-flex items-center gap-1 px-2.5 py-1 bg-gray-50 border border-gray-200 rounded-full text-[11px] font-semibold text-gray-600">
                            <CheckCircle2 className="w-3 h-3 text-blue-400" /> {s}
                          </span>
                        ))}
                      </div>
                    )}
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
                    <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-blue-600 group-hover:gap-2.5 transition-all">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </>
              );
              return isExternal ? (
                <a
                  key={title}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClass}
                >
                  {inner}
                </a>
              ) : (
                <Link key={title} href={href} className={cardClass}>
                  {inner}
                </Link>
              );
            })}
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
                <div className="grid grid-cols-3 gap-5">
                  {allPartners.map(({ name, src, h }) => (
                    <div key={name} className="flex items-center justify-center bg-gray-50 border border-gray-100 rounded-2xl px-6 py-8 hover:border-blue-100 hover:bg-blue-50 transition-all">
                      <Image
                        src={src}
                        alt={name}
                        width={150}
                        height={52}
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
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:-translate-y-0.5"
                >
                  Request a Consultation <ArrowRight className="w-4 h-4" />
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
