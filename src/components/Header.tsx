"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import Logo from "@/components/Logo";
import { IconClose, IconMenu, IconPhone } from "@/components/icons";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/site-config";

const NAV_LINKS = [
  { label: "Início", href: "/" },
  { label: "Empresa", href: "/empresa" },
  { label: "Serviços", href: "/servicos" },
  { label: "Projetos", href: "/projetos" },
  { label: "Contactos", href: "/#contactos" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloqueia scroll quando o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Fecha o menu ao mudar de rota
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const close = () => setOpen(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false; // anchors da home não ficam ativos
    return pathname?.startsWith(href);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-ink-100 bg-white/90 shadow-precision backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <Link
          href="/"
          aria-label={`${siteConfig.name} — voltar ao início`}
          className="z-10"
        >
          <Logo variant="dark" />
        </Link>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-8 lg:flex"
        >
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative font-display text-sm font-medium uppercase tracking-wider transition-colors",
                  active
                    ? "text-brand-700"
                    : "text-ink-600 hover:text-brand-700",
                )}
              >
                {link.label}
                {active && (
                  <span
                    aria-hidden
                    className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-brand-600"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${siteConfig.contact.phonePrimaryRaw}`}
            className="inline-flex items-center gap-2 rounded-lg border border-ink-100 px-3 py-2 font-display text-sm font-medium text-brand-700 transition-colors hover:border-brand-600 hover:text-brand-600"
          >
            <IconPhone size={16} />
            {siteConfig.contact.phonePrimary}
          </a>
          <Link href="/#contactos" className="btn-primary">
            Pedir Orçamento
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((prev) => !prev)}
          className="z-10 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-ink-100 bg-white text-brand-900 transition-colors hover:border-brand-600 hover:text-brand-600 lg:hidden"
        >
          {open ? <IconClose size={22} /> : <IconMenu size={22} />}
        </button>
      </div>

      {/* Backdrop mobile */}
      <div
        aria-hidden
        onClick={close}
        className={cn(
          "fixed inset-0 z-30 bg-brand-900/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      {/* Painel mobile (slide-in da direita) */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal={open}
        aria-label="Menu de navegação"
        className={cn(
          "fixed bottom-0 right-0 top-0 z-40 w-full max-w-sm bg-white shadow-precision-xl transition-transform duration-300 ease-out lg:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex h-full flex-col justify-between px-7 pb-10 pt-24">
          <nav className="flex flex-col" aria-label="Navegação móvel">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className={cn(
                    "group flex items-center justify-between border-b border-ink-100 py-4 font-display text-xl font-semibold transition-colors",
                    active
                      ? "text-brand-600"
                      : "text-brand-900 hover:text-brand-600",
                  )}
                >
                  <span>{link.label}</span>
                  <span
                    aria-hidden
                    className="text-ink-300 transition-all group-hover:translate-x-1 group-hover:text-brand-600"
                  >
                    →
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="flex flex-col gap-3">
            <a
              href={`tel:${siteConfig.contact.phonePrimaryRaw}`}
              onClick={close}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-ink-200 px-6 py-3.5 font-display text-sm font-semibold uppercase tracking-wider text-brand-700"
            >
              <IconPhone size={18} /> {siteConfig.contact.phonePrimary}
            </a>
            <Link
              href="/#contactos"
              onClick={close}
              className="btn-primary w-full"
            >
              Pedir Orçamento
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
