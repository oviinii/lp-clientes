import { motion } from 'framer-motion';

/**
 * Selo de garantia — última seção antes do rodapé (ajuste pedido).
 * Fundo claro, "7 DIAS" em dourado com selo e CTA verde.
 */
export function Garantia() {
  return (
    <section className="paper relative overflow-hidden py-20 sm:py-24">
      <div className="container relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative select-none" aria-hidden="true">
            <p className="text-[5rem] font-black leading-none tracking-tight text-brand-goldDeep/80 sm:text-[8rem]">
              7 DIAS
            </p>
            <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-brand-goldDeep bg-gradient-to-br from-brand-gold via-[#d99a06] to-brand-goldDeep shadow-gold sm:h-36 sm:w-36">
              <div className="flex h-20 w-20 flex-col items-center justify-center rounded-full border border-brand-night/25 bg-white/25 sm:h-24 sm:w-24">
                <span className="text-4xl font-black text-brand-night sm:text-5xl">7</span>
                <span className="px-2 text-center text-[8px] font-black uppercase leading-tight tracking-[0.12em] text-brand-night sm:text-[9px]">
                  dias de garantia
                </span>
              </div>
            </div>
          </div>

          <h2 className="mt-10 text-2xl text-brand-night sm:text-3xl">
            Selo de <span className="text-gold-gradient">Garantia</span> de 7 dias
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-brand-night/70 sm:text-lg">
            Se você sentir que a experiência não é para você, tem 7 dias de garantia incondicional.
          </p>

          <a
            href="#ingressos"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-b from-green-500 to-green-700 px-10 py-4 text-base font-black uppercase tracking-[0.06em] text-white shadow-lg transition-transform duration-300 hover:scale-[1.03]"
          >
            Sim! Quero garantir minha vaga
          </a>
        </motion.div>
      </div>
    </section>
  );
}
