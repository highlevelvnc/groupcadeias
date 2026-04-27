import Image from "next/image";

import Reveal from "@/components/Reveal";
import {
  IconHardHat,
  IconShieldCheck,
  IconTarget,
  IconUsers,
} from "@/components/icons";
import { siteConfig } from "@/lib/site-config";

const VALUES = [
  {
    icon: IconTarget,
    title: "Rigor técnico",
    description: "Cálculos, normas e processos cumpridos sem atalhos.",
  },
  {
    icon: IconHardHat,
    title: "Execução cuidada",
    description: "Da fundação ao acabamento — atenção em cada detalhe.",
  },
  {
    icon: IconShieldCheck,
    title: "Qualidade certificada",
    description: "Materiais selecionados e padrões duradouros.",
  },
  {
    icon: IconUsers,
    title: "Equipa experiente",
    description: "Profissionais com décadas no setor da construção.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="relative bg-surface-subtle py-20 lg:py-28">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Texto + valores */}
          <div>
            <Reveal>
              <span className="label-caps text-brand-600">Quem somos</span>
            </Reveal>

            <Reveal delay={1}>
              <h2 className="heading-display mt-3 text-3xl sm:text-4xl lg:text-[42px]">
                Sobre a {siteConfig.name}
              </h2>
            </Reveal>

            <Reveal delay={1}>
              <div className="mt-5 rule-brand" />
            </Reveal>

            <Reveal delay={2}>
              <p className="mt-6 font-body text-lg leading-relaxed text-ink-600">
                A <strong className="text-brand-900">{siteConfig.legalName}</strong>{" "}
                é uma empresa focada em soluções de engenharia, construção e
                remodelação, com sede em{" "}
                <strong className="text-brand-900">{siteConfig.address.city}</strong>.
                Atuamos com rigor técnico, compromisso e qualidade em cada
                projeto que abraçamos — da análise inicial à entrega final.
              </p>
            </Reveal>

            <Reveal delay={3}>
              <p className="mt-4 font-body text-base leading-relaxed text-ink-500">
                Com mais de {siteConfig.yearsOfExperience} anos de experiência
                no setor, trabalhamos para entregar obras seguras, funcionais e
                bem executadas, mantendo uma comunicação próxima e
                transparente com os nossos clientes em todas as fases.
              </p>
            </Reveal>

            <Reveal delay={3}>
              <dl className="mt-10 grid grid-cols-2 gap-6 sm:gap-8">
                {VALUES.map(({ icon: Icon, title, description }) => (
                  <div
                    key={title}
                    className="rounded-xl border border-ink-100 bg-white p-5 shadow-precision transition-colors hover:border-brand-300"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                      <Icon size={22} />
                    </span>
                    <dt className="mt-4 font-display text-base font-semibold text-brand-900">
                      {title}
                    </dt>
                    <dd className="mt-1 font-body text-sm leading-relaxed text-ink-500">
                      {description}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* Imagem principal + cartão flutuante de tagline */}
          <Reveal delay={2}>
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-ink-100 shadow-precision-lg">
                {/* TODO: substituir por foto profissional da equipa/sede quando disponível */}
                <Image
                  src="/images/banner-fachada.jpeg"
                  alt={`Fachada da ${siteConfig.legalName} com slogan oficial: ${siteConfig.tagline}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                {/* Vinheta para destacar o badge */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-brand-900/95 via-brand-900/40 to-transparent" />

                <div className="absolute inset-x-6 bottom-6 flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-600 font-display text-xl font-bold text-white">
                    {siteConfig.yearsOfExperience}
                  </span>
                  <div>
                    <p className="font-display text-sm font-semibold uppercase tracking-wider text-white">
                      Anos de experiência
                    </p>
                    <p className="font-body text-xs text-white/80">
                      Construímos confiança a cada projeto entregue.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cartão tagline (slogan oficial) */}
              <div className="absolute -left-3 -top-4 hidden max-w-[220px] rounded-xl border border-ink-100 bg-white px-4 py-3 shadow-precision-lg sm:block">
                <p className="label-caps text-brand-600">Slogan</p>
                <p className="mt-1 font-display text-sm font-semibold leading-snug text-brand-900">
                  {siteConfig.tagline}
                </p>
              </div>

              {/* Cartão sede */}
              <div className="absolute -bottom-3 -right-3 hidden rounded-xl border border-ink-100 bg-white px-4 py-3 shadow-precision sm:block">
                <p className="label-caps text-brand-600">Sede</p>
                <p className="mt-1 font-display text-sm font-semibold text-brand-900">
                  Vila do Conde · PT
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
