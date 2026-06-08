// ============================================================================
// Müşteri Yorumları (Referanslar)
// ⚠️ YALNIZCA GERÇEK yorumlar eklenir. Dizi boşken yorum bölümü SİTEDE GÖRÜNMEZ.
// Yeni yorum eklemek için aşağıdaki örneğe göre bir nesne ekle.
// ============================================================================

export interface Testimonial {
  /** Yorumu yapan kişinin adı */
  name: string;
  /** Rol / şirket — örn: "Kurucu, Acme A.Ş." */
  role: string;
  /** Yorum metni (TR) */
  quoteTR: string;
  /** Yorum metni (EN) — yoksa TR gösterilir */
  quoteEN?: string;
  /** Opsiyonel avatar yolu — örn: "/testimonials/ahmet.jpg" (boşsa baş harf gösterilir) */
  avatar?: string;
}

// Örnek (kopyalayıp doldur, başındaki // işaretlerini kaldır):
// {
//   name: "Ahmet Yılmaz",
//   role: "Kurucu, Acme A.Ş.",
//   quoteTR: "WOOWCODE ekibi projemizi zamanında ve beklentimizin üzerinde teslim etti.",
//   quoteEN: "The WOOWCODE team delivered our project on time and beyond expectations.",
// },

export const testimonials: Testimonial[] = [
  // Henüz yorum yok — eklendiğinde bölüm otomatik görünür.
];
