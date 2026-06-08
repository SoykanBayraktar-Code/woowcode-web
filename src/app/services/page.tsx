import { Metadata } from "next";
import ServicesHero from "./ServicesHero";
import ServicesList from "./ServicesList";
import ServicesProcess from "./ServicesProcess";
import ServicesPackages from "./ServicesPackages";
import ServicesCTA from "./ServicesCTA";

export const metadata: Metadata = {
  title: "Hizmetlerimiz | Web, Mobil, SaaS & Yapay Zekâ Geliştirme",
  description: "Web ve mobil uygulama geliştirme, SaaS ürün geliştirme, yapay zekâ, veri mühendisliği ve IoT çözümleri. Projenize uygun şeffaf paketlerle uçtan uca hizmet.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-20">
      <ServicesHero />
      <ServicesList />
      <ServicesProcess />
      <ServicesPackages />
      <ServicesCTA />
    </main>
  );
}
