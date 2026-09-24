import { AtSign } from 'lucide-react'
import { INSTAGRAM_URL, LOOKS } from '../data/content'
import { Reveal } from '../components/Reveal'

export function Looks() {
  return (
    <section id="looks" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <Reveal className="max-w-2xl">
        <p className="eyebrow text-caramel">Galeria de looks</p>
        <h2 className="mt-3 font-display text-4xl text-cream md:text-5xl">
          As peças vendem pelo visual
        </h2>
        <p className="mt-4 font-sans text-cream-dim">
          Uma prévia dos looks mais desejados — as fotos oficiais entram aqui
          assim que a marca enviar o material em alta.
        </p>
      </Reveal>

      <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
        {LOOKS.map((label, i) => (
          <Reveal key={label} delay={Math.min(i * 0.05, 0.25)}>
            <figure className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-br from-cocoa-800 via-mocha-deep to-caramel">
              <div
                aria-hidden
                className="absolute inset-0 opacity-40 bg-[radial-gradient(80%_60%_at_50%_20%,rgba(243,235,224,0.35),transparent_70%)]"
              />
              <span className="absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 font-display text-lg italic text-cream">
                {String(i + 1).padStart(2, '0')}
              </span>
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-10 font-sans text-sm font-medium text-white">
                {label}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8 text-center">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-cream px-8 py-4 font-sans text-sm uppercase tracking-[0.18em] text-cocoa-950 transition hover:bg-caramel hover:text-white"
        >
          <AtSign size={16} />
          Ver looks reais no AtSign
        </a>
      </Reveal>
    </section>
  )
}
