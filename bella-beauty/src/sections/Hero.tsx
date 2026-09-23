import { motion } from 'motion/react'
import { MapPin, Star } from 'lucide-react'
import { WA } from '../data/content'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(168,87,81,0.14),transparent_70%)]"
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="eyebrow text-rose">
            ✦ Avaliação de design grátis no WhatsApp
          </p>
          <h1 className="mt-5 font-display text-5xl leading-[1.05] text-ink md:text-7xl">
            Sobrancelhas Tatuapé
            <span className="block italic text-rose">Bella Beauty</span>
          </h1>
          <p className="mt-5 font-sans text-lg text-ink-2">
            Design · Brow Lamination · Cílios · Lash Lifting · Lábios
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-sans text-sm text-ink-2">
            <span className="inline-flex items-center gap-1">
              <Star size={15} className="fill-gold text-gold" />
              <strong>5,0 no Google</strong> · Avaliações reais
            </span>
            <span className="inline-flex items-center gap-1">
              <MapPin size={15} className="text-rose" />
              Edifício Platina · a 5 min do Metrô
            </span>
          </div>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={WA.avaliacao}
              target="_blank"
              rel="noreferrer"
              className="w-full rounded-full bg-rose px-8 py-4 font-sans text-sm uppercase tracking-[0.18em] text-white shadow-soft transition hover:bg-rose-deep sm:w-auto"
            >
              Quero minha avaliação grátis
            </a>
            <a
              href="#servicos"
              className="w-full rounded-full border border-ink/25 px-8 py-4 font-sans text-sm uppercase tracking-[0.18em] text-ink transition hover:border-rose hover:text-rose sm:w-auto"
            >
              Ver serviços
            </a>
          </div>
          <p className="mt-4 font-sans text-xs uppercase tracking-[0.2em] text-ink-dim">
            Atendendo agora · Responde em minutos · Sem compromisso
          </p>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-4">
          {[
            ['5,0', 'Nota no Google'],
            ['500+', 'Clientes satisfeitas'],
            ['5', 'Anos de expertise'],
            ['9h–21h', 'Aberto todo dia'],
          ].map(([n, label]) => (
            <div
              key={label}
              className="rounded-2xl border border-line bg-white/60 px-4 py-5 text-center"
            >
              <p className="font-display text-3xl text-rose">{n}</p>
              <p className="mt-1 font-sans text-xs uppercase tracking-[0.18em] text-ink-dim">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
