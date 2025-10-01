import type { Metadata } from "next";
import "./globals.css";

import { inter, poppins } from "@/lib/fonts";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import BackgroundDecor from "@/components/background-decor";
import AnnouncementBar from "@/components/announcement-bar";
import WhatsAppMenu from "@/components/whatsapp-menu";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "G&L Refrigeración — Instalación, mantenimiento y reparación de aires | Río Cuarto",
  description:
    "Técnicos matriculados. Certificaciones eléctricas ERSEP. Hogares y comercios. Río Cuarto y zona.",
  metadataBase: new URL("https://gylrefrigeracion.vercel.app"),
  openGraph: {
    title: "G&L Refrigeración",
    description:
      "Instalación, mantenimiento y reparación de aires acondicionados y equipos de refrigeración.",
    type: "website",
    url: "https://gylrefrigeracion.vercel.app",
    images: ["/og.jpg"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${poppins.variable}`}>
        <BackgroundDecor />
        {/* Link de salto accesible */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only fixed left-3 top-3 z-[60] rounded-lg bg-[#0E76FF] px-3 py-2 text-white"
        >
          Saltar al contenido
        </a>

        <AnnouncementBar />
        <SiteHeader />

        <main id="main">{children}</main>

        <SiteFooter />
        <Toaster richColors position="top-right" />
        <WhatsAppMenu />
      </body>
    </html>
  );
}
