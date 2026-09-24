import { AtSign } from 'lucide-react'
import { INSTAGRAM_URL, STEPS } from '../data/content'
import { Reveal } from '../components/Reveal'

export function HowToBuy() {
  return (
    <section id="comprar" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <Reveal className="max-w-2xl">
        <p className="eyebrow text-caramel">Como comprar</p>
        <h2 className="mt-3 font-display text-4xl text-cream md:text-5xl">
          Do desejo à entrega em 3 passos
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {STEPS.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08}>
            <article className="h-full rounded-3xl border border-line bg-cocoa-900/60 p-7">
              <p className="font-display text-lg text-caramel">{s.title}</p>
              <p className="mt-2 font-sans text-sm leading-relaxed text-cream-dim">
                {s.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8 text-center">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-cream px-8 py-4 font-sans text-sm uppercase tracking-[0.18em] text-cocoa-950 transition hover:bg-caramel hover:text-white"
        >
          <AtSign size={16} />
          Chamar no Direct
        </a>
      </Reveal>
    </section>
  )
}
