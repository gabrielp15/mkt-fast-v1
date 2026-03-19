import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ContactWidget } from "@/components/landing/ContactWidget";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Fast MKT - Marketing Rápido",
  description: "Serviços de marketing ágil e eficiente.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        {children}
        <ContactWidget />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
