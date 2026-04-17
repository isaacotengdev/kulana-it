"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Core Banking",
    href: "/core-banking",
    description:
      "In the realm of modern banking, core banking systems serve as the backbone of financial operations, facilitating essential functions such as account management, transactions, and regulatory compliance.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    alt: "Earth with data connections representing global core banking",
  },
  {
    title: "Data Center & Security Operations Center",
    href: "/data-center-security-operations-centre",
    description:
      "In the digital era, the reliability, security, and efficiency of data centers and security operations centers (SOCs) are paramount for safeguarding critical assets and ensuring uninterrupted business operations.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    alt: "Data center servers representing infrastructure and security operations",
  },
  {
    title: "ERP and CRM",
    href: "/erp-and-crm",
    description:
      "In the realm of business management, enterprise resource planning (ERP) and customer relationship management (CRM) systems play pivotal roles in streamlining operations and enhancing customer interactions.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    alt: "Circuit board representing ERP and CRM technology platforms",
  },
  {
    title: "Digital Integrations & API Management",
    href: "/digital-integrations-api-management",
    description:
      "In today's interconnected digital landscape, seamless communication and collaboration between disparate systems are imperative for agile, efficient organisations.",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80",
    alt: "Quantum computing visualization representing digital integrations",
  },
  {
    title: "Project Management Consulting",
    href: "/project-management-consulting",
    description:
      "In today's complex business environment, effective project management is essential for driving successful outcomes and achieving strategic objectives across your organisation.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    alt: "Business colleagues collaborating representing project management",
  },
  {
    title: "Predictive Analysis",
    href: "/predictive-analysis",
    description:
      "In the dynamic landscape of modern business, predictive analysis emerges as a critical tool for informed decision-making and strategic planning based on data-driven insights.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    alt: "IT security data monitoring center representing predictive analysis",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-sm font-medium text-blue-600 mb-4">
            What We Do
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            At our core, we excel in core banking solutions, middleware and integration,
            predictive analysis, project management consulting, ERP and CRM systems,
            data center and security operations.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={svc.image}
                  alt={svc.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Info strip */}
              <div className="bg-[#00b4d8] px-6 py-5">
                <h3 className="text-lg font-bold text-white mb-3">
                  {svc.title}
                </h3>
                <Link
                  href={svc.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/90 hover:text-white transition-colors"
                >
                  See more
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200 hover:-translate-y-0.5"
          >
            Discuss Your Requirements
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
