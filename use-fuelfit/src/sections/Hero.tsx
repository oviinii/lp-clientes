import { motion } from 'motion/react'
import { AtSign, Flame } from 'lucide-react'
import { INSTAGRAM_URL } from '../data/content'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-caramel/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-mocha/20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow text-mocha">
            Moda fitness feminina · Mocha Collection
          </p>
          <h1 className="mt-5 font-display text-6xl leading-[0.98] text-cocoa md:text-8xl">
            Vista-se com{' '}
            <span className="italic text-mocha">confiança</span>
          </h1>
          <p className="mt-6 max-w-md font-sans text-lg leading-relaxed text-cocoa-2">
            Performance, conforto e estilo em cada movimento — peças criadas
            para mulheres que treinam, vivem e se movem.
          </p>
          <div className="mt-4 flex items-center gap-2 font-sans text-sm text-cocoa-2">
            <Flame size={15} className="text-mocha" />
            <span>Coleção Mocha disponível · Peças limitadas por drop</span>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-shimmer inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-sans text-sm uppercase tracking-[0.18em] text-white shadow-lift"
            >
              <AtSign size={16} />
              Ver coleção Mocha
            </a>
            <a
              href="#looks"
              className="inline-flex items-center justify-center rounded-full border border-cocoa/25 px-8 py-4 font-sans text-sm uppercase tracking-[0.18em] text-cocoa transition hover:border-mocha hover:text-mocha"
            >
              Galeria de looks
            </a>
          </div>
          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-line pt-6">
            {[
              ['20–40', 'público feminino'],
              ['Treino +', 'dia a dia'],
              ['5,0★', 'desejo real'],
            ].map(([n, label]) => (
              <div key={label}>
                <dt className="font-display text-3xl text-mocha">{n}</dt>
                <dd className="mt-1 font-sans text-xs uppercase tracking-[0.16em] text-cocoa-dim">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="overflow-hidden rounded-b-[2rem] rounded-t-[12rem] shadow-lift ring-1 ring-line">
            <img
              src="/images/hero-main.jpg"
              alt="Modelo treinando com conjunto fitness — Fuel Fit"
              className="aspect-[3/4] w-full object-cover"
            />
          </div>
          <motion.img
            src="/images/hero-sec.jpg"
            alt="Detalhe de treino com peça Fuel Fit"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-6 bottom-10 w-36 rounded-2xl object-cover shadow-lift ring-4 ring-oat md:-left-12 md:w-44"
          />
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -right-3 top-16 rounded-2xl bg-card px-5 py-4 shadow-lift ring-1 ring-line md:-right-8"
          >
            <p className="font-display text-2xl italic text-mocha">Mocha</p>
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-cocoa-dim">
              Collection · Novo drop
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
