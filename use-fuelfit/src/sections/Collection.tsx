import { ArrowUpRight } from 'lucide-react'
import { COLLECTIONS, INSTAGRAM_URL } from '../data/content'
import { Reveal } from '../components/Reveal'

export function Collection() {
  const [mocha, black] = COLLECTIONS

  return (
    <section id="colecao" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <Reveal className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-xl">
          <p className="eyebrow text-mocha">Coleção em destaque</p>
          <h2 className="mt-3 font-display text-5xl leading-[1.02] text-cocoa md:text-6xl">
            Tons quentes,{' '}
            <span className="italic text-mocha">atitude quente</span>
          </h2>
        </div>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-1 font-sans text-sm uppercase tracking-[0.2em] text-cocoa transition hover:text-mocha"
        >
          Ver tudo no Instagram
          <ArrowUpRight
            size={16}
            className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </Reveal>

      <div className="mt-10 grid gap-5 lg:grid-cols-5">
        <Reveal className="lg:col-span-3" delay={0.05}>
          <article className="spotlight flex h-full flex-col overflow-hidden rounded-[2rem] bg-card shadow-lift ring-1 ring-line">
            <img
              src="/images/mocha.jpg"
              alt="Mocha Collection — tons quentes para treinar com elegância"
              loading="lazy"
              className="aspect-[16/9] w-full object-cover"
            />
            <div className="flex flex-1 flex-col p-8 md:p-10">
              <p className="eyebrow text-mocha">{mocha.tag}</p>
              <h3 className="mt-3 font-display text-4xl text-cocoa">
                {mocha.title}
              </h3>
              <p className="mt-3 max-w-lg font-sans leading-relaxed text-cocoa-2">
                {mocha.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {mocha.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-oat-2 px-4 py-1.5 font-sans text-sm text-cocoa-2"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </Reveal>

        <div className="flex flex-col gap-5 lg:col-span-2">
          <Reveal delay={0.12} className="flex-1">
            <article className="spotlight flex h-full flex-col justify-between rounded-[2rem] bg-cocoa p-8 text-cream md:p-10">
              <div>
                <p className="eyebrow text-caramel">{black.tag}</p>
                <h3 className="mt-3 font-display text-4xl">{black.title}</h3>
                <p className="mt-3 font-sans leading-relaxed text-cream/75">
                  {black.description}
                </p>
              </div>
              <ul className="mt-6 space-y-2">
                {black.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 font-sans text-sm text-cream/85"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-caramel" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
          <Reveal delay={0.18}>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-[2rem] bg-gradient-to-r from-mocha-deep to-caramel p-8 text-white transition hover:brightness-110"
            >
              <div>
                <p className="font-display text-2xl italic">
                  Drops limitados
                </p>
                <p className="mt-1 font-sans text-sm text-white/85">
                  Garanta seu tamanho no Direct
                </p>
              </div>
              <ArrowUpRight
                size={28}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
