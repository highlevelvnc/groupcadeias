import Image from "next/image";

import Reveal from "@/components/Reveal";
import { EQUIPMENT } from "@/lib/company-data";

/**
 * Mostra o equipamento próprio da empresa — sinaliza capacidade autónoma de execução.
 * Imagens reais brandadas Group Cadeias.
 */
export default function Equipment() {
  return (
    <section className="relative bg-white py-20 lg:py-28">
      <div className="container-page">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <span className="label-caps text-brand-600">Capacidade própria</span>
            <h2 className="heading-display mt-3 text-3xl sm:text-4xl lg:text-[42px]">
              Equipamento e frota próprios
            </h2>
            <div className="mt-5 rule-brand" />
          </Reveal>
          <Reveal delay={1} className="lg:col-span-5">
            <p className="font-body text-base leading-relaxed text-ink-500">
              Investimos em equipamento próprio para sermos autónomos em obra — plataformas elevatórias para trabalhos em altura, viaturas comerciais brandadas e camiões para transporte de material e equipamento.
            </p>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {EQUIPMENT.map((item, idx) => (
            <Reveal
              as="li"
              key={item.title}
              delay={(idx % 3) as 0 | 1 | 2}
              className="group overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-precision transition-all hover:-translate-y-1 hover:shadow-precision-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-900/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-brand-900">
                  {item.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-ink-500">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
