"use client";

const stats = [
  {
    label: "ISO Certified",
    sub: "Quality & Information Security",
  },
  {
    label: "Technology Partners",
    sub: "World-Class Technology Vendors",
  },
  {
    label: "Ghana & Mauritius",
    sub: "Dual-Country Offices",
  },
  {
    label: "Industry Expertise",
    sub: "Banking, Finance & Enterprise",
  },
];

export default function ProvenResults() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Label + rule */}
        <div className="flex items-center gap-4 mb-10">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 whitespace-nowrap">
            Strategic Growth
          </span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Heading + description */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-start">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
            Proven Results.<br />Real Impact.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed lg:pt-2">
            Your company's technology is your competitive edge. Kulana takes a
            holistic approach to your organisation's digital transformation. We
            are the technology experts you need to drive your business forward.
          </p>
        </div>

        {/* Four credentials */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-sm font-black uppercase tracking-wide text-gray-900 mb-2">
                {s.label}
              </p>
              <p className="text-sm text-gray-500 leading-snug">{s.sub}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
