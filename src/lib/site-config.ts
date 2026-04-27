/**
 * Configuração central da Group Cadeias.
 * NOTA: alterar dados aqui propaga para todo o site (header, footer, contactos, SEO, JSON-LD).
 */

export const siteConfig = {
  name: "Group Cadeias",
  legalName: "Group Cadeias Engenharia e Construção",
  shortDescription:
    "Engenharia e construção com rigor, qualidade e confiança em Vila do Conde.",
  description:
    "Empresa de engenharia e construção em Vila do Conde. Construção civil, remodelações, projetos, reabilitação e acompanhamento de obras com 25 anos de experiência.",
  tagline: "Damos vida ao seu espaço.",
  yearsOfExperience: 25,
  url: "https://group-cadeias.pt",
  locale: "pt-PT",
  // Pode ser substituído pelo logo definitivo da empresa
  ogImage: "/images/logo-25-anos.jpeg",

  contact: {
    phonePrimary: "913 156 666",
    phonePrimaryRaw: "+351913156666",
    phoneSecondary: "252 083 710",
    phoneSecondaryRaw: "+351252083710",
    email: "geral@group-cadeias.pt",
    whatsapp: "https://wa.me/351913156666",
    whatsappMessage:
      "Olá Group Cadeias, gostaria de pedir um orçamento para um projeto.",
  },

  address: {
    street: "Zona Industrial da Varziela, Zona 2, Rua A, Lote 1",
    parish: "Árvore",
    city: "Vila do Conde",
    region: "Porto",
    country: "Portugal",
    postalCode: "4480-152",
    full: "Zona Industrial da Varziela, Zona 2, Rua A, Lote 1, Árvore, Vila do Conde, Portugal",
    mapsUrl: "https://share.google/PgCN3tXeNjpipsL0K",
    // Coordenadas aproximadas da Zona Industrial da Varziela (substituir pelas exatas no futuro)
    geo: { lat: 41.3537, lng: -8.7099 },
  },

  social: {
    facebook: "https://www.facebook.com/people/Group-Cadeias/61557477514306/",
  },

  hours: [
    { days: "Segunda a Sexta", time: "08:30 – 18:00" },
    { days: "Sábado", time: "Encerrado" },
    { days: "Domingo", time: "Encerrado" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
