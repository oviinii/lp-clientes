import { AtSign } from 'lucide-react'
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from '../data/content'
import { Reveal } from '../components/Reveal'

export function FinalCTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
      <Reveal className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-mocha-deep via-cocoa-900 to-cocoa-950 px-6 py-14 text-center ring-1 ring-line md:px-16 md:py-20">
        <p className="eyebrow text-gold">A rotina inspira · O movimento transforma</p>
        <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl leading-tight text-cream md:text-6xl">
          Vista-se com conforto{' '}
          <span className="italic text-caramel">e personalidade</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl font-sans leading-relaxed text-cream-dim">
          Coleção Mocha disponível no AtSign — peças limitadas por drop.
          Garanta o seu look antes que esgote.
        </p>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-cream px-8 py-4 font-sans text-sm uppercase tracking-[0.18em] text-cocoa-950 transition hover:bg-caramel hover:text-white"
        >
          <AtSign size={16} />
          Comprar em {INSTAGRAM_HANDLE}
        </a>
      </Reveal>
    </section>
  )
}
