import { Reveal } from '../components/Reveal'
import { steps } from '../data/content'

export function Steps() {
  return (
    <section id="passos" className="relative bg-bone py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="font-sans text-xs uppercase tracking-[0.4em] text-leaf-deep">
            <span className="slash mr-3 inline-block align-middle" />
            Passos
          </p>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
            Funil de <span className="italic text-leaf-deep">matrículas.</span>
          </h2>
          <p className="mt-4 max-w-3xl font-sans text-base leading-relaxed text-ink/70">
            Identificamos a imagem da sua instituição no mercado e o grau de
            visibilidade, melhoramos esses pontos e montamos a jornada do
            matriculado — com avaliação diária e IA no follow-up.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-line bg-ink-2 p-7">
                <p className="grid h-10 w-10 place-items-center rounded-full bg-leaf font-sans text-sm font-bold text-ink-3">
                  {i + 1}
                </p>
                <h3 className="mt-5 font-sans font-semibold text-bone">{s.title}</h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-bone-dim">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
