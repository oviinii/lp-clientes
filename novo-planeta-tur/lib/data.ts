export const WHATSAPP = "https://wa.me/5515999999999?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Planeta%20Turismo%20e%20quero%20um%20or%C3%A7amento.";
export const PHONE_DISPLAY = "+55 15 3212-8890";
export const PHONE_HREF = "tel:+551532128890";
export const EMAIL = "contato@planeta.tur.br";
export const ADDRESS = "Rua Salvador Corrêa, 628 — Jardim Faculdade, Sorocaba/SP — CEP 18040-720";
export const HOURS = "Seg–Sex 9h às 19h · Sáb 9h às 13h";

export const NAV = [
  {
    label: "Viagens",
    href: "/pacotes",
    children: [
      { label: "Pacotes", href: "/pacotes", desc: "Roteiros prontos e personalizados" },
      { label: "Produtos e Serviços", href: "/produtos-e-servicos", desc: "Tudo para sua viagem completa" },
      { label: "Promoções", href: "/promocoes", desc: "Ofertas no seu WhatsApp" },
      { label: "Roteiros de Fé", href: "/roteiros-de-fe", desc: "Fátima, Aparecida, Terra Santa" },
      { label: "Viagens Românticas", href: "/viagens-romanticas", desc: "Lua de mel e celebrações" },
    ],
  },
  { label: "Grupos", href: "/grupos" },
  {
    label: "Corporativo",
    href: "/corporativo",
    children: [
      { label: "Viagens Corporativas", href: "/viagens-corporativas", desc: "Gestão e economia" },
      { label: "Eventos", href: "/eventos", desc: "Convenções e reuniões" },
      { label: "Incentivos", href: "/incentivos", desc: "Premie e engaje equipes" },
    ],
  },
  {
    label: "A Planeta",
    href: "/quem-somos",
    children: [
      { label: "Quem Somos", href: "/quem-somos", desc: "Propósito e equipe" },
      { label: "Contato", href: "/contato", desc: "Fale com a gente" },
      { label: "Avalie nossos serviços", href: "/avaliacao", desc: "Ajude-nos a ser 5 estrelas" },
      { label: "Responsabilidade Social", href: "/responsabilidade-social", desc: "Um mundo melhor" },
      { label: "Fale Conosco", href: "/fale-conosco", desc: "Atendimento rápido" },
      { label: "Talentos", href: "/talentos", desc: "Trabalhe conosco" },
    ],
  },
  { label: "Documentos", href: "/documentos" },
];

export type Pacote = {
  slug: string;
  destino: string;
  pais: string;
  descricao: string;
  imagem: string;
  tag?: string;
};

export const PACOTES: Pacote[] = [
  {
    slug: "nova-york",
    destino: "Nova York",
    pais: "Estados Unidos",
    descricao: "Vida cultural, compras, gastronomia e esportes — cenários que te colocam dentro de um filme.",
    imagem: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1200&auto=format&fit=crop",
    tag: "Mais vendido",
  },
  {
    slug: "portugal",
    destino: "Portugal Essencial",
    pais: "Portugal",
    descricao: "Lisboa, Porto, Algarve, Fátima, Sintra, Coimbra, Évora, Serra da Estrela e Vinícolas do Douro.",
    imagem: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=1200&auto=format&fit=crop",
    tag: "Roteiro personalizado",
  },
  {
    slug: "riviera-maia",
    destino: "Riviera Maia",
    pais: "México",
    descricao: "Cancún, Playa del Carmen e Tulum com hotéis extraordinários e o melhor do Caribe.",
    imagem: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    tag: "All inclusive",
  },
  {
    slug: "italia",
    destino: "Itália Clássica",
    pais: "Itália",
    descricao: "Roma, Toscana, Cinque Terre, Veneza, Milão, Assis, Nápoles, Costa Amalfitana, Sicília e Sardenha.",
    imagem: "https://images.unsplash.com/photo-1499678329028-101435549a4e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "espanha",
    destino: "Espanha & Fé",
    pais: "Espanha",
    descricao: "Madrid, Barcelona, Sevilha, Granada, Santiago de Compostela, Ávila, Toledo e Segóvia.",
    imagem: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "franca",
    destino: "França Charmosa",
    pais: "França",
    descricao: "Paris, Riviera, Provence, Normandia — com extensão para Bélgica, Holanda e Londres.",
    imagem: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop",
    tag: "Lua de mel",
  },
  {
    slug: "grecia",
    destino: "Grécia Egeia",
    pais: "Grécia",
    descricao: "Atenas, Mykonos, Santorini, Meteora, Naxos, Paros e Rodes.",
    imagem: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "londres",
    destino: "Londres & Arredores",
    pais: "Reino Unido",
    descricao: "Londres, Liverpool, Windsor — com extensões para Escócia, Irlanda e Paris.",
    imagem: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "turquia",
    destino: "Turquia Mágica",
    pais: "Turquia",
    descricao: "Istambul, Capadócia, Éfeso, Tróia, Izmir, Kusadasi, Ankara e Pérgamo.",
    imagem: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1200&auto=format&fit=crop",
  },
];

export const SERVICOS = [
  { titulo: "Passagens aéreas", desc: "Nacionais e internacionais com tarifas competitivas e emissão ágil.", icone: "✈️" },
  { titulo: "Hospedagem", desc: "Rede ampla de hotéis com tarifas especiais e acordos exclusivos.", icone: "🏨" },
  { titulo: "Locação de veículos", desc: "Diárias e mensais no Brasil e exterior, com suporte ao condutor.", icone: "🚗" },
  { titulo: "Traslados & receptivo", desc: "Carros, vans, ônibus, helicópteros e táxis aéreos + receptivo global.", icone: "🤝" },
  { titulo: "Seguro viagem", desc: "Planos sob medida para o destino e perfil de cada viajante.", icone: "🛡️" },
  { titulo: "Cruzeiros & resorts", desc: "All inclusive, grupos exclusivos e roteiros personalizados.", icone: "🛳️" },
  { titulo: "Ingressos e atrações", desc: "Parques, eventos, shows, teatros e musicais no Brasil e no mundo.", icone: "🎟️" },
  { titulo: "Documentação", desc: "Vistos, passaportes, câmbio e toda a burocracia resolvida.", icone: "📄" },
  { titulo: "Lounges & cowork", desc: "Acesso VIP em aeroportos para viajar com conforto.", icone: "☕" },
];

export const DEPOIMENTOS = [
  {
    nome: "Mariana C. — Sorocaba",
    texto: "A Planeta cuidou da nossa lua de mel em Portugal nos mínimos detalhes. Foi impecável do embarque ao retorno.",
    viagem: "Lua de mel · Portugal",
  },
  {
    nome: "Grupo Empresarial — SP",
    texto: "Gestão corporativa séria: economia real, relatórios claros e suporte 24h que realmente funciona.",
    viagem: "Viagens corporativas",
  },
  {
    nome: "Família Andrade",
    texto: "Viajamos em grupo para a Itália com acompanhamento total. Segurança e amizades para a vida.",
    viagem: "Grupo · Itália",
  },
];
