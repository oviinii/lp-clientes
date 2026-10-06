import { motion } from 'framer-motion';
import { Info } from 'lucide-react';

/**
 * Sessão 06 do briefing.
 * Identidade do briefing: "Fundo claro da página e caixa do palestrante escura com identidade do
 * evento, foto do palestrante, nome, tema da palestra e mini currículo."
 * PENDÊNCIA DE CONTEÚDO: os nomes, temas e mini currículos reais ainda não foram enviados pelo
 * cliente — a grade abaixo permanece com marcadores até o recebimento do material oficial.
 */
const palestrantes = [
  {
    nome: 'Palestrante convidado 1',
    tema: 'A física quântica no dia a dia',
    curriculo: 'Especialista em desenvolvimento humano e neurociência aplicada à espiritualidade.',
    foto: '/imagens/CONGRESSOMULTIDIMENSIONAL-00130.jpg',
  },
  {
    nome: 'Palestrante convidada 2',
    tema: 'Cura energética e frequencial',
    curriculo: 'Terapeuta holística com mais de 15 anos de experiência em reprogramação mental.',
    foto: '/imagens/CONGRESSOMULTIDIMENSIONAL-09998-2.jpg',
  },
  {
    nome: 'Palestrante convidado 3',
    tema: 'Abundância e prosperidade na nova era',
    curriculo: 'Mentor de negócios conscientes e facilitador de processos de expansão de consciência.',
    foto: '/imagens/CONGRESSOMULTIDIMENSIONAL-00123.jpg',
  },
];

export function Palestrantes() {
  return (
    <section id="palestrantes" className="relative scroll-mt-28 overflow-hidden bg-brand-light py-24 text-brand-ink md:scroll-mt-32">
      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="chip">Quem estará com você</span>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-brand-night sm:text-4xl lg:text-5xl">
            Palestrantes confirmados
          </h2>
          <p className="mt-4 text-lg text-brand-night/70">
            Conhecimento, experiência e diferentes caminhos para ampliar sua percepção.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {palestrantes.map((palestrante, idx) => (
            <motion.article
              key={palestrante.nome}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12 }}
              whileHover={{ y: -8 }}
              className="card-cosmic cosmic group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={palestrante.foto}
                  alt={palestrante.nome}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-brand-night via-brand-night/40 to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-brand-blue/30 mix-blend-color" aria-hidden="true" />
                <span className="absolute left-4 top-4 rounded-full border border-brand-gold/40 bg-brand-night/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-gold backdrop-blur">
                  Em breve · nome oficial
                </span>
              </div>

              <div className="border-t-2 border-brand-gold/60 p-6">
                <h3 className="text-xl font-extrabold text-white">{palestrante.nome}</h3>
                <h4 className="mt-2 font-semibold text-brand-gold">{palestrante.tema}</h4>
                <p className="mt-3 text-sm leading-relaxed text-brand-muted">{palestrante.curriculo}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="mx-auto mt-12 flex max-w-3xl items-start gap-3 rounded-2xl border border-brand-night/10 bg-white/70 p-5 text-sm text-brand-night/70">
          <Info className="mt-0.5 shrink-0 text-brand-goldDeep" size={18} />
          <span>
            A grade completa (mais de 25 palestras, entrevistas e vivências) será publicada nesta página
            conforme as confirmações oficiais.
          </span>
        </p>
      </div>
    </section>
  );
}
