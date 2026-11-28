import type { Metadata } from "next";
import AppsIndex from "./AppsIndex";

export const metadata: Metadata = {
  title: "Uygulamalarımız — WOOWCODE'un iOS uygulamaları",
  description:
    "WOOWCODE'un tasarlayıp geliştirdiği iPhone uygulamaları: App Store'da DocuVault ve daha fazlası.",
  alternates: { canonical: "/apps" },
};

export default function AppsPage() {
  return <AppsIndex />;
}
