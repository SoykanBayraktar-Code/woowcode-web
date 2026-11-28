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

/** A progression shown as steps next to one screen. */
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
  /** App Store Connect campaign link (Analytics → Acquisition → Campaigns). When set, the site's download
   *  button uses it so downloads coming through the website are reported as campaign `ct`. */
  appStoreCampaign?: { pt: string; ct: string };
  platforms: string[];
  category: L10n;
  /** Brand colours of the app — drive its spotlight card and page atmosphere. */
  accent: { from: string; to: string; glow: string };
  /** false → a generated monogram icon is shown until the real icon is added. */
  hasIcon: boolean;
  screenshots: number;
  /** Görseller değişince yeni bir klasör adı ver (ör. "v2"): public/apps/<slug>/<assetDir>/…
   *  Adres değiştiği için tarayıcı ve CDN önbelleği eski görseli göstermez. */
  assetDir?: string;
  /** true → an English set lives in public/apps/<slug>[/<assetDir>]/en/ and is shown when the site language is EN. */
  screenshotsEN?: boolean;
  features: AppFeature[];
  privacy: L10n[];
  /** Short legal / safety notice shown in the support block. */
  notice?: L10n;
  hasPolicy: boolean;
  /** Own terms of use (content/<slug>/KULLANIM-KOSULLARI.md + TERMS-OF-USE.md) and KVKK notice (KVKK-AYDINLATMA-METNI.md) */
  legalPages?: { terms?: boolean; kvkk?: boolean };
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
    // Metinler Ninni deposundaki AppStore/metadata-tr.md ile uyumlu.
    // Kural: abonelik fiyatı sitede yazılmaz (App Store'da görünür). Tıbbi vaat yok.
    slug: "ninni",
    name: "Ninni",
    status: "coming-soon",
    tagline: {
      TR: "Bebeğin uyusun, sen de dinlen.",
      EN: "Your baby sleeps, you get to rest.",
    },
    description: {
      TR: "Ninni, yenidoğan ve bebekler için bir uyku sesleri uygulaması. Gerçek anne sesiyle pış pış, beyaz gürültü ve 13 sakinleştirici ses; bebek ağlarsa sesi kendiliğinden yeniden başlatır, yaşına göre bir sonraki uyku saatini hesaplar. Reklam yok, internet gerekmez.",
      EN: "Ninni is a sleep-sound app for newborns and babies. A real mother's shushing, white noise and 13 soothing sounds; it restarts the sound when your baby cries and works out the next nap from your baby's age. No ads, no internet needed.",
    },
    appStoreId: undefined, // TODO: App Store ID'sini ekle
    platforms: ["iPhone", "Apple Watch"],
    category: { TR: "Sağlık ve Fitness", EN: "Health & Fitness" },
    accent: { from: "#331C5C", to: "#B8A3FF", glow: "rgba(184, 163, 255, 0.45)" },
    hasIcon: true,
    screenshots: 2,
    manifesto: {
      lead: {
        TR: "Gece üçte, kucağında ağlayan bir bebek.",
        EN: "Three in the morning, a crying baby in your arms.",
      },
      statement: {
        TR: "Ninni bir anne gibi pış pışlar.",
        EN: "Ninni shushes like a mother would.",
      },
      principles: [
        {
          title: { TR: "Gerçek anne sesi", EN: "A real mother's voice" },
          body: {
            TR: "Pış pış, bir Türk annesinin gerçek kaydından hazırlandı; yapay bir taklit değil. Gece boyu kesintisiz döner.",
            EN: "The shushing comes from a real Turkish mother's recording, not a synthetic imitation. It loops seamlessly all night.",
          },
        },
        {
          title: { TR: "Önce güvenlik", EN: "Safety first" },
          body: {
            TR: "Güvenli ses sınırı, bebek uyuyunca sesi kısma ve yüksek ses uyarısı herkes için ücretsiz.",
            EN: "A safe volume limit, automatic dimming once your baby sleeps and a loud-volume warning are free for everyone.",
          },
        },
        {
          title: { TR: "Telefonunda kalır", EN: "Stays on your phone" },
          body: {
            TR: "Hesap yok, sunucu yok, reklam yok. Bebeğinle ilgili hiçbir bilgi telefonundan çıkmaz.",
            EN: "No account, no server, no ads. Nothing about your baby ever leaves your phone.",
          },
        },
      ],
    },
    showcases: [
      {
        id: "sounds",
        eyebrow: { TR: "Sesler", EN: "Sounds" },
        title: { TR: "Tek dokunuşla sakinlik.", EN: "Calm in one tap." },
        body: {
          TR: "Bir sese dokun, çalmaya başlasın; başka bir sese geçince önceki yumuşakça kısılır. Ekran kilitliyken de sabaha kadar çalar.",
          EN: "Tap a sound and it starts; switch to another and the previous one fades out. It keeps playing until morning, even with the screen locked.",
        },
        bullets: [
          { TR: "Pış pış, beyaz, pembe ve kahverengi gürültü", EN: "Shushing, white, pink and brown noise" },
          { TR: "Anne karnı, kalp atışı, yağmur, dalgalar, fön, süpürge, araba", EN: "Womb, heartbeat, rain, waves, hair dryer, vacuum, car" },
          { TR: "Sesleri üst üste karıştır, kendi sesini kaydet", EN: "Layer sounds and record your own voice" },
        ],
        screen: 1,
      },
      {
        id: "sleep",
        eyebrow: { TR: "Uyku saati", EN: "Sleep schedule" },
        title: { TR: "Bir sonraki uykuyu bil.", EN: "Know the next nap." },
        body: {
          TR: "Bebekler yaşlarına göre belirli bir süre uyanık kalabilir; bu süre aşılınca fazla yorulur ve uykuya direnir. Ninni bir sonraki uyku saatini hesaplar ve vakti gelmeden haber verir.",
          EN: "Babies can only stay awake so long for their age; past that they get overtired and fight sleep. Ninni works out the next nap and lets you know before it's time.",
        },
        bullets: [
          { TR: "Uyudu ve Uyandı'yı tek dokunuşla kaydet", EN: "Log asleep and awake in one tap" },
          { TR: "Uyku vaktinden 10 dakika önce hatırlatma", EN: "A reminder 10 minutes before sleep time" },
          { TR: "Günlük ve haftalık uyku özeti", EN: "Daily and weekly sleep summary" },
        ],
        screen: 2,
      },
    ],
    plans: {
      free: {
        title: { TR: "Ücretsiz", EN: "Free" },
        items: [
          { TR: "Pış pış ve beyaz gürültü, gece boyu kesintisiz", EN: "Shushing and white noise, all night long" },
          { TR: "Güvenli ses sınırı ve otomatik kısma", EN: "Safe volume limit and automatic dimming" },
          { TR: "Reklam yok", EN: "No ads" },
        ],
      },
      plus: {
        title: { TR: "Ninni Premium", EN: "Ninni Premium" },
        items: [
          { TR: "13 sesin tamamı ve ses karıştırma", EN: "All 13 sounds and layering" },
          { TR: "Ağlama algılama ve otomatik yeniden başlatma", EN: "Cry detection and automatic restart" },
          { TR: "Uyku saati ve hatırlatıcı", EN: "Sleep schedule and reminders" },
          { TR: "Gece raporu ve uyku zamanlayıcısı", EN: "Night report and sleep timer" },
          { TR: "Kendi sesinle pış pış ve ninni", EN: "Shushing and lullabies in your own voice" },
        ],
        note: {
          TR: "Aylık ya da yıllık abonelik, ücretsiz deneme ile. Dilediğin zaman App Store'dan iptal edebilirsin.",
          EN: "Monthly or yearly subscription with a free trial. Cancel anytime in the App Store.",
        },
      },
    },
    features: [],
    privacy: [
      { TR: "Hesap oluşturma yok", EN: "No account needed" },
      { TR: "Sunucu yok, veri telefonunda", EN: "No server, data stays on your phone" },
      { TR: "Ağlama algılamada ses kaydedilmez", EN: "Cry detection never records audio" },
      { TR: "Reklam, izleme ve analitik yok", EN: "No ads, tracking or analytics" },
    ],
    notice: {
      TR: "Ninni tıbbi bir cihaz değildir. Telefonu beşikten en az 2 metre uzağa koy ve sesi kısık tut. Pış Pış sesi: \"Gerçek Anne sesi piş piş\", candy baby (YouTube), CC BY.",
      EN: "Ninni is not a medical device. Keep the phone at least 2 metres from the crib and the volume low. Shushing sound: \"Gerçek Anne sesi piş piş\" by candy baby (YouTube), CC BY.",
    },
    hasPolicy: true,
  },
  {
    // Metinler Portföyüm deposundaki README (Ücretsiz/Pro tablosu) ve App Store metinleriyle uyumlu.
    // Kural: portföylerde fiyat yok; abonelik fiyatı sitede yazılmaz (App Store'da görünür).
    slug: "portfoyum",
    name: "Portföyüm",
    status: "live",
    tagline: {
      TR: "Emlakçılar için portföy paylaşım ağı.",
      EN: "The listing-sharing network for real estate agents.",
    },
    description: {
      TR: "Portföyüm, emlak danışmanlarının portföylerini yalnızca meslektaşlarıyla paylaştığı bir ağ. Yeni portföyleri tam ekran akışta kaydırarak keşfedin, sahadayken yakınınızdakileri haritada görün, kendi portföylerinizi ücretsiz paylaşın.",
      EN: "Portföyüm is a network where real estate agents share their listings only with fellow agents. Swipe through new listings in a full-screen feed, see what's nearby on the map while in the field, and share your own listings for free.",
    },
    appStoreId: "6837660427",
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
    // Metinler Tuffi deposundaki 03-GDD.md, 02-para-modeli.md ve 04-isim-karakter.md ile uyumlu.
    // Kural: fiyat yazılmaz (App Store'da görünür). Tamagotchi/Bandai adı ve karakterleri geçmez.
    // Ekranlar App Store görselleriyle aynı kaynaktan (OYUN/store-screenshots/raw/m-tr-1..6.png, 600×1303).
    slug: "tuffi",
    name: "Tuffi",
    status: "live",
    draft: true,
    tagline: {
      TR: "Cebindeki sanal bebek.",
      EN: "The virtual pet in your pocket.",
    },
    description: {
      TR: "Tuffi, telefonunda yaşayan minik bir sanal bebek. Onu besle, sev, oynat ve uyut; nasıl bakarsan öyle bir karaktere dönüşsün. Ana ekranında, kilit ekranında ve Dynamic Island'da hep yanında.",
      EN: "Tuffi is a tiny virtual pet that lives on your phone. Feed it, pet it, play with it and tuck it in; it grows into whatever your care makes it. Always with you on your Home Screen, Lock Screen and in the Dynamic Island.",
    },
    appStoreId: "6837797845",
    appStoreCampaign: { pt: "128268626", ct: "web" },
    platforms: ["iPhone"],
    category: { TR: "Oyunlar", EN: "Games" },
    accent: { from: "#5A3A2E", to: "#FFC8A2", glow: "rgba(255, 200, 162, 0.45)" },
    hasIcon: true, // Kodla çizilen bebek sprite'ından (OYUN/Tuffi/Tools/render_icon.py); son çizimle yenilenecek
    screenshots: 6,
    screenshotsEN: true,
    manifesto: {
      lead: {
        TR: "Doksanlarda cebimizde bir sanal bebek vardı.",
        EN: "In the nineties, we kept a virtual pet in our pocket.",
      },
      statement: {
        TR: "Şimdi telefonunda yaşıyor.",
        EN: "Now it lives on your phone.",
      },
      principles: [
        {
          title: { TR: "Ölüm yok", EN: "No game over" },
          body: {
            TR: "Uzun süre ihmal edilirse Tuffi küsüp evden kaçar. Üç gün iz sürersin ve bir kartpostalla geri döner. Hiçbir şey kaybolmaz.",
            EN: "Neglect it for too long and Tuffi sulks and runs away. Follow its trail for three days and it comes home with a postcard. Nothing is ever lost.",
          },
        },
        {
          title: { TR: "Reklam yok, abonelik yok", EN: "No ads, no subscriptions" },
          body: {
            TR: "Oyunun tamamı ücretsiz. İstersen yeni türler, temalar ve süsler için tek seferlik satın alma yaparsın.",
            EN: "The whole game is free. If you like, you can make one-time purchases for new species, themes and decorations.",
          },
        },
        {
          title: { TR: "Hep yanında", EN: "Always with you" },
          body: {
            TR: "Uygulamayı açmadan, ana ekrandaki bileşenden tek dokunuşla besle ve sev.",
            EN: "Feed it and pet it with one tap from the Home Screen widget, without opening the app.",
          },
        },
      ],
    },
    showcases: [
      {
        id: "care",
        eyebrow: { TR: "Bakım", EN: "Care" },
        title: { TR: "Dört bar, bir küçük kalp.", EN: "Four bars, one tiny heart." },
        body: {
          TR: "Tokluk, mutluluk, enerji ve temizlik gerçek zamanla akar; sen yokken de acıkır, sıkılır, uykusu gelir. Uyku saatlerini sen seçersin; gece o da uyur.",
          EN: "Fullness, happiness, energy and cleanliness flow in real time; it gets hungry, bored and sleepy even while you're away. You pick the bedtime; at night it sleeps too.",
        },
        bullets: [
          { TR: "Yemek, atıştırmalık, sevgi, oyun, uyku ve temizlik", EN: "Meals, snacks, cuddles, play, sleep and bath time" },
          { TR: "Başının üstündeki perçemden ruh halini okursun", EN: "Read its mood from the little tuft on its head" },
          { TR: "Nostalji teması: tek dokunuşla iki renkli LCD ekran", EN: "Nostalgia theme: a two-tone LCD screen in one tap" },
        ],
        screen: 1,
      },
      {
        id: "evolution",
        eyebrow: { TR: "Evrim", EN: "Evolution" },
        title: { TR: "Nasıl bakarsan öyle büyür.", EN: "It grows into how you care." },
        body: {
          TR: "Yumurtadan çıkar, bebek, çocuk ve genç olur; sonunda bakım tarzına göre farklı bir yetişkine dönüşür. Hepsini koleksiyon defterinde topla.",
          EN: "It hatches, then grows from baby to child to teen, and finally into a different adult depending on your care style. Collect them all in your collection book.",
        },
        bullets: [
          { TR: "Neşeli ya da asi: genç evrede yol ayrılır", EN: "Cheerful or rebellious: the path splits in the teen stage" },
          { TR: "Yıldız, Tombiş, Boynuzlu ve daha fazlası", EN: "Star, Chubby, Horned and more" },
          { TR: "Yetişkini Anı Bahçesi'ne uğurla, yeni bir yumurtayla başka bir yol dene", EN: "Send your adult to the Memory Garden and try another path with a new egg" },
        ],
        screen: 2,
      },
    ],
    milestones: {
      eyebrow: { TR: "Yaşam evreleri", EN: "Life stages" },
      title: { TR: "Bir haftada yumurtadan yetişkine.", EN: "From egg to adult in a week." },
      body: {
        TR: "Her evre gerçek zamanla ilerler. Ölüm yok; yetişkin Tuffi seninle süresiz yaşar.",
        EN: "Every stage moves in real time. There is no game over; your adult Tuffi stays with you for good.",
      },
      steps: [
        { name: { TR: "Yumurta", EN: "Egg" }, detail: { TR: "10 dakika", EN: "10 minutes" } },
        { name: { TR: "Bebek", EN: "Baby" }, detail: { TR: "1 gün", EN: "1 day" } },
        { name: { TR: "Çocuk", EN: "Child" }, detail: { TR: "3 gün", EN: "3 days" } },
        { name: { TR: "Genç", EN: "Teen" }, detail: { TR: "4 gün", EN: "4 days" } },
        { name: { TR: "Yetişkin", EN: "Adult" }, detail: { TR: "Süresiz", EN: "For good" } },
      ],
      screen: 1,
    },
    plans: {
      free: {
        title: { TR: "Her zaman ücretsiz", EN: "Always free" },
        items: [
          { TR: "Bütün bakım, evrim ve koleksiyon", EN: "All care, evolution and collecting" },
          { TR: "Ana ekran ve kilit ekranı bileşenleri", EN: "Home Screen and Lock Screen widgets" },
          { TR: "Kaçış ve İz Sürme macerası", EN: "The runaway and trail adventure" },
          { TR: "Nostalji teması", EN: "Nostalgia theme" },
          { TR: "Oynayarak kazanılan Yıldızlar", EN: "Stars you earn by playing" },
        ],
      },
      plus: {
        title: { TR: "Tuffi Mağazası", EN: "Tuffi Shop" },
        items: [
          { TR: "Yeni tür paketleri", EN: "New species packs" },
          { TR: "Bileşen ve Dynamic Island temaları", EN: "Widget and Dynamic Island themes" },
          { TR: "Kurucu Paketi", EN: "Founder Pack" },
          { TR: "Her ay sınırlı Sezon Kutusu", EN: "A limited Season Box every month" },
          { TR: "Yıldız paketleri", EN: "Star packs" },
        ],
        note: {
          TR: "Reklam ve abonelik yok; yalnızca tek seferlik satın almalar.",
          EN: "No ads and no subscriptions; one-time purchases only.",
        },
      },
    },
    features: [],
    privacy: [
      { TR: "Hesap oluşturma yok", EN: "No account needed" },
      { TR: "Sunucu yok, veri telefonunda", EN: "No server, data stays on your phone" },
      { TR: "Reklam, izleme ve analitik yok", EN: "No ads, tracking or analytics" },
      { TR: "Satın alımları Apple yönetir", EN: "Purchases are handled by Apple" },
    ],
    hasPolicy: true,
  },
  {
    // DocuVault 2.0 (Kasım 2026): yerel SwiftUI, sunucusuz. Belgeler kullanıcının iCloud'unda,
    // yapay zekâ ve çeviri cihazda (Apple Intelligence / Apple Translation). Analitik ve reklam yok.
    // Fiyat yazılmaz (App Store'da görünür). Yasal metinler content/docuvault/*.md.
    slug: "docuvault",
    name: "DocuVault",
    status: "live",
    tagline: {
      TR: "Belgelerin tek kasada: tara, özetle, hatırlat.",
      EN: "All your documents in one vault: scan, summarize, remind.",
    },
    description: {
      TR: "Faturaların, kimliklerin, sözleşmelerin ve poliçelerin tek bir güvenli kasada. DocuVault belgeyi tarar, okur, özetler ve son tarihi gelmeden seni uyarır. Hesap yok, sunucu yok: belgelerin cihazında işlenir ve yalnızca senin iCloud hesabında saklanır.",
      EN: "Your bills, IDs, contracts and insurance policies in one secure vault. DocuVault scans, reads and summarizes your documents and reminds you before anything is due. No account, no servers: documents are processed on your device and stored only in your own iCloud.",
    },
    appStoreId: "6762083376",
    platforms: ["iPhone", "iPad", "Apple Watch"],
    category: { TR: "Verimlilik", EN: "Productivity" },
    accent: { from: "#3C4F33", to: "#D39A6A", glow: "rgba(211, 154, 106, 0.42)" },
    hasIcon: true,
    screenshots: 7, // App Store görselleri (2.0, Türkçe)
    assetDir: "v2",
    links: {
      supportEmail: "info@woowcode.com",
    },
    manifesto: {
      lead: {
        TR: "Belgelerin mailde, WhatsApp'ta, çekmecede.",
        EN: "Your documents live in mail, WhatsApp and a drawer.",
      },
      statement: {
        TR: "DocuVault'ta hepsi tek kasada: okunur, özetlenir, zamanında hatırlatılır.",
        EN: "In DocuVault they're all in one vault: read, summarized and remembered on time.",
      },
      principles: [
        {
          title: { TR: "Hesap yok, sunucu yok", EN: "No account, no servers" },
          body: {
            TR: "Kayıt olmazsın, şifre belirlemezsin. Belgelerin yalnızca senin iCloud hesabında durur; biz bile göremeyiz.",
            EN: "No sign-up, no password. Your documents live only in your iCloud account; not even we can see them.",
          },
        },
        {
          title: { TR: "Yapay zekâ cihazında", EN: "AI on your device" },
          body: {
            TR: "Özetler, öne çıkanlar, Belgeye Sor ve çeviri Apple'ın cihazdaki modelleriyle çalışır; belgelerin internete gönderilmez.",
            EN: "Summaries, highlights, Ask Document and translation run on Apple's on-device models; your documents never go to the internet.",
          },
        },
        {
          title: { TR: "Hiçbir tarihi kaçırma", EN: "Never miss a date" },
          body: {
            TR: "Son ödeme, poliçe bitişi, garanti: tutar ve tarih belgeden okunur, zamanı gelince bildirim gelir.",
            EN: "Due dates, policy renewals, warranties: the amount and date are read from the document and you're notified in time.",
          },
        },
      ],
    },
    showcases: [
      {
        id: "vault",
        eyebrow: { TR: "Kasa", EN: "Vault" },
        title: { TR: "Bütün belgelerin, tek bir yerde.", EN: "All your documents, in one place." },
        body: {
          TR: "Kamerayla tara ya da Dosyalar, Fotoğraflar ve Paylaş menüsünden ekle. Belgedeki yazı cihazında okunur; ad, kategori, tutar ve son tarih kendiliğinden dolar.",
          EN: "Scan with the camera or add from Files, Photos and the Share menu. The text is read on your device; name, category, amount and due date fill in automatically.",
        },
        bullets: [
          { TR: "Kenarları otomatik bulan çok sayfalı tarayıcı", EN: "Multi-page scanner with automatic edge detection" },
          { TR: "Yaklaşan ödemeler ve aylık harcama özeti", EN: "Upcoming payments and a monthly spending summary" },
          { TR: "Belge içeriğinde bile arama; Siri ve Spotlight", EN: "Search even inside documents; Siri and Spotlight" },
        ],
        screen: 1,
      },
      {
        id: "idcard",
        eyebrow: { TR: "Kimlik, pasaport, kitap", EN: "ID card, passport, book" },
        badge: { TR: "Yeni", EN: "New" },
        title: { TR: "Kimlik fotokopisi, cebinde.", EN: "An ID photocopy in your pocket." },
        body: {
          TR: "Kimlik kartının ön ve arka yüzünü tara; ikisi gerçek boyutunda tek bir A4 sayfaya yerleşir, fotokopi gibi yazdırırsın. Pasaport sayfaları da gerçek boyutunda; kitapta iki sayfalık açılış otomatik ayrılır.",
          EN: "Scan the front and back of your ID card; both are placed at real size on a single A4 page, ready to print like a photocopy. Passport pages keep their real size too; book spreads are split automatically.",
        },
        bullets: [
          { TR: "Kimlik kartı modu (Plus)", EN: "ID card mode (Plus)" },
          { TR: "Pasaport ve kitap tarama modları", EN: "Passport and book scanning modes" },
          { TR: "Taramadan önce adım adım yönlendirme", EN: "Step-by-step guide before you scan" },
        ],
        screen: 2,
      },
      {
        id: "ai",
        variant: "ai",
        eyebrow: { TR: "Apple Intelligence", EN: "Apple Intelligence" },
        badge: { TR: "Cihazda", EN: "On device" },
        title: { TR: "Okumadan anla, sorup öğren.", EN: "Understand without reading. Ask and learn." },
        body: {
          TR: "Her belge için kısa bir özet ve öne çıkan maddeler. \"Muafiyet ne kadar?\" diye sor, cevap belgenin kendisinden gelsin. Yabancı dildeki belgeyi cihazında çevir.",
          EN: "A short summary and key highlights for every document. Ask \"What's the deductible?\" and get the answer from the document itself. Translate foreign-language documents on your device.",
        },
        bullets: [
          { TR: "Özet ve öne çıkanlar", EN: "Summary and highlights" },
          { TR: "Belgeye Sor", EN: "Ask Document" },
          { TR: "Belge çevirisi (Plus)", EN: "Document translation (Plus)" },
          { TR: "Hepsi cihazda; belgelerin internete gitmez", EN: "All on device; your documents never leave it" },
        ],
        screen: 3,
      },
      {
        id: "watermark",
        eyebrow: { TR: "Güvenle paylaş", EN: "Share safely" },
        title: { TR: "Kopyan, yalnızca verdiğin iş için.", EN: "Your copy, only for its purpose." },
        body: {
          TR: "\"Yalnızca banka başvurusu içindir\" gibi bir filigranı sayfalara kalıcı işle; kimlik numarası, IBAN ve kart bilgilerini otomatik bulup karart. Parolalı PDF ya da süreli, uçtan uca şifreli link olarak paylaş.",
          EN: "Burn a watermark like \"For bank application only\" into the pages; find and redact ID numbers, IBANs and card details automatically. Share as a password-protected PDF or an expiring, end-to-end encrypted link.",
        },
        bullets: [
          { TR: "Filigran ve otomatik karartma", EN: "Watermarks and automatic redaction" },
          { TR: "Parolalı PDF", EN: "Password-protected PDF" },
          { TR: "Süreli, iptal edilebilir şifreli linkler (Plus)", EN: "Expiring, revocable encrypted links (Plus)" },
          { TR: "İmzala; imzan yalnızca bu cihazda", EN: "Sign; your signature stays on this device" },
        ],
        screen: 4,
      },
      {
        id: "sets",
        eyebrow: { TR: "Belge setleri", EN: "Document sets" },
        title: { TR: "Gişeye gitmeden eksikleri gör.", EN: "See what's missing before the counter." },
        body: {
          TR: "Vize, ev kiralama, işe giriş, araç satışı: her süreç için hazır listeler. Hangi belgenin hazır, hangisinin eksik olduğunu tek bakışta gör.",
          EN: "Visa, renting a home, a new job, selling a car: ready-made lists for each process. See at a glance what's ready and what's missing.",
        },
        bullets: [
          { TR: "Hazır şablonlar ve kendi listelerin", EN: "Ready-made templates and your own lists" },
          { TR: "Apple Intelligence ile belge seti oluştur", EN: "Create a document set with Apple Intelligence" },
          { TR: "Koleksiyonlar: \"Ev\", \"Araba\" gibi", EN: "Collections like \"Home\" or \"Car\"" },
        ],
        screen: 5,
      },
      {
        id: "emergency",
        eyebrow: { TR: "Acil Durum Kartı", EN: "Emergency Card" },
        title: { TR: "Acil durumda, bir dokunuş uzakta.", EN: "In an emergency, one tap away." },
        body: {
          TR: "Kan grubu, alerjiler, ilaçlar ve acil kişiler tek kartta. Telefon kilitliyken kilit ekranı widget'ından ve Siri'den, ayrıca Apple Watch'tan açılır.",
          EN: "Blood type, allergies, medications and emergency contacts on one card. Open it from the Lock Screen widget and Siri while the phone is locked, and on Apple Watch.",
        },
        bullets: [
          { TR: "Kilit ekranı, Siri ve Apple Watch", EN: "Lock Screen, Siri and Apple Watch" },
          { TR: "Her zaman ücretsiz", EN: "Always free" },
        ],
        screen: 7,
      },
    ],
    extra: [
      {
        title: { TR: "PDF araçları", EN: "PDF tools" },
        body: {
          TR: "Belgeleri tek PDF'te birleştir, istediğin sayfaları ayır, dosyayı e-posta ve e-Devlet sınırları için küçült. Asıl belgen hep korunur.",
          EN: "Merge documents into one PDF, split out the pages you need and compress files for email and upload limits. Your original is always kept.",
        },
      },
      {
        title: { TR: "Aile Kasası", EN: "Family Vault" },
        body: {
          TR: "Seçtiğin belgeleri eşin ve ailenle iCloud üzerinden paylaş; tek Plus aboneliği Aile Paylaşımı ile bütün aileye yeter.",
          EN: "Share the documents you choose with your partner and family through iCloud; one Plus subscription covers the whole family with Family Sharing.",
        },
      },
      {
        title: { TR: "Şifreli yedek", EN: "Encrypted backup" },
        body: {
          TR: "Kasanın parolayla şifrelenmiş bir kopyasını Dosyalar'a, bilgisayarına ya da USB belleğe kaydet.",
          EN: "Save a password-encrypted copy of your vault to Files, your computer or a USB drive.",
        },
      },
      {
        title: { TR: "Harcamalar", EN: "Spending" },
        body: {
          TR: "Faturalardaki tutarlardan aylık harcama özeti, kategori dökümü ve yaklaşan ödemeler.",
          EN: "Monthly spending, a category breakdown and upcoming payments from the amounts on your bills.",
        },
      },
    ],
    plans: {
      free: {
        title: { TR: "Ücretsiz", EN: "Free" },
        items: [
          { TR: "5 belgeye kadar kasa", EN: "A vault of up to 5 documents" },
          { TR: "Tarama, metin tanıma, özet ve hatırlatma", EN: "Scanning, text recognition, summaries and reminders" },
          { TR: "Pasaport ve kitap tarama, filigran, parolalı PDF", EN: "Passport and book scanning, watermarks, password-protected PDFs" },
          { TR: "Face ID, iCloud eşitlemesi, karartma ve şifreli yedek", EN: "Face ID, iCloud sync, redaction and encrypted backup" },
          { TR: "Acil Durum Kartı ve Apple Watch", EN: "Emergency Card and Apple Watch" },
        ],
      },
      plus: {
        title: { TR: "DocuVault Plus", EN: "DocuVault Plus" },
        items: [
          { TR: "Sınırsız belge", EN: "Unlimited documents" },
          { TR: "Kimlik kartı taraması, PDF araçları ve belge çevirisi", EN: "ID card scanning, PDF tools and document translation" },
          { TR: "Sınırsız Belgeye Sor ve sınırsız imza", EN: "Unlimited Ask Document and unlimited signatures" },
          { TR: "Aile Kasası ve şifreli paylaşım linkleri", EN: "Family Vault and encrypted share links" },
          { TR: "Birden çok hatırlatma ve harcama grafikleri", EN: "Multiple reminders and spending charts" },
        ],
        note: {
          TR: "Aylık ve yıllık planlar uygulama içinde; yıllık planda 1 hafta ücretsiz deneme. Plus biterse belgelerin kilitlenmez.",
          EN: "Monthly and yearly plans are in the app; the yearly plan includes a 1-week free trial. If Plus ends, your documents never get locked.",
        },
      },
    },
    features: [],
    privacy: [
      { TR: "Hesap yok; belgeler yalnızca senin iCloud'unda", EN: "No account; documents only in your iCloud" },
      { TR: "Yapay zekâ ve çeviri cihazda", EN: "AI and translation on device" },
      { TR: "Reklam, izleme ve analitik yok", EN: "No ads, no tracking, no analytics" },
      { TR: "Face ID / Touch ID kilidi", EN: "Face ID / Touch ID lock" },
      { TR: "KVKK uyumlu", EN: "KVKK (Turkish data protection law) compliant" },
    ],
    hasPolicy: true,
    legalPages: { terms: true, kvkk: true },
  },
  {
    // Metinler PTCoach deposundaki docs/APP_STORE.md ile uyumlu. Abonelik fiyatı sitede yazılmaz.
    slug: "ptcoach",
    name: "PT Coach",
    status: "coming-soon",
    tagline: {
      TR: "Kişisel antrenörler ve üyeleri için.",
      EN: "For personal trainers and their clients.",
    },
    description: {
      TR: "PT Coach, kişisel antrenörlerin üyelerini, bireysel ve grup derslerini ve ödemelerini tek yerden yönettiği bir uygulama. Üyeler QR kod ile katılır, derse geldiğinde giriş QR'ını okutur; programını, ölçümlerini ve gelişimini kendi telefonundan takip eder. Sunucu yok: veriler eğitmenin kendi iCloud hesabında durur.",
      EN: "PT Coach lets personal trainers manage their clients, one-to-one and group sessions, and payments in one place. Clients join with a QR code, check in to a session by scanning their QR, and follow their program, measurements and progress on their own phone. No servers: data lives in the trainer's own iCloud account.",
    },
    appStoreId: "6839493915", // Takes effect when status is "live"
    platforms: ["iPhone"],
    category: { TR: "Sağlık ve Fitness", EN: "Health & Fitness" },
    accent: { from: "#10261A", to: "#C6FF3D", glow: "rgba(198, 255, 61, 0.40)" },
    hasIcon: true,
    screenshots: 5,
    links: {
      supportEmail: "info@woowcode.com",
    },
    manifesto: {
      lead: {
        TR: "Defter, WhatsApp ve hafızada kalan ödemeler.",
        EN: "A notebook, WhatsApp and payments you try to remember.",
      },
      statement: {
        TR: "PT Coach'ta üyelerin, derslerin ve alacakların tek ekranda.",
        EN: "In PT Coach your clients, sessions and receivables are on one screen.",
      },
      principles: [
        {
          title: { TR: "Eğitmen girer, üye görür", EN: "Trainer edits, client views" },
          body: {
            TR: "Bütün bilgileri eğitmen girer. Üye kendi programını, kalan dersini ve ödemesini görür; eğitmenin notları yalnızca eğitmende kalır.",
            EN: "The trainer enters everything. Clients see their own program, remaining sessions and payments; the trainer's notes stay with the trainer.",
          },
        },
        {
          title: { TR: "QR ile saniyeler içinde", EN: "Join in seconds with a QR code" },
          body: {
            TR: "Üye Ekle'ye dokun, QR kodu göster; üye okutur ve kendi telefonunda bilgilerini görmeye başlar.",
            EN: "Tap Add Client and show the QR code; the client scans it and sees their information on their own phone.",
          },
        },
        {
          title: { TR: "Sunucu yok", EN: "No servers" },
          body: {
            TR: "Veriler eğitmenin iCloud hesabında saklanır. Sağlık bilgileri ve fotoğraflar yalnızca eğitmen ve üye tarafından görülür; biz bile göremeyiz.",
            EN: "Data is stored in the trainer's iCloud account. Health details and photos are seen only by the trainer and the client; not even we can see them.",
          },
        },
      ],
    },
    showcases: [
      {
        id: "today",
        eyebrow: { TR: "Bugün", EN: "Today" },
        title: { TR: "Günün tek bakışta.", EN: "Your day at a glance." },
        body: {
          TR: "Bugünkü dersler, karar bekleyen iptal talepleri, geciken ödemeler ve paketi bitmek üzere olan üyeler tek ekranda.",
          EN: "Today's sessions, cancellation requests waiting for a decision, late payments and clients whose package is about to run out, on one screen.",
        },
        bullets: [
          { TR: "Üye \"Derse gelemeyeceğim\" der, sen anında karar verirsin", EN: "Clients say \"I can't make it\"; you decide right away" },
          { TR: "Sıradaki ders her zaman ekranın altında", EN: "The next session always at the bottom of the screen" },
        ],
        screen: 1,
      },
      {
        id: "calendar",
        eyebrow: { TR: "Takvim", EN: "Calendar" },
        title: { TR: "Dolu ve boş saatlerin net.", EN: "Busy and free hours, clearly." },
        body: {
          TR: "Haftalık takvimde tekrarlayan dersler, çalışma saatlerin ve boş zamanların. Boş bir saate dokunup ders planla.",
          EN: "Recurring sessions, your working hours and free time in a weekly calendar. Tap a free slot to plan a session.",
        },
        bullets: [
          { TR: "Tekrarlayan dersler ve çalışma saatleri", EN: "Recurring sessions and working hours" },
          { TR: "Ders yandı, iptal veya telafi kararları", EN: "No-show, cancel or make-up decisions" },
        ],
        screen: 2,
      },
      {
        id: "group",
        eyebrow: { TR: "Grup dersi", EN: "Group sessions" },
        title: { TR: "Grup dersinde tek dokunuşla yoklama.", EN: "Group attendance in one tap." },
        body: {
          TR: "Düzenli gruplarını kaydet, grup dersini tek seferde planla. Ders bitince herkesi tek ekrandan işaretle; her üyenin kendi paketinden bir ders düşer.",
          EN: "Save your regular groups and plan a group session in one go. Mark everyone on one screen when it ends; each client's own package goes down by one.",
        },
        bullets: [
          { TR: "Bireysel ve grup paketleri", EN: "One-to-one and group packages" },
          { TR: "Üyeler yalnızca grubun adını ve kişi sayısını görür", EN: "Clients only see the group's name and size" },
        ],
        screen: 3,
      },
      {
        id: "checkin",
        eyebrow: { TR: "QR ile yoklama", EN: "QR check-in" },
        title: { TR: "QR'ı okut, ders kendiliğinden düşsün.", EN: "Scan the QR, the session is counted." },
        body: {
          TR: "Üye derse geldiğinde uygulamasındaki giriş QR'ını gösterir, sen okutursun; o saatteki dersi tamamlanır ve paketinden düşer. Yanlışlıkla olursa tek dokunuşla geri al.",
          EN: "When a client arrives they show the check-in QR in their app and you scan it; the session at that time is completed and taken off their package. Undo it in one tap if needed.",
        },
        bullets: [
          { TR: "Uygulamasız üyeler için yazdırılabilir QR kartı", EN: "Printable QR card for clients without the app" },
          { TR: "İstersen düşmeden önce onay sorar", EN: "Can ask before counting, if you prefer" },
        ],
        screen: 5,
      },
      {
        id: "finance",
        eyebrow: { TR: "Finans", EN: "Finance" },
        title: { TR: "Kimin ne kadar ödediğini bil.", EN: "Know who paid what." },
        body: {
          TR: "Paket, taksit ve ödeme takibi; bu ay tahsil edilen, bekleyen ve vadesi geçen alacaklar. CSV olarak dışa aktar.",
          EN: "Packages, installments and payments; collected, pending and overdue amounts for the month. Export as CSV.",
        },
        bullets: [
          { TR: "Gelecek ve geçmiş alacaklar", EN: "Upcoming and past receivables" },
          { TR: "Son 6 ayın kazanç grafiği", EN: "Earnings chart for the last 6 months" },
        ],
        screen: 4,
      },
    ],
    extra: [
      {
        title: { TR: "Program ve beslenme", EN: "Programs and nutrition" },
        body: {
          TR: "Şablonlarla antrenman programı hazırla, beslenme önerisi ekle; üye kendi telefonunda görsün.",
          EN: "Build training programs from templates and add nutrition suggestions; clients see them on their phone.",
        },
      },
      {
        title: { TR: "Ölçüm ve gelişim fotoğrafı", EN: "Measurements and progress photos" },
        body: {
          TR: "Vücut ölçümlerini grafiklerle izle, öncesi ve sonrası fotoğraflarını yan yana karşılaştır (üyenin onayıyla).",
          EN: "Track body measurements with charts and compare before-and-after photos side by side (with the client's consent).",
        },
      },
      {
        title: { TR: "Mesajlar", EN: "Messages" },
        body: {
          TR: "Üyelerinle birebir mesajlaş ya da hepsine birden duyuru gönder.",
          EN: "Message clients one to one or send an announcement to all of them.",
        },
      },
      {
        title: { TR: "Doğrulanmış eğitmen", EN: "Verified trainers" },
        body: {
          TR: "Eğitmen, antrenörlük belgesini yükler; belge cihazda okunur ve belgedeki isim eğitmenin adıyla karşılaştırılır.",
          EN: "Trainers upload their coaching certificate; it is read on the device and the name on it is matched with the trainer's name.",
        },
      },
    ],
    plans: {
      free: {
        title: { TR: "Üye", EN: "Client" },
        items: [
          { TR: "Üyeler için her zaman ücretsiz", EN: "Always free for clients" },
          { TR: "Program, ölçümler, dersler ve ödemeler", EN: "Program, measurements, sessions and payments" },
          { TR: "\"Derse gelemeyeceğim\" ve mesajlaşma", EN: "\"I can't make it\" and messaging" },
          { TR: "Giriş QR'ı ile derse hızlı giriş", EN: "Quick check-in with your QR" },
        ],
      },
      plus: {
        title: { TR: "PT Coach Pro (eğitmen)", EN: "PT Coach Pro (trainer)" },
        items: [
          { TR: "Sınırsız üye", EN: "Unlimited clients" },
          { TR: "Takvim, paket ve ödeme takibi", EN: "Calendar, package and payment tracking" },
          { TR: "Grup dersleri ve QR ile yoklama", EN: "Group sessions and QR check-in" },
          { TR: "Program, beslenme, ölçüm ve fotoğraflar", EN: "Programs, nutrition, measurements and photos" },
          { TR: "Kazanç ve alacak raporları", EN: "Earnings and receivables reports" },
        ],
        note: {
          TR: "Aylık ya da yıllık abonelik, 7 gün ücretsiz deneme ile. Abonelik biterse verilerin silinmez, salt okunur kalır.",
          EN: "Monthly or yearly subscription with a 7-day free trial. If it ends, your data is not deleted; it stays read-only.",
        },
      },
    },
    features: [],
    privacy: [
      { TR: "Sunucu yok; veriler eğitmenin iCloud'unda", EN: "No servers; data in the trainer's iCloud" },
      { TR: "Sağlık verileri yalnızca açık rızayla", EN: "Health data only with explicit consent" },
      { TR: "Reklam, izleme ve analitik yok", EN: "No ads, no tracking, no analytics" },
      { TR: "Uygulama içinden hesap ve veri silme", EN: "Account and data deletion inside the app" },
      { TR: "KVKK uyumlu", EN: "KVKK (Turkish data protection law) compliant" },
    ],
    notice: {
      TR: "PT Coach tıbbi bir cihaz değildir; uygulamadaki sağlık bilgileri ve beslenme önerileri tıbbi tavsiye yerine geçmez.",
      EN: "PT Coach is not a medical device; health details and nutrition suggestions in the app are not medical advice.",
    },
    hasPolicy: true,
    legalPages: { kvkk: true },
  },
];

export const liveApps = () => apps.filter((a) => a.status === "live");
export const getApp = (slug: string) => apps.find((a) => a.slug === slug);

/** App Store ID only takes effect once the app is live, so an unreleased app never links to an Apple 404. */
export const liveAppStoreId = (app: AppEntry) => (app.status === "live" ? app.appStoreId : undefined);
export const appStoreUrl = (app: AppEntry) => {
  const id = liveAppStoreId(app);
  return id ? `https://apps.apple.com/app/id${id}` : undefined;
};
/** Link for the visible download button: the campaign link when the app has one, the plain store link otherwise. */
export const appStoreButtonUrl = (app: AppEntry) => {
  const id = liveAppStoreId(app);
  if (!id) return undefined;
  const c = app.appStoreCampaign;
  return c ? `https://apps.apple.com/app/apple-store/id${id}?pt=${c.pt}&ct=${c.ct}&mt=8` : appStoreUrl(app);
};
export const appAssetBase = (app: AppEntry) => `/apps/${app.slug}${app.assetDir ? `/${app.assetDir}` : ""}`;
export const iconSrc = (app: AppEntry) => (app.hasIcon ? `${appAssetBase(app)}/icon.webp` : undefined);
export const iconPngSrc = (app: AppEntry) => (app.hasIcon ? `${appAssetBase(app)}/icon.png` : undefined);
export const screenshotSrcs = (app: AppEntry, language?: "TR" | "EN") => {
  const dir = language === "EN" && app.screenshotsEN ? `${appAssetBase(app)}/en` : appAssetBase(app);
  return Array.from({ length: app.screenshots }, (_, i) => `${dir}/screen-${i + 1}.webp`);
};
