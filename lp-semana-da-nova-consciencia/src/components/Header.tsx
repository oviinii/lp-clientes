import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { CHECKOUT_URL } from '../checkout';

const links = [
  { label: 'Conteúdo', href: '#vai' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Condução', href: '#conducao' },
  { label: 'Programação', href: '#programacao' },
  { label: 'Inscrição', href: '#inscricao' },
];

/**
 * Header da página de vendas — faixa com data/urgência + nome da Leandra
 * (sem logos, conforme pedido no documento de ajustes).
 */
export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Faixa de campanha */}
      <div className="bg-brand-gold text-brand-night">
        <p className="container mx-auto flex flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-2 text-center text-xs font-extrabold uppercase tracking-[0.14em]">
          <span>7 e 8 de novembro · online e ao vivo</span>
          <span className="hidden h-3 w-px bg-brand-night/40 sm:block" />
          <span className="hidden sm:inline">Vagas muito limitadas</span>
        </p>
      </div>

      <div className="border-b border-white/10 bg-brand-night/90 backdrop-blur-lg">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:h-24">
          <a href="#inicio" className="flex items-center" aria-label="Leandra Soares">
            <span className="font-display text-xl uppercase tracking-[0.18em] text-white sm:text-2xl">
              Leandra <span className="text-gold-gradient">Soares</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-bold uppercase tracking-[0.14em] text-brand-muted transition-colors hover:text-brand-gold"
              >
                {link.label}
              </a>
            ))}
            <a href={CHECKOUT_URL} target="_blank" rel="noreferrer" className="btn-gold px-6 py-3 text-sm">
              Quero destravar
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
                    className="text-sm font-bold uppercase tracking-[0.14em] text-brand-ice transition-colors hover:text-brand-gold"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className="btn-gold w-full max-w-xs py-3"
                >
                  Quero destravar
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
