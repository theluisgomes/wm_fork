const methodologyByLang = {
  pt: [
    {
      label: 'Diagnóstico',
      caption: 'perguntas certas',
      timeline: 'Entendemos o problema antes de qualquer resposta.',
      description: 'Imersão no desafio de negócio, leitura competitiva e mapeamento de fontes para fazer as perguntas certas antes de coletar qualquer dado.',
      keys: ['Imersão no negócio', 'Contexto competitivo', 'Perguntas analíticas'],
    },
    {
      label: 'Estruturação',
      caption: 'base interpretável',
      timeline: 'Dados brutos organizados em estrutura interpretável.',
      description: 'Limpeza, normalização, processamento de linguagem natural (NLP) e Machine Learning que transformam grande volume de dados não-estruturados em sinais claros.',
      keys: ['Machine Learning', 'NLP & LLMs', 'Arquitetura de dados'],
    },
    {
      label: 'Inteligência',
      caption: 'direção estratégica',
      timeline: 'Análise convertida em direção estratégica.',
      description: 'Diagnóstico de posicionamento, insights competitivos e uso de LLMs para identificar padrões complexos que revelam onde agir e por quê.',
      keys: ['Diagnóstico com IA', 'Insights acionáveis', 'Oportunidades de crescimento'],
    },
    {
      label: 'Materialização',
      caption: 'operação contínua',
      timeline: 'A inteligência entregue como produto que opera.',
      description: 'Dashboards, plataformas proprietárias e Agentes de I.A. que tornam os resultados visíveis, automatizam processos complexos e operam continuamente sem intervenção manual.',
      keys: ['Agentes de Inteligência Artificial', 'Dashboards e reports', 'Automação inteligente'],
    },
  ],
  en: [
    {
      label: 'Diagnosis',
      caption: 'right questions',
      timeline: 'We understand the problem before any answer.',
      description: 'Immersion in the business challenge, competitive reading, and source mapping to ask the right questions before collecting any data.',
      keys: ['Business immersion', 'Competitive context', 'Analytical questions'],
    },
    {
      label: 'Structuring',
      caption: 'interpretable base',
      timeline: 'Raw data organized into an interpretable structure.',
      description: 'Cleaning, normalization, natural language processing (NLP), and Machine Learning that turn large volumes of unstructured data into clear signals.',
      keys: ['Machine Learning', 'NLP & LLMs', 'Data architecture'],
    },
    {
      label: 'Intelligence',
      caption: 'strategic direction',
      timeline: 'Analysis converted into strategic direction.',
      description: 'Positioning diagnosis, competitive insights, and LLM usage to identify complex patterns that reveal where to act and why.',
      keys: ['AI diagnosis', 'Actionable insights', 'Growth opportunities'],
    },
    {
      label: 'Materialization',
      caption: 'continuous operation',
      timeline: 'Intelligence delivered as an operating product.',
      description: 'Dashboards, proprietary platforms, and AI agents that make results visible, automate complex processes, and run continuously without manual intervention.',
      keys: ['Artificial Intelligence Agents', 'Dashboards and reports', 'Intelligent automation'],
    },
  ],
};

export function getMethodology(lang) {
  return lang === 'en' ? methodologyByLang.en : methodologyByLang.pt;
}
