import type { MetadataRoute } from "next";

const BASE = "https://kulana.net";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: MetadataRoute.Sitemap = [
    // ── Core pages ────────────────────────────────────────────
    { url: `${BASE}/`,           lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/our-services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/about-us`,   lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/contact-us`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/kulana`,     lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // ── Service pillars ───────────────────────────────────────
    { url: `${BASE}/core-enterprise-systems`,       lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/integration-digital-connectivity`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/data-ai-intelligence`,          lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/kulana-academy`,                lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // ── Core & Enterprise sub-services ───────────────────────
    { url: `${BASE}/core-banking`,    lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/erp-and-crm`,     lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/infrastructure`,  lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/cybersecurity`,   lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // ── Integration sub-services ──────────────────────────────
    { url: `${BASE}/digital-integrations-api-management`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/enterprise-architecture`,             lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/ai-native-product-engineering`,       lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // ── Data & AI sub-services ────────────────────────────────
    { url: `${BASE}/predictive-analysis`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/ai`,                  lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/rpa`,                 lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // ── Academy sub-services ──────────────────────────────────
    { url: `${BASE}/partner-offering`,    lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/digital-transformation`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/cloud-computing`,        lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/next-gen-data-science`,  lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // ── Policies ──────────────────────────────────────────────
    { url: `${BASE}/privacy-policy`,  lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/cookies-policy`,  lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/ims-policy`,      lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  return routes;
}
