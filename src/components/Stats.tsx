import Counter from "@/components/motion/Counter";
import Reveal from "@/components/Reveal";

const STATS = [
  {
    value: 25,
    suffix: "+",
    label: "Anos de experiência",
    sub: "ao serviço dos nossos clientes",
  },
  {
    value: 200,
    suffix: "+",
    label: "Obras concluídas",
    sub: "residenciais, comerciais e industriais",
  },
  {
    value: 100,
    suffix: "%",
    label: "Compromisso com prazos",
    sub: "planeamento realista, entrega pontual",
  },
  {
    value: 50,
    suffix: "+",
    label: "Profissionais",
    sub: "equipa própria e parceiros qualificados",
  },
];

/**
 * Secção de números fortes — entra com counters animados (0 → N) ao chegar ao viewport.
 * NOTA: os números devem ser confirmados com a empresa antes de produção.
 */
export default function Stats() {
  return (
    <section
      aria-label="Números da Group Cadeias"
      className="relative overflow-hidden bg-white py-16 lg:py-20"
    >
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="label-caps text-brand-600">Em números</span>
          <h2 className="heading-display mt-3 text-2xl sm:text-3xl">
            Resultados que se traduzem em confiança
          </h2>
          <div className="mx-auto mt-4 rule-brand" />
        </Reveal>

        <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink-100 bg-ink-100 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, idx) => (
            <Reveal
              as="li"
              key={stat.label}
              delay={(idx % 4) as 0 | 1 | 2 | 3}
              className="bg-white p-7 transition-colors hover:bg-brand-50"
            >
              <p className="font-display text-5xl font-bold leading-none tracking-tight text-brand-900 sm:text-6xl">
                <Counter to={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-4 font-display text-sm font-semibold uppercase tracking-wider text-brand-600">
                {stat.label}
              </p>
              <p className="mt-2 font-body text-sm leading-relaxed text-ink-500">
                {stat.sub}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
