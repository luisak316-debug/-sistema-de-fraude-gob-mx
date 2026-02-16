import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://portal-gob-mx.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Portal Gob MX",
  description: "El portal gob.mx permite consultar el listado de trámites y programas sociales federales disponibles y a los cuales tienes acceso.",
  icons: {
    icon: "https://ext.same-assets.com/2098432521/920971351.ico",
  },
  openGraph: {
    title: "Portal Gob MX",
    description: "El portal gob.mx permite consultar el listado de trámites y programas sociales federales disponibles y a los cuales tienes acceso.",
    url: siteUrl,
    siteName: "Portal Gob MX",
    images: [{ url: `${siteUrl}/api/og`, width: 1200, height: 630, alt: "Portal Gob MX" }],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portal Gob MX",
    description: "El portal gob.mx permite consultar el listado de trámites y programas sociales federales disponibles y a los cuales tienes acceso.",
    images: [`${siteUrl}/api/og`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* Open Graph para WhatsApp y redes: URL absolutas */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Portal Gob MX" />
        <meta property="og:title" content="Portal Gob MX" />
        <meta property="og:description" content="El portal gob.mx permite consultar el listado de trámites y programas sociales federales disponibles y a los cuales tienes acceso." />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={`${siteUrl}/api/og`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="es_MX" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portal Gob MX" />
        <meta name="twitter:description" content="El portal gob.mx permite consultar el listado de trámites y programas sociales federales disponibles y a los cuales tienes acceso." />
        <meta name="twitter:image" content={`${siteUrl}/api/og`} />
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
