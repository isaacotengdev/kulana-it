import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

const MF = "var(--font-manrope), sans-serif";

export const metadata: Metadata = {
  title: "Digital Integrations & API Management | Kulana IT Solutions",
  description:
    "Unlock seamless connectivity. Our middleware and integration practice ensures your systems communicate effectively, driving efficiency, agility, and productivity throughout your organisation.",
};

const faqs = [
  {
    q: "What types of systems can be integrated with middleware?",
    a: "Middleware integrates legacy systems, ERP, CRM, cloud-based applications, databases, and web services — regardless of vendor or technology stack.",
  },
  {
    q: "How does middleware facilitate communication between different software applications?",
    a: "Middleware acts as a mediator between disparate software applications by providing a common platform for communication. It abstracts complexity, allowing seamless data exchange across different formats and protocols.",
  },
  {
    q: "Why is middleware important for businesses with complex IT landscapes?",
    a: "It simplifies integration through standardised communication approaches, enabling interoperability, accelerated development, and reduced costs across heterogeneous environments.",
  },
  {
    q: "How can middleware solutions improve data security?",
    a: "Solutions include authentication, authorisation, encryption, and data masking to protect sensitive information during transmission and processing between systems.",
  },
  {
    q: "What are common challenges during implementation?",
    a: "Interoperability issues, performance bottlenecks, data consistency concerns, vendor lock-in, and integration complexity require careful planning and robust architecture design.",
  },
  {
    q: "How does middleware support scalability?",
    a: "It decouples systems, enabling modular architectures that scale horizontally or vertically without disrupting existing infrastructure or downstream integrations.",
  },
  {
    q: "What should we consider when selecting an integration platform?",
    a: "The most important factors are: the protocols and standards your existing systems use (REST, SOAP, AMQP, etc.), the volume and latency requirements of your data flows, whether you need an event-driven or request-driven architecture, the vendor's support model and long-term roadmap, and total cost of ownership including licensing, implementation, and maintenance. WSO2, for example, is well-suited to enterprise API management and high-volume event streaming — but the right platform depends on your specific landscape. Kulana runs an assessment before recommending any tooling.",
  },
  {
    q: "What role does middleware play in digital transformation?",
    a: "Middleware removes the point-to-point dependency problem: without it, connecting five systems requires up to ten direct integrations, each brittle and hard to maintain. Middleware creates a central integration layer where each system connects once — to the middleware — rather than to every other system. This makes it possible to add, replace, or upgrade individual systems without rewriting integrations, which is what makes digital transformation programs sustainable rather than one-off projects.",
  },
  {
    q: "How do we measure the return on an integration project?",
    a: "The clearest measures are operational: how many manual data transfers or reconciliation steps were eliminated, how long end-to-end processes now take versus before, and what error rates look like in data flowing between systems. On the business side, look at time-to-decision (faster data = faster action), the cost of building new integrations after the platform is in place versus before, and any revenue impact from systems that can now talk to each other. Kulana defines these baseline metrics during the assessment phase so ROI can be tracked from day one.",
  },
];

export default function DigitalIntegrationsPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <section className="relative overflow-hidden" style={{ height: "100vh" }}>
          <Image
            src="/images/integration_digital_connectivity/Integration.webp"
            alt="Digital Integrations and API Management"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(8,0,32,0.72) 0%, rgba(8,0,32,0.52) 45%, rgba(8,0,32,0.22) 75%, rgba(8,0,32,0.06) 100%)" }}
          />
          <div
            className="relative z-10 flex flex-col w-full h-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8"
            style={{ paddingTop: "calc(5rem + 28vh)", paddingBottom: "5rem" }}
          >
            <div>
              <p className="text-xs tracking-[0.22em] uppercase mb-4" style={{ fontFamily: MF, fontWeight: 600, color: "#57D9D4" }}>
                Integration &amp; Digital Connectivity
              </p>
              <h1
                className="text-5xl sm:text-6xl lg:text-8xl font-bold uppercase text-white leading-[1.0]"
                style={{ fontFamily: MF }}
              >
                Digital Integrations<br />&amp; API Management
              </h1>
            </div>
            <div className="mt-auto">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full transition-all hover:opacity-90"
                style={{ fontFamily: MF, fontWeight: 600, background: "#57D9D4", color: "#040d28", fontSize: "0.9rem" }}
              >
                Request a Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs tracking-[0.18em] uppercase mb-6" style={{ fontFamily: MF, fontWeight: 700, color: "#200044" }}>Overview</p>
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6" style={{ fontFamily: MF }}>
              What is a middleware and integration practice?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4" style={{ fontFamily: MF }}>
              Businesses depend on multiple software systems for operations and data management. The challenge lies in ensuring these systems communicate effectively across different technologies, formats, and protocols.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10" style={{ fontFamily: MF }}>
              Kulana&apos;s middleware and integration practice bridges gaps between software applications, databases, and platforms — whether connecting legacy systems with modern cloud solutions or linking enterprise applications. We provide solutions customised to your specific business requirements, built on WSO2 and leading integration platforms.
            </p>
            <div className="flex flex-wrap lg:flex-nowrap gap-3">
              {["WSO2", "REST & GraphQL", "Event-Driven", "API Gateway"].map((tag) => (
                <span key={tag} className="flex-1 text-center py-3 px-4 border rounded-md text-sm font-semibold text-gray-700" style={{ borderColor: "#57D9D4", fontFamily: MF }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* How to Get Started */}
        <section style={{ background: "#200044" }} className="py-16 lg:py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs tracking-[0.18em] uppercase mb-14" style={{ fontFamily: MF, fontWeight: 700, color: "#a198af" }}>How to Get Started</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                { step: "01", title: "Assessment",           desc: "We evaluate your business needs, system landscape, data flows, and integration requirements through stakeholder collaboration." },
                { step: "02", title: "Strategy",             desc: "A comprehensive integration strategy aligned with business objectives, IT infrastructure, and budget constraints." },
                { step: "03", title: "Implementation",       desc: "Iterative, collaborative delivery using best practices and cutting-edge technologies for scalable, secure, future-proof solutions." },
                { step: "04", title: "Operate & Optimise",  desc: "Ongoing monitoring, optimisation, and governance of your integration layer as your systems and business needs evolve." },
              ].map(({ step, title, desc }) => (
                <div key={step}>
                  <p className="text-5xl font-light mb-3" style={{ fontFamily: MF, color: "rgba(255,255,255,0.2)" }}>{step}</p>
                  <p className="text-xl font-semibold mb-3" style={{ fontFamily: MF, color: "#57D9D4" }}>{title}</p>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: MF, color: "#a198af" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs tracking-[0.18em] uppercase mb-10" style={{ fontFamily: MF, fontWeight: 700, color: "#200044" }}>Applications</p>
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-snug" style={{ fontFamily: MF }}>
                Integration patterns we use
              </h2>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: MF }}>
                We select the right pattern for your context — from lightweight APIs to enterprise event-driven architectures.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { label: "Point-to-Point",      desc: "Direct, lightweight connections for simple two-system scenarios where overhead is not justified." },
                { label: "ESB / Middleware",     desc: "Central hub routing messages across many systems reliably — ideal for complex enterprise landscapes." },
                { label: "API-First",            desc: "Expose capabilities as governed APIs consumed by any client — mobile, partner, or internal system." },
                { label: "Event-Driven",         desc: "Asynchronous event streams for real-time, decoupled architectures that scale independently." },
                { label: "ETL / ELT Pipelines",  desc: "Batch or real-time data transformation and loading at scale for analytics and reporting." },
                { label: "iPaaS / Cloud",        desc: "Managed integration platform as a service for cloud estates reducing infrastructure overhead." },
              ].map(({ label, desc }) => (
                <div key={label} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-base font-bold mb-3" style={{ fontFamily: MF, color: "#200044" }}>{label}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: MF }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Deliver */}
        <section style={{ background: "#f5f5f5" }} className="py-16 lg:py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs tracking-[0.18em] uppercase mb-10" style={{ fontFamily: MF, fontWeight: 700, color: "#200044" }}>What We Deliver</p>
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-snug" style={{ fontFamily: MF }}>
                Integration and API management services
              </h2>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: MF }}>
                End-to-end integration capability covering connectivity, security, governance, and real-time monitoring.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { label: "API Gateway",           desc: "Centralised gateway for routing, rate limiting, authentication, and monitoring of all API traffic." },
                { label: "Event Streaming",        desc: "Real-time event pipelines using Apache Kafka and WSO2 Streaming Integrator for decoupled, scalable architectures." },
                { label: "Data Integration",       desc: "Reliable data movement between source systems, data warehouses, and analytics platforms with transformation and validation." },
                { label: "API Security",           desc: "OAuth2, JWT, mTLS, and API key management to protect every endpoint from unauthorised access." },
                { label: "Microservices",          desc: "Service mesh and microservice integration patterns that enable independent deployment and horizontal scaling." },
                { label: "Real-time Monitoring",   desc: "End-to-end visibility into API performance, integration health, and SLA compliance across your entire estate." },
              ].map(({ label, desc }) => (
                <div key={label} className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-base font-bold mb-3" style={{ fontFamily: MF, color: "#200044" }}>{label}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: MF }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs tracking-[0.18em] uppercase mb-10" style={{ fontFamily: MF, fontWeight: 700, color: "#200044" }}>Why It Matters</p>
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-snug" style={{ fontFamily: MF }}>
                What seamless integration delivers
              </h2>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: MF }}>
                Seamlessly connecting your systems delivers measurable results across efficiency, data quality, and customer experience.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Streamlined Processes",         desc: "Integration eliminates data silos and ensures smooth system communication, reducing manual effort and increasing operational efficiency." },
                { title: "Improved Data Quality",         desc: "Middleware automates data exchange and validation, reducing errors, duplication, and inconsistencies for better data integrity." },
                { title: "Enhanced Agility",              desc: "Integrated systems enable faster decision-making, market responsiveness, and flexibility to adapt to evolving business requirements." },
                { title: "End-to-End Security",           desc: "Authentication, authorisation, encryption, and data masking protect sensitive information during transmission between systems." },
              ].map(({ title, desc }) => (
                <div key={title} className="p-8 border rounded-xl" style={{ borderColor: "#57D9D4" }}>
                  <h3 className="text-lg font-bold text-gray-900 mb-3" style={{ fontFamily: MF }}>{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: MF }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <p className="text-xs tracking-[0.18em] uppercase leading-none mb-4" style={{ fontFamily: MF, fontWeight: 700, color: "#200044" }}>FAQ</p>
              <div className="h-px bg-gray-200 w-full" />
            </div>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div>
                <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-8" style={{ fontFamily: MF }}>
                  Your questions<br />answered
                </h2>
                <div className="relative w-full max-w-xs aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100">
                  <Image src="/images/integration_digital_connectivity/Integration.webp" alt="Digital Integration" fill className="object-cover object-center" sizes="320px" />
                </div>
              </div>
              <div>
                <p className="text-gray-600 leading-relaxed mb-10" style={{ fontFamily: MF }}>
                  Everything you need to know about our middleware and integration practice.
                </p>
                <div className="divide-y divide-gray-200">
              {faqs.map(({ q, a }) => (
                <details key={q} className="group py-6">
                  <summary className="flex items-center justify-between gap-6 cursor-pointer list-none">
                    <span className="font-semibold text-gray-900" style={{ fontFamily: MF }}>{q}</span>
                    <span className="flex-shrink-0 text-xl leading-none text-gray-400 select-none">
                      <span className="group-open:hidden">+</span>
                      <span className="hidden group-open:inline">−</span>
                    </span>
                  </summary>
                  <p className="text-gray-500 text-sm leading-relaxed mt-4" style={{ fontFamily: MF }}>{a}</p>
                </details>
              ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "#57D9D4" }} className="py-16 lg:py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-20">
              <h2
                className="text-3xl lg:text-4xl font-bold leading-tight lg:w-[42%] flex-shrink-0"
                style={{ fontFamily: MF, color: "#200044" }}
              >
                Ready to seamlessly connect your systems?
              </h2>
              <div className="flex-1">
                <p className="text-base leading-relaxed mb-8" style={{ fontFamily: MF, color: "#200044", opacity: 0.85 }}>
                  Optimise your business processes with Kulana&apos;s middleware and integration solutions.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-semibold transition-all hover:opacity-90"
                    style={{ fontFamily: MF, background: "#200044", color: "#ffffff" }}
                  >
                    Request a Consultation <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-semibold border transition-all hover:bg-white/20"
                    style={{ fontFamily: MF, color: "#200044", borderColor: "#200044" }}
                  >
                    Contact us <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
