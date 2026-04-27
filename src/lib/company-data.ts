/**
 * Dados institucionais — timeline, equipa, certificações, valores.
 *
 * NOTA: alguns dados (datas exatas da timeline, nomes da equipa, certificações)
 * são placeholders plausíveis e devem ser confirmados/substituídos pela empresa
 * antes de produção real. O foco aqui é entregar a estrutura visual.
 */

import { siteConfig } from "@/lib/site-config";

const CURRENT_YEAR = new Date().getFullYear();
const FOUNDED = CURRENT_YEAR - siteConfig.yearsOfExperience;

export type TimelineEvent = {
  year: string;
  title: string;
  description: string;
  highlight?: boolean;
};

export const TIMELINE: TimelineEvent[] = [
  {
    year: `${FOUNDED}`,
    title: "Fundação da Group Cadeias",
    description:
      "Início de atividade no setor da construção e remodelação no concelho de Vila do Conde.",
    highlight: true,
  },
  {
    year: `${FOUNDED + 5}`,
    title: "Primeiro alvará de empreiteiro",
    description:
      "Reconhecimento como empreiteiro de construção civil — capacidade para obras de maior dimensão.",
  },
  {
    year: `${FOUNDED + 10}`,
    title: "Expansão para a região norte",
    description:
      "Expansão da atividade para Póvoa de Varzim, Porto e concelhos vizinhos.",
  },
  {
    year: `${FOUNDED + 15}`,
    title: "Investimento em equipamento próprio",
    description:
      "Aquisição de plataformas elevatórias, camiões basculantes e frota técnica — capacidade autónoma de execução.",
  },
  {
    year: `${FOUNDED + 20}`,
    title: "Inauguração da sede atual",
    description:
      "Mudança para instalações próprias na Zona Industrial da Varziela — escritórios, armazém e parque de equipamento.",
    highlight: true,
  },
  {
    year: `${CURRENT_YEAR}`,
    title: `${siteConfig.yearsOfExperience} anos de atividade`,
    description:
      "Continuamos a crescer com a confiança dos nossos clientes — particulares, empresas e instituições.",
    highlight: true,
  },
];

export type Certification = {
  name: string;
  description: string;
  /** Acrónimo curto exibido no badge */
  short: string;
};

/**
 * Lista de certificações/filiações típicas do setor PT.
 * IMPORTANTE: confirmar com a empresa antes de produção quais são realmente detidas.
 */
export const CERTIFICATIONS: Certification[] = [
  {
    name: "Alvará de Empreiteiro INCI",
    short: "INCI",
    description:
      "Alvará emitido pelo IMPIC (ex-INCI) que habilita a execução de obras de construção civil.",
  },
  {
    name: "AECOPS",
    short: "AECOPS",
    description:
      "Membro da Associação de Empresas de Construção e Obras Públicas e Serviços.",
  },
  {
    name: "Seguro de Responsabilidade Civil",
    short: "RC",
    description:
      "Cobertura de responsabilidade civil para a totalidade dos trabalhos executados.",
  },
  {
    name: "Direção Técnica certificada",
    short: "DTO",
    description:
      "Engenharia técnica responsável com inscrição em ordem profissional reconhecida.",
  },
];

export type Equipment = {
  title: string;
  description: string;
  image: string;
};

/**
 * Equipamento/frota próprios — fotos reais da empresa.
 */
export const EQUIPMENT: Equipment[] = [
  {
    title: "Plataforma elevatória articulada",
    description:
      "Plataforma articulada (HA26PX) brandada Group Cadeias — para trabalhos em altura sem andaimes.",
    image: "/images/equipamento-plataforma.jpeg",
  },
  {
    title: "Camião basculante",
    description:
      "Camião próprio para transporte de equipamento e material de obra.",
    image: "/images/equipamento-camiao.jpeg",
  },
  {
    title: "Frota técnica",
    description:
      "Viaturas comerciais brandadas para mobilidade rápida da equipa entre obras.",
    image: "/images/viatura-lateral.jpeg",
  },
];

export type Value = {
  number: string;
  title: string;
  description: string;
};

export const VALUES: Value[] = [
  {
    number: "01",
    title: "Rigor",
    description:
      "Cumprimento estrito de normas, regulamentos e boas práticas em cada fase da obra.",
  },
  {
    number: "02",
    title: "Transparência",
    description:
      "Comunicação clara com o cliente — sobre prazos, custos, materiais e decisões técnicas.",
  },
  {
    number: "03",
    title: "Qualidade",
    description:
      "Materiais selecionados e execução cuidada — qualidade que se vê e se mantém.",
  },
  {
    number: "04",
    title: "Compromisso",
    description:
      "A nossa palavra vale tanto como o contrato. Os prazos cumprem-se, os problemas resolvem-se.",
  },
];

/**
 * Equipa — placeholders para ilustrar a estrutura.
 * Substituir por fotos profissionais e dados reais quando disponíveis.
 */
export type TeamMember = {
  name: string;
  role: string;
  bio?: string;
  image?: string;
};

export const TEAM: TeamMember[] = [
  {
    name: "Direção Geral",
    role: "Gestão Executiva",
    bio: "Estratégia, relações com clientes e decisões técnicas finais.",
  },
  {
    name: "Direção Técnica de Obra",
    role: "Engenharia & Coordenação",
    bio: "Coordenação técnica em obra, controlo de qualidade e segurança.",
  },
  {
    name: "Equipa de Execução",
    role: "Construção e Acabamentos",
    bio: "Pedreiros, carpinteiros, pintores e profissionais de acabamentos.",
  },
  {
    name: "Equipa de Reabilitação",
    role: "Especialistas em Restauro",
    bio: "Foco em reabilitação de fachadas e edifícios em centro histórico.",
  },
];
