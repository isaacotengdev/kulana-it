import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import HeroCanvas from "@/components/HeroCanvas";
import {
  Eye, ShieldCheck, Handshake,
  Package2, Lightbulb, Wrench, Zap, Bot, GraduationCap,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kulana | Kulana IT Solutions",
  description:
    "We have a passion: delivering innovative solutions for our clients with a unique value that empowers their businesses to be digitally transformed.",
};

const coreValues = [
  {
    num: "01",
    title: "Honesty and Openness",
    desc: "We believe in transparent communication and honest relationships with our clients, partners, and team members at every stage of an engagement.",
    Icon: Eye,
    accent: "from-blue-500 to-blue-700",
    ring: "ring-blue-100",
    iconBg: "bg-blue-600",
    tag: "Transparency",
  },
  {
    num: "02",
    title: "Integrity",
    desc: "We hold ourselves to the highest ethical standards — doing what we say, standing by our commitments, and acting with consistency across every interaction.",
    Icon: ShieldCheck,
    accent: "from-cyan-500 to-blue-600",
    ring: "ring-cyan-100",
    iconBg: "bg-cyan-600",
    tag: "Ethics",
  },
  {
    num: "03",
    title: "Trust",
    desc: "Trust is the foundation of every partnership we build. We earn it through reliability, expertise, and a genuine commitment to our clients' long-term success.",
    Icon: Handshake,
    accent: "from-indigo-500 to-blue-700",
    ring: "ring-indigo-100",
    iconBg: "bg-indigo-600",
    tag: "Partnership",
  },
];

const offerings = [
  { title: "Software Sales",          desc: "Best-in-class enterprise software solutions tailored to your industry and business size.",                                              Icon: Package2,      color: "text-blue-600",   bg: "bg-blue-50" },
  { title: "Consultative Guidance",   desc: "Strategic advisory that bridges business objectives with the right technology roadmap.",                                                Icon: Lightbulb,     color: "text-amber-600",  bg: "bg-amber-50" },
  { title: "Implementation Services", desc: "End-to-end deployment, configuration, and integration delivered using proven agile frameworks.",                                       Icon: Wrench,        color: "text-cyan-600",   bg: "bg-cyan-50" },
  { title: "System Optimisation",     desc: "Ongoing tuning of your existing platforms to maximise performance and reduce operational overhead.",                                   Icon: Zap,           color: "text-violet-600", bg: "bg-violet-50" },
  { title: "Process Automation",      desc: "Workflow automation solutions that reduce manual effort, eliminate errors, and free your team to focus on higher-value work.",         Icon: Bot,           color: "text-emerald-600",bg: "bg-emerald-50" },
  { title: "Training & Academy",      desc: "Arcitura-partnered professional programmes that upskill your workforce with certifications built for the digital era.",                Icon: GraduationCap, color: "text-rose-600",   bg: "bg-rose-50" },
];

export default function KulanaPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="gradient-hero relative overflow-hidden py-28 text-white">
          <HeroCanvas variant="kulana" />
          <div className="absolute inset-0">
            <Image
              src="/images/kulana/hero.jpg"
              alt="Kulana IT Solutions team"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">Kulana</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We have a passion: delivering innovative solutions for our clients with a unique value
              that empowers their businesses to be digitally transformed.
            </p>
          </div>
        </section>

        {/* ── Who We Are ───────────────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Kulana is a group of technology companies united by a commitment to integrity, good
                customer service, and long business relationships. We partner with organisations
                across Africa and the Middle East to design, implement, and optimise technology
                solutions that create measurable, lasting value.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                No matter what stage of technological transformation journey you are on, we have a
                solution for you.
              </p>
              <blockquote className="border-l-4 border-blue-600 pl-6 py-2">
                <p className="text-gray-700 text-lg font-medium italic leading-relaxed">
                  &ldquo;No matter what stage of technological transformation journey you are on,
                  we have a solution for you!&rdquo;
                </p>
              </blockquote>
            </div>
            <div className="relative h-80 lg:h-auto rounded-3xl overflow-hidden">
              <Image
                src="/images/kulana/section-bg.jpg"
                alt="Kulana IT Solutions — delivering digital transformation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* ── Mission & Vision ─────────────────────────────────────────── */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10">
              {/* Mission */}
              <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To transform corporations through the use of well-designed and highly effective
                  digital technology solutions where our stakeholders are respected as equal partners
                  in the work.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Trust us with the technology needs of your business and stay focused with the core.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Core Values ──────────────────────────────────────────────── */}
        <section className="py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-sm font-semibold text-blue-600 mb-4">
                What we stand for
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">Core Values</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                The principles that guide every decision, every client engagement, and every solution
                we deliver.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {coreValues.map(({ num, title, desc, Icon, accent, ring, iconBg, tag }) => (
                <div
                  key={title}
                  className={`relative bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group`}
                >
                  {/* top gradient bar */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${accent}`} />

                  <div className="p-8 pt-7">
                    {/* number watermark */}
                    <span className="absolute top-5 right-6 text-7xl font-black text-gray-50 select-none leading-none group-hover:text-blue-50 transition-colors">
                      {num}
                    </span>

                    {/* icon + tag row */}
                    <div className="flex items-center gap-4 mb-6 relative">
                      <div className={`w-14 h-14 rounded-2xl ${iconBg} flex items-center justify-center shadow-md ring-4 ${ring} flex-shrink-0`}>
                        <Icon className="w-7 h-7 text-white" strokeWidth={1.75} />
                      </div>
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{tag}</span>
                    </div>

                    {/* text */}
                    <h3 className="text-xl font-extrabold text-gray-900 mb-3 relative">{title}</h3>
                    <p className="text-gray-500 leading-relaxed relative">{desc}</p>

                    {/* bottom accent line */}
                    <div className={`mt-8 h-px w-12 bg-gradient-to-r ${accent} group-hover:w-full transition-all duration-500`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── We Offer ─────────────────────────────────────────────────── */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-sm font-semibold text-blue-600 mb-4">
                Our Capabilities
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">What We Offer</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                A comprehensive suite of services designed to accelerate your digital transformation
                at every stage.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {offerings.map(({ title, desc, Icon, color, bg }) => (
                <div key={title} className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                  <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${color}`} strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section className="gradient-primary py-20 text-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
              Ready to transform your business?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Get in touch to find out how Kulana can empower your organisation in the digital age.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Request a Quote
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
