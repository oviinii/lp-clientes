import { motion } from 'motion/react'
import { ArrowRight, MessageCircle } from 'lucide-react'
import heroImg from '../assets/hero-sala-de-aula.jpg'
import { WHATSAPP_URL } from '../data/content'

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden pt-28"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-3/80 via-ink-3/70 to-ink-3" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-3 via-ink-3/50 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex items-center gap-3 font-sans text-xs uppercase tracking-[0.4em] text-leaf"
        >
          <span className="slash" />
          Desde 2016 · Marketing educacional
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-bone sm:text-6xl lg:text-[4.8rem]"
        >
          Dificuldades para fazer matrículas?{' '}
          <span className="text-lime">
            A Kbza é especialista em captação de alunos.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-8 max-w-2xl font-sans text-base leading-relaxed text-bone-dim sm:text-lg"
        >
          Ajudamos a criar um funil de matrículas,{' '}
          <strong className="text-bone">desde o marketing até a matrícula</strong>{' '}
          — para escolas, faculdades e cursos.
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
            className="group inline-flex items-center gap-3 rounded-full bg-leaf px-7 py-4 font-sans text-xs font-semibold uppercase tracking-[0.28em] text-ink-3 transition hover:bg-lime"
          >
            Quero saber mais
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.22em] text-bone-dim transition hover:text-bone"
          >
            <MessageCircle size={14} /> Falar no WhatsApp
          </a>
        </motion.div>

        <div className="mt-16 grid max-w-3xl grid-cols-2 gap-6 border-t border-line pt-8 sm:grid-cols-4">
          {[
            ['2016', 'Captando desde'],
            ['-40%', 'Custo por matrícula'],
            ['IA', 'Follow-up inteligente'],
            ['5+', 'Segmentos de ensino'],
          ].map(([k, v]) => (
            <div key={k}>
              <p className="font-display text-2xl font-bold text-bone">{k}</p>
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
