import { Metadata } from "next";
import { Suspense } from "react";
import ContactHero from "./ContactHero";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export const metadata: Metadata = {
  title: "İletişim | Projeniz İçin Ücretsiz Görüşme",
  description:
    "Web, mobil, SaaS veya yapay zekâ projeniz için WOOWCODE ile iletişime geçin. WhatsApp veya formdan ulaşın, ücretsiz keşif görüşmesi planlayalım.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "İletişim | WOOWCODE",
    description:
      "Web, mobil, SaaS veya yapay zekâ projeniz için WOOWCODE ile iletişime geçin. Ücretsiz keşif görüşmesi planlayalım.",
    type: "website",
    url: "/contact",
  },
};

function ContactFormFallback() {
  return (
    <div className="glass-card rounded-2xl p-8 animate-pulse">
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
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
