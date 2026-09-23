import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { projects } from '../data/content'

export function Work() {
  return (
    <section id="projetos" className="relative bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="font-sans text-xs uppercase tracking-[0.4em] text-volt">
            <span className="slash mr-3 inline-block align-middle" />
            Projetos no ar
          </p>
          <h2 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-bone sm:text-5xl">
            LPs que já estão <span className="text-volt">vendendo.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 0.08}>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex h-full flex-col rounded-2xl border border-line bg-ink-2 p-7 transition-all hover:-translate-y-1 hover:border-volt/40"
              >
                <p className="font-sans text-[11px] uppercase tracking-[0.24em] text-volt">
                  {p.tag}
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-bone">
                  {p.name}
                </h3>
                <p className="mt-2 flex-1 font-sans text-sm text-bone-dim">
                  {p.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 font-sans text-xs uppercase tracking-[0.2em] text-bone-dim transition group-hover:text-volt">
                  Visitar <ArrowUpRight size={14} />
                </span>
              </a>
            </Reveal>
          ))}
          <Reveal delay={0.2}>
            <a
              href="#contato"
              className="grid h-full min-h-[220px] place-items-center rounded-2xl bg-volt p-7 text-center transition-transform hover:-translate-y-1"
            >
              <div>
                <p className="font-display text-3xl font-bold text-ink">
                  Seu projeto aqui.
                </p>
                <p className="mt-2 font-sans text-sm text-ink/70">
                  Fale com a Zinbox e tire a ideia do papel.
                </p>
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
