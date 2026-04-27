import Image from "next/image";

import Reveal from "@/components/Reveal";
import { IconArrowRight, IconCheck, IconStar } from "@/components/icons";
import { siteConfig } from "@/lib/site-config";

const STATS = [
  { value: `${siteConfig.yearsOfExperience}+`, label: "Anos de experiência" },
  { value: "100%", label: "Compromisso técnico" },
  { value: "Norte", label: "Cobertura nacional" },
];

const TRUST_POINTS = [
  "Construção civil e remodelações",
  "Engenharia, projetos e licenciamento",
  "Acompanhamento e gestão de obra",
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[700px] items-center overflow-hidden bg-brand-900 text-white sm:min-h-[760px] lg:min-h-[860px]"
    >
      {/* Imagem de fundo — substituível por outra obra real da empresa */}
      <Image
        src="/images/obra-edificio-novo.jpeg"
        alt="Obra de construção da Group Cadeias — edifício em fase final de acabamentos"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover animate-ken-burns"
      />

      {/* Overlays de cor + grid técnico (estilo blueprint) */}
      <div className="absolute inset-0 -z-10 bg-hero-overlay" />
      <div className="absolute inset-0 -z-10 bg-blueprint-grid bg-grid-32 opacity-25" />
      <div className="pointer-events-none absolute -bottom-px left-0 right-0 -z-10 h-32 bg-gradient-to-b from-transparent to-brand-900" />

      <div className="container-page relative w-full pb-20 pt-36 lg:pb-32 lg:pt-44">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal>
              <span className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-4 py-2 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-brand-300 shadow-[0_0_12px_rgba(167,200,255,0.8)]" />
                <span className="label-caps text-white/90">
                  Vila do Conde · Norte de Portugal
                </span>
              </span>
            </Reveal>

            <Reveal delay={1}>
              <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[68px]">
                Engenharia e Construção com{" "}
                <span className="text-brand-200">Rigor</span>,{" "}
                <span className="text-brand-200">Qualidade</span> e{" "}
                <span className="text-brand-200">Confiança</span>.
              </h1>
            </Reveal>

            <Reveal delay={2}>
              <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-white/85 sm:text-xl">
                Soluções completas para construção, remodelação e projetos de
                engenharia em Vila do Conde e região — executadas com
                acompanhamento próximo e padrões técnicos elevados.
              </p>
            </Reveal>

            <Reveal delay={3}>
              <ul className="mt-8 grid gap-3 sm:max-w-xl sm:grid-cols-1">
                {TRUST_POINTS.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 text-white/90"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-600/40 text-brand-100 ring-1 ring-inset ring-white/20">
                      <IconCheck size={16} />
                    </span>
                    <span className="font-body text-base">{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={4}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a href="#contactos" className="btn-primary">
                  Pedir Orçamento
                  <IconArrowRight size={18} />
                </a>
                <a href="#servicos" className="btn-secondary">
                  Conhecer Serviços
                </a>
              </div>
            </Reveal>
          </div>

          {/* Cartão lateral com prova social — desktop */}
          <div className="hidden lg:col-span-4 lg:block">
            <Reveal delay={2}>
              <div className="rounded-2xl border border-white/15 bg-white/[0.06] p-7 shadow-precision-xl backdrop-blur-md">
                <div className="flex items-center gap-2 text-brand-200">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <IconStar key={i} size={18} />
                  ))}
                </div>
                <p className="mt-4 font-display text-xl font-semibold leading-snug text-white">
                  &ldquo;Damos vida ao seu espaço — com rigor técnico em cada
                  fase da obra.&rdquo;
                </p>
                <p className="mt-3 font-body text-sm text-white/70">
                  {siteConfig.legalName}
                </p>

                <div className="mt-6 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                  {STATS.map((stat) => (
                    <div key={stat.label}>
                      <p className="font-display text-2xl font-bold text-white">
                        {stat.value}
                      </p>
                      <p className="mt-1 font-display text-[11px] uppercase tracking-wider text-white/60">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Stats em mobile/tablet */}
        <Reveal delay={3} className="mt-14 lg:hidden">
          <dl className="grid grid-cols-3 gap-4 rounded-2xl border border-white/15 bg-white/[0.06] p-5 backdrop-blur">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="font-display text-[11px] uppercase tracking-wider text-white/60">
                  {stat.label}
                </dt>
                <dd className="mt-1 font-display text-2xl font-bold text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      {/* Indicador de scroll subtle */}
      <a
        href="#sobre"
        aria-label="Continuar para a secção Sobre"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/60 transition-colors hover:text-white md:flex"
      >
        <span className="font-display text-[10px] font-semibold uppercase tracking-[0.2em]">
          Scroll
        </span>
        <span
          aria-hidden
          className="relative flex h-9 w-5 justify-center overflow-hidden rounded-full border border-white/30"
        >
          <span className="mt-1.5 h-2.5 w-1 animate-scroll-dot rounded-full bg-white/80" />
        </span>
      </a>
    </section>
  );
}
