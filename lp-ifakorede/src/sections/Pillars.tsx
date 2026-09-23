import { Reveal } from '../components/Reveal'
import { pillars, teachings } from '../data/content'

export function Pillars() {
  return (
    <section id="iwapele" className="relative bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="font-sans text-xs uppercase tracking-[0.4em] text-brass">
            <span className="slash mr-3 inline-block align-middle" />
            02 — Diferencial · Ìwà Pẹ̀lẹ́
          </p>
          <h2 className="mt-6 max-w-3xl font-display text-4xl leading-tight text-bone sm:text-5xl">
            Ìwà Pẹ̀lẹ́ <span className="italic text-goldsoft">antes do ritual.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-line bg-ink-2 p-8 transition-colors hover:border-brass/40">
                <p className="font-display text-4xl italic text-brass">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-4 font-display text-3xl text-bone">{p.title}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-bone-dim">
                  {p.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 rounded-2xl border border-brass/25 bg-ink-2 p-8 lg:p-10">
            <p className="max-w-4xl font-display text-2xl italic leading-relaxed text-bone sm:text-3xl">
              “Ọ̀rúnmìlà diz: não é o tamanho do ẹbọ que salva — é a verdade do
              coração que o acompanha.”
            </p>
            <div className="rule mt-8" />
            <div className="mt-6 flex flex-wrap gap-3">
              {teachings.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-brass/30 px-5 py-2 font-display text-lg italic text-goldsoft"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
