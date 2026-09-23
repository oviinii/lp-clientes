import { ArrowUpRight, Check } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { WHATSAPP_URL, services } from '../data/content'

export function Services() {
  return (
    <section id="servicos" className="relative bg-ink-3 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="font-sans text-xs uppercase tracking-[0.4em] text-brass">
              <span className="slash mr-3 inline-block align-middle" />
              03 — O que ofereço
            </p>
            <h2 className="mt-6 font-display text-4xl leading-tight text-bone sm:text-5xl">
              Consulta, ẹbọ <span className="italic text-goldsoft">e caminho.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-brass/40 px-6 py-3 font-sans text-xs uppercase tracking-[0.22em] text-brass transition hover:bg-brass hover:text-ink"
            >
              Agendar pelo WhatsApp <ArrowUpRight size={14} />
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.1}>
              <article
                className={`flex h-full flex-col rounded-2xl p-8 ${
                  s.highlight
                    ? 'bg-bone text-ink shadow-glow'
                    : 'border border-line bg-ink-2 text-bone'
                }`}
              >
                <p
                  className={`font-sans text-xs uppercase tracking-[0.3em] ${
                    s.highlight ? 'text-laterite' : 'text-brass'
                  }`}
                >
                  {s.short}
                </p>
                <h3 className="mt-3 font-display text-3xl">{s.title}</h3>
                <p
                  className={`mt-4 font-sans text-sm leading-relaxed ${
                    s.highlight ? 'text-ink/75' : 'text-bone-dim'
                  }`}
                >
                  {s.description}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className={`flex items-start gap-2.5 font-sans text-sm ${
                        s.highlight ? 'text-ink/85' : 'text-bone-dim'
                      }`}
                    >
                      <Check
                        size={16}
                        className={`mt-0.5 shrink-0 ${
                          s.highlight ? 'text-laterite' : 'text-brass'
                        }`}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-sans text-xs uppercase tracking-[0.22em] transition ${
                    s.highlight
                      ? 'bg-ink text-bone hover:bg-ink-2'
                      : 'border border-brass/40 text-brass hover:bg-brass hover:text-ink'
                  }`}
                >
                  Quero agendar <ArrowUpRight size={14} />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
