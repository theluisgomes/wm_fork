const images = {
  guto: new URL('../../deck/Guto Verissimo.jpeg', import.meta.url).href,
  luis: new URL('../../deck/Luis Gomes.jpeg', import.meta.url).href,
  rodrigo: new URL('../../deck/Rodrigo Neves.jpeg', import.meta.url).href,
  ulisses: new URL('../../deck/Ulisses Zamboni.jpg', import.meta.url).href,
};

export const team = [
  {
    name: 'Guto Veríssimo',
    role: 'CEO',
    specialties: 'Estratégia de marketing, branding e posicionamento',
    bio: 'Estrategista de marketing, consolidou trajetória em BBDO, Dentsu e Coca-Cola. Especialista em branding e posicionamento, converte análise de dados em inteligência aplicada para alavancar grandes marcas e orquestrar modelos sustentáveis de negócios.',
    image: images.guto,
    tags: ['PUC Rio', 'Miami Ad School', 'ESPM SP', 'FGV'],
  },
  {
    name: 'Rodrigo Neves',
    role: 'CFO',
    specialties: 'Gestão estratégica, compliance e negociações complexas',
    bio: 'Especialista em gestão estratégica, estruturou operações financeiras em companhias globais como KPMG e Cescon Barrieu. Com alta precisão analítica, alia compliance a negociações complexas para garantir expansão rentável e resiliência dos negócios.',
    image: images.rodrigo,
    tags: ['UFRJ'],
  },
  {
    name: 'Luis Gomes',
    role: 'CTO',
    specialties: 'Inovação tecnológica, IA e análise de dados comportamentais',
    bio: 'Especialista em inovação tecnológica, liderou inteligência de dados na FCB Brasil e inovação na FGV. Referência em IA e social listening, funde análise de dados comportamentais com design estratégico para antecipar tendências e potencializar soluções.',
    image: images.luis,
    tags: ['FACHA', 'Perestroika', 'PUCRS', 'FGV'],
  },
  {
    name: 'Ulisses Zamboni',
    role: 'Investidor e Mentor',
    specialties: 'Estratégia de marca, liderança e comportamento do consumidor',
    bio: 'Publicitário e psicanalista, fundou a Santa Clara em 2006 e é referência em estratégia de marca no Brasil. Conselheiro da MIT Sloan Review Brasil, conecta psicologia aplicada, liderança e comportamento do consumidor para gerar crescimento real.',
    image: images.ulisses,
    tags: ['Santa Clara', 'MIT Sloan Review Brasil', 'Psicanálise', 'Brand Strategy'],
    featured: true,
  },
];
