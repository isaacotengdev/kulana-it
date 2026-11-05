import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies Policy | Kulana IT Solutions",
  description:
    "Learn how Kulana IT Solutions uses cookies on its website and how you can manage your cookie preferences.",
};

const MF = "var(--font-manrope), sans-serif";

const sections = [
  {
    title: "What Are Cookies?",
    body: "A cookie is a small text file a website stores in your browser. Analytics cookies help a site understand how visitors use it, such as which pages are viewed and how people arrive there.",
  },
  {
    title: "How We Use Cookies",
    body: "We use one type of optional cookie: HubSpot analytics cookies, which show us which pages are useful so we can improve the website. They are only set if you click \"Accept Analytics\" on our cookie banner.",
  },
  {
    title: "Your Privacy Is Protected",
    body: "Cookies do not give us access to your device or to personal information beyond what you choose to share with us, such as the details you enter in our contact forms.",
  },
  {
    title: "Your Choice",
    body: "If you decline, no analytics cookies are set and the whole website still works normally. Your choice is saved in your browser so we don't ask again; to change it, clear this site's data in your browser settings and the banner will reappear.",
  },
];

const contacts = [
  { label: "Email",     value: "contact@kulana.net", href: "mailto:contact@kulana.net" },
  { label: "Ghana",     value: "+233 540 127 400",   href: "tel:+233540127400" },
  { label: "Mauritius", value: "+230 46 32 519",     href: "tel:+23046325190" },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  const color = "#000000";
  return (
    <div className="mb-6">
      <span className="tracking-normal uppercase" style={{ fontFamily: MF, fontWeight: 600, color, fontSize: "clamp(13px, 1vw, 14px)" }}>
        {children}
      </span>
      <div className="w-full h-px mt-3" style={{ background: color }} />
    </div>
  );
}

const h2Style = { fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(18px, 1.8vw, 26px)" };
const leadStyle = { fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1.2vw, 18px)", lineHeight: "1.4" };
const bodyStyle = { fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1vw, 14px)", lineHeight: "1.5" };
const cardTitleStyle = { fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "clamp(14px, 1.45vw, 21px)" };

export default function CookiesPolicyPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden" style={{ background: "#200044" }}>
          <div
            className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8"
            style={{ paddingTop: "calc(80px + clamp(32px, 6vw, 90px))", paddingBottom: "clamp(40px, 6vw, 90px)" }}
          >
            <p
              className="inline-block tracking-normal uppercase mb-6 select-none"
              style={{ fontFamily: MF, fontWeight: 600, color: "#57D9D4", fontSize: "clamp(13px, 1.2vw, 18px)" }}
            >
              Legal &amp; Compliance
            </p>
            <h1
              className="text-white uppercase leading-tight select-none"
              style={{ fontFamily: MF, fontWeight: 500, fontSize: "clamp(32px, 4vw, 53px)" }}
            >
              Cookies Policy
            </h1>
          </div>
        </section>

        {/* ── Overview ─────────────────────────────────────────────────── */}
        <section className="bg-white py-10 lg:py-12">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionLabel>Overview</SectionLabel>
            <div className="grid lg:grid-cols-2 gap-8 items-start mb-8">
              <h2 className="leading-tight" style={h2Style}>We believe in transparency</h2>
              <p className="lg:pt-2" style={leadStyle}>
                This policy explains exactly what cookies we use, why we use them, and how you can control them.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {sections.map(({ title, body }) => (
                <div key={title} className="bg-white border border-gray-100 rounded-xl p-6">
                  <p className="mb-3" style={cardTitleStyle}>{title}</p>
                  <p style={bodyStyle}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section style={{ background: "#57D9D4" }}>
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-9 lg:py-10">
            <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-8">
              <div className="lg:w-[45%] flex-shrink-0">
                <h2 className="leading-tight mb-6" style={{ fontFamily: MF, fontWeight: 700, color: "#200044", fontSize: "clamp(20px, 2.1vw, 31px)" }}>
                  Questions about<br />our cookies?
                </h2>
                <p className="mb-8" style={{ ...bodyStyle, color: "#200044" }}>
                  If you have any questions about our use of cookies or this policy, our team is happy to help.
                  Reach us through any of the channels below.
                </p>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md transition-all hover:opacity-90"
                  style={{ fontFamily: MF, fontWeight: 600, background: "#200044", color: "#ffffff", fontSize: "13px" }}
                >
                  Contact us <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="flex-1 grid sm:grid-cols-2 gap-6">
                {contacts.map(({ label, value, href }) => (
                  <div key={label}>
                    <p className="uppercase mb-1" style={{ fontFamily: MF, fontWeight: 600, color: "#200044", fontSize: "12px", opacity: 0.7 }}>{label}</p>
                    <a href={href} className="hover:underline" style={{ fontFamily: MF, fontWeight: 600, color: "#200044", fontSize: "clamp(13px, 1.2vw, 18px)" }}>{value}</a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
