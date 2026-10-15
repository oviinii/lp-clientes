import { motion } from 'framer-motion';

/**
 * Sessão 01 do briefing.
 * Identidade pedida: "fundo com aura, espaço ou galáxia e imagens principais dos itens"
 * e "utilizar mulher com média de idade de 45 anos" nas três imagens.
 * Imagens: acervo do evento (Leandra Soares, 40+) e acolhimento entre mulheres.
 *
 * Design: cabeçalho assimétrico (12 colunas) para quebrar o ritmo centralizado,
 * ornamento da marca no lugar de ícones genéricos e o amarelo reservado ao
 * rótulo de cada pilar (disciplina de acento).
 */
const cards = [
  {
    titulo: 'Saúde para viver',
    subtitulo: 'Vitalidade e equilíbrio',
    descricao: 'Bem-estar, energia renovada e paz interior para sustentar a nova frequência.',
    img: '/imagens/IMG_1951.JPG',
    marca: '☼',
  },
  {
    titulo: 'Relacionamentos',
    subtitulo: 'Para amar e ser amada',
    descricao: 'Acolhimento, afeto genuíno e a troca de carinho que cura vínculos.',
    img: '/imagens/opt/IMG_8663.jpg',
    marca: '◈',
  },
  {
    titulo: 'Prosperidade',
    subtitulo: 'Para realizar',
    descricao: 'Confiança, clareza de futuro e segurança para manifestar abundância.',
    img: '/imagens/opt/IMG_8671.jpg',
    marca: '✦',
  },
];

export function Pilares() {
  return (
    <section id="pilares" className="relative scroll-mt-28 overflow-hidden bg-brand-night py-20 sm:py-24 md:scroll-mt-32">
      <div className="container relative z-10 mx-auto px-4">
        {/* Cabeçalho assimétrico: título à esquerda, apoio à direita na base */}
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="chip">O chamado</span>
            <h2 className="mt-6 text-[2rem] text-white sm:text-4xl lg:text-5xl">
              Chega de padrões que te travam.
            </h2>
          </div>
          <p className="text-base leading-relaxed text-brand-muted lg:col-span-5 lg:pb-2 lg:text-lg">
            Em apenas 5 dias descubra como alcançar:
          </p>
        </div>

        <div className="hairline mt-10 lg:mt-12" aria-hidden="true" />

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {cards.map((card, idx) => (
            <motion.article
              key={card.titulo}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-brand-deep shadow-card"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={card.img}
                  alt={`${card.titulo} — ${card.subtitulo}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-brand-night via-brand-night/40 to-transparent"
                  aria-hidden="true"
                />
              </div>

              <div className="relative -mt-12 px-6 pb-7 pt-2">
                <h3 className="text-xl text-white sm:text-2xl">{card.titulo}</h3>
                <p className="mb-1 mt-3 px-1 text-xs font-bold uppercase leading-relaxed tracking-[0.2em] text-brand-gold">
                  {card.subtitulo}
                </p>
                <p className="mt-4 text-base leading-relaxed text-brand-muted">{card.descricao}</p>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
