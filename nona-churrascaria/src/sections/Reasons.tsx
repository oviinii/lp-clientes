import { Bus, MapPin, Sparkles, Wallet } from 'lucide-react'
import { REASONS } from '../data/content'
import { Reveal } from '../components/Reveal'

const icons = [MapPin, Bus, Wallet, Sparkles]

export function Reasons() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <Reveal className="max-w-2xl">
        <p className="eyebrow text-honey">Por que escolher a Nona</p>
        <h2 className="mt-3 font-display text-4xl text-cream md:text-5xl">
          Feita para a estrada
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {REASONS.map((r, i) => {
          const Icon = icons[i % icons.length]
          return (
            <Reveal key={r.title} delay={Math.min(i * 0.07, 0.25)}>
              <article className="h-full rounded-3xl border border-line bg-ember-900/60 p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-flame/15 text-flame">
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
    </section>
  )
}
