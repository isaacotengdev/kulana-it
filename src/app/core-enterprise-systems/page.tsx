import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import HeroCanvas from "@/components/HeroCanvas";
import {
  Server, Landmark, LayoutGrid, ShieldCheck, Building2,
  ArrowRight, CheckCircle2, Globe, Users, Zap, Award,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Core & Enterprise Systems | Kulana IT Solutions",
  description:
    "Mission-critical systems that power financial institutions and enterprises — Core Banking, ERP & CRM, Infrastructure, and Cybersecurity.",
};

const subServices = [
  {
    Icon: Landmark,
    title: "Core Banking",
    href: "/core-banking",
    tag: "Financial Services",
    gradient: "from-blue-500 to-blue-700",
    iconBg: "bg-blue-600",
    tagColor: "bg-blue-50 text-blue-700 border-blue-100",
    desc: "End-to-end implementation and support for modern core banking platforms. We help financial institutions modernise their systems with Temenos and other industry-leading platforms.",
    highlights: ["Account Management", "Loan Origination", "Digital Channels", "Regulatory Reporting"],
  },
  {
    Icon: LayoutGrid,
    title: "ERP & CRM",
    href: "/erp-and-crm",
    tag: "Business Operations",
    gradient: "from-violet-500 to-violet-700",
    iconBg: "bg-violet-600",
    tagColor: "bg-violet-50 text-violet-700 border-violet-100",
    desc: "Streamline operations with Microsoft Dynamics 365 and HubSpot CRM — tailored to your workflows, integrated with your existing systems, and designed for long-term growth.",
    highlights: ["Microsoft Dynamics 365", "HubSpot CRM", "Process Automation", "Reporting & BI"],
  },
  {
    Icon: Server,
    title: "Infrastructure",
    href: "/infrastructure",
    tag: "Infrastructure",
    gradient: "from-slate-600 to-slate-800",
    iconBg: "bg-slate-700",
    tagColor: "bg-slate-50 text-slate-700 border-slate-200",
    desc: "Design, build, and manage resilient data centers and IT infrastructure. We deliver scalable, high-availability environments that underpin your critical business operations.",
    highlights: ["Data Center Design", "Cloud Infrastructure", "Network Architecture", "24/7 Operations"],
  },
  {
    Icon: ShieldCheck,
    title: "Cybersecurity",
    href: "/cybersecurity",
    tag: "Security",
    gradient: "from-red-500 to-red-700",
    iconBg: "bg-red-600",
    tagColor: "bg-red-50 text-red-700 border-red-100",
    desc: "Protect your organisation with a comprehensive security posture — from SOC monitoring and threat intelligence to vulnerability assessments and incident response.",
    highlights: ["Security Operations Centre", "Threat Detection", "Vulnerability Management", "Compliance"],
  },
];

const stats = [
  { Icon: Globe,  value: "20+", label: "Countries Served"   },
  { Icon: Users,  value: "50+", label: "Enterprise Clients" },
  { Icon: Award,  value: "2",   label: "ISO Certifications" },
  { Icon: Zap,    value: "15+", label: "Years of Expertise" },
];

export default function CoreEnterpriseSystemsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">

        {/* Hero */}
        <section className="gradient-hero relative overflow-hidden py-28 text-white">
          <HeroCanvas variant="core-enterprise" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-cyan-300 mb-5">
              <Building2 className="w-4 h-4" /> Our Services
            </span>
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Core &amp; Enterprise Systems
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
              The mission-critical backbone of modern enterprises — from core banking and ERP
              to resilient infrastructure and cybersecurity.
            </p>
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

        {/* Sub-services */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">What We Deliver</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              Four Disciplines. One Integrated Practice.
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Our Core &amp; Enterprise Systems practice spans the full spectrum of critical business
              technology — delivered by specialists with deep domain knowledge.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {subServices.map(({ Icon, title, href, tag, gradient, iconBg, tagColor, desc, highlights }) => (
              <div
                key={title}
                className="group bg-white rounded-3xl border border-gray-100 hover:border-blue-100 hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className={`h-1.5 bg-gradient-to-r ${gradient}`} />
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${iconBg} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" strokeWidth={1.75} />
                    </div>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${tagColor}`}>
                      {tag}
                    </span>
                  </div>
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {title}
                  </h2>
                  <p className="text-gray-500 leading-relaxed mb-6 flex-1">{desc}</p>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00C8D8] flex-shrink-0" />
                        <span className="text-xs font-medium text-gray-600">{h}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors group/link"
                  >
                    Learn more <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-10 md:p-14 text-white text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Building2 className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
                Ready to strengthen your enterprise systems?
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Speak to our specialists and discover the right technology foundation for your organisation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/#contact"
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
