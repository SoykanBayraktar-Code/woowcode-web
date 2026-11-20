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

/** Big opening statement + three principles under the hero. */
export interface AppManifesto {
  lead: L10n;
  statement: L10n;
  principles: { title: L10n; body: L10n }[];
}

/** One alternating "screen + story" band on the app page. */
export interface AppShowcase {
  id: string;
  eyebrow: L10n;
  title: L10n;
  body: L10n;
  bullets: L10n[];
  /** 1-based index into the app's screenshots. */
  screen: number;
  /** Small pill next to the eyebrow, e.g. "Yeni" / "Yakında". */
  badge?: L10n;
  /** "ai" renders the band with an aurora treatment. */
  variant?: "ai";
}

/** A progression shown as steps next to one screen (e.g. Starlit's light phases). */
export interface AppMilestones {
  eyebrow: L10n;
  title: L10n;
  body: L10n;
  steps: { name: L10n; detail: L10n }[];
  screen?: number;
}

export interface AppPlans {
  free: { title: L10n; items: L10n[] };
  plus: { title: L10n; items: L10n[]; note: L10n };
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
  /** Optional rich storytelling blocks for the app page. */
  manifesto?: AppManifesto;
  showcases?: AppShowcase[];
  milestones?: AppMilestones;
  extra?: { title: L10n; body: L10n }[];
  plans?: AppPlans;
}

export const APPLE_EULA_URL = "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/";

export const apps: AppEntry[] = [
  {
    // Metinler Starlit deposundaki docs/APP-STORE-METINLERI.md ve DURUM.md ile uyumlu.
    // Kural (App Store): tedavi/iyileşme vaadi yok; "terapist", "kanıta dayalı", "bilimsel" geçmez.
    slug: "starlit",
    name: "Starlit",
    status: "live",
    tagline: {
      TR: "Sen bir yıldızsın.",
      EN: "You are a star.",
    },
    description: {
      TR: "Starlit, başlamanın zor geldiği günler için yapılmış bir kendine yardım uygulaması. Rutinlerin bir yıldızın çevresinde dönen gezegenler; o yıldız sensin. Kendine yardım ettikçe parlarsın.",
      EN: "Starlit is a self-help app made for the days when starting feels hard. Your routines are planets orbiting a star, and that star is you. You shine as you help yourself.",
    },
    appStoreId: undefined, // TODO: App Store ID'sini ekle
    platforms: ["iPhone"],
    category: { TR: "Sağlık ve Fitness", EN: "Health & Fitness" },
    accent: { from: "#2E2668", to: "#FFD38A", glow: "rgba(255, 196, 120, 0.45)" },
    hasIcon: true,
    screenshots: 6,
    manifesto: {
      lead: {
        TR: "Ne yapman gerektiğini biliyorsun.",
        EN: "You know what you need to do.",
      },
      statement: {
        TR: "Mesele bilmek değil; başlayabilmek.",
        EN: "It's not about knowing; it's about being able to start.",
      },
      principles: [
        {
          title: { TR: "Seri yok, baskı yok", EN: "No streaks, no pressure" },
          body: {
            TR: "Işığın birikir ve hiç azalmaz. Boş geçen bir günde yıldızın sönmez, yalnızca dinlenir.",
            EN: "Your light adds up and never fades. On an empty day your star doesn't go out; it only rests.",
          },
        },
        {
          title: { TR: "Küçük adımlar", EN: "Small steps" },
          body: {
            TR: "Her rutinin bir \"en küçük hali\" var: bir sayfa, iki dakika, tek yudum. Zor bir günde o yeter.",
            EN: "Every routine has a \"smallest version\": one page, two minutes, one sip. On a hard day, that is enough.",
          },
        },
        {
          title: { TR: "Her şey telefonunda", EN: "Everything stays on your phone" },
          body: {
            TR: "Hesap yok, sunucu yok. Ruh halin, notların ve düşünce kayıtların yalnızca cihazında durur.",
            EN: "No account, no server. Your mood, notes and thought records live only on your device.",
          },
        },
      ],
    },
    showcases: [
      {
        id: "orbit",
        eyebrow: { TR: "Yörünge", EN: "Orbit" },
        title: { TR: "Günün, tek bakışta.", EN: "Your day, at a glance." },
        body: {
          TR: "Rutinlerin 24 saatlik bir kadranda yıldızının çevresinde döner. Her gezegen başladığı saatin hizasında durur; sıradaki adım hep altta, tek dokunuş uzağında.",
          EN: "Your routines circle your star on a 24-hour dial. Each planet sits at the hour it starts; the next step is always at the bottom, one tap away.",
        },
        bullets: [
          { TR: "Halka, bulunduğun yerin gerçek gün doğumu ve batımı renklerini taşır", EN: "The ring carries the real sunrise and sunset colours of where you are" },
          { TR: "Zor bir günde yörünge küçülür; yalnızca sıradaki adım öne çıkar", EN: "On a hard day the orbit shrinks and only the next step stands out" },
          { TR: "Odak modu: her şey kaybolur, yalnızca yıldızın ve kalan süre kalır", EN: "Focus mode: everything fades; only your star and the time left remain" },
          { TR: "Kilit ekranı ve Dynamic Island'da canlı sayaç", EN: "Live timer on the Lock Screen and in the Dynamic Island" },
        ],
        screen: 1,
      },
      {
        id: "journal",
        eyebrow: { TR: "Günlük", EN: "Journal" },
        title: { TR: "Dönüp duran düşünceye bir yer.", EN: "A place for the thought that keeps circling." },
        body: {
          TR: "Ruh halini tek dokunuşla kaydet. Aklındaki düşünceyi yaz ve ona başka bir açıdan bak. Bırakamadığın bir şey varsa park et; seçtiğin saate kadar taşıman gerekmez.",
          EN: "Log your mood with one tap. Write down the thought on your mind and look at it from another angle. If something won't let go, park it; you don't have to carry it until the time you choose.",
        },
        bullets: [
          { TR: "Tek dokunuşla ruh hali; zamanla uyku, yürüyüş ve rutinlerle bağını gör", EN: "One-tap mood; over time see how it connects with sleep, walking and routines" },
          { TR: "Beş adımlı düşünce kaydı", EN: "A five-step thought record" },
          { TR: "Düşünceyi park et, ardından bir dakikalık nefes", EN: "Park a thought, then a one-minute breath" },
          { TR: "Kendine mektup: iyi bir gününde yaz, düşük bir gününde sana geri gelsin", EN: "Letter to yourself: write it on a good day; it comes back on a low one" },
        ],
        screen: 2,
      },
      {
        id: "sky",
        eyebrow: { TR: "Gökyüzü", EN: "Sky" },
        title: { TR: "Ayın, bir takımyıldızı.", EN: "Your month, a constellation." },
        body: {
          TR: "Her gün bir yıldız. Kendine yardım ettiğin günler parlar ve birbirine bağlanır; ay sonunda kendi takımyıldızına bakarsın. İyi giden küçük anlar da burada saklanır.",
          EN: "Every day is a star. The days you helped yourself shine and connect; at the end of the month you look at your own constellation. The small good moments are kept here too.",
        },
        bullets: [
          { TR: "Parlayan günler, tam günler ve tamamlanan rutinler", EN: "Shining days, full days and completed routines" },
          { TR: "İyi anların: akşam ritüelinde yazdığın küçük iyi şeyler", EN: "Your good moments: the small good things from your evening ritual" },
          { TR: "Yıldızından her hafta kısa bir mektup", EN: "A short weekly letter from your star" },
        ],
        screen: 3,
      },
      {
        id: "guide-ai",
        variant: "ai",
        eyebrow: { TR: "Yol Gösterici", EN: "Guide" },
        badge: { TR: "Yeni · Cihaz üstü yapay zekâ", EN: "New · On-device AI" },
        title: { TR: "Cebinde, seni dinleyen bir rehber.", EN: "A guide in your pocket that listens." },
        body: {
          TR: "Starlit'in rehberi artık Core AI ile telefonunda çalışan güçlü bir dil modeliyle (Qwen) düşünüyor. Bilişsel davranışçı terapi tekniklerinden esinlenen sorularla düşünceni farklı açılardan görmene yardım eder ve o an sana uyabilecek küçük adımlar önerir.",
          EN: "Starlit's guide now thinks with a capable language model (Qwen) running on your phone through Core AI. With questions inspired by cognitive behavioural therapy techniques, it helps you see a thought from different angles and suggests small steps that might fit you right now.",
        },
        bullets: [
          { TR: "Tamamen cihazda: yazdıkların hiçbir sunucuya gönderilmez", EN: "Fully on-device: nothing you write is sent to a server" },
          { TR: "\"Şu an ne zor?\" sorusundan sana özel üç küçük rutin", EN: "Three small routines tailored to \"What's hard right now?\"" },
          { TR: "Kriz ifadesi fark edildiğinde model susar, destek kartı açılır", EN: "If a crisis phrase appears, the model steps back and a support card opens" },
          { TR: "Bir terapist değil; yolda yanında duran bir arkadaş", EN: "Not a therapist; a companion that walks beside you" },
        ],
        screen: 4,
      },
    ],
    milestones: {
      eyebrow: { TR: "Işık", EN: "Light" },
      title: { TR: "Işığın birikir, hiç azalmaz.", EN: "Your light adds up and never fades." },
      body: {
        TR: "Rutin, ruh hali, not ve düşünce kaydı yıldızına ışık katar. Işık biriktikçe yıldızın büyür.",
        EN: "Routines, moods, notes and thought records add light to your star. As it adds up, your star grows.",
      },
      steps: [
        { name: { TR: "Kıvılcım", EN: "Spark" }, detail: { TR: "Başlangıç", EN: "The beginning" } },
        { name: { TR: "Parıltı", EN: "Glimmer" }, detail: { TR: "30 ışık", EN: "30 light" } },
        { name: { TR: "Yıldız", EN: "Star" }, detail: { TR: "120 ışık", EN: "120 light" } },
        { name: { TR: "Parlak Yıldız", EN: "Bright Star" }, detail: { TR: "350 ışık", EN: "350 light" } },
        { name: { TR: "Kutup Yıldızı", EN: "Pole Star" }, detail: { TR: "800 ışık", EN: "800 light" } },
      ],
      screen: 6,
    },
    extra: [
      {
        title: { TR: "12 Haftalık Yolculuk", EN: "12-Week Journey" },
        body: {
          TR: "İstersen, kendi hızında. Sonunda senin olan dört şey: ilk çizgin, düşünce haritan, ışık çantan ve zor gün planın.",
          EN: "Optional, at your own pace. At the end, four things that are yours: your starting line, your thought map, your light kit and your hard-day plan.",
        },
      },
      {
        title: { TR: "Ana ekran bileşeni, Siri ve Kısayollar", EN: "Widget, Siri and Shortcuts" },
        body: {
          TR: "Yıldızın ana ekranında ve kilit ekranında; rutinlerini Siri ile başlat.",
          EN: "Your star on the Home Screen and Lock Screen; start routines with Siri.",
        },
      },
      {
        title: { TR: "Apple Sağlık ile gözlemler", EN: "Observations with Apple Health" },
        body: {
          TR: "İzin verirsen adım, uyku ve gün ışığı verilerin yalnızca okunur; saklanmaz, hiçbir yere gönderilmez.",
          EN: "If you allow it, your steps, sleep and daylight data are only read; never stored or sent anywhere.",
        },
      },
    ],
    plans: {
      free: {
        title: { TR: "Her zaman ücretsiz", EN: "Always free" },
        items: [
          { TR: "Rutinler ve Yörünge", EN: "Routines and Orbit" },
          { TR: "Odak modu", EN: "Focus mode" },
          { TR: "Tek dokunuşla ruh hali", EN: "One-tap mood" },
          { TR: "Düşünceyi park et, iyi anlar, kendine mektup", EN: "Park a thought, good moments, letter to yourself" },
          { TR: "Zor gün planı ve bütün destek içeriği", EN: "Hard-day plan and all support content" },
        ],
      },
      plus: {
        title: { TR: "Starlit Plus", EN: "Starlit Plus" },
        items: [
          { TR: "12 Haftalık Yolculuğun tamamı", EN: "The whole 12-Week Journey" },
          { TR: "Ruh halinin ayrıntısı: duygu etiketleri, enerji ve uyku", EN: "Mood detail: emotion tags, energy and sleep" },
          { TR: "Sınırsız düşünce kaydı", EN: "Unlimited thought records" },
          { TR: "Yol Gösterici önerileri ve gözlemleri", EN: "Guide suggestions and observations" },
          { TR: "Mektup arşivi", EN: "Letter archive" },
        ],
        note: {
          TR: "Aylık ya da yıllık abonelik; yıllık planda 7 gün ücretsiz deneme.",
          EN: "Monthly or yearly subscription; the yearly plan includes a 7-day free trial.",
        },
      },
    },
    features: [],
    privacy: [
      { TR: "Hesap oluşturma yok", EN: "No account needed" },
      { TR: "Sunucu yok, veri telefonunda", EN: "No server, data stays on your phone" },
      { TR: "Yapay zekâ cihazda çalışır", EN: "AI runs on the device" },
      { TR: "Reklam, izleme ve analitik yok", EN: "No ads, tracking or analytics" },
      { TR: "Sağlık verisi yalnızca okunur, saklanmaz", EN: "Health data is read only, never stored" },
    ],
    notice: {
      TR: "Starlit, bilişsel davranışçı terapi tekniklerinden esinlenen bir kendine yardım aracıdır. Tıbbi cihaz değildir, tanı koymaz ve tedavinin yerini tutmaz. Zor bir dönemden geçiyorsan güvendiğin biriyle ya da bir ruh sağlığı uzmanıyla konuş. Acil bir durumda bulunduğun yerin acil yardım hattını ara.",
      EN: "Starlit is a self-help tool inspired by cognitive behavioural therapy techniques. It is not a medical device, does not diagnose and is not a substitute for treatment. If you are going through a hard time, talk with someone you trust or a mental health professional. In an emergency, call the emergency number where you are.",
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
