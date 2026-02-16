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
    images: [
      {
        url: "https://ext.same-assets.com/2098432521/3519242953.png",
        width: 400,
        height: 120,
        alt: "Gobierno de México",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portal Gob MX",
    description: "El portal gob.mx permite consultar el listado de trámites y programas sociales federales disponibles y a los cuales tienes acceso.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
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
