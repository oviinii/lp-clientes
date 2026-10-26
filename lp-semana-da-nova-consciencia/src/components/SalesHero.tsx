import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays, PlayCircle } from 'lucide-react';
import { CHECKOUT_URL } from '../checkout';

/**
 * Topo da página de vendas — copy fiel do documento:
 * headline de dor + nome da imersão + promessa + data + CTA.
 */
export function SalesHero() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden bg-brand-night">
      {/* Banner de fundo: imagem da Leandra + véus leves para leitura.
          No desktop a arte é espelhada para a Leandra ficar à direita,
          do lado oposto ao texto. */}
      <div className="absolute inset-0" aria-hidden="true">
        <picture className="block h-full w-full lg:-scale-x-100">
          <source srcSet="/imagens/leandra-hero-mobile.jpg" media="(max-width: 1023px)" />
          <img
            src="/imagens/leandra-hero-desktop.jpg"
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-night/35" />
        {/* No mobile o texto passa sobre a Leandra, então escurecemos um pouco mais */}
        <div className="absolute inset-0 bg-brand-night/45 lg:hidden" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-night/90 via-brand-night/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-night via-transparent to-brand-night/60" />
      </div>

      <div className="container relative z-10 mx-auto max-w-4xl px-4 pb-24 pt-44 text-left lg:pt-52">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl uppercase leading-[1.05] text-white sm:text-6xl lg:text-7xl"
        >
          Você busca tanto.
          <br />
          Por que ainda <span className="text-gold-gradient">se sente travada?</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 max-w-2xl space-y-5"
        >
          <p className="text-lg leading-relaxed text-white/90 sm:text-xl">
            Muita informação, meditação, oração…
            <br className="hidden sm:block" /> Mas parece que deveria estar avançando muito mais.
          </p>
          <p className="text-base leading-relaxed text-white/75 sm:text-lg">
            O cansaço de não avançar está pesando? É hora de olhar para o que freia sua jornada e se
            libertar energeticamente para o próximo ano.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10"
        >
          <h2 className="text-2xl text-brand-gold sm:text-4xl">Imersão Destrave sua Expansão da Consciência</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            Em dois dias, reconheça os 3 Padrões que estão travando sua jornada e descubra como acelerar sua
            expansão da consciência.
          </p>

          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
            <p className="flex items-center gap-3 text-base font-semibold text-white sm:text-lg">
              <span className="info-ico">
                <CalendarDays size={17} strokeWidth={2.5} />
              </span>
              7 e 8 de novembro
            </p>
            <p className="flex items-center gap-3 text-base font-bold uppercase tracking-wide text-white sm:text-lg">
              <span className="info-ico">
                <PlayCircle size={17} strokeWidth={2.5} />
              </span>
              Online e ao vivo
            </p>
          </div>

          <a href={CHECKOUT_URL} target="_blank" rel="noreferrer" className="btn-gold btn-shine mt-8">
            Quero destravar minha expansão
            <ArrowRight size={18} strokeWidth={3} />
          </a>
          <p className="mt-5 text-sm font-medium uppercase tracking-[0.35em] text-white/80">Vagas muito limitadas</p>
        </motion.div>
      </div>
    </section>
  );
}
