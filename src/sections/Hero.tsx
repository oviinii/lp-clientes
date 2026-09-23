import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { WHATSAPP_URL } from '../data/content'

export function Hero() {
  return (
    <section
      id="top"
      className="grid-bg relative isolate flex min-h-[100svh] items-end overflow-hidden pt-32"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(800px_420px_at_80%_0%,rgba(212,255,63,0.12),transparent_60%),radial-gradient(700px_500px_at_10%_30%,rgba(124,92,255,0.14),transparent_60%),linear-gradient(180deg,#0e0e16_0%,#08080d_70%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex items-center gap-3 font-sans text-xs uppercase tracking-[0.4em] text-volt"
        >
          <span className="slash" />
          Agência digital — software · sites · LPs
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[1.02] tracking-tight text-bone sm:text-6xl lg:text-[5.5rem]"
        >
          Sua ideia vira software,
          <br />
          <span className="text-volt">site e venda.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-8 max-w-2xl font-sans text-base leading-relaxed text-bone-dim sm:text-lg"
        >
          A <strong className="text-bone">Zinbox</strong> constrói landing pages,
          sites institucionais e sistemas sob medida — do briefing ao deploy,
          com design exclusivo e performance obsessiva.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex items-center gap-3 rounded-full bg-volt px-7 py-4 font-sans text-xs font-semibold uppercase tracking-[0.28em] text-ink transition hover:bg-bone"
          >
            Pedir orçamento
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#projetos"
            className="inline-flex items-center gap-3 rounded-full border border-line px-7 py-4 font-sans text-xs uppercase tracking-[0.28em] text-bone-dim transition hover:border-volt hover:text-volt"
          >
            Ver projetos
          </a>
        </motion.div>

        <div className="mt-16 grid max-w-3xl grid-cols-2 gap-6 border-t border-line pt-8 sm:grid-cols-4">
          {[
            ['LPs', 'Alta conversão'],
            ['Sites', 'Presença profissional'],
            ['Sistemas', 'Software sob medida'],
            ['Suporte', 'Evolução contínua'],
          ].map(([k, v]) => (
            <div key={k}>
              <p className="font-display text-2xl font-semibold text-bone">{k}</p>
              <p className="mt-1 font-sans text-[11px] uppercase tracking-[0.22em] text-bone-dim">
                {v}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
