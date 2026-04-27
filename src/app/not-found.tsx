import Link from "next/link";

import Logo from "@/components/Logo";
import { IconArrowRight } from "@/components/icons";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-brand-900 px-6 py-20 text-white">
      <div className="mx-auto w-full max-w-xl text-center">
        <div className="flex justify-center">
          <Logo variant="light" />
        </div>
        <p className="mt-10 font-display text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-200">
          Erro 404
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          Esta página não foi encontrada.
        </h1>
        <p className="mt-5 font-body text-base text-white/80">
          O link pode estar desatualizado ou a página foi movida. Volte ao
          início para continuar a explorar os nossos serviços.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-primary">
            Voltar ao início <IconArrowRight size={16} />
          </Link>
          <Link href="/#contactos" className="btn-secondary">
            Falar connosco
          </Link>
        </div>
      </div>
    </main>
  );
}
