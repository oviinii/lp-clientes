import { Reveal } from '../components/Reveal'
import { benefits } from '../data/content'

export function Benefits() {
  return (
    <section id="beneficios" className="relative bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="font-sans text-xs uppercase tracking-[0.4em] text-leaf">
            <span className="slash mr-3 inline-block align-middle" />
            Benefícios
          </p>
          <h2 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-bone sm:text-5xl">
            Resultado que impacta o{' '}
            <span className="text-lime">custo por matrícula.</span>
          </h2>
          <p className="mt-4 max-w-2xl font-sans text-base text-bone-dim">
            Gestão integrada do marketing e comercial para gerar matrículas
            reais — não só leads.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={(i % 2) * 0.1}>
              <article className="h-full rounded-2xl border border-line bg-ink-2 p-8 transition-colors hover:border-leaf/40">
                <p className="font-display text-4xl font-bold text-leaf/30">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-4 font-display text-2xl font-semibold text-bone">
                  {b.title}
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-bone-dim">
                  {b.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-8 grid gap-5 rounded-2xl bg-leaf p-8 sm:grid-cols-3 lg:p-10">
            {[
              ['-40%', 'de redução no custo por matrícula'],
              ['100%', 'gestão integrada marketing + comercial'],
              ['24/7', 'follow-up com inteligência artificial'],
            ].map(([k, v]) => (
              <div key={k} className="text-center sm:text-left">
                <p className="font-display text-4xl font-bold text-ink-3 sm:text-5xl">
                  {k}
                </p>
                <p className="mt-1 font-sans text-sm text-ink-3/75">{v}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
