import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ShieldCheck, BadgeCheck, Award, CheckCircle2,
  Lock, Star, Users, TrendingUp, RefreshCw, Scale,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IMS Policy | Kulana IT Solutions",
  description:
    "Kulana's Integrated Management System Policy covering quality management (ISO 9001) and information security management (ISO 27001).",
};

// ── Commitment pillars shown in the IMS overview card ──────────────────────
const pillars = [
  { Icon: BadgeCheck,  label: "Service Quality",         desc: "Ensuring every engagement meets the highest delivery standards." },
  { Icon: Users,       label: "Customer Satisfaction",   desc: "Placing client outcomes at the centre of every decision." },
  { Icon: Lock,        label: "Information Security",    desc: "Protecting business data across all touchpoints." },
  { Icon: RefreshCw,   label: "Incident Prevention",     desc: "Minimising service degradation through proactive controls." },
  { Icon: Scale,       label: "Legal Compliance",        desc: "Adhering to all applicable regulatory and statutory requirements." },
  { Icon: TrendingUp,  label: "Continuous Improvement",  desc: "Embedding a culture of learning, innovation, and growth." },
];

// ── ISO standard detail cards ───────────────────────────────────────────────
const standards = [
  {
    code: "ISO 27001",
    year: "2013",
    label: "Information Security Management",
    Icon: Lock,
    gradient: "from-blue-600 to-cyan-500",
    ringColor: "ring-blue-100",
    tagBg: "bg-blue-50 border-blue-100 text-blue-700",
    iconBg: "bg-blue-600",
    title: "ISMS Policy Statement",
    body: "Kulana is committed to adopting a structured Information Security Management System (ISMS) to ensure the warranty and assurance of the services we provide. We pledge to protect business information and the confidentiality, integrity, and availability of all data we handle, while conducting all work activities in a safe and secure manner consistent with the requirements of ISO 27001.",
    commitments: [
      "Confidentiality, Integrity & Availability of all data",
      "Safe and secure work practices across all operations",
      "Structured risk assessment and treatment processes",
      "Regular audits and continual security improvements",
    ],
  },
  {
    code: "ISO 9001",
    year: "2015",
    label: "Quality Management System",
    Icon: Award,
    gradient: "from-emerald-500 to-teal-600",
    ringColor: "ring-emerald-100",
    tagBg: "bg-emerald-50 border-emerald-100 text-emerald-700",
    iconBg: "bg-emerald-600",
    title: "QMS Policy Statement",
    body: "Kulana is committed to delivering efficient, effective, and innovative digital technology solutions that consistently exceed customer expectations. We will implement a Quality Management System that fully complies with the requirements of the ISO 9001:2015 standard, while adhering to all applicable legal and regulatory requirements. We pursue continuous improvement through strong partnerships, competent workforce engagement, and a culture of excellence.",
    commitments: [
      "Delivery of solutions that exceed customer expectations",
      "Full compliance with ISO 9001:2015 requirements",
      "Adherence to all legal and regulatory obligations",
      "Strong partnerships and competent workforce engagement",
    ],
  },
];

// ── ISO certification badge (SVG stamp) ────────────────────────────────────
function IsoBadge({ code, label, color }: { code: string; label: string; color: string }) {
  return (
    <div className={`relative flex flex-col items-center justify-center w-32 h-32 rounded-full border-4 ${color} bg-white shadow-lg`}>
      {/* outer ring notches */}
      <div className={`absolute inset-1 rounded-full border-2 border-dashed ${color} opacity-40`} />
      <span className="text-[10px] font-black tracking-widest text-gray-400 uppercase mb-0.5">Certified</span>
      <span className="text-xl font-black text-gray-800 leading-tight">{code}</span>
      <span className="text-[9px] font-semibold text-gray-500 text-center leading-tight px-3 mt-0.5">{label}</span>
      {/* top star */}
      <Star className="absolute -top-3 w-5 h-5 text-yellow-400 fill-yellow-400" />
    </div>
  );
}

export default function ImsPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">

        {/* ── Hero header ──────────────────────────────────────────────── */}
        <section className="gradient-hero relative overflow-hidden py-24 text-white">
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-cyan-300 mb-5">
                  <ShieldCheck className="w-4 h-4" /> Legal &amp; Compliance
                </span>
                <h1 className="text-4xl lg:text-5xl font-extrabold mb-5 leading-tight">
                  Integrated Management<br />System Policy
                </h1>
                <p className="text-blue-100 text-lg leading-relaxed max-w-xl">
                  Kulana operates under a certified Integrated Management System that combines
                  quality and information security management — ensuring every engagement meets
                  the highest global standards.
                </p>
              </div>

              {/* ISO badge stamps */}
              <div className="flex justify-center lg:justify-end items-center gap-8">
                <IsoBadge code="ISO 27001" label="Info Security" color="border-blue-400" />
                <IsoBadge code="ISO 9001" label="Quality Mgmt" color="border-emerald-400" />
              </div>
            </div>
          </div>
        </section>

        {/* ── IMS overview ─────────────────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Section label */}
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Statement 01</p>
                <h2 className="text-2xl font-extrabold text-gray-900">Integrated Management System (IMS) Policy</h2>
              </div>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-3xl">
              Kulana is committed to implementing a structured Integrated Management System to ensure
              the quality of our service delivery, enhance customer satisfaction, protect business
              information security, prevent service quality degradation during incidents, and maintain
              safe and secure work activities across all our operations.
            </p>

            {/* Pillars grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {pillars.map(({ Icon, label, desc }) => (
                <div key={label} className="group flex gap-4 p-5 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:border-blue-100 hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-white" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-0.5">{label}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ISO standard cards ───────────────────────────────────────── */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            {standards.map(({ code, year, label, Icon, gradient, ringColor, tagBg, iconBg, title, body, commitments }, idx) => (
              <div key={code} className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">

                {/* Coloured top bar */}
                <div className={`h-1.5 bg-gradient-to-r ${gradient}`} />

                <div className="p-8 md:p-10">
                  <div className="grid lg:grid-cols-3 gap-8 items-start">

                    {/* Left: badge + statement number */}
                    <div className="lg:col-span-1 flex flex-col items-center text-center gap-5">
                      <div className={`relative w-28 h-28 rounded-full border-4 ${
                        idx === 0 ? "border-blue-200" : "border-emerald-200"
                      } bg-gradient-to-br ${gradient} shadow-xl flex flex-col items-center justify-center ring-4 ${ringColor}`}>
                        <div className="absolute inset-2 rounded-full border-2 border-white/30 border-dashed" />
                        <Icon className="w-8 h-8 text-white mb-0.5" strokeWidth={1.5} />
                        <span className="text-white text-[10px] font-black tracking-widest uppercase">{code}</span>
                        <span className="text-white/80 text-[9px] font-medium">:{year}</span>
                      </div>
                      <div>
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 border rounded-full text-xs font-bold uppercase tracking-wide ${tagBg}`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-current" />
                          {label}
                        </span>
                      </div>
                      <div className="text-6xl font-black text-gray-50 leading-none select-none">
                        0{idx + 2}
                      </div>
                    </div>

                    {/* Right: content */}
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-9 h-9 rounded-lg ${iconBg} flex items-center justify-center flex-shrink-0`}>
                          <Icon className="w-5 h-5 text-white" strokeWidth={1.75} />
                        </div>
                        <h3 className="text-xl font-extrabold text-gray-900">{title}</h3>
                      </div>

                      <p className="text-gray-600 leading-relaxed mb-7">{body}</p>

                      {/* Commitments checklist */}
                      <div className="space-y-2.5">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Key Commitments</p>
                        {commitments.map((c) => (
                          <div key={c} className="flex items-start gap-3">
                            <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${idx === 0 ? "text-blue-500" : "text-emerald-500"}`} strokeWidth={2} />
                            <span className="text-gray-600 text-sm leading-relaxed">{c}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Certification summary banner ─────────────────────────────── */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-10 text-white">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6 text-white" />
                    </div>
                    <p className="font-bold text-white/80 text-sm uppercase tracking-widest">Our Certifications</p>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-extrabold mb-3">
                    Independently Audited &amp; Certified
                  </h2>
                  <p className="text-blue-100 leading-relaxed">
                    Both our Quality Management System and Information Security Management System
                    are independently audited and certified to international standards — giving our
                    clients confidence that every engagement is governed by world-class processes.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { code: "ISO 9001", year: "2015", label: "Quality Management System",      Icon: Award       },
                    { code: "ISO 27001", year: "2013", label: "Information Security Mgmt",      Icon: Lock        },
                    { code: "Certified",  year: "",     label: "Independently Audited",          Icon: BadgeCheck  },
                    { code: "Active",     year: "",     label: "Continuously Maintained",        Icon: RefreshCw   },
                  ].map(({ code, year, label, Icon: Ic }) => (
                    <div key={code} className="bg-white/10 border border-white/20 rounded-2xl p-4 flex flex-col gap-2">
                      <Ic className="w-6 h-6 text-cyan-300" strokeWidth={1.5} />
                      <p className="font-bold text-white text-sm">{code}{year ? ` : ${year}` : ""}</p>
                      <p className="text-blue-200 text-xs leading-snug">{label}</p>
                    </div>
                  ))}
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
