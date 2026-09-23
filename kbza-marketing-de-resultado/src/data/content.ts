export const WHATSAPP_NUMBER = '5519993485532'
export const WHATSAPP_DISPLAY = '(19) 99348-5532'
export const WHATSAPP_PREFILL =
  'Olá! Vim pelo site da Kbza e quero saber mais sobre captação de alunos.'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_PREFILL)}`

export const EMAIL = 'junior@kbza.com.br'
export const INSTAGRAM_URL = 'https://instagram.com/kbzamkt'
export const SITE_URL = 'https://www.kbza.com.br/'

export const segments = [
  'Escolas de idiomas',
  'Cursos técnicos',
  'Ensino regular',
  'Ensino superior',
  'Pós-graduações',
]

export type Benefit = {
  title: string
  text: string
}

export const benefits: Benefit[] = [
  {
    title: 'Funil integrado e eficaz',
    text: 'Gestão integrada do marketing e comercial, com possibilidade de diminuir o custo por matrícula em até 40%.',
  },
  {
    title: 'Gargalos à vista',
    text: 'Identificamos onde o funil trava — da visibilidade à matrícula — e agimos no ponto exato.',
  },
  {
    title: 'Equipe capacitada',
    text: 'Treinamos seu time comercial para converter mais, com processo e acompanhamento.',
  },
  {
    title: 'Follow-up com IA',
    text: 'Avaliação diária de leads e conversões, com IA no follow-up para não perder nenhuma matrícula.',
  },
]

export const steps = [
  {
    step: '01',
    title: 'Diagnóstico',
    text: 'Identificamos a imagem da sua instituição no mercado e o grau de visibilidade.',
  },
  {
    step: '02',
    title: 'Jornada do matriculado',
    text: 'Melhoramos os pontos fracos e montamos a jornada completa até a matrícula.',
  },
  {
    step: '03',
    title: 'Otimização com IA',
    text: 'Acompanhamento diário de leads e conversões, com IA no follow-up e na otimização.',
  },
  {
    step: '04',
    title: 'Salas cheias',
    text: 'O resultado: mais matrículas, custo menor e instituição forte.',
  },
]

export type FaqItem = { question: string; answer: string }

export const faqs: FaqItem[] = [
  {
    question: 'Para quais instituições a Kbza trabalha?',
    answer:
      'Escolas de idiomas, cursos técnicos, ensino regular, instituições de ensino superior e pós-graduações. Se sua receita depende de matrículas, o funil se aplica.',
  },
  {
    question: 'Como funciona o funil de matrículas?',
    answer:
      'Diagnosticamos imagem e visibilidade, montamos a jornada do matriculado, geramos leads e otimizamos diariamente a conversão — do primeiro clique à matrícula assinada.',
  },
  {
    question: 'É verdade que o custo por matrícula pode cair 40%?',
    answer:
      'É a possibilidade que a gestão integrada abre: ao identificar gargalos e capacitar a equipe, o custo por matrícula pode diminuir em até 40%. Cada caso é avaliado no diagnóstico.',
  },
  {
    question: 'Vocês usam IA mesmo ou é discurso?',
    answer:
      'Usamos de verdade: avaliação diária de geração de leads e conversão, IA no follow-up e na identificação de pontos de otimização do funil.',
  },
  {
    question: 'Como começo?',
    answer:
      'Chame no WhatsApp ou preencha o formulário — montamos a conversa a partir da realidade da sua instituição, sem compromisso.',
  },
]
