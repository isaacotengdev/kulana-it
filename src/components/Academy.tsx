"use client";

import Link from "next/link";
import { ArrowRight, GraduationCap, Monitor, Users, Building2, Video } from "lucide-react";

const courses = [
  {
    title: "AI & Cloud AI",
    href: "/ai-cloud-ai",
    type: "Professional Program",
    description:
      "Learn how to integrate AI and cloud technologies into your business processes to improve efficiency, reduce costs, and stay ahead in a competitive market.",
    color: "bg-blue-600",
  },
  {
    title: "Digital Transformation",
    href: "/digital-transformation",
    type: "Professional Program",
    description:
      "Support your organisation's growth by developing the operational skills needed to implement effective digital change across teams and systems.",
    color: "bg-cyan-600",
  },
  {
    title: "Next-Gen Data Science",
    href: "/next-gen-data-science",
    type: "Professional Program",
    description:
      "Discover how data can drive smarter business decisions with practical training designed to help your team turn information into strategic insight.",
    color: "bg-violet-600",
  },
  {
    title: "Cloud Computing",
    href: "/cloud-computing",
    type: "Professional Program",
    description:
      "Understand how cloud solutions can enhance business scalability, resilience, and security through structured learning and certification-backed expertise.",
    color: "bg-emerald-600",
  },
];

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
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-md hover:shadow-blue-200"
            >
              Request a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Course cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {courses.map((course) => (
            <Link
              key={course.title}
              href={course.href}
              className="group bg-white rounded-2xl border border-gray-100 overflow-hidden card-hover shadow-sm hover:shadow-lg transition-all"
            >
              <div className={`h-1.5 ${course.color}`} />
              <div className="p-6">
                <div className={`w-11 h-11 rounded-xl ${course.color} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
                  <Monitor className="w-5 h-5 text-white" />
                </div>
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">{course.type}</div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {course.description}
                </p>
                <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-blue-600">
                  Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
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
          <Link
            href="/#contact"
            className="flex-shrink-0 px-6 py-3 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-colors shadow-md"
          >
            Get a Custom Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
