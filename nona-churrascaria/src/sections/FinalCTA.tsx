import { Navigation, Phone } from 'lucide-react'
import {
  DIRECTIONS_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
} from '../data/content'
import { Reveal } from '../components/Reveal'

export function FinalCTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
      <Reveal className="overflow-hidden rounded-[2rem] bg-ember-900 px-6 py-14 text-center ring-1 ring-line md:px-16 md:py-20">
        <p className="eyebrow text-honey">Bateu a fome na Dutra?</p>
        <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl leading-tight text-cream md:text-6xl">
          Entre na Nona e coma{' '}
          <span className="italic text-flame">como em casa</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl font-sans leading-relaxed text-cream-dim">
          KM 71 da Dutra em Aparecida · Self-service, por quilo e churrasco ·
          Ônibus e vans bem-vindos.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-flame px-8 py-4 font-sans text-sm uppercase tracking-[0.18em] text-white transition hover:bg-flame-deep sm:w-auto"
          >
            <Navigation size={16} />
            Ver localização
          </a>
          <a
            href={PHONE_HREF}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-cream/30 px-8 py-4 font-sans text-sm uppercase tracking-[0.18em] text-cream transition hover:border-flame hover:text-flame sm:w-auto"
          >
            <Phone size={16} />
            {PHONE_DISPLAY}
          </a>
        </div>
      </Reveal>
    </section>
  )
}
