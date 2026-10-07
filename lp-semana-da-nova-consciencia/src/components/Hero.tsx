import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays, Clock3, PlayCircle } from 'lucide-react';

const provas = [
  { valor: '5 dias', rotulo: 'de imersão ao vivo' },
  { valor: '25+', rotulo: 'palestras e vivências' },
  { valor: '100%', rotulo: 'online, de qualquer lugar' },
];

export function Hero() {
  return (
    <section id="inicio" className="cosmic relative flex min-h-screen items-center overflow-hidden">
      {/* Identidade do criativo principal: duas camadas de estrelas + anéis + halo dourado */}
      <div className="stars absolute inset-0 animate-twinkle opacity-60" aria-hidden="true" />
      <div className="stars-lg absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="rings absolute -right-1/4 top-1/2 h-[140vh] w-[140vh] -translate-y-1/2" aria-hidden="true" />
      <div
        className="absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-brand-blue/25 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-40 right-10 h-[520px] w-[520px] animate-glow-pulse rounded-full bg-brand-gold/15 blur-[140px]"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto grid items-center gap-14 px-4 pb-24 pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pt-40">
        {/* Coluna de texto — alinhada à esquerda conforme briefing */}
        <div className="text-left">
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
            className="mt-6 font-serif text-lg italic text-brand-ice/90 sm:text-xl"
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
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.36 }}
            className="mt-7 max-w-xl text-base leading-relaxed text-brand-muted sm:text-lg"
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
            className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-7"
          >
            {provas.map((p) => (
              <div key={p.rotulo}>
                <dt className="text-3xl font-black text-brand-gold sm:text-4xl">{p.valor}</dt>
                <dd className="mt-2 text-[10px] font-bold uppercase leading-snug tracking-[0.16em] text-brand-muted">
                  {p.rotulo}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Visual: identidade do criativo principal do evento (portal + arte cósmica) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="rings-gold absolute inset-[-12%] animate-glow-pulse" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-brand-gold/30 bg-brand-deep/60 p-2 shadow-glow backdrop-blur-sm">
            <img
              src="/imagens/imagem de capa2.webp"
              alt="Arte cósmica da Semana da Nova Consciência: silhueta iluminada cercada por planetas e geometria sagrada"
              className="h-full w-full rounded-[2rem] object-cover"
              width={1024}
              height={1024}
            />
            <div
              className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-gradient-to-t from-brand-night/70 via-transparent to-transparent"
              aria-hidden="true"
            />
          </div>

          <div className="animate-floaty absolute -bottom-4 -left-2 rounded-2xl border border-brand-gold/30 bg-brand-night/90 px-5 py-3 shadow-gold backdrop-blur sm:-left-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold">Ao vivo</p>
            <p className="text-sm font-bold text-white">De 2 a 6 de dezembro</p>
          </div>

          <div className="absolute -right-2 top-6 rounded-2xl border border-white/15 bg-brand-night/90 px-5 py-3 shadow-card backdrop-blur sm:-right-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold">Vagas limitadas</p>
            <p className="text-sm font-bold text-white">Lote 1 · 50% off</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
