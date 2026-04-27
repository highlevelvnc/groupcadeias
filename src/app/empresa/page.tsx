import type { Metadata } from "next";

import CTA from "@/components/CTA";
import Certifications from "@/components/Certifications";
import Equipment from "@/components/Equipment";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Manifesto from "@/components/Manifesto";
import PageHero from "@/components/PageHero";
import Stats from "@/components/Stats";
import Team from "@/components/Team";
import Timeline from "@/components/Timeline";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Empresa",
  description: `${siteConfig.legalName} — ${siteConfig.yearsOfExperience} anos de experiência em construção e engenharia em Vila do Conde. Conheça a história, equipa e certificações da empresa.`,
  alternates: { canonical: "/empresa" },
  openGraph: {
    title: `Empresa | ${siteConfig.legalName}`,
    description: `${siteConfig.yearsOfExperience} anos de experiência em construção e engenharia.`,
    url: `${siteConfig.url}/empresa`,
    images: [siteConfig.ogImage],
  },
};

export default function EmpresaPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Empresa"
          title={`${siteConfig.yearsOfExperience} anos a construir confiança`}
          description={`A ${siteConfig.legalName} é uma empresa familiar de engenharia e construção sediada em Vila do Conde, com atividade no Norte de Portugal desde a fundação.`}
          image="/images/banner-fachada.jpeg"
          breadcrumbs={[
            { label: "Início", href: "/" },
            { label: "Empresa" },
          ]}
        />

        <Stats />
        <Manifesto />
        <Timeline />
        <Equipment />
        <Team />
        <Certifications />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
