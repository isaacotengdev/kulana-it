import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import HeroCanvas from "@/components/HeroCanvas";
import {
  Handshake, Award, BookOpen, Users, Globe,
  ArrowRight, CheckCircle2, Search, TrendingUp, Zap, Shield,
  GraduationCap, Building2, Laptop, MapPin,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner Offering | Kulana Academy | Kulana IT Solutions",
  description:
    "Kulana Academy's partner programmes — technology alliances, Arcitura certification partnerships, and co-delivery models for training and enablement.",
};

const capabilities = [
  { Icon: Award,         label: "Certification Programmes", color: "text-blue-600",  bg: "bg-blue-50",  border: "border-blue-100" },
  { Icon: Building2,     label: "Corporate Training",       color: "text-teal-600",  bg: "bg-teal-50",  border: "border-teal-100" },
  { Icon: Laptop,        label: "Vendor Accreditation",     color: "text-blue-600",  bg: "bg-blue-50",  border: "border-blue-100" },
  { Icon: Globe,         label: "Pan-African Delivery",     color: "text-cyan-600",  bg: "bg-cyan-50",  border: "border-cyan-100" },
  { Icon: GraduationCap, label: "Blended Learning",         color: "text-teal-600",  bg: "bg-teal-50",  border: "border-teal-100" },
  { Icon: Handshake,     label: "Co-Delivery Models",       color: "text-cyan-600",  bg: "bg-cyan-50",  border: "border-cyan-100" },
];

const features = [
  { Icon: Award,         label: "Arcitura Education Partnership",   desc: "Globally recognised certifications in cloud, SOA, microservices, and big data — delivered as an authorised Arcitura training centre." },
  { Icon: Building2,     label: "Corporate Training Design",        desc: "Bespoke training programmes designed around your technology stack, your people, and your strategic learning objectives." },
  { Icon: BookOpen,      label: "Vendor-Accredited Training",       desc: "Accredited courses on Temenos, Microsoft Dynamics 365, HubSpot, WSO2, and other platforms your teams rely on." },
  { Icon: Globe,         label: "Pan-African Delivery Network",     desc: "Training delivered across 20+ African and Middle East countries — onsite, virtually, or in certified learning centres." },
  { Icon: Laptop,        label: "Blended and Virtual Learning",      desc: "Flexible delivery combining instructor-led sessions, e-learning, labs, and mentoring to suit diverse team schedules." },
  { Icon: GraduationCap, label: "Learning Outcome Tracking",        desc: "Structured assessments, certification tracking, and reporting to demonstrate ROI and measure learner progress." },
];

const benefits = [
  { Icon: TrendingUp, bg: "bg-blue-600",  title: "Extend Your Reach",         desc: "Kulana Academy's established presence in Ghana and Mauritius gives partner organisations a credible, local delivery base without building their own infrastructure." },
  { Icon: Award,      bg: "bg-teal-600",  title: "Credible Certifications",   desc: "Arcitura and vendor-accredited programmes give learners internationally recognised credentials that hold real career value." },
  { Icon: Zap,        bg: "bg-cyan-600",  title: "Faster Time to Capability", desc: "Proven courseware and experienced delivery teams reduce the time from training to productive application of skills." },
  { Icon: Shield,     bg: "bg-cyan-500",  title: "Quality Assurance",         desc: "Structured delivery frameworks, qualified instructors, and outcome tracking ensure consistent, high-quality training results." },
];

const faqs = [
  {
    q: "Who can become a Kulana Academy partner?",
    a: "We work with technology vendors seeking to deliver accredited training, corporations wanting to build internal capability, and training organisations looking to extend their content and geographic reach. If you share our commitment to quality learning outcomes, we want to hear from you.",
  },
  {
    q: "What does the Arcitura Education partnership offer?",
    a: "As an authorised Arcitura Education partner, Kulana Academy delivers the Certified Cloud Technology Professional (CCTP), Certified SOA Professional, Certified Big Data Professional, and other globally recognised credentials. Learners receive internationally accredited certificates backed by the Arcitura brand.",
  },
  {
    q: "How do corporate training partnerships work?",
    a: "We start with a learning needs analysis — understanding your teams, your technology environment, and your goals. From there, we design a custom curriculum, select appropriate delivery formats (instructor-led, virtual, blended), and manage the full programme including assessment and reporting.",
  },
  {
    q: "What vendor training programmes are available?",
    a: "We deliver accredited training on Temenos (core banking), Microsoft Dynamics 365 (ERP/CRM), HubSpot (CRM and marketing), WSO2 (integration and API management), and Dell Technologies (infrastructure). All courses are aligned to vendor certification pathways.",
  },
  {
    q: "In which countries can Kulana Academy deliver training?",
    a: "Kulana Academy is based in Ghana and Mauritius and has delivered training to clients across multiple African markets. We work with your preferred facilities — onsite at your offices, virtually, or at certified training venues. Please contact us directly to confirm availability in your specific location.",
  },
  {
    q: "What is the co-delivery model?",
    a: "In a co-delivery partnership, Kulana Academy provides the courseware, instructors, and certification infrastructure while you bring the learner audience and local logistics. We share revenue, and both organisations benefit from the partnership. This model is ideal for organisations that want to offer premium training without building the content themselves.",
  },
  {
    q: "How do you measure training effectiveness?",
    a: "We use pre-and-post assessments, practical lab exercises, learner satisfaction surveys, and certification pass rates to measure effectiveness. For corporate programmes, we also track on-the-job application and can link training completion to business KPIs where relevant.",
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

        {/* Capability strip */}
        <section className="bg-white border-b border-gray-100 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {capabilities.map(({ Icon, label, color, bg, border }) => (
                <div key={label} className={`flex flex-col items-center text-center gap-2.5 p-4 rounded-2xl border ${border} ${bg}`}>
                  <div className={`w-10 h-10 rounded-xl bg-white border ${border} flex items-center justify-center shadow-sm`}>
                    <Icon className={`w-5 h-5 ${color}`} strokeWidth={1.75} />
                  </div>
                  <span className="text-xs font-semibold text-gray-700 leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Overview</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6">
                Extend your training reach through partnership
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Kulana Academy has built a network of technology alliances, certification partnerships,
                and co-delivery models that enable us — and our partners — to deliver world-class
                training at scale across Africa and the Middle East.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Whether you are a technology vendor looking to certify your customers, a corporation
                building internal capability, or a training organisation seeking accredited content,
                our partnership tracks are designed to create mutual value and shared success.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Arcitura Certified", "20+ Countries", "Vendor Accredited", "Co-Delivery"].map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-xs font-semibold text-blue-700">
                    <CheckCircle2 className="w-3 h-3" /> {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-10 border border-blue-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">How to Get Started</h3>
              </div>
              <div className="space-y-5">
                {[
                  { Icon: Search,     step: "01", title: "Explore",   desc: "Tell us about your organisation, your learner audience, and your training goals — we will identify the right partnership track for you." },
                  { Icon: Handshake,  step: "02", title: "Align",     desc: "We design a partnership structure — revenue model, delivery scope, and certification pathway — that works for both parties." },
                  { Icon: TrendingUp, step: "03", title: "Deliver",   desc: "Launch your first programme with full Kulana Academy support — courseware, instructors, certification, and reporting." },
                ].map(({ Icon: StepIcon, step, title, desc }) => (
                  <div key={step} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-sm">
                      <StepIcon className="w-4 h-4 text-white" strokeWidth={1.75} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">{step}</span>
                        <span className="font-semibold text-gray-900">{title}</span>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Dark section — technology partners */}
        <section className="bg-gray-950 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3">Our Strategic Partners</p>
              <h2 className="text-3xl font-extrabold text-white mb-3">Trusted Technology Alliances</h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Kulana Academy delivers vendor-accredited training on the world&apos;s leading enterprise platforms.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
              {[
                { name: "Temenos",   src: "/logos/temenos.png",   h: "h-12" },
                { name: "Dell",      src: "/logos/dell.svg",      h: "h-10" },
                { name: "Microsoft", src: "/logos/microsoft.svg", h: "h-10" },
                { name: "HubSpot",   src: "/logos/hubspot.svg",   h: "h-10" },
                { name: "WSO2",      src: "/logos/wso2.png",      h: "h-12" },
              ].map(({ name, src, h }) => (
                <div key={name} className="flex items-center justify-center bg-white rounded-2xl px-4 py-6 hover:shadow-lg transition-all">
                  <Image src={src} alt={name} width={140} height={56} className={`${h} w-auto object-contain`} />
                </div>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { Icon: Award,         label: "Arcitura Education",    desc: "Globally recognised cloud, SOA, and big data certifications across Africa and the Middle East" },
                { Icon: Building2,     label: "Microsoft Partner",     desc: "Accredited Dynamics 365 and Azure training for enterprise clients and their teams" },
                { Icon: GraduationCap, label: "Temenos Training",      desc: "Platform training for Temenos implementation teams and banking professionals" },
                { Icon: BookOpen,      label: "WSO2 Training",         desc: "Integration platform and API management training for technical and architecture teams" },
                { Icon: Handshake,     label: "HubSpot Certification", desc: "Sales, marketing, and service hub training aligned to HubSpot certification pathways" },
                { Icon: MapPin,        label: "Dell Technologies",     desc: "Infrastructure training on storage, compute, and networking for IT operations teams" },
              ].map(({ Icon: Ic, label, desc }) => (
                <div key={label} className="group flex gap-4 p-6 rounded-2xl border border-gray-800 bg-gray-900 hover:border-blue-500/40 hover:bg-gray-800 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600/40 transition-colors">
                    <Ic className="w-5 h-5 text-blue-400" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="font-bold text-white mb-1">{label}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">What We Offer</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
                Partnership Capabilities
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Whether you are a vendor, corporate client, or training organisation, we have a structured model to extend your reach and impact.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map(({ Icon, label, desc }, i) => (
                <div key={label} className="group flex gap-4 p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:border-blue-100 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <Icon className="w-5 h-5 text-white" strokeWidth={1.75} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">0{i + 1}</span>
                      <p className="font-bold text-gray-900">{label}</p>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Why Partner With Us</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">Benefits</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                A Kulana Academy partnership gives you the infrastructure, credibility, and reach to scale your training offering.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map(({ Icon, bg, title, desc }) => (
                <div key={title} className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-100 hover:shadow-xl transition-all duration-300 overflow-hidden relative">
                  <div className={`absolute top-0 left-0 right-0 h-1 ${bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className={`w-12 h-12 rounded-2xl ${bg} mb-5 flex items-center justify-center shadow-md`}>
                    <Icon className="w-6 h-6 text-white" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-lg">
              Everything you need to know about partnering with Kulana Academy.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group border border-gray-200 rounded-2xl overflow-hidden">
                <summary className="flex items-start justify-between gap-4 px-6 py-5 cursor-pointer list-none font-semibold text-gray-900 hover:bg-blue-50 transition-colors">
                  <span className="flex items-start gap-3">
                    <Handshake className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" strokeWidth={1.75} />
                    {q}
                  </span>
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 group-open:bg-blue-100 flex-shrink-0 transition-colors mt-0.5">
                    <svg className="w-3.5 h-3.5 text-gray-500 group-open:text-blue-600 group-open:rotate-45 transition-all duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 pt-2 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pl-14">{a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-10 md:p-14 text-white text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Handshake className="w-8 h-8 text-white" strokeWidth={1.75} />
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
