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
  title: "Kulana IT Solutions | Technology Value Creators",
  description:
    "End-to-end IT solutions and consultancy for enterprises across Africa. Core banking, ERP/CRM, data center, cybersecurity, analytics, and digital integrations.",
  keywords:
    "IT solutions Africa, IT consultancy Ghana, core banking, ERP CRM, cybersecurity, data center, digital transformation",
  openGraph: {
    title: "Kulana IT Solutions",
    description: "Technology Value Creators",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full">
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
