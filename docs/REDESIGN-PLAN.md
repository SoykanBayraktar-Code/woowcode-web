# WOOWCODE — Yeniden Tasarım Planı (v2)

> Durum: taslak, onay bekliyor · Dal: `redesign/premium-dark` · Tarih: 20 Kasım 2026

## 1. Konumlandırma

**Eski:** "Endüstriyel AI, drone, dijital ikiz yapan teknoloji firması."
**Yeni:** **"Kendi uygulamalarını App Store'a çıkaran iOS & mobil uygulama stüdyosu."**

Sitenin en güçlü kanıtı yayındaki uygulamalarımız (Starlit, DocuVault, sonra eklenecekler). Ziyaretçi şunu hissetmeli:
*"Bu ekip uygulamayı sadece yapmıyor, yayınlıyor ve yaşatıyor. Benimkini de App Store'a çıkarır."*

Slogan: **Fikirden App Store'a** / *From idea to App Store* (logo ile aynı).

## 2. Referanslar (klonlanan repo)

`VoltAgent/awesome-design-md` (~128 bin ⭐), `~/Projects/design-refs/awesome-design-md` altına klonlandı.
84 markanın tasarım sistemi var. Bize en uygun dört tanesinden şunları alıyoruz:

| Referans | Alacağımız şey |
|---|---|
| **Apple** | Ürün "tile" ritmi: her bölüm bir ürün, UI geri planda, ürün öne çıkıyor. Tek vurgu rengi, sıkı (negatif aralıklı) başlıklar, 17px gövde metni, basınca `scale(0.95)`. |
| **Framer** | Siyah tuval ve poster gibi dev başlıklar. Her ürüne kendi canlı gradient **spotlight kartı**: renk bölümde değil, kartta. |
| **Expo** | Mobil geliştirici platformu dili: **cihaz maketi hero'nun kendisi**, kod yüzeylerinde mono font. |
| **Linear** | Koyu yüzey katmanları, kıl çizgi kenarlıklar, gerçek ürün ekran görüntüleriyle anlatım. |

`ui-ux-pro-max` skill'inin önerisi de aynı yönde: *App Store Style Landing* (cihaz maketli hero, ekran görüntüsü galerisi, belirgin App Store butonları) ve *Aurora* gradient efektleri.

## 3. Tasarım sistemi (özet)

- **Tuval:** koyu, tek renk (monokrom). Kartlar `#0b0e14` / `#121722`, kenarlar kıl çizgi beyaz %8.
- **Marka vurgusu:** azure→mint gradient **yalnızca** logoda ve küçük vurgularda (imleç, durum noktası).
- **Uygulama renkleri:** her uygulama kendi vurgu rengini getirir (ör. Starlit → gece moru/yıldız sarısı, DocuVault → güven yeşili/mavisi). Site çerçevesi nötr kalır, renk ürünlerden gelir (Apple + Framer yaklaşımı).
- **Tipografi:** Geist Display. Başlıklar 600 ağırlıkta, `-0.04em` aralıkla (hero ≈ 88–112px). Gövde 17px / 1.5. Kod ve etiketler Geist Mono.
- **Butonlar:** birincil beyaz pill, ikincil koyu pill, resmî **"App Store'dan İndirin"** rozeti.
- **Köşeler:** 12 (yardımcı öğeler) / 20 (kartlar) / 32 (spotlight kartları) / pill. Uygulama ikonları squircle.
- **Hareket:** mikro etkileşimler 150–300ms, kaydırmaya bağlı sahneler, `prefers-reduced-motion` desteği.
- Bütün kurallar repo köküne **`DESIGN.md`** olarak yazılacak; sonraki sayfalar ve ajanlar bunu okuyacak.

## 4. Bilgi mimarisi

```
/                       Ana sayfa (vitrin)
/apps                   Uygulamalarımız: tüm yayındaki ve yakında çıkacak uygulamalar
/apps/[slug]            Uygulama sayfası (Starlit, DocuVault, …)
/apps/[slug]/privacy    Gizlilik (EN)   /apps/[slug]/gizlilik (TR)
/apps/[slug]/support    Destek
/services               Hizmetler: iOS native (SwiftUI), cross-platform, backend & AI, tasarım
/about  /projects  /blog  /contact  (yeni tasarım diline taşınır)
```

⚠️ **App Store bağlantıları kırılmamalı.** Starlit'in App Store kaydında büyük ihtimalle `woowcode.com/starlit` ve `/starlit/privacy` adresleri yazılı.
Bu adresler **çalışmaya devam edecek** (yeni sayfalara 301 yönlendirmesi veya aynı içerik). Apple incelemesinde destek/gizlilik linki 404 verirse sorun olur.

## 5. Uygulama veri modeli: yeni uygulama = tek kayıt

`src/lib/apps.ts` dosyasında her uygulama bir kayıt olacak, sayfalar otomatik üretilecek:

```ts
{
  slug: "starlit",
  name: "Starlit",
  status: "live" | "coming-soon",
  tagline: { TR, EN },          // tek cümle
  description: { TR, EN },
  appStoreId: "…",             // App Store linki ve iPhone "Smart App Banner" bunun üzerinden
  category: "Health & Fitness",
  platforms: ["iPhone"],
  accent: { from, to },         // spotlight kartı ve uygulama sayfası rengi
  icon: "/apps/starlit/icon.png",
  screenshots: ["/apps/starlit/01.png", …],
  features: [{ title, body, icon }],
  privacy: { collectsData: false, highlights: [...] },  // "gizlilik etiketi" kartı
  policyKey: "starlit",         // privacy/support içeriği
}
```

Yeni bir uygulama eklemek için kayıt eklenir ve `public/apps/<slug>/` klasörüne ikon ve ekran görüntüleri konur. Ana sayfa rafı, /apps listesi, uygulama sayfası, sitemap ve SEO (JSON-LD `SoftwareApplication`) otomatik güncellenir.

## 6. Ana sayfa akışı ve "vay" anları

1. **Hero:** "Fikirden App Store'a." başlığı. Sağda veya ortada **gerçekçi bir iPhone maketi**; ekranında yayındaki uygulamalarımız sırayla akıyor. Çevresinde uygulama ikonlarımız hafifçe süzülüyor. CTA'lar: "Projenizi konuşalım" ve "Uygulamalarımız".
   ✨ *Vay anı 1:* Kaydırdıkça telefon hafifçe dönüyor ve ekran bir uygulamadan diğerine geçiyor (kaydırmaya bağlı, 3D CSS).
2. **Yayındaki uygulamalarımız rafı:** her uygulama kendi gradient'iyle bir spotlight kartı. İkon, ad, tek cümle, App Store rozeti, "İncele →".
   ✨ *Vay anı 2:* İmleci takip eden ışık ve hafif 3D eğim; kart uygulamanın renginde parlıyor.
3. **Sayılarla kanıt:** yayındaki uygulama sayısı, desteklenen iOS sürümü, gizlilik yaklaşımı ("sunucu yok, veri telefonda").
4. **"Fikirden App Store'a" süreci:** yapışkan (sticky) kaydırma sahnesi. Telefon önce wireframe, sonra tasarım, sonra kod, en son "App Store'da yayında" ekranına dönüşüyor; yanda dört adım.
   ✨ *Vay anı 3:* Tek bir telefonun gözümüzün önünde "inşa edilmesi".
5. **Hizmetler:** iOS native (SwiftUI), iPhone/iPad/Watch, cross-platform, backend & AI entegrasyonu, App Store yayın süreci ve ASO.
6. **SSS:** yayın süresi, App Store reddi durumunda ne olur, kodun sahibi kim vb.
7. **Footer CTA bandı** (mevcut).

Kural: en fazla üç büyük "vay" anı olacak, gerisi sakin kalacak (Apple dersi: ürün konuşsun).

## 7. Uygulama sayfası şablonu (`/apps/[slug]`)

Apple ürün sayfası ritmi, uygulamanın kendi renginde:

1. Hero: büyük uygulama ikonu, ad, slogan, App Store rozeti ve QR kod (masaüstünde telefonla taramak için), kategori/platform etiketleri.
2. Ekran görüntüleri: cihaz çerçevesinde yatay kaydırmalı galeri.
3. Özellikler: 3–6 kart.
4. Gizlilik etiketi: Apple'ın "Privacy Nutrition Label" kartından esinlenen bir özet ("Veri toplanmaz").
5. Destek ve gizlilik linkleri; App Store Connect'e yazılacak adresler burada.
6. "Diğer uygulamalarımız" rafı.

Ayrıca her uygulama sayfasına `<meta name="apple-itunes-app" content="app-id=…">` eklenir. Böylece iPhone Safari'de sayfanın üstünde "Aç / İndir" bandı otomatik çıkar.

## 8. Uygulama sırası

| Faz | İçerik |
|---|---|
| **0** | `DESIGN.md` yazılır, token'lar ve font ayarları güncellenir |
| **1** | `apps.ts` veri modeli, `/apps` ve `/apps/[slug]` sayfaları; Starlit taşınır ve eski adresler korunur; DocuVault eklenir |
| **2** | Ana sayfa: iPhone hero, uygulama rafı, süreç sahnesi, hizmet metinleri |
| **3** | Diğer sayfalar (Hizmetler, Hakkımızda, Projeler, Blog, İletişim) yeni dile taşınır |
| **4** | Kontrol: 375/768/1024/1440 genişlikleri, erişilebilirlik (kontrast ve odak), Lighthouse, SEO (sitemap, JSON-LD), reduced-motion |

## 9. Sizden gerekenler

Her uygulama için (Starlit ve DocuVault):

1. **App Store linki** (veya App ID)
2. **1024×1024 uygulama ikonu** PNG (Starlit'in ikon taslakları projede var, ama yayındaki son hali hangisi?)
3. **3–6 ekran görüntüsü** (App Store Connect'e yüklenenler olabilir)
4. **Tek cümlelik slogan ve 2–3 cümlelik açıklama** (yoksa ben önerebilirim)
5. DocuVault için **gizlilik politikası ve destek metni** (Starlit'teki gibi; yoksa taslak hazırlayabilirim)
6. Yakında çıkacak uygulamalar "Yakında" olarak gösterilsin mi?
