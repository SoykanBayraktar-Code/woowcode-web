// ============================================================================
// JSON-LD yapılandırılmış veri (structured data) yardımcıları
// Google'ın işletmeyi, hizmetleri ve SSS'i anlaması + zengin sonuç (rich result)
// için. Tüm veri site.ts'ten gelir — tek kaynak.
// ============================================================================

import { site, activeSocials } from "@/lib/site";

const sameAs = activeSocials().map((s) => s.url);

/** Şirket kimliği */
export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: `${site.url}/WOOWCODELOGO.png`,
    image: `${site.url}/opengraph-image`,
    email: site.email,
    telephone: `+${site.phone.e164}`,
    description:
      "Antalya merkezli yazılım ajansı. Web ve mobil uygulama geliştirme, SaaS, yapay zekâ ve veri çözümleri ile işletmelerin dijital dönüşümünü uçtan uca üstleniyoruz.",
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

/** Yerel işletme — Antalya yerel SEO'su için kritik */
export function localBusinessLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${site.url}/#business`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: `${site.url}/WOOWCODELOGO.png`,
    image: `${site.url}/opengraph-image`,
    email: site.email,
    telephone: `+${site.phone.e164}`,
    priceRange: "₺₺",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: "Muratpaşa",
      addressRegion: "Antalya",
      addressCountry: "TR",
    },
    areaServed: [
      { "@type": "Country", name: "Türkiye" },
      { "@type": "City", name: "Antalya" },
    ],
    knowsAbout: [
      "Web uygulama geliştirme",
      "Mobil uygulama geliştirme",
      "SaaS geliştirme",
      "Yapay zekâ çözümleri",
      "Veri mühendisliği",
      "IoT ve otomasyon",
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

/** SSS — Google'da açılır soru-cevap zengin sonucu */
export function faqPageLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

/** Sunulan hizmetler — her biri ayrı Service varlığı */
export function servicesLd(services: { name: string; description: string }[]) {
  return {
    "@context": "https://schema.org",
    "@graph": services.map((s) => ({
      "@type": "Service",
      name: s.name,
      description: s.description,
      provider: { "@type": "Organization", name: site.name, url: site.url },
      areaServed: { "@type": "Country", name: "Türkiye" },
    })),
  };
}

/** Yardımcı: JSON-LD'yi <script> için string'e çevirir */
export function ldJson(obj: unknown): string {
  return JSON.stringify(obj);
}
