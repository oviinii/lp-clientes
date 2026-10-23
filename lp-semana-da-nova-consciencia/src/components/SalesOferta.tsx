import { motion } from 'framer-motion';
import { ShieldCheck, TriangleAlert } from 'lucide-react';
import { CHECKOUT_URL } from '../checkout';

/**
 * Bloco de inscrição: preço R$ 47 à vista ou 6x R$ 9,90 + CTA para o
 * checkout Kiwify + alerta de vagas (copy fiel do documento).
 */
export function SalesOferta() {
  return (
    <section id="inscricao" className="relative scroll-mt-28 overflow-hidden bg-brand-night py-24 sm:py-28 md:scroll-mt-32">
      <div
        className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-royal/25 blur-[140px]"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto max-w-3xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="chip mx-auto">Sua inscrição</span>

          <h2 className="mt-6 text-4xl text-white sm:text-5xl">Destrave sua expansão</h2>

          <div className="mt-10 inline-block rounded-3xl bg-white p-10 text-brand-ink shadow-card sm:p-12">
            <p className="font-display text-6xl text-brand-night sm:text-7xl">R$ 47</p>
            <p className="mt-2 text-lg font-semibold text-brand-ink/70">à vista</p>
            <p className="mt-3 text-lg font-bold text-brand-night">
              ou <span className="text-brand-amber">6x de R$ 9,90</span>
            </p>

            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-gold btn-shine mt-8 w-full min-w-[16rem]"
            >
              Quero garantir minha inscrição
            </a>
            <p className="mt-3 flex items-center justify-center gap-2 text-xs font-semibold text-brand-ink/60">
              <ShieldCheck size={14} className="text-brand-amber" />
              Pagamento seguro via Kiwify
            </p>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-10 flex max-w-2xl items-start gap-3 rounded-2xl border border-brand-gold/40 bg-brand-gold/10 p-6 text-left text-base leading-relaxed text-white/90"
        >
          <TriangleAlert size={22} className="mt-0.5 shrink-0 text-brand-gold" aria-hidden="true" />
          <span>
            <strong className="font-bold text-white">Atenção!</strong> Para que todos possam receber a devida
            orientação e acompanhamento nos exercícios, as vagas são muito limitadas. Se inscreva agora ou você
            corre o risco de não conseguir participar.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
