import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { CHECKOUT_URL } from '../checkout';

/**
 * "Você vai:" — os 5 entregáveis da imersão, copy fiel do documento,
 * cachê claro como nos cards da campanha.
 */
const itens = [
  'Identificar os 3 padrões que se repetem e impedem seu avanço.',
  'Compreender os ganhos inconscientes que mantêm você presa a eles.',
  'Vivenciar uma meditação para acessar seu poder interior e ampliar seu terceiro olho.',
  'Participar de uma técnica que transforma desânimo em clareza e te mostra como agir.',
  'Participar de um exercício ao vivo para limpar experiências ligadas aos seus bloqueios, desta e de outras vidas.',
];

export function SalesVai() {
  return (
    <section id="vai" className="relative scroll-mt-28 overflow-hidden bg-brand-night py-20 sm:py-24 md:scroll-mt-32">
      <div
        className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-brand-royal/25 blur-[140px]"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <span className="chip">Nesta imersão</span>
            <h2 className="mt-6 text-4xl text-white sm:text-6xl">Você vai:</h2>
          </div>
          <p className="text-base leading-relaxed text-white/70 lg:col-span-4 lg:pb-2 lg:text-lg">
            Experiências ao vivo para destravar o que impede seu avanço.
          </p>
        </div>

        <div className="hairline mt-10 lg:mt-12" aria-hidden="true" />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {itens.map((item, idx) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="card-light flex items-start gap-4 p-6 sm:p-7"
            >
              <span className="check-box mt-0.5 border-brand-goldDeep bg-brand-gold/20">
                <Check size={13} strokeWidth={4} className="text-brand-amber" />
              </span>
              <p className="text-base leading-relaxed text-brand-ink/85 sm:text-lg">{item}</p>
            </motion.div>
          ))}

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-gold flex items-center gap-4 p-6 text-base font-bold leading-relaxed sm:p-7 sm:text-lg"
          >
            Mais clareza para colocar em prática o que a espiritualidade mostra, e abrir espaço para o que
            deseja viver.
          </motion.p>
        </div>

        <div className="mt-12 text-center">
          <a href={CHECKOUT_URL} target="_blank" rel="noreferrer" className="btn-gold">
            Quero garantir minha vaga
            <ArrowRight size={18} strokeWidth={3} />
          </a>
        </div>
      </div>
    </section>
  );
}
