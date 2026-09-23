import { Menu, Phone, X } from 'lucide-react'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { PHONE_HREF } from '../data/content'

const links = [
  { href: '#sobre', label: 'A Nona' },
  { href: '#cardapio', label: 'Cardápio' },
  { href: '#visita', label: 'Horários' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#faq', label: 'Dúvidas' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? 'border-b border-line bg-ember-950/90 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a
          href="#top"
          className="font-display text-xl tracking-wide text-cream"
          aria-label="Churrascaria da Nona — início"
        >
          da <span className="italic text-flame">Nona</span>
          <span className="ml-3 hidden font-sans text-xs uppercase tracking-[0.3em] text-cream-dim sm:inline">
            Aparecida · KM 71
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative font-sans text-sm uppercase tracking-[0.18em] text-cream-dim transition-colors hover:text-cream"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-flame transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href={PHONE_HREF}
          className="hidden items-center gap-2 rounded-full bg-flame px-5 py-2 font-sans text-xs uppercase tracking-[0.22em] text-white transition hover:bg-flame-deep md:inline-flex"
        >
          <Phone size={14} />
          Ligar agora
        </a>

        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="text-cream md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-line bg-ember-950/95 backdrop-blur md:hidden"
        >
          <ul className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line py-3 font-sans text-sm uppercase tracking-[0.18em] text-cream-dim hover:text-cream"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={PHONE_HREF}
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-flame px-5 py-3 font-sans text-xs uppercase tracking-[0.22em] text-white"
              >
                <Phone size={14} />
                Ligar agora
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  )
}
