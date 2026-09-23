export const WHATSAPP_NUMBER = '5537991502654'
export const WHATSAPP_PREFILL =
  'Aboru Aboye oo! Vim do IG do Bàbáláwo Ifakorede e gostaria de agendar um jogo.'
export const WHATSAPP_URL = `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(WHATSAPP_PREFILL)}`

export const INSTAGRAM_URL = 'https://www.instagram.com/obabalawoifakorede/'
export const TEMPLE_INSTAGRAM_URL = 'https://www.instagram.com/ijoifadola/'
export const OLUWO_INSTAGRAM_URL = 'https://www.instagram.com/ile_ase_ifatokun/'
export const PHOTOGRAPHER_INSTAGRAM_URL =
  'https://www.instagram.com/leticiacsalviano/'

export type Service = {
  id: string
  title: string
  short: string
  description: string
  bullets: string[]
  highlight?: boolean
}

export const services: Service[] = [
  {
    id: 'consulta',
    title: 'Jogo / Consulta de Ifá',
    short: 'O Odù fala. Você escuta e caminha.',
    description:
      'Leitura completa com òpẹ̀lẹ̀ / ikin: o Odù do momento, orientações francas e prescrições. Online ou presencial, sem medo e sem sensacionalismo.',
    bullets: [
      'Direcionamento para amor, trabalho, saúde e caminho',
      'Prescrição de ẹbọ quando o Odù indicar',
      'Linguagem clara, sigilo absoluto',
    ],
    highlight: true,
  },
  {
    id: 'ebo',
    title: 'Orientação & Ẹbọ',
    short: 'Faz-se o ebó, não se faz barganha.',
    description:
      'Acompanhamento espiritual e realização de ẹbọ conforme o Odù — ritualística autêntica Ìṣẹ̀ṣe, com fundamento e medida.',
    bullets: [
      'Ẹbọ prescrito conforme o Odù',
      'Ritualística autêntica da Ìṣẹ̀ṣe',
      'Acompanhamento após a consulta',
    ],
  },
  {
    id: 'ensino',
    title: 'Ensino da Tradição',
    short: 'Conhecimento com caráter.',
    description:
      'Transmissão do corpus literário de Ifá e da Ìṣẹ̀ṣe — do básico ao compromisso iniciático (Ìṣẹ̀fà / Itefá), com profundidade e acessibilidade.',
    bullets: [
      'Ensinamentos dos Odùs de Ifá',
      'Fundamento de Ìwà Pẹ̀lẹ́',
      'Linhagem Ọ̀ffẹ́ Òrúnmìlà',
    ],
  },
]

export const pillars = [
  {
    title: 'Ifá',
    text: 'Sabedoria revelada nos Odùs — histórias e versos que orientam a vida prática.',
  },
  {
    title: 'Ẹbọ',
    text: 'Prescrição, não negociação. O equilíbrio se faz com fundamento.',
  },
  {
    title: 'Ìwà Pẹ̀lẹ́',
    text: 'O bom caráter acima de qualquer ritual. Culto sem caráter é só encenação.',
  },
]

export const teachings = [
  'Faz-se o ebó, não se faz barganha.',
  'Ìwà Pẹ̀lẹ́ é o guia da vida.',
  'Culto sem caráter é só encenação.',
]

export const processSteps = [
  {
    step: '01',
    title: 'Chame no WhatsApp',
    text: 'A mensagem já vai pronta. Cumprimente com “Aboru Aboye oo!” e diga o que busca.',
  },
  {
    step: '02',
    title: 'Escolha dia e formato',
    text: 'Online por videochamada ou presencial no Ìjọ Ifádọlá, em Minas Gerais.',
  },
  {
    step: '03',
    title: 'O jogo de Ifá',
    text: 'Leitura do Odù, conversa franca e prescrições: ẹbọ, atitudes, cuidados.',
  },
  {
    step: '04',
    title: 'Caminho e acompanhamento',
    text: 'Você sai com direção clara — e pode seguir com orientação e ensino.',
  },
]

export type FaqItem = { question: string; answer: string }

export const faqs: FaqItem[] = [
  {
    question: 'O que é o “jogo” / consulta de Ifá?',
    answer:
      'É a leitura oracular com òpẹ̀lẹ̀ ou ikin, que revela o Odù regente do momento e traz orientação + prescrições (ẹbọ, comportamentos, cuidados). Não é adivinhação genérica: é escuta, verso e caminho.',
  },
  {
    question: 'Preciso ser iniciado para consultar?',
    answer:
      'Não. A consulta é aberta a qualquer pessoa que busque orientação. Iniciações (Ìṣẹ̀fà / Itefá) são um passo posterior, avaliado com calma e fundamento.',
  },
  {
    question: 'O atendimento é online?',
    answer:
      'Sim — online por videochamada e presencial no Ìjọ Ifádọlá (Minas Gerais). Chame no WhatsApp e combine o melhor formato.',
  },
  {
    question: 'O que é ẹbọ?',
    answer:
      'É a oferenda / ação prescrita pelo Odù para equilibrar, limpar e abrir caminho. Como diz o Bàbáláwo: faz-se o ẹbọ, não se faz barganha.',
  },
  {
    question: 'A consulta é sigilosa?',
    answer:
      'Sim. O que Ifá revela e o que se fala no jogo permanece entre você, o Bàbáláwo e o oráculo. Sigilo é princípio, não detalhe.',
  },
]

export const lineage = {
  priest: 'Bàbáláwo Ifákọ́rẹ̀dé',
  civilName: 'Rafael',
  temple: 'Ìjọ Ifádọlá — Família Ọ̀ffẹ́ Òrúnmìlà',
  tradition: 'Ìṣẹ̀ṣe Lágba · CTY',
  location: 'Minas Gerais, Brasil · conexão Nigéria',
  masters: [
    { role: 'Oluwo', name: 'Ifátokun', url: OLUWO_INSTAGRAM_URL },
    { role: 'Iyanifá', name: 'Ifádará' },
  ],
}

export const aboutParagraphs = [
  'Bàbáláwo Ifákọ́rẹ̀dé — Rafael — é sacerdote de Ifá da tradição Ìṣẹ̀ṣe. Filho espiritual do Oluwo Ifátokun e da Iyanifá Ifádará, da linhagem Ọ̀ffẹ́ Òrúnmìlà.',
  'No Ìjọ Ifádọlá, em Minas Gerais, o trabalho une o corpus literário de Ifá, a ritualística autêntica e uma ênfase constante: Ìwà Pẹ̀lẹ́ — o bom caráter — acima de qualquer encenação.',
  'Consultas, ẹbọ e ensino caminham juntos. Sem magia rápida. Sem barganha. Com tradição, leveza quando cabe, e o cumprimento que abre o caminho: Aboru Aboye oo.',
]
