export const partners = [
  'FGV',
  'O Boticário',
  'Flamengo F.C.',
  'OLX',
  'Carvalho Hosken',
  'M+C Saatchi Group',
  'ALMAPBBDO',
  'digiteam',
  'AMEC',
  'ConsumoTeca',
  'Sport Locker',
];

const certificationsByLang = {
  pt: [
    { id: 'institute12', label: 'Membros do Instituto 12 (RJ)' },
    { id: 'googleAnalytics', label: 'Google Analytics Certified' },
    { id: 'googleLooker', label: 'Google Looker Studio Certified' },
  ],
  en: [
    { id: 'institute12', label: 'Institute 12 (RJ) members' },
    { id: 'googleAnalytics', label: 'Google Analytics Certified' },
    { id: 'googleLooker', label: 'Google Looker Studio Certified' },
  ],
};

export function getCertifications(lang) {
  return lang === 'en' ? certificationsByLang.en : certificationsByLang.pt;
}
