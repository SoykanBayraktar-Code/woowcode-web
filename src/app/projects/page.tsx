import { Metadata } from "next";
import ProjectsView from "./ProjectsView";

const description =
  "App Store'da yayındaki kendi uygulamalarımız (Starlit, DocuVault) ve yapay zekâ, görüntü işleme ve IoT alanlarında geliştirdiğimiz projeler.";

export const metadata: Metadata = {
  title: "Projeler | Uygulamalarımız & Vaka Çalışmaları",
  description,
  openGraph: { title: "Projeler | WOOWCODE", description, url: "/projects", siteName: "WOOWCODE", type: "website" },
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return <ProjectsView />;
}
