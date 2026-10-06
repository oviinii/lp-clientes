import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

/**
 * Sessão 05 do briefing — Egrégora.
 * Mantida a arte do evento como fundo, agora na paleta navy/amarelo da campanha,
 * com atribuição à Leandra Soares (presente no texto do briefing).
 */
export function Egregora() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden py-28 sm:py-32">
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src="/imagens/Roda de Cura Tridimensional.jpg"
          alt=""
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-night/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-night via-brand-night/70 to-brand-night" />
        <div className="rings-gold absolute left-1/2 top-1/2 h-[120vh] w-[120vh] -translate-x-1/2 -translate-y-1/2 opacity-70" />
        <div className="stars absolute inset-0 opacity-50" />
      </div>

      <div className="container relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="mx-auto mb-8 flex h-14 w-14 items-center justify-center rounded-full border border-brand-gold/40 bg-brand-night/70 text-brand-gold backdrop-blur">
            <Quote size={24} />
          </span>

          <h2 className="font-serif text-2xl font-medium italic leading-snug text-white drop-shadow-2xl sm:text-3xl lg:text-4xl">
            Com a Egrégora trabalhando no campo sutil, vamos romper barreiras, criar experiências de
            aprendizado, reflexão, conexão e transformação.
          </h2>

          <p className="mt-8 text-sm font-bold uppercase tracking-[0.28em] text-brand-gold">
            Leandra Soares
          </p>
        </motion.div>
      </div>
    </section>
  );
}
