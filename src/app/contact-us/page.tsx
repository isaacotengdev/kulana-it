"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { CheckCircle } from "lucide-react";

const MF = "var(--font-manrope), sans-serif";

const serviceGroups = [
  {
    label: "Core & Enterprise Systems",
    options: ["Core Banking", "ERP & CRM", "Infrastructure", "Cybersecurity"],
  },
  {
    label: "Integration & Digital Connectivity",
    options: ["Integration", "Enterprise Architecture", "AI-Native Product Engineering"],
  },
  {
    label: "Data & AI Intelligence",
    options: ["Data", "AI", "RPA"],
  },
];

const inputCls = "w-full px-3 py-2.5 border border-gray-300 focus:outline-none focus:border-[#57D9D4] focus:ring-1 focus:ring-[#57D9D4] text-sm text-gray-900 transition-all bg-white";

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", service: "", message: "" });

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

            <p
              className="text-xs tracking-[0.22em] uppercase mb-10"
              style={{ fontFamily: MF, fontWeight: 700, color: "#57D9D4" }}
            >
              Get In Touch
            </p>

            <div className="grid lg:grid-cols-5 gap-16">

              {/* Left — heading + offices */}
              <div className="lg:col-span-2">
                <h1
                  className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-14"
                  style={{ fontFamily: MF }}
                >
                  Let&apos;s Talk About Your Technology Needs
                </h1>

                <div className="space-y-10">
                  <div>
                    <p
                      className="text-xs tracking-widest uppercase font-bold text-gray-900 mb-3"
                      style={{ fontFamily: MF }}
                    >
                      Ghana Office
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: MF }}>
                      The Rhombus, HRJ5+J6Q,<br />
                      Kanda, Accra
                    </p>
                    <p className="text-gray-600 text-sm mt-2" style={{ fontFamily: MF }}>
                      +233 540 127 400
                    </p>
                  </div>

                  <div>
                    <p
                      className="text-xs tracking-widest uppercase font-bold text-gray-900 mb-3"
                      style={{ fontFamily: MF }}
                    >
                      Mauritius Office
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: MF }}>
                      Ground Floor Nexsky Building,<br />
                      Hotel Avenue, Cybercity Ebene
                    </p>
                    <p className="text-gray-600 text-sm mt-2" style={{ fontFamily: MF }}>
                      +230 46 32 519
                    </p>
                  </div>

                  <div>
                    <p className="font-bold text-gray-900" style={{ fontFamily: MF }}>
                      contact@kulana.net
                    </p>
                  </div>
                </div>
              </div>

              {/* Right — description + form */}
              <div className="lg:col-span-3">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-20">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-5">
                      <CheckCircle className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: MF }}>
                      Message sent!
                    </h3>
                    <p className="text-gray-500 max-w-sm" style={{ fontFamily: MF }}>
                      Thank you for reaching out. Our team will contact you within 24 business hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ firstName: "", lastName: "", email: "", phone: "", service: "", message: "" });
                      }}
                      className="mt-6 px-6 py-2.5 border border-gray-200 text-gray-600 hover:border-[#57D9D4] transition-colors text-sm font-medium"
                      style={{ fontFamily: MF }}
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <>
                    <p className="text-gray-600 leading-relaxed mb-8" style={{ fontFamily: MF }}>
                      Tell us about your technology needs or challenges. Our team will get in touch
                      to discuss how Kulana can support your business.
                    </p>

                    <form
                      onSubmit={async (e) => {
                        e.preventDefault();
                        setLoading(true);
                        setError("");
                        try {
                          const res = await fetch("/api/contact", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ ...form, source: "contact-us" }),
                          });
                          if (!res.ok) {
                            const data = await res.json().catch(() => ({}));
                            throw new Error(data.error || "Submission failed");
                          }
                          setSubmitted(true);
                          setForm({ firstName: "", lastName: "", email: "", phone: "", service: "", message: "" });
                        } catch (err) {
                          setError(err instanceof Error ? err.message : "Something went wrong. Please try again or email us directly.");
                        } finally {
                          setLoading(false);
                        }
                      }}
                      className="space-y-5"
                    >
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-gray-800 mb-1.5" style={{ fontFamily: MF }}>
                            First Name <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={form.firstName}
                            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                            className={inputCls}
                            style={{ fontFamily: MF }}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-800 mb-1.5" style={{ fontFamily: MF }}>
                            Surname <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={form.lastName}
                            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                            className={inputCls}
                            style={{ fontFamily: MF }}
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-gray-800 mb-1.5" style={{ fontFamily: MF }}>
                            Email Address <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="email"
                            required
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className={inputCls}
                            style={{ fontFamily: MF }}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-800 mb-1.5" style={{ fontFamily: MF }}>
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            className={inputCls}
                            style={{ fontFamily: MF }}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-800 mb-1.5" style={{ fontFamily: MF }}>
                          Service of Interest <span className="text-red-400">*</span>
                        </label>
                        <select
                          required
                          value={form.service}
                          onChange={(e) => setForm({ ...form, service: e.target.value })}
                          className={inputCls}
                          style={{ fontFamily: MF }}
                        >
                          <option value="">Select a service…</option>
                          {serviceGroups.map((group) => (
                            <optgroup key={group.label} label={group.label}>
                              {group.options.map((opt) => (
                                <option key={opt} value={opt}>{opt}</option>
                              ))}
                            </optgroup>
                          ))}
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-800 mb-1.5" style={{ fontFamily: MF }}>
                          Message <span className="text-red-400">*</span>
                        </label>
                        <textarea
                          required
                          rows={6}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className={`${inputCls} resize-none`}
                          style={{ fontFamily: MF }}
                        />
                      </div>

                      {error && (
                        <p className="text-sm text-red-500 bg-red-50 border border-red-100 px-4 py-3" style={{ fontFamily: MF }}>
                          {error}
                        </p>
                      )}

                      <div className="flex justify-end">
                        <button
                          type="submit"
                          disabled={loading}
                          className="inline-flex items-center gap-2 px-8 py-3 text-sm font-semibold disabled:opacity-60 disabled:cursor-not-allowed transition-all hover:opacity-90"
                          style={{ fontFamily: MF, fontWeight: 600, background: "#57D9D4", color: "#040d28" }}
                        >
                          {loading ? "Sending…" : "Send Inquiry →"}
                        </button>
                      </div>
                    </form>
                  </>
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
