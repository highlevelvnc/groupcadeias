import Image from "next/image";
import Link from "next/link";

import Reveal from "@/components/Reveal";
import { IconArrowRight } from "@/components/icons";
import { PROJECTS } from "@/lib/projects-data";

/**
 * Portfólio na homepage — mostra os primeiros 5 projetos com link para a página detalhe.
 *
 * Layout desktop (lg+): grid editorial 6 colunas, alturas controladas por classe `lg:row-span-*`.
 * Layout mobile: cada card respira em aspect-[4/5] empilhado.
 */
const LAYOUT = [
  { span: "sm:col-span-2 lg:col-span-4 lg:row-span-2", aspect: "aspect-[4/5] lg:aspect-auto" },
  { span: "lg:col-span-2", aspect: "aspect-[4/3] lg:aspect-auto" },
  { span: "lg:col-span-2", aspect: "aspect-[4/3] lg:aspect-auto" },
  { span: "lg:col-span-3", aspect: "aspect-[4/3] lg:aspect-auto" },
  { span: "lg:col-span-3", aspect: "aspect-[4/3] lg:aspect-auto" },
];

export default function Projects() {
  const featured = PROJECTS.slice(0, 5);

  return (
    <section
      id="projetos"
      className="relative bg-white py-20 lg:py-28"
    >
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <span className="label-caps text-brand-600">Portfólio</span>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="heading-display mt-3 text-3xl sm:text-4xl lg:text-[42px]">
                Projetos executados com rigor e qualidade
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <div className="mt-5 rule-brand" />
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-6 font-body text-lg leading-relaxed text-ink-500">
                Cada projeto é acompanhado com atenção ao detalhe — desde o
                planeamento até à entrega final. Aqui ficam alguns exemplos do
                trabalho realizado pela nossa equipa.
              </p>
            </Reveal>
          </div>

          <Reveal delay={2}>
            <Link
              href="/projetos"
              className="inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-brand-700 transition-colors hover:text-brand-600"
            >
              Ver todos os projetos
              <IconArrowRight size={16} />
            </Link>
          </Reveal>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6 lg:auto-rows-[240px]">
          {featured.map((project, idx) => {
            const layout = LAYOUT[idx] ?? LAYOUT[0];
            return (
              <Reveal
                as="li"
                key={project.slug}
                delay={(idx % 3) as 0 | 1 | 2}
                className={`group relative overflow-hidden rounded-2xl border border-ink-100 shadow-precision ${layout.span} ${layout.aspect}`}
              >
                <Link href={`/projetos/${project.slug}`} className="block h-full w-full">
                  <Image
                    src={project.cover}
                    alt={`${project.title} — ${project.category}, ${project.location}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient permanente para legibilidade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-brand-900/30 to-transparent" />

                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <span className="label-caps text-brand-200 drop-shadow">
                      {project.category} · {project.location}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-semibold leading-snug drop-shadow sm:text-xl">
                      {project.title}
                    </h3>
                    <p className="mt-2 hidden max-h-0 overflow-hidden font-body text-sm text-white/85 opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100 lg:block">
                      {project.tagline}
                    </p>
                    <p className="mt-2 font-body text-sm text-white/85 lg:hidden">
                      {project.tagline}
                    </p>
                  </div>

                  <span
                    aria-hidden
                    className="absolute right-5 top-5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-brand-700 opacity-0 shadow-precision transition-all group-hover:opacity-100 group-hover:translate-x-0 translate-x-1"
                  >
                    <IconArrowRight size={16} />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
