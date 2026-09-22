"use client";

import { CheckCircle2 } from "lucide-react";

const strengths = [
  "Deep expertise across banking, finance, and enterprise sectors",
  "Certified partnerships with world-class technology vendors",
  "Agile delivery teams with cross-functional specialisations",
  "ISO-certified processes ensuring quality and compliance",
  "Presence across Ghana and Mauritius serving African markets",
  "Ongoing support, training, and knowledge transfer",
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-[#2d0070] via-[#080d28] to-[#0a1535] rounded-3xl p-10 text-white shadow-2xl overflow-hidden border border-white/10">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                  backgroundSize: "30px 30px",
                }}
              />
              <div className="relative">
                <div className="text-sm font-semibold text-[#57EBBB] uppercase tracking-widest mb-4">
                  Who We Are
                </div>
                <h3 className="text-3xl font-extrabold mb-4 leading-tight">
                  Your Strategic IT Partner in Africa
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Kulana IT is an end-to-end technology solutions and consultancy
                  firm headquartered in Accra, Ghana with operations in Mauritius.
                  We bridge the gap between business ambition and technology
                  capability for organisations across the African continent.
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3 px-2">
              <span className="w-6 h-px bg-[#03B2EE]/50" />
              <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#03B2EE]/80">
                Technology Value Creators
              </p>
              <span className="flex-1 h-px bg-[#03B2EE]/20" />
            </div>
          </div>

          {/* Right — text */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-[#03B2EE] mb-5">
              About Kulana IT
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
              Driving digital{" "}
              <span className="text-gradient">transformation</span>{" "}
              across Africa
            </h2>
            <p className="text-white/60 leading-relaxed mb-8">
              Founded with a mission to make enterprise-grade technology accessible
              to African businesses, we combine global best practices with deep local
              knowledge. Our multidisciplinary team of engineers, consultants, and
              trainers deliver solutions that are practical, scalable, and tailored
              to the realities of operating in African markets.
            </p>

            <div className="space-y-3 mb-10">
              {strengths.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#03B2EE] flex-shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-7 py-3.5 bg-[#00D4EE] hover:bg-[#00BCDA] text-[#040d28] font-semibold rounded-md transition-all shadow-lg hover:shadow-[#00D4EE]/40 hover:-translate-y-0.5"
              >
                Work With Us
              </a>
              <a
                href="#services"
                className="px-7 py-3.5 border border-white/30 text-white font-semibold rounded-md hover:bg-white/10 hover:border-white/50 transition-all"
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
