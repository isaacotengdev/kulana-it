import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Kulana IT Solutions",
  description:
    "Kulana is committed to ensuring that your privacy is protected. Read our privacy policy to understand how we handle your personal information.",
};

const MF = "var(--font-manrope), sans-serif";

// Keep in sync with the contact forms, /api/contact and CookieConsent
const collected = [
  { label: "Contact Details",       desc: "Your first name, last name, email address and, if you choose to give it, your telephone number." },
  { label: "Your Enquiry",          desc: "The service you are interested in, your message, which form you used and when you sent it." },
  { label: "Analytics Data",        desc: "Only if you accept analytics cookies: pages visited, referring website, browser and device type, and approximate location derived from your IP address, collected by HubSpot." },
  { label: "Your Cookie Choice",    desc: "Whether you accepted or declined analytics cookies, stored in your own browser so we don't ask again." },
];

const uses = [
  { label: "Responding to You",       desc: "Replying to your enquiry and discussing the services you asked about." },
  { label: "Keeping a Record",        desc: "Recording your enquiry in our CRM so any of our team can follow up consistently." },
  { label: "Improving the Website",   desc: "Understanding which pages are useful, only if you have accepted analytics cookies." },
  { label: "Protecting the Website",  desc: "Blocking spam and abusive or repeated form submissions." },
];

const safeguards = ["Encrypted Connections", "Restricted Access", "Spam & Abuse Protection", "Consent-Based Tracking"];

const contacts = [
  { label: "Email",     value: "contact@kulana.net",               href: "mailto:contact@kulana.net" },
  { label: "Ghana",     value: "+233 540 127 400",                 href: "tel:+233540127400" },
  { label: "Mauritius", value: "+230 46 32 519",                   href: "tel:+23046325190" },
  { label: "Address",   value: "The Rhombus, Kanda, Accra, Ghana", href: undefined },
];

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  const color = light ? "#ffffff" : "#000000";
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

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="mt-6" style={{ fontFamily: MF, fontWeight: 400, color: "#a198af", fontSize: "clamp(13px, 1vw, 14px)" }}>
              Effective date: 31 March 2022
            </p>
          </div>
        </section>

        {/* ── Introduction ─────────────────────────────────────────────── */}
        <section className="bg-white py-10 lg:py-12">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionLabel>Introduction</SectionLabel>
            <h2 className="leading-tight mb-6" style={h2Style}>Your privacy is protected</h2>
            <div className="grid lg:grid-cols-[3fr_2fr] gap-8 items-start">
              <div>
                <p className="mb-8" style={leadStyle}>
                  Kulana is committed to ensuring that your privacy is protected. This policy explains what
                  data we collect, how we use it, and the steps we take to keep it safe.
                </p>
                <p style={leadStyle}>
                  It applies to personal information Kulana Limited receives through this website. By using
                  this website you confirm your acceptance of the terms set out in this policy.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:flex lg:flex-col lg:items-end">
                {["Data Never Sold", "Secure Storage", "Transparent Usage", "Analytics Only With Consent"].map((tag) => (
                  <div key={tag} className="flex items-center justify-center px-3 py-4 rounded-lg text-center w-full lg:max-w-[340px]"
                    style={{ border: "1.5px solid #57D9D4", fontFamily: MF, fontWeight: 700, color: "#200044", fontSize: "clamp(13px, 1vw, 14px)" }}>
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Information We Collect ───────────────────────────────────── */}
        <section className="py-10 lg:py-12" style={{ background: "#f5f5f5" }}>
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionLabel>Information We Collect</SectionLabel>
            <div className="grid lg:grid-cols-2 gap-8 items-start mb-8">
              <h2 className="leading-tight" style={h2Style}>What we collect</h2>
              <p className="lg:pt-2" style={leadStyle}>
                We only collect what you submit through our contact forms and, with your consent, basic
                analytics about how the site is used.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {collected.map(({ label, desc }) => (
                <div key={label} className="bg-white border border-gray-100 rounded-xl p-6">
                  <p className="mb-3" style={cardTitleStyle}>{label}</p>
                  <p style={bodyStyle}>{desc}</p>
                </div>
              ))}
            </div>
            <p style={bodyStyle}>
              Form submissions are stored in our secure database and in our HubSpot CRM so our team can
              respond to you. When you submit a form, your IP address is used briefly to block spam and
              repeated submissions; it is not saved with your enquiry. Our hosting provider may also keep
              standard technical logs, such as IP address and request time, for security and reliability.
            </p>
          </div>
        </section>

        {/* ── How We Use Your Information ──────────────────────────────── */}
        <section className="bg-white py-10 lg:py-12">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionLabel>How We Use Your Information</SectionLabel>
            <div className="grid lg:grid-cols-2 gap-8 items-start mb-8">
              <h2 className="leading-tight" style={h2Style}>Why we need it</h2>
              <p className="lg:pt-2" style={leadStyle}>
                We use your information only for the purposes below. We do not add you to marketing lists
                without your agreement.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {uses.map(({ label, desc }) => (
                <div key={label} className="rounded-xl p-6" style={{ border: "1.5px solid #57D9D4", background: "#f1ffff" }}>
                  <p className="mb-3" style={{ ...cardTitleStyle, fontWeight: 400, color: "#57D9D4" }}>{label}</p>
                  <p style={bodyStyle}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Security ─────────────────────────────────────────────────── */}
        <section className="py-10 lg:py-12" style={{ background: "#200044" }}>
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionLabel light>Security</SectionLabel>
            <div className="grid lg:grid-cols-2 gap-8 items-start mb-10">
              <h2 className="leading-tight" style={{ ...h2Style, color: "#57D9D4" }}>Keeping your information secure</h2>
              <p className="lg:pt-2" style={{ ...leadStyle, color: "#ffffff" }}>
                All traffic to this website is encrypted, access to submitted information is limited to our
                team, and forms are protected against spam and abuse. Analytics tracking never runs without
                your consent.
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 sm:gap-10 mb-10">
              {safeguards.map((title, i) => (
                <div key={title}>
                  <p className="leading-none mb-4" style={{ fontFamily: MF, fontWeight: 400, color: "#a198af", fontSize: "clamp(24px, 2.85vw, 41px)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p style={{ fontFamily: MF, fontWeight: 400, color: "#ffffff", fontSize: "clamp(14px, 1.45vw, 21px)" }}>{title}</p>
                </div>
              ))}
            </div>
            <p style={{ ...bodyStyle, color: "#a198af" }}>
              Please note that despite our best efforts, no security measure is entirely infallible. We will
              not be held liable for unauthorised interception or misuse of your data by third parties.
            </p>
          </div>
        </section>

        {/* ── Analytics & Changes ──────────────────────────────────────── */}
        <section className="bg-white py-10 lg:py-12">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionLabel>Analytics &amp; Policy Changes</SectionLabel>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-100 rounded-xl p-6">
                <p className="mb-3" style={cardTitleStyle}>Analytics &amp; Third Parties</p>
                <p style={bodyStyle}>
                  We use HubSpot to manage enquiries and, if you accept analytics cookies, to understand how
                  visitors use the site. HubSpot&apos;s tracking only loads after you give consent, and it places
                  its own cookies in line with HubSpot&apos;s privacy policy. If you decline, no analytics cookies are
                  set. We do not sell or rent your personal information to third parties.
                </p>
              </div>
              <div className="bg-white border border-gray-100 rounded-xl p-6">
                <p className="mb-3" style={cardTitleStyle}>Changes to This Policy</p>
                <p style={bodyStyle}>
                  Kulana Limited may update this privacy policy at any time. Changes take effect when they are
                  posted on this page, and the effective date at the top of the page will be updated. Continued
                  use of this website after a change constitutes your acceptance of the revised policy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section style={{ background: "#57D9D4" }}>
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-9 lg:py-10">
            <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-8">
              <div className="lg:w-[45%] flex-shrink-0">
                <h2 className="leading-tight mb-6" style={{ fontFamily: MF, fontWeight: 700, color: "#200044", fontSize: "clamp(20px, 2.1vw, 31px)" }}>
                  Questions about<br />your privacy?
                </h2>
                <p className="mb-8" style={{ ...bodyStyle, color: "#200044" }}>
                  If you have any questions about this privacy policy or how we handle your data, please do
                  not hesitate to get in touch with our team.
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
                    {href ? (
                      <a href={href} className="hover:underline" style={{ fontFamily: MF, fontWeight: 600, color: "#200044", fontSize: "clamp(13px, 1.2vw, 18px)" }}>{value}</a>
                    ) : (
                      <p style={{ fontFamily: MF, fontWeight: 600, color: "#200044", fontSize: "clamp(13px, 1.2vw, 18px)" }}>{value}</p>
                    )}
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
