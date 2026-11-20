// ============================================================================
// WOOWCODE — Yayındaki uygulamalarımız (tek kaynak)
//
// Yeni uygulama eklemek için:
//   1. Aşağıdaki `apps` dizisine bir kayıt ekle.
//   2. public/apps/<slug>/ içine icon.webp (512px) + icon.png (256px, SEO için)
//      ve screen-1.webp, screen-2.webp … (iPhone ekran görüntüleri, ~600px genişlik) koy.
//   3. Gizlilik politikası varsa content/<slug>/PRIVACY-POLICY.md ve
//      GIZLILIK-POLITIKASI.md dosyalarını ekleyip `hasPolicy: true` yap.
// Ana sayfa rafı, /apps listesi, /apps/<slug> sayfası, sitemap, JSON-LD ve
// iPhone Safari "Smart App Banner" otomatik güncellenir.
// ============================================================================

import type { Language } from "@/lib/translations";

type L10n = Record<Language, string>;

export interface AppFeature {
  title: L10n;
  body: L10n;
  /** Key of an icon in components/apps/FeatureIcon */
  icon: "orbit" | "heart" | "note" | "sparkles" | "lock" | "cloud" | "timer" | "shield" | "doc" | "scan";
}

export interface AppEntry {
  slug: string;
  name: string;
  status: "live" | "coming-soon";
  tagline: L10n;
  description: L10n;
  /** Numeric App Store ID (from the App Store URL: …/id1234567890). Enables the download button + Smart App Banner. */
  appStoreId?: string;
  platforms: string[];
  category: L10n;
  /** Brand colours of the app — drive its spotlight card and page atmosphere. */
  accent: { from: string; to: string; glow: string };
  /** false → a generated monogram icon is shown until the real icon is added. */
  hasIcon: boolean;
  screenshots: number;
  features: AppFeature[];
  privacy: L10n[];
  /** Short legal / safety notice shown in the support block. */
  notice?: L10n;
  hasPolicy: boolean;
  /** Set while copy has not been confirmed by the team — rendered normally, flagged in code only. */
  draft?: boolean;
}

export const APPLE_EULA_URL = "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/";

export const apps: AppEntry[] = [
  {
    slug: "starlit",
    name: "Starlit",
    status: "live",
    tagline: {
      TR: "Günün, yıldızının çevresinde.",
      EN: "Your day, orbiting your star.",
    },
    description: {
      TR: "Starlit, iPhone için bir kendine yardım uygulaması: küçük rutinler, tek dokunuşla ruh hali kaydı ve düşünce kayıtları. Hesap yok, sunucu yok; yazdıkların telefonunda kalır.",
      EN: "Starlit is a self-help app for iPhone: small routines, one-tap mood logging and thought records. No account, no server; what you write stays on your phone.",
    },
    appStoreId: undefined, // TODO: App Store ID'sini ekle
    platforms: ["iPhone"],
    category: { TR: "Kendine yardım", EN: "Self-care" },
    accent: { from: "#2E2668", to: "#FFD38A", glow: "rgba(255, 196, 120, 0.45)" },
    hasIcon: true,
    screenshots: 3,
    features: [
      {
        icon: "orbit",
        title: { TR: "Gün bir yörünge", EN: "Your day as an orbit" },
        body: {
          TR: "Gün, 24 saatlik bir kadran gibi döner. Her rutin bir gezegendir ve başladığı saatin hizasında durur.",
          EN: "Your day turns like a 24-hour dial. Every routine is a planet, sitting at the hour it starts.",
        },
      },
      {
        icon: "heart",
        title: { TR: "Tek dokunuşla ruh hali", EN: "One-tap mood logging" },
        body: {
          TR: "Nasıl hissettiğini saniyeler içinde kaydet, zaman içindeki değişimi gör.",
          EN: "Log how you feel in seconds and see how it changes over time.",
        },
      },
      {
        icon: "note",
        title: { TR: "Düşünce kayıtları", EN: "Thought records" },
        body: {
          TR: "Bilişsel davranışçı teknikler ilham alınarak hazırlanmış rehberli kayıtlarla düşüncelerini düzenle.",
          EN: "Untangle your thoughts with guided records inspired by cognitive behavioural techniques.",
        },
      },
      {
        icon: "sparkles",
        title: { TR: "Cihaz üstünde yapay zekâ", EN: "On-device AI" },
        body: {
          TR: "Öneriler telefonunda üretilir; yazdıkların hiçbir sunucuya gönderilmez.",
          EN: "Suggestions are generated on your phone; nothing you write is sent to a server.",
        },
      },
      {
        icon: "timer",
        title: { TR: "Kilit ekranında zamanlayıcı", EN: "Lock Screen timer" },
        body: {
          TR: "Devam eden rutinini kilit ekranından takip et.",
          EN: "Follow your running routine right from the Lock Screen.",
        },
      },
      {
        icon: "cloud",
        title: { TR: "İsteğe bağlı iCloud yedeği", EN: "Optional iCloud backup" },
        body: {
          TR: "İstersen kayıtların kendi iCloud hesabının özel alanına yedeklenir. Biz göremeyiz.",
          EN: "If you like, your records back up to the private area of your own iCloud. We can't see them.",
        },
      },
    ],
    privacy: [
      { TR: "Hesap oluşturma yok", EN: "No account needed" },
      { TR: "Sunucu yok, veri telefonunda", EN: "No server, data stays on your phone" },
      { TR: "Reklam, izleme ve analitik yok", EN: "No ads, tracking or analytics" },
      { TR: "Sağlık verisi yalnızca okunur, saklanmaz", EN: "Health data is read only, never stored" },
    ],
    notice: {
      TR: "Starlit tıbbi cihaz değildir, tanı koymaz ve tedavinin yerini tutmaz. Acil bir durumda bulunduğun yerin acil yardım hattını ara.",
      EN: "Starlit is not a medical device, does not diagnose and is not a substitute for treatment. In an emergency, call the emergency number where you are.",
    },
    hasPolicy: true,
  },
  {
    slug: "docuvault",
    name: "DocuVault",
    status: "live",
    // TODO: DocuVault metinlerini ekiple doğrula — isimden yola çıkan taslak.
    draft: true,
    tagline: {
      TR: "Belgelerin, güvenle cebinde.",
      EN: "Your documents, safely in your pocket.",
    },
    description: {
      TR: "DocuVault, önemli belgelerini iPhone'unda tek bir güvenli yerde toplamanı ve ihtiyaç duyduğunda saniyeler içinde bulmanı sağlar.",
      EN: "DocuVault keeps your important documents in one secure place on your iPhone, ready in seconds when you need them.",
    },
    appStoreId: undefined, // TODO: App Store ID'sini ekle
    platforms: ["iPhone"],
    category: { TR: "Verimlilik", EN: "Productivity" },
    accent: { from: "#0B3B66", to: "#2EE6B6", glow: "rgba(46, 230, 182, 0.4)" },
    hasIcon: false, // TODO: public/apps/docuvault/icon.webp ekle
    screenshots: 0, // TODO: ekran görüntülerini ekle
    features: [],
    privacy: [],
    hasPolicy: false, // TODO: gizlilik politikası metni
  },
];

export const liveApps = () => apps.filter((a) => a.status === "live");
export const getApp = (slug: string) => apps.find((a) => a.slug === slug);

export const appStoreUrl = (app: AppEntry) =>
  app.appStoreId ? `https://apps.apple.com/app/id${app.appStoreId}` : undefined;
export const iconSrc = (app: AppEntry) => (app.hasIcon ? `/apps/${app.slug}/icon.webp` : undefined);
export const screenshotSrcs = (app: AppEntry) =>
  Array.from({ length: app.screenshots }, (_, i) => `/apps/${app.slug}/screen-${i + 1}.webp`);
