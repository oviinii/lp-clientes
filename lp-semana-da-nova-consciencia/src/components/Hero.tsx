import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays, Clock3, PlayCircle } from 'lucide-react';

const provas = [
  { valor: '5 dias', rotulo: 'de imersão ao vivo' },
  { valor: '25+', rotulo: 'palestras e vivências' },
  { valor: '100%', rotulo: 'online, de qualquer lugar' },
];

/**
 * Hero na ID da campanha: foto real em banner cheio + véu navy,
 * título em Anton (branco + ouro), linha de data com ícones amarelos,
 * CTA pill ouro com glow e "vagas limitadas" espaçado.
 */
export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden bg-brand-night">
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

      <div className="container relative z-10 mx-auto max-w-4xl px-4 pb-24 pt-44 text-left lg:pt-48">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="faixa text-sm sm:text-base">Prepare-se para 2027</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-6xl text-white sm:text-7xl lg:text-8xl"
        >
          Semana da
          <br />
          <span className="text-gold-gradient">Nova Consciência</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-xl font-semibold text-white sm:text-2xl"
        >
          O ano do salto de consciência
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28 }}
          className="mt-7 flex flex-col gap-3"
        >
          <p className="flex items-center gap-3 text-base font-medium text-white sm:text-lg">
            <span className="info-ico">
              <CalendarDays size={17} strokeWidth={2.5} />
            </span>
            De 2 a 6 de dezembro
          </p>
          <p className="flex items-center gap-3 text-base font-bold uppercase tracking-wide text-white sm:text-lg">
            <span className="info-ico">
              <PlayCircle size={17} strokeWidth={2.5} />
            </span>
            100% online
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.36 }}
          className="mt-7 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg"
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
            <ArrowRight size={18} strokeWidth={3} />
          </a>
          <a href="#programacao" className="btn-ghost">
            <Clock3 size={18} />
            Ver a programação
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-6 text-sm font-medium uppercase tracking-[0.35em] text-white/80"
        >
          Vagas limitadas · Lote 1 · 50% off
        </motion.p>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/15 pt-7"
        >
          {provas.map((p) => (
            <div key={p.rotulo}>
              <dt className="font-display text-3xl text-brand-gold sm:text-4xl">{p.valor}</dt>
              <dd className="mt-2 text-xs font-bold uppercase leading-snug tracking-[0.16em] text-white/70">
                {p.rotulo}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
