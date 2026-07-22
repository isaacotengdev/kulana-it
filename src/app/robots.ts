import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/learn-more-form"],
      },
    ],
    sitemap: "https://kulana.net/sitemap.xml",
    host: "https://kulana.net",
  };
}
