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
        {RESULTS.map((label, i) => (
          <Reveal key={label} delay={Math.min(i * 0.06, 0.3)}>
            <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-br from-blush via-cream-2 to-[#e4cdbd]">
              <div
                aria-hidden
                className="absolute inset-0 opacity-40 bg-[radial-gradient(80%_60%_at_50%_20%,rgba(168,87,81,0.35),transparent_70%)]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-4 pt-10">
                <p className="font-sans text-sm font-medium text-white">
                  {label}
                </p>
              </div>
            </div>
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
