import Reveal from "@/components/Reveal";
import { IconUsers } from "@/components/icons";
import { TEAM } from "@/lib/company-data";

/**
 * Equipa — atualmente com placeholders por função (sem fotos individuais).
 *
 * Para usar fotos reais:
 *   1) Atualizar TEAM em src/lib/company-data.ts com `image: "/team/<slug>.jpeg"`
 *   2) Substituir o placeholder SVG abaixo por <Image src={member.image} ... />
 */
export default function Team() {
  return (
    <section className="relative bg-surface-subtle py-20 lg:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="label-caps text-brand-600">A equipa</span>
          <h2 className="heading-display mt-3 text-3xl sm:text-4xl lg:text-[42px]">
            Profissionais experientes em cada fase
          </h2>
          <div className="mx-auto mt-5 rule-brand" />
          <p className="mt-6 font-body text-lg leading-relaxed text-ink-500">
            Uma estrutura organizada por especialidade, com direção técnica permanente em obra e equipa própria de execução.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member, idx) => (
            <Reveal
              as="li"
              key={member.name}
              delay={(idx % 4) as 0 | 1 | 2 | 3}
              className="group flex flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-precision transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-precision-lg"
            >
              {/* Placeholder visual — substituir por <Image> quando houver foto */}
              <div className="relative mb-5 aspect-square w-full overflow-hidden rounded-xl bg-gradient-to-br from-brand-50 to-brand-100">
                <div className="absolute inset-0 flex items-center justify-center text-brand-300 transition-transform group-hover:scale-110">
                  <IconUsers size={48} />
                </div>
                <div
                  aria-hidden
                  className="absolute inset-0 bg-blueprint-grid bg-grid-32 opacity-20"
                />
              </div>
              <p className="label-caps text-brand-600">{member.role}</p>
              <h3 className="mt-2 font-display text-base font-semibold leading-tight text-brand-900">
                {member.name}
              </h3>
              {member.bio && (
                <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-ink-500">
                  {member.bio}
                </p>
              )}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
