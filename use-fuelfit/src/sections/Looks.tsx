import { ArrowRight } from 'lucide-react'
import { INSTAGRAM_URL, LOOKS } from '../data/content'
import { Reveal } from '../components/Reveal'

export function Looks() {
  return (
    <section id="looks" className="overflow-hidden py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <p className="eyebrow text-mocha">Galeria de looks</p>
            <h2 className="mt-3 font-display text-5xl text-cocoa md:text-6xl">
              Arraste para{' '}
              <span className="italic text-mocha">desejar</span>
            </h2>
          </div>
          <p className="flex items-center gap-2 font-sans text-sm uppercase tracking-[0.2em] text-cocoa-dim">
            Arraste <ArrowRight size={16} />
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-2 lg:px-[max(1.5rem,calc((100vw-80rem)/2+2.5rem))]">
          {LOOKS.map((look, i) => (
            <figure
              key={look.src}
              className="group w-60 shrink-0 snap-start overflow-hidden rounded-b-3xl rounded-t-[7rem] bg-card shadow-lift ring-1 ring-line md:w-72"
            >
              <div className="overflow-hidden rounded-b-3xl rounded-t-[7rem]">
                <img
                  src={look.src}
                  alt={look.alt}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <figcaption className="flex items-center justify-between px-5 py-4">
                <span className="font-sans text-sm font-medium text-cocoa">
                  {look.label}
                </span>
                <span className="font-display text-lg italic text-mocha">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </figcaption>
            </figure>
          ))}

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="flex w-60 shrink-0 snap-start flex-col items-center justify-center gap-3 rounded-b-3xl rounded-t-[7rem] bg-cocoa px-6 text-center text-cream transition hover:bg-mocha-deep md:w-72"
          >
            <span className="font-display text-2xl italic">
              Ver looks reais
            </span>
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-cream/70">
              @usefuelfit →
            </span>
          </a>
        </div>
      </Reveal>

      <p className="mx-auto mt-6 max-w-7xl px-6 font-sans text-xs text-cocoa-dim lg:px-10">
        Fotos ilustrativas — as fotos oficiais da marca entram aqui assim que
        o material em alta for enviado.
      </p>
    </section>
  )
}
