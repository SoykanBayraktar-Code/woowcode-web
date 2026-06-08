"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { waLink, telLink } from "@/lib/site";

/**
 * Global floating contact widget — her sayfada sağ-altta sabit.
 * Birincil aksiyon: WhatsApp (hazır mesaj, yeni sekme).
 * İkincil aksiyon: tıkla-ara (tel:).
 */
export default function FloatingContact() {
  const { t, language } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 print:hidden">
      {/* Açılır aksiyonlar */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-end gap-3"
          >
            {/* WhatsApp */}
            <a
              href={waLink(language)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.widget.whatsapp}
              className="group flex items-center gap-3"
            >
              <span className="px-3 py-1.5 rounded-lg text-sm font-medium text-[var(--foreground)] glass-card whitespace-nowrap shadow-lg">
                {t.widget.whatsapp}
              </span>
              <span className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.5)] transition-transform group-hover:scale-110">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.886 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.142 1.595 5.945L0 24l6.305-1.654a11.96 11.96 0 005.71 1.454h.005c6.581 0 11.94-5.335 11.943-11.894 0-3.18-1.26-6.165-3.55-8.41" />
                </svg>
              </span>
            </a>

            {/* Ara */}
            <a
              href={telLink}
              aria-label={t.widget.call}
              className="group flex items-center gap-3"
            >
              <span className="px-3 py-1.5 rounded-lg text-sm font-medium text-[var(--foreground)] glass-card whitespace-nowrap shadow-lg">
                {t.widget.call}
              </span>
              <span className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--neon-blue)] to-[var(--electric-violet)] flex items-center justify-center shadow-[0_4px_20px_rgba(13,71,161,0.5)] transition-transform group-hover:scale-110">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ana tetik buton */}
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t.widget.label}
        aria-expanded={open}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[var(--neon-blue)] to-[var(--electric-violet)] flex items-center justify-center shadow-[0_4px_24px_rgba(13,71,161,0.55)]"
      >
        {/* Nabız halkası (sadece kapalıyken) */}
        {!open && (
          <span className="absolute inset-0 rounded-full bg-[var(--neon-blue)] opacity-60 animate-ping" />
        )}
        <span className="relative">
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.svg
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </motion.svg>
            ) : (
              <motion.svg
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="w-7 h-7 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </motion.svg>
            )}
          </AnimatePresence>
        </span>
      </motion.button>
    </div>
  );
}
