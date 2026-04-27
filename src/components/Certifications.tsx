import Reveal from "@/components/Reveal";
import { IconShieldCheck } from "@/components/icons";
import { CERTIFICATIONS } from "@/lib/company-data";

/**
 * Grid de certificações/filiações.
 * Para usar logos reais, substituir o badge SVG (texto inline) por <Image src="/certifications/x.svg" />
 */
export default function Certifications() {
  return (
    <section className="relative bg-surface-subtle py-20 lg:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="label-caps text-brand-600">Garantias</span>
          <h2 className="heading-display mt-3 text-3xl sm:text-4xl lg:text-[42px]">
            Certificações e filiações
          </h2>
          <div className="mx-auto mt-5 rule-brand" />
          <p className="mt-6 font-body text-lg leading-relaxed text-ink-500">
            Trabalhamos dentro do enquadramento legal e técnico exigido para o setor da construção em Portugal.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CERTIFICATIONS.map((cert, idx) => (
            <Reveal
              as="li"
              key={cert.name}
              delay={(idx % 4) as 0 | 1 | 2 | 3}
              className="group flex flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-precision transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-precision-lg"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <IconShieldCheck size={22} />
                </span>
                <span className="font-display text-sm font-bold uppercase tracking-[0.16em] text-brand-700">
                  {cert.short}
                </span>
              </div>

              <h3 className="mt-5 font-display text-base font-semibold leading-snug text-brand-900">
                {cert.name}
              </h3>
              <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-ink-500">
                {cert.description}
              </p>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={2} className="mt-10 text-center">
          <p className="font-body text-xs text-ink-400">
            * Detalhes específicos disponíveis mediante pedido. Os documentos comprovativos podem ser solicitados a{" "}
            <a
              href="mailto:geral@group-cadeias.pt"
              className="font-medium text-brand-600 hover:text-brand-700"
            >
              geral@group-cadeias.pt
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
