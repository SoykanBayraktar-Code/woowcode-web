// ============================================================================
// Uygulama gizlilik politikaları — derleme anında Markdown → HTML
// Kaynak: content/<slug>/*.md.
// Markdown → HTML dönüştürücü:
// yayımlanmayan kısımlar (baştaki ">" taslak notu, HTML yorumları ve "---"
// sonrasındaki "Yayın öncesi kontrol listesi") atılır; metin yeniden yazılmaz.
// ============================================================================

import fs from "node:fs";
import path from "node:path";

const PLACEHOLDER = /\[[^[\]]+\]/g;

export type PolicyFile =
  | "PRIVACY-POLICY.md"
  | "GIZLILIK-POLITIKASI.md"
  | "TERMS-OF-USE.md"
  | "KULLANIM-KOSULLARI.md"
  | "KVKK-AYDINLATMA-METNI.md";

function escapeHtml(text: string): string {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/** Satır içi Markdown: kalın, kod ve e-posta bağlantısı. Önce HTML'den kaçılır. */
function inline(text: string): string {
  let out = escapeHtml(text);
  out = out.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  out = out.replace(/`([^`]+)`/g, "<code>$1</code>");
  out = out.replace(
    /\b([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})\b/g,
    '<a href="mailto:$1">$1</a>'
  );
  return out;
}

/** Yayımlanmayan kısımları atar: yorumlar, "---" sonrası (kontrol listesi) ve ">" taslak notu. */
function publishedPart(markdown: string): string {
  let md = markdown.replace(/<!--[\s\S]*?-->/g, "");
  md = md.split(/^---\s*$/m)[0];
  return md
    .split("\n")
    .filter((line) => !line.startsWith(">"))
    .join("\n");
}

/** Politika dosyalarında kullanılan Markdown alt kümesini HTML'e çevirir. */
function convert(markdown: string): { title: string; html: string } {
  let title = "";
  const out: string[] = [];
  let paragraph: string[] = [];
  let items: string[] = [];
  // "İletişim / Contact" bölümündeki adres bloğu satır satır kalır.
  let inContactSection = false;

  const flush = () => {
    if (paragraph.length) {
      const isMeta =
        paragraph.length > 1 && paragraph.every((l) => l.startsWith("**") || l.startsWith("["));
      if (isMeta) {
        out.push(`<p class="policy-meta">${paragraph.map(inline).join("<br>\n")}</p>`);
      } else if (inContactSection && paragraph.length > 1) {
        out.push(`<p>${paragraph.map(inline).join("<br>\n")}</p>`);
      } else {
        out.push(`<p>${inline(paragraph.join(" "))}</p>`);
      }
      paragraph = [];
    }
    if (items.length) {
      out.push(`<ul>\n${items.map((i) => `  <li>${inline(i)}</li>`).join("\n")}\n</ul>`);
      items = [];
    }
  };

  for (const raw of markdown.split("\n")) {
    const line = raw.trimEnd();
    if (!line.trim()) {
      flush();
    } else if (line.startsWith("# ")) {
      flush();
      title = line.slice(2).trim();
      out.push(`<h1>${inline(title)}</h1>`);
    } else if (line.startsWith("## ")) {
      flush();
      const heading = line.slice(3).trim();
      inContactSection = /^\d+\.\s*(İletişim|Contact)$/i.test(heading);
      out.push(`<h2>${inline(heading)}</h2>`);
    } else if (line.startsWith("### ")) {
      flush();
      out.push(`<h3>${inline(line.slice(4).trim())}</h3>`);
    } else if (line.startsWith("- ")) {
      if (paragraph.length) flush();
      items.push(line.slice(2).trim());
    } else if (items.length && raw.startsWith("  ")) {
      items[items.length - 1] += " " + line.trim();
    } else {
      if (items.length) flush();
      paragraph.push(line.trim());
    }
  }
  flush();
  return { title, html: out.join("\n") };
}

/** Politikayı okur ve HTML'e çevirir. Yer tutucu kaldıysa derlemeyi durdurur. */
export function loadPolicy(slug: string, file: PolicyFile): { title: string; html: string } {
  const source = fs.readFileSync(path.join(process.cwd(), "content", slug, file), "utf-8");
  const published = publishedPart(source);
  const leftovers = published.match(PLACEHOLDER);
  if (leftovers) {
    throw new Error(`${slug}/${file}: doldurulmamış yer tutucu var: ${[...new Set(leftovers)].join(", ")}`);
  }
  return convert(published);
}
