import { motion } from 'motion/react'
import { ArrowRight, BadgeCheck, Sparkles } from 'lucide-react'
import { INSTAGRAM_URL, WHATSAPP_URL } from '../data/content'

export function Hero() {
  return (
    <section
      id="top"
      className="adire-dots relative isolate flex min-h-[100svh] items-end overflow-hidden pt-32"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_85%_-10%,rgba(201,162,75,0.28),transparent_60%),radial-gradient(700px_500px_at_-10%_20%,rgba(180,85,45,0.22),transparent_60%),linear-gradient(180deg,#143426_0%,#0e241a_60%,#0b1e15_100%)]" />
        <div className="absolute -right-24 top-16 hidden h-[480px] w-[480px] rounded-full border border-brass/25 lg:grid lg:place-items-center">
          <div className="grid h-[360px] w-[360px] place-items-center rounded-full border border-brass/20">
            <p className="p-8 text-center font-display text-sm italic leading-relaxed text-brass/50">
              Òpẹ̀lẹ̀ · Ikin
              <br />
              Odù · Ẹbọ
              <br />
              Ìwà Pẹ̀lẹ́
            </p>
          </div>
        </div>
      </div>

      <div className="absolute right-6 top-24 z-10 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="rotate-3 border border-brass/40 bg-ink/70 px-5 py-4 backdrop-blur"
        >
          <p className="flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.32em] text-brass">
            <BadgeCheck size={14} /> Verificado
          </p>
          <p className="mt-1 font-display text-lg text-bone">
            @obabalawoifakorede
          </p>
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
          Ifá · Ìṣẹ̀ṣe Lágba — Minas Gerais
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-6 max-w-4xl font-display text-5xl leading-[1.02] text-bone sm:text-6xl lg:text-[5.5rem]"
        >
          Bàbáláwo Ifákọ́rẹ̀dé
          <br />
          <span className="italic text-goldsoft">
            orientação com tradição e caráter.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-8 max-w-2xl font-sans text-base leading-relaxed text-bone-dim sm:text-lg"
        >
          Sacerdote de Ifá da tradição <strong className="text-bone">Ìṣẹ̀ṣe</strong>,
          filho do Oluwo Ifátokun e da Iyanifá Ifádará — linhagem{' '}
          <strong className="text-bone">Ọ̀ffẹ́ Òrúnmìlà</strong>. Consultas, ẹbọ e
          ensino no <strong className="text-bone">Ìjọ Ifádọlá</strong>. Sem magia
          rápida, sem barganha.
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
            className="group inline-flex items-center gap-3 bg-brass px-7 py-4 font-sans text-xs uppercase tracking-[0.28em] text-ink transition hover:bg-goldsoft"
          >
            Agendar consulta de Ifá
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#linhagem"
            className="inline-flex items-center gap-3 border border-brass/40 px-7 py-4 font-sans text-xs uppercase tracking-[0.28em] text-brass transition hover:border-goldsoft hover:text-goldsoft"
          >
            <Sparkles size={14} /> Conhecer a linhagem
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="ml-2 inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.22em] text-bone-dim transition hover:text-bone"
          >
            @obabalawoifakorede
          </a>
        </motion.div>

        <div className="mt-16 grid max-w-3xl grid-cols-2 gap-6 border-t border-line pt-8 sm:grid-cols-4">
          {[
            ['Ìṣẹ̀ṣe', 'Culto tradicional iorubá'],
            ['Ọ̀ffẹ́', 'Família Ọ̀ffẹ́ Òrúnmìlà'],
            ['Ìwà Pẹ̀lẹ́', 'Caráter acima do ritual'],
            ['MG · BR', 'Ìjọ Ifádọlá — CTY'],
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
