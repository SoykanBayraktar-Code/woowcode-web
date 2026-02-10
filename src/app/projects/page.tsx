import { Metadata } from "next";
import ProjectsHero from "./ProjectsHero";
import ProjectsList from "./ProjectsList";
import ProjectsCTA from "./ProjectsCTA";

export const metadata: Metadata = {
  title: "Projelerimiz | WOOWCODE",
  description: "WOOWCODE olarak gerçekleştirdiğimiz başarılı projeler ve vaka analizleri. Görüntü işleme, IoT ve yapay zeka çözümlerimizi keşfedin.",
  openGraph: {
    title: "Projelerimiz | WOOWCODE",
    description: "WOOWCODE olarak gerçekleştirdiğimiz başarılı projeler ve vaka analizleri. Görüntü işleme, IoT ve yapay zeka çözümlerimizi keşfedin.",
    url: "/projects",
    siteName: "WOOWCODE",
    type: "website",
  },
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-20">
      <ProjectsHero />
      <ProjectsList />
      <ProjectsCTA />
    </div>
  );
}
