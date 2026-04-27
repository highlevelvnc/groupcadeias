import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";

import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ProjectGallery from "@/components/ProjectGallery";
import Reveal from "@/components/Reveal";
import WhatsAppButton from "@/components/WhatsAppButton";
import { IconArrowRight } from "@/components/icons";
import { siteConfig } from "@/lib/site-config";
import { PROJECTS, getNextProject, getProjectBySlug } from "@/lib/projects-data";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.tagline,
    alternates: { canonical: `/projetos/${project.slug}` },
    openGraph: {
      title: `${project.title} | ${siteConfig.legalName}`,
      description: project.tagline,
      url: `${siteConfig.url}/projetos/${project.slug}`,
      images: [project.cover],
    },
  };
}

export default function ProjectDetailPage({ params }: { params: Params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return notFound();

  const next = getNextProject(project.slug);

  // Inclui cover na galeria se ainda não estiver
  const galleryImages = project.gallery.includes(project.cover)
    ? project.gallery
    : [project.cover, ...project.gallery];

  // JSON-LD CreativeWork (projeto executado)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    image: galleryImages.map((src) => `${siteConfig.url}${src}`),
    creator: {
      "@type": "GeneralContractor",
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
    contentLocation: {
      "@type": "Place",
      name: project.location,
    },
    dateCreated: project.year,
    url: `${siteConfig.url}/projetos/${project.slug}`,
  };

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow={`Projeto · ${project.category}`}
          title={project.title}
          description={project.tagline}
          image={project.cover}
          breadcrumbs={[
            { label: "Início", href: "/" },
            { label: "Projetos", href: "/projetos" },
            { label: project.title },
          ]}
        />

        {/* Dados técnicos */}
        <section className="bg-white py-16 lg:py-20">
          <div className="container-page">
            <ul className="grid gap-px overflow-hidden rounded-2xl border border-ink-100 bg-ink-100 sm:grid-cols-2 lg:grid-cols-4">
              {project.facts.map((fact) => (
                <li
                  key={fact.label}
                  className="bg-white p-6 transition-colors hover:bg-brand-50"
                >
                  <p className="label-caps text-ink-400">{fact.label}</p>
                  <p className="mt-2 font-display text-lg font-semibold leading-tight text-brand-900">
                    {fact.value}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Descrição */}
        <section className="bg-white pb-20 lg:pb-24">
          <div className="container-page grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <span className="label-caps text-brand-600">Descrição</span>
              <h2 className="heading-display mt-3 text-2xl sm:text-3xl">
                Sobre este projeto
              </h2>
              <div className="mt-5 rule-brand" />
            </Reveal>
            <Reveal delay={1} className="lg:col-span-7">
              <p className="font-body text-lg leading-relaxed text-ink-600">
                {project.description}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Galeria com lightbox */}
        {galleryImages.length > 0 && (
          <section className="bg-surface-subtle py-20 lg:py-24">
            <div className="container-page">
              <Reveal className="mx-auto max-w-2xl text-center">
                <span className="label-caps text-brand-600">Galeria</span>
                <h2 className="heading-display mt-3 text-2xl sm:text-3xl">
                  Imagens do projeto
                </h2>
                <div className="mx-auto mt-5 rule-brand" />
                <p className="mt-5 font-body text-sm text-ink-500">
                  Clique em qualquer fotografia para abrir em ecrã grande.
                </p>
              </Reveal>

              <div className="mt-12">
                <ProjectGallery images={galleryImages} alt={project.title} />
              </div>
            </div>
          </section>
        )}

        <CTA />

        {/* Próximo projeto */}
        <section className="relative overflow-hidden bg-brand-900 text-white">
          <Link
            href={`/projetos/${next.slug}`}
            className="group relative block py-20 lg:py-24"
          >
            <Image
              src={next.cover}
              alt={next.title}
              fill
              sizes="100vw"
              className="absolute inset-0 -z-10 object-cover opacity-25 transition-all duration-700 group-hover:scale-105 group-hover:opacity-40"
            />
            <div className="container-page relative">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-brand-200">
                Próximo projeto
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                {next.title}
              </h2>
              <p className="mt-4 max-w-xl font-body text-base text-white/85">
                {next.tagline}
              </p>
              <span className="mt-8 inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-brand-200 transition-colors group-hover:text-white">
                Ver projeto
                <IconArrowRight size={18} />
              </span>
            </div>
          </Link>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />

      <Script
        id={`ld-project-${project.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
