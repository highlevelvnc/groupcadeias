import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";

import LenisProvider from "@/components/providers/LenisProvider";
import { siteConfig } from "@/lib/site-config";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.legalName} | Vila do Conde`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "group cadeias",
    "group cadeias engenharia e construção",
    "engenharia vila do conde",
    "construção vila do conde",
    "remodelações vila do conde",
    "construção civil portugal",
    "reabilitação edifícios porto",
    "empreiteiro vila do conde",
    "obras vila do conde",
    "gestão de obras norte de portugal",
  ],
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: siteConfig.url,
    siteName: siteConfig.legalName,
    title: `${siteConfig.legalName} | Vila do Conde`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 1200,
        alt: `${siteConfig.legalName} — 25 anos de experiência`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.legalName} | Vila do Conde`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "construction",
};

export const viewport: Viewport = {
  themeColor: "#001E40",
  width: "device-width",
  initialScale: 1,
};

// JSON-LD: organização local — alimenta o "knowledge panel" da Google
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: siteConfig.legalName,
  alternateName: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  logo: `${siteConfig.url}${siteConfig.ogImage}`,
  image: `${siteConfig.url}${siteConfig.ogImage}`,
  telephone: siteConfig.contact.phonePrimaryRaw,
  email: siteConfig.contact.email,
  foundingDate: `${new Date().getFullYear() - siteConfig.yearsOfExperience}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.region,
    postalCode: siteConfig.address.postalCode,
    addressCountry: "PT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.address.geo.lat,
    longitude: siteConfig.address.geo.lng,
  },
  areaServed: [
    { "@type": "City", name: "Vila do Conde" },
    { "@type": "City", name: "Póvoa de Varzim" },
    { "@type": "City", name: "Porto" },
    { "@type": "AdministrativeArea", name: "Norte de Portugal" },
  ],
  sameAs: [siteConfig.social.facebook],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "18:00",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-white text-ink-800 antialiased">
        <LenisProvider>{children}</LenisProvider>
        <Script
          id="ld-json-organization"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
