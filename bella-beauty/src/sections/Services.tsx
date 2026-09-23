import { SERVICES } from '../data/content'
import { Reveal } from '../components/Reveal'

export function Services() {
  return (
    <section id="servicos" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <Reveal className="max-w-2xl">
        <p className="eyebrow text-rose">O que oferecemos</p>
        <h2 className="mt-3 font-display text-4xl text-ink md:text-5xl">
          Nossa curadoria de serviços
        </h2>
        <p className="mt-4 font-sans text-ink-2">
          Avaliação de design grátis pelo WhatsApp. Sem compromisso.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={Math.min(i * 0.06, 0.24)}>
            <article className="flex h-full flex-col rounded-3xl border border-line bg-white/70 p-7 shadow-soft md:p-9">
              <p className="eyebrow text-rose">{s.tag}</p>
              <h3 className="mt-3 font-display text-3xl text-ink">{s.title}</h3>
              <p className="mt-3 font-sans text-[15px] leading-relaxed text-ink-2">
                {s.description}
              </p>
              <ul className="mt-5 space-y-2">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 font-sans text-sm text-ink-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-rose" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={s.ctaHref}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-fit rounded-full bg-ink px-6 py-3 font-sans text-xs uppercase tracking-[0.2em] text-cream transition hover:bg-rose"
              >
                {s.cta} →
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
