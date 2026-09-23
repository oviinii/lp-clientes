export const PHONE_DISPLAY = '(12) 3108-1856'
export const PHONE_HREF = 'tel:+551231081856'

export const INSTAGRAM_URL = 'https://www.instagram.com/nonachurrascaria'

export const ADDRESS = {
  street: 'Travessa Luiz Butignon, 84',
  district: 'Bairro Santa Luzia',
  city: 'Aparecida — SP',
  cep: 'CEP 12570-000',
  reference: 'Rodovia Presidente Dutra (BR-116), KM 71 · sentido Rio de Janeiro',
}

const MAPS_QUERY = 'Restaurante e Churrascaria da Nonna, Aparecida SP'

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  MAPS_QUERY,
)}&output=embed`

export const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  MAPS_QUERY,
)}`

export const WAZE_URL = `https://waze.com/ul?q=${encodeURIComponent(MAPS_QUERY)}`

export const HOURS = [
  { days: 'Segunda a Sexta', time: '06:00 – 22:00' },
  { days: 'Sábado', time: '07:00 – 15:00' },
  { days: 'Domingo', time: '07:00 – 22:00' },
]

export type Dish = {
  title: string
  description: string
  items: string[]
}

export const MENU: Dish[] = [
  {
    title: 'Self-Service',
    description:
      'Buffet farto de comida de verdade, com variedade todos os dias — o queridinho de quem para na Dutra.',
    items: ['Arroz e feijão de verdade', 'Massas e guarnições', 'Saladas frescas', 'Sobremesas caseiras'],
  },
  {
    title: 'Por Quilo',
    description:
      'Monte seu prato do seu jeito e pague pelo que comer. Ideal para a parada rápida na estrada.',
    items: ['Pese o que comer', 'Sem desperdício', 'Preço justo', 'Rápido e prático'],
  },
  {
    title: 'Churrasco',
    description:
      'Carnes no ponto, saindo da churrasqueira. Consulte a disponibilidade do dia — a casa passa por melhorias na churrasqueira.',
    items: ['Cortes selecionados', 'No ponto que você gosta', 'Acompanhamentos', 'Farofa da casa'],
  },
  {
    title: 'Café da Madrugada',
    description:
      'Amigo da estrada de madrugada? Aqui tem café passado, pão na chapa e lanche para seguir viagem.',
    items: ['Café passado', 'Pão na chapa', 'Lanches de viagem', 'Atendimento de madrugada'],
  },
]

export const REASONS = [
  {
    title: 'KM 71 da Dutra',
    description:
      'Localização privilegiada na Rodovia Presidente Dutra, sentido Rio — acesso fácil vindo de SP ou do RJ em direção a Aparecida.',
  },
  {
    title: 'Ônibus e Vans',
    description:
      'Estrutura para receber excursões, romeiros de Aparecida e grupos grandes. Traga sua caravana.',
  },
  {
    title: 'Preço Justo',
    description:
      'Comida farta por preço acessível — elogiada em mais de 3.400 avaliações no Google.',
  },
  {
    title: 'Banheiros Limpos',
    description:
      'Parada com banheiros limpos e bem cuidados, ponto alto citado por quem viaja com família.',
  },
]

export const REVIEWS = [
  {
    quote: 'Ótima opção de parada na Dutra. Comida variada e preço justo.',
    author: 'Avaliação Google',
  },
  {
    quote: 'Atendimento amigável e banheiros limpos. Voltaremos com a excursão.',
    author: 'Avaliação Google',
  },
  {
    quote: 'Comida de verdade, feita com capricho. Bom para ir com a família.',
    author: 'Avaliação Google',
  },
]

export const FAQ = [
  {
    q: 'Vocês atendem ônibus e excursões?',
    a: 'Sim. Recebemos ônibus, vans e grupos de romeiros com frequência. Para grupos grandes, recomendamos ligar antes no (12) 3108-1856 para avisarmos a cozinha.',
  },
  {
    q: 'Quais são os horários de funcionamento?',
    a: 'Segunda a sexta das 06:00 às 22:00, sábado das 07:00 às 15:00 e domingo das 07:00 às 22:00 — além do café da madrugada para quem está na estrada. Recomendamos confirmar pelo telefone, pois pode haver variação em feriados.',
  },
  {
    q: 'O churrasco está funcionando?',
    a: 'A churrasqueira passou por obras de melhoria. Ligue antes de sair de casa para confirmar o churrasco do dia: (12) 3108-1856.',
  },
  {
    q: 'Onde fica exatamente?',
    a: 'Travessa Luiz Butignon, 84 — Santa Luzia, Aparecida/SP, às margens da Dutra (BR-116), KM 71, sentido Rio de Janeiro. Use o botão “Como chegar” para abrir no Maps ou Waze.',
  },
  {
    q: 'É self-service ou por quilo?',
    a: 'Os dois: buffet self-service e opção por quilo, além do churrasco e do café da madrugada.',
  },
]
