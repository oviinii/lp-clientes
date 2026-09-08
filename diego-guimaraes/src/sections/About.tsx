import { motion } from 'motion/react'
import { trajectory } from '../data/trajectory'

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export function About() {
  return (
    <section
      id="sobre"
      className="relative bg-ink py-28 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={reveal}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-3"
        >
          <p className="flex items-center gap-3 font-sans text-xs uppercase tracking-[0.4em] text-brass">
            <span className="slash" />
            Quem está por trás
          </p>
          <h2 className="max-w-3xl font-display text-4xl leading-tight text-bone sm:text-5xl lg:text-6xl">
            Filho de casa, caminhante de{' '}
            <span className="italic text-iron">Òyó</span>.
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
            className="space-y-5 font-sans text-lg leading-relaxed text-bone-dim"
          >
            <motion.p variants={reveal} transition={{ duration: 0.6 }}>
              Nasci em família candomblecista. Meu pai e minha mãe eram
              iniciados para Orixá — meu pai carnal, para Ògún. Quando eles se
              foram, me afastei do culto. Vieram anos de aperto material, de
              saúde ruim, de solidão.
            </motion.p>
            <motion.p variants={reveal} transition={{ duration: 0.6 }}>
              O caminho voltou por outras mãos: as do meu padrinho,
              iniciado para Osun por Waldomiro Baiano, e de uma{' '}
              <em className="text-bone">iyá Nanga</em> de Oyá. Foi ela quem me
              abriu a ideia de buscar a fonte — não a casa de axé brasileira,
              não o Ifá como rota principal. O{' '}
              <strong className="text-bone">culto familiar</strong>.
            </motion.p>
            <motion.p variants={reveal} transition={{ duration: 0.6 }}>
              Em 2018 atravessei o oceano. Fui iniciado em Òyó, na Nigéria,
              na família que serve ao Ògún do Alaafin. Recebi o nome iniciático{' '}
              <strong className="text-bone">Ode Ògúnrogba</strong>, entrei para
              Egbe Orun, e voltei com a missão de cultivar Ògún, Osoosi e os
              Egungun em casa, com a minha esposa e os meus filhos.
            </motion.p>
            <motion.p variants={reveal} transition={{ duration: 0.6 }}>
              Hoje eu uso apenas o{' '}
              <strong className="text-bone">Obi</strong> como oráculo.
              É a boca do Orixá — não precisa de mais.
            </motion.p>
          </motion.div>

          <ol className="relative border-l border-line pl-8">
            {trajectory.map((item, i) => (
              <motion.li
                key={item.year}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative pb-10 last:pb-0"
              >
                <span className="absolute -left-[37px] top-1.5 h-3 w-3 rotate-45 border border-iron bg-ink" />
                <p className="font-sans text-xs uppercase tracking-[0.28em] text-iron">
                  {item.year}
                </p>
                <h3 className="mt-2 font-display text-2xl text-bone">
                  {item.title}
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-bone-dim">
                  {item.text}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
