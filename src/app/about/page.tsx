import { Metadata } from "next";
import AboutHero from "./AboutHero";
import AboutMission from "./AboutMission";
import AboutValues from "./AboutValues";
import AboutTeam from "./AboutTeam";
import AboutCTA from "./AboutCTA";

export const metadata: Metadata = {
  title: "Hakkımızda | Kurumsal Teknoloji Çözüm Ortağınız",
  description:
    "WOOWCODE, endüstriyel yapay zeka, otonom sistemler ve dijital dönüşüm alanında Türkiye'nin öncü teknoloji şirketidir. Misyonumuz, vizyonumuz ve değerlerimizi keşfedin.",
  openGraph: {
    title: "Hakkımızda | WOOWCODE - Kurumsal Teknoloji Çözüm Ortağınız",
    description:
      "Endüstriyel yapay zeka ve dijital dönüşüm alanında öncü çözümler sunan WOOWCODE'u yakından tanıyın.",
    type: "website",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <AboutHero />
      <AboutMission />
      <AboutValues />
      <AboutTeam />
      <AboutCTA />
    </div>
  );
}
