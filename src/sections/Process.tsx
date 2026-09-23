import { Reveal } from '../components/Reveal'
import { processSteps } from '../data/content'

export function Process() {
  return (
    <section id="processo" className="relative bg-ink-3 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="text-center font-sans text-xs uppercase tracking-[0.4em] text-volt">
            Como funciona
          </p>
          <h2 className="mt-6 text-center font-display text-4xl font-bold tracking-tight text-bone sm:text-5xl">
            Do briefing ao ar em <span className="text-volt">4 passos.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {processSteps.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-line bg-ink-2 p-7">
                <p className="font-display text-4xl font-bold text-volt/30">
                  {s.step}
                </p>
                <h3 className="mt-4 font-sans font-semibold text-bone">{s.title}</h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-bone-dim">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
