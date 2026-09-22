"use client";

import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Purple glow — left */}
      <div className="absolute -left-40 top-1/4 w-[700px] h-[700px] bg-purple-900/60 rounded-full blur-3xl pointer-events-none" />
      {/* Cyan glow — right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left content */}
          <div>
            <p className="text-sm font-bold tracking-[0.18em] uppercase text-[#03B2EE] mb-6">
              Trusted IT Partner&nbsp;&nbsp;|&nbsp;&nbsp;Ghana and Mauritius
            </p>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight mb-6 uppercase">
              Technology
              <br />
              Experts For
              <br />
              Your Business.
            </h1>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#00D4EE] hover:bg-[#00BCDA] text-[#040d28] font-semibold rounded-md transition-all shadow-lg hover:shadow-[#00D4EE]/40 hover:-translate-y-0.5"
              >
                Request a Consultation
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-white/40 text-white font-semibold rounded-md hover:bg-white/10 hover:border-white/60 transition-all"
              >
                Explore Services
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Motto */}
            <div className="mt-14 pt-8 border-t border-white/20 flex items-center gap-3">
              <span className="w-8 h-px bg-[#03B2EE]/60" />
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#03B2EE]/80">
                Technology Value Creators
              </p>
              <span className="w-8 h-px bg-[#03B2EE]/60" />
            </div>
          </div>

          {/* Right — glowing orb */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              {/* Outer radial glow */}
              <div
                className="absolute inset-0 rounded-full blur-2xl"
                style={{ background: "radial-gradient(circle, rgba(3,178,238,0.25) 0%, rgba(3,178,238,0.05) 60%, transparent 80%)" }}
              />
              {/* Orb */}
              <div
                className="relative w-[480px] h-[480px] rounded-full"
                style={{
                  border: "1px solid rgba(3,178,238,0.25)",
                  boxShadow: "0 0 80px 20px rgba(3,178,238,0.12), inset 0 0 80px rgba(3,178,238,0.05)",
                  background: "radial-gradient(circle at 40% 35%, rgba(45,0,112,0.6) 0%, rgba(8,13,40,0.85) 60%, rgba(10,21,53,0.95) 100%)",
                }}
              >
                {/* Inner glow rings */}
                <div className="absolute inset-8 rounded-full border border-[#03B2EE]/10" />
                <div className="absolute inset-20 rounded-full border border-[#03B2EE]/15" />
                <div className="absolute inset-32 rounded-full border border-[#03B2EE]/20" />
                {/* Centre pulse */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#03B2EE]/80 blur-sm" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#080d28] to-transparent pointer-events-none" />
    </section>
  );
}
