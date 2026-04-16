"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Core Banking",
    description:
      "Modern account management, transaction processing, regulatory compliance, and digital banking platforms built for financial institutions of all sizes.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    alt: "Globe from space representing global core banking",
  },
  {
    title: "Data Center & Security Operations Center",
    description:
      "Enterprise-grade data center infrastructure, Security Operations Centre (SOC) services, and 24/7 monitoring to protect your critical assets.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
    alt: "AI neural network visualization representing data center operations",
  },
  {
    title: "ERP and CRM",
    description:
      "Streamline your operations with Microsoft Dynamics 365 and HubSpot CRM implementations, customised to your unique business processes.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    alt: "Circuit board representing ERP and CRM technology",
  },
  {
    title: "Digital Integrations",
    description:
      "Seamlessly connect your enterprise systems through robust API management, middleware solutions, and WSO2-powered integration platforms.",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80",
    alt: "Blue circuit board representing digital integrations",
  },
  {
    title: "Project Management",
    description:
      "PMO setup, Agile coaching, and end-to-end project delivery services that keep your strategic initiatives on time and within budget.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    alt: "Business team in a meeting representing project management",
  },
  {
    title: "Predictive Analysis",
    description:
      "Harness your data with AI-driven analytics, business intelligence dashboards, and predictive modelling for smarter decision-making.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    alt: "Analyst at multiple monitors representing predictive analytics",
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
            Our Core <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            From strategy to implementation and ongoing support, we deliver
            end-to-end IT solutions that drive real business outcomes.
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
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/90 hover:text-white transition-colors"
                >
                  See more
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200 hover:-translate-y-0.5"
          >
            Discuss Your Requirements
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
