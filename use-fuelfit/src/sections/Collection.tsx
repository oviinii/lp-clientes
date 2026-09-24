import { AtSign } from 'lucide-react'
import { COLLECTIONS, INSTAGRAM_URL } from '../data/content'
import { Reveal } from '../components/Reveal'

export function Collection() {
  return (
    <section id="colecao" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <Reveal className="max-w-2xl">
        <p className="eyebrow text-caramel">Coleção em destaque</p>
        <h2 className="mt-3 font-display text-4xl text-cream md:text-5xl">
          Feita para mulheres que se movem com confiança
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {COLLECTIONS.map((c, i) => (
          <Reveal key={c.title} delay={Math.min(i * 0.08, 0.2)}>
            <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-cocoa-900/60">
              <div
                aria-hidden
                className={`h-44 ${
                  i === 0
                    ? 'bg-gradient-to-br from-mocha-deep via-mocha to-caramel'
                    : 'bg-gradient-to-br from-cocoa-800 via-cocoa-950 to-black'
                }`}
              />
              <div className="flex flex-1 flex-col p-7 md:p-9">
                <p className="eyebrow text-caramel">{c.tag}</p>
                <h3 className="mt-3 font-display text-3xl text-cream">
                  {c.title}
                </h3>
                <p className="mt-3 font-sans text-[15px] leading-relaxed text-cream-dim">
                  {c.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {c.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 font-sans text-sm text-cream"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-caramel" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-cream px-6 py-3 font-sans text-xs uppercase tracking-[0.2em] text-cocoa-950 transition hover:bg-caramel hover:text-white"
                >
                  <AtSign size={14} />
                  Quero essa coleção
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
