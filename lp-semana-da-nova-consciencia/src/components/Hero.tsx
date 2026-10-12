import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays, Clock3, PlayCircle } from 'lucide-react';

const provas = [
  { valor: '5 dias', rotulo: 'de imersão ao vivo' },
  { valor: '25+', rotulo: 'palestras e vivências' },
  { valor: '100%', rotulo: 'online, de qualquer lugar' },
];

/**
 * Hero — ajuste pedido: a imagem é o banner inteiro de fundo (full-bleed),
 * com foto real do acervo (plateia em vivência) no lugar da arte anterior.
 * Os selos "Vagas limitadas" e "De 2 a 6 de dezembro" ficam junto ao bloco
 * de texto/CTAs, sem flutuar distantes.
 */
export function Hero() {
  return (
    <section id="inicio" className="cosmic relative flex min-h-screen items-center overflow-hidden">
      {/* Banner inteiro de fundo: foto real + véu navy para leitura */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src="/imagens/CONGRESSOMULTIDIMENSIONAL-00123.jpg"
          alt=""
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-brand-night/78" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-night via-brand-night/72 to-brand-night/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-night via-transparent to-brand-night/60" />
      </div>

      <div className="stars absolute inset-0 animate-twinkle opacity-40" aria-hidden="true" />
      <div className="rings absolute -right-1/4 top-1/2 h-[140vh] w-[140vh] -translate-y-1/2" aria-hidden="true" />
      <div
        className="absolute -bottom-40 right-10 h-[520px] w-[520px] animate-glow-pulse rounded-full bg-brand-gold/15 blur-[140px]"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto max-w-4xl px-4 pb-24 pt-36 text-left lg:pt-40">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="chip"
        >
          Prepare-se para 2027
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-[2.5rem] text-white sm:text-5xl lg:text-6xl xl:text-[4.6rem]"
        >
          Semana da
          <br />
          <span className="text-gold-gradient">Nova Consciência</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 font-serif text-xl italic text-brand-ice/90 sm:text-2xl"
        >
          O ano do salto de consciência
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28 }}
          className="mt-7 flex flex-wrap items-center gap-3"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-brand-ice">
            <CalendarDays size={15} className="text-brand-gold" />
            De 2 a 6 de dezembro
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-brand-ice">
            <PlayCircle size={15} className="text-brand-gold" />
            Evento 100% online
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/50 bg-brand-gold/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-brand-gold">
            Vagas limitadas · Lote 1 · 50% off
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.36 }}
          className="mt-7 max-w-2xl text-base leading-relaxed text-brand-muted sm:text-lg"
        >
          Mais de 25 palestras, entrevistas e vivências para romper padrões antigos e manifestar uma nova
          realidade em 2027.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.44 }}
          className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <a href="#ingressos" className="btn-gold btn-shine">
            Garantir minha vaga
            <ArrowRight size={18} />
          </a>
          <a href="#programacao" className="btn-ghost">
            <Clock3 size={18} />
            Ver a programação
          </a>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-12 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/10 pt-7"
        >
          {provas.map((p) => (
            <div key={p.rotulo}>
              <dt className="text-3xl font-black text-brand-gold sm:text-4xl">{p.valor}</dt>
              <dd className="mt-2 text-xs font-bold uppercase leading-snug tracking-[0.16em] text-brand-muted">
                {p.rotulo}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
