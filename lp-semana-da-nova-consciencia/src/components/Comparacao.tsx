import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';

/**
 * Sessão 07 do briefing.
 * Ajuste pedido (grifado): "FUNDO PRECISA DAR CONTRASTE COM A CAIXA".
 * Antes: fundo navy com caixa branca translúcida (branco/5) — contraste fraco.
 * Agora: fundo navy cósmico + caixa sólida clara, com leitura vertical no mobile.
 */
const itens = [
  { ano26: 'Encarar a verdade', ano27: 'Acessar uma nova consciência' },
  { ano26: 'Romper padrões antigos', ano27: 'Fazer escolhas alinhadas à nova realidade' },
  { ano26: 'Curar e encerrar ciclos', ano27: 'Receber saúde, amor e prosperidade' },
  { ano26: 'Reorganizar-se por dentro', ano27: 'Transformar intenção em realização' },
  { ano26: 'Preparar-se para a mudança', ano27: 'Viver o salto para a Nova Era' },
];

export function Comparacao() {
  return (
    <section className="cosmic relative overflow-hidden py-24">
      <div className="stars absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="absolute -right-32 top-0 h-[500px] w-[500px] rounded-full bg-brand-blue/25 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="absolute -left-32 bottom-0 h-[500px] w-[500px] rounded-full bg-brand-gold/10 blur-[130px]"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto max-w-4xl px-4 text-center">
        <span className="chip">O salto</span>
        <h2 className="mx-auto mt-6 max-w-3xl text-xl leading-tight text-white sm:text-2xl lg:text-3xl">
          O que você curar ainda em 2026 determinará a realidade que poderá viver em 2027.
        </h2>

        {/* Caixa sólida clara sobre o fundo navy: contraste alto, como pedido no briefing */}
        <div className="mt-14 rounded-3xl bg-brand-light p-6 text-left shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] sm:p-8 md:p-12">
          <div className="hidden grid-cols-2 gap-8 border-b border-brand-night/10 pb-8 md:grid">
            <div className="text-center">
              <h3 className="text-3xl font-black text-brand-night/45">2026</h3>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-night/45">
                O ano da preparação
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-black text-brand-goldDeep">2027</h3>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-goldDeep">
                O ano do salto
              </p>
            </div>
          </div>

          <div className="space-y-6 md:space-y-5">
            {itens.map((item, idx) => (
              <motion.div
                key={item.ano26}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07 }}
                className="grid items-center gap-2 md:grid-cols-2 md:gap-8"
              >
                <div className="md:border-r md:border-brand-night/10 md:pr-8 md:text-right">
                  <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-night/40 md:hidden">
                    2026 · preparação
                  </span>
                  <p className="text-base text-brand-night/60 md:text-lg">{item.ano26}</p>
                </div>

                <ArrowDown
                  size={18}
                  className="mx-auto text-brand-goldDeep md:hidden"
                  aria-hidden="true"
                />

                <div className="rounded-2xl bg-brand-night/5 px-4 py-3 md:bg-transparent md:px-0 md:py-0 md:pl-8 md:text-left">
                  <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-goldDeep md:hidden">
                    2027 · o salto
                  </span>
                  <p className="text-base font-bold text-brand-night md:text-lg">{item.ano27}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <a href="#ingressos" className="btn-gold mt-12">
          Quero garantir minha vaga
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}
