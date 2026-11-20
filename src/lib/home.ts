// ============================================================================
// Ana sayfa metinleri (mobil / iOS stüdyo konumlandırması)
// translations.ts'teki `hero` başka sayfalarda da kullanıldığı için ana sayfaya
// özel metinler burada tutulur.
// ============================================================================

import type { Language } from "@/lib/translations";

type L10n = Record<Language, string>;

export const homeHero = {
  title: { TR: "Fikirden", EN: "From idea" } as L10n,
  highlight: { TR: "App Store'a.", EN: "to App Store." } as L10n,
  description: {
    TR: "iPhone ve mobil uygulamaları tasarlıyor, geliştiriyor ve App Store'da yayınlıyoruz. Bunu yalnızca anlatmıyoruz: kendi uygulamalarımız App Store'da.",
    EN: "We design, build and ship iPhone and mobile apps to the App Store. We don't just say it: our own apps are live there.",
  } as L10n,
  ctaApps: { TR: "Uygulamalarımız", EN: "Our apps" } as L10n,
  stats: [
    { value: "SwiftUI", label: { TR: "Native iOS geliştirme", EN: "Native iOS development" } },
    { value: "100%", label: { TR: "Kaynak kod sizin", EN: "Source code is yours" } },
    { value: "24 sa", valueEN: "24h", label: { TR: "İçinde yanıt", EN: "Response time" } },
  ] as { value: string; valueEN?: string; label: L10n }[],
};

export const mobileStack = [
  "Swift", "SwiftUI", "UIKit", "Xcode", "TestFlight", "App Store Connect", "WidgetKit",
  "Live Activities", "SwiftData", "CloudKit", "HealthKit", "Core ML", "Kotlin", "React Native",
];

export const appsShelf = {
  eyebrow: { TR: "Kendi uygulamalarımız", EN: "Our own apps" } as L10n,
  title: { TR: "Önce kendi uygulamalarımızı", EN: "We ship our own apps" } as L10n,
  highlight: { TR: "yayınladık.", EN: "first." } as L10n,
  description: {
    TR: "DocuVault'u ilk eskizden App Store'a kadar biz götürdük; Starlit de aynı yolda, yakında App Store'da. Sizin uygulamanızda da aynı ekip, aynı süreç.",
    EN: "We took DocuVault from the first sketch to the App Store, and Starlit is on the same path, coming soon. Your app gets the same team and the same process.",
  } as L10n,
  all: { TR: "Tüm uygulamalar", EN: "All apps" } as L10n,
};

export const processScene = {
  eyebrow: { TR: "Süreç", EN: "Process" } as L10n,
  title: { TR: "Fikirden App Store'a,", EN: "From idea to App Store," } as L10n,
  highlight: { TR: "dört adımda.", EN: "in four steps." } as L10n,
  steps: [
    {
      key: "wireframe",
      title: { TR: "Keşif & taslak", EN: "Discovery & wireframe" },
      body: {
        TR: "Fikrinizi dinliyor, kapsamı netleştiriyor ve ekranları kâğıt üstünde kuruyoruz. İlk günden ne yapılacağı ve ne kadar süreceği belli.",
        EN: "We listen, sharpen the scope and sketch the screens. From day one you know what we'll build and how long it takes.",
      },
    },
    {
      key: "design",
      title: { TR: "Tasarım", EN: "Design" },
      body: {
        TR: "Apple'ın tasarım ilkelerine uygun, dokunması keyifli bir arayüz. Tıklanabilir prototip ile kodlamadan önce deneyimlersiniz.",
        EN: "An interface that follows Apple's design principles and feels great to touch. You try a clickable prototype before a line of code.",
      },
    },
    {
      key: "code",
      title: { TR: "Geliştirme", EN: "Development" },
      body: {
        TR: "SwiftUI ile native geliştirme, haftalık TestFlight sürümleri. Uygulamayı gelişirken kendi telefonunuzda kullanırsınız.",
        EN: "Native development in SwiftUI with weekly TestFlight builds. You use the app on your own phone while it grows.",
      },
    },
    {
      key: "live",
      title: { TR: "App Store'da yayında", EN: "Live on the App Store" },
      body: {
        TR: "App Store Connect, inceleme süreci, gizlilik etiketleri ve mağaza sayfası bizde. Yayından sonra da bakım ve güncellemelerle yanınızdayız.",
        EN: "We handle App Store Connect, review, privacy labels and the store page, then stay on for maintenance and updates.",
      },
    },
  ] as { key: "wireframe" | "design" | "code" | "live"; title: L10n; body: L10n }[],
};

export const mobileServices = {
  eyebrow: { TR: "Ne yapıyoruz", EN: "What we do" } as L10n,
  title: { TR: "Mobil uygulamanın", EN: "Everything your app" } as L10n,
  highlight: { TR: "her katmanı.", EN: "needs." } as L10n,
  description: {
    TR: "Tek bir ekranın tasarımından App Store'daki güncellemelere kadar, uygulamanızın ihtiyaç duyduğu her şey tek ekipte.",
    EN: "From the design of a single screen to updates on the App Store, everything your app needs in one team.",
  } as L10n,
  items: [
    {
      icon: "phone",
      title: { TR: "Native iOS uygulama", EN: "Native iOS apps" },
      body: {
        TR: "Swift ve SwiftUI ile iPhone ve iPad için hızlı, akıcı ve sisteme tam uyumlu uygulamalar.",
        EN: "Fast, fluid apps for iPhone and iPad built with Swift and SwiftUI, fully at home on the system.",
      },
      tags: ["Swift", "SwiftUI", "iPadOS"],
      big: true,
    },
    {
      icon: "widget",
      title: { TR: "Widget & Live Activities", EN: "Widgets & Live Activities" },
      body: {
        TR: "Ana ekran widget'ları, kilit ekranı ve Dynamic Island deneyimleri.",
        EN: "Home Screen widgets, Lock Screen and Dynamic Island experiences.",
      },
      tags: ["WidgetKit", "ActivityKit"],
    },
    {
      icon: "layers",
      title: { TR: "Android & cross-platform", EN: "Android & cross-platform" },
      body: {
        TR: "Android'e de çıkmanız gerekiyorsa Kotlin veya React Native ile tek ekipten.",
        EN: "Need Android too? Kotlin or React Native, from the same team.",
      },
      tags: ["Kotlin", "React Native"],
    },
    {
      icon: "pen",
      title: { TR: "UI/UX & prototip", EN: "UI/UX & prototyping" },
      body: {
        TR: "Kullanıcı akışları, ekran tasarımları ve tıklanabilir prototipler.",
        EN: "User flows, screen design and clickable prototypes.",
      },
      tags: ["Figma", "Prototype"],
    },
    {
      icon: "server",
      title: { TR: "Backend & API", EN: "Backend & APIs" },
      body: {
        TR: "Senkronizasyon, kullanıcı hesapları, bildirimler ve yönetim paneli.",
        EN: "Sync, user accounts, push notifications and admin dashboards.",
      },
      tags: ["CloudKit", "Supabase", "Push"],
    },
    {
      icon: "sparkles",
      title: { TR: "Yapay zekâ entegrasyonu", EN: "AI integration" },
      body: {
        TR: "Cihaz üstünde çalışan modeller veya bulut LLM'leri ile akıllı özellikler.",
        EN: "Smart features with on-device models or cloud LLMs.",
      },
      tags: ["Core ML", "LLM"],
      big: true,
    },
    {
      icon: "rocket",
      title: { TR: "App Store yayını & ASO", EN: "App Store launch & ASO" },
      body: {
        TR: "İnceleme süreci, mağaza sayfası, ekran görüntüleri ve anahtar kelimeler.",
        EN: "Review process, store page, screenshots and keywords.",
      },
      tags: ["App Store Connect", "ASO"],
    },
  ] as { icon: string; title: L10n; body: L10n; tags: string[]; big?: boolean }[],
};
