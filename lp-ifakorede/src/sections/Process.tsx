import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { WHATSAPP_NUMBER, WHATSAPP_URL, processSteps } from '../data/content'

export function Process() {
  return (
    <section id="como-funciona" className="relative bg-ink-3 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="text-center font-sans text-xs uppercase tracking-[0.4em] text-brass">
            05 — Como funciona a consulta
          </p>
          <h2 className="mt-6 text-center font-display text-4xl leading-tight text-bone sm:text-5xl">
            Do primeiro “Aboru”{' '}
            <span className="italic text-goldsoft">ao seu caminho.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {processSteps.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.08}>
              <div
                className={`h-full rounded-2xl p-7 ${
                  i === processSteps.length - 1
                    ? 'bg-brass text-ink'
                    : 'border border-line bg-ink-2 text-bone'
                }`}
              >
                <p
                  className={`grid h-10 w-10 place-items-center rounded-full font-sans text-sm font-bold ${
                    i === processSteps.length - 1
                      ? 'bg-ink text-goldsoft'
                      : 'bg-brass text-ink'
                  }`}
                >
                  {i + 1}
                </p>
                <h3 className="mt-5 font-sans font-semibold">{s.title}</h3>
                <p
                  className={`mt-2 font-sans text-sm leading-relaxed ${
                    i === processSteps.length - 1 ? 'text-ink/75' : 'text-bone-dim'
                  }`}
                >
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 text-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-3 rounded-full bg-moss px-8 py-4 font-sans text-sm font-semibold uppercase tracking-[0.18em] text-bone transition hover:bg-moss-deep"
            >
              Agendar agora — +55 37 99150-2654 <ArrowUpRight size={16} />
            </a>
            <p className="mt-4 font-sans text-[13px] text-bone-dim">
              {WHATSAPP_NUMBER} · Cumprimente com “Aboru Aboye oo!”
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
