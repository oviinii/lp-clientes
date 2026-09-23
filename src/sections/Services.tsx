import { ArrowUpRight, Check } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { WHATSAPP_URL, services } from '../data/content'

export function Services() {
  return (
    <section id="servicos" className="relative bg-ink-3 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="font-sans text-xs uppercase tracking-[0.4em] text-volt">
              <span className="slash mr-3 inline-block align-middle" />
              O que fazemos
            </p>
            <h2 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-bone sm:text-5xl">
              Tudo que sua operação digital{' '}
              <span className="text-volt">precisa.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-volt/40 px-6 py-3 font-sans text-xs uppercase tracking-[0.22em] text-volt transition hover:bg-volt hover:text-ink"
            >
              Pedir orçamento <ArrowUpRight size={14} />
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={(i % 2) * 0.1}>
              <article className="flex h-full flex-col rounded-2xl border border-line bg-ink-2 p-8 transition-colors hover:border-volt/40">
                <p className="font-sans text-xs uppercase tracking-[0.3em] text-volt">
                  {s.short}
                </p>
                <h3 className="mt-3 font-display text-3xl font-semibold text-bone">
                  {s.title}
                </h3>
                <p className="mt-4 font-sans text-sm leading-relaxed text-bone-dim">
                  {s.description}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 font-sans text-sm text-bone-dim"
                    >
                      <Check size={16} className="mt-0.5 shrink-0 text-volt" />
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
