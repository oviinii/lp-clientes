import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { CHECKOUT_URL } from '../checkout';

/**
 * Fechamento: "Adiar também cansa." — copy fiel do documento,
 * com CTA final "É hora de expandir".
 */
export function SalesAdiar() {
  return (
    <section className="relative overflow-hidden bg-brand-night py-24 sm:py-28">
      <div
        className="absolute right-0 top-1/4 h-[420px] w-[420px] rounded-full bg-brand-royal/20 blur-[140px]"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto max-w-3xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl sm:text-6xl">
            Adiar <span className="text-gold-gradient">também cansa.</span>
          </h2>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-white/85 sm:text-lg">
            <p>Cada vez que você deixa sua jornada para depois, a frustração pode ganhar mais espaço.</p>
            <p>
              Uma vez que você enxerga a possibilidade de expandir sua consciência, é impossível simplesmente
              desver.
            </p>
            <p>
              Sua expansão pede movimento.
              <br />
              O que você deixa de alimentar perde força.
            </p>
            <p className="text-xl font-bold text-white sm:text-2xl">Dê atenção ao que despertou em você.</p>
          </div>

          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-gold btn-shine mt-10"
          >
            É hora de expandir
            <ArrowRight size={18} strokeWidth={3} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
