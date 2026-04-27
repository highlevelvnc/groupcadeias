import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";

import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ServiceIcon from "@/components/ServiceIcon";
import WhatsAppButton from "@/components/WhatsAppButton";
import { IconArrowRight, IconCheck } from "@/components/icons";
import { siteConfig } from "@/lib/site-config";
import { SERVICES, getOtherServices, getServiceBySlug } from "@/lib/services-data";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};

  const title = `${service.title}`;
  const description = service.tagline;

  return {
    title,
    description,
    alternates: { canonical: `/servicos/${service.slug}` },
    openGraph: {
      title: `${service.title} | ${siteConfig.legalName}`,
      description,
      url: `${siteConfig.url}/servicos/${service.slug}`,
      images: [service.heroImage],
    },
  };
}

export default function ServiceDetailPage({ params }: { params: Params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return notFound();

  const others = getOtherServices(service.slug).slice(0, 3);

  // JSON-LD Service para SEO rico
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "GeneralContractor",
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Norte de Portugal",
    },
    serviceType: service.title,
    url: `${siteConfig.url}/servicos/${service.slug}`,
  };

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Serviço"
          title={service.title}
          description={service.tagline}
          image={service.heroImage}
          breadcrumbs={[
            { label: "Início", href: "/" },
            { label: "Serviços", href: "/servicos" },
            { label: service.shortTitle },
          ]}
        >
          <Link href="/#contactos" className="btn-primary">
            Pedir Orçamento <IconArrowRight size={18} />
          </Link>
        </PageHero>

        {/* Descrição expandida */}
        <section className="bg-white py-20 lg:py-24">
          <div className="container-page grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <span className="label-caps text-brand-600">Sobre o serviço</span>
              <h2 className="heading-display mt-3 text-2xl sm:text-3xl">
                O que entregamos
              </h2>
              <div className="mt-5 rule-brand" />
            </Reveal>
            <Reveal delay={1} className="lg:col-span-7">
              <p className="font-body text-lg leading-relaxed text-ink-600">
                {service.description}
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {service.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-ink-100 bg-surface-subtle p-4"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                      <IconCheck size={14} />
                    </span>
                    <span className="font-body text-sm leading-snug text-ink-700">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Processo */}
        <section className="bg-surface-subtle py-20 lg:py-24">
          <div className="container-page">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="label-caps text-brand-600">Processo</span>
              <h2 className="heading-display mt-3 text-2xl sm:text-3xl">
                Como trabalhamos consigo
              </h2>
              <div className="mx-auto mt-5 rule-brand" />
            </Reveal>

            <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {service.process.map((step, idx) => (
                <Reveal
                  as="li"
                  key={step.title}
                  delay={(idx % 4) as 0 | 1 | 2 | 3}
                  className="rounded-2xl border border-ink-100 bg-white p-6 shadow-precision"
                >
                  <span className="font-display text-3xl font-bold text-brand-300">
                    0{idx + 1}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-brand-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-ink-500">
                    {step.description}
                  </p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Casos de uso */}
        <section className="bg-white py-20 lg:py-24">
          <div className="container-page grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <span className="label-caps text-brand-600">Aplicações</span>
              <h2 className="heading-display mt-3 text-2xl sm:text-3xl">
                Onde aplicamos este serviço
              </h2>
              <div className="mt-5 rule-brand" />
              <p className="mt-6 font-body text-base leading-relaxed text-ink-500">
                Cada caso é único — apresentamos uma proposta adequada ao seu projeto, prazo e orçamento.
              </p>
            </Reveal>
            <Reveal delay={1} className="lg:col-span-7">
              <ul className="grid gap-3 sm:grid-cols-2">
                {service.useCases.map((useCase, idx) => (
                  <li
                    key={useCase}
                    className="group flex items-center gap-4 rounded-xl border border-ink-100 bg-white p-5 transition-all hover:border-brand-300 hover:shadow-precision"
                  >
                    <span className="font-display text-xl font-bold text-brand-300 transition-colors group-hover:text-brand-600">
                      0{idx + 1}
                    </span>
                    <span className="font-display text-base font-semibold text-brand-900">
                      {useCase}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <CTA />

        {/* Outros serviços */}
        <section className="bg-surface-subtle py-20 lg:py-24">
          <div className="container-page">
            <Reveal className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
              <div>
                <span className="label-caps text-brand-600">Outros serviços</span>
                <h2 className="heading-display mt-3 text-2xl sm:text-3xl">
                  Continue a explorar
                </h2>
              </div>
              <Link
                href="/servicos"
                className="inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-brand-600 transition-colors hover:text-brand-700"
              >
                Ver todos <IconArrowRight size={16} />
              </Link>
            </Reveal>

            <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((other, idx) => (
                <Reveal
                  as="li"
                  key={other.slug}
                  delay={(idx % 3) as 0 | 1 | 2}
                >
                  <Link
                    href={`/servicos/${other.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-precision transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-precision-lg"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                      <ServiceIcon icon={other.icon} size={22} />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-semibold text-brand-900">
                      {other.title}
                    </h3>
                    <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-ink-500">
                      {other.tagline}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-wider text-brand-600">
                      Saber mais <IconArrowRight size={14} />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />

      <Script
        id={`ld-service-${service.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
