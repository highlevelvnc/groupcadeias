import Image from "next/image";

import Breadcrumbs, { type Crumb } from "@/components/Breadcrumbs";
import { cn } from "@/lib/cn";

type Props = {
  /** Texto curto acima do título (ex: "SERVIÇO", "PROJETO") */
  eyebrow?: string;
  title: string;
  /** Subtítulo abaixo do H1 */
  description?: string;
  /** Imagem de fundo (opcional). Se omitida, usa fundo brand-900 sólido. */
  image?: string;
  /** Breadcrumbs */
  breadcrumbs?: Crumb[];
  /** Filhos opcionais — para CTAs custom abaixo do header */
  children?: React.ReactNode;
  className?: string;
};

/**
 * Hero genérico para páginas internas — mantém visual consistente em todas as rotas.
 * Suporta breadcrumbs, eyebrow, descrição e imagem de fundo opcional.
 */
export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  breadcrumbs,
  children,
  className,
}: Props) {
  return (
    <section
      className={cn(
        "relative isolate flex min-h-[440px] items-end overflow-hidden bg-brand-900 text-white",
        image && "min-h-[520px]",
        className,
      )}
    >
      {image && (
        <>
          <Image
            src={image}
            alt={title}
            fill
            sizes="100vw"
            priority
            className="absolute inset-0 -z-20 object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-900/95 via-brand-900/85 to-brand-700/70" />
        </>
      )}

      {/* Blueprint grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-blueprint-grid bg-grid-32 opacity-15"
      />

      {/* Vinheta inferior para fundir com a próxima secção */}
      <div className="pointer-events-none absolute -bottom-px left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white" />

      <div className="container-page relative w-full pb-20 pt-36 lg:pb-24 lg:pt-40">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} variant="light" />
          </div>
        )}

        {eyebrow && (
          <span className="label-caps text-brand-200">{eyebrow}</span>
        )}

        <h1 className="mt-3 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>

        {description && (
          <p className="mt-5 max-w-2xl font-body text-lg leading-relaxed text-white/85">
            {description}
          </p>
        )}

        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
