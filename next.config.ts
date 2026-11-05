import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

// Content-Security-Policy.
// 'unsafe-inline' is required for Next.js App Router hydration and inline style={{}} props.
// 'unsafe-eval' is only needed by the dev/React-refresh runtime.
// HubSpot tracking (hs-scripts.com) dynamically loads several sub-scripts (analytics, collected
// forms, chat, pop-ups) and sends analytics pings — the domains below are what it requests.
// js.hsadspixel.net (ad tracking) is intentionally NOT allowed: consent only covers analytics.
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://js.hs-scripts.com https://js.hs-analytics.net https://js.hs-banner.com https://js.hscollectedforms.net https://js.hsforms.net https://js.hscta.net https://js.hubspot.com https://js.usemessages.com`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://track.hubspot.com https://forms.hubspot.com https://*.hsforms.com https://*.hubspot.net https://*.hubspotusercontent-na1.net",
  "font-src 'self'",
  "connect-src 'self' https://*.hubspot.com https://*.hubapi.com https://forms.hscollectedforms.net https://forms.hsforms.com https://*.hs-banner.com https://*.hs-analytics.net https://*.usemessages.com",
  "frame-src https://app.hubspot.com https://*.hubspot.com https://*.hsforms.net https://*.hsforms.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
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
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Don't advertise the framework in an X-Powered-By header
  poweredByHeader: false,
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
