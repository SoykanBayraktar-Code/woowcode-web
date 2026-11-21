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
  /** External pages owned by the app itself (its own website, legal pages). */
  links?: { website?: string; privacy?: string; terms?: string; supportEmail?: string };
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
    // Metinler Portföyüm deposundaki README (Ücretsiz/Pro tablosu) ve App Store metinleriyle uyumlu.
    // Kural: portföylerde fiyat yok; abonelik fiyatı sitede yazılmaz (App Store'da görünür).
    slug: "portfoyum",
    name: "Portföyüm",
    status: "coming-soon",
    tagline: {
      TR: "Emlakçılar için portföy paylaşım ağı.",
      EN: "The listing-sharing network for real estate agents.",
    },
    description: {
      TR: "Portföyüm, emlak danışmanlarının portföylerini yalnızca meslektaşlarıyla paylaştığı bir ağ. Yeni portföyleri tam ekran akışta kaydırarak keşfedin, sahadayken yakınınızdakileri haritada görün, kendi portföylerinizi ücretsiz paylaşın.",
      EN: "Portföyüm is a network where real estate agents share their listings only with fellow agents. Swipe through new listings in a full-screen feed, see what's nearby on the map while in the field, and share your own listings for free.",
    },
    appStoreId: undefined, // TODO: Yayına çıkınca 6837660427 yazılacak
    platforms: ["iPhone"],
    category: { TR: "İş", EN: "Business" },
    accent: { from: "#1E2A78", to: "#5B8CFF", glow: "rgba(91, 140, 255, 0.45)" },
    hasIcon: true,
    screenshots: 6,
    manifesto: {
      lead: {
        TR: "Doğru portföy çoğu zaman bir meslektaşınızda.",
        EN: "The right listing is often with a colleague.",
      },
      statement: {
        TR: "Portföyüm, onu saniyeler içinde önünüze getirir.",
        EN: "Portföyüm puts it in front of you in seconds.",
      },
      principles: [
        {
          title: { TR: "Yalnızca emlakçılar", EN: "Agents only" },
          body: {
            TR: "Ağda yalnızca emlak danışmanları var. Portföyler meslektaşlar arasında paylaşılır, müşteri ilanı değildir.",
            EN: "Only real estate agents are on the network. Listings are shared between colleagues, not published as consumer ads.",
          },
        },
        {
          title: { TR: "Fiyat yok, konuşma var", EN: "No prices, just conversations" },
          body: {
            TR: "Portföylerde fiyat yazmaz. Detayları ve fiyatı portföy sahibiyle doğrudan konuşursunuz.",
            EN: "Listings carry no price. You discuss the details and the price directly with the listing owner.",
          },
        },
        {
          title: { TR: "Paylaşmak ücretsiz", EN: "Sharing is free" },
          body: {
            TR: "Apple Kimliğinizle bir dokunuşta üye olun; portföylerinizi ücretsiz paylaşın ve düzenleyin.",
            EN: "Join in one tap with your Apple Account; share and edit your listings for free.",
          },
        },
      ],
    },
    showcases: [
      {
        id: "feed",
        eyebrow: { TR: "Akış", EN: "Feed" },
        title: { TR: "Yeni portföyler, tek kaydırmada.", EN: "New listings, one swipe away." },
        body: {
          TR: "Meslektaşlarınızın paylaştığı portföyler tam ekran fotoğraflarla akar. Kaydırın, beğenin, kaydedin; dikkatinizi çekeni tek dokunuşla açın.",
          EN: "Listings shared by your colleagues flow by in full-screen photos. Swipe, like and save; open the one that catches your eye with a single tap.",
        },
        bullets: [
          { TR: "Yeni, Takip ve Popüler sekmeleri", EN: "New, Following and Popular tabs" },
          { TR: "m², oda sayısı ve kredi uygunluğu ilk bakışta", EN: "Floor area, rooms and mortgage eligibility at first glance" },
          { TR: "Emlakçıları takip edin, yeni portföylerini kaçırmayın", EN: "Follow agents and never miss their new listings" },
        ],
        screen: 1,
      },
      {
        id: "detail",
        eyebrow: { TR: "Portföy", EN: "Listing" },
        title: { TR: "Her bilgi, tek bakışta.", EN: "Every detail, at a glance." },
        body: {
          TR: "Metrekare, oda ve bina bilgisi, konum, kredi durumu ve özellikler ayrı cam kartlarda. Portföy sahibinin kartından bir dokunuşla arayın ya da mesaj atın.",
          EN: "Floor area, room and building details, location, mortgage status and features sit on separate glass cards. Call or message the owner with one tap from their card.",
        },
        bullets: [
          { TR: "Kendi portföyünüzde karta dokunun, o bölümü hemen düzenleyin", EN: "On your own listing, tap a card to edit that section" },
          { TR: "Adım adım portföy ekleme", EN: "Step-by-step listing creation" },
          { TR: "Kredi hesaplayıcı", EN: "Mortgage calculator" },
        ],
        screen: 2,
      },
      {
        id: "map",
        eyebrow: { TR: "Saha Haritası", EN: "Field Map" },
        badge: { TR: "Pro", EN: "Pro" },
        title: { TR: "Sahada en yakını, anında.", EN: "What's nearby, right in the field." },
        body: {
          TR: "Müşterinizle sahadayken yakındaki portföyleri ve konumunu paylaşan meslektaşlarınızı canlı haritada görün. Saha Modu, en yakın portföyü Dynamic Island'da gösterir.",
          EN: "When you're out with a client, see nearby listings and colleagues sharing their location on a live map. Field Mode shows the nearest listing in the Dynamic Island.",
        },
        bullets: [
          { TR: "Seçtiğiniz yarıçaptaki portföyler", EN: "Listings within the radius you choose" },
          { TR: "Konumunuzu meslektaşlarınızla paylaşın, istediğiniz an kapatın", EN: "Share your location with colleagues and turn it off any time" },
          { TR: "Kilit ekranı ve Dynamic Island'da Saha Modu", EN: "Field Mode on the Lock Screen and in the Dynamic Island" },
        ],
        screen: 3,
      },
      {
        id: "search",
        eyebrow: { TR: "Arama", EN: "Search" },
        title: { TR: "Aradığınızı saniyede bulun.", EN: "Find it in seconds." },
        body: {
          TR: "Bölge, mahalle ve oda sayısıyla arayın; satılık, kiralık, emlak tipi ve kredi uygunluğuyla daraltın.",
          EN: "Search by district, neighbourhood and rooms; narrow down by sale, rent, property type and mortgage eligibility.",
        },
        bullets: [
          { TR: "İlçe önerileri ve hızlı filtreler", EN: "District suggestions and quick filters" },
          { TR: "Gelişmiş filtre ekranı", EN: "Advanced filter screen" },
          { TR: "En yeni, metrekare ve popülerliğe göre sıralama", EN: "Sort by newest, floor area and popularity" },
        ],
        screen: 4,
      },
    ],
    extra: [
      {
        title: { TR: "Tüm portföyler tek yerde", EN: "All listings in one place" },
        body: {
          TR: "Genel portföyler ekranında bütün ağı büyük kartlarla gezin; işlem ve emlak tipine göre filtreleyin.",
          EN: "Browse the whole network on large cards and filter by deal and property type.",
        },
      },
      {
        title: { TR: "Portföyüm ekranı", EN: "My Portfolio" },
        body: {
          TR: "Kendi portföyleriniz, görüntülenme ve beğeni sayılarınız, kaydettikleriniz tek ekranda.",
          EN: "Your listings, view and like counts, and saved listings on one screen.",
        },
      },
      {
        title: { TR: "iCloud ile senkron", EN: "Synced with iCloud" },
        body: {
          TR: "Yeni bir portföy eklendiğinde akış kendiliğinden yenilenir.",
          EN: "The feed refreshes on its own when a new listing is added.",
        },
      },
    ],
    plans: {
      free: {
        title: { TR: "Ücretsiz", EN: "Free" },
        items: [
          { TR: "Portföy akışı, genel portföyler ve gelişmiş arama", EN: "Listing feed, all listings and advanced search" },
          { TR: "Portföy paylaşma ve düzenleme", EN: "Sharing and editing your listings" },
          { TR: "m², oda, kat, kredi uygunluğu, özellikler ve fotoğraflar", EN: "Floor area, rooms, floor, mortgage eligibility, features and photos" },
          { TR: "İlçe ve yaklaşık konum", EN: "District and approximate location" },
        ],
      },
      plus: {
        title: { TR: "Portföyüm Pro", EN: "Portföyüm Pro" },
        items: [
          { TR: "Tam konum ve yol tarifi", EN: "Exact location and directions" },
          { TR: "Portföy sahibinin adı, telefonu ve e-postası", EN: "Listing owner's name, phone and email" },
          { TR: "Beğenme, kaydetme, paylaşma ve emlakçı takibi", EN: "Likes, saves, sharing and following agents" },
          { TR: "Kredi hesaplayıcı", EN: "Mortgage calculator" },
          { TR: "Canlı saha haritası, konum paylaşımı ve Saha Modu", EN: "Live field map, location sharing and Field Mode" },
        ],
        note: {
          TR: "Aylık ya da yıllık abonelik; ilk abonelikte 7 gün ücretsiz deneme.",
          EN: "Monthly or yearly subscription; new subscribers get a 7-day free trial.",
        },
      },
    },
    features: [],
    privacy: [
      { TR: "Apple ile Giriş, ayrı şifre yok", EN: "Sign in with Apple, no extra password" },
      { TR: "Veriler Apple iCloud'da saklanır", EN: "Data is stored in Apple iCloud" },
      { TR: "Tam konum ve iletişim bilgisi korumalı kayıtlarda", EN: "Exact location and contact details in protected records" },
      { TR: "Konum paylaşımı sizin elinizde", EN: "You control location sharing" },
      { TR: "Reklam, izleme ve veri satışı yok", EN: "No ads, tracking or data selling" },
    ],
    hasPolicy: true,
  },
  {
    // Metinler Starlit deposundaki docs/APP-STORE-METINLERI.md ve DURUM.md ile uyumlu.
    // Kural (App Store): tedavi/iyileşme vaadi yok; "terapist", "kanıta dayalı", "bilimsel" geçmez.
    slug: "starlit",
    name: "Starlit",
    status: "coming-soon",
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
        badge: { TR: "Yakında · Cihaz üstü yapay zekâ", EN: "Coming soon · On-device AI" },
        title: { TR: "Cebinde, seni dinleyen bir rehber.", EN: "A guide in your pocket that listens." },
        body: {
          TR: "Yakında Starlit'in rehberi, Core AI ile telefonunda çalışan güçlü bir dil modeliyle (Qwen) düşünecek. Bilişsel davranışçı terapi tekniklerinden esinlenen sorularla düşünceni farklı açılardan görmene yardım edecek ve o an sana uyabilecek küçük adımlar önerecek.",
          EN: "Soon, Starlit's guide will think with a capable language model (Qwen) running on your phone through Core AI. With questions inspired by cognitive behavioural therapy techniques, it will help you see a thought from different angles and suggest small steps that might fit you right now.",
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
    // Metinler DocuVault deposundaki App Store açıklaması (docs/marketing) ve 1.4.0 yenilik notlarıyla uyumlu.
    // Not: Yapay zekâ işlemleri BULUTTA (Supabase + Google Gemini) yapılır; analitik (PostHog) var.
    // Bu yüzden "cihazda" ya da "izleme yok" denmez.
    slug: "docuvault",
    name: "DocuVault",
    status: "live",
    tagline: {
      TR: "Belgeleriniz güvende, saniyeler içinde bulun.",
      EN: "Your documents, safe and found in seconds.",
    },
    description: {
      TR: "DocuVault, kişisel ve iş belgelerinizi tek bir akıllı kasada toplar: fatura, sözleşme, poliçe, kimlik, reçete ve daha fazlası. Yapay zekâ destekli arama ile saniyede bulun, Face ID ile yalnızca size açılan bir alanda saklayın.",
      EN: "DocuVault gathers your personal and work documents in one smart vault: invoices, contracts, policies, IDs, prescriptions and more. Find them in seconds with AI search and keep them in a space only Face ID can open.",
    },
    appStoreId: "6762083376",
    platforms: ["iPhone"],
    category: { TR: "Verimlilik", EN: "Productivity" },
    accent: { from: "#3C4F33", to: "#D39A6A", glow: "rgba(211, 154, 106, 0.42)" },
    hasIcon: true,
    screenshots: 5, // DocuVault sitesindeki gerçek ekranlar (Haziran 2026); dosya adları bulanıklaştırıldı
    links: {
      website: "https://www.appdocuvault.com",
      privacy: "https://www.appdocuvault.com/privacy",
      terms: "https://www.appdocuvault.com/terms",
      supportEmail: "destek@appdocuvault.com",
    },
    manifesto: {
      lead: {
        TR: "Belgeleriniz mailde, WhatsApp'ta, çekmecede.",
        EN: "Your documents live in mail, WhatsApp and a drawer.",
      },
      statement: {
        TR: "DocuVault'ta hepsi aranır, bulunur ve korunur.",
        EN: "In DocuVault they are searched, found and protected.",
      },
      principles: [
        {
          title: { TR: "Tek kasa", EN: "One vault" },
          body: {
            TR: "Tarayın, fotoğraflayın ya da paylaş menüsünden gönderin; her belge aynı kasaya düşer ve kendi kategorisini bulur.",
            EN: "Scan it, snap it or send it from the share sheet; every document lands in the same vault and finds its own category.",
          },
        },
        {
          title: { TR: "Saniyede bulun", EN: "Found in seconds" },
          body: {
            TR: "Dosya adını hatırlamanız gerekmez. \"Mart ayındaki elektrik faturası\" yazın; içerik, tarih ve kategori birlikte aranır.",
            EN: "No need to remember file names. Type \"March electricity bill\"; content, date and category are searched together.",
          },
        },
        {
          title: { TR: "Kontrol sizde", EN: "You stay in control" },
          body: {
            TR: "Face ID kilidi, şifreli depolama, süreli ve iptal edilebilir paylaşım linkleri. Reklam yok, veri satışı yok.",
            EN: "Face ID lock, encrypted storage, expiring and revocable share links. No ads, no data selling.",
          },
        },
      ],
    },
    showcases: [
      {
        id: "vault",
        eyebrow: { TR: "Kasa", EN: "Vault" },
        title: { TR: "Bütün belgeleriniz, tek bir yerde.", EN: "All your documents, in one place." },
        body: {
          TR: "Fatura, kimlik, sözleşme, reçete, sigorta, banka: belgeler hazır kategorilere ayrılır. Üstüne kendi koleksiyonlarınızı kurun; \"Kira Evrakları\", \"Vergi Beyannameleri\" gibi.",
          EN: "Invoices, IDs, contracts, prescriptions, insurance, bank: documents are sorted into ready-made categories. Build your own collections on top, like \"Rental papers\" or \"Tax returns\".",
        },
        bullets: [
          { TR: "8 hazır kategori ve sınırsız özel koleksiyon", EN: "8 ready-made categories and unlimited custom collections" },
          { TR: "Yapay zekâ anlamlı bir ad önerir: \"IMG_4519\" dönemi biter", EN: "AI suggests a meaningful name: no more \"IMG_4519\"" },
          { TR: "Belgeye uzun basın, hızlı önizleme ve işlemler açılsın", EN: "Long-press a document for a quick preview and actions" },
        ],
        screen: 1,
      },
      {
        id: "capture",
        eyebrow: { TR: "İçe aktarma", EN: "Capture" },
        title: { TR: "Her yerden, tek dokunuşla.", EN: "From anywhere, in one tap." },
        body: {
          TR: "Belgeyi kamerayla tarayın; kenarları otomatik bulunur ve çok sayfalı PDF olur. Mail, WhatsApp ya da Safari'den paylaştığınız dosyalar doğrudan kasanıza düşer.",
          EN: "Scan a document with the camera; edges are found automatically and it becomes a multi-page PDF. Files you share from Mail, WhatsApp or Safari land straight in your vault.",
        },
        bullets: [
          { TR: "Belge tarayıcı, kamera, galeri ve dosya", EN: "Document scanner, camera, photos and files" },
          { TR: "Paylaş menüsünden ve uygulama ikonu kısayollarından içe aktarma", EN: "Import from the share sheet and app icon quick actions" },
          { TR: "OCR ile fotoğraftaki yazı aranabilir metne dönüşür", EN: "OCR turns the text in a photo into searchable text" },
        ],
        screen: 2,
      },
      {
        id: "ai",
        variant: "ai",
        eyebrow: { TR: "Yapay zekâ", EN: "AI" },
        badge: { TR: "Doğal dilde arama", EN: "Natural-language search" },
        title: { TR: "Yazın, bulsun. Okumadan anlayın.", EN: "Type it, find it. Understand without reading." },
        body: {
          TR: "Aradığınızı kendi cümlenizle yazın ya da söyleyin; DocuVault içeriği, tarihi ve kategoriyi birlikte değerlendirip doğru belgeyi getirir. Uzun bir sözleşmenin ne dediğini AI özetiyle saniyeler içinde görün.",
          EN: "Type or say what you're looking for in your own words; DocuVault weighs content, date and category together and brings the right document. See what a long contract says in seconds with an AI summary.",
        },
        bullets: [
          { TR: "\"Geçen ayki faturalar\", \"kimlik belgelerim\" gibi doğal sorgular", EN: "Natural queries like \"last month's bills\" or \"my ID documents\"" },
          { TR: "Sesli arama", EN: "Voice search" },
          { TR: "Belge özeti, önemli tarihler ve tutarlar", EN: "Document summary, key dates and amounts" },
          { TR: "Yapay zekâ işlemleri şifreli bağlantıyla bulutta yapılır", EN: "AI processing runs in the cloud over an encrypted connection" },
        ],
        screen: 3,
      },
      {
        id: "collections",
        eyebrow: { TR: "Koleksiyonlar", EN: "Collections" },
        title: { TR: "Kendi düzeninizi kurun.", EN: "Build your own order." },
        body: {
          TR: "Hazır kategorilerin üstüne kendi koleksiyonlarınızı ekleyin: \"Faturalar\", \"Şirket Evrakları\", \"Kira\"... Her birine kendi ikonunu ve rengini verin; ilgili belgeler tek dokunuşla bir arada.",
          EN: "Add your own collections on top of the ready-made categories: \"Bills\", \"Company papers\", \"Rental\"... Give each its own icon and colour; related documents together in one tap.",
        },
        bullets: [
          { TR: "Sınırsız koleksiyon, özel ikon ve renk", EN: "Unlimited collections with custom icon and colour" },
          { TR: "Belgeyi uzun basarak koleksiyona ekleyin", EN: "Long-press a document to add it to a collection" },
          { TR: "Koleksiyonlar ücretsiz planda da sınırsız", EN: "Collections are unlimited on the free plan too" },
        ],
        screen: 4,
      },
      {
        id: "share",
        eyebrow: { TR: "Güvenlik", EN: "Security" },
        title: { TR: "Kasanız, yalnızca size açılır.", EN: "Your vault opens only for you." },
        body: {
          TR: "Face ID, Touch ID ya da PIN ile kilitli bir kasa. Bir belgeyi paylaşmanız gerektiğinde süreli, filigranlı ve istediğiniz an iptal edebileceğiniz bir link gönderin; alıcı uygulama kurmadan tarayıcıda açar.",
          EN: "A vault locked with Face ID, Touch ID or PIN. When you need to share a document, send an expiring, watermarked link you can revoke anytime; the recipient opens it in a browser, no app needed.",
        },
        bullets: [
          { TR: "Teslim makbuzu: linkin ne zaman açıldığını görün", EN: "Delivery receipt: see when the link was opened" },
          { TR: "WhatsApp'a tek dokunuşla gönderim", EN: "Send to WhatsApp in one tap" },
          { TR: "Otomatik karartma: AI önerir, siz onaylarsınız", EN: "Auto-redaction: AI suggests, you approve" },
          { TR: "Face ID / Touch ID ve PIN ile kilit", EN: "Locked with Face ID / Touch ID and PIN" },
        ],
        screen: 5,
      },
    ],
    extra: [
      {
        title: { TR: "Kapsüller (yeni)", EN: "Capsules (new)" },
        body: {
          TR: "Vize, kira, işe giriş, vergi... Her süreç için hazır evrak listesi; eksikleri gişeye gitmeden görün, hepsini tek bir sıralı PDF olarak paylaşın.",
          EN: "Visa, rental, onboarding, tax... A ready-made document list for each process; see what's missing before the counter and share it all as one ordered PDF.",
        },
      },
      {
        title: { TR: "Son-kullanma muhafızı", EN: "Expiry guardian" },
        body: {
          TR: "Kimlik, vize ve poliçelerin bitiş tarihlerini takip edin; \"Yaklaşanlar\" ile vadesi geleni kaçırmayın.",
          EN: "Track expiry dates for IDs, visas and policies; never miss a renewal with \"Upcoming\".",
        },
      },
      {
        title: { TR: "AI belge üretici", EN: "AI document writer" },
        body: {
          TR: "Dilekçe, beyan ve başvuru metinlerini yapay zekâ ile oluşturun; düzenleyip PDF olarak kaydedin.",
          EN: "Generate petitions, declarations and applications with AI; edit and save as PDF.",
        },
      },
      {
        title: { TR: "PDF araçları", EN: "PDF tools" },
        body: {
          TR: "Sayfaları döndürün, sıralayın, silin; filigran ve sayfa numarası ekleyin. Orijinaliniz hep korunur.",
          EN: "Rotate, reorder and delete pages; add watermarks and page numbers. Your original is always kept.",
        },
      },
    ],
    plans: {
      free: {
        title: { TR: "Ücretsiz", EN: "Free" },
        items: [
          { TR: "Belge tarayıcı, kamera, galeri ve dosyadan ekleme", EN: "Scanner, camera, photos and file import" },
          { TR: "Ayda 3 belge için OCR metin tanıma", EN: "OCR text recognition for 3 documents a month" },
          { TR: "50 MB şifreli bulut depolama", EN: "50 MB encrypted cloud storage" },
          { TR: "Kategoriler, koleksiyonlar ve anahtar kelime arama", EN: "Categories, collections and keyword search" },
          { TR: "Hatırlatmalar ve Face ID kilidi", EN: "Reminders and Face ID lock" },
        ],
      },
      plus: {
        title: { TR: "DocuVault Gold", EN: "DocuVault Gold" },
        items: [
          { TR: "Sınırsız OCR", EN: "Unlimited OCR" },
          { TR: "Yapay zekâ ile akıllı arama ve sesli arama", EN: "AI smart search and voice search" },
          { TR: "2 GB şifreli bulut depolama", EN: "2 GB encrypted cloud storage" },
          { TR: "PDF araçları", EN: "PDF tools" },
        ],
        note: {
          TR: "Aylık ve yıllık planlar uygulama içinde.",
          EN: "Monthly and yearly plans are available in the app.",
        },
      },
    },
    features: [],
    privacy: [
      { TR: "Reklam yok, veri satışı yok", EN: "No ads, no data selling" },
      { TR: "Face ID / Touch ID ve PIN kilidi", EN: "Face ID / Touch ID and PIN lock" },
      { TR: "Şifreli bulut depolama", EN: "Encrypted cloud storage" },
      { TR: "Apple ile Giriş desteği", EN: "Sign in with Apple" },
      { TR: "KVKK uyumu", EN: "KVKK (Turkish data protection law) compliant" },
    ],
    hasPolicy: false,
  },
];

export const liveApps = () => apps.filter((a) => a.status === "live");
export const getApp = (slug: string) => apps.find((a) => a.slug === slug);

export const appStoreUrl = (app: AppEntry) =>
  app.appStoreId ? `https://apps.apple.com/app/id${app.appStoreId}` : undefined;
export const iconSrc = (app: AppEntry) => (app.hasIcon ? `/apps/${app.slug}/icon.webp` : undefined);
export const screenshotSrcs = (app: AppEntry) =>
  Array.from({ length: app.screenshots }, (_, i) => `/apps/${app.slug}/screen-${i + 1}.webp`);
