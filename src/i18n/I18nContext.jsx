import { createContext, useContext, useMemo, useState } from 'react';

const I18nContext = createContext(null);

const STORAGE_KEY = 'wm_lang';

const baseTranslations = {
  pt: {
    nav: { home: 'Home', about: 'Sobre', portfolio: 'Portfolio', contact: 'Contato', aria: 'Navegação principal' },
    footer: {
      ready: 'Pronto para começar?',
      talk: 'Fale com a gente',
      seePortfolio: 'Ver portfolio',
      sitemap: 'Mapa do site',
      services: 'Serviços',
      work: 'Trabalhos',
      company: 'Empresa',
      team: 'Equipe',
      ecosystem: 'Ecossistema',
      vision: 'Nossa visão',
      contact: 'Contato',
      contactPage: 'Página de contato',
      rights: 'Todos os direitos reservados.',
      socials: 'Redes sociais',
      privacy: 'Política de Privacidade',
      terms: 'Termos de Uso',
      methodology: 'Metodologia',
    },
    lightbox: {
      title: 'Visualização de imagem',
      close: 'Fechar',
      prev: 'Anterior',
      next: 'Próximo',
      zoom: 'Ampliar',
    },
    common: { strategyPartner: 'Parceiro estratégico' },
    home: {
      eyebrow: 'Estratégia · Dados · Produto',
      sub: 'Transformamos dados, comportamento e sinais de mercado através de Inteligência Artificial, gerando direção estratégica e produtos digitais que operam por você.',
      seeCases: 'Ver cases',
      talk: 'Fale conosco',
      problemEyebrow: 'O problema',
      problemSubtitle: 'Densidade é permitida. Ruído, não.',
      problemTitle1: 'Dados não faltam.',
      problemTitle2: 'Direção, sim.',
      bullets: [
        'Dado sem leitura é ruído',
        'Informação sem contexto não decide',
        'Repertório é o que transforma análise em ação',
      ],
      problemRightTitle: 'O gargalo é de interpretação, não de volume.',
      problemRightBody: 'Empresas acumulam dados mas travam na hora de agir. O que falta é a capacidade de articular fontes e processar em escala. Com inteligência artificial, convertemos complexidade em direção estratégica. A Wisemetrics existe nesse espaço, onde Machine Learning encontra perspicácia, e código encontra narrativa.',
      actionEyebrow: 'Atuação',
      actionTitle: 'Três frentes. Uma lógica.',
      portfolioEyebrow: 'Portfolio',
      portfolioTitle: 'A metodologia em prática.',
      portfolioIntro: 'Uma amostra dos projetos em que estratégia, dados e produto aparecem como uma mesma disciplina.',
      fullPortfolio: 'Ver portfolio completo',
    },
    about: {
      eyebrow: 'Sobre',
      title: 'Inteligência aplicada para decisões.',
      intro: 'A Wisemetrics atua no encontro entre estratégia, inteligência artificial e produto. Nosso papel é transformar grandes volumes de dados não-estruturados em sinais claros através de NLP, convertendo leitura em direção e direção em sistemas autônomos.',
      statement: 'Construímos a lógica que faz uma organização enxergar melhor.',
      p1: 'Trabalhamos com marcas e organizações que já têm dados, equipes e pressão por resposta. O desafio costuma estar na interpretação: saber quais sinais importam, o que eles revelam e como transformar isso em movimento.',
      p2: 'Por isso combinamos repertório estratégico, Machine Learning e desenvolvimento de produto guiado por I.A. A entrega pode ser um diagnóstico usando LLMs, uma plataforma proprietária ou uma arquitetura de Agentes Autônomos.',
      teamEyebrow: 'Equipe',
      teamTitle1: 'As pessoas por trás',
      teamTitle2: 'da inteligência.',
    },
    portfolio: {
      eyebrow: 'Portfolio',
      title: 'Projetos onde método vira decisão, narrativa e produto.',
      intro: 'Cases selecionados que mostram a metodologia Wisemetrics em estratégia de marca, inteligência de dados e desenvolvimento de plataformas.',
      cases: 'Cases',
      subtitle: 'A metodologia em prática.',
    },
    contact: {
      eyebrow: 'Contato',
      title: 'Vamos transformar dados em direção.',
      intro: 'Conte um pouco sobre o desafio. A conversa começa pelo problema de negócio, não pela ferramenta.',
      ctaEyebrow: 'Vamos conversar',
      ctaTitle1: 'Transformamos dados',
      ctaTitle2: 'em direção.',
      ctaSub: 'Transformamos dados, sinais de mercado e percepção em posicionamento e crescimento institucional.',
      talk: 'Fale com a gente',
      seePortfolio: 'Ver portfolio',
      privacyLabel: 'Política de privacidade.',
      privacyBody: 'Solicitações relacionadas à LGPD e ao tratamento de dados:',
      termsLabel: 'Termos de uso.',
      termsBody: 'Projetos e entregas são regidos por contratos específicos com cada cliente. Dúvidas gerais pelo mesmo e-mail.',
    },
    methodology: {
      eyebrow: 'Como trabalhamos',
      title: 'Um processo que conecta as pontas.',
      subtitle: 'Cada frente tem seu conjunto de ferramentas, mas elas conversam entre si, adaptadas ao momento de cada cliente.',
      groupLabel: 'Etapas da metodologia',
    },
    partners: {
      section: 'Parceiros',
      eyebrow: 'Ecossistema',
      title1: 'Quem confia na',
      title2: 'Wisemetrics.',
      brands: 'Marcas & instituições',
      credentials: 'Credenciais',
    },
  },
  en: {
    nav: { home: 'Home', about: 'About', portfolio: 'Portfolio', contact: 'Contact', aria: 'Main navigation' },
    footer: {
      ready: 'Ready to get started?',
      talk: "Let's talk",
      seePortfolio: 'See portfolio',
      sitemap: 'Site map',
      services: 'Services',
      work: 'Work',
      company: 'Company',
      team: 'Team',
      ecosystem: 'Ecosystem',
      vision: 'Our vision',
      contact: 'Contact',
      contactPage: 'Contact page',
      rights: 'All rights reserved.',
      socials: 'Social media',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
      methodology: 'Methodology',
    },
    lightbox: {
      title: 'Image viewer',
      close: 'Close',
      prev: 'Previous',
      next: 'Next',
      zoom: 'Zoom',
    },
    common: { strategyPartner: 'Strategic partner' },
    home: {
      eyebrow: 'Strategy · Data · Product',
      sub: 'We turn data, behavior, and market signals into strategic direction and digital products powered by Artificial Intelligence.',
      seeCases: 'See cases',
      talk: 'Talk to us',
      problemEyebrow: 'The problem',
      problemSubtitle: 'Density is welcome. Noise is not.',
      problemTitle1: "Data isn't missing.",
      problemTitle2: 'Direction is.',
      bullets: [
        'Data without interpretation is noise',
        'Information without context does not drive decisions',
        'Strategic repertoire turns analysis into action',
      ],
      problemRightTitle: 'The bottleneck is interpretation, not volume.',
      problemRightBody: 'Companies accumulate data but get stuck when it is time to act. What is missing is the ability to connect sources and process at scale. With artificial intelligence, we turn complexity into strategic direction. Wisemetrics lives in this space, where Machine Learning meets sharp perspective, and code meets narrative.',
      actionEyebrow: 'Capabilities',
      actionTitle: 'Three fronts. One logic.',
      portfolioEyebrow: 'Portfolio',
      portfolioTitle: 'Methodology in practice.',
      portfolioIntro: 'A sample of projects where strategy, data, and product work as one discipline.',
      fullPortfolio: 'See full portfolio',
    },
    about: {
      eyebrow: 'About',
      title: 'Applied intelligence for decisions.',
      intro: 'Wisemetrics operates at the intersection of strategy, artificial intelligence, and product. Our role is to transform large volumes of unstructured data into clear signals through NLP, turning interpretation into direction and direction into autonomous systems.',
      statement: 'We build the logic that helps organizations see more clearly.',
      p1: 'We work with brands and organizations that already have data, teams, and pressure for results. The challenge is usually interpretation: knowing which signals matter, what they reveal, and how to turn that into movement.',
      p2: 'That is why we combine strategic repertoire, Machine Learning, and AI-driven product development. The delivery can be an LLM-based diagnosis, a proprietary platform, or an autonomous agent architecture.',
      teamEyebrow: 'Team',
      teamTitle1: 'The people behind',
      teamTitle2: 'the intelligence.',
    },
    portfolio: {
      eyebrow: 'Portfolio',
      title: 'Projects where method becomes decision, narrative, and product.',
      intro: 'Selected cases that show Wisemetrics methodology across brand strategy, data intelligence, and platform development.',
      cases: 'Cases',
      subtitle: 'Methodology in practice.',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Let us turn data into direction.',
      intro: 'Tell us a bit about your challenge. The conversation starts from the business problem, not the tool.',
      ctaEyebrow: "Let's talk",
      ctaTitle1: 'We turn data',
      ctaTitle2: 'into direction.',
      ctaSub: 'We transform data, market signals, and perception into positioning and institutional growth.',
      talk: "Let's talk",
      seePortfolio: 'See portfolio',
      privacyLabel: 'Privacy policy.',
      privacyBody: 'Requests related to data protection and processing:',
      termsLabel: 'Terms of use.',
      termsBody: 'Projects and deliverables are governed by specific contracts with each client. General questions can be sent to the same email.',
    },
    methodology: {
      eyebrow: 'How we work',
      title: 'A process that connects the dots.',
      subtitle: 'Each front has its own toolset, but they work together and adapt to each client moment.',
      groupLabel: 'Methodology steps',
    },
    partners: {
      section: 'Partners',
      eyebrow: 'Ecosystem',
      title1: 'Who trusts',
      title2: 'Wisemetrics.',
      brands: 'Brands & institutions',
      credentials: 'Credentials',
    },
  },
};

const pathByLang = {
  pt: { about: '/sobre', contact: '/contato' },
  en: { about: '/about', contact: '/contact' },
};

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved === 'en' ? 'en' : 'pt';
  });

  const value = useMemo(() => {
    const t = baseTranslations[lang];
    return {
      lang,
      setLang: (nextLang) => {
        const safeLang = nextLang === 'en' ? 'en' : 'pt';
        window.localStorage.setItem(STORAGE_KEY, safeLang);
        setLang(safeLang);
      },
      t,
      paths: {
        home: '/',
        portfolio: '/portfolio',
        about: pathByLang[lang].about,
        contact: pathByLang[lang].contact,
      },
    };
  }, [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}
