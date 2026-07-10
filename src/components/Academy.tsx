"use client";

import { GraduationCap, Users, Building2, Video, ExternalLink } from "lucide-react";

const deliveryModes = [
  {
    icon: Users,
    title: "Workshops",
    desc: "Hands-on in-person sessions combining expert presentations with collaborative discussion.",
  },
  {
    icon: GraduationCap,
    title: "Professional Classes",
    desc: "Instructor-guided learning for structured skill development and certification preparation.",
  },
  {
    icon: Building2,
    title: "Onsite",
    desc: "On-premise training conducted by certified trainers at your organisation's location.",
  },
  {
    icon: Video,
    title: "Virtual / Online",
    desc: "Remote learning via video conferencing with live or recorded content access for flexibility.",
  },
];

export default function Academy() {
  return (
    <section id="academy" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-sm font-medium text-blue-600 mb-5">
              <GraduationCap className="w-4 h-4" />
              Kulana Academy
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Grow your business with{" "}
              <span className="text-gradient">Kulana Academy</span>
            </h2>
          </div>
          <div>
            <p className="text-gray-500 leading-relaxed mb-6">
              Kulana Academy, partnering with Arcitura, delivers professional IT training
              programmes that assist businesses in upskilling employees through
              professionally-designed programs. Keep your workforce aligned with the
              latest advancements in technology.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.kulana.academy/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-md hover:shadow-blue-200"
              >
                Visit Kulana Academy
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Training typology */}
        <div className="bg-white rounded-2xl border border-gray-100 p-8 mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Training Delivery Options</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryModes.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-3">
                <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm mb-1">{title}</div>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom banner */}
        <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-white">
            <div className="font-bold text-xl mb-1">Corporate Training Packages</div>
            <div className="text-blue-100 text-sm">
              Custom programmes for teams of any size — onsite, remote, or hybrid.
            </div>
          </div>
          <a
            href="https://www.kulana.academy/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-colors shadow-md"
          >
            Explore Academy
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
