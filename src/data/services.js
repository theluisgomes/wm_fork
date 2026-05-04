const servicesByLang = {
  pt: [
    {
      id: 'strategy',
      number: '01',
      title: 'Strategy & Growth',
      description: 'Transformamos percepção de mercado em posicionamento, e posicionamento em crescimento sustentável.',
      tags: ['Brand diagnostics', 'Brand positioning', 'Strategic planning', 'Growth opportunities', 'Go-to-mkt strategy'],
    },
    {
      id: 'data',
      number: '02',
      title: 'Data Insights & Intelligence',
      description: 'Capturamos sinais onde outros veem silêncio. Combinamos NLP, Machine Learning e modelos de linguagem para transformar comportamento, competição e audiência em inteligência acionável.',
      tags: ['Machine Learning', 'NLP & LLMs', 'Web Scraping Intelligence', 'Competitive intelligence', 'Audience insights', 'Data Architecture'],
    },
    {
      id: 'product',
      number: '03',
      title: 'Product Development',
      description: 'Construímos as ferramentas que fazem a inteligência operar: dashboards, plataformas e Agentes de I.A. que processam, decidem e entregam sem depender de intervenção manual a cada ciclo.',
      tags: ['Agentes de I.A.', 'Automação Inteligente', 'Dashboards', 'Plataformas proprietárias', 'MarTech', 'Integração de dados'],
    },
  ],
  en: [
    {
      id: 'strategy',
      number: '01',
      title: 'Strategy & Growth',
      description: 'We turn market perception into positioning, and positioning into sustainable growth.',
      tags: ['Brand diagnostics', 'Brand positioning', 'Strategic planning', 'Growth opportunities', 'Go-to-market strategy'],
    },
    {
      id: 'data',
      number: '02',
      title: 'Data Insights & Intelligence',
      description: 'We capture signals where others see silence. We combine NLP, Machine Learning, and language models to turn behavior, competition, and audiences into actionable intelligence.',
      tags: ['Machine Learning', 'NLP & LLMs', 'Web Scraping Intelligence', 'Competitive intelligence', 'Audience insights', 'Data Architecture'],
    },
    {
      id: 'product',
      number: '03',
      title: 'Product Development',
      description: 'We build the tools that make intelligence operational: dashboards, platforms, and AI agents that process, decide, and deliver without manual intervention every cycle.',
      tags: ['AI Agents', 'Intelligent Automation', 'Dashboards', 'Proprietary platforms', 'MarTech', 'Data integration'],
    },
  ],
};

export function getServices(lang) {
  return lang === 'en' ? servicesByLang.en : servicesByLang.pt;
}
