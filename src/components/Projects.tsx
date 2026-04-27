import Image from "next/image";

import Reveal from "@/components/Reveal";
import { IconArrowRight } from "@/components/icons";

/**
 * Portfólio de obras. Imagens reais fornecidas pela empresa.
 * Para acrescentar/trocar projetos no futuro, edita esta lista — basta colocar a foto em /public/images.
 *
 * Layout desktop (lg+): grid editorial 6 colunas, alturas controladas por classe `lg:row-span-*`.
 * Layout mobile: cada card respira em aspect-[4/5] empilhado, sem perda de detalhe.
 */
const PROJECTS = [
  {
    image: "/images/obra-edificio-novo.jpeg",
    title: "Edifício Residencial",
    location: "Vila do Conde",
    category: "Construção Civil",
    description:
      "Obra de raiz com acabamentos exteriores e gestão integral da empreitada.",
    span: "sm:col-span-2 lg:col-span-4 lg:row-span-2",
    aspect: "aspect-[4/5] lg:aspect-auto",
  },
  {
    image: "/images/projeto-fipal-3.jpeg",
    title: "Unidade Industrial FIPAL",
    location: "Norte de Portugal",
    category: "Industrial",
    description:
      "Construção e revestimento exterior em chapa lacada — projeto industrial executado.",
    span: "lg:col-span-2",
    aspect: "aspect-[4/3] lg:aspect-auto",
  },
  {
    image: "/images/obra-pintura-edificio.jpeg",
    title: "Manutenção e Pintura",
    location: "Vila do Conde",
    category: "Reabilitação",
    description:
      "Trabalhos em altura com plataforma elevatória — pintura e selagens em fachada.",
    span: "lg:col-span-2",
    aspect: "aspect-[4/3] lg:aspect-auto",
  },
  {
    image: "/images/projeto-fipal-1.jpeg",
    title: "Fachada Industrial",
    location: "Norte de Portugal",
    category: "Industrial",
    description: "Estrutura metálica e revestimento exterior — projeto FIPAL.",
    span: "lg:col-span-3",
    aspect: "aspect-[4/3] lg:aspect-auto",
  },
  {
    image: "/images/sede-armazem.jpeg",
    title: "Sede Group Cadeias",
    location: "Zona Industrial da Varziela",
    category: "Sede",
    description:
      "Instalações próprias da empresa em Vila do Conde — base de operações.",
    span: "lg:col-span-3",
    aspect: "aspect-[4/3] lg:aspect-auto",
  },
];

export default function Projects() {
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
            <a
              href="#contactos"
              className="inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-brand-700 transition-colors hover:text-brand-600"
            >
              Discutir o seu projeto
              <IconArrowRight size={16} />
            </a>
          </Reveal>
        </div>

        {/* Grid editorial — substituível por mais obras quando disponíveis */}
        <ul className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6 lg:auto-rows-[240px]">
          {PROJECTS.map((project, idx) => (
            <Reveal
              as="li"
              key={project.title}
              delay={(idx % 3) as 0 | 1 | 2}
              className={`group relative overflow-hidden rounded-2xl border border-ink-100 shadow-precision ${project.span} ${project.aspect}`}
            >
              <Image
                src={project.image}
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
                  {project.description}
                </p>
                {/* Em mobile mostramos descrição sempre, sem hover */}
                <p className="mt-2 font-body text-sm text-white/85 lg:hidden">
                  {project.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={2} className="mt-12 flex justify-center">
          <p className="max-w-2xl text-center font-body text-sm text-ink-500">
            <strong className="text-brand-700">Nota:</strong> são apresentados
            apenas alguns dos projetos da nossa carteira. Para conhecer mais
            obras ou pedir referências específicas, contacte-nos diretamente.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
