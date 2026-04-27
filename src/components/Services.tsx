import Reveal from "@/components/Reveal";
import {
  IconBlueprint,
  IconBriefcase,
  IconBuilding,
  IconClipboard,
  IconHardHat,
  IconPaintRoller,
} from "@/components/icons";

const SERVICES = [
  {
    icon: IconBuilding,
    title: "Construção Civil",
    description:
      "Projetos de raiz com gestão integral de materiais, prazos e mão de obra especializada — do alvará à entrega.",
    features: ["Moradias e prédios", "Obras de raiz", "Coordenação técnica"],
  },
  {
    icon: IconPaintRoller,
    title: "Remodelações",
    description:
      "Modernização de espaços residenciais e comerciais com foco em estética, funcionalidade e eficiência.",
    features: ["Interiores e fachadas", "Pintura e acabamentos", "Carpintaria"],
  },
  {
    icon: IconBlueprint,
    title: "Engenharia e Projetos",
    description:
      "Planeamento técnico detalhado, licenciamento camarário e consultoria especializada em todas as fases.",
    features: ["Projeto de arquitetura", "Especialidades", "Licenciamento"],
  },
  {
    icon: IconHardHat,
    title: "Reabilitação de Espaços",
    description:
      "Recuperação de edifícios antigos preservando a traça original e introduzindo conforto e segurança modernos.",
    features: ["Reforço estrutural", "Recuperação", "Eficiência energética"],
  },
  {
    icon: IconClipboard,
    title: "Gestão e Acompanhamento de Obras",
    description:
      "Acompanhamento rigoroso de prazos, custos e qualidade em todas as fases — comunicação clara e próxima.",
    features: ["Direção de obra", "Fiscalização", "Reportes regulares"],
  },
  {
    icon: IconBriefcase,
    title: "Soluções para Empresas e Particulares",
    description:
      "Infraestruturas para empresas e projetos residenciais personalizados, sempre adaptados ao cliente.",
    features: ["Industrial e comercial", "Residencial", "Chave-na-mão"],
  },
];

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
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="label-caps text-brand-600">O que fazemos</span>
          </Reveal>

          <Reveal delay={1}>
            <h2 className="heading-display mt-3 text-3xl sm:text-4xl lg:text-[42px]">
              Serviços completos de engenharia e construção
            </h2>
          </Reveal>

          <Reveal delay={1}>
            <div className="mx-auto mt-5 rule-brand" />
          </Reveal>

          <Reveal delay={2}>
            <p className="mt-6 font-body text-lg leading-relaxed text-ink-500">
              Da conceção à execução, oferecemos uma gama completa de soluções
              integradas para transformar projetos em estruturas sólidas,
              funcionais e duradouras.
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, description, features }, idx) => (
            <Reveal
              as="li"
              key={title}
              delay={(idx % 3) as 0 | 1 | 2}
              className="card-tech group flex flex-col p-7"
            >
              <div className="flex items-start justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <Icon size={26} />
                </span>
                <span className="font-display text-xs font-semibold text-ink-300">
                  0{idx + 1}
                </span>
              </div>

              <h3 className="mt-6 font-display text-xl font-semibold text-brand-900">
                {title}
              </h3>
              <p className="mt-3 flex-1 font-body text-base leading-relaxed text-ink-500">
                {description}
              </p>

              <ul className="mt-5 space-y-1.5 border-t border-ink-100 pt-5">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 font-body text-sm text-ink-600"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
