const images = {
  guto: new URL('../../deck/Guto Verissimo.jpeg', import.meta.url).href,
  luis: new URL('../../deck/Luis Gomes.jpeg', import.meta.url).href,
  rodrigo: new URL('../../deck/Rodrigo Neves.jpeg', import.meta.url).href,
  ulisses: new URL('../../deck/Ulisses Zamboni.jpg', import.meta.url).href,
};

const teamByLang = {
  pt: [
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
  ],
  en: [
    {
      name: 'Guto Veríssimo',
      role: 'CEO',
      specialties: 'Marketing strategy, branding, and positioning',
      bio: 'A marketing strategist with a consolidated path through BBDO, Dentsu, and Coca-Cola. Specialist in branding and positioning, he converts data analysis into applied intelligence to leverage major brands and orchestrate sustainable business models.',
      image: images.guto,
      tags: ['PUC Rio', 'Miami Ad School', 'ESPM SP', 'FGV'],
    },
    {
      name: 'Rodrigo Neves',
      role: 'CFO',
      specialties: 'Strategic management, compliance, and complex negotiations',
      bio: 'A specialist in strategic management, he structured financial operations in global companies such as KPMG and Cescon Barrieu. With high analytical precision, he combines compliance and complex negotiations to ensure profitable expansion and business resilience.',
      image: images.rodrigo,
      tags: ['UFRJ'],
    },
    {
      name: 'Luis Gomes',
      role: 'CTO',
      specialties: 'Technology innovation, AI, and behavioral data analysis',
      bio: 'A specialist in technology innovation, he led data intelligence at FCB Brasil and innovation at FGV. A reference in AI and social listening, he blends behavioral data analysis with strategic design to anticipate trends and enhance solutions.',
      image: images.luis,
      tags: ['FACHA', 'Perestroika', 'PUCRS', 'FGV'],
    },
    {
      name: 'Ulisses Zamboni',
      role: 'Investor and Mentor',
      specialties: 'Brand strategy, leadership, and consumer behavior',
      bio: 'Advertiser and psychoanalyst, he founded Santa Clara in 2006 and is a reference in brand strategy in Brazil. Board advisor at MIT Sloan Review Brasil, he connects applied psychology, leadership, and consumer behavior to generate real growth.',
      image: images.ulisses,
      tags: ['Santa Clara', 'MIT Sloan Review Brasil', 'Psychoanalysis', 'Brand Strategy'],
      featured: true,
    },
  ],
};

export function getTeam(lang) {
  return lang === 'en' ? teamByLang.en : teamByLang.pt;
}
