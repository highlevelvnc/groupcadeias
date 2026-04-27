import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteConfig } from "@/lib/site-config";
import { PROJECTS } from "@/lib/projects-data";

export const metadata: Metadata = {
  title: "Projetos e Obras",
  description:
    "Portfólio de obras executadas pela Group Cadeias — construção civil, projetos industriais, reabilitação e instalações próprias em Vila do Conde e Norte de Portugal.",
  alternates: { canonical: "/projetos" },
  openGraph: {
    title: `Projetos | ${siteConfig.legalName}`,
    description:
      "Portfólio de obras executadas pela Group Cadeias — construção civil, projetos industriais, reabilitação.",
    url: `${siteConfig.url}/projetos`,
    images: [siteConfig.ogImage],
  },
};

export default function ProjectsIndexPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Portfólio"
          title="Projetos executados com rigor e qualidade"
          description="Cada obra é o resultado de planeamento técnico, equipa qualificada e atenção ao detalhe — desde residencial a industrial."
          breadcrumbs={[
            { label: "Início", href: "/" },
            { label: "Projetos" },
          ]}
        />

        <section className="bg-white py-20 lg:py-28">
          <div className="container-page">
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {PROJECTS.map((project, idx) => (
                <Reveal
                  as="li"
                  key={project.slug}
                  delay={(idx % 3) as 0 | 1 | 2}
                >
                  <Link
                    href={`/projetos/${project.slug}`}
                    className="group block overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-precision transition-all hover:-translate-y-1 hover:shadow-precision-lg"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={project.cover}
                        alt={`${project.title} — ${project.category}, ${project.location}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-900/60 via-brand-900/10 to-transparent" />
                      <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 font-display text-[10px] font-semibold uppercase tracking-wider text-brand-700 shadow-precision backdrop-blur">
                        {project.category}
                      </span>
                    </div>

                    <div className="p-6">
                      <p className="label-caps text-ink-400">
                        {project.location} · {project.year}
                      </p>
                      <h2 className="mt-2 font-display text-xl font-semibold text-brand-900 transition-colors group-hover:text-brand-600">
                        {project.title}
                      </h2>
                      <p className="mt-3 font-body text-sm leading-relaxed text-ink-500">
                        {project.tagline}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
