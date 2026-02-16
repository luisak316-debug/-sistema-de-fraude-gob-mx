import type { Metadata } from "next";

const siteUrl = "https://portal-gob-mx.vercel.app";

export const metadata: Metadata = {
  title: "Admin - Registro de Casos | Portal Gob MX",
  description: "Sistema de administración para asesores. Registro de casos de fraude y consulta por folio o CURP.",
  openGraph: {
    title: "Admin - Registro de Casos | Portal Gob MX",
    description: "Sistema de administración para asesores. Registro de casos de fraude.",
    url: `${siteUrl}/admin`,
    siteName: "Portal Gob MX",
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
