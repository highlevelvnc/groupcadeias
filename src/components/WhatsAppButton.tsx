"use client";

import { useEffect, useState } from "react";

import { IconWhatsApp } from "@/components/icons";
import { siteConfig } from "@/lib/site-config";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  // Aparece apenas depois do utilizador começar a explorar a página
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const href = `${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    siteConfig.contact.whatsappMessage,
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar connosco no WhatsApp"
      className={`fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 font-display text-sm font-semibold text-white shadow-precision-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1FB957] sm:bottom-7 sm:right-7 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <span className="relative flex h-7 w-7 items-center justify-center">
        <span
          aria-hidden
          className="absolute inset-0 animate-ping rounded-full bg-white/40"
        />
        <IconWhatsApp size={22} className="relative" />
      </span>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
