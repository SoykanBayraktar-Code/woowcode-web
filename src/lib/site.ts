// ============================================================================
// WOOWCODE — Marka & İletişim Tek Kaynağı (single source of truth)
// Footer, İletişim sayfası, yüzen temas butonu ve SEO metadata'sı buradan okur.
// Bir değeri burada değiştir → tüm site güncellenir.
// ============================================================================

import type { Language } from "@/lib/translations";

// ⚠️⚠️⚠️  GERÇEK NUMARAYI BURAYA YAZ  ⚠️⚠️⚠️
// Telefon = WhatsApp (aynı numara). Sadece rakam, ülke koduyla, + ve boşluk YOK.
// Örnek: "905321234567"  →  +90 532 123 45 67
const PHONE_E164 = "905330536363"; // Telefon = WhatsApp (0533 053 63 63)

// 905XXXXXXXXX  →  "+90 5XX XXX XX XX" (görünen format, otomatik üretilir)
function formatPhoneTR(e164: string): string {
  const d = e164.replace(/\D/g, "").replace(/^90/, "");
  if (d.length !== 10) return `+${e164.replace(/\D/g, "")}`;
  return `+90 ${d.slice(0, 3)} ${d.slice(3, 6)} ${d.slice(6, 8)} ${d.slice(8)}`;
}

export const site = {
  name: "WOOWCODE",
  legalName: "WOOWCODE YAZILIM ve TİCARET A.Ş.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://woowcode.com",
  taxNo: "8141094985",
  email: "info@woowcode.com",

  phone: {
    e164: PHONE_E164,
    display: formatPhoneTR(PHONE_E164),
  },

  // WhatsApp = telefonla aynı numara. Hazır mesaj dile göre değişir.
  whatsapp: {
    prefill: {
      TR: "Merhaba WOOWCODE, bir projem hakkında bilgi almak istiyorum.",
      EN: "Hello WOOWCODE, I'd like to get information about a project.",
    } as Record<Language, string>,
  },

  address: {
    line1: "Şirinyalı Mah. 1533. Sokak No:49/2",
    line2: "Muratpaşa / Antalya",
    country: { TR: "Türkiye", EN: "Turkey" } as Record<Language, string>,
    // Google Haritalar linki (opsiyonel; boşsa pin gösterilmez)
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Şirinyalı+Mah.+1533.+Sokak+No:49%2F2+Muratpaşa+Antalya",
  },

  // Sosyal linkler — boş olanlar arayüzde GÖSTERİLMEZ. Link gelince doldur.
  social: {
    linkedin: "",
    instagram: "",
    github: "",
    x: "",
  },
} as const;

// --- Yardımcılar -------------------------------------------------------------

/** Dile göre hazır mesajlı WhatsApp linki */
export function waLink(lang: Language): string {
  const text = encodeURIComponent(site.whatsapp.prefill[lang]);
  return `https://wa.me/${site.phone.e164}?text=${text}`;
}

/** Tıkla-ara linki */
export const telLink = `tel:+${site.phone.e164}`;

/** E-posta linki */
export const mailLink = `mailto:${site.email}`;

/** Yalnızca dolu sosyal linkleri döndürür */
export function activeSocials(): { key: keyof typeof site.social; url: string }[] {
  return (Object.keys(site.social) as (keyof typeof site.social)[])
    .filter((k) => site.social[k].length > 0)
    .map((k) => ({ key: k, url: site.social[k] }));
}
