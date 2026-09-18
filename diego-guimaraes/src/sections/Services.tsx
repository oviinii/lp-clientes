import { motion } from 'motion/react'
import { services } from '../data/services'
import { ServiceIcon } from '../components/ServiceIcon'
import { ArrowUpRight } from 'lucide-react'

export function Services() {
  return (
    <section id="servicos" className="bg-ink py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-3"
        >
          <p className="flex items-center gap-3 font-sans text-xs uppercase tracking-[0.4em] text-brass">
            <span className="slash" /> O que faço
          </p>
          <h2 className="max-w-3xl font-display text-4xl leading-tight text-bone sm:text-5xl">
            O que está à sua disposição{' '}
            <span className="italic text-iron">aqui</span>.
          </h2>
          <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-bone-dim">
            Atendimentos, orientações e eventos. Cada frente é conduzida dentro
            do rigor do culto familiar de Ògún em Òyó.
          </p>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="mt-16 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s) => (
            <motion.li
              key={s.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className={`group relative flex flex-col bg-ink p-8 transition hover:bg-ink-3 ${
                s.highlight ? 'lg:col-span-2 lg:row-span-1' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-11 w-11 items-center justify-center border border-brass/40 text-brass transition group-hover:border-iron group-hover:text-iron">
                  <ServiceIcon name={s.icon} />
                </span>
                {s.highlight && (
                  <span className="font-sans text-[10px] uppercase tracking-[0.32em] text-iron">
                    Mais procurado
                  </span>
                )}
              </div>

              <h3 className="mt-6 font-display text-2xl text-bone sm:text-3xl">
                {s.title}
              </h3>
              <p className="mt-2 font-display text-lg italic text-bone-dim">
                {s.short}
              </p>
              <p className="mt-4 font-sans text-sm leading-relaxed text-bone-dim">
                {s.description}
              </p>

              <a
                href="#contato"
                className="mt-6 inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.24em] text-brass transition group-hover:text-iron"
              >
                Saber mais <ArrowUpRight size={14} />
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
