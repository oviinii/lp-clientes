import { Heart } from 'lucide-react'
import { PRAISE } from '../data/content'
import { Reveal } from '../components/Reveal'

export function Praise() {
  return (
    <section className="border-y border-line bg-cocoa-900/50">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-caramel">Prova social</p>
          <h2 className="mt-3 font-display text-4xl text-cream md:text-5xl">
            Quem veste, se apaixona
          </h2>
          <p className="mt-4 font-sans text-cream-dim">
            Comentários reais no Instagram da marca — desejo e engajamento em
            cada drop.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {PRAISE.map((p, i) => (
            <Reveal key={p.quote} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-3xl border border-line bg-cocoa-950/70 p-7">
                <Heart size={18} className="fill-caramel text-caramel" />
                <blockquote className="mt-4 flex-1 font-display text-xl italic leading-relaxed text-cream">
                  “{p.quote}”
                </blockquote>
                <figcaption className="mt-4 font-sans text-xs uppercase tracking-[0.2em] text-cream-dim">
                  — {p.author}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
