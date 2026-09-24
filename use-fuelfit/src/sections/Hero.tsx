import { motion } from 'motion/react'
import { Flame, AtSign } from 'lucide-react'
import { INSTAGRAM_URL, MANTRAS } from '../data/content'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(201,141,84,0.16),transparent_70%)]"
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="eyebrow text-caramel">
            Moda fitness feminina · Mocha Collection
          </p>
          <h1 className="mt-5 font-display text-5xl leading-[1.05] text-cream md:text-7xl">
            Performance, conforto e estilo
            <span className="block italic text-caramel">em cada movimento</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl font-sans text-lg text-cream-dim">
            Moda fitness feminina criada para mulheres que se movem com
            confiança — do treino à rotina, elegância que acompanha você.
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 font-sans text-sm text-cream-dim">
            <Flame size={15} className="text-caramel" />
            <span>Coleção Mocha disponível · Peças limitadas por drop</span>
          </div>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-cream px-8 py-4 font-sans text-sm uppercase tracking-[0.18em] text-cocoa-950 shadow-glow transition hover:bg-caramel hover:text-white sm:w-auto"
            >
              <AtSign size={16} />
              Ver coleção Mocha
            </a>
            <a
              href="#porque"
              className="w-full rounded-full border border-cream/30 px-8 py-4 font-sans text-sm uppercase tracking-[0.18em] text-cream transition hover:border-caramel hover:text-caramel sm:w-auto"
            >
              Por que Fuel Fit
            </a>
          </div>
        </motion.div>

        <div className="mx-auto mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-2.5">
          {MANTRAS.map((m) => (
            <span
              key={m}
              className="rounded-full border border-line bg-cocoa-900/70 px-4 py-2 font-sans text-xs uppercase tracking-[0.16em] text-cream-dim"
            >
              {m}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
