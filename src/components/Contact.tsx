"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const offices = [
  {
    city: "Accra, Ghana",
    address: "The Rhombus, Kanda, Accra",
    phone: "+233 540 127 400",
    flag: "🇬🇭",
  },
  {
    city: "Ebene, Mauritius",
    address: "Cybercity Ebene, Mauritius",
    phone: "+230 000 0000",
    flag: "🇲🇺",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder submit handler
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-sm font-medium text-blue-600 mb-4">
            Get In Touch
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5">
            Ready to{" "}
            <span className="text-gradient">transform</span> your business?
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Tell us about your project and we will get back to you within 24 hours
            with a tailored approach.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left — info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Office cards */}
            {offices.map((office) => (
              <div
                key={office.city}
                className="bg-slate-50 rounded-2xl p-6 border border-gray-100"
              >
                <div className="text-2xl mb-3">{office.flag}</div>
                <div className="font-bold text-gray-900 mb-1">{office.city}</div>
                <div className="flex items-start gap-2 text-sm text-gray-500 mb-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-400" />
                  {office.address}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Phone className="w-4 h-4 flex-shrink-0 text-blue-400" />
                  {office.phone}
                </div>
              </div>
            ))}

            {/* Email */}
            <div className="flex items-center gap-3 p-5 bg-blue-50 rounded-2xl border border-blue-100">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-0.5">Email us</div>
                <a
                  href="mailto:info@kulana.net"
                  className="text-blue-600 font-semibold text-sm hover:text-blue-700"
                >
                  info@kulana.net
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
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Message sent!
                </h3>
                <p className="text-gray-500 max-w-sm">
                  Thank you for reaching out. Our team will contact you within 24
                  business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 border border-gray-200 text-gray-600 rounded-xl hover:border-blue-300 hover:text-blue-600 transition-colors text-sm font-medium"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Mensah"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 text-sm transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Company
                    </label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="Your company name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 text-sm transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Service of Interest
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 text-sm transition-all bg-white text-gray-700"
                    >
                      <option value="">Select a service</option>
                      <option>Core Banking Solutions</option>
                      <option>Data Center &amp; SOC</option>
                      <option>ERP &amp; CRM Solutions</option>
                      <option>Project Management Consulting</option>
                      <option>Predictive Analytics</option>
                      <option>Digital Integrations &amp; API</option>
                      <option>Academy Training</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your project, challenges, or requirements..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 text-sm transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-blue-200 hover:-translate-y-0.5"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
