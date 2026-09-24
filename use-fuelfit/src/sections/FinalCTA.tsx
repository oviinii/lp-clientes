import { AtSign } from 'lucide-react'
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from '../data/content'
import { Reveal } from '../components/Reveal'

export function FinalCTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
      <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-cocoa px-6 py-16 text-center text-cream md:px-16 md:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-mocha/40 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-caramel/30 blur-3xl"
        />
        <p className="eyebrow relative text-caramel">
          A rotina inspira · O movimento transforma
        </p>
        <h2 className="relative mx-auto mt-4 max-w-3xl font-display text-5xl leading-[1.02] md:text-7xl">
          Elegância que acompanha{' '}
          <span className="italic text-caramel">cada movimento</span>
        </h2>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="btn-shimmer relative mt-9 inline-flex items-center gap-2 rounded-full px-9 py-4 font-sans text-sm uppercase tracking-[0.18em] text-white"
        >
          <AtSign size={16} />
          Comprar em {INSTAGRAM_HANDLE}
        </a>
        <p className="relative mt-5 font-sans text-xs uppercase tracking-[0.24em] text-cream/60">
          Drops limitados · Garanta seu tamanho no Direct
        </p>
      </Reveal>
    </section>
  )
}
