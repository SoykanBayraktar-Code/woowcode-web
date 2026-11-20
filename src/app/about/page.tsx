import { Metadata } from "next";
import AboutView from "./AboutView";

export const metadata: Metadata = {
  title: "Hakkımızda | Antalya'dan App Store'a",
  description:
    "WOOWCODE, 2024'te Antalya'da kurulmuş bir iOS ve mobil uygulama stüdyosu. Kendi uygulamalarımızı App Store'da yayınlıyor, aynı özeni müşterilerimizin ürünlerine taşıyoruz.",
  openGraph: {
    title: "Hakkımızda | WOOWCODE",
    description: "Antalya merkezli iOS ve mobil uygulama stüdyosu. Kendi uygulamalarımız App Store'da.",
    type: "website",
  },
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <AboutView />;
}
