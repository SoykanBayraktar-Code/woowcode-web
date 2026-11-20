import { Metadata } from "next";
import ServicesView from "./ServicesView";

export const metadata: Metadata = {
  title: "Hizmetler | iOS & Mobil Uygulama Geliştirme",
  description:
    "Native iOS (SwiftUI) uygulama geliştirme, widget ve Live Activities, Android/cross-platform, UI/UX tasarım, backend, yapay zekâ entegrasyonu ve App Store yayını. Şeffaf paketler.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return <ServicesView />;
}
