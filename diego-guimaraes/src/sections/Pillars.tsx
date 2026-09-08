import { motion } from 'motion/react'
import { pillars } from '../data/trajectory'
import { Check } from 'lucide-react'

export function Pillars() {
  return (
    <section
      id="caminho"
      className="relative border-y border-line bg-ink-2 py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-3"
        >
          <p className="flex items-center gap-3 font-sans text-xs uppercase tracking-[0.4em] text-brass">
            <span className="slash" /> O que me diferencia
          </p>
          <h2 className="max-w-3xl font-display text-4xl leading-tight text-bone sm:text-5xl">
            Não é Candomblé genérico.
            <br />
            <span className="italic text-iron">Não é Ifá.</span>
          </h2>
          <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-bone-dim">
            É o culto familiar de Ògún, preservado na Nigéria, na linhagem que
            atende ao Ògún do Alaafin de Òyó. Vivo isso em casa, com a minha
            família.
          </p>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="mt-16 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4"
        >
          {pillars.map((p) => (
            <motion.li
              key={p.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="group relative bg-ink-2 p-8 transition hover:bg-ink-3"
            >
              <span className="absolute right-6 top-6 text-brass transition group-hover:text-iron">
                <Check size={18} strokeWidth={1.5} />
              </span>
              <p className="font-sans text-xs uppercase tracking-[0.3em] text-iron">
                {String(pillars.indexOf(p) + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-4 font-display text-2xl text-bone">
                {p.title}
              </h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-bone-dim">
                {p.text}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
