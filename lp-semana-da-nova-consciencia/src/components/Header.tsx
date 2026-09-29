import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Início", href: "#inicio" },
    { label: "Programação", href: "#programacao" },
    { label: "Palestrantes", href: "#palestrantes" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Ingressos", href: "#ingressos" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <a href="#inicio" className="flex items-center">
          <img src="/logos/logo-horizontal-1.png" alt="Semana da Nova Consciência" className="h-10 md:h-12 w-auto object-contain" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-brand-gold transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#ingressos"
            className="bg-gradient-to-r from-brand-gold to-yellow-600 text-white font-bold text-sm py-2 px-6 rounded-full hover:scale-105 transition-transform shadow-[0_0_12px_rgba(205,161,60,0.4)]"
          >
            Garantir minha vaga
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2"
          aria-label="Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-brand-dark/95 backdrop-blur-lg border-t border-white/10">
          <nav className="flex flex-col items-center gap-6 py-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-gray-300 hover:text-brand-gold transition-colors text-lg font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#ingressos"
              onClick={() => setOpen(false)}
              className="bg-gradient-to-r from-brand-gold to-yellow-600 text-white font-bold text-lg py-3 px-8 rounded-full hover:scale-105 transition-transform shadow-[0_0_12px_rgba(205,161,60,0.4)]"
            >
              Garantir minha vaga
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}