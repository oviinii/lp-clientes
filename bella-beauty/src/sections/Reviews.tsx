import { Star } from 'lucide-react'
import { MAPS_URL, REVIEWS } from '../data/content'
import { Reveal } from '../components/Reveal'

export function Reviews() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="eyebrow text-rose">Avaliações reais do Google</p>
        <h2 className="mt-3 font-display text-4xl text-ink md:text-5xl">
          5,0 ★ · Clientes satisfeitas
        </h2>
        <p className="mt-4 font-sans text-ink-2">
          Avaliações verificadas no Google Meu Negócio.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {REVIEWS.map((r, i) => (
          <Reveal key={r.quote} delay={i * 0.08}>
            <figure className="flex h-full flex-col rounded-3xl border border-line bg-white/70 p-7">
              <div className="flex gap-1" aria-label="5 estrelas">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={15} className="fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 font-display text-xl italic leading-relaxed text-ink">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-4 font-sans text-xs uppercase tracking-[0.2em] text-ink-dim">
                — {r.author}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8 text-center">
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex rounded-full border border-ink/25 px-8 py-4 font-sans text-sm uppercase tracking-[0.18em] text-ink transition hover:border-rose hover:text-rose"
        >
          Ver todas no Google Maps
        </a>
      </Reveal>
    </section>
  )
}
