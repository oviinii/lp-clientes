// TODO: trocar pelo WhatsApp real da agência
export const WHATSAPP_NUMBER = '5500000000000'
export const WHATSAPP_PREFILL =
  'Olá! Vim pelo site da Zinbox e quero um orçamento para meu projeto.'
export const WHATSAPP_URL = `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(WHATSAPP_PREFILL)}`

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
    id: 'lps',
    title: 'Landing Pages',
    short: 'Páginas que convertem.',
    description:
      'LPs rápidas, bonitas e focadas em uma ação: captar, vender ou agendar. Copy, design e performance no mesmo pacote.',
    bullets: [
      'Design exclusivo, sem template genérico',
      'Carregamento rápido e SEO básico',
      'Integração com WhatsApp e formulários',
    ],
    highlight: true,
  },
  {
    id: 'sites',
    title: 'Sites Institucionais',
    short: 'Sua vitrine digital.',
    description:
      'Sites completos para empresas que precisam de presença profissional: institucional, portfólio, catálogo e blog.',
    bullets: [
      'Layout responsivo e moderno',
      'Área administrativa quando precisar',
      'Domínio, hospedagem e SSL configurados',
    ],
  },
  {
    id: 'software',
    title: 'Software sob Medida',
    short: 'Sistemas do seu jeito.',
    description:
      'CRMs, dashboards, áreas de cliente, automações e integrações. Construímos a ferramenta que o seu processo pede.',
    bullets: [
      'Levantamento e prototipação',
      'Painéis, relatórios e permissões',
      'Suporte e evolução contínua',
    ],
  },
  {
    id: 'solucoes',
    title: 'Soluções Digitais',
    short: 'Tudo que gira em torno.',
    description:
      'Identidade visual aplicada, copy, integrações (pagamento, agenda, WhatsApp), manutenção e hospedagem gerenciada.',
    bullets: [
      'Integrações com APIs e gateways',
      'Manutenção e monitoramento',
      'Consultoria técnica contínua',
    ],
  },
]

export type Project = {
  name: string
  tag: string
  description: string
  url: string
}

export const projects: Project[] = [
  {
    name: 'Bàbáláwo Ifákọ́rẹ̀dé',
    tag: 'Landing Page · React',
    description: 'LP espiritual com agendamento via WhatsApp.',
    url: 'https://lp-ifakorede.vercel.app/',
  },
  {
    name: 'Diego Guimarães · Ògúnrogba',
    tag: 'Landing Page · React',
    description: 'Vivência espiritual sem enrolação.',
    url: 'https://lp-diego-guimaraes.vercel.app/',
  },
  {
    name: 'Ìyá Linda T’Osún',
    tag: 'Landing Page · Vite',
    description: 'Presença digital para o sagrado.',
    url: 'https://iyalinda.vercel.app/',
  },
  {
    name: 'Congresso Multidimensional',
    tag: 'Landing Page · Vite',
    description: 'Página de evento com conversão.',
    url: 'https://congresso-multidimensional.vercel.app/',
  },
  {
    name: 'KBZA Marketing',
    tag: 'Landing Page · HTML',
    description: 'Marketing de resultado.',
    url: 'https://kbza-marketing-de-resultado.vercel.app/',
  },
]

export const processSteps = [
  {
    step: '01',
    title: 'Descoberta',
    text: 'Entendemos seu negócio, público e objetivo. Sem reunião de 2h: direto ao ponto.',
  },
  {
    step: '02',
    title: 'Proposta clara',
    text: 'Escopo fechado, prazo e preço na mesa. Você sabe exatamente o que vai receber.',
  },
  {
    step: '03',
    title: 'Design + Build',
    text: 'Protótipo, aprovações por etapa e construção com tecnologia moderna.',
  },
  {
    step: '04',
    title: 'Deploy + Suporte',
    text: 'Publicamos, configuramos domínio e acompanhamos o pós-lançamento.',
  },
]

export const differentials = [
  {
    title: 'Sem template',
    text: 'Cada projeto nasce do zero, com identidade própria. Nada de tema comprado com sua logo colada.',
  },
  {
    title: 'Performance obsessiva',
    text: 'Sites rápidos pontuam melhor no Google e convertem mais. Otimizamos cada kilobyte.',
  },
  {
    title: 'Acompanhamento real',
    text: 'Você fala com quem faz. Acompanha o progresso e aprova cada etapa antes de seguir.',
  },
]

export type FaqItem = { question: string; answer: string }

export const faqs: FaqItem[] = [
  {
    question: 'Quanto custa um site ou landing page?',
    answer:
      'Depende do escopo: uma LP objetiva custa menos que um site completo ou um sistema. Chame no WhatsApp com sua ideia que montamos uma proposta fechada, sem surpresa.',
  },
  {
    question: 'Em quanto tempo fica pronto?',
    answer:
      'Landing pages típicas ficam prontas em 1 a 3 semanas. Sites e softwares dependem do escopo — o prazo é sempre combinado em contrato antes de começar.',
  },
  {
    question: 'Vocês cuidam de domínio e hospedagem?',
    answer:
      'Sim. Configuramos domínio, hospedagem, SSL e e-mails profissionais. Você não precisa entender nada de infraestrutura.',
  },
  {
    question: 'E depois da entrega, tenho suporte?',
    answer:
      'Sim. Todo projeto inclui período de garantia e oferecemos planos de manutenção e evolução contínua para quem quer crescer.',
  },
  {
    question: 'Trabalham com quais tecnologias?',
    answer:
      'React, Vite, Next.js e Tailwind no front-end; Node e bancos modernos no back-end. Escolhemos a stack pelo custo-benefício do seu projeto, não por moda.',
  },
]
