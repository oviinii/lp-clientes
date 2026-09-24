import { AtSign, Menu, X } from 'lucide-react'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { INSTAGRAM_URL } from '../data/content'

const links = [
  { href: '#colecao', label: 'Coleção' },
  { href: '#porque', label: 'Por que Fuel' },
  { href: '#looks', label: 'Looks' },
  { href: '#comprar', label: 'Como comprar' },
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
          ? 'border-b border-line bg-cocoa-950/90 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a
          href="#top"
          className="font-display text-xl tracking-wide text-cream"
          aria-label="Fuel Fit — início"
        >
          Fuel <span className="italic text-caramel">Fit</span>
          <span className="ml-3 hidden font-sans text-xs uppercase tracking-[0.3em] text-cream-dim sm:inline">
            Moda Fitness
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
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-caramel transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-full bg-cream px-5 py-2 font-sans text-xs uppercase tracking-[0.22em] text-cocoa-950 transition hover:bg-caramel hover:text-white md:inline-flex"
        >
          <AtSign size={14} />
          Ver coleção
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
          className="border-t border-line bg-cocoa-950/95 backdrop-blur md:hidden"
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
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-caramel px-5 py-3 font-sans text-xs uppercase tracking-[0.22em] text-white"
              >
                <AtSign size={14} />
                Ver coleção
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  )
}
