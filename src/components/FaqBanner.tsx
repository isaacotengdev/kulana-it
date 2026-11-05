import Image from "next/image";

const MF = "var(--font-manrope), sans-serif";

type FaqBannerProps = {
  image: string;
  title: string;
  text: string;
  points: string[];
};

// Code-built equivalent of the 400×500 FAQ banner artwork used on the other service pages
export default function FaqBanner({ image, title, text, points }: FaqBannerProps) {
  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden lg:mt-14 @container"
      style={{ aspectRatio: "4/5", maxWidth: "320px", background: "linear-gradient(160deg, #f7f5ff 0%, #ece8fb 55%, #dfe9fb 100%)" }}
    >
      <Image
        src={image}
        alt=""
        fill
        className="object-cover"
        sizes="320px"
        style={{ objectPosition: "70% center", opacity: 0.32, mixBlendMode: "luminosity" }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(115deg, rgba(247,245,255,0.97) 0%, rgba(247,245,255,0.85) 45%, rgba(236,232,251,0.25) 100%)" }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(circle at 95% 62%, rgba(87,217,212,0.30) 0%, rgba(150,170,255,0.22) 28%, transparent 58%)" }}
      />
      <div className="relative h-full flex flex-col" style={{ padding: "11cqw" }}>
        <div style={{ width: "19cqw", height: "3px", background: "#57D9D4", borderRadius: "2px", marginBottom: "7cqw" }} />
        <p style={{ fontFamily: MF, fontWeight: 600, color: "#200044", fontSize: "11cqw", lineHeight: 1.12, marginBottom: "6cqw" }}>
          {title}
        </p>
        <p style={{ fontFamily: MF, fontWeight: 400, color: "#3d2a5c", fontSize: "5.1cqw", lineHeight: 1.35 }}>
          {text}
        </p>
        <ul className="mt-auto" style={{ display: "grid", gap: "0.5cqw", marginBottom: "2cqw" }}>
          {points.map((point) => (
            <li key={point} className="uppercase" style={{ fontFamily: MF, fontWeight: 500, color: "#200044", fontSize: "5.1cqw" }}>
              <span style={{ color: "#57D9D4", marginRight: "1.5cqw" }}>→</span>{point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
