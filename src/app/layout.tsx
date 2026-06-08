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
    default: "WOOWCODE | Antalya Yazılım Ajansı — Web, Mobil & Yapay Zekâ",
    template: "%s | WOOWCODE",
  },
  description:
    "Antalya merkezli yazılım ajansı. Web ve mobil uygulama geliştirme, SaaS, yapay zekâ ve veri çözümleri ile fikrinizi uçtan uca hayata geçiriyoruz. Projeniz için ücretsiz keşif görüşmesi.",
  keywords: [
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
    title: "WOOWCODE | Antalya Yazılım Ajansı — Web, Mobil & Yapay Zekâ",
    description:
      "Web ve mobil uygulama geliştirme, SaaS ve yapay zekâ çözümleri. Fikrinizi uçtan uca hayata geçiren Antalya merkezli yazılım ekibi.",
    // og:image otomatik olarak src/app/opengraph-image.tsx'ten gelir.
  },
  twitter: {
    card: "summary_large_image",
    title: "WOOWCODE | Antalya Yazılım Ajansı — Web, Mobil & Yapay Zekâ",
    description:
      "Web & mobil uygulama, SaaS ve yapay zekâ çözümleri. Projenizi uçtan uca hayata geçiriyoruz.",
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/icon.svg",
  },
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
