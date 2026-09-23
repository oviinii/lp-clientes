export const WHATSAPP_NUMBER = '5511952412499'
export const WHATSAPP_DISPLAY = '(11) 95241-2499'

export const INSTAGRAM_URL = 'https://www.instagram.com/bellaabeauti/'
export const FACEBOOK_URL =
  'https://www.facebook.com/share/1DmNc6nVC5/?mibextid=wwXIfr'
export const YOUTUBE_URL = 'https://www.youtube.com/@Bellabeauti'
export const MAPS_URL = 'https://maps.app.goo.gl/HB8VDCJ21fQyHMYeA'
export const ORIGINAL_SITE = 'https://sobrancelhasemsaopaulo.com.br/'

export const ADDRESS = {
  street: 'R. Bom Sucesso, 220 — Sala 1703',
  building: 'Edifício Platina · Tatuapé',
  city: 'São Paulo — SP',
  cep: 'CEP 03305-000',
  hours: 'Dom a Dom · 09h às 21h',
}

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const WA = {
  avaliacao: waLink(
    'Olá! Quero uma avaliação de design de sobrancelha grátis ✨',
  ),
  galeria: waLink(
    'Olá! Vi a galeria de trabalhos e quero uma avaliação de design grátis ✨',
  ),
  sobrancelhas: waLink(
    'Olá! Quero avaliação grátis de Design de Sobrancelhas no Tatuapé ✨',
  ),
  cilios: waLink('Olá! Quero saber valor e agendar Cílios / Lash Lifting ✨'),
  labios: waLink('Olá! Quero saber valor e agendar Hidralips / Lábios ✨'),
  facial: waLink('Olá! Quero saber valor e agendar Tratamento Facial ✨'),
  estrias: waLink('Olá! Quero saber valor do Protocolo Estria Free ✨'),
  domicilio: waLink('Olá! Quero solicitar um atendimento VIP a domicílio'),
  duvidas: waLink('Olá! Tenho dúvidas e gostaria de mais informações'),
  valores: waLink('Olá! Quero uma avaliação e saber os valores'),
  cursoCilios: waLink(
    'Olá! Tenho interesse no Curso de Extensão de Cílios (promoção R$1.199)',
  ),
  cursoDesign: waLink(
    'Olá! Tenho interesse no Curso de Design de Sobrancelhas (promoção R$599)',
  ),
  cursoNano: waLink(
    'Olá! Tenho interesse no Curso de Nanopigmentação (R$1.849)',
  ),
  cursoInfo: waLink(
    'Olá! Quero informações sobre o Curso de Extensão de Cílios',
  ),
  blog: waLink('Olá! Vi o blog e quero agendar uma avaliação de design grátis'),
}

export type Service = {
  tag: string
  title: string
  description: string
  items: string[]
  cta: string
  ctaHref: string
  image: string
  imageAlt: string
  imagePair?: [string, string]
}

export const SERVICES: Service[] = [
  {
    tag: 'Sobrancelhas · Tatuapé',
    title: 'Design de Sobrancelhas',
    description:
      'Moldamos sobrancelhas que harmonizam com seu rosto, realçam seu olhar e definem sua identidade. Design personalizado, técnicas avançadas e resultado de nível internacional — no coração do Tatuapé.',
    items: [
      'Design & Mapeamento Personalizado',
      'Brow Lamination',
      'Reconstrução de Sobrancelhas',
      'Nano Fio a Fio',
    ],
    cta: 'Avaliação grátis no WhatsApp',
    ctaHref: WA.sobrancelhas,
    image: '/images/sobrancelhas-design.webp',
    imageAlt:
      'Design de sobrancelhas premium no Tatuapé — brow lamination e nano fio a fio',
  },
  {
    tag: 'Olhos & Cílios',
    title: 'O Olhar Perfeito',
    description:
      'Do lash lifting ao volume completo — cada técnica escolhida para potencializar o seu olhar de forma única, natural ou dramática, conforme o que você deseja expressar.',
    items: [
      'Lash Lifting',
      'Volume Brasileiro',
      'Volume Egípcio',
      'Volume Glam',
      'Volume Molhado',
    ],
    cta: 'Quero saber valor',
    ctaHref: WA.cilios,
    image: '/images/cilios-hero.webp',
    imageAlt:
      'Extensão de cílios fio a fio premium em São Paulo — Bella Beauty Club',
  },
  {
    tag: 'Novo serviço · Lábios',
    title: 'Lábios & Pigmentação',
    description:
      'Lábios volumosos, hidratados e com cor duradoura. Das técnicas de hidratação profunda à nano pigmentação natural — um sorriso que transforma.',
    items: ['Hidralips', 'Hidralips Color', 'Nano Pigmentação Labial'],
    cta: 'Quero saber valor',
    ctaHref: WA.labios,
    image: '/images/labios-resultado.webp',
    imageAlt:
      'Resultado real de Hidralips — lábios volumosos e hidratados na Bella Beauty Club Tatuapé',
  },
  {
    tag: 'Facial',
    title: 'Tratamentos Faciais',
    description:
      'Pele renovada, luminosa e saudável. Protocolos que combinam tecnologia e técnica artesanal para resultados visíveis e duradouros — do Dermaglow ao microagulhamento.',
    items: [
      'Dermaglow',
      'Revitalização Facial',
      'Microagulhamento',
      'Limpeza de Pele Profunda',
    ],
    cta: 'Quero saber valor',
    ctaHref: WA.facial,
    image: '/images/tratamento-facial.webp',
    imageAlt: 'Tratamento facial premium — Bella Beauty Club Tatuapé',
  },
  {
    tag: 'Corporal',
    title: 'Protocolo Estria Free',
    description:
      'Tratamento de estrias no Tatuapé — redução e atenuação de estrias em abdômen, glúteos, coxas e seios, em fase ativa (vermelhas/roxas) ou madura (brancas/prateadas). Resultados visíveis a partir da 2ª sessão, com acompanhamento fotográfico.',
    items: [
      'Resultados visíveis a partir da 2ª sessão',
      'Protocolo 100% personalizado',
      'Fotos reais da nossa clientela',
    ],
    cta: 'Quero começar o protocolo',
    ctaHref: WA.estrias,
    image: '/images/estrias-depois.webp',
    imageAlt:
      'Estrias depois do Protocolo Estria Free — resultado real Bella Beauty Club Tatuapé',
    imagePair: ['/images/estrias-antes.webp', '/images/estrias-depois.webp'],
  },
]

export type WorkImage = {
  src: string
  label: string
  alt: string
}

export const RESULTS: WorkImage[] = [
  {
    src: '/images/trabalho-sobrancelhas-design-tatuape.webp',
    label: 'Design de Sobrancelhas',
    alt: 'Resultado real de design de sobrancelhas no Tatuapé — Bella Beauty Club',
  },
  {
    src: '/images/trabalho-sobrancelhas-lash-lifting-tatuape.webp',
    label: 'Sobrancelhas + Lash Lifting',
    alt: 'Design de sobrancelhas com lash lifting — Bella Beauty Club Tatuapé',
  },
  {
    src: '/images/trabalho-cilios-volume-tatuape.webp',
    label: 'Efeito Kim Kardashian',
    alt: 'Cílios efeito Kim Kardashian no Tatuapé — Bella Beauty Club',
  },
  {
    src: '/images/trabalho-cilios-fio-a-fio-tatuape.webp',
    label: 'Cílios Fio a Fio',
    alt: 'Cílios fio a fio premium no Tatuapé — Bella Beauty Club',
  },
  {
    src: '/images/trabalho-cilios-volume-brasileiro-tatuape.webp',
    label: 'Volume Brasileiro',
    alt: 'Volume brasileiro de cílios — resultado real Bella Beauty Tatuapé',
  },
  {
    src: '/images/trabalho-cilios-marrom-flavia-tatuape.jpg',
    label: 'Cílios Marrom · Efeito Natural',
    alt: 'Cílios marrom efeito natural em olhos claros — resultado real Bella Beauty Tatuapé',
  },
  {
    src: '/images/galeria-cilios-tatuape-1.jpg',
    label: 'Extensão de Cílios',
    alt: 'Extensão de cílios no Tatuapé — resultado real Bella Beauty',
  },
  {
    src: '/images/galeria-cilios-tatuape-2.jpg',
    label: 'Cílios Efeito Natural',
    alt: 'Cílios efeito natural no Tatuapé — resultado real Bella Beauty',
  },
  {
    src: '/images/galeria-cilios-tatuape-3.jpg',
    label: 'Extensão de Cílios',
    alt: 'Extensão de cílios volume no Tatuapé — resultado real Bella Beauty',
  },
  {
    src: '/images/galeria-cilios-tatuape-4.jpg',
    label: 'Extensão de Cílios',
    alt: 'Cílios alongados no Tatuapé — resultado real Bella Beauty',
  },
  {
    src: '/images/galeria-sobrancelha-design-tatuape.jpg',
    label: 'Design de Sobrancelhas',
    alt: 'Design de sobrancelhas no Tatuapé — resultado real Bella Beauty',
  },
]

export const DOMICILIO_AREAS = [
  'Jardins',
  'Itaim Bibi',
  'Vila Nova Conceição',
  'Moema',
  'Tatuapé',
  'Vila Mariana & Perdizes',
  'Alphaville',
]

export const REVIEWS = [
  {
    quote: 'Sou cliente e não troco por nada!!',
    author: 'Avaliação Google',
  },
  {
    quote: 'Ótima profissional, material de qualidade!',
    author: 'Avaliação Google',
  },
  {
    quote:
      'Espaço aconchegante, atendimento impecável, mãos leves de fada 🥰',
    author: 'Avaliação Google',
  },
]

export const FAQ = [
  {
    q: 'Vai ficar natural ou parecer artificial?',
    a: 'Nossa filosofia é naturalidade trabalhada. Cada design é único, respeitando o formato do seu rosto e o crescimento natural dos seus fios. Nada de sobrancelha desenhada ou exagerada. O resultado é você, na sua melhor versão — não outra pessoa.',
  },
  {
    q: 'Dói? Quanto tempo leva o procedimento?',
    a: 'O design e a henna são totalmente indolores — apenas uma leve sensação de pinça nas falhas. O brow lamination e a micropigmentação têm desconforto mínimo. A maioria das clientes relata que é muito mais tranquilo do que esperavam. Cada sessão dura entre 45 minutos e 1h30, dependendo da técnica.',
  },
  {
    q: 'Quanto tempo dura o resultado?',
    a: 'Depende da técnica: henna dura de 7 a 15 dias · brow lamination dura de 6 a 8 semanas · extensão de cílios dura de 3 a 4 semanas · nano fio a fio (micropigmentação) dura até 18 meses. Na avaliação grátis indicamos a técnica certa para o seu estilo de vida.',
  },
  {
    q: 'E se eu não gostar do resultado?',
    a: 'Por isso oferecemos a avaliação de design grátis pelo WhatsApp ANTES de qualquer procedimento. Você envia uma foto, conversamos sobre suas expectativas, mostramos referências e só agendamos quando você estiver 100% segura do que quer. Sem surpresas, sem pressão.',
  },
  {
    q: 'Vocês ficam no Tatuapé — vale a pena ir de outro bairro?',
    a: 'A maioria das nossas clientes vem de Anália Franco, Vila Formosa, Mooca, Vila Carrão e até dos Jardins. O studio fica no Edifício Platina — com manobrista, Shopping Tatuapé ao lado e café no prédio. A 5 minutos do Metrô Tatuapé. Quem vem uma vez, vira cliente.',
  },
]

export type PriceItem = {
  title: string
  description: string
  price: string
  note?: string
}

export const PRICES: PriceItem[] = [
  {
    title: 'Design de Sobrancelhas',
    description:
      'Design com visagismo e mapeamento facial, personalizado para o formato do seu rosto.',
    price: 'A partir de R$ 90',
    note: 'ou 2x e 3x sem juros',
  },
  {
    title: 'Brow Lamination',
    description:
      'Alinhamento e fixação dos fios para o efeito escovado (brushed brow) por até 8 semanas.',
    price: 'A partir de R$ 280',
    note: 'ou 2x e 3x sem juros',
  },
  {
    title: 'Nano Fio a Fio',
    description:
      'Técnica de nanopigmentação que cria fios realistas, fio a fio, para sobrancelhas naturais.',
    price: 'Avaliação personalizada',
  },
  {
    title: 'Reconstrução de Sobrancelhas',
    description:
      'Recuperação de sobrancelhas com falhas ou danificadas, com plano de tratamento individual.',
    price: 'Consulte valores',
  },
]

export type Course = {
  tag: string
  title: string
  duration: string
  oldPrice?: string
  price: string
  note: string
  items: string[]
  ctaHref: string
  featured?: boolean
}

export const COURSES: Course[] = [
  {
    tag: 'Curso mais procurado',
    title: 'Extensão de Cílios',
    duration: '3 dias · Presencial · Certificado',
    oldPrice: 'De R$ 1.900',
    price: 'R$ 1.199',
    note: 'ou até 12x no cartão · 5% OFF à vista no Pix',
    items: [
      'Fio a fio, volumes brasileiro, egípcio, americano e efeito molhado',
      'Técnicas de isolamento e adesão',
      'Mapping e curvatura para cada olhar',
      'Manutenção, higienização e biossegurança',
      'Prática em modelo real',
      'Material didático + Certificado + Suporte',
    ],
    ctaHref: WA.cursoCilios,
    featured: true,
  },
  {
    tag: 'Formação',
    title: 'Design de Sobrancelhas',
    duration: '2 dias · Presencial',
    oldPrice: 'De R$ 999',
    price: 'R$ 599',
    note: 'ou até 12x no cartão · 5% OFF à vista no Pix',
    items: [
      'Visagismo e mapeamento facial',
      'Técnicas de design e simetria',
      'Henna e finalização',
      'Material didático + Certificado',
      'Suporte por WhatsApp após o curso',
    ],
    ctaHref: WA.cursoDesign,
  },
  {
    tag: 'Avançado',
    title: 'Nanopigmentação',
    duration: '2 dias · Presencial',
    price: 'R$ 1.849',
    note: 'ou até 12x no cartão · 5% OFF à vista no Pix',
    items: [
      'Técnica de nanopigmentação fio a fio',
      'Colorimetria e proporção',
      'Biossegurança e cuidados',
      'Material didático + Certificado',
      'Suporte por WhatsApp após o curso',
    ],
    ctaHref: WA.cursoNano,
  },
]

export const COURSE_FAQ = [
  {
    q: 'Preciso ter experiência para fazer o curso?',
    a: 'Não. O curso é para iniciantes e também para quem já atua e quer aperfeiçoar. Começamos do zero, com teoria e muita prática em modelo real, até você dominar fio a fio, volume brasileiro, egípcio, americano e efeito molhado.',
  },
  {
    q: 'O curso dá certificado?',
    a: 'Sim. Ao concluir, você recebe certificado de conclusão, além de material didático incluso e suporte por WhatsApp após a formação.',
  },
  {
    q: 'Quanto custa e como posso pagar?',
    a: 'O curso de extensão de cílios custa, em promoção, R$ 1.199 (de R$ 1.900), em até 12x no cartão ou com 5% de desconto à vista no Pix. Inclui certificado, material e suporte.',
  },
  {
    q: 'Quantos dias dura e onde é?',
    a: 'São 3 dias de curso presencial, no Bella Beauty Club, no Edifício Platina — Tatuapé, a 5 minutos do Metrô Tatuapé.',
  },
]

export type Article = {
  tag: string
  title: string
  excerpt: string
  href: string
  featured?: boolean
}

export const ARTICLES: Article[] = [
  {
    tag: 'Em destaque · Agosto 2026',
    title: 'Cílios Marrom: o Efeito Natural que Está Conquistando Quem Ama um Olhar Leve',
    excerpt:
      'A extensão de cílios marrom virou tendência entre quem busca naturalidade. Mais suave que o preto, valoriza olhos e peles claras com elegância.',
    href: `${ORIGINAL_SITE}noticias/cilios-marrom-efeito-natural-tatuape.html`,
    featured: true,
  },
  {
    tag: 'Em alta · Agosto 2026',
    title: 'Cílios Fox Eyes: o Olhar de Raposa',
    excerpt:
      'A técnica do olhar puxado e sensual das famosas. Descubra o segredo do efeito fox eyes.',
    href: `${ORIGINAL_SITE}noticias/cilios-fox-eyes-olhar-raposa-tatuape.html`,
  },
  {
    tag: 'Em alta · Agosto 2026',
    title: 'O Mistério do Olhar da Jade Picon',
    excerpt:
      'O efeito natural e molhado que virou febre. Descubra o segredo por trás do olhar perfeito.',
    href: `${ORIGINAL_SITE}noticias/cilios-jade-picon-efeito-natural-tatuape.html`,
  },
  {
    tag: 'Guia completo · Julho 2026',
    title: 'Extensão de Cílios: o Guia Completo',
    excerpt:
      'Fio a fio, volume brasileiro e russo: entenda cada técnica, duração e cuidados. Para fazer ou aprender.',
    href: `${ORIGINAL_SITE}noticias/extensao-de-cilios-guia-completo-tatuape.html`,
  },
  {
    tag: 'Em alta · Junho 2026',
    title: 'Sobrancelhas para a Copa 2026: Torça Linda',
    excerpt:
      'Volume brasileiro e brow lamination são a febre da Copa. Veja como ficar pronta para torcer no Tatuapé.',
    href: `${ORIGINAL_SITE}noticias/sobrancelhas-copa-2026-tatuape.html`,
  },
  {
    tag: 'Guia local · Junho 2026',
    title: 'Sobrancelha Perto de Mim: Onde Fazer no Tatuapé',
    excerpt:
      'A 5 minutos do Metrô Tatuapé, nota 5,0 no Google. Veja serviços, localização e como agendar.',
    href: `${ORIGINAL_SITE}noticias/sobrancelha-perto-de-mim-tatuape.html`,
  },
  {
    tag: 'Guia completo · Junho 2026',
    title: 'Visagismo de Sobrancelhas: o Guia Completo',
    excerpt:
      'Como o formato do seu rosto define o design ideal das sobrancelhas. Entenda o visagismo e o mapeamento.',
    href: `${ORIGINAL_SITE}noticias/visagismo-sobrancelhas-tatuape.html`,
  },
  {
    tag: 'Guia completo · Junho 2026',
    title: 'Estrias: Perguntas e Respostas',
    excerpt:
      'O que são, diferença entre vermelha e branca, o que funciona e onde tratar no Tatuapé.',
    href: `${ORIGINAL_SITE}noticias/estrias-perguntas-respostas.html`,
  },
  {
    tag: 'Guia completo · Maio 2026',
    title: 'Brushed Brow: Perguntas e Respostas',
    excerpt:
      'O que é, quanto dura, para quem combina e onde fazer. Tudo sobre a sobrancelha escovadinha de 2026.',
    href: `${ORIGINAL_SITE}noticias/brushed-brow-perguntas-respostas.html`,
  },
  {
    tag: 'Tendência 2026 · Maio 2026',
    title: 'Brushed Brow: a Sobrancelha que é Tendência em 2026',
    excerpt:
      'A sobrancelha escovadinha domina 2026. Entenda a técnica, para quem combina e onde fazer no Tatuapé.',
    href: `${ORIGINAL_SITE}noticias/brushed-brow-tendencia-2026.html`,
  },
  {
    tag: 'Estética avançada · Maio 2026',
    title: 'Tratamento de Estrias no Tatuapé: Antes e Depois Reais',
    excerpt:
      'Resultados reais do Protocolo Estria Free em clientes do Tatuapé e Anália Franco. Avaliação grátis pelo WhatsApp.',
    href: `${ORIGINAL_SITE}noticias/tratamento-estrias-tatuape-analia-franco.html`,
  },
  {
    tag: 'Guia local · Maio 2026',
    title: 'Sobrancelhas em Anália Franco: Studio Premium a 5 Minutos do Bairro',
    excerpt:
      'Por que clientes de Anália Franco escolhem o Bella Beauty Tatuapé. Manobrista, shopping ao lado e café no prédio.',
    href: `${ORIGINAL_SITE}noticias/sobrancelhas-analia-franco.html`,
  },
]
