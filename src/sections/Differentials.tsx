import { Reveal } from '../components/Reveal'
import { differentials } from '../data/content'

export function Differentials() {
  return (
    <section id="diferenciais" className="relative bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="font-sans text-xs uppercase tracking-[0.4em] text-volt">
            <span className="slash mr-3 inline-block align-middle" />
            Por que a Zinbox
          </p>
          <h2 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-bone sm:text-5xl">
            Agência pequena, <span className="text-volt">entrega grande.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {differentials.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-line bg-ink-2 p-8 transition-colors hover:border-volt/40">
                <p className="font-display text-4xl font-bold text-volt">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-4 font-display text-2xl font-semibold text-bone">
                  {d.title}
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-bone-dim">
                  {d.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
