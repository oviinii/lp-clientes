import {Gem, HeartHandshake, RefreshCcw, Sparkles} from 'lucide-react'
import { REASONS } from '../data/content'
import { Reveal } from '../components/Reveal'

const icons = [HeartHandshake, Gem, RefreshCcw, Sparkles]

export function Why() {
  return (
    <section
      id="porque"
      className="border-y border-line bg-cocoa-900/50"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-caramel">Por que Fuel Fit?</p>
          <h2 className="mt-3 font-display text-4xl text-cream md:text-5xl">
            O básico NADA básico
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((r, i) => {
            const Icon = icons[i % icons.length]
            return (
              <Reveal key={r.title} delay={Math.min(i * 0.07, 0.25)}>
                <article className="h-full rounded-3xl border border-line bg-cocoa-950/70 p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-caramel/15 text-caramel">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-4 font-display text-2xl text-cream">
                    {r.title}
                  </h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-cream-dim">
                    {r.description}
                  </p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
