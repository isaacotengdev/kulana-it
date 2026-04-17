import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Hammer, ArrowRight, Landmark, Plug, LayoutGrid } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Kulana IT Solutions",
  description: "Kulana IT Solutions project portfolio — enterprise implementations across core banking, middleware, and ERP.",
};

const projects = [
  {
    name: "DBG Middleware Project",
    href: "/projects/dbg-middleware",
    Icon: Plug,
    color: "from-cyan-500 to-blue-600",
    iconBg: "bg-cyan-600",
    tag: "Middleware",
    tagColor: "bg-cyan-50 text-cyan-700 border-cyan-100",
    client: "DBG",
  },
  {
    name: "DBG Core Banking Project",
    href: "/projects/dbg-core-banking",
    Icon: Landmark,
    color: "from-blue-500 to-blue-700",
    iconBg: "bg-blue-600",
    tag: "Core Banking",
    tagColor: "bg-blue-50 text-blue-700 border-blue-100",
    client: "DBG",
  },
  {
    name: "CBG Middleware Project",
    href: "/projects/cbg-middleware",
    Icon: Plug,
    color: "from-violet-500 to-violet-700",
    iconBg: "bg-violet-600",
    tag: "Middleware",
    tagColor: "bg-violet-50 text-violet-700 border-violet-100",
    client: "CBG",
  },
  {
    name: "DBG Dynamics 365 Project",
    href: "/projects/dbg-dynamics-365",
    Icon: LayoutGrid,
    color: "from-emerald-500 to-teal-600",
    iconBg: "bg-emerald-600",
    tag: "ERP & CRM",
    tagColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
    client: "DBG",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">

        {/* Hero */}
        <section className="gradient-hero relative overflow-hidden py-24 text-white">
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-cyan-300 mb-5">
              <Hammer className="w-4 h-4" /> Client Engagements
            </span>
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">Projects</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Ongoing and completed enterprise implementations delivered by the Kulana team across
              banking, integration, and enterprise resource planning.
            </p>
          </div>
        </section>

        {/* Project cards */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-7">
            {projects.map(({ name, href, Icon, color, iconBg, tag, tagColor, client }) => (
              <Link
                key={name}
                href={href}
                className="group relative bg-white rounded-3xl border border-gray-100 hover:border-blue-100 hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className={`h-1.5 bg-gradient-to-r ${color}`} />
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-13 h-13 rounded-2xl ${iconBg} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}
                      style={{ width: "52px", height: "52px" }}>
                      <Icon className="w-6 h-6 text-white" strokeWidth={1.75} />
                    </div>
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold border ${tagColor}`}>
                      {tag}
                    </span>
                  </div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Client: {client}</p>
                  <h2 className="text-xl font-extrabold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors leading-snug">
                    {name}
                  </h2>
                  <div className="mt-auto flex items-center gap-1.5 text-sm font-semibold text-blue-600 group-hover:gap-2.5 transition-all">
                    View project <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
