import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Cookie, BarChart2, Settings, ShieldCheck, ToggleRight, HelpCircle, Mail, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies Policy | Kulana IT Solutions",
  description:
    "Learn how Kulana IT Solutions uses cookies on its website and how you can manage your cookie preferences.",
};

const sections = [
  {
    Icon: Cookie,
    iconBg: "bg-amber-500",
    title: "What Are Cookies?",
    body: "A cookie is a small file placed on your computer's hard drive only with your permission. Once you agree, the file is added and the cookie helps analyse web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual, tailoring operations to your needs, likes, and dislikes.",
  },
  {
    Icon: BarChart2,
    iconBg: "bg-blue-600",
    title: "How We Use Cookies",
    body: "We use traffic log cookies to identify which pages are being used. This helps us analyse data about web page traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes, after which the data is removed from the system.",
  },
  {
    Icon: ShieldCheck,
    iconBg: "bg-emerald-600",
    title: "Your Privacy Is Protected",
    body: "A cookie in no way gives us access to your computer or any personal information about you, other than the data you choose to share with us. The information gathered helps us provide you with a better website experience by enabling us to monitor which pages you find useful and which you do not.",
  },
  {
    Icon: ToggleRight,
    iconBg: "bg-violet-600",
    title: "Your Choice",
    body: "You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer. Please be aware that declining cookies may prevent you from taking full advantage of certain features on this website.",
  },
];

const cookieTypes = [
  {
    name: "Essential Cookies",
    desc: "Strictly necessary for the website to function. They enable core features such as page navigation and access to secure areas. The website cannot function properly without these cookies.",
    required: true,
    color: "border-l-blue-500",
    tag: "Always Active",
    tagColor: "bg-blue-50 text-blue-700 border-blue-100",
  },
  {
    name: "Analytics Cookies",
    desc: "Help us understand how visitors interact with the website by collecting and reporting information anonymously. We use tools such as Google Analytics for this purpose.",
    required: false,
    color: "border-l-amber-500",
    tag: "Optional",
    tagColor: "bg-amber-50 text-amber-700 border-amber-100",
  },
  {
    name: "Preference Cookies",
    desc: "Enable the website to remember information that changes the way the site behaves or looks, such as your preferred language or the region you are in.",
    required: false,
    color: "border-l-violet-500",
    tag: "Optional",
    tagColor: "bg-violet-50 text-violet-700 border-violet-100",
  },
];

const browsers = [
  { name: "Google Chrome",  instruction: "Settings → Privacy and security → Cookies and other site data" },
  { name: "Mozilla Firefox", instruction: "Options → Privacy & Security → Cookies and Site Data" },
  { name: "Safari",          instruction: "Preferences → Privacy → Manage Website Data" },
  { name: "Microsoft Edge",  instruction: "Settings → Cookies and site permissions → Cookies and site data" },
];

export default function CookiesPolicyPage() {
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
                  <Cookie className="w-4 h-4" /> Legal &amp; Compliance
                </span>
                <h1 className="text-4xl lg:text-5xl font-extrabold mb-5 leading-tight">Cookies Policy</h1>
                <p className="text-blue-100 text-lg leading-relaxed max-w-xl">
                  We believe in transparency. This policy explains exactly what cookies we use,
                  why we use them, and how you can control them.
                </p>
              </div>
              {/* Big cookie icon */}
              <div className="flex-shrink-0 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center backdrop-blur-sm">
                  <Cookie className="w-20 h-20 text-amber-300" strokeWidth={1.25} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Key sections ─────────────────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6">
              {sections.map(({ Icon, iconBg, title, body }) => (
                <div key={title} className="group flex gap-5 p-7 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:border-blue-100 hover:shadow-md transition-all duration-300">
                  <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                    <Icon className="w-6 h-6 text-white" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                    <p className="text-gray-500 leading-relaxed text-sm">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Cookie types ─────────────────────────────────────────────── */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-3">Types of Cookies We Use</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                We keep our cookie usage minimal and purposeful. Here is a breakdown of the categories
                we may use on this site.
              </p>
            </div>
            <div className="space-y-4">
              {cookieTypes.map(({ name, desc, color, tag, tagColor }) => (
                <div key={name} className={`bg-white rounded-2xl border border-gray-100 border-l-4 ${color} shadow-sm p-6 flex flex-col sm:flex-row sm:items-start gap-4`}>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="font-bold text-gray-900">{name}</h3>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${tagColor}`}>
                        {tag}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Browser settings ─────────────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-violet-600 flex items-center justify-center">
                    <Settings className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-extrabold text-gray-900">Managing Your Cookies</h2>
                </div>
                <p className="text-gray-500 leading-relaxed mb-8">
                  You can control and manage cookies in your browser settings at any time. Keep in mind
                  that removing or blocking cookies may impact your experience on our website and limit
                  certain functionality.
                </p>
                <div className="space-y-3">
                  {browsers.map(({ name, instruction }) => (
                    <div key={name} className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50">
                      <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 shadow-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Settings className="w-4 h-4 text-gray-500" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{name}</p>
                        <p className="text-gray-500 text-xs leading-relaxed mt-0.5">{instruction}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ / Help */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                    <HelpCircle className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-extrabold text-gray-900">Questions?</h2>
                </div>
                <p className="text-gray-500 leading-relaxed mb-8">
                  If you have any questions about our use of cookies or this policy, our team is
                  happy to help. Reach us through any of the channels below.
                </p>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100 p-7 space-y-5">
                  {[
                    { Icon: Mail,  label: "Email",              value: "contact@kulana.net",   href: "mailto:contact@kulana.net" },
                    { Icon: Phone, label: "Ghana",              value: "+233 540 127 400",      href: "tel:+233540127400" },
                    { Icon: Phone, label: "Mauritius",          value: "+230 46 32 519",        href: "tel:+23046325190" },
                  ].map(({ Icon: Ic, label, value, href }) => (
                    <div key={label} className="flex items-center gap-4">
                      <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Ic className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{label}</p>
                        <a href={href} className="text-blue-700 font-semibold text-sm hover:text-blue-800 transition-colors">{value}</a>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Addresses */}
                <div className="mt-5 space-y-3">
                  {[
                    { flag: "🇬🇭", city: "Accra, Ghana", addr: "The Rhombus, HRJ5+J6Q, Kanda, Accra\nP.O. Box CT 1856, Cantonments Accra" },
                    { flag: "🇲🇺", city: "Ebene, Mauritius", addr: "Ground Floor Nexsky Building, Hotel Avenue\nCybercity Ebene, Mauritius" },
                  ].map(({ flag, city, addr }) => (
                    <div key={city} className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 bg-white">
                      <span className="text-xl leading-none mt-0.5">{flag}</span>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{city}</p>
                        <p className="text-gray-500 text-xs leading-relaxed whitespace-pre-line">{addr}</p>
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
