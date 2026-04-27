import { siteConfig } from "@/lib/site-config";

/**
 * Faixa fina entre Sobre e Serviços — slogan oficial + ponto de cobertura.
 * Reforça a identidade ("Damos vida ao seu espaço") sem ser intrusiva.
 */
export default function TaglineStrip() {
  return (
    <section
      aria-label="Slogan e cobertura geográfica"
      className="relative overflow-hidden bg-brand-900 py-10 text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-blueprint-grid bg-grid-32 opacity-15"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/2 hidden h-64 w-64 -translate-y-1/2 rounded-full bg-brand-600/40 blur-3xl md:block"
      />

      <div className="container-page relative">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-10">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-600 font-display text-base font-bold text-white">
              {siteConfig.yearsOfExperience}
            </span>
            <div>
              <p className="font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-200">
                Slogan
              </p>
              <p className="mt-1 font-display text-xl font-semibold leading-snug text-white sm:text-2xl">
                {siteConfig.tagline}
              </p>
            </div>
          </div>

          <span aria-hidden className="hidden h-12 w-px bg-white/15 md:block" />

          <div className="text-center md:text-left">
            <p className="font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-200">
              Cobertura
            </p>
            <p className="mt-1 font-body text-base leading-snug text-white/85">
              Vila do Conde, Porto, Póvoa de Varzim e <br className="hidden sm:inline" />
              região norte de Portugal.
            </p>
          </div>

          <a
            href="/#contactos"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 font-display text-xs font-semibold uppercase tracking-wider text-brand-900 transition-all hover:-translate-y-0.5 hover:bg-brand-100"
          >
            Pedir orçamento
          </a>
        </div>
      </div>
    </section>
  );
}
