import { PRICES, WA } from '../data/content'
import { Reveal } from '../components/Reveal'

export function Valores() {
  return (
    <div className="pt-28 md:pt-36">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <Reveal>
          <p className="eyebrow text-rose">Serviços & valores · Tatuapé</p>
          <h1 className="mt-4 font-display text-5xl text-ink md:text-6xl">
            Cada detalhe <span className="italic text-rose">pensado para você</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl font-sans leading-relaxed text-ink-2">
            Atendimento personalizado, técnicas de visagismo e produtos
            premium. Conheça nossos serviços e comece com uma avaliação
            gratuita.
          </p>
          <p className="mt-4 inline-block rounded-full border border-line bg-white/70 px-5 py-2 font-sans text-sm text-ink-2">
            💳 Parcele em <strong>2x ou 3x sem juros</strong> · ⚡{' '}
            <strong>5% de desconto</strong> à vista no Pix
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl gap-5 px-6 md:grid-cols-2 lg:px-10">
        {PRICES.map((p, i) => (
          <Reveal key={p.title} delay={Math.min(i * 0.06, 0.2)}>
            <article className="flex h-full flex-col rounded-3xl border border-line bg-white/70 p-7 md:p-8">
              <h2 className="font-display text-2xl text-ink">{p.title}</h2>
              <p className="mt-2 flex-1 font-sans text-[15px] leading-relaxed text-ink-2">
                {p.description}
              </p>
              <p className="mt-4 font-display text-2xl text-rose">{p.price}</p>
              {p.note && (
                <p className="mt-1 font-sans text-sm text-ink-dim">{p.note}</p>
              )}
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mx-auto mt-8 max-w-4xl px-6 text-center lg:px-10">
        <p className="font-sans text-sm leading-relaxed text-ink-dim">
          Os valores variam conforme a avaliação individual, o estado dos fios
          e a técnica indicada. A avaliação de design é sempre gratuita pelo
          WhatsApp.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={WA.valores}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-rose px-8 py-4 font-sans text-sm uppercase tracking-[0.18em] text-white transition hover:bg-rose-deep"
          >
            Agendar avaliação grátis
          </a>
        </div>
      </Reveal>

      <div className="mx-auto grid max-w-6xl gap-4 px-6 py-14 md:grid-cols-3 lg:px-10">
        {[
          ['⭐', 'Nota 5,0', 'no Google, com avaliações reais de clientes'],
          ['📍', 'Tatuapé', '5 min do Metrô, manobrista e café no prédio'],
          ['✨', 'Visagismo', 'design personalizado para o seu rosto'],
        ].map(([icon, title, text]) => (
          <Reveal key={title}>
            <div className="rounded-3xl border border-line bg-white/70 p-6 text-center">
              <p className="text-2xl">{icon}</p>
              <p className="mt-2 font-display text-xl text-ink">{title}</p>
              <p className="mt-1 font-sans text-sm text-ink-2">{text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
