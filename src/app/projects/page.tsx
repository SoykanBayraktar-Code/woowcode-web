import { Metadata } from "next";
import ProjectsView from "./ProjectsView";

const description =
  "Kendi uygulamalarımız (App Store'da DocuVault ve daha fazlası) ve yapay zekâ, görüntü işleme ve IoT alanlarında geliştirdiğimiz projeler.";

export const metadata: Metadata = {
  title: "Projeler | Uygulamalarımız & Vaka Çalışmaları",
  description,
  openGraph: { title: "Projeler | WOOWCODE", description, url: "/projects", siteName: "WOOWCODE", type: "website" },
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return <ProjectsView />;
}
