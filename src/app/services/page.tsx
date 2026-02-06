import { Metadata } from "next";
import ServicesHero from "./ServicesHero";
import ServicesList from "./ServicesList";
import ServicesProcess from "./ServicesProcess";
import ServicesCTA from "./ServicesCTA";

export const metadata: Metadata = {
  title: "Hizmetlerimiz | WOOWCODE",
  description: "Otonom drone sistemleri, endüstriyel AI, veri mühendisliği, dijital ikiz, SaaS geliştirme ve IoT çözümleri ile dijital dönüşümünüzü hızlandırın.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-20">
      <ServicesHero />
      <ServicesList />
      <ServicesProcess />
      <ServicesCTA />
    </main>
  );
}
