// ============================================================================
// İç sayfa metinleri (Hizmetler, Hakkımızda, Projeler, Blog, İletişim)
// Mobil / iOS stüdyo konumlandırması. Eski kurumsal metinler translations.ts'te
// duruyor; buradaki metinler yeni tasarımda onların yerini alır.
// ============================================================================

import type { Language } from "@/lib/translations";

type L10n = Record<Language, string>;

export const servicesCopy = {
  hero: {
    eyebrow: { TR: "Hizmetler", EN: "Services" } as L10n,
    title: { TR: "Uygulamanız için", EN: "Everything your app" } as L10n,
    highlight: { TR: "tek ekip.", EN: "needs, one team." } as L10n,
    description: {
      TR: "Fikir aşamasından App Store'daki güncellemelere kadar: tasarım, native iOS geliştirme, backend, yapay zekâ ve yayın süreci. Hepsi aynı masada.",
      EN: "From the first idea to updates on the App Store: design, native iOS, backend, AI and launch. All at the same table.",
    } as L10n,
  },
  process: {
    eyebrow: { TR: "Nasıl çalışıyoruz", EN: "How we work" } as L10n,
    title: { TR: "Belirsizlik yok,", EN: "No guesswork," } as L10n,
    highlight: { TR: "dört net adım.", EN: "four clear steps." } as L10n,
  },
  other: {
    eyebrow: { TR: "Diğer uzmanlık alanlarımız", EN: "Other expertise" } as L10n,
    title: { TR: "Mobilin ötesinde de", EN: "Beyond mobile," } as L10n,
    highlight: { TR: "yanınızdayız.", EN: "too." } as L10n,
    description: {
      TR: "Uygulamanızın arkasında yapay zekâ, veri, IoT veya özel bir sistem gerekiyorsa bu alanlarda da proje geliştiriyoruz.",
      EN: "If your app needs AI, data, IoT or a custom system behind it, we build those too.",
    } as L10n,
  },
};

export const aboutCopy = {
  hero: {
    eyebrow: { TR: "Hakkımızda", EN: "About" } as L10n,
    title: { TR: "Antalya'dan", EN: "From Antalya" } as L10n,
    highlight: { TR: "App Store'a.", EN: "to the App Store." } as L10n,
    description: {
      TR: "WOOWCODE, 2024'te Antalya'da kurulmuş bir mobil uygulama stüdyosu. Kendi uygulamalarımızı tasarlayıp App Store'da yayınlıyor, aynı özeni müşterilerimizin ürünlerine taşıyoruz.",
      EN: "WOOWCODE is a mobile app studio founded in Antalya in 2024. We design and ship our own apps to the App Store, and bring the same care to our clients' products.",
    } as L10n,
  },
  story: {
    eyebrow: { TR: "Hikâyemiz", EN: "Our story" } as L10n,
    title: { TR: "Önce kendimiz için yaptık.", EN: "We built for ourselves first." } as L10n,
    paragraphs: [
      {
        TR: "Bir uygulamayı App Store'a çıkarmanın ne demek olduğunu en iyi, kendi uygulamanızı çıkararak öğrenirsiniz: tasarım kararları, inceleme süreci, gizlilik etiketleri, ilk kullanıcı geri bildirimleri.",
        EN: "The best way to learn what shipping an app really takes is to ship your own: design decisions, App Review, privacy labels, the first user feedback.",
      },
      {
        TR: "Starlit ve DocuVault bu yolun ürünleri. Bugün aynı deneyimi, uygulama fikri olan girişimlere ve işletmelere sunuyoruz.",
        EN: "Starlit and DocuVault came out of that path. Today we bring the same experience to startups and businesses with an app idea.",
      },
    ] as L10n[],
  },
  mission: {
    title: { TR: "Misyon", EN: "Mission" } as L10n,
    body: {
      TR: "Fikirleri, insanların her gün severek kullandığı, hızlı ve güvenilir mobil uygulamalara dönüştürmek.",
      EN: "Turn ideas into fast, reliable mobile apps that people love to use every day.",
    } as L10n,
  },
  vision: {
    title: { TR: "Vizyon", EN: "Vision" } as L10n,
    body: {
      TR: "Türkiye'den dünyaya, App Store'da kalitesiyle tanınan uygulamalar çıkaran bir stüdyo olmak.",
      EN: "To be a studio from Türkiye known worldwide for the quality of its apps on the App Store.",
    } as L10n,
  },
  expertise: {
    eyebrow: { TR: "Uzmanlık", EN: "Expertise" } as L10n,
    title: { TR: "Ekibin", EN: "What the team" } as L10n,
    highlight: { TR: "uzmanlıkları.", EN: "is great at." } as L10n,
    items: [
      { title: { TR: "iOS & SwiftUI", EN: "iOS & SwiftUI" }, skills: ["Swift", "SwiftUI", "WidgetKit", "SwiftData"] },
      { title: { TR: "Ürün & UI/UX tasarımı", EN: "Product & UI/UX" }, skills: ["Human Interface Guidelines", "Prototype", "Design system"] },
      { title: { TR: "Backend & bulut", EN: "Backend & cloud" }, skills: ["CloudKit", "Node.js", "PostgreSQL", "API"] },
      { title: { TR: "Yapay zekâ & veri", EN: "AI & data" }, skills: ["Core ML", "LLM", "Computer Vision", "Python"] },
    ] as { title: L10n; skills: string[] }[],
  },
  values: {
    eyebrow: { TR: "Değerler", EN: "Values" } as L10n,
  },
};

export const projectsCopy = {
  hero: {
    eyebrow: { TR: "Projeler", EN: "Work" } as L10n,
    title: { TR: "Yayında olanlar,", EN: "What's live," } as L10n,
    highlight: { TR: "yolda olanlar.", EN: "what's next." } as L10n,
    description: {
      TR: "App Store'daki kendi uygulamalarımız ve yapay zekâ, görüntü işleme ve IoT alanlarında geliştirdiğimiz projeler.",
      EN: "Our own apps on the App Store, plus projects we've built in AI, computer vision and IoT.",
    } as L10n,
  },
  apps: {
    eyebrow: { TR: "App Store'da", EN: "On the App Store" } as L10n,
    title: { TR: "Kendi uygulamalarımız", EN: "Our own apps" } as L10n,
  },
  rnd: {
    eyebrow: { TR: "Ar-Ge & vaka çalışmaları", EN: "R&D & case studies" } as L10n,
    title: { TR: "Ürettiğimiz", EN: "Systems we've" } as L10n,
    highlight: { TR: "diğer sistemler.", EN: "built." } as L10n,
  },
};

export const blogCopy = {
  hero: {
    eyebrow: { TR: "Blog", EN: "Blog" } as L10n,
    title: { TR: "Notlar &", EN: "Notes &" } as L10n,
    highlight: { TR: "rehberler.", EN: "guides." } as L10n,
    description: {
      TR: "Ürün geliştirme, yapay zekâ ve teknoloji üzerine yazılarımız.",
      EN: "Writing on product development, AI and technology.",
    } as L10n,
  },
  featured: { TR: "Öne çıkan", EN: "Featured" } as L10n,
  all: { TR: "Tüm yazılar", EN: "All posts" } as L10n,
};

export const contactCopy = {
  hero: {
    eyebrow: { TR: "İletişim", EN: "Contact" } as L10n,
    title: { TR: "Uygulamanızı", EN: "Let's talk about" } as L10n,
    highlight: { TR: "konuşalım.", EN: "your app." } as L10n,
    description: {
      TR: "Fikrinizi birkaç cümleyle anlatın; bir iş günü içinde dönüp ücretsiz keşif görüşmesi planlayalım. Acelesi olanlar için WhatsApp her zaman açık.",
      EN: "Tell us your idea in a few sentences; we'll reply within one business day and plan a free discovery call. In a hurry? WhatsApp is always open.",
    } as L10n,
  },
};
