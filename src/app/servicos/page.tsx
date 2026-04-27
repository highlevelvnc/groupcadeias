import type { Metadata } from "next";
import Link from "next/link";

import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ServiceIcon from "@/components/ServiceIcon";
import WhatsAppButton from "@/components/WhatsAppButton";
import { IconArrowRight } from "@/components/icons";
import { siteConfig } from "@/lib/site-config";
import { SERVICES } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Serviços de Engenharia e Construção",
  description:
    "Construção civil, remodelações, engenharia, reabilitação, gestão de obras e soluções para empresas e particulares — em Vila do Conde e Norte de Portugal.",
  alternates: { canonical: "/servicos" },
  openGraph: {
    title: `Serviços | ${siteConfig.legalName}`,
    description:
      "Construção civil, remodelações, engenharia, reabilitação, gestão de obras e soluções para empresas e particulares.",
    url: `${siteConfig.url}/servicos`,
    images: [siteConfig.ogImage],
  },
};

export default function ServicesIndexPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Serviços"
          title="Soluções completas para construção e engenharia"
          description="Da conceção à execução — uma gama de serviços integrados para projetos residenciais, industriais, comerciais e de reabilitação."
          breadcrumbs={[
            { label: "Início", href: "/" },
            { label: "Serviços" },
          ]}
        />

        <section className="bg-white py-20 lg:py-28">
          <div className="container-page">
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((service, idx) => (
                <Reveal
                  as="li"
                  key={service.slug}
                  delay={(idx % 3) as 0 | 1 | 2}
                  className="card-tech group flex flex-col p-7"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                      <ServiceIcon icon={service.icon} size={26} />
                    </span>
                    <span className="font-display text-xs font-semibold text-ink-300">
                      0{idx + 1}
                    </span>
                  </div>

                  <h2 className="mt-6 font-display text-xl font-semibold text-brand-900">
                    {service.title}
                  </h2>
                  <p className="mt-3 flex-1 font-body text-base leading-relaxed text-ink-500">
                    {service.tagline}
                  </p>

                  <Link
                    href={`/servicos/${service.slug}`}
                    className="mt-6 inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-brand-600 transition-colors hover:text-brand-700"
                  >
                    Saber mais
                    <IconArrowRight size={16} />
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
