"use client";

const FONT = "var(--font-manrope), sans-serif";

const stats = [
  { label: "ISO Certified",       sub: "Quality & Information Security" },
  { label: "Technology Partners", sub: "World-Class Technology Vendors"  },
  { label: "Ghana & Mauritius",   sub: "Dual-Country Offices"            },
  { label: "Industry Expertise",  sub: "Banking, Finance & Enterprise"   },
];

export default function ProvenResults() {
  return (
    <section className="py-10 lg:py-12" style={{ background: "#ffffff" }}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Label + rule */}
        <div className="mb-6">
          <span
            className="tracking-normal uppercase"
            style={{ fontFamily: FONT, fontWeight: 600, color: "#000000", fontSize: "clamp(13px, 1vw, 14px)" }}
          >
            Strategic Growth
          </span>
          <div className="w-full h-px mt-3" style={{ background: "#000000" }} />
        </div>

        {/* Heading + description */}
        <div className="grid lg:grid-cols-2 gap-8 mb-6 items-start">
          <h2
            className="leading-tight"
            style={{ fontFamily: FONT, fontWeight: 400, color: "#000000", fontSize: "clamp(18px, 1.8vw, 26px)" }}
          >
            Proven Results.<br />Real Impact.
          </h2>
          <p
            className="lg:pt-2"
            style={{ fontFamily: FONT, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1.2vw, 18px)", lineHeight: "1.4" }}
          >
            Your company&apos;s technology is your competitive edge. Kulana takes a
            holistic approach to your organisation&apos;s digital transformation. We
            are the technology experts you need to drive your business forward.
          </p>
        </div>

        {/* Four credentials */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p
                className="uppercase"
                style={{ fontFamily: FONT, fontWeight: 700, color: "#000000", fontSize: "clamp(13px, 1vw, 14px)", lineHeight: "1.5" }}
              >
                {s.label}
              </p>
              <p
                style={{ fontFamily: FONT, fontWeight: 400, color: "#000000", fontSize: "clamp(13px, 1vw, 14px)", lineHeight: "1.5" }}
              >
                {s.sub}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
