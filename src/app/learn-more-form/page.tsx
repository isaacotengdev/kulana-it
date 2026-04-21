"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroCanvas from "@/components/HeroCanvas";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

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

export default function LearnMoreFormPage() {
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
          <HeroCanvas variant="academy" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">Learn More</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Getting started is easy. Fill out the form below and a Kulana adviser will
              reach out to discuss the right solution for you.
            </p>
          </div>
        </section>

        {/* Form */}
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-20">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-5">
                  <CheckCircle className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Enquiry received!</h3>
                <p className="text-gray-500 max-w-sm">
                  Thank you for your interest. A Kulana adviser will contact you within
                  24 business hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ firstName: "", lastName: "", email: "", phone: "", service: "", message: "" }); }}
                  className="mt-6 px-6 py-2.5 border border-gray-200 text-gray-600 rounded-xl hover:border-blue-300 hover:text-blue-600 transition-colors text-sm font-medium"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={async (e) => {
                e.preventDefault(); setLoading(true); setError("");
                try {
                  const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, source: "learn-more" }) });
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
                    {services.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Message <span className="text-red-400">*</span></label>
                  <textarea required rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your project or what you'd like to learn more about..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 text-sm transition-all resize-none" />
                </div>
                {error && <p className="text-sm text-red-500 bg-red-50 border border-red-100 rounded-xl px-4 py-3">{error}</p>}
                <button type="submit" disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-blue-200 hover:-translate-y-0.5">
                  {loading ? "Submitting…" : "Submit Enquiry"} <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
