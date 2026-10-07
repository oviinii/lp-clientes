import { motion } from 'framer-motion';
import { Award, Mic2, Users } from 'lucide-react';

/**
 * Sessão 04 do briefing.
 * Identidade pedida (grifado): "Foto da organizadora Leandra com fundo da plateia do último evento."
 * Implementação: a plateia do último congresso é o fundo da seção e a foto oficial da Leandra
 * (mesma imagem usada no criativo "Quem vai te conduzir nessa jornada?") fica em primeiro plano.
 */
export function Mentora() {
  return (
    <section id="mentora" className="relative scroll-mt-28 overflow-hidden py-20 sm:py-24 md:scroll-mt-32">
      {/* Fundo: plateia do último evento, tratada na identidade navy da campanha */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src="/imagens/opt/IMG_8663.jpg"
          alt=""
          loading="lazy"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-brand-night/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-night via-brand-night/80 to-brand-blue/40" />
        <div className="stars absolute inset-0 opacity-40" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="rings-gold absolute inset-[-14%] animate-glow-pulse" aria-hidden="true" />
            <div className="absolute -inset-4 rounded-[2.5rem] bg-brand-gold/20 blur-3xl" aria-hidden="true" />
            <img
              src="/imagens/IMG_5398.jpg"
              alt="Leandra Soares, organizadora da Semana da Nova Consciência"
              loading="lazy"
              className="relative w-full rounded-[2rem] border-2 border-brand-gold/50 object-cover shadow-glow"
            />
            <div className="animate-floaty absolute -bottom-6 -right-4 rounded-2xl border border-brand-gold/40 bg-brand-night/95 px-5 py-3 text-right shadow-card backdrop-blur sm:-right-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold">Realizadora</p>
              <p className="text-base font-extrabold text-white">Leandra Soares</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-left"
          >
            <span className="chip">Sua mentora</span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Quem vai te conduzir <span className="text-gold-gradient">nessa jornada?</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-brand-ice/85 sm:text-lg">
              Mentora com <strong className="font-bold text-white">30 anos de experiência em comunicação</strong>,
              realizadora do <strong className="font-bold text-white">Congresso Multidimensional</strong> e
              fundadora do movimento dos{' '}
              <strong className="font-bold text-white">Despertadores da Nova Era</strong>, Leandra Soares une
              ciência e espiritualidade para te guiar rumo a 2027 com Saúde para viver, Relacionamentos para
              amar e ser amada e Prosperidade para realizar.
            </p>

            <ul className="mt-9 grid gap-4 sm:grid-cols-3">
              {[
                { Icone: Mic2, texto: '30 anos em comunicação' },
                { Icone: Users, texto: 'Congresso Multidimensional' },
                { Icone: Award, texto: 'Despertadores da Nova Era' },
              ].map(({ Icone, texto }) => (
                <li
                  key={texto}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-brand-ice"
                >
                  <Icone size={18} className="shrink-0 text-brand-gold" />
                  {texto}
                </li>
              ))}
            </ul>

            <a href="#ingressos" className="btn-gold mt-9">
              Quero aprender com a Leandra
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
