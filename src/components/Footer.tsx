import Link from "next/link";

import Logo from "@/components/Logo";
import {
  IconExternalLink,
  IconFacebook,
  IconMail,
  IconMapPin,
  IconPhone,
  IconWhatsApp,
} from "@/components/icons";
import { siteConfig } from "@/lib/site-config";
import { SERVICES } from "@/lib/services-data";

const NAV_QUICK = [
  { label: "Início", href: "/" },
  { label: "Empresa", href: "/empresa" },
  { label: "Serviços", href: "/servicos" },
  { label: "Projetos", href: "/projetos" },
  { label: "Contactos", href: "/#contactos" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const topServices = SERVICES.slice(0, 5);

  return (
    <footer className="relative overflow-hidden bg-brand-900 text-white">
      {/* Faixa superior decorativa */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-brand-600 to-transparent"
      />

      <div className="container-page py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Coluna 1 — branding */}
          <div className="lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-5 max-w-sm font-body text-sm leading-relaxed text-white/70">
              {siteConfig.legalName}. {siteConfig.tagline} Empresa de
              engenharia e construção sediada em Vila do Conde, com
              {` ${siteConfig.yearsOfExperience} anos `}
              de experiência ao serviço dos nossos clientes.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook da Group Cadeias"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white/80 transition-all hover:border-white hover:bg-white/5 hover:text-white"
              >
                <IconFacebook size={18} />
              </a>
              <a
                href={`${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Group Cadeias"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white/80 transition-all hover:border-white hover:bg-white/5 hover:text-white"
              >
                <IconWhatsApp size={18} />
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                aria-label="Enviar e-mail à Group Cadeias"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white/80 transition-all hover:border-white hover:bg-white/5 hover:text-white"
              >
                <IconMail size={18} />
              </a>
            </div>
          </div>

          {/* Coluna 2 — navegação */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              Navegação
            </h4>
            <ul className="mt-5 space-y-3">
              {NAV_QUICK.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 — serviços */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              Serviços
            </h4>
            <ul className="mt-5 space-y-3">
              {topServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/servicos/${service.slug}`}
                    className="font-body text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4 — contacto */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              Contacto
            </h4>
            <ul className="mt-5 space-y-3 font-body text-sm">
              <li className="flex items-start gap-3 text-white/80">
                <IconPhone size={16} className="mt-0.5 shrink-0 text-brand-200" />
                <a
                  href={`tel:${siteConfig.contact.phonePrimaryRaw}`}
                  className="transition-colors hover:text-white"
                >
                  {siteConfig.contact.phonePrimary}
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <IconMail size={16} className="mt-0.5 shrink-0 text-brand-200" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="break-all transition-colors hover:text-white"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <IconMapPin size={16} className="mt-0.5 shrink-0 text-brand-200" />
                <span>
                  {siteConfig.address.street},<br />
                  {siteConfig.address.parish}, {siteConfig.address.city}
                </span>
              </li>
              <li>
                <a
                  href={siteConfig.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-display text-xs font-semibold uppercase tracking-wider text-brand-200 transition-colors hover:text-white"
                >
                  Ver no mapa <IconExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <p className="font-body text-xs text-white/50">
            © {year} {siteConfig.legalName}. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-body text-xs text-white/50">
            <span>NIF disponível mediante pedido</span>
            <span aria-hidden className="hidden md:inline">·</span>
            <span>{siteConfig.address.city} · Portugal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
