import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ClientLayout from "@/components/layout/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://woowcode.com"),
  title: {
    default: "WOOWCODE | Kurumsal Yapay Zeka ve Dijital Dönüşüm Çözümleri",
    template: "%s | WOOWCODE",
  },
  description:
    "Endüstriyel yapay zeka, otonom sistemler, dijital ikiz teknolojisi ve stratejik veri mühendisliği ile işletmelerin dijital dönüşümünü hızlandırıyoruz. Türkiye'nin lider teknoloji çözüm ortağı.",
  keywords: [
    "yapay zeka çözümleri",
    "dijital dönüşüm danışmanlığı",
    "endüstriyel otomasyon",
    "otonom drone sistemleri",
    "dijital ikiz teknolojisi",
    "veri mühendisliği",
    "makine öğrenmesi",
    "IoT çözümleri",
    "SaaS geliştirme",
    "kurumsal yazılım",
    "bilgisayarlı görü",
    "edge computing",
  ],
  authors: [{ name: "WOOWCODE" }],
  creator: "WOOWCODE",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "WOOWCODE",
    title: "WOOWCODE | Kurumsal Yapay Zeka ve Dijital Dönüşüm Çözümleri",
    description:
      "Endüstriyel yapay zeka, otonom sistemler ve stratejik veri mühendisliği ile işletmelerin dijital dönüşümünü hızlandırıyoruz.",
    // og:image otomatik olarak src/app/opengraph-image.tsx'ten gelir.
  },
  twitter: {
    card: "summary_large_image",
    title: "WOOWCODE | Kurumsal Yapay Zeka ve Dijital Dönüşüm Çözümleri",
    description:
      "Endüstriyel yapay zeka, otonom sistemler ve veri mühendisliği ile dijital dönüşümünüzü hızlandırın.",
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
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "WOOWCODE",
              url: process.env.NEXT_PUBLIC_SITE_URL || "https://woowcode.com",
              logo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://woowcode.com"}/WOOWCODELOGO.png`,
              description:
                "Endüstriyel yapay zeka, otonom sistemler ve stratejik veri mühendisliği ile işletmelerin dijital dönüşümünü hızlandıran kurumsal teknoloji çözüm ortağı.",
              sameAs: [
                "https://linkedin.com/company/woowcode",
                "https://github.com/woowcode",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "info@woowcode.com",
                contactType: "customer service",
              },
            }),
          }}
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
