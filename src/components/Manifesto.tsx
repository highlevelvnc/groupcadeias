import Reveal from "@/components/Reveal";
import { VALUES } from "@/lib/company-data";

/**
 * Manifesto — valores em formato editorial.
 * Numeração visível (01..04), texto grande, layout asymmetric.
 */
export default function Manifesto() {
  return (
    <section className="relative overflow-hidden bg-brand-900 py-20 text-white lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-blueprint-grid bg-grid-32 opacity-15"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/2 hidden h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-brand-600/30 blur-3xl md:block"
      />

      <div className="container-page relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <span className="label-caps text-brand-200">Manifesto</span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Quatro princípios que nos definem em obra.
            </h2>
            <div className="mt-6 h-1 w-16 rounded-full bg-brand-300" />
            <p className="mt-6 max-w-md font-body text-base leading-relaxed text-white/85">
              Não são slogans — são as regras que aplicamos todos os dias, em cada decisão técnica e em cada conversa com o cliente.
            </p>
          </Reveal>

          <ul className="lg:col-span-7">
            {VALUES.map((value, idx) => (
              <Reveal
                as="li"
                key={value.number}
                delay={(idx % 4) as 0 | 1 | 2 | 3}
                className="group grid grid-cols-[auto_1fr] gap-6 border-b border-white/10 py-7 last:border-b-0 last:pb-0 first:pt-0"
              >
                <span className="font-display text-2xl font-bold text-brand-300 transition-colors group-hover:text-white sm:text-3xl">
                  {value.number}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-semibold leading-tight text-white sm:text-3xl">
                    {value.title}
                  </h3>
                  <p className="mt-3 font-body text-base leading-relaxed text-white/75">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
