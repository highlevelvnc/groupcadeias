/**
 * Catálogo de serviços. Edita aqui para acrescentar/remover.
 * Cada slug gera automaticamente uma página em /servicos/[slug].
 */

export type ServiceIcon =
  | "building"
  | "paintRoller"
  | "blueprint"
  | "hardHat"
  | "clipboard"
  | "briefcase";

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  /** Tagline curto, aparece no card e meta description */
  tagline: string;
  /** Descrição expandida — usada no detalhe */
  description: string;
  icon: ServiceIcon;
  /** Imagem hero da página de detalhe */
  heroImage: string;
  /** Lista de sub-serviços / o que está incluído */
  includes: string[];
  /** Etapas do processo */
  process: { title: string; description: string }[];
  /** Casos de uso típicos */
  useCases: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "construcao-civil",
    title: "Construção Civil",
    shortTitle: "Construção Civil",
    tagline:
      "Projetos de raiz com gestão integral de materiais, prazos e mão de obra especializada.",
    description:
      "Construímos do alvará à entrega de chaves. A nossa equipa coordena todas as fases da obra de raiz — fundações, estrutura, cobertura, alvenarias, infraestruturas e acabamentos — com controlo rigoroso de qualidade e prazos. Trabalhamos em moradias unifamiliares, edifícios multifamiliares e pequenas/médias intervenções comerciais.",
    icon: "building",
    heroImage: "/images/obra-edificio-novo.jpeg",
    includes: [
      "Fundações e estrutura",
      "Alvenarias e cobertura",
      "Infraestruturas (água, esgoto, eletricidade)",
      "Caixilharias e isolamento térmico",
      "Acabamentos interiores e exteriores",
      "Espaços exteriores e arruamentos",
    ],
    process: [
      {
        title: "Análise e orçamento",
        description:
          "Visita ao local, leitura técnica do projeto e proposta detalhada por capítulos.",
      },
      {
        title: "Planeamento",
        description:
          "Cronograma realista, mobilização de equipa e fornecedores, gestão de licenças.",
      },
      {
        title: "Execução",
        description:
          "Equipa em obra com direção técnica permanente e reportes regulares.",
      },
      {
        title: "Entrega",
        description:
          "Receção provisória, correção de pendentes e entrega final com manual de utilização.",
      },
    ],
    useCases: [
      "Moradias unifamiliares",
      "Edifícios residenciais",
      "Espaços comerciais e escritórios",
      "Pavilhões industriais",
    ],
  },
  {
    slug: "remodelacoes",
    title: "Remodelações",
    shortTitle: "Remodelações",
    tagline:
      "Modernização de espaços residenciais e comerciais com foco em estética, funcionalidade e eficiência.",
    description:
      "Damos vida nova a espaços existentes — apartamentos, moradias, escritórios e lojas. Cuidamos do projeto, das licenças, da execução e dos acabamentos. Trabalhamos com gosto pelo detalhe e materiais selecionados, garantindo um resultado que valoriza o imóvel e melhora a qualidade do seu dia-a-dia.",
    icon: "paintRoller",
    heroImage: "/images/obra-pintura-edificio.jpeg",
    includes: [
      "Demolições controladas",
      "Redesenho de layout interior",
      "Cozinhas e casas de banho",
      "Pavimentos, paredes e tetos",
      "Carpintaria e mobiliário fixo",
      "Pintura e acabamentos finais",
    ],
    process: [
      {
        title: "Visita e proposta",
        description:
          "Levantamento do espaço atual, ideias e definição do âmbito da intervenção.",
      },
      {
        title: "Projeto e materiais",
        description:
          "Apresentação de soluções, escolha de materiais e aprovação do cliente.",
      },
      {
        title: "Obra",
        description:
          "Execução com proteção do existente, gestão de prazos e respeito pela vivência.",
      },
      {
        title: "Limpeza e entrega",
        description:
          "Limpeza fina e entrega do espaço pronto a habitar/usar.",
      },
    ],
    useCases: [
      "Apartamentos e moradias",
      "Lojas e showrooms",
      "Escritórios e clínicas",
      "Restaurantes e cafés",
    ],
  },
  {
    slug: "engenharia-projetos",
    title: "Engenharia e Projetos",
    shortTitle: "Engenharia",
    tagline:
      "Planeamento técnico detalhado, licenciamento e consultoria especializada em todas as fases.",
    description:
      "Apoiamos o cliente desde a primeira ideia até à licença camarária — projetos de arquitetura e especialidades, telas finais, peças escritas e desenhadas, e acompanhamento técnico em obra. Trabalhamos com uma rede de projetistas certificados para garantir conformidade e prazos.",
    icon: "blueprint",
    heroImage: "/images/sede-armazem.jpeg",
    includes: [
      "Projeto de arquitetura",
      "Especialidades (estabilidade, águas, eletricidade, térmica)",
      "Estudos prévios e anteprojeto",
      "Licenciamento e processos camarários",
      "Coordenação de segurança",
      "Telas finais e dossier técnico",
    ],
    process: [
      {
        title: "Estudo prévio",
        description:
          "Reunião com o cliente, análise do terreno e regulamentos aplicáveis.",
      },
      {
        title: "Projeto base",
        description:
          "Desenvolvimento das peças desenhadas e escritas para apresentação inicial.",
      },
      {
        title: "Especialidades",
        description:
          "Articulação com projetistas certificados em cada área técnica.",
      },
      {
        title: "Licenciamento",
        description:
          "Submissão à autarquia e gestão de pedidos de elementos adicionais.",
      },
    ],
    useCases: [
      "Construção nova",
      "Ampliações e remodelações sujeitas a licenciamento",
      "Mudança de uso de espaços",
      "Telas finais e regularizações",
    ],
  },
  {
    slug: "reabilitacao",
    title: "Reabilitação de Espaços",
    shortTitle: "Reabilitação",
    tagline:
      "Recuperação de edifícios antigos preservando a traça original e introduzindo conforto e segurança modernos.",
    description:
      "Especialistas em devolver vida a edifícios antigos. Reforçamos estruturas, recuperamos fachadas e interiores, melhoramos eficiência energética e adequamos os espaços ao uso atual — sem perder a identidade do imóvel. Particularmente focados no centro histórico do norte de Portugal.",
    icon: "hardHat",
    heroImage: "/images/projeto-fipal-3.jpeg",
    includes: [
      "Diagnóstico estrutural",
      "Reforço de estruturas e fundações",
      "Recuperação de fachadas e coberturas",
      "Eficiência energética (isolamento, caixilharias)",
      "Recuperação de elementos originais (pedra, madeira, ferro)",
      "Adaptação a uso moderno",
    ],
    process: [
      {
        title: "Avaliação técnica",
        description:
          "Inspeção do edifício, levantamento de patologias e relatório.",
      },
      {
        title: "Plano de intervenção",
        description:
          "Definição do âmbito de recuperação preservando o que tem valor.",
      },
      {
        title: "Execução cuidada",
        description:
          "Trabalho com materiais e técnicas adequadas ao edificado existente.",
      },
      {
        title: "Reentrega",
        description:
          "Entrega do imóvel pronto para nova utilização.",
      },
    ],
    useCases: [
      "Edifícios em centro histórico",
      "Habitações antigas",
      "Recuperação de fachadas",
      "Adaptação a turismo / alojamento local",
    ],
  },
  {
    slug: "gestao-de-obras",
    title: "Gestão e Acompanhamento de Obras",
    shortTitle: "Gestão de Obras",
    tagline:
      "Acompanhamento rigoroso de prazos, custos e qualidade em todas as fases — comunicação clara e próxima.",
    description:
      "Quando o cliente já tem projeto e construtor mas precisa de garantir que o que foi contratado é o que vai ser executado, entramos como direção técnica e fiscalização. Defendemos os interesses do cliente e mantemos a obra dentro do orçamento, do prazo e da qualidade prometidos.",
    icon: "clipboard",
    heroImage: "/images/equipamento-camiao.jpeg",
    includes: [
      "Direção técnica de obra",
      "Fiscalização e controlo de qualidade",
      "Reportes regulares ao cliente",
      "Gestão de autos de medição",
      "Coordenação de subempreiteiros",
      "Receção provisória e definitiva",
    ],
    process: [
      {
        title: "Análise inicial",
        description:
          "Leitura crítica do projeto, contratos e cronograma.",
      },
      {
        title: "Acompanhamento contínuo",
        description:
          "Visitas regulares, registo fotográfico e relatórios de progresso.",
      },
      {
        title: "Validação técnica",
        description:
          "Validação de medições, materiais e técnicas executivas.",
      },
      {
        title: "Receção",
        description:
          "Listagem de pendentes e acompanhamento até entrega definitiva.",
      },
    ],
    useCases: [
      "Particulares com obra contratada a terceiros",
      "Investidores imobiliários",
      "Condomínios em obra",
      "Reabilitações urbanas",
    ],
  },
  {
    slug: "solucoes-empresariais",
    title: "Soluções para Empresas e Particulares",
    shortTitle: "Empresas e Particulares",
    tagline:
      "Infraestruturas para empresas e projetos residenciais personalizados — sempre adaptados ao cliente.",
    description:
      "Para empresas, executamos pavilhões industriais, escritórios, lojas, naves logísticas e showrooms — chave-na-mão. Para particulares, desenvolvemos projetos residenciais personalizados com a mesma metodologia técnica. Em ambos os casos, ouvimos primeiro, planeamos depois, executamos com transparência.",
    icon: "briefcase",
    heroImage: "/images/projeto-fipal-4.jpeg",
    includes: [
      "Pavilhões industriais e logísticos",
      "Escritórios e showrooms",
      "Lojas e estabelecimentos comerciais",
      "Moradias e apartamentos premium",
      "Espaços exteriores corporativos",
      "Manutenção pós-obra",
    ],
    process: [
      {
        title: "Briefing",
        description:
          "Reunião com decisores para entender necessidades, prazos e investimento.",
      },
      {
        title: "Proposta integrada",
        description:
          "Solução técnica e financeira adaptada ao caso concreto.",
      },
      {
        title: "Chave-na-mão",
        description:
          "Execução completa coordenada por uma única entidade.",
      },
      {
        title: "Pós-entrega",
        description:
          "Acompanhamento e manutenção depois da entrega.",
      },
    ],
    useCases: [
      "Indústria, logística e armazéns",
      "Comércio e escritórios",
      "Moradias premium",
      "Reabilitação corporativa",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getOtherServices(slug: string): Service[] {
  return SERVICES.filter((s) => s.slug !== slug);
}
