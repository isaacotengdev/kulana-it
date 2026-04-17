import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ShieldCheck, FileText, Database, Lock,
  BarChart2, RefreshCw, Mail, Phone, MapPin, Eye,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Kulana IT Solutions",
  description:
    "Kulana is committed to ensuring that your privacy is protected. Read our privacy policy to understand how we handle your personal information.",
};

const sections = [
  {
    id: "what-we-collect",
    Icon: Database,
    iconBg: "bg-blue-600",
    title: "Information We Collect",
    content: (
      <>
        <p className="text-gray-500 leading-relaxed mb-4">
          We may collect the following information when you interact with our website or services:
        </p>
        <ul className="space-y-2">
          {[
            "Name and job title",
            "Contact information including email address and telephone number",
            "Demographic information such as postcode, preferences, and interests",
            "Other information relevant to customer surveys and service delivery",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-gray-500 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 mt-1.5" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-gray-500 leading-relaxed mt-4 text-sm">
          We also collect browser data through Log Data, capturing your IP address, browser type and
          version, the pages you visit, the time and date of your visit, and time spent on each page.
          Third-party analytics tools such as Google Analytics assist in monitoring this information.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    Icon: Eye,
    iconBg: "bg-violet-600",
    title: "How We Use Your Information",
    content: (
      <>
        <p className="text-gray-500 leading-relaxed mb-4">
          We require this information to understand your needs and provide you with a better service:
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { label: "Internal Records",    desc: "Maintaining accurate records of your interactions and preferences." },
            { label: "Service Improvement", desc: "Analysing usage to continually improve our products and services." },
            { label: "Communications",      desc: "Sending updates about new services, offers, or relevant information." },
            { label: "Market Research",     desc: "Occasionally contacting you for feedback to shape future offerings." },
          ].map(({ label, desc }) => (
            <div key={label} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <p className="font-semibold text-gray-900 text-sm mb-1">{label}</p>
              <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: "security",
    Icon: Lock,
    iconBg: "bg-emerald-600",
    title: "Security",
    content: (
      <>
        <p className="text-gray-500 leading-relaxed mb-4">
          We are committed to ensuring that your information is secure. In order to prevent unauthorised
          access or disclosure, we have put in place suitable administrative, technical, electronic, and
          physical security measures to safeguard and secure the information we collect online.
        </p>
        <div className="flex flex-wrap gap-3">
          {["Administrative Controls", "Technical Safeguards", "Electronic Security", "Physical Measures"].map((m) => (
            <span key={m} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full text-xs font-semibold text-emerald-700">
              <ShieldCheck className="w-3.5 h-3.5" /> {m}
            </span>
          ))}
        </div>
        <p className="text-gray-400 text-xs leading-relaxed mt-4">
          Please note that despite our best efforts, no security measure is entirely infallible. We
          will not be held liable for unauthorised interception or misuse of your data by third parties.
        </p>
      </>
    ),
  },
  {
    id: "analytics",
    Icon: BarChart2,
    iconBg: "bg-amber-500",
    title: "Analytics & Third Parties",
    content: (
      <p className="text-gray-500 leading-relaxed">
        We use Google Analytics and similar third-party tools to monitor website performance and
        understand visitor behaviour. These services may place their own cookies on your device and
        collect data in accordance with their own privacy policies. We do not sell or rent your
        personal information to third parties.
      </p>
    ),
  },
  {
    id: "changes",
    Icon: RefreshCw,
    iconBg: "bg-cyan-600",
    title: "Changes to This Policy",
    content: (
      <p className="text-gray-500 leading-relaxed">
        Kulana Limited reserves the right to modify this privacy policy at any time. This policy
        became effective on <strong className="text-gray-700">31 March 2022</strong>. Changes will
        take effect immediately upon posting to this page. We encourage you to check this page
        periodically to remain informed. Continued use of this website after any modifications
        constitutes your acceptance of the revised policy.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="gradient-hero relative overflow-hidden py-24 text-white">
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center gap-10">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-cyan-300 mb-5">
                  <FileText className="w-4 h-4" /> Legal &amp; Compliance
                </span>
                <h1 className="text-4xl lg:text-5xl font-extrabold mb-5 leading-tight">Privacy Policy</h1>
                <p className="text-blue-100 text-lg leading-relaxed max-w-xl">
                  Kulana is committed to ensuring that your privacy is protected. This policy explains
                  what data we collect, how we use it, and the steps we take to keep it safe.
                </p>
                <p className="text-blue-200 text-sm mt-4">Effective date: 31 March 2022</p>
              </div>
              {/* Shield icon */}
              <div className="flex-shrink-0 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center backdrop-blur-sm">
                  <ShieldCheck className="w-20 h-20 text-cyan-300" strokeWidth={1.25} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Quick-glance commitment strip ────────────────────────────── */}
        <section className="bg-white border-b border-gray-100 py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
              {[
                { Icon: Lock,       label: "Data Never Sold"       },
                { Icon: ShieldCheck,label: "Secure Storage"        },
                { Icon: Eye,        label: "Transparent Usage"     },
                { Icon: RefreshCw,  label: "Regularly Updated"     },
              ].map(({ Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5 px-4 py-2.5 bg-blue-50 border border-blue-100 rounded-xl">
                  <Icon className="w-4 h-4 text-blue-600" strokeWidth={2} />
                  <span className="text-sm font-semibold text-blue-800">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Introduction ─────────────────────────────────────────────── */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-3xl p-8 md:p-10">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center flex-shrink-0 shadow-md">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-gray-900 mb-3">Introduction</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Kulana Limited outlines how it handles personal information from website visitors and
                    clients. By using this website you confirm your acceptance of the terms set out in
                    this policy. We may change this policy from time to time by updating this page — you
                    should check back periodically to ensure you are happy with any changes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Policy sections ──────────────────────────────────────────── */}
        <section className="pb-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            {sections.map(({ id, Icon, iconBg, title, content }) => (
              <div key={id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="flex items-center gap-4 px-8 pt-7 pb-5 border-b border-gray-50">
                  <div className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                    <Icon className="w-5 h-5 text-white" strokeWidth={1.75} />
                  </div>
                  <h2 className="text-lg font-extrabold text-gray-900">{title}</h2>
                </div>
                <div className="px-8 py-6">{content}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Contact banner ───────────────────────────────────────────── */}
        <section className="py-16 bg-gray-50 border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-8 md:p-10 text-white">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-xl font-extrabold">Questions About Your Privacy?</h2>
                  </div>
                  <p className="text-blue-100 leading-relaxed">
                    If you have any questions about this privacy policy or how we handle your data,
                    please do not hesitate to get in touch with our team.
                  </p>
                </div>
                <div className="space-y-4">
                  {[
                    { Icon: Mail,  label: "Email",     value: "contact@kulana.net",  href: "mailto:contact@kulana.net" },
                    { Icon: Phone, label: "Ghana",     value: "+233 540 127 400",     href: "tel:+233540127400" },
                    { Icon: Phone, label: "Mauritius", value: "+230 46 32 519",       href: "tel:+23046325190" },
                    { Icon: MapPin,label: "Address",   value: "The Rhombus, Kanda, Accra, Ghana", href: "#" },
                  ].map(({ Icon: Ic, label, value, href }) => (
                    <div key={label} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Ic className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-blue-200 text-xs font-semibold uppercase tracking-wide">{label}</p>
                        <a href={href} className="text-white font-medium text-sm hover:text-blue-100 transition-colors">{value}</a>
                      </div>
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
