import { motion } from 'motion/react'
import { ArrowRight, Sparkles, MessageSquare } from 'lucide-react'
import heroImg from '../assets/images/ogun-cutlass.jpg'

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden pt-32"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt=""
          aria-hidden="true"
          className="mask-fade h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/60 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/40 to-transparent" />
      </div>

      <div className="absolute right-6 top-24 z-10 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="rotate-3 border border-brass/40 bg-ink/70 px-5 py-4 backdrop-blur"
        >
          <p className="font-sans text-[10px] uppercase tracking-[0.32em] text-brass">
            Verificado
          </p>
          <p className="mt-1 font-display text-lg text-bone">@di_guimaraesss</p>
          <p className="mt-1 font-sans text-xs text-bone-dim">
            Instagram · perfil oficial
          </p>
        </motion.div>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex items-center gap-3 font-sans text-xs uppercase tracking-[0.4em] text-brass"
        >
          <span className="slash" />
          Sacerdote de Ògún · Òyó, Nigéria
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-6 max-w-4xl font-display text-5xl leading-[1.02] text-bone sm:text-6xl lg:text-[5.5rem]"
        >
          Vivência espiritual
          <br />
          <span className="italic text-iron">sem enrolação.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-8 max-w-2xl font-sans text-base leading-relaxed text-bone-dim sm:text-lg"
        >
          Sou <strong className="text-bone">Diego Guimarães</strong> — Ode
          Ògúnrogba. Fui iniciado em 2018 no culto familiar de Ògún em Òyó,
          Nigéria. Cultivo Ògún, Osoosi, Egbe Orun e os Egungun ao lado da
          minha esposa e dos meus filhos. Só Obi como oráculo. A tradição
          como ela é.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contato"
            className="group inline-flex items-center gap-3 bg-iron px-7 py-4 font-sans text-xs uppercase tracking-[0.28em] text-bone transition hover:bg-laterite"
          >
            Quero conhecer o caminho
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center gap-3 border border-brass/40 px-7 py-4 font-sans text-xs uppercase tracking-[0.28em] text-brass transition hover:border-iron hover:text-iron"
          >
            <Sparkles size={14} /> O que faço
          </a>
          <a
            href="https://instagram.com/di_guimaraesss"
            target="_blank"
            rel="noreferrer noopener"
            className="ml-2 inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.22em] text-bone-dim transition hover:text-bone"
          >
            <MessageSquare size={14} /> @di_guimaraesss
          </a>
        </motion.div>

        <div className="mt-16 grid max-w-3xl grid-cols-2 gap-6 border-t border-line pt-8 sm:grid-cols-4">
          {[
            ['2018', 'Iniciação em Òyó'],
            ['Egbe Orun', 'Caminho principal'],
            ['Obi', 'Único oráculo'],
            ['Família', 'Ògún em casa'],
          ].map(([k, v]) => (
            <div key={k}>
              <p className="font-display text-2xl text-bone">{k}</p>
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
