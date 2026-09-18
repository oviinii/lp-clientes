import { motion } from 'motion/react'
import { Send, ExternalLink, MessageSquare } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-ink-2">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left"
          >
            <a href="#top" className="font-display text-2xl tracking-wide text-bone" aria-label="Ògúnrogba — início">
              Ògún<span className="text-iron">rogba</span>
            </a>
            <p className="font-sans text-sm text-bone-dim">
              Diego Guimarães — Ode Ògúnrogba. Sacerdote de Ògún iniciado em
              Òyó, Nigéria. Culto familiar, Egbe Orun, Egungun. Vivência
              espiritual sem enrolação.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/di_guimaraesss"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 font-sans text-xs uppercase tracking-[0.22em] text-bone-dim transition hover:text-bone"
              >
                <MessageSquare size={14} />
                @di_guimaraesss
                <ExternalLink size={12} />
              </a>
              <a
                href="https://wa.me/55119xxxxxxx"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 font-sans text-xs uppercase tracking-[0.22em] text-bone-dim transition hover:text-moss"
              >
                <Send size={14} />
                WhatsApp
                <ExternalLink size={12} />
              </a>
            </div>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 lg:justify-end"
          >
            <a href="#sobre" className="font-sans text-sm uppercase tracking-[0.18em] text-bone-dim hover:text-bone">Sobre</a>
            <a href="#caminho" className="font-sans text-sm uppercase tracking-[0.18em] text-bone-dim hover:text-bone">O Caminho</a>
            <a href="#servicos" className="font-sans text-sm uppercase tracking-[0.18em] text-bone-dim hover:text-bone">Serviços</a>
            <a href="#egbe" className="font-sans text-sm uppercase tracking-[0.18em] text-bone-dim hover:text-bone">Egbe Orun</a>
            <a href="#contato" className="font-sans text-sm uppercase tracking-[0.18em] text-bone-dim hover:text-bone">Contato</a>
          </motion.nav>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-center lg:flex-row"
        >
          <p className="font-sans text-xs text-bone-dim">
            © {currentYear} Ògúnrogba. Todos os direitos reservados.
          </p>
          <p className="font-sans text-xs text-bone-dim">
            Feito com respeito à tradição.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}