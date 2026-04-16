import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kulana IT Solutions | Technology Experts for Your Business",
  description:
    "End-to-end IT solutions and consultancy for enterprises across Africa. Core banking, ERP/CRM, data center, cybersecurity, analytics, and digital integrations.",
  keywords:
    "IT solutions Africa, IT consultancy Ghana, core banking, ERP CRM, cybersecurity, data center, digital transformation",
  openGraph: {
    title: "Kulana IT Solutions",
    description: "Technology experts for your business",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
