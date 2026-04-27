import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import {
  IconExternalLink,
  IconMail,
  IconMapPin,
  IconPhone,
  IconWhatsApp,
} from "@/components/icons";
import { siteConfig } from "@/lib/site-config";

const CHANNELS = [
  {
    icon: IconPhone,
    label: "Telefone principal",
    value: siteConfig.contact.phonePrimary,
    href: `tel:${siteConfig.contact.phonePrimaryRaw}`,
  },
  {
    icon: IconPhone,
    label: "Telefone secundário",
    value: siteConfig.contact.phoneSecondary,
    href: `tel:${siteConfig.contact.phoneSecondaryRaw}`,
  },
  {
    icon: IconMail,
    label: "E-mail",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    icon: IconWhatsApp,
    label: "WhatsApp",
    value: "Mensagem direta",
    href: `${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`,
    external: true,
  },
];

export default function Contact() {
  // Mapa Google embebido — usa a query da morada (sem precisar de API key)
  const mapsQuery = encodeURIComponent(siteConfig.address.full);
  const embedSrc = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;

  return (
    <section
      id="contactos"
      className="relative bg-surface-subtle py-20 lg:py-28"
    >
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Coluna esquerda */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="label-caps text-brand-600">Contactos</span>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="heading-display mt-3 text-3xl sm:text-4xl lg:text-[42px]">
                Vamos falar sobre o seu projeto
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <div className="mt-5 rule-brand" />
            </Reveal>

            <Reveal delay={2}>
              <p className="mt-6 font-body text-lg leading-relaxed text-ink-600">
                Estamos prontos para ouvir as suas ideias e apresentar a melhor
                solução técnica. Resposta rápida e atendimento profissional.
              </p>
            </Reveal>

            {/* Canais de contacto */}
            <Reveal delay={2}>
              <ul className="mt-8 space-y-3">
                {CHANNELS.map(({ icon: Icon, label, value, href, external }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-4 rounded-xl border border-ink-100 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-precision"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                        <Icon size={20} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="label-caps text-ink-400">{label}</p>
                        <p className="mt-1 truncate font-display text-base font-semibold text-brand-900 group-hover:text-brand-600">
                          {value}
                        </p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Morada */}
            <Reveal delay={3}>
              <div className="mt-6 rounded-2xl border border-ink-100 bg-white p-5">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <IconMapPin size={20} />
                  </span>
                  <div className="flex-1">
                    <p className="label-caps text-ink-400">Morada</p>
                    <p className="mt-1 font-display text-base font-semibold text-brand-900">
                      {siteConfig.address.street}
                    </p>
                    <p className="mt-1 font-body text-sm text-ink-500">
                      {siteConfig.address.parish} · {siteConfig.address.city}
                    </p>
                    <a
                      href={siteConfig.address.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
                    >
                      Abrir no Google Maps <IconExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Horário */}
            <Reveal delay={3}>
              <div className="mt-6 rounded-2xl border border-ink-100 bg-white p-5">
                <p className="label-caps text-ink-400">Horário de atendimento</p>
                <ul className="mt-3 divide-y divide-ink-100">
                  {siteConfig.hours.map((entry) => (
                    <li
                      key={entry.days}
                      className="flex items-center justify-between py-2 font-body text-sm"
                    >
                      <span className="text-ink-600">{entry.days}</span>
                      <span className="font-semibold text-brand-900">
                        {entry.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Coluna direita: formulário + mapa */}
          <div className="lg:col-span-7">
            <Reveal delay={2}>
              <ContactForm />
            </Reveal>

            <Reveal delay={3}>
              <div className="mt-6 overflow-hidden rounded-2xl border border-ink-100 shadow-precision">
                <div className="relative h-[320px] w-full">
                  <iframe
                    title={`Localização da ${siteConfig.legalName}`}
                    src={embedSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                    className="absolute inset-0"
                  />
                </div>
                <div className="flex items-center justify-between gap-4 border-t border-ink-100 bg-white p-4">
                  <p className="font-body text-sm text-ink-500">
                    {siteConfig.address.full}
                  </p>
                  <a
                    href={siteConfig.address.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-1.5 font-display text-xs font-semibold uppercase tracking-wider text-brand-600 transition-colors hover:text-brand-700"
                  >
                    Como chegar <IconExternalLink size={12} />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
