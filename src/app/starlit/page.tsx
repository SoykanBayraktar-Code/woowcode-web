import type { Metadata } from "next";
import Link from "next/link";
import StarlitShell, { STARLIT_TERMS_URL } from "@/components/starlit/StarlitShell";
import { site, telLink, mailLink } from "@/lib/site";

export const dynamic = "force-static";

const description =
  "Starlit: a self-help app for routines, mood logging and thought records. Support and privacy.";

export const metadata: Metadata = {
  title: "Starlit — Support",
  description,
  alternates: { canonical: "/starlit" },
  openGraph: { title: "Starlit — Support", description, type: "website", url: "/starlit" },
};

const ADDRESS = "Şirinyalı Mah. 1533. Sokak No:49/2, Muratpaşa/Antalya, Türkiye";

const link = "text-[#8ab4ff] underline underline-offset-2";
const card =
  "rounded-2xl border border-[var(--card-border)] bg-[var(--background-secondary)] p-5 sm:p-6 my-6";
const body = "text-[var(--foreground-muted-bright)] leading-relaxed";
const meta = "text-sm text-[var(--foreground-muted)] leading-relaxed";

function Contact({ lang }: { lang: "en" | "tr" }) {
  return (
    <p className={`${body} mt-3`}>
      <strong className="text-[var(--foreground)]">{site.legalName}</strong>
      <br />
      {ADDRESS}
      <br />
      {lang === "en" ? "Email" : "E-posta"}:{" "}
      <a className={link} href={mailLink}>
        {site.email}
      </a>
      <br />
      {lang === "en" ? "Phone" : "Telefon"}:{" "}
      <a className={link} href={telLink}>
        {site.phone.display}
      </a>
    </p>
  );
}

export default function StarlitSupportPage() {
  return (
    <StarlitShell
      lang="en"
      nav={[
        { href: "/starlit/privacy", label: "Privacy Policy" },
        { href: "/starlit/gizlilik", label: "Gizlilik Politikası", lang: "tr" },
      ]}
    >
      <h1 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-6">Starlit</h1>

      <section lang="en" className="space-y-4">
        <p className={body}>
          Starlit is a self-help app for iPhone: small routines, one-tap mood logging and thought
          records. No account, no server; what you write stays on your phone, with an optional
          backup to your own iCloud.
        </p>
        <div className={card}>
          <h2 className="text-lg font-semibold text-[var(--foreground)]">Support</h2>
          <p className={`${body} mt-2`}>
            Questions or a problem with the app? Write to{" "}
            <a className={link} href={mailLink}>
              {site.email}
            </a>
            . We usually reply within one business day.
          </p>
          <Contact lang="en" />
        </div>
        <ul className={`${body} list-disc pl-5 space-y-1`}>
          <li>
            <Link className={link} href="/starlit/privacy">
              Privacy Policy
            </Link>
          </li>
          <li>
            <a className={link} href={STARLIT_TERMS_URL} rel="noopener">
              Terms of Use (Apple&apos;s standard license agreement)
            </a>
          </li>
        </ul>
        <p className={meta}>
          Starlit is not a medical device, does not diagnose and is not a substitute for treatment.
          In an emergency, call the emergency number where you are.
        </p>
      </section>

      <section lang="tr" className="space-y-4 mt-12 pt-8 border-t border-[var(--border-color)]">
        <h2 className="text-2xl font-bold text-[var(--foreground)]">Türkçe</h2>
        <p className={body}>
          Starlit, iPhone için bir kendine yardım uygulaması: küçük rutinler, tek dokunuşla ruh hali
          kaydı ve düşünce kayıtları. Hesap yok, sunucu yok; yazdıkların telefonunda kalır, istersen
          kendi iCloud&apos;una yedeklenir.
        </p>
        <div className={card}>
          <h3 className="text-lg font-semibold text-[var(--foreground)]">Destek</h3>
          <p className={`${body} mt-2`}>
            Bir sorun ya da uygulamayla ilgili bir sorunun mu var?{" "}
            <a className={link} href={mailLink}>
              {site.email}
            </a>{" "}
            adresine yaz. Genellikle bir iş günü içinde yanıt veririz.
          </p>
          <Contact lang="tr" />
        </div>
        <ul className={`${body} list-disc pl-5 space-y-1`}>
          <li>
            <Link className={link} href="/starlit/gizlilik">
              Gizlilik Politikası
            </Link>
          </li>
          <li>
            <a className={link} href={STARLIT_TERMS_URL} rel="noopener">
              Kullanım Koşulları (Apple&apos;ın standart lisans sözleşmesi)
            </a>
          </li>
        </ul>
        <p className={meta}>
          Starlit tıbbi cihaz değildir, tanı koymaz ve tedavinin yerini tutmaz. Acil bir durumda
          bulunduğun yerin acil yardım hattını ara.
        </p>
      </section>
    </StarlitShell>
  );
}
