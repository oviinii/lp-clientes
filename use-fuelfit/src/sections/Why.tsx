import { REASONS } from '../data/content'
import { Reveal } from '../components/Reveal'

export function Why() {
  return (
    <section id="porque" className="border-y border-line bg-card/60">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-mocha">Por que Fuel Fit?</p>
          <h2 className="mt-3 font-display text-5xl text-cocoa md:text-6xl">
            O básico <span className="italic text-mocha">NADA básico</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2">
          {REASONS.map((r, i) => (
            <Reveal key={r.title} delay={Math.min(i * 0.07, 0.25)}>
              <article className="spotlight rounded-3xl border-t-2 border-mocha/40 pt-6">
                <p
                  aria-hidden
                  className="font-display text-6xl text-mocha/20"
                >
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-2 font-display text-2xl text-cocoa">
                  {r.title}
                </h3>
                <p className="mt-2 max-w-md font-sans leading-relaxed text-cocoa-2">
                  {r.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
