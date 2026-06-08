import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FaqSection from "@/components/sections/FaqSection";
import BlogPreviewSection from "@/components/sections/BlogPreviewSection";
import { translations } from "@/lib/translations";
import { faqPageLd, servicesLd, ldJson } from "@/lib/jsonld";

export default function Home() {
  const faqLd = faqPageLd(translations.TR.faq.items);
  const servicesStructured = servicesLd(
    Object.values(translations.TR.services.items).map((s) => ({
      name: s.title,
      description: s.description,
    }))
  );

  return (
    <>
      {/* JSON-LD: SSS zengin sonucu */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson(faqLd) }} />
      {/* JSON-LD: Sunulan hizmetler */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson(servicesStructured) }} />
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <TestimonialsSection />
      <FaqSection />
      <BlogPreviewSection />
    </>
  );
}

