import { Flame } from 'lucide-react'
import { MENU, PHONE_HREF } from '../data/content'
import { Reveal } from '../components/Reveal'

export function Menu() {
  return (
    <section
      id="cardapio"
      className="border-y border-line bg-ember-900/50"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-honey">Cardápio · O que oferecemos</p>
          <h2 className="mt-3 font-display text-4xl text-cream md:text-5xl">
            Da madrugada ao jantar
          </h2>
          <p className="mt-4 font-sans text-cream-dim">
            Cardápio e preços do dia? Ligue e confirme antes de sair de casa.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {MENU.map((dish, i) => (
            <Reveal key={dish.title} delay={Math.min(i * 0.06, 0.24)}>
              <article className="flex h-full flex-col rounded-3xl border border-line bg-ember-950/70 p-7 md:p-9">
                <p className="flex items-center gap-2 font-sans text-xs uppercase tracking-[0.24em] text-flame">
                  <Flame size={14} />
                  {dish.title}
                </p>
                <p className="mt-3 font-sans text-[15px] leading-relaxed text-cream-dim">
                  {dish.description}
                </p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {dish.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 font-sans text-sm text-cream"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-honey" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 text-center">
          <a
            href={PHONE_HREF}
            className="inline-flex rounded-full bg-flame px-8 py-4 font-sans text-sm uppercase tracking-[0.18em] text-white transition hover:bg-flame-deep"
          >
            Confirmar cardápio do dia
          </a>
        </Reveal>
      </div>
    </section>
  )
}
