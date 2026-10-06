import { motion } from 'framer-motion';
import { BadgePercent, Check, Flame, ShieldCheck } from 'lucide-react';

/**
 * Sessão de ingressos.
 * Ajustes pedidos (grifados no briefing):
 *  - "Lote 1 com 50% de Desconto - De R$ 497,00 por apenas R$ 297,00" (Acesso Promocional)
 *  - "Vagas Limitadas" em destaque no Acesso Comunidade Nova Era
 */
const beneficiosBase = [
  '5 dias de programação online',
  'Grupo de WhatsApp com preparação energética para o evento',
  'Áudios diários de reprogramação frequenciados',
  'Palestras, painéis e vivências',
  'Transmissões nos períodos da manhã, tarde e noite',
  'Acesso ao grupo oficial do evento',
  'Interação pelo chat',
  'Materiais disponibilizados pelos palestrantes',
  'Replay de cada dia por 24 horas',
];

const beneficiosExclusivos = [
  'Acesso exclusivo à Comunidade Nova Era',
  'Encontros mensais de mentoria',
];

export function Oferta() {
  return (
    <section id="ingressos" className="relative scroll-mt-28 overflow-hidden bg-brand-light py-24 text-brand-ink md:scroll-mt-32">
      <div
        className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-brand-night/10 to-transparent"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="chip">Seu próximo passo</span>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-brand-night sm:text-4xl lg:text-5xl">
            Escolha seu acesso
          </h2>
          <p className="mt-4 text-lg text-brand-night/70">
            Você deve se inscrever e entrar no grupo do evento. Lá irá receber os materiais exclusivos e os
            áudios diários de reprogramação frequenciados, para sucesso pessoal e abundância financeira em
            2027.
          </p>
        </div>

        <div className="flex flex-col items-stretch justify-center gap-8 md:flex-row">
          {/* Acesso Promocional — Lote 1 com 50% de desconto */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-1 flex-col rounded-3xl border border-brand-night/10 bg-white p-8 shadow-card"
          >
            <div className="mb-8 border-b border-brand-night/10 pb-8 text-center">
              <h3 className="text-2xl font-extrabold text-brand-night">Acesso Promocional</h3>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-night px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-gold">
                  <BadgePercent size={13} />
                  Lote 1 · 50% de desconto
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-gold/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-goldDeep">
                  <Flame size={13} />
                  Vagas limitadas
                </span>
              </div>

              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-brand-night/45">
                De <span className="line-through">R$ 497,00</span> por apenas
              </p>
              <p className="mt-1 text-5xl font-black text-brand-night">
                <span className="align-top text-2xl font-bold">R$</span> 297
                <span className="align-top text-2xl font-bold">,00</span>
              </p>
              <p className="mt-2 text-sm text-brand-night/60">à vista ou parcelado no cartão</p>
            </div>

            <ul className="mb-8 flex-1 space-y-4">
              {beneficiosBase.map((item) => (
                <li key={item} className="flex items-start gap-3 text-brand-night/75">
                  <Check className="mt-1 shrink-0 text-brand-goldDeep" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* TODO_CHECKOUT: inserir a URL do checkout Kiwify do Acesso Promocional */}
            <button
              type="button"
              className="w-full rounded-2xl bg-brand-night py-4 text-lg font-bold text-white transition-colors hover:bg-brand-deep"
            >
              COMPRAR INGRESSO
            </button>
            <p className="mt-3 flex items-center justify-center gap-2 text-xs text-brand-night/50">
              <ShieldCheck size={14} />
              Pagamento seguro via Kiwify
            </p>
          </motion.article>

          {/* Acesso Comunidade Nova Era — Vagas Limitadas em destaque */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="card-cosmic cosmic relative flex flex-1 flex-col p-8 md:-translate-y-4"
          >
            <div className="absolute inset-x-0 top-0 flex justify-center">
              <span className="rounded-b-2xl bg-gradient-to-r from-brand-goldDeep via-brand-gold to-brand-goldDeep px-6 py-2 text-[11px] font-black uppercase tracking-[0.14em] text-brand-night shadow-lg">
                Opção escolhida por +90% dos participantes
              </span>
            </div>

            <div className="mb-8 mt-10 border-b border-white/10 pb-8 text-center">
              <h3 className="text-2xl font-extrabold text-white">Acesso Comunidade Nova Era</h3>
              <p className="mt-2 font-semibold text-brand-gold">Acesso completo + bônus</p>

              <span className="mt-5 inline-flex animate-glow-pulse items-center gap-2 rounded-full border border-brand-gold/60 bg-brand-gold/15 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-brand-gold">
                <Flame size={13} />
                Vagas limitadas
              </span>

              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-brand-muted">
                De <span className="line-through">R$ 1.497,00</span> por apenas
              </p>
              <p className="mt-1 text-5xl font-black text-white">
                <span className="align-top text-2xl font-bold">R$</span> 797
                <span className="align-top text-2xl font-bold">,00</span>
              </p>
              <p className="mt-2 text-sm text-brand-muted">ou 12x no cartão</p>
            </div>

            <ul className="mb-8 flex-1 space-y-4">
              {beneficiosBase.map((item) => (
                <li key={item} className="flex items-start gap-3 text-brand-muted">
                  <Check className="mt-1 shrink-0 text-brand-gold" size={20} />
                  <span>{item}</span>
                </li>
              ))}
              {beneficiosExclusivos.map((item, idx) => (
                <li
                  key={item}
                  className={`flex items-start gap-3 font-bold text-white ${
                    idx === 0 ? 'mt-4 border-t border-white/10 pt-4' : ''
                  }`}
                >
                  <Check className="mt-1 shrink-0 text-brand-gold" size={20} />
                  <span>+ {item}</span>
                </li>
              ))}
            </ul>

            {/* TODO_CHECKOUT: inserir a URL do checkout Kiwify do Acesso Comunidade Nova Era */}
            <button type="button" className="btn-gold w-full py-4 text-lg">
              COMPRAR INGRESSO
            </button>
            <p className="mt-3 flex items-center justify-center gap-2 text-xs text-brand-muted">
              <ShieldCheck size={14} />
              Pagamento seguro via Kiwify
            </p>
          </motion.article>
        </div>

        <div className="mx-auto mt-10 flex max-w-3xl items-start gap-3 rounded-2xl border border-brand-night/10 bg-white/70 p-5 text-sm text-brand-night/70">
          <ShieldCheck className="mt-0.5 shrink-0 text-brand-goldDeep" size={18} />
          <p>
            <strong className="font-bold text-brand-night">Ancoragem:</strong> a participação na programação
            ao vivo está inclusa nos dois acessos. Os valores sofrem alteração por lote — garanta o Lote 1
            com 50% de desconto antes que as vagas se esgotem.
          </p>
        </div>
      </div>
    </section>
  );
}
