"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroCanvas from "@/components/HeroCanvas";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const offices = [
  {
    city: "Accra, Ghana",
    flag: "🇬🇭",
    address: "The Rhombus, HRJ5+J6Q, Kanda, Accra",
    poBox: "P.O. Box CT 1856, Cantonments Accra, Ghana",
    phone: "+233 540 127 400",
  },
  {
    city: "Ebene, Mauritius",
    flag: "🇲🇺",
    address: "Ground Floor Nexsky Building, Hotel Avenue",
    poBox: "Cybercity Ebene, Mauritius",
    phone: "+230 46 32 519",
  },
];

const services = [
  "Core Banking",
  "Data Center & Security Operations Centre",
  "ERP and CRM",
  "Digital Integrations & API Management",
  "Project Management Consulting",
  "Predictive Analysis",
  "AI & Cloud AI",
  "Digital Transformation",
  "Next-Gen Data Science",
  "Cloud Computing",
  "Kulana Academy",
  "Other",
];

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", service: "", message: "" });

  return (
    <>
      <Navbar />
      <main className="pt-20">

        {/* Hero */}
        <section className="gradient-hero relative overflow-hidden py-28 text-white">
          <HeroCanvas variant="about" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We are here to make your business grow. Let us show you how the right technology
              can help your organisation overcome its challenges.
            </p>
          </div>
        </section>

        {/* Contact section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12">

              {/* Left — offices */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Get in touch</h2>
                  <p className="text-gray-500 leading-relaxed">
                    With our expertise, we would love to show you how your company can overcome
                    challenges with the right technology.
                  </p>
                </div>

                {offices.map((o) => (
                  <div key={o.city} className="bg-slate-50 rounded-2xl p-6 border border-gray-100">
                    <div className="text-2xl mb-3">{o.flag}</div>
                    <div className="font-bold text-gray-900 mb-2">{o.city}</div>
                    <div className="flex items-start gap-2 text-sm text-gray-500 mb-1">
                      <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-400" />
                      <div>
                        <div>{o.address}</div>
                        <div>{o.poBox}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                      <Phone className="w-4 h-4 flex-shrink-0 text-blue-400" />
                      <a href={`tel:${o.phone.replace(/\s/g, "")}`} className="hover:text-blue-600 transition-colors">{o.phone}</a>
                    </div>
                  </div>
                ))}

                <div className="flex items-center gap-3 p-5 bg-blue-50 rounded-2xl border border-blue-100">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">Email us</div>
                    <a href="mailto:contact@kulana.net" className="text-blue-600 font-semibold text-sm hover:text-blue-700">
                      contact@kulana.net
                    </a>
                  </div>
                </div>
              </div>

              {/* Right — form */}
              <div className="lg:col-span-3">
                {submitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-20">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-5">
                      <CheckCircle className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Message sent!</h3>
                    <p className="text-gray-500 max-w-sm">
                      Thank you for reaching out. Our team will contact you within 24 business hours.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ firstName: "", lastName: "", email: "", phone: "", service: "", message: "" }); }}
                      className="mt-6 px-6 py-2.5 border border-gray-200 text-gray-600 rounded-xl hover:border-blue-300 hover:text-blue-600 transition-colors text-sm font-medium"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={async (e) => {
                    e.preventDefault(); setLoading(true); setError("");
                    try {
                      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, source: "contact-us" }) });
                      if (!res.ok) throw new Error();
                      setSubmitted(true);
                      setForm({ firstName: "", lastName: "", email: "", phone: "", service: "", message: "" });
                    } catch { setError("Something went wrong. Please try again or email us directly."); }
                    finally { setLoading(false); }
                  }} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">First Name <span className="text-red-400">*</span></label>
                        <input type="text" required value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} placeholder="John"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 text-sm transition-all" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Last Name <span className="text-red-400">*</span></label>
                        <input type="text" required value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} placeholder="Mensah"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 text-sm transition-all" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address <span className="text-red-400">*</span></label>
                        <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="john@company.com"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 text-sm transition-all" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                        <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+233 500 000 000"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 text-sm transition-all" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Service of Inquiry <span className="text-red-400">*</span></label>
                      <select required value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 text-sm transition-all bg-white text-gray-700">
                        <option value="">Select a service…</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Message <span className="text-red-400">*</span></label>
                      <textarea required rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your project or requirements..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 text-sm transition-all resize-none" />
                    </div>
                    {error && <p className="text-sm text-red-500 bg-red-50 border border-red-100 rounded-xl px-4 py-3">{error}</p>}
                    <button type="submit" disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-blue-200 hover:-translate-y-0.5">
                      {loading ? "Sending…" : "Send Message"} <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
