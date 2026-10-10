"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const LOGO_FILTER = "grayscale(100%) brightness(0) invert(0.65)";

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

const inputClass =
  "w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-[#57D9D4] focus:ring-1 focus:ring-[#57D9D4]/30 text-sm transition-all rounded-sm";

const inputStyle: React.CSSProperties = {
  fontFamily: MF,
  fontWeight: 600,
  color: "#000000",
  fontSize: "0.875rem",
};

const labelStyle: React.CSSProperties = {
  fontFamily: MF,
  fontWeight: 600,
  color: "#000000",
  fontSize: "0.8125rem",
};

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
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
  };

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section id="contact-form" className="py-24 bg-white">
          <div className="max-w-8xl mx-auto px-6 sm:px-16 lg:px-36">

            {/* Label + rule */}
            <div className="mb-12">
              <span
                className="text-xs tracking-[0.2em] uppercase"
                style={{ fontFamily: MF, fontWeight: 600, color: "#000000" }}
              >
                Get In Touch
              </span>
              <div className="w-full h-px mt-3" style={{ background: "#000000" }} />
            </div>

            <div className="grid lg:grid-cols-2 gap-16">

              {/* Left — heading + offices */}
              <div>
                <h1
                  className="text-3xl lg:text-5xl leading-tight mb-8 lg:mb-16"
                  style={{ fontFamily: MF, fontWeight: 400, color: "#000000" }}
                >
                  Let&apos;s Talk About Your<br />Technology Needs
                </h1>

                <div className="space-y-10">
                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] mb-3"
                      style={{ fontFamily: MF, fontWeight: 700, color: "#000000" }}>
                      Ghana Office
                    </p>
                    <p className="text-sm leading-relaxed"
                      style={{ fontFamily: MF, fontWeight: 400, color: "#000000" }}>
                      The Rhombus, HRJ5+J6Q,<br />Kanda, Accra
                    </p>
                    <p className="text-sm mt-2"
                      style={{ fontFamily: MF, fontWeight: 400, color: "#000000" }}>
                      +233 540 127 400
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] mb-3"
                      style={{ fontFamily: MF, fontWeight: 700, color: "#000000" }}>
                      Mauritius Office
                    </p>
                    <p className="text-sm leading-relaxed"
                      style={{ fontFamily: MF, fontWeight: 400, color: "#000000" }}>
                      Ground Floor Nexsky Building,<br />Hotel Avenue, Cybercity Ebene
                    </p>
                    <p className="text-sm mt-2"
                      style={{ fontFamily: MF, fontWeight: 400, color: "#000000" }}>
                      +230 46 32 519
                    </p>
                  </div>

                  <div>
                    <p className="text-sm"
                      style={{ fontFamily: MF, fontWeight: 700, color: "#000000" }}>
                      contact@kulana.net
                    </p>
                  </div>
                </div>
              </div>

              {/* Right — description + form */}
              <div>
                <p className="text-sm leading-relaxed mb-8"
                  style={{ fontFamily: MF, fontWeight: 400, color: "#000000" }}>
                  Tell us about your technology needs or challenges. Our team will get
                  in touch to discuss how Kulana can support your business.
                </p>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-20">
                    <div className="w-16 h-16 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center mb-5">
                      <CheckCircle className="w-8 h-8 text-emerald-500" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: MF, color: "#000000" }}>
                      Message sent!
                    </h3>
                    <p className="max-w-sm text-sm" style={{ fontFamily: MF, fontWeight: 400, color: "#000000" }}>
                      Thank you for reaching out. Our team will contact you within 24 business hours.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ firstName: "", lastName: "", email: "", phone: "", service: "", message: "" }); }}
                      className="mt-6 px-6 py-2.5 border border-gray-200 rounded-sm transition-colors text-sm"
                      style={{ fontFamily: MF, fontWeight: 600, color: "#000000" }}
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block mb-1.5" style={labelStyle}>
                          First Name <span className="text-gray-400">*</span>
                        </label>
                        <input type="text" required value={form.firstName}
                          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                          className={inputClass} style={inputStyle} />
                      </div>
                      <div>
                        <label className="block mb-1.5" style={labelStyle}>
                          Surname <span className="text-gray-400">*</span>
                        </label>
                        <input type="text" required value={form.lastName}
                          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                          className={inputClass} style={inputStyle} />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block mb-1.5" style={labelStyle}>
                          Email Address <span className="text-gray-400">*</span>
                        </label>
                        <input type="email" required value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className={inputClass} style={inputStyle} />
                      </div>
                      <div>
                        <label className="block mb-1.5" style={labelStyle}>Phone Number</label>
                        <input type="tel" value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className={inputClass} style={inputStyle} />
                      </div>
                    </div>

                    <div>
                      <label className="block mb-1.5" style={labelStyle}>
                        Service of Interest <span className="text-gray-400">*</span>
                      </label>
                      <select required value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className={inputClass} style={inputStyle}>
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

                    <div>
                      <label className="block mb-1.5" style={labelStyle}>
                        Message <span className="text-gray-400">*</span>
                      </label>
                      <textarea required rows={5} value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className={`${inputClass} resize-none`} style={inputStyle} />
                    </div>

                    {error && (
                      <p className="text-sm text-red-500 bg-red-50 border border-red-100 rounded px-4 py-3">
                        {error}
                      </p>
                    )}

                    <div className="flex justify-end pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="inline-flex items-center gap-2 px-8 py-3.5 disabled:opacity-60 rounded-sm transition-all hover:opacity-90"
                        style={{ fontFamily: MF, fontWeight: 600, background: "#57D9D4", color: "#200044", fontSize: "0.875rem" }}
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

        {/* Ready to work with us CTA */}
        <section style={{ background: "#EBF8F8" }} className="py-16 lg:py-20">
          <div className="max-w-8xl mx-auto px-6 sm:px-16 lg:px-36">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <h2
                className="text-3xl lg:text-4xl font-bold leading-tight"
                style={{ fontFamily: MF, color: "#200044" }}
              >
                Ready to work<br />with us?
              </h2>
              <div>
                <p className="text-base leading-relaxed mb-8"
                  style={{ fontFamily: MF, fontWeight: 400, color: "#200044" }}>
                  Get in touch to find out how Kulana can help your organisation thrive in the digital age.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="#contact-form"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-sm transition-all hover:opacity-90"
                    style={{ fontFamily: MF, fontWeight: 600, background: "#57D9D4", color: "#200044" }}
                  >
                    Let&apos;s Talk →
                  </Link>
                  <Link
                    href="/#services"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-sm border transition-all hover:bg-white/50"
                    style={{ fontFamily: MF, fontWeight: 600, color: "#200044", borderColor: "#200044" }}
                  >
                    Explore Our Services →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Partners */}
        <section style={{ background: "#ffffff" }}>
          <div className="max-w-8xl mx-auto px-6 sm:px-16 lg:px-36 py-20">

            <div className="mb-10">
              <span className="text-xs tracking-[0.2em] uppercase"
                style={{ fontFamily: MF, fontWeight: 600, color: "#000000" }}>
                Technology Partners
              </span>
              <div className="w-full h-px mt-3" style={{ background: "#000000" }} />
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16 items-start">
              <h2 className="text-4xl lg:text-5xl leading-tight"
                style={{ fontFamily: MF, fontWeight: 400, color: "#000000" }}>
                Powered by World-Class<br />Platforms
              </h2>
              <p className="text-lg leading-relaxed lg:pt-2"
                style={{ fontFamily: MF, fontWeight: 400, color: "#000000" }}>
                We hold certified partnerships with leading global technology
                vendors, giving you access to best-in-class solutions backed
                by proven technologies.
              </p>
            </div>

            <div className="flex items-center justify-between flex-nowrap">
              <Image src="/images/Links_homepage/DELL_logo_384x75px.svg" alt="Dell" width={150} height={30}
                className="object-contain h-11 w-auto" style={{ filter: LOGO_FILTER }} unoptimized />
              <Image src="/images/Links_homepage/HubSpot_logo_384x75px.svg" alt="HubSpot" width={170} height={30}
                className="object-contain h-11 w-auto" style={{ filter: LOGO_FILTER }} unoptimized />
              <Image src="/images/Links_homepage/Microsoft_logo_384x75px.svg" alt="Microsoft" width={190} height={30}
                className="object-contain h-11 w-auto" style={{ filter: LOGO_FILTER }} unoptimized />
              <Image src="/images/Links_homepage/Temenos_logo_384x75px.svg" alt="Temenos" width={190} height={30}
                className="object-contain h-11 w-auto" style={{ filter: LOGO_FILTER }} unoptimized />
              <Image src="/images/Links_homepage/WSO2_logo_384x75px.svg" alt="WSO2" width={150} height={30}
                className="object-contain h-11 w-auto" style={{ filter: LOGO_FILTER }} unoptimized />
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
