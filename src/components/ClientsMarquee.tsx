import { cn } from "@/lib/cn";

/**
 * Marquee infinito de clientes/parceiros — texto-only enquanto não há logos oficiais.
 *
 * Para usar com logos reais:
 *  1) Colocar SVG/PNG em /public/clients/<slug>.svg
 *  2) Substituir o array CLIENTS por { name, logo: "/clients/x.svg" }
 *  3) Trocar o <span> por <Image src={logo} ... className="h-8 w-auto opacity-60 hover:opacity-100 transition" />
 */
const CLIENTS = [
  "FIPAL",
  "Câmara Municipal de Vila do Conde",
  "Construtora do Norte",
  "Particulares Premium",
  "Engenharia & Projetos PT",
  "Indústria Norte",
  "Administradores de Condomínio",
  "Imobiliária Costa Verde",
];

type Props = { className?: string };

export default function ClientsMarquee({ className }: Props) {
  // Duplicamos a lista para garantir loop sem corte visível
  const items = [...CLIENTS, ...CLIENTS];

  return (
    <section
      aria-label="Clientes e parceiros"
      className={cn("relative overflow-hidden bg-white py-12 lg:py-14", className)}
    >
      <div className="container-page">
        <p className="text-center font-display text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-400">
          Confiam na Group Cadeias
        </p>
      </div>

      <div className="group relative mt-6 overflow-hidden">
        {/* Fades laterais para dar feel "de continuidade" */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent sm:w-32"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent sm:w-32"
        />

        <div className="flex w-max animate-marquee items-center gap-12 whitespace-nowrap py-2 group-hover:[animation-play-state:paused]">
          {items.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="inline-flex items-center gap-12"
            >
              <span className="font-display text-base font-medium uppercase tracking-wider text-ink-400 transition-colors hover:text-brand-700 sm:text-lg">
                {name}
              </span>
              <span
                aria-hidden
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-200"
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
