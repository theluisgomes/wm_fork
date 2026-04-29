export const heroCopy = {
  brand: 'WISEMETRICS',
  /** Usado no bloco de contato e como frase única de valor */
  headline:
    'Transformamos dados, IA e percepção em posicionamento e produtos digitais inteligentes.',
  /** Hero: três linhas — a do meio recebe destaque visual (gradiente) */
  heroLines: ['Data', 'into', 'action.'] as const,
  sub: 'Do diagnóstico ao produto digital que opera a inteligência no seu dia a dia.',
} as const

export const deckAgenda = [
  {
    id: 'agenda-01',
    n: '01',
    title: 'Quem somos',
    sub: 'Razões de existência, avenidas de atuação e principais parceiros.',
  },
  {
    id: 'agenda-02',
    n: '02',
    title: 'Metodologia modular',
    sub: 'Como articulamos estratégia, inteligência e desenvolvimento em uma lógica integrada de trabalho.',
  },
  {
    id: 'agenda-03',
    n: '03',
    title: 'A metodologia em prática',
    sub: 'Business cases que demonstram a aplicação híbrida das nossas frentes de atuação.',
  },
] as const

export const doresDoMercado = {
  eyebrow: 'O problema',
  title: 'Dados não faltam. Direção, sim.',
  circles: [
    { n: '1', title: 'Dado sem leitura é ruído' },
    { n: '2', title: 'Informação sem contexto não decide' },
    { n: '3', title: 'Repertório é o que transforma análise em ação' },
  ],
  rightTitle: 'O gargalo é de interpretação, não de volume.',
  rightBody: [
    'Empresas acumulam dados mas travam na hora de agir. O que falta é a capacidade de articular fontes e processar em escala. Com inteligência artificial, convertemos complexidade em direção estratégica. A Wisemetrics existe nesse espaço — onde Machine Learning encontra perspicácia, e código encontra narrativa.',
  ],
} as const

export const wisemetricsMissionVision = {
  sectionTitle: 'Três frentes. Uma lógica.',
} as const

export const atuacoes = [
  {
    id: 'strategy' as const,
    title: 'Strategy & Growth',
    desc: 'Transformamos percepção de mercado em posicionamento, e posicionamento em crescimento sustentável.',
    tags: ['Brand diagnostics', 'Brand positioning', 'Strategic planning', 'Growth opportunities', 'Go-to-mkt strategy'],
  },
  {
    id: 'data' as const,
    title: 'Data Insights \u0026 Intelligence',
    desc: 'Capturamos sinais onde outros veem silêncio. Combinamos NLP, Machine Learning e modelos de linguagem para transformar comportamento e audiência em inteligência.',
    tags: [
      'Machine Learning',
      'NLP \u0026 LLMs',
      'Web Scraping Intelligence',
      'Competitive intelligence',
      'Audience insights',
      'Data Architecture',
    ],
  },
  {
    id: 'digital' as const,
    title: 'Product Development',
    desc: 'Construímos ferramentas que fazem a inteligência operar: dashboards e Agentes de I.A. que processam, decidem e entregam sem intervenção manual.',
    tags: ['Agentes de I.A.', 'Automação Inteligente', 'Dashboards', 'Plataformas proprietárias', 'MarTech', 'Integração de dados'],
  },
] as const

export const metodologiaModular = {
  eyebrow: 'Como trabalhamos',
  title: 'Um processo que conecta as pontas.',
  description: 'Cada frente tem seu conjunto de ferramentas — mas elas conversam entre si, adaptadas ao momento de cada cliente.',
  steps: [
    {
      n: '01',
      label: 'Diagnóstico',
      tagline: 'Entendemos o problema antes de qualquer resposta.',
      description: 'Imersão no desafio de negócio, leitura competitiva e mapeamento de fontes — para fazer as perguntas certas antes de coletar qualquer dado.',
      keys: ['Imersão no negócio', 'Contexto competitivo', 'Perguntas analíticas'],
      rgb: 'var(--wm-cta-rgb)',
    },
    {
      n: '02',
      label: 'Estruturação',
      tagline: 'Dados brutos organizados em estrutura interpretável.',
      description: 'Limpeza, normalização, processamento de linguagem natural (NLP) e Machine Learning que transformam grande volume de dados não-estruturados em sinais claros.',
      keys: ['Machine Learning', 'NLP \u0026 LLMs', 'Arquitetura de dados'],
      rgb: 'var(--wm-strategy-rgb)',
    },
    {
      n: '03',
      label: 'Inteligência',
      tagline: 'Análise convertida em direção estratégica.',
      description: 'Diagnóstico de posicionamento, insights competitivos e uso de LLMs para identificar padrões complexos que revelam onde agir e por quê.',
      keys: ['Diagnóstico com IA', 'Insights acionáveis', 'Oportunidades de crescimento'],
      rgb: 'var(--wm-data-rgb)',
    },
    {
      n: '04',
      label: 'Materialização',
      tagline: 'A inteligência entregue como produto que opera.',
      description: 'Dashboards, plataformas proprietárias e Agentes de I.A. que tornam os resultados visíveis, automatizam processos complexos e operam continuamente sem intervenção manual.',
      keys: ['Agentes de Inteligência Artificial', 'Dashboards e reports', 'Automação inteligente'],
      rgb: 'var(--wm-digital-rgb)',
    },
  ],
} as const

export const caseStudies = {
  strategy: {
    title: 'Strategy & Growth',
    partner: 'PENALTY + M+C SAATCHI GROUP',
    brief: 'Como uma marca esportiva descobre onde ela realmente vive na cultura — e onde pode crescer.',
    body: [
      'Cruzamos social listening, busca e comportamento digital para ler a Penalty além dos seus próprios canais. O que as pessoas diziam, com qual linguagem, em quais contextos.',
      'Emergiu um mapa de afinidades e tensões: territórios culturais com tração real, oportunidades de conexão ainda inexploradas, e a distância entre como a marca se via e como era percebida.',
      'O diagnóstico virou direcionamento — para posicionamento, conteúdo e expansão de relevância.',
    ],
    images: [
      '/deck/penalty_terminologia.png',
      '/deck/penalty_engajamento.png',
      '/deck/penalty_humores.png',
      '/deck/penalty_afinidade.png',
    ],
  },
  data: {
    title: 'Data Insights & Intelligence',
    partner: 'Radar ATMMOS',
    brief: 'Liderança no desenvolvimento da primeira pesquisa de social listening sobre o comportamento dos brasileiros em relação ao "Desmatamento".',
    body: [
      'O estudo, patrocinado pela greentech Atmmos, utilizou inteligência de dados para mapear o cenário socioambiental nas redes.',
      'O impacto do material gerou forte tração de Thought Leadership e Data PR, sendo apresentado no palco "Clean Up The World" do Rio Innovation Week 2024 e pautando a imprensa com uma matéria exclusiva no Portal iG, conectando análise de dados a resultados concretos de posicionamento ESG.'
    ],
    images: [
      '/deck/radar-mencoes.png',
      '/deck/radar-buscas.png',
      '/deck/radar-dimensionamento.png',
      '/deck/radar-mapa.png',
    ],
  },
  digital: {
    title: 'Produtos Digitais',
    partner: 'O Boticário + ALMAPBBDO',
    brief: 'Plataforma proprietária de planejamento de mídia OOH — do dado bruto à decisão visual, em tempo real.',
    body: [
      'Construímos do zero uma ferramenta end-to-end para planejamento de mídia out-of-home: integração via BigQuery, filtros dinâmicos, alocação otimizada por budget e scoring de eficiência.',
      'A interface combina dashboards analíticos, mapas interativos e versionamento de planos — tornando decisões de mídia visualmente auditáveis e estrategicamente fundamentadas.',
    ],
    images: [
      '/deck/boticario_analise.png',
      '/deck/boticario_recorte.png',
      '/deck/boticario_historico.png',
    ],
  },
} as const

export const partners = {
  eyebrow: 'Ecossistema',
  title: 'Quem confia na Wisemetrics.',
  items: [
    'FGV',
    'O Boticário',
    'Flamengo F.C.',
    'OLX',
    'Carvalho Hosken S/A',
    'M+C Saatchi Group',
    'ALMAPBBDO',
    'digiteam',
    'AMEC',
    'ConsumoTeca',
    'Sport Locker',
  ],
  certifications: ['Membros do Instituto 12 (RJ)', 'Google Analytics Certified', 'Google Looker Studio Certified'],
} as const

export const teamData = [
  {
    name: 'Guto Veríssimo',
    role: '18+ anos de experiência',
    image: '/deck/Guto Verissimo.jpeg',
    bio: 'Mais de 18 anos em estratégia de marketing e inovação, com trajetória em companhias globais como BBDO, Dentsu e na Coca-Cola Brasil. Especialista em projetos de posicionamento, branding e inteligência e data insights.',
    highlights: ['PUC Rio', 'Miami Ad School', 'ESPM SP', 'FGV'],
  },
  {
    name: 'Luis Gomes',
    role: '13+ anos de experiência',
    image: '/deck/Luis Gomes.jpeg',
    bio: '13 anos de experiência, incluindo posições de liderança como Coordenador de Design e Inovação na FGV e Coordenador de Inteligência de Dados na FCB Brasil. Produziu projetos de tecnologias imersivas, IA generativa e Social Listening.',
    highlights: ['FACHA', 'Perestroika', 'PUCRS', 'FGV'],
  },
  {
    name: 'Rodrigo Neves',
    role: '14+ anos de experiência',
    image: '/deck/Rodrigo Neves.jpeg',
    bio: '14 anos de experiência em gestão estratégica, estruturação de operações e negociação em empresas e escritórios como KPMG, Tauil & Chequer/Mayer Brown, Cescon Barrieu e Elera Renováveis.',
    highlights: ['Universidade Federal do Rio de Janeiro'],
  },
] as const
