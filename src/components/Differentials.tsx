import Image from "next/image";

import Reveal from "@/components/Reveal";
import {
  IconClock,
  IconHeadset,
  IconShieldCheck,
  IconSparkles,
  IconTarget,
  IconUsers,
} from "@/components/icons";

const DIFFERENTIALS = [
  {
    icon: IconTarget,
    title: "Rigor técnico",
    description: "Cumprimento estrito de normas e boas práticas em cada fase.",
  },
  {
    icon: IconUsers,
    title: "Acompanhamento próximo",
    description: "Comunicação clara e contínua com o cliente em obra.",
  },
  {
    icon: IconClock,
    title: "Cumprimento de prazos",
    description: "Planeamento realista e foco em entrega pontual.",
  },
  {
    icon: IconSparkles,
    title: "Soluções personalizadas",
    description: "Cada projeto adaptado ao espaço, ao orçamento e ao cliente.",
  },
  {
    icon: IconShieldCheck,
    title: "Qualidade nos acabamentos",
    description: "Materiais selecionados e atenção ao detalhe que se vê.",
  },
  {
    icon: IconHeadset,
    title: "Atendimento profissional",
    description: "Equipa disponível, transparente e tecnicamente preparada.",
  },
];

export default function Differentials() {
  return (
    <section className="relative overflow-hidden bg-brand-50 py-20 lg:py-28">
      <div className="container-page">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Coluna texto */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="label-caps text-brand-600">Diferenciais</span>
            </Reveal>

            <Reveal delay={1}>
              <h2 className="heading-display mt-3 text-3xl sm:text-4xl lg:text-[42px]">
                Porque escolher a <span className="text-brand-600">Group Cadeias</span>?
              </h2>
            </Reveal>

            <Reveal delay={1}>
              <div className="mt-5 rule-brand" />
            </Reveal>

            <Reveal delay={2}>
              <p className="mt-6 font-body text-lg leading-relaxed text-ink-600">
                Construímos a nossa reputação sobre bases sólidas: integridade,
                experiência e relações de confiança com os clientes a longo
                prazo. Cada obra é uma oportunidade de provar isso na prática.
              </p>
            </Reveal>

            <Reveal delay={3}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#projetos" className="btn-outline">
                  Ver projetos
                </a>
                <a href="#contactos" className="btn-primary">
                  Falar connosco
                </a>
              </div>
            </Reveal>

            {/* Imagem secundária visível em mobile/tablet */}
            <Reveal delay={3} className="mt-10 lg:hidden">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-ink-100 shadow-precision">
                <Image
                  src="/images/obra-pintura-edificio.jpeg"
                  alt="Equipa da Group Cadeias em obra de manutenção exterior"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          {/* Grid de diferenciais */}
          <div className="lg:col-span-7">
            <ul className="grid gap-4 sm:grid-cols-2">
              {DIFFERENTIALS.map(({ icon: Icon, title, description }, idx) => (
                <Reveal
                  as="li"
                  key={title}
                  delay={(idx % 4) as 0 | 1 | 2 | 3}
                  className="group rounded-2xl border border-ink-100 bg-white p-6 shadow-precision transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-precision-lg"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-brand-900">
                    {title}
                  </h3>
                  <p className="mt-1.5 font-body text-sm leading-relaxed text-ink-500">
                    {description}
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
