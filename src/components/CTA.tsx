import Reveal from "@/components/Reveal";
import { IconArrowRight, IconPhone, IconWhatsApp } from "@/components/icons";
import { siteConfig } from "@/lib/site-config";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-brand-900 py-20 text-white lg:py-24">
      {/* Padrão decorativo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-blueprint-grid bg-grid-32 opacity-15"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-brand-600/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-32 h-[400px] w-[400px] rounded-full bg-brand-700/40 blur-3xl"
      />

      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="label-caps text-brand-200">
              Próximo passo
            </span>
          </Reveal>

          <Reveal delay={1}>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Tem um projeto em mente?
            </h2>
          </Reveal>

          <Reveal delay={2}>
            <p className="mx-auto mt-5 max-w-2xl font-body text-lg leading-relaxed text-white/85">
              Fale connosco e descubra como podemos ajudar na execução da sua
              obra ou remodelação. Resposta rápida e orçamento sem compromisso.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <a href="/#contactos" className="btn-primary">
                Pedir Orçamento
                <IconArrowRight size={18} />
              </a>
              <a
                href={`${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3.5 font-display text-sm font-semibold uppercase tracking-wider text-white shadow-precision transition-all hover:-translate-y-0.5 hover:bg-[#1FB957] hover:shadow-precision-lg"
              >
                <IconWhatsApp size={18} />
                Falar no WhatsApp
              </a>
              <a
                href={`tel:${siteConfig.contact.phonePrimaryRaw}`}
                className="inline-flex items-center justify-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-white/90 underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                <IconPhone size={16} />
                {siteConfig.contact.phonePrimary}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
