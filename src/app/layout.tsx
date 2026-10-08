import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PrimaryNavigation } from "@/components/home-image-navigation";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kingsoloinvestco.com"),
  title: {
    default: "King Solomon Investment & Supplies ltd",
    template: "%s | King Solomon Investment & Supplies ltd",
  },
  description: "Real estate, land, building supplies, and construction service inquiries with King Solomon Investment & Supplies ltd.",
  openGraph: {
    title: "King Solomon Investment & Supplies ltd",
    description: "A practical partner for real estate, land, building supplies, and construction services.",
    type: "website",
    locale: "en_GH",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <PrimaryNavigation />
        <div id="main-content">{children}</div>
        <SiteFooter />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
