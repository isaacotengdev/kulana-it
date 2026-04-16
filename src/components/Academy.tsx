"use client";

import { Cloud, Shield, BarChart2, Layers, ArrowRight, GraduationCap } from "lucide-react";

const courses = [
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description:
      "AWS, Azure, and Google Cloud fundamentals through to advanced architecture and DevOps practices.",
    level: "Beginner → Advanced",
    duration: "4–8 weeks",
    color: "bg-blue-500",
    light: "bg-blue-50 text-blue-700",
  },
  {
    icon: Shield,
    title: "Cybersecurity Training",
    description:
      "Ethical hacking, SOC operations, incident response, and security frameworks including ISO 27001.",
    level: "Intermediate",
    duration: "6 weeks",
    color: "bg-red-500",
    light: "bg-red-50 text-red-700",
  },
  {
    icon: BarChart2,
    title: "Data & Analytics",
    description:
      "Business intelligence, Power BI, data engineering, and machine learning fundamentals for enterprise teams.",
    level: "Beginner → Intermediate",
    duration: "4–6 weeks",
    color: "bg-emerald-500",
    light: "bg-emerald-50 text-emerald-700",
  },
  {
    icon: Layers,
    title: "Enterprise Software",
    description:
      "Hands-on training for Dynamics 365, HubSpot, Temenos, and WSO2 integration platforms.",
    level: "Intermediate",
    duration: "3–5 weeks",
    color: "bg-violet-500",
    light: "bg-violet-50 text-violet-700",
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
              Upskill your team with{" "}
              <span className="text-gradient">expert-led training</span>
            </h2>
          </div>
          <div>
            <p className="text-gray-500 leading-relaxed mb-6">
              Our Academy provides structured, hands-on technology training
              programmes designed for professionals and enterprises. We combine
              theoretical foundations with real-world practicals delivered by
              certified industry practitioners.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-md hover:shadow-blue-200"
            >
              Enquire About Training
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Course cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => {
            const Icon = course.icon;
            return (
              <div
                key={course.title}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden card-hover shadow-sm"
              >
                <div className={`h-1.5 ${course.color}`} />
                <div className="p-6">
                  <div
                    className={`w-11 h-11 rounded-xl ${course.color} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">
                    {course.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">Level</span>
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${course.light}`}>
                        {course.level}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">Duration</span>
                      <span className="text-xs font-medium text-gray-700">{course.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom banner */}
        <div className="mt-10 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-white">
            <div className="font-bold text-xl mb-1">Corporate Training Packages</div>
            <div className="text-blue-100 text-sm">
              Custom programmes for teams of any size — onsite, remote, or hybrid.
            </div>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 px-6 py-3 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-colors shadow-md"
          >
            Get a Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
}
