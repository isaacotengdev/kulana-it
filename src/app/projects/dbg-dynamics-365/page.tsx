import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { LayoutGrid, Hammer, ArrowLeft, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DBG Dynamics 365 Project | Kulana IT Solutions",
  description: "DBG Dynamics 365 Project — Kulana IT Solutions",
};

export default function DbgDynamics365Page() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="gradient-hero relative overflow-hidden py-28 text-white">
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-cyan-300 mb-5">
              <LayoutGrid className="w-4 h-4" /> ERP & CRM · DBG
            </span>
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              DBG Dynamics 365 Project
            </h1>
          </div>
        </section>

        <section className="flex flex-col items-center justify-center py-32 px-4 text-center">
          <div className="w-24 h-24 rounded-3xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-8">
            <Hammer className="w-12 h-12 text-emerald-500" strokeWidth={1.5} />
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-50 border border-amber-200 rounded-full text-sm font-semibold text-amber-700 mb-6">
            <Clock className="w-4 h-4" /> Under Development
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">This page is under development</h2>
          <p className="text-gray-500 text-lg max-w-md leading-relaxed mb-10">
            The DBG Dynamics 365 Project page is currently being built. Check back soon for full project details,
            milestones, and deliverables.
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:-translate-y-0.5"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
