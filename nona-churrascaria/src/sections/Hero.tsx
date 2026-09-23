import { motion } from 'motion/react'
import { MapPin, Navigation, Phone, Star } from 'lucide-react'
import { DIRECTIONS_URL, PHONE_HREF } from '../data/content'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(224,83,31,0.18),transparent_70%)]"
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="eyebrow text-honey">
            Dutra · KM 71 · Aparecida/SP · Café da madrugada
          </p>
          <h1 className="mt-5 font-display text-5xl leading-[1.05] text-cream md:text-7xl">
            Churrascaria da Nona
            <span className="block italic text-flame">
              Parada obrigatória na Dutra
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl font-sans text-lg text-cream-dim">
            Self-service, por quilo e churrasco · Atendemos ônibus e vans ·
            Comida de verdade para viajantes, romeiros e famílias.
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 font-sans text-sm text-cream-dim">
            <Star size={15} className="fill-gold text-gold" />
            <span>
              <strong className="text-cream">4,2 no Google</strong> · mais de
              3.400 avaliações
            </span>
          </div>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-flame px-8 py-4 font-sans text-sm uppercase tracking-[0.18em] text-white shadow-glow transition hover:bg-flame-deep sm:w-auto"
            >
              <Navigation size={16} />
              Como chegar
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-cream/30 px-8 py-4 font-sans text-sm uppercase tracking-[0.18em] text-cream transition hover:border-flame hover:text-flame sm:w-auto"
            >
              <Phone size={16} />
              Ligar agora
            </a>
          </div>
          <p className="mt-4 inline-flex items-center gap-1.5 font-sans text-xs uppercase tracking-[0.2em] text-cream-dim">
            <MapPin size={14} className="text-flame" />
            Travessa Luiz Butignon, 84 · Santa Luzia · Aparecida/SP
          </p>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-4">
          {[
            ['4,2★', 'Nota no Google'],
            ['3.400+', 'Avaliações'],
            ['KM 71', 'Dutra · Sentido Rio'],
            ['06h–22h', 'Seg a Sex'],
          ].map(([n, label]) => (
            <div
              key={label}
              className="rounded-2xl border border-line bg-ember-900/70 px-4 py-5 text-center"
            >
              <p className="font-display text-3xl text-honey">{n}</p>
              <p className="mt-1 font-sans text-xs uppercase tracking-[0.18em] text-cream-dim">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
