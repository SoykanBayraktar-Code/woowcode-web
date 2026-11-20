import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ClientLayout from "@/components/layout/ClientLayout";
import { organizationLd, localBusinessLd, ldJson } from "@/lib/jsonld";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.woowcode.com"),
  title: {
    default: "WOOWCODE | iOS & Mobil Uygulama Stüdyosu — Fikirden App Store'a",
    template: "%s | WOOWCODE",
  },
  description:
    "Antalya merkezli iOS ve mobil uygulama stüdyosu. iPhone uygulamalarını tasarlıyor, SwiftUI ile geliştiriyor ve App Store'da yayınlıyoruz; kendi uygulamalarımız da App Store'da. Ücretsiz keşif görüşmesi.",
  keywords: [
    "iOS uygulama geliştirme",
    "iPhone uygulama yaptırma",
    "mobil uygulama geliştirme",
    "SwiftUI",
    "App Store yayınlama",
    "yazılım ajansı",
    "Antalya yazılım firması",
    "web uygulama geliştirme",
    "mobil uygulama geliştirme",
    "web sitesi yaptırma",
    "SaaS geliştirme",
    "yapay zeka çözümleri",
    "proje bazlı yazılım geliştirme",
    "özel yazılım geliştirme",
    "veri mühendisliği",
    "IoT ve otomasyon",
    "dijital dönüşüm",
  ],
  authors: [{ name: "WOOWCODE" }],
  creator: "WOOWCODE",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.woowcode.com",
    siteName: "WOOWCODE",
    title: "WOOWCODE | iOS & Mobil Uygulama Stüdyosu — Fikirden App Store'a",
    description:
      "iPhone ve mobil uygulamaları tasarlıyor, geliştiriyor ve App Store'da yayınlıyoruz. Kendi uygulamalarımız da App Store'da.",
    // og:image otomatik olarak src/app/opengraph-image.tsx'ten gelir.
  },
  twitter: {
    card: "summary_large_image",
    title: "WOOWCODE | iOS & Mobil Uygulama Stüdyosu — Fikirden App Store'a",
    description:
      "iPhone ve mobil uygulamaları tasarlıyor, geliştiriyor ve App Store'da yayınlıyoruz.",
    // twitter:image otomatik olarak src/app/twitter-image.tsx'ten gelir.
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Sekme ikonları Next.js dosya kuralıyla gelir: src/app/favicon.ico, src/app/icon.svg,
  // src/app/apple-icon.tsx. Adreslere içerik hash'i eklendiği için logo değişince
  // tarayıcı önbelleği eski ikonu göstermez.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA4_ID = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;

  return (
    <html lang="tr">
      <head>
        {/* JSON-LD: Şirket kimliği */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ldJson(organizationLd()) }}
        />
        {/* JSON-LD: Yerel işletme (Antalya yerel SEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ldJson(localBusinessLd()) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientLayout>{children}</ClientLayout>

        {/* Google Analytics 4 */}
        {GA4_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA4_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
