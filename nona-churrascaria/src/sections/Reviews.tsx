import { Star } from 'lucide-react'
import { REVIEWS } from '../data/content'
import { Reveal } from '../components/Reveal'

export function Reviews() {
  return (
    <section id="avaliacoes" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="eyebrow text-honey">Prova social</p>
        <h2 className="mt-3 font-display text-4xl text-cream md:text-5xl">
          4,2 ★ em mais de 3.400 avaliações
        </h2>
        <p className="mt-4 font-sans text-cream-dim">
          Quem para na Dutra, recomenda: variedade, preço justo, atendimento
          amigável e banheiros limpos.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {REVIEWS.map((r, i) => (
          <Reveal key={r.quote} delay={i * 0.08}>
            <figure className="flex h-full flex-col rounded-3xl border border-line bg-ember-900/60 p-7">
              <div className="flex gap-1" aria-label="Avaliação positiva">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    size={15}
                    className={
                      s < 4 ? 'fill-gold text-gold' : 'text-cream-dim/40'
                    }
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 font-display text-xl italic leading-relaxed text-cream">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-4 font-sans text-xs uppercase tracking-[0.2em] text-cream-dim">
                — {r.author}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
