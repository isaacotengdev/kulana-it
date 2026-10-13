import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const LOGO_FILTER = "grayscale(100%) brightness(0) invert(0.65)";

const MF = "var(--font-manrope), sans-serif";

export default function ContactUsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Contact />

        {/* Ready to work with us CTA */}
        <section style={{ background: "#57D9D4" }}>
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-9 lg:py-10">
            <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-8">
              <h2
                className="leading-tight lg:w-[45%] flex-shrink-0"
                style={{ fontFamily: MF, fontWeight: 700, color: "#200044", fontSize: "clamp(20px, 2.1vw, 31px)" }}
              >
                Ready to work<br />with us?
              </h2>
              <div className="flex-1">
                <p className="mb-8" style={{ fontFamily: MF, fontWeight: 400, color: "#200044", fontSize: "clamp(13px, 1vw, 14px)", lineHeight: "1.5" }}>
                  Get in touch to find out how Kulana can help your organisation thrive in the digital age.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="#contact-form"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md transition-all hover:opacity-90"
                    style={{ fontFamily: MF, fontWeight: 600, background: "#200044", color: "#ffffff", fontSize: "13px" }}
                  >
                    Let&apos;s Talk <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/#services"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md border transition-all hover:bg-white/20"
                    style={{ fontFamily: MF, fontWeight: 600, color: "#200044", borderColor: "#200044", fontSize: "13px" }}
                  >
                    Explore Our Services <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Partners */}
        <section style={{ background: "#ffffff" }}>
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

            <div className="mb-6">
              <span className="tracking-normal uppercase"
                style={{ fontFamily: MF, fontWeight: 600, color: "#000000", fontSize: "clamp(13px, 1vw, 14px)" }}>
                Technology Partners
              </span>
              <div className="w-full h-px mt-3" style={{ background: "#000000" }} />
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-6 items-start">
              <h2 className="leading-tight"
                style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(18px, 1.8vw, 26px)" }}>
                Powered by World-Class<br />Platforms
              </h2>
              <p className="lg:pt-2"
                style={{ fontFamily: MF, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1.2vw, 18px)", lineHeight: "1.4" }}>
                We hold certified partnerships with leading global technology
                vendors, giving you access to best-in-class solutions backed
                by proven technologies.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-between gap-8 lg:gap-10">
              <Image src="/images/Links_homepage/DELL_logo_384x75px.svg" alt="Dell" width={150} height={30}
                className="object-contain h-11 w-auto" style={{ filter: LOGO_FILTER }} unoptimized />
              <Image src="/images/Links_homepage/HubSpot_logo_384x75px.svg" alt="HubSpot" width={170} height={30}
                className="object-contain h-11 w-auto" style={{ filter: LOGO_FILTER }} unoptimized />
              <Image src="/images/Links_homepage/Microsoft_logo_384x75px.svg" alt="Microsoft" width={190} height={30}
                className="object-contain h-11 w-auto" style={{ filter: LOGO_FILTER }} unoptimized />
              <Image src="/images/Links_homepage/Temenos_logo_384x75px.svg" alt="Temenos" width={190} height={30}
                className="object-contain h-11 w-auto" style={{ filter: LOGO_FILTER }} unoptimized />
              <Image src="/images/Links_homepage/WSO2_logo_384x75px.svg" alt="WSO2" width={150} height={30}
                className="object-contain h-11 w-auto" style={{ filter: LOGO_FILTER }} unoptimized />
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
