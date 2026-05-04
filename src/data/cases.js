const images = {
  penaltyTerminologia: new URL('../../deck/penalty_terminologia.png', import.meta.url).href,
  penaltyEngajamento: new URL('../../deck/penalty_engajamento.png', import.meta.url).href,
  penaltyHumores: new URL('../../deck/penalty_humores.png', import.meta.url).href,
  penaltyAfinidade: new URL('../../deck/penalty_afinidade.png', import.meta.url).href,
  radarMencoes: new URL('../../deck/radar-mencoes.png', import.meta.url).href,
  radarBuscas: new URL('../../deck/radar-buscas.png', import.meta.url).href,
  radarDimensionamento: new URL('../../deck/radar-dimensionamento.png', import.meta.url).href,
  radarMapa: new URL('../../deck/radar-mapa.png', import.meta.url).href,
  boticarioAnalise: new URL('../../deck/boticario_analise.png', import.meta.url).href,
  boticarioRecorte: new URL('../../deck/boticario_recorte.png', import.meta.url).href,
  boticarioHistorico: new URL('../../deck/boticario_historico.png', import.meta.url).href,
};

const casesByLang = {
  pt: [
    {
      id: 'penalty',
      category: 'Strategy & Growth',
      title: 'Penalty + M+C Saatchi Group',
      partner: 'Parceiro estratégico',
      brief: 'Como uma marca esportiva descobre onde ela realmente vive na cultura e onde pode crescer.',
      body: [
        'Cruzamos social listening, busca e comportamento digital para ler a Penalty além dos seus próprios canais. O que as pessoas diziam, com qual linguagem, em quais contextos.',
        'Emergiu um mapa de afinidades e tensões: territórios culturais com tração real, oportunidades de conexão ainda inexploradas, e a distância entre como a marca se via e como era percebida.',
        'O diagnóstico virou direcionamento para posicionamento, conteúdo e expansão de relevância.',
      ],
      proof: { title: 'Leitura cultural aplicada', text: 'Sinais públicos convertidos em territórios de posicionamento.' },
      images: [
        { src: images.penaltyTerminologia, alt: 'Penalty: Terminologia' },
        { src: images.penaltyEngajamento, alt: 'Penalty: Engajamento' },
        { src: images.penaltyHumores, alt: 'Penalty: Humores' },
        { src: images.penaltyAfinidade, alt: 'Penalty: Afinidade' },
      ],
    },
    {
      id: 'atmmos',
      category: 'Data Insights & Intelligence',
      title: 'Radar ATMMOS',
      partner: 'Parceiro estratégico',
      brief: 'Primeira pesquisa de social listening sobre o comportamento dos brasileiros em relação ao Desmatamento.',
      reversed: true,
      body: [
        'O estudo, patrocinado pela greentech Atmmos, utilizou inteligência de dados para mapear o cenário socioambiental nas redes.',
        'O impacto gerou forte tração de Thought Leadership e Data PR, sendo apresentado no Rio Innovation Week 2024 e pautando a imprensa com matéria exclusiva no Portal iG.',
      ],
      proof: { title: 'Social listening como pauta', text: 'Pesquisa, PR e liderança de pensamento numa mesma arquitetura.' },
      images: [
        { src: images.radarMencoes, alt: 'Radar ATMMOS: Menções' },
        { src: images.radarBuscas, alt: 'Radar ATMMOS: Buscas' },
        { src: images.radarDimensionamento, alt: 'Radar ATMMOS: Dimensionamento' },
        { src: images.radarMapa, alt: 'Radar ATMMOS: Mapa' },
      ],
    },
    {
      id: 'boticario',
      category: 'Product Development',
      title: 'O Boticário + ALMAPBBDO',
      partner: 'Parceiro estratégico',
      brief: 'Plataforma proprietária de planejamento de mídia OOH. Do dado bruto à decisão visual, em tempo real.',
      layout: 'layout-3',
      body: [
        'Construímos do zero uma ferramenta end-to-end para planejamento de mídia out-of-home: integração via BigQuery, filtros dinâmicos, alocação otimizada por budget e scoring de eficiência.',
        'A interface combina dashboards analíticos, mapas interativos e versionamento de planos, tornando decisões de mídia visualmente auditáveis e estrategicamente fundamentadas.',
      ],
      proof: { title: 'Inteligência operacionalizada', text: 'Planejamento, scoring e auditoria visual no fluxo de decisão.' },
      images: [
        { src: images.boticarioAnalise, alt: 'O Boticário: Análise' },
        { src: images.boticarioRecorte, alt: 'O Boticário: Recorte' },
        { src: images.boticarioHistorico, alt: 'O Boticário: Histórico' },
      ],
    },
  ],
  en: [
    {
      id: 'penalty',
      category: 'Strategy & Growth',
      title: 'Penalty + M+C Saatchi Group',
      partner: 'Strategic partner',
      brief: 'How a sports brand discovers where it truly lives in culture and where it can grow.',
      body: [
        'We combined social listening, search, and digital behavior to read Penalty beyond its own channels: what people were saying, in which language, and in what contexts.',
        'An affinity and tension map emerged: cultural territories with real traction, unexplored connection opportunities, and the gap between brand self-perception and external perception.',
        'The diagnosis became direction for positioning, content, and relevance expansion.',
      ],
      proof: { title: 'Applied cultural reading', text: 'Public signals converted into positioning territories.' },
      images: [
        { src: images.penaltyTerminologia, alt: 'Penalty: Terminology' },
        { src: images.penaltyEngajamento, alt: 'Penalty: Engagement' },
        { src: images.penaltyHumores, alt: 'Penalty: Sentiment' },
        { src: images.penaltyAfinidade, alt: 'Penalty: Affinity' },
      ],
    },
    {
      id: 'atmmos',
      category: 'Data Insights & Intelligence',
      title: 'ATMMOS Radar',
      partner: 'Strategic partner',
      brief: 'First social listening study on Brazilian behavior regarding deforestation.',
      reversed: true,
      body: [
        'The study, sponsored by greentech Atmmos, used data intelligence to map the socio-environmental landscape on social networks.',
        'The impact generated strong traction in thought leadership and data PR, presented at Rio Innovation Week 2024 and covered by the press with an exclusive story on Portal iG.',
      ],
      proof: { title: 'Social listening as agenda', text: 'Research, PR, and thought leadership in one architecture.' },
      images: [
        { src: images.radarMencoes, alt: 'ATMMOS Radar: Mentions' },
        { src: images.radarBuscas, alt: 'ATMMOS Radar: Searches' },
        { src: images.radarDimensionamento, alt: 'ATMMOS Radar: Sizing' },
        { src: images.radarMapa, alt: 'ATMMOS Radar: Map' },
      ],
    },
    {
      id: 'boticario',
      category: 'Product Development',
      title: 'O Boticario + ALMAPBBDO',
      partner: 'Strategic partner',
      brief: 'Proprietary OOH media planning platform, from raw data to visual decision in real time.',
      layout: 'layout-3',
      body: [
        'We built an end-to-end out-of-home media planning tool from scratch: BigQuery integration, dynamic filters, budget-optimized allocation, and efficiency scoring.',
        'The interface combines analytical dashboards, interactive maps, and plan versioning, making media decisions visually auditable and strategically grounded.',
      ],
      proof: { title: 'Operationalized intelligence', text: 'Planning, scoring, and visual audit in the decision flow.' },
      images: [
        { src: images.boticarioAnalise, alt: 'O Boticario: Analysis' },
        { src: images.boticarioRecorte, alt: 'O Boticario: Segment' },
        { src: images.boticarioHistorico, alt: 'O Boticario: History' },
      ],
    },
  ],
};

export function getCases(lang) {
  return lang === 'en' ? casesByLang.en : casesByLang.pt;
}
