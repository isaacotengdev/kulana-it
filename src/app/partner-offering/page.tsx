import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import HeroCanvas from "@/components/HeroCanvas";
import {
  Handshake, Award, BookOpen, Users, Globe, BadgeCheck,
  ArrowRight, CheckCircle2,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner Offering | Kulana Academy | Kulana IT Solutions",
  description:
    "Kulana Academy's partner programmes — technology alliances, Arcitura certification partnerships, and co-delivery models for training and enablement.",
};

const offerings = [
  {
    Icon: Award,
    title: "Arcitura Education Partnership",
    desc: "Kulana Academy is an authorised Arcitura Education partner — delivering globally recognised certifications in cloud computing, SOA, microservices, and big data across Africa and the Middle East.",
    highlights: ["Certified Cloud Technology Professional (CCTP)", "Certified SOA Professional", "Certified Big Data Professional", "Authorised Training Centre"],
  },
  {
    Icon: Users,
    title: "Corporate Training Partnerships",
    desc: "We partner with enterprise clients to design, deliver, and manage bespoke training programmes — aligned to their technology stack, their teams, and their strategic goals.",
    highlights: ["Customised Curriculum Design", "Blended Delivery Models", "Learning Outcome Tracking", "Ongoing Programme Support"],
  },
  {
    Icon: BookOpen,
    title: "Technology Vendor Programmes",
    desc: "As an authorised partner of Temenos, Dell, Microsoft, HubSpot, and WSO2, Kulana Academy delivers vendor-accredited training on the platforms our clients depend on.",
    highlights: ["Temenos Platform Training", "Microsoft Dynamics 365", "WSO2 Integration Training", "HubSpot CRM Certification"],
  },
  {
    Icon: Globe,
    title: "Pan-African Training Delivery",
    desc: "Our partner network enables us to deliver training across more than 20 countries — onsite, virtually, or in certified learning centres — in English and French.",
    highlights: ["20+ Countries Covered", "English & French Delivery", "Virtual & In-Person", "Regional Training Centres"],
  },
];

export default function PartnerOfferingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">

        {/* Hero */}
        <section className="gradient-hero relative overflow-hidden py-28 text-white">
          <HeroCanvas variant="partner-offering" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-cyan-300 mb-5">
              <Handshake className="w-4 h-4" /> Kulana Academy
            </span>
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">Partner Offering</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
              Technology alliances, certification partnerships, and co-delivery programmes
              that extend our training capability across Africa and beyond.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {["Arcitura Partner", "Vendor Accredited", "Pan-African Reach", "Co-Delivery"].map((tag) => (
                <span key={tag} className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-white">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-300" /> {tag}
                </span>
              ))}
            </div>
            <Link href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:-translate-y-0.5">
              Become a Partner <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Partner programmes */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">What We Offer</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              Four Partnership Tracks
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Whether you are a technology vendor, corporate client, or training organisation,
              Kulana Academy has a structured partnership model designed to extend your reach
              and impact.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {offerings.map(({ Icon, title, desc, highlights }) => (
              <div key={title} className="group bg-white rounded-3xl border border-gray-100 hover:border-blue-100 hover:shadow-2xl transition-all duration-300 p-8">
                <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <Icon className="w-7 h-7 text-white" strokeWidth={1.75} />
                </div>
                <h3 className="text-xl font-extrabold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-500 leading-relaxed mb-6">{desc}</p>
                <div className="grid grid-cols-2 gap-2">
                  {highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00C8D8] flex-shrink-0" />
                      <span className="text-xs font-medium text-gray-600">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technology partners */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Our Strategic Partners</p>
              <h2 className="text-2xl font-extrabold text-gray-900">Trusted Technology Alliances</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { name: "Temenos",   src: "/logos/temenos.png",   h: "h-7" },
                { name: "Dell",      src: "/logos/dell.svg",      h: "h-6" },
                { name: "Microsoft", src: "/logos/microsoft.svg", h: "h-6" },
                { name: "HubSpot",   src: "/logos/hubspot.svg",   h: "h-6" },
                { name: "WSO2",      src: "/logos/wso2.png",      h: "h-7" },
              ].map(({ name, src, h }) => (
                <div key={name} className="flex items-center justify-center bg-white border border-gray-100 rounded-2xl px-4 py-6 hover:border-blue-100 hover:shadow-md transition-all">
                  <Image src={src} alt={name} width={120} height={40} className={`${h} w-auto object-contain`} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-10 md:p-14 text-white text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Handshake className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
                Interested in partnering with Kulana Academy?
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Let&apos;s explore how a partnership can extend your training capability and geographic reach.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:-translate-y-0.5">
                  Start a Conversation <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact-us" className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
