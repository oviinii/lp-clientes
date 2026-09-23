import { Menu, X } from 'lucide-react'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { WA } from '../data/content'
import type { Page } from '../App'

const anchorLinks = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#domicilio', label: 'Domicílio' },
  { href: '#faq', label: 'FAQ' },
]

export function Navbar({
  page,
  onNavigate,
}: {
  page: Page
  onNavigate: (p: Page) => void
}) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (p: Page) => {
    setOpen(false)
    onNavigate(p)
  }

  const pageBtn = (p: Page, label: string) => (
    <button
      key={p}
      type="button"
      onClick={() => go(p)}
      className={`relative font-sans text-[13px] uppercase tracking-[0.18em] transition-colors hover:text-rose ${
        page === p ? 'text-rose' : 'text-ink-2'
      }`}
    >
      {label}
      {page === p && (
        <span className="absolute -bottom-1 left-0 h-px w-full bg-rose" />
      )}
    </button>
  )

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? 'border-b border-line bg-cream/90 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <button
          type="button"
          onClick={() => go('inicio')}
          className="font-display text-xl tracking-wide text-ink"
          aria-label="Bella Beauty — início"
        >
          Bella <span className="italic text-rose">Beauty</span>
          <span className="ml-3 hidden font-sans text-[11px] uppercase tracking-[0.3em] text-ink-dim sm:inline">
            Tatuapé
          </span>
        </button>

        <div className="hidden items-center gap-7 md:flex">
          <button
            type="button"
            onClick={() => go('inicio')}
            className={`relative font-sans text-[13px] uppercase tracking-[0.18em] transition-colors hover:text-rose ${
              page === 'inicio' ? 'text-rose' : 'text-ink-2'
            }`}
          >
            Início
            {page === 'inicio' && (
              <span className="absolute -bottom-1 left-0 h-px w-full bg-rose" />
            )}
          </button>
          {page === 'inicio' ? (
            anchorLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-sans text-[13px] uppercase tracking-[0.18em] text-ink-2 transition-colors hover:text-rose"
              >
                {l.label}
              </a>
            ))
          ) : (
            <a
              href="#servicos"
              onClick={(e) => {
                e.preventDefault()
                go('inicio')
                requestAnimationFrame(() =>
                  document
                    .getElementById('servicos')
                    ?.scrollIntoView({ behavior: 'smooth' }),
                )
              }}
              className="font-sans text-[13px] uppercase tracking-[0.18em] text-ink-2 transition-colors hover:text-rose"
            >
              Serviços
            </a>
          )}
          {pageBtn('valores', 'Valores')}
          {pageBtn('cursos', 'Cursos')}
          {pageBtn('noticias', 'Notícias')}
        </div>

        <a
          href={WA.avaliacao}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full bg-ink px-5 py-2 font-sans text-xs uppercase tracking-[0.22em] text-cream transition hover:bg-rose md:inline-flex"
        >
          Agendar
        </a>

        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="text-ink md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-line bg-cream/95 backdrop-blur md:hidden"
        >
          <div className="flex flex-col px-6 py-4">
            {(['inicio', 'valores', 'cursos', 'noticias'] as Page[]).map(
              (p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => go(p)}
                  className="border-b border-line py-3 text-left font-sans text-sm uppercase tracking-[0.18em] text-ink-2"
                >
                  {p === 'inicio' ? 'Início' : p[0].toUpperCase() + p.slice(1)}
                </button>
              ),
            )}
            <a
              href={WA.avaliacao}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex w-full justify-center rounded-full bg-rose px-5 py-3 font-sans text-xs uppercase tracking-[0.22em] text-white"
            >
              Agendar avaliação grátis
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
