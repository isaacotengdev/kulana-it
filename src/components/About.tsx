"use client";

import { CheckCircle2, MapPin, Award, Users } from "lucide-react";

const strengths = [
  "Deep expertise across banking, finance, and enterprise sectors",
  "Certified partnerships with world-class technology vendors",
  "Agile delivery teams with cross-functional specialisations",
  "ISO-certified processes ensuring quality and compliance",
  "Presence across Ghana and Mauritius serving African markets",
  "Ongoing support, training, and knowledge transfer",
];

const stats = [
  { icon: Users, value: "10+", label: "Enterprise Clients" },
  { icon: Award, value: "ISO", label: "Certified Quality" },
  { icon: MapPin, value: "2", label: "African Offices" },
  { icon: CheckCircle2, value: "10+", label: "Projects Delivered" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — visual */}
          <div className="relative">
            {/* Main card */}
            <div className="relative bg-gradient-to-br from-blue-600 to-blue-900 rounded-3xl p-10 text-white shadow-2xl overflow-hidden">
              {/* Pattern overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                  backgroundSize: "30px 30px",
                }}
              />
              <div className="relative">
                <div className="text-sm font-semibold text-cyan-300 uppercase tracking-widest mb-4">
                  Who We Are
                </div>
                <h3 className="text-3xl font-extrabold mb-4 leading-tight">
                  Your Strategic IT Partner in Africa
                </h3>
                <p className="text-blue-100/80 leading-relaxed">
                  Kulana IT is an end-to-end technology solutions and consultancy
                  firm headquartered in Accra, Ghana with operations in Mauritius.
                  We bridge the gap between business ambition and technology
                  capability for organisations across the African continent.
                </p>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              {stats.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-center gap-4 card-hover"
                >
                  <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-gray-900">
                      {value}
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — text */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-sm font-medium text-blue-600 mb-5">
              About Kulana IT
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Driving digital{" "}
              <span className="text-gradient">transformation</span>{" "}
              across Africa
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Founded with a mission to make enterprise-grade technology accessible
              to African businesses, we combine global best practices with deep local
              knowledge. Our multidisciplinary team of engineers, consultants, and
              trainers deliver solutions that are practical, scalable, and tailored
              to the realities of operating in African markets.
            </p>

            <div className="space-y-3 mb-10">
              {strengths.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-7 py-3.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200"
              >
                Work With Us
              </a>
              <a
                href="#services"
                className="px-7 py-3.5 border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-blue-300 hover:text-blue-600 transition-all"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
