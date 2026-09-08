export type Service = {
  id: string
  title: string
  short: string
  description: string
  icon: 'obi' | 'ewe' | 'egungun' | 'family' | 'mentor' | 'festival'
  highlight?: boolean
}

export const services: Service[] = [
  {
    id: 'obi',
    title: 'Consultas com o Obi',
    short: 'Obi é a boca do Orixá.',
    description:
      'Orientação direta por meio do Obi, sem Ifá, sem rodeios. Cada consulta é conduzida com o rigor do culto familiar de Òyó e o cuidado que a fala do Orixá exige.',
    icon: 'obi',
    highlight: true,
  },
  {
    id: 'ogun',
    title: 'Culto de Ògún em Òyó',
    short: 'Caminho legítimo, sem adaptações.',
    description:
      'Acompanhamento para quem busca viver Ògún dentro da tradição familiar nigeriana, com transmissão das rezas, oferendas e fundamentos que recebi na iniciação.',
    icon: 'ewe',
  },
  {
    id: 'egungun',
    title: 'Culto ancestral Egungun',
    short: 'Os ancestrais não se esquecem.',
    description:
      'Orientação sobre o culto aos Egungun — vínculo com a linhagem, responsabilidade com os que vieram antes e a manutenção da memória viva da família.',
    icon: 'egungun',
  },
  {
    id: 'family',
    title: 'Culto familiar',
    short: 'Ògún em casa, com a família.',
    description:
      'Como cultivar Ògún junto com a esposa e os filhos, mantendo o axé do lar dentro do que a tradição de Òyó permite e recomenda.',
    icon: 'family',
  },
  {
    id: 'mentor',
    title: 'Mentoria espiritual',
    short: 'Caminhada de perto.',
    description:
      'Acompanhamento contínuo para iniciados e frequentadores que precisam de orientação firme, sem dogmas vazios nem promessas fáceis.',
    icon: 'mentor',
  },
  {
    id: 'festival',
    title: 'Festival de Esu',
    short: 'A boca do mundo precisa ser honrada.',
    description:
      'Produção e presença em eventos ligados a Esu/Exu, abrindo caminho para o público e para a tradição com respeito e celebração.',
    icon: 'festival',
  },
]
