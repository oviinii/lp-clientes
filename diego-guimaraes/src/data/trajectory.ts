export type TimelineItem = {
  year: string
  title: string
  text: string
}

export const trajectory: TimelineItem[] = [
  {
    year: 'Origem',
    title: 'Filho de casa de santo',
    text: 'Nasci em família candomblecista. Pai e mãe iniciados para Orixá. Meu pai carnal era Ògún no Candomblé.',
  },
  {
    year: 'Ruptura',
    title: 'O afastamento',
    text: 'Com a passagem dos pais, me afastei do culto. Vieram tempos difíceis — materiais, de saúde, de sentido.',
  },
  {
    year: 'Retorno',
    title: 'O reencontro',
    text: 'O caminho voltou pelas mãos do meu padrinho (iniciado para Osun por Waldomiro Baiano) e de uma iyá Nanga de Oyá.',
  },
  {
    year: '2018',
    title: 'Iniciação em Òyó',
    text: 'Atravessei o oceano para ser iniciado na Nigéria, no culto familiar tradicional de Ògún — a família que atende o Ògún do Alaafin.',
  },
  {
    year: 'Hoje',
    title: 'Ògúnrogba',
    text: 'Recebi o nome iniciático Ode Ògúnrogba. Cultuo Ògún, Osoosi, Egbe Orun e os Egungun com minha esposa e meus filhos.',
  },
]

export type Pillar = {
  id: string
  title: string
  text: string
}

export const pillars: Pillar[] = [
  {
    id: 'familia',
    title: 'Culto familiar de Òyó',
    text: 'Não é Candomblé genérico, não é Ifá. É a tradição preservada na Nigéria, na linhagem que serve ao Ògún do Alaafin.',
  },
  {
    id: 'obi',
    title: 'Só Obi',
    text: 'Obi é a boca do Orixá. Não uso Odu, não uso Ifá como caminho principal. O oráculo é o que a minha tradição me deu.',
  },
  {
    id: 'direto',
    title: 'Sem enrolação',
    text: 'A tradição é séria e profunda. Não precisa de discurso inflado nem de promessa fácil. Falo o que precisa ser falado.',
  },
  {
    id: 'legitimo',
    title: 'Iniciação real',
    text: 'Fui iniciado em 2018 na Nigéria, em Egbe Orun. A legitimidade vem da casa que me recebeu, não do marketing.',
  },
]
