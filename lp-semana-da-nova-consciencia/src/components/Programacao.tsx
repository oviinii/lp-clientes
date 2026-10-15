import { motion } from 'framer-motion';

/**
 * Sessão 03 do briefing.
 * Identidade pedida (grifado): "Fundo claro com as caixinhas referentes aos dias e imagens
 * condizentes com os títulos dos dias. As caixinhas precisam dar contraste no fundo claro,
 * com identidade cósmica ou galáxia."
 * Solução: seção em fundo claro (brand-light) + caixas em navy cósmico com estrelas e anéis,
 * cada uma com uma imagem relacionada ao tema do dia e o verbo do criativo oficial.
 */
const dias = [
  {
    dia: 1,
    verbo: 'Reconhecer',
    tema: 'Entendimento do cenário',
    titulo: '2027 está chegando: o que vai mudar na humanidade e como isso afetará minha vida?',
    img: '/imagens/dia1-planeta-humanidade.png',
    alt: 'Planeta Terra sobre a multidão — o que está mudando na humanidade',
    pos: '[object-position:50%_28%]',
  },
  {
    dia: 2,
    verbo: 'Compreender',
    tema: 'Compreender a estrutura oculta',
    titulo: 'Descubra as estratégias invisíveis de quem ainda tenta programar sua mente.',
    img: '/imagens/opt/IMG_8902.jpg',
    alt: 'Mentora conduzindo o evento no palco',
    pos: '[object-position:50%_15%]',
  },
  {
    dia: 3,
    verbo: 'Libertar',
    tema: 'Libertar-se das correntes de escassez emocional',
    titulo: 'Reconheça padrões, crenças e feridas e veja como curá-los.',
    img: '/imagens/CONGRESSOMULTIDIMENSIONAL-00123.jpg',
    alt: 'Mulheres em vivência coletiva durante o congresso',
  },
  {
    dia: 4,
    verbo: 'Ativar',
    tema: 'Ativar a consciência capaz de desejar e realizar',
    titulo: 'Ancore realizações infinitas com ferramentas de práticas quânticas seguras.',
    img: '/imagens/opt/IMG_8671.jpg',
    alt: 'Participantes em momento de ativação no evento',
    pos: '[object-position:50%_15%]',
  },
  {
    dia: 5,
    verbo: 'Atravessar',
    tema: 'Extrair o melhor dos portais abertos no próximo ano',
    titulo: 'Como aproveitar o salto de consciência de 2027 para manifestar saúde, amor e prosperidade.',
    img: '/imagens/opt/CONGRESSOMULTIDIMENSIONAL-00130.jpg',
    alt: 'Participante em profunda conexão durante vivência',
  },
];

export function Programacao() {
  return (
    <section id="programacao" className="paper relative scroll-mt-28 overflow-hidden py-24 text-brand-ink md:scroll-mt-32">
      <div
        className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-brand-night/10 to-transparent"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="chip chip-dark">Os 5 dias</span>
            <h2 className="mt-6 text-[1.9rem] leading-tight text-brand-night sm:text-4xl lg:text-5xl">
              Como será a Semana da Nova Consciência?
            </h2>
          </div>
          <p className="text-base leading-relaxed text-brand-night/70 lg:col-span-5 lg:pb-2 lg:text-lg">
            Mais de 25 palestras, entrevistas e vivências ao vivo para romper padrões antigos e manifestar
            uma nova realidade em 2027.
          </p>
        </div>
        <div className="hairline mb-12 mt-10 lg:mt-12" aria-hidden="true" />

        <div className="space-y-8">
          {dias.map((item, idx) => (
            <motion.article
              key={item.dia}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.06 }}
              className="card-light grid items-stretch overflow-hidden md:grid-cols-[0.85fr_1.15fr]"
            >
              {/* Imagem condizente com o tema do dia */}
              <div className={`relative min-h-[220px] md:min-h-[260px] ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                <img
                  src={item.img}
                  alt={item.alt}
                  loading="lazy"
                  className={`absolute inset-0 h-full w-full object-cover ${'pos' in item && item.pos ? item.pos : ''}`}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-brand-night/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent"
                  aria-hidden="true"
                />
              </div>

              <div className="relative flex flex-col justify-center gap-3 p-7 sm:p-9">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-display text-4xl leading-none text-brand-goldDeep sm:text-5xl">
                    DIA {item.dia}
                  </span>
                  <span className="chip chip-dark">
                    {item.verbo}
                  </span>
                </div>

                <h3 className="text-xl text-brand-ink sm:text-2xl">{item.tema}</h3>
                <p className="text-base leading-relaxed text-brand-ink/70">{item.titulo}</p>

                <div
                  className="mt-2 h-1 w-24 bg-brand-gold"
                  aria-hidden="true"
                />
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a href="#ingressos" className="btn-gold">
            Garantir minha vaga nos 5 dias
          </a>
        </div>
      </div>
    </section>
  );
}
