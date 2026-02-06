"use client";

import { motion } from "framer-motion";

interface BlogContentProps {
  content: string;
}

export default function BlogContent({ content }: BlogContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <div
        className="prose prose-invert prose-lg max-w-none
          prose-headings:text-[var(--foreground)] prose-headings:font-bold
          prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-b prose-h2:border-[var(--border-color)] prose-h2:pb-2
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
          prose-p:text-[var(--foreground-muted)] prose-p:leading-relaxed prose-p:mb-4
          prose-strong:text-[var(--foreground)] prose-strong:font-semibold
          prose-a:text-[var(--neon-blue)] prose-a:no-underline hover:prose-a:underline
          prose-ul:text-[var(--foreground-muted)] prose-ul:my-4
          prose-ol:text-[var(--foreground-muted)] prose-ol:my-4
          prose-li:my-1
          prose-code:text-[var(--neon-blue)] prose-code:bg-[var(--background-secondary)] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
          prose-pre:bg-[var(--background-secondary)] prose-pre:border prose-pre:border-[var(--border-color)] prose-pre:rounded-xl
          prose-blockquote:border-l-[var(--neon-blue)] prose-blockquote:bg-[var(--background-secondary)] prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-r-xl prose-blockquote:not-italic
          prose-table:border prose-table:border-[var(--border-color)]
          prose-th:bg-[var(--background-secondary)] prose-th:p-3 prose-th:text-left prose-th:text-[var(--foreground)]
          prose-td:p-3 prose-td:border-t prose-td:border-[var(--border-color)] prose-td:text-[var(--foreground-muted)]
          prose-hr:border-[var(--border-color)]
        "
        dangerouslySetInnerHTML={{ __html: formatContent(content) }}
      />
    </motion.div>
  );
}

// Simple markdown to HTML converter
function formatContent(content: string): string {
  let html = content;

  // Headers
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

  // Bold
  html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');

  // Italic
  html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');

  // Code blocks
  html = html.replace(/```([\s\S]*?)```/gim, '<pre><code>$1</code></pre>');

  // Inline code
  html = html.replace(/`(.*?)`/gim, '<code>$1</code>');

  // Unordered lists
  html = html.replace(/^\- (.*$)/gim, '<li>$1</li>');
  html = html.replace(/(<li>[\s\S]*<\/li>)/g, '<ul>$1</ul>');

  // Ordered lists
  html = html.replace(/^\d+\. (.*$)/gim, '<li>$1</li>');

  // Links
  html = html.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2">$1</a>');

  // Tables - basic support
  const tableRegex = /\|(.+)\|/g;
  if (tableRegex.test(html)) {
    const lines = html.split('\n');
    let inTable = false;
    let tableHtml = '';
    let isHeader = true;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.startsWith('|') && line.endsWith('|')) {
        if (!inTable) {
          tableHtml = '<table>';
          inTable = true;
        }
        if (line.includes('---')) {
          isHeader = false;
          continue;
        }
        const cells = line.slice(1, -1).split('|').map(c => c.trim());
        const tag = isHeader ? 'th' : 'td';
        const row = `<tr>${cells.map(c => `<${tag}>${c}</${tag}>`).join('')}</tr>`;
        tableHtml += row;
      } else if (inTable) {
        tableHtml += '</table>';
        lines[i] = tableHtml + '\n' + line;
        inTable = false;
        tableHtml = '';
        isHeader = true;
      }
    }
    if (inTable) {
      tableHtml += '</table>';
      lines.push(tableHtml);
    }
    html = lines.join('\n');
  }

  // Paragraphs
  html = html.replace(/\n\n/gim, '</p><p>');
  html = '<p>' + html + '</p>';

  // Clean up empty paragraphs
  html = html.replace(/<p>\s*<\/p>/gim, '');
  html = html.replace(/<p>\s*<h/gim, '<h');
  html = html.replace(/<\/h(\d)>\s*<\/p>/gim, '</h$1>');
  html = html.replace(/<p>\s*<ul>/gim, '<ul>');
  html = html.replace(/<\/ul>\s*<\/p>/gim, '</ul>');
  html = html.replace(/<p>\s*<table>/gim, '<table>');
  html = html.replace(/<\/table>\s*<\/p>/gim, '</table>');

  return html;
}
