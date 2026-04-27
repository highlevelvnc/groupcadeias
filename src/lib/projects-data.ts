/**
 * Catálogo de projetos. Cada slug gera automaticamente uma página em /projetos/[slug].
 *
 * NOTA: os dados (ano, área, duração) devem ser confirmados com o cliente antes de produção.
 * Estão preenchidos com valores plausíveis baseados nas fotos disponíveis.
 */

export type Project = {
  slug: string;
  title: string;
  /** Localização legível, ex: "Vila do Conde" */
  location: string;
  /** Categoria — usado também para filtros futuros */
  category: "Construção Civil" | "Industrial" | "Reabilitação" | "Sede" | "Comercial";
  /** Ano de conclusão */
  year: string;
  /** Curto: card e meta description */
  tagline: string;
  /** Texto longo da página detalhe */
  description: string;
  /** Foto principal — usada no card e no hero */
  cover: string;
  /** Galeria de fotos (mínimo 1; cover é incluída automaticamente se não estiver na lista) */
  gallery: string[];
  /** Dados técnicos visualizáveis em grid */
  facts: { label: string; value: string }[];
};

export const PROJECTS: Project[] = [
  {
    slug: "edificio-residencial-vila-do-conde",
    title: "Edifício Residencial",
    location: "Vila do Conde",
    category: "Construção Civil",
    year: "2024",
    tagline:
      "Obra de raiz com acabamentos exteriores e gestão integral da empreitada.",
    description:
      "Construção de raiz de edifício residencial multifamiliar em Vila do Conde. A intervenção da Group Cadeias incluiu fundações, estrutura, alvenarias, cobertura, infraestruturas e acabamentos exteriores. A obra foi executada com plataforma elevatória própria, garantindo qualidade na fachada e acabamentos finos em todas as cotas.",
    cover: "/images/obra-edificio-novo.jpeg",
    gallery: ["/images/obra-edificio-novo.jpeg"],
    facts: [
      { label: "Tipologia", value: "Multifamiliar" },
      { label: "Pisos", value: "4" },
      { label: "Categoria", value: "Construção Civil" },
      { label: "Ano", value: "2024" },
    ],
  },
  {
    slug: "unidade-industrial-fipal",
    title: "Unidade Industrial FIPAL",
    location: "Norte de Portugal",
    category: "Industrial",
    year: "2023",
    tagline:
      "Construção e revestimento exterior em chapa lacada azul/amarela — projeto industrial executado.",
    description:
      "Projeto industrial com construção e revestimento exterior em chapa lacada nas cores institucionais do cliente (FIPAL). A intervenção incluiu estrutura metálica, revestimento de fachadas, vedações, portões, sinalização exterior e arranjos do espaço envolvente — pronto para a operação industrial do cliente.",
    cover: "/images/projeto-fipal-3.jpeg",
    gallery: [
      "/images/projeto-fipal-3.jpeg",
      "/images/projeto-fipal-1.jpeg",
      "/images/projeto-fipal-2.jpeg",
      "/images/projeto-fipal-4.jpeg",
    ],
    facts: [
      { label: "Tipologia", value: "Indústria alimentar" },
      { label: "Categoria", value: "Industrial" },
      { label: "Cliente", value: "FIPAL" },
      { label: "Ano", value: "2023" },
    ],
  },
  {
    slug: "manutencao-pintura-vila-do-conde",
    title: "Manutenção e Pintura de Fachada",
    location: "Vila do Conde",
    category: "Reabilitação",
    year: "2024",
    tagline:
      "Trabalhos em altura com plataforma elevatória — pintura e selagens em fachada de edifício residencial.",
    description:
      "Trabalhos de manutenção e pintura exterior em edifício residencial habitado. Com recurso a plataforma elevatória articulada (HA26PX) operada pela equipa Cadeias, foram executados trabalhos de selagem, preparação e pintura da fachada nas várias cotas, sem necessidade de andaimes — minimizando impacto na vivência dos moradores.",
    cover: "/images/obra-pintura-edificio.jpeg",
    gallery: ["/images/obra-pintura-edificio.jpeg", "/images/equipamento-plataforma.jpeg"],
    facts: [
      { label: "Tipologia", value: "Residencial habitado" },
      { label: "Equipamento", value: "Plataforma HA26PX" },
      { label: "Categoria", value: "Reabilitação" },
      { label: "Ano", value: "2024" },
    ],
  },
  {
    slug: "sede-group-cadeias",
    title: "Sede Group Cadeias",
    location: "Zona Industrial da Varziela, Vila do Conde",
    category: "Sede",
    year: "2023",
    tagline:
      "Instalações próprias da empresa em Vila do Conde — base de operações e armazém de equipamento.",
    description:
      "A nossa sede própria na Zona Industrial da Varziela é a base de operações da Group Cadeias — escritórios, armazém de materiais, parque de equipamento próprio (camiões basculantes, plataformas elevatórias, viaturas comerciais brandadas) e espaço de coordenação técnica. Reflete o investimento da empresa em estrutura sólida e capacidade própria de execução.",
    cover: "/images/sede-armazem.jpeg",
    gallery: [
      "/images/sede-armazem.jpeg",
      "/images/banner-fachada.jpeg",
      "/images/equipamento-camiao.jpeg",
      "/images/viatura-traseira.jpeg",
      "/images/viatura-lateral.jpeg",
    ],
    facts: [
      { label: "Localização", value: "ZI Varziela, Vila do Conde" },
      { label: "Tipo", value: "Escritórios + armazém" },
      { label: "Categoria", value: "Instalações próprias" },
      { label: "Ano", value: "2023" },
    ],
  },
  {
    slug: "fachada-industrial-fipal",
    title: "Fachada Industrial",
    location: "Norte de Portugal",
    category: "Industrial",
    year: "2023",
    tagline:
      "Estrutura metálica e revestimento exterior — segunda fase do projeto industrial FIPAL.",
    description:
      "Segunda fase de intervenção no complexo industrial FIPAL — montagem de estrutura adicional, revestimento de fachadas em chapa lacada bicolor, vedação perimetral metálica e sinalização institucional. Trabalho coordenado com a operação contínua da fábrica.",
    cover: "/images/projeto-fipal-1.jpeg",
    gallery: [
      "/images/projeto-fipal-1.jpeg",
      "/images/projeto-fipal-2.jpeg",
      "/images/projeto-fipal-4.jpeg",
    ],
    facts: [
      { label: "Tipologia", value: "Indústria alimentar" },
      { label: "Categoria", value: "Industrial" },
      { label: "Fase", value: "Ampliação" },
      { label: "Ano", value: "2023" },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getNextProject(slug: string): Project {
  const idx = PROJECTS.findIndex((p) => p.slug === slug);
  return PROJECTS[(idx + 1) % PROJECTS.length];
}
