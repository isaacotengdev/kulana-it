import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

// Content-Security-Policy.
// 'unsafe-inline' is required for Next.js App Router hydration and inline style={{}} props.
// 'unsafe-eval' is only needed by the dev/React-refresh runtime.
// HubSpot tracking (hs-scripts.com) dynamically loads several sub-scripts and sends
// analytics pings — all domains below are the minimum required for it to function.
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://js.hs-scripts.com https://js.hsforms.net https://js.hscta.net https://js.hscollectedforms.net https://js.hs-banner.com`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://track.hubspot.com https://forms.hubspot.com",
  "font-src 'self'",
  "connect-src 'self' https://forms.hubspot.com https://api.hubspot.com https://perf.hubspot.com https://track.hubspot.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
]
  .join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy",   value: csp },
  // DENY matches frame-ancestors 'none' in CSP above; SAMEORIGIN would contradict it.
  { key: "X-Frame-Options",           value: "DENY" },
  { key: "X-Content-Type-Options",    value: "nosniff" },
  { key: "X-DNS-Prefetch-Control",    value: "off" },
  { key: "Referrer-Policy",           value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy",        value: "camera=(), microphone=(), geolocation=(), payment=(), bluetooth=(), usb=(), interest-cohort=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      { source: "/request-quote", destination: "/#contact", permanent: true },
      { source: "/data-center-security-operations-centre", destination: "/our-services", permanent: true },
      { source: "/project-management-consulting", destination: "/our-services", permanent: true },
      { source: "/ai-cloud-ai", destination: "/ai", permanent: true },
    ];
  },
};

export default nextConfig;
