import Link from "next/link";

import Reveal from "@/components/Reveal";
import ServiceIcon from "@/components/ServiceIcon";
import { IconArrowRight } from "@/components/icons";
import { SERVICES } from "@/lib/services-data";

export default function Services() {
  return (
    <section
      id="servicos"
      className="relative bg-white py-20 lg:py-28"
    >
      {/* Linha decorativa de fundo (blueprint sutil) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,85,164,0.05),transparent_55%)]"
      />

      <div className="container-page relative">
        <div className="flex flex-col items-end justify-between gap-6 sm:flex-row">
          <div className="max-w-2xl">
            <Reveal>
              <span className="label-caps text-brand-600">O que fazemos</span>
            </Reveal>

            <Reveal delay={1}>
              <h2 className="heading-display mt-3 text-3xl sm:text-4xl lg:text-[42px]">
                Serviços completos de engenharia e construção
              </h2>
            </Reveal>

            <Reveal delay={1}>
              <div className="mt-5 rule-brand" />
            </Reveal>

            <Reveal delay={2}>
              <p className="mt-6 font-body text-lg leading-relaxed text-ink-500">
                Da conceção à execução, oferecemos uma gama completa de soluções
                integradas para transformar projetos em estruturas sólidas,
                funcionais e duradouras.
              </p>
            </Reveal>
          </div>

          <Reveal delay={2}>
            <Link
              href="/servicos"
              className="inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-brand-700 transition-colors hover:text-brand-600"
            >
              Ver todos os serviços <IconArrowRight size={16} />
            </Link>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, idx) => (
            <Reveal
              as="li"
              key={service.slug}
              delay={(idx % 3) as 0 | 1 | 2}
            >
              <Link
                href={`/servicos/${service.slug}`}
                className="card-tech group flex h-full flex-col p-7"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    <ServiceIcon icon={service.icon} size={26} />
                  </span>
                  <span className="font-display text-xs font-semibold text-ink-300">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-xl font-semibold text-brand-900">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 font-body text-base leading-relaxed text-ink-500">
                  {service.tagline}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-wider text-brand-600 transition-all group-hover:gap-3">
                  Saber mais <IconArrowRight size={14} />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
