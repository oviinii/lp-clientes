import { Check } from 'lucide-react'
import heroImg from '../assets/hero-sala-de-aula.jpg'
import { Reveal } from '../components/Reveal'
import { segments } from '../data/content'

export function About() {
  return (
    <section id="sobre" className="relative bg-bone py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-ink/10 shadow-xl">
            <img
              src={heroImg}
              alt="Sala de aula com estudantes e professor"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
        <div>
          <Reveal>
            <p className="font-sans text-xs uppercase tracking-[0.4em] text-leaf-deep">
              <span className="slash mr-3 inline-block align-middle" />
              Quem somos
            </p>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
              Especialistas em captação de alunos{' '}
              <span className="italic text-leaf-deep">desde 2016.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 font-sans text-base leading-relaxed text-ink/70">
              Trabalhamos funis de matrículas para escolas de idiomas, cursos
              técnicos, ensino regular, instituições de ensino superior e
              pós-graduações.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <ul className="mt-7 space-y-3">
              {segments.map((s) => (
                <li key={s} className="flex items-center gap-3 font-sans text-[15px] font-medium text-ink">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-leaf-deep/10">
                    <Check size={14} className="text-leaf-deep" />
                  </span>
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
