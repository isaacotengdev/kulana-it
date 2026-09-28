"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

const serviceGroups = [
  {
    label: "Core and Enterprise Systems",
    options: ["Core Banking", "ERP & CRM", "Infrastructure", "Cybersecurity"],
  },
  {
    label: "Integration and Digital Connectivity",
    options: ["Integration", "Enterprise Architecture", "AI-Native Product Engineering"],
  },
  {
    label: "Data and AI Intelligence",
    options: ["Data", "AI", "RPA"],
  },
];

const inputClass =
  "w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#00D4EE] focus:ring-1 focus:ring-[#00D4EE]/30 text-sm transition-all rounded-sm";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "", service: "", message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "homepage" }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed");
      }
      setSubmitted(true);
      setForm({ firstName: "", lastName: "", email: "", phone: "", service: "", message: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Label + rule */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 whitespace-nowrap">
            Get In Touch
          </span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left — heading + office info */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-16">
              Let&apos;s Talk About Your<br />Technology Needs
            </h2>

            <div className="space-y-10">
              {/* Ghana */}
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.15em] text-gray-900 mb-3">
                  Ghana Office
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  The Rhombus, HRJ5+J6Q,<br />Kanda, Accra
                </p>
                <p className="text-gray-500 text-sm mt-2">+233 540 127 400</p>
              </div>

              {/* Mauritius */}
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.15em] text-gray-900 mb-3">
                  Mauritius Office
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Ground Floor Nexsky Building,<br />Hotel Avenue, Cybercity Ebene
                </p>
                <p className="text-gray-500 text-sm mt-2">+230 46 32 519</p>
              </div>

              {/* Email */}
              <div>
                <p className="text-base font-bold text-gray-900">contact@kulana.net</p>
              </div>
            </div>
          </div>

          {/* Right — description + form */}
          <div>
            <p className="text-gray-500 text-base leading-relaxed mb-10">
              Tell us about your technology needs or challenges. Our team will get
              in touch to discuss how Kulana can support your business.
            </p>

            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-20">
                <div className="w-16 h-16 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center mb-5">
                  <CheckCircle className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Message sent!</h3>
                <p className="text-gray-500 max-w-sm">
                  Thank you for reaching out. Our team will contact you within 24 business hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ firstName: "", lastName: "", email: "", phone: "", service: "", message: "" }); }}
                  className="mt-6 px-6 py-2.5 border border-gray-200 text-gray-600 rounded-md hover:border-[#00D4EE] hover:text-[#00D4EE] transition-colors text-sm font-medium"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1 */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-gray-700 mb-1.5">
                      First Name <span className="text-gray-400">*</span>
                    </label>
                    <input
                      type="text" required
                      value={form.firstName}
                      onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-1.5">
                      Surname <span className="text-gray-400">*</span>
                    </label>
                    <input
                      type="text" required
                      value={form.lastName}
                      onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-gray-700 mb-1.5">
                      Email Address <span className="text-gray-400">*</span>
                    </label>
                    <input
                      type="email" required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label className="block text-sm text-gray-700 mb-1.5">
                    Service of Interest <span className="text-gray-400">*</span>
                  </label>
                  <select
                    required
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className={inputClass}
                  >
                    <option value=""></option>
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

                {/* Message */}
                <div>
                  <label className="block text-sm text-gray-700 mb-1.5">
                    Message <span className="text-gray-400">*</span>
                  </label>
                  <textarea
                    required rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-500 bg-red-50 border border-red-100 rounded px-4 py-3">{error}</p>
                )}

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#00D4EE] hover:bg-[#00BCDA] disabled:opacity-60 text-[#040d28] font-semibold rounded-md transition-all hover:shadow-lg hover:shadow-[#00D4EE]/30"
                  >
                    {loading ? "Sending…" : "Send Inquiry"}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
