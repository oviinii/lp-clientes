import { Menu, X } from 'lucide-react'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { WHATSAPP_URL } from '../data/content'

const links = [
  { href: '#sobre', label: 'Quem somos' },
  { href: '#beneficios', label: 'Benefícios' },
  { href: '#passos', label: 'Passos' },
  { href: '#contato', label: 'Contato' },
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
          ? 'border-b border-line bg-ink-3/85 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-10">
        <a href="#top" aria-label="Kbza Marketing de Resultado — início">
          <img src={logo} alt="Kbza" className="h-10 w-auto" />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative font-sans text-sm uppercase tracking-[0.18em] text-bone-dim transition-colors hover:text-bone"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-leaf transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer noopener"
          className="hidden rounded-full bg-leaf px-5 py-2 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-ink-3 transition hover:bg-lime md:inline-flex"
        >
          Quero saber mais
        </a>

        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="text-bone md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-line bg-ink-3/95 backdrop-blur md:hidden"
        >
          <ul className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line py-3 font-sans text-sm uppercase tracking-[0.18em] text-bone-dim hover:text-bone"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer noopener"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex w-full justify-center rounded-full bg-leaf px-5 py-3 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-ink-3"
              >
                Quero saber mais
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  )
}
