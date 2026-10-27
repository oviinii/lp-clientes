import { motion } from 'framer-motion';
import { Mic2 } from 'lucide-react';

/**
 * Condução: "Essa é a última Imersão... deste ano" + Leandra Soares
 * + participação especial de Valter Monteiro (copy fiel do documento).
 */
export function SalesMentora() {
  return (
    <section id="conducao" className="relative scroll-mt-28 overflow-hidden bg-brand-night py-20 sm:py-24 md:scroll-mt-32">
      <div
        className="absolute left-0 top-1/3 h-[420px] w-[420px] rounded-full bg-brand-royal/20 blur-[140px]"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="chip mx-auto">Aviso importante</span>
          <h2 className="mt-6 text-3xl text-white sm:text-4xl">
            Essa é a última <span className="text-gold-gradient">Imersão Destrave sua Expansão da Consciência</span>{' '}
            deste ano.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
            Você só tem essa oportunidade de limpar o que ainda te amarra e se preparar para 2027 com
            Prosperidade, Saúde e Alegria na sua vida.
          </p>
        </motion.div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-8 lg:grid-cols-2">
          {/* Leandra Soares */}
          <motion.figure
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-light grid overflow-hidden sm:grid-cols-[0.8fr_1.2fr]"
          >
            <div className="relative min-h-[260px]">
              <img
                src="/imagens/IMG_5398.jpg"
                alt="Leandra Soares, mentora e palestrante"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-night/40 to-transparent" aria-hidden="true" />
            </div>
            <figcaption className="p-7">
              <span className="chip chip-dark">Condução</span>
              <h3 className="mt-3 text-2xl text-brand-ink">Com Leandra Soares</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-ink/75 sm:text-base">
                Mentora e palestrante, une autoconhecimento e espiritualidade há{' '}
                <strong className="text-brand-ink">11 anos</strong> ajudando mulheres a transformar consciência em
                ação. Co-realizadora das <strong className="text-brand-ink">4 Edições do Congresso da Expansão da
                Consciência Multidimensional</strong>.
              </p>
              <p className="mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-brand-amber">
                <Mic2 size={14} />
                Meditação, técnica e exercícios ao vivo
              </p>
            </figcaption>
          </motion.figure>

          {/* Valter Monteiro */}
          <motion.figure
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="card-cosmic grid overflow-hidden sm:grid-cols-[0.8fr_1.2fr]"
          >
            <div className="relative min-h-[260px]">
              <img
                src="/imagens/valter-monteiro.jpg"
                alt="Valter Monteiro, médiaum e co-realizador do Congresso, palestrando com microfone"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-night/50 to-transparent" aria-hidden="true" />
            </div>
            <figcaption className="p-7">
              <span className="chip">Participação especial</span>
              <h3 className="mt-3 text-2xl text-white">Valter Monteiro</h3>
              <p className="mt-3 text-base font-semibold text-brand-gold">
                “O que a espiritualidade está revelando neste final de 2026?”
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">
                Médium que compartilha sua experiência espiritual e trabalha com os seres de luz pela chegada da
                Nova Era. Co-realizador das <strong className="text-white">4 Edições do Congresso da Expansão da
                Consciência Multidimensional</strong>.
              </p>
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
