import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kulana.net"),
  title: {
    default: "Kulana IT Solutions | Technology Value Creators",
    template: "%s | Kulana IT Solutions",
  },
  description:
    "End-to-end IT solutions and consultancy for enterprises, with offices in Ghana and Mauritius. Core Banking, ERP & CRM, Cybersecurity, Integration, Data & AI, and corporate training.",
  keywords:
    "IT solutions Africa, IT consultancy Ghana, core banking software, ERP CRM Africa, cybersecurity Ghana, digital transformation, data analytics, AI solutions, Kulana IT, Kulana Academy",
  authors: [{ name: "Kulana IT Solutions", url: "https://kulana.net" }],
  creator: "Kulana IT Solutions",
  publisher: "Kulana IT Solutions",
  alternates: {
    canonical: "https://kulana.net",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kulana.net",
    siteName: "Kulana IT Solutions",
    title: "Kulana IT Solutions | Technology Value Creators",
    description:
      "Enterprise-grade IT solutions with offices in Ghana and Mauritius — Core Banking, ERP & CRM, Cybersecurity, Integration, Data & AI Intelligence, and Kulana Academy.",
    images: [
      {
        url: "/images/kulana/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Kulana IT Solutions — Technology Value Creators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kulana IT Solutions | Technology Value Creators",
    description:
      "Enterprise-grade IT solutions with offices in Ghana and Mauritius — Core Banking, ERP & CRM, Cybersecurity, Integration, Data & AI, and Kulana Academy.",
    images: ["/images/kulana/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Replace the value below with the code from Google Search Console
  // (Settings → Ownership verification → HTML tag → content="…")
  verification: {
    google: "REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kulana IT Solutions",
  alternateName: "Kulana",
  url: "https://kulana.net",
  logo: "https://kulana.net/logos/logo.svg",
  description:
    "Technology Value Creators — enterprise-grade IT solutions and consultancy, with offices in Ghana and Mauritius.",
  email: "contact@kulana.net",
  telephone: "+233540127400",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "The Rhombus, HRJ5+J6Q, Kanda",
      addressLocality: "Accra",
      addressCountry: "GH",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Ground Floor Nexsky Building, Hotel Avenue, Cybercity",
      addressLocality: "Ebene",
      addressCountry: "MU",
    },
  ],
  sameAs: [
    "https://www.facebook.com/KulanaLtdGhana",
    "https://www.linkedin.com/company/kulanaltd",
  ],
  areaServed: {
    "@type": "GeoShape",
    description: "Ghana and Mauritius",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "IT Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Core & Enterprise Systems" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Integration & Digital Connectivity" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Data & AI Intelligence" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kulana Academy" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
        <Script
          id="hs-script-loader"
          src="//js.hs-scripts.com/9031498.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
