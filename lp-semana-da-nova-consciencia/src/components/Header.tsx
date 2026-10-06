import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CalendarDays, Menu, Sparkles, X } from 'lucide-react';

const links = [
  { label: 'A experiência', href: '#pilares' },
  { label: 'Programação', href: '#programacao' },
  { label: 'Mentora', href: '#mentora' },
  { label: 'Palestrantes', href: '#palestrantes' },
  { label: 'Ingressos', href: '#ingressos' },
  { label: 'FAQ', href: '#faq' },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Faixa de campanha — reforça data e vagas limitadas (identidade dos criativos) */}
      <div className="bg-gradient-to-r from-brand-goldDeep via-brand-gold to-brand-goldDeep text-brand-night">
        <p className="container mx-auto flex flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-2 text-center text-[11px] font-bold uppercase tracking-[0.14em]">
          <Sparkles size={13} />
          <span>De 2 a 6 de dezembro · 100% online</span>
          <span className="hidden h-3 w-px bg-brand-night/30 sm:block" />
          <span className="hidden sm:inline">Vagas limitadas — Lote 1 com 50% de desconto</span>
        </p>
      </div>

      <div className="border-b border-white/10 bg-brand-night/85 backdrop-blur-lg">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:h-20">
          <a href="#inicio" className="flex items-center" aria-label="Semana da Nova Consciência">
            <img
              src="/logos/logo-horizontal-1.png"
              alt="Semana da Nova Consciência"
              className="h-9 w-auto object-contain md:h-12"
            />
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-brand-muted transition-colors hover:text-brand-gold"
              >
                {link.label}
              </a>
            ))}
            <a href="#ingressos" className="btn-gold px-6 py-3 text-sm">
              Garantir minha vaga
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-brand-ice lg:hidden"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-t border-white/10 bg-brand-night/95 backdrop-blur-lg lg:hidden"
            >
              <nav className="flex flex-col items-center gap-5 px-4 py-8">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-base font-medium text-brand-ice transition-colors hover:text-brand-gold"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#ingressos"
                  onClick={() => setOpen(false)}
                  className="btn-gold w-full max-w-xs py-3"
                >
                  <CalendarDays size={18} />
                  Garantir minha vaga
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
