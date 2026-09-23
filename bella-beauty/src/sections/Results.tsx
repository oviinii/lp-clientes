import { RESULTS, WA } from '../data/content'
import { Reveal } from '../components/Reveal'

export function Results() {
  return (
    <section id="galeria" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <Reveal className="max-w-2xl">
        <p className="eyebrow text-rose">Trabalhos reais</p>
        <h2 className="mt-3 font-display text-4xl text-ink md:text-5xl">
          Resultados das nossas clientes
        </h2>
        <p className="mt-4 font-sans text-ink-2">
          Sobrancelhas e cílios — fotos reais, sem filtro, no studio do
          Tatuapé.
        </p>
      </Reveal>

      <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
        {RESULTS.map((work, i) => (
          <Reveal key={work.src} delay={Math.min(i * 0.05, 0.3)}>
            <figure className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-blush">
              <img
                src={work.src}
                alt={work.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-4 pt-10 font-sans text-sm font-medium text-white">
                {work.label}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8 text-center">
        <a
          href={WA.galeria}
          target="_blank"
          rel="noreferrer"
          className="inline-flex rounded-full bg-ink px-8 py-4 font-sans text-sm uppercase tracking-[0.18em] text-cream transition hover:bg-rose"
        >
          Quero resultado assim →
        </a>
      </Reveal>
    </section>
  )
}
