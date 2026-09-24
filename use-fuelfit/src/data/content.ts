export const INSTAGRAM_URL = 'https://www.instagram.com/usefuelfit/'
export const INSTAGRAM_HANDLE = '@usefuelfit'

export const MANTRAS = [
  'Performance, conforto e estilo em cada detalhe',
  'Elegância que acompanha cada movimento',
  'A rotina inspira. O movimento transforma',
  'Vista-se com conforto e personalidade',
  'O básico NADA básico',
]

export type Collection = {
  tag: string
  title: string
  description: string
  items: string[]
}

export const COLLECTIONS: Collection[] = [
  {
    tag: 'Coleção em destaque',
    title: 'Mocha Collection',
    description:
      'Tons quentes — marrom, café, bege e terrosos — inspirados na elegância de quem se move com confiança. A coleção mais desejada da Fuel Fit.',
    items: [
      'Paleta café & terrosos',
      'Conjuntos coordenados',
      'Leggings, tops e essenciais',
      'Do treino ao dia a dia',
    ],
  },
  {
    tag: 'Essenciais',
    title: 'All Black + Oversized',
    description:
      'Looks all black, camisetas oversized e conjuntos coordenados: o uniforme de quem leva o treino — e o estilo — a sério.',
    items: [
      'Looks all black',
      'Peças oversized',
      'Conjuntos coordenados',
      'Alta qualidade visual',
    ],
  },
]

export const REASONS = [
  {
    title: 'Conforto + Performance',
    description:
      'Modelagem que acompanha o corpo em cada movimento — do agachamento à corrida, sem ajustar a roupa.',
  },
  {
    title: 'Elegância Real',
    description:
      'Não é “roupa de malhar”: é design sofisticado, com detalhes que valorizam o corpo e o movimento.',
  },
  {
    title: 'Treino + Dia a Dia',
    description:
      'Peças versáteis no espírito athleisure — funcionam na academia, no funcional, no yoga e na rotina.',
  },
  {
    title: 'Desejo à Primeira Vista',
    description:
      'As peças vendem pelo visual: fotografia limpa, caimento impecável e coleções que esgotam.',
  },
]

export type Look = {
  src: string
  label: string
  alt: string
}

export const LOOKS: Look[] = [
  {
    src: '/images/look-1.jpg',
    label: 'Mocha Set Completo',
    alt: 'Modelo treinando com conjunto fitness terroso — Fuel Fit',
  },
  {
    src: '/images/look-2.jpg',
    label: 'Yoga Bege',
    alt: 'Prática de yoga com look claro — Fuel Fit',
  },
  {
    src: '/images/look-3.jpg',
    label: 'Flow ao Pôr do Sol',
    alt: 'Treino ao ar livre com peça versátil — Fuel Fit',
  },
  {
    src: '/images/look-4.jpg',
    label: 'Look Corrida',
    alt: 'Corrida com conjunto de performance — Fuel Fit',
  },
  {
    src: '/images/look-5.jpg',
    label: 'Essencial Academia',
    alt: 'Treino de força com legging e top — Fuel Fit',
  },
  {
    src: '/images/look-6.jpg',
    label: 'Energia Total',
    alt: 'Treino intenso com look all black — Fuel Fit',
  },
]

export const PRAISE = [
  { quote: 'Amei! Quero todos 😍', author: 'Comentário no Instagram' },
  { quote: 'Lindo! Oi, qual o valor? 🔥', author: 'Comentário no Instagram' },
  { quote: 'Apaixonada por essa coleção ❤️', author: 'Comentário no Instagram' },
]

export const STEPS = [
  {
    title: '1 · Escolha no Instagram',
    description:
      'Veja os drops, coleções e disponibilidade em @usefuelfit — reels, carrosséis e stories.',
  },
  {
    title: '2 · Chame no Direct',
    description:
      'Confirme tamanho, cor, valor, frete e prazo de entrega direto com a marca.',
  },
  {
    title: '3 · Receba e treine',
    description:
      'Peça a caminho, suporte no pós-venda e elegância garantida em cada movimento.',
  },
]

export const FAQ = [
  {
    q: 'Como compro as peças?',
    a: 'Hoje a venda acontece pelo Instagram em @usefuelfit: escolha o look nos posts e finalize pelo Direct. Assim que a loja online ou o WhatsApp comercial estiverem ativos, atualizamos aqui.',
  },
  {
    q: 'Qual o valor das peças?',
    a: 'Os valores variam por peça e coleção — a pergunta mais feita nos comentários! Chame no Direct da @usefuelfit com o print do look para receber preço e disponibilidade.',
  },
  {
    q: 'Como sei meu tamanho?',
    a: 'O guia oficial de medidas ainda será publicado pela marca. Enquanto isso, envie suas medidas no Direct e receba a indicação do tamanho ideal para cada modelagem.',
  },
  {
    q: 'Quais tecidos vocês usam?',
    a: 'Os diferenciais técnicos (compressão, zero transparência, secagem rápida) serão detalhados com a marca. O que as clientes já confirmam: caimento impecável e conforto o dia todo.',
  },
  {
    q: 'Fazem troca e devolução?',
    a: 'A política oficial de frete, troca e devolução será publicada em breve. Fale no Direct antes de comprar para alinhar troca de tamanho e condições.',
  },
]
