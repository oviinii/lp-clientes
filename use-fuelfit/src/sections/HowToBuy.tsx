import { AtSign } from 'lucide-react'
import { INSTAGRAM_URL, STEPS } from '../data/content'
import { Reveal } from '../components/Reveal'

export function HowToBuy() {
  return (
    <section id="comprar" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <Reveal className="max-w-2xl">
        <p className="eyebrow text-mocha">Como comprar</p>
        <h2 className="mt-3 font-display text-5xl text-cocoa md:text-6xl">
          Do desejo à entrega
        </h2>
      </Reveal>

      <ol className="mt-10 grid gap-5 md:grid-cols-3">
        {STEPS.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08}>
            <li className="relative h-full overflow-hidden rounded-[2rem] bg-card p-8 shadow-lift ring-1 ring-line">
              <span
                aria-hidden
                className="pointer-events-none absolute -right-2 -top-6 font-display text-[7rem] leading-none text-mocha/10"
              >
                {i + 1}
              </span>
              <p className="font-display text-xl text-cocoa">{s.title}</p>
              <p className="mt-2 font-sans text-[15px] leading-relaxed text-cocoa-2">
                {s.description}
              </p>
            </li>
          </Reveal>
        ))}
      </ol>

      <Reveal className="mt-8 text-center">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="btn-shimmer inline-flex items-center gap-2 rounded-full px-8 py-4 font-sans text-sm uppercase tracking-[0.18em] text-white"
        >
          <AtSign size={16} />
          Chamar no Direct
        </a>
      </Reveal>
    </section>
  )
}
