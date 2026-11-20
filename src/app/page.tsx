import HeroSection from "@/components/sections/HeroSection";
import LiveAppsSection from "@/components/sections/LiveAppsSection";
import ProcessScene from "@/components/sections/ProcessScene";
import MobileServicesSection from "@/components/sections/MobileServicesSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FaqSection from "@/components/sections/FaqSection";
import BlogPreviewSection from "@/components/sections/BlogPreviewSection";
import { translations } from "@/lib/translations";
import { mobileServices } from "@/lib/home";
import { faqPageLd, servicesLd, ldJson } from "@/lib/jsonld";

export default function Home() {
  const faqLd = faqPageLd(translations.TR.faq.items);
  const servicesStructured = servicesLd(
    mobileServices.items.map((s) => ({ name: s.title.TR, description: s.body.TR }))
  );

  return (
    <>
      {/* JSON-LD: SSS zengin sonucu */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson(faqLd) }} />
      {/* JSON-LD: Sunulan hizmetler */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson(servicesStructured) }} />
      <HeroSection />
      <LiveAppsSection />
      <ProcessScene />
      <MobileServicesSection />
      <WhyUsSection />
      <TestimonialsSection />
      <FaqSection />
      <BlogPreviewSection />
    </>
  );
}
