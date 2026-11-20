import { Metadata } from "next";
import { Suspense } from "react";
import ContactHero from "./ContactHero";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export const metadata: Metadata = {
  title: "İletişim | Uygulamanızı Konuşalım",
  description:
    "iPhone veya mobil uygulama fikriniz için WOOWCODE ile iletişime geçin. WhatsApp veya formdan ulaşın, ücretsiz keşif görüşmesi planlayalım.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "İletişim | WOOWCODE",
    description:
      "iPhone veya mobil uygulama fikriniz için WOOWCODE ile iletişime geçin. Ücretsiz keşif görüşmesi planlayalım.",
    type: "website",
    url: "/contact",
  },
};

function ContactFormFallback() {
  return (
    <div className="card-line p-8 animate-pulse">
      <div className="h-8 bg-[var(--background-secondary)] rounded w-1/3 mb-6" />
      <div className="space-y-4">
        <div className="h-12 bg-[var(--background-secondary)] rounded" />
        <div className="h-12 bg-[var(--background-secondary)] rounded" />
        <div className="h-12 bg-[var(--background-secondary)] rounded" />
        <div className="h-32 bg-[var(--background-secondary)] rounded" />
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* Hero Section */}
      <ContactHero />

      {/* Contact Content */}
      <section className="border-t border-[var(--border-color)] py-16 lg:py-24">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_1fr] lg:gap-8">
            {/* Contact Form */}
            <Suspense fallback={<ContactFormFallback />}>
              <ContactForm />
            </Suspense>

            {/* Contact Info */}
            <ContactInfo />
          </div>
        </div>
      </section>
    </main>
  );
}
