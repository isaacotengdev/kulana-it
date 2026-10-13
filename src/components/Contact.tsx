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

const MF = "var(--font-manrope), sans-serif";

const inputClass =
  "w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-[#57D9D4] focus:ring-1 focus:ring-[#57D9D4]/30 transition-all rounded-sm";

const labelStyle: React.CSSProperties = {
  fontFamily: MF,
  fontWeight: 600,
  color: "#000000",
  fontSize: "clamp(13px, 1vw, 14px)",
};

const inputStyle: React.CSSProperties = {
  fontFamily: MF,
  fontWeight: 400,
  color: "#000000",
  fontSize: "13px",
};

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
    <section id="contact" className="py-9 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Label + rule */}
        <div className="mb-8">
          <span
            className="tracking-normal uppercase"
            style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "clamp(13px, 1vw, 14px)" }}
          >
            Get In Touch
          </span>
          <div className="w-full h-px mt-3" style={{ background: "#000000" }} />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Left — heading + office info */}
          <div>
            <h2
              className="leading-tight mb-8"
              style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(18px, 1.8vw, 26px)" }}
            >
              Let&apos;s Talk About Your<br />Technology Needs
            </h2>

            <div className="space-y-10 lg:mt-[4.25rem]">
              {/* Ghana */}
              <div>
                <p className="uppercase tracking-normal mb-3"
                  style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "clamp(13px, 1vw, 14px)" }}>
                  Ghana Office
                </p>
                <p style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1.2vw, 18px)", lineHeight: "1.4" }}>
                  The Rhombus, HRJ5+J6Q,<br />Kanda, Accra
                </p>
                <p className="mt-2" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1.2vw, 18px)", lineHeight: "1.4" }}>
                  +233 540 127 400
                </p>
              </div>

              {/* Mauritius */}
              <div>
                <p className="uppercase tracking-normal mb-3"
                  style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "clamp(13px, 1vw, 14px)" }}>
                  Mauritius Office
                </p>
                <p style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1.2vw, 18px)", lineHeight: "1.4" }}>
                  Ground Floor Nexsky Building,<br />Hotel Avenue, Cybercity Ebene
                </p>
                <p className="mt-2" style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1.2vw, 18px)", lineHeight: "1.4" }}>
                  +230 46 32 519
                </p>
              </div>

              {/* Email */}
              <div>
                <a
                  href="mailto:contact@kulana.net"
                  style={{ fontFamily: MF, fontWeight: 700, color: "#000000", fontSize: "clamp(13px, 1.2vw, 18px)" }}
                  className="hover:text-[#57D9D4] transition-colors"
                >
                  contact@kulana.net
                </a>
              </div>
            </div>
          </div>

          {/* Right — description + form */}
          <div>
            <p className="mb-8"
              style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1.2vw, 18px)", lineHeight: "1.4" }}>
              Tell us about your technology needs or challenges. Our team will get
              in touch to discuss how Kulana can support your business.
            </p>

            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center mb-5">
                  <CheckCircle className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: MF, color: "#000000" }}>Message sent!</h3>
                <p className="max-w-sm text-sm" style={{ fontFamily: MF, fontWeight: 400, color: "#000000" }}>
                  Thank you for reaching out. Our team will contact you within 24 business hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ firstName: "", lastName: "", email: "", phone: "", service: "", message: "" }); }}
                  className="mt-6 px-6 py-2.5 border border-gray-200 rounded-md transition-colors text-sm"
                  style={{ fontFamily: MF, fontWeight: 600, color: "#000000" }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Row 1 */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1.5" style={labelStyle}>
                      First Name <span className="text-gray-400">*</span>
                    </label>
                    <input
                      type="text" required
                      value={form.firstName}
                      onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className="block mb-1.5" style={labelStyle}>
                      Surname <span className="text-gray-400">*</span>
                    </label>
                    <input
                      type="text" required
                      value={form.lastName}
                      onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1.5" style={labelStyle}>
                      Email Address <span className="text-gray-400">*</span>
                    </label>
                    <input
                      type="email" required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className="block mb-1.5" style={labelStyle}>Phone Number</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label className="block mb-1.5" style={labelStyle}>
                    Service of Interest <span className="text-gray-400">*</span>
                  </label>
                  <select
                    required
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className={inputClass}
                    style={inputStyle}
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
                  <label className="block mb-1.5" style={labelStyle}>
                    Message <span className="text-gray-400">*</span>
                  </label>
                  <textarea
                    required rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClass} resize-none`}
                    style={inputStyle}
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-500 bg-red-50 border border-red-100 rounded px-4 py-3">{error}</p>
                )}

                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center gap-2 px-8 py-3.5 disabled:opacity-60 rounded-md transition-all hover:opacity-90"
                    style={{ fontFamily: MF, fontWeight: 600, background: "#57D9D4", color: "#040d28", fontSize: "13px" }}
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
