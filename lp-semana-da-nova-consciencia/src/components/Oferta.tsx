import { motion } from 'framer-motion';
import { BadgePercent, Check, Flame, ShieldCheck } from 'lucide-react';

/**
 * Sessão de ingressos — redesenhada como CLÍMAX da página.
 * A intensidade visual cresce ao longo da LP e explode aqui: fundo navy com portal
 * dourado, cards flutuando, preço âncora grande e selo "50% OFF" inclinado.
 *
 * Ajustes pedidos no briefing (grifados):
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
    <section
      id="ingressos"
      className="cosmic relative scroll-mt-28 overflow-hidden py-28 sm:py-36 lg:py-40 md:scroll-mt-32"
    >
      {/* Portal: a luz do evento chega ao ponto mais alto da página */}
      <div className="stars absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="stars-lg absolute inset-0 opacity-70" aria-hidden="true" />
      <div
        className="rings-gold absolute left-1/2 top-[42%] h-[150vh] w-[150vh] -translate-x-1/2 -translate-y-1/2 animate-glow-pulse"
        aria-hidden="true"
      />
      <div
        className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gold/15 blur-[130px]"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="chip">Seu próximo passo</span>
          <h2 className="mt-6 text-[2.1rem] text-white sm:text-5xl lg:text-6xl">
            Escolha <span className="text-gold-gradient">viver essa</span> experiência
          </h2>
          <p className="mt-6 text-base leading-relaxed text-brand-muted sm:text-lg">
            Você deve se inscrever e entrar no grupo do evento. Lá irá receber os materiais exclusivos e os
            áudios diários de reprogramação frequenciados, para sucesso pessoal e abundância financeira em
            2027.
          </p>
        </div>

        <div className="mt-16 grid items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Acesso Promocional — card claro, entrada */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="paper relative flex flex-col overflow-hidden rounded-3xl border border-white/15 p-8 text-brand-ink shadow-card lg:mt-10 lg:p-9"
          >
            <span className="absolute right-0 top-7 rotate-[-6deg] rounded-l-xl bg-brand-gold px-4 py-2 text-sm font-black uppercase tracking-[0.08em] text-brand-night shadow-gold">
              50% OFF
            </span>

            <div className="border-b border-brand-night/10 pb-8">
              <h3 className="text-xl text-brand-night sm:text-2xl">Acesso Promocional</h3>
              <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-brand-night/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-night/70">
                <BadgePercent size={13} />
                Lote 1 · com 50% de desconto
              </p>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.16em] text-brand-night/70">
                De <span className="line-through">R$ 497,00</span> por apenas
              </p>
              <p className="mt-2 text-6xl font-black leading-none text-brand-night sm:text-7xl">
                <span className="align-top text-2xl font-black">R$</span>297
                <span className="align-top text-2xl font-black">,00</span>
              </p>
              <p className="mt-3 text-sm text-brand-night/60">à vista ou parcelado no cartão</p>
            </div>

            <ul className="mb-8 mt-7 flex-1 space-y-4">
              {beneficiosBase.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-brand-night/80">
                  <span className="check-box border-brand-goldDeep bg-brand-gold/20">
                    <Check size={12} strokeWidth={4} className="text-brand-amber" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* TODO_CHECKOUT: inserir a URL do checkout Kiwify do Acesso Promocional */}
            <button
              type="button"
              className="w-full rounded-full bg-brand-night py-4 text-sm font-black uppercase tracking-[0.08em] text-white transition-colors hover:bg-brand-deep"
            >
              Comprar ingresso
            </button>
            <p className="mt-3 flex items-center justify-center gap-2 text-xs text-brand-night/70">
              <ShieldCheck size={14} />
              Pagamento seguro via Kiwify
            </p>
          </motion.article>

          {/* Acesso Comunidade Nova Era — card escuro com aro dourado, destaque máximo */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="card-vip cosmic relative flex flex-col p-8 lg:p-9"
          >
            <span className="absolute inset-x-0 top-0 flex justify-center">
              <span className="rounded-b-2xl bg-gradient-to-r from-brand-goldDeep via-brand-gold to-brand-goldDeep px-6 py-2 text-[10px] font-black uppercase tracking-[0.14em] text-brand-night shadow-lg">
                Escolhida por +90% dos participantes
              </span>
            </span>
            <div className="stars absolute inset-0 opacity-40" aria-hidden="true" />

            <div className="relative border-b border-white/10 pb-8 pt-10">
              <h3 className="text-xl text-white sm:text-2xl">Acesso Comunidade Nova Era</h3>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-brand-gold">
                Acesso completo + bônus
              </p>

              <span className="mt-5 inline-flex animate-glow-pulse items-center gap-2 rounded-full bg-brand-gold px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-brand-night">
                <Flame size={13} />
                Vagas limitadas
              </span>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.16em] text-brand-muted">
                De <span className="line-through">R$ 1.497,00</span> por apenas
              </p>
              <p className="mt-2 text-6xl font-black leading-none text-white sm:text-7xl">
                <span className="align-top text-2xl font-black">R$</span>797
                <span className="align-top text-2xl font-black">,00</span>
              </p>
              <p className="mt-3 text-sm text-brand-muted">ou 12x no cartão</p>
            </div>

            <ul className="relative mb-8 mt-7 flex-1 space-y-4">
              {beneficiosBase.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-brand-muted">
                  <span className="check-box border-brand-gold bg-brand-gold/15">
                    <Check size={12} strokeWidth={4} className="text-brand-gold" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
              {beneficiosExclusivos.map((item, idx) => (
                <li
                  key={item}
                  className={`flex items-start gap-3 text-sm font-bold text-white ${
                    idx === 0 ? 'mt-5 border-t border-white/10 pt-5' : ''
                  }`}
                >
                  <span className="check-box border-brand-gold bg-brand-gold/15">
                    <Check size={12} strokeWidth={4} className="text-brand-gold" />
                  </span>
                  <span>+ {item}</span>
                </li>
              ))}
            </ul>

            {/* TODO_CHECKOUT: inserir a URL do checkout Kiwify do Acesso Comunidade Nova Era */}
            <button type="button" className="btn-gold btn-shine relative w-full py-4 text-base">
              Comprar ingresso
            </button>
            <p className="relative mt-3 flex items-center justify-center gap-2 text-xs text-brand-muted">
              <ShieldCheck size={14} />
              Pagamento seguro via Kiwify
            </p>
          </motion.article>
        </div>

        <div className="hairline mx-auto mt-16 max-w-2xl" aria-hidden="true" />

        <div className="mx-auto mt-8 flex max-w-3xl items-start gap-3 text-center text-sm text-brand-muted">
          <ShieldCheck className="mt-0.5 shrink-0 text-brand-gold" size={18} />
          <p className="text-left">
            <strong className="font-bold text-white">Ancoragem:</strong> a participação na programação ao
            vivo está inclusa nos dois acessos. Os valores sofrem alteração por lote — garanta o Lote 1 com
            50% de desconto antes que as vagas se esgotem.
          </p>
        </div>
      </div>
    </section>
  );
}
