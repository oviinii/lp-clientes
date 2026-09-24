import { Heart } from 'lucide-react'
import { PRAISE } from '../data/content'
import { Reveal } from '../components/Reveal'

export function Praise() {
  return (
    <section className="border-y border-line bg-oat-2/50">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-mocha">Prova social</p>
          <h2 className="mt-3 font-display text-5xl text-cocoa md:text-6xl">
            Quem veste,{' '}
            <span className="italic text-mocha">se apaixona</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {PRAISE.map((p, i) => (
            <Reveal key={p.quote} delay={i * 0.08}>
              <figure className="spotlight flex h-full -rotate-1 flex-col rounded-[1.5rem] bg-card p-7 shadow-lift ring-1 ring-line odd:rotate-1">
                <Heart size={18} className="fill-mocha text-mocha" />
                <blockquote className="mt-4 flex-1 font-display text-xl italic leading-relaxed text-cocoa">
                  “{p.quote}”
                </blockquote>
                <figcaption className="mt-4 font-sans text-xs uppercase tracking-[0.2em] text-cocoa-dim">
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
