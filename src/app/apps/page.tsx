import type { Metadata } from "next";
import AppsIndex from "./AppsIndex";

export const metadata: Metadata = {
  title: "Uygulamalarımız — App Store'da yayındaki iOS uygulamaları",
  description:
    "WOOWCODE'un tasarlayıp geliştirdiği ve App Store'da yayınladığı iPhone uygulamaları: Starlit, DocuVault ve daha fazlası.",
  alternates: { canonical: "/apps" },
};

export default function AppsPage() {
  return <AppsIndex />;
}
