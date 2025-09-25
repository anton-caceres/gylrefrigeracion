import type { Metadata } from "next";
import "./globals.css";
import { inter, poppins } from "@/lib/fonts";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Toaster } from "sonner";
import BackgroundDecor from "@/components/background-decor";
import AnnouncementBar from "@/components/announcement-bar";
import WhatsAppMenu from "@/components/whatsapp-menu";

export const metadata: Metadata = {
  title: "G&L Refrigeración — Instalación, mantenimiento y reparación de aires | Río Cuarto",
  description: "Técnicos matriculados. Certificaciones eléctricas ERSEP. Hogares y comercios. Río Cuarto y zona.",
  openGraph: {
    title: "G&L Refrigeración",
    description: "Instalación, mantenimiento y reparación de aires acondicionados y equipos de refrigeración.",
    images: ["/og.jpg"]
  },
  icons: { icon: "/favicon.ico" },
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${poppins.variable}`}>
        <BackgroundDecor />
        <AnnouncementBar />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <Toaster richColors position="top-right" />
        <script type="application/ld+json" suppressHydrationWarning
          dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "G&L Refrigeración",
            "telephone": "+54 0 0000 0000",
            "areaServed": "Río Cuarto y zona",
            "openingHours": "Mo-Sa 09:00-19:00"
          })}} />
        <WhatsAppMenu />
      </body>
    </html>
  );
}
