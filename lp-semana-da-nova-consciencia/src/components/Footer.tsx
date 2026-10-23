import { AtSign, Mail, MessageCircle } from 'lucide-react';

export function Footer() {
  const links = [
    { label: 'O que você vai', href: '#vai' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Condução', href: '#conducao' },
    { label: 'Programação', href: '#programacao' },
    { label: 'Inscrição', href: '#inscricao' },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-brand-night">
      <div className="container relative z-10 mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <img
              src="/logos/Logo%20horizontal%201.png"
              alt="Semana da Nova Consciência"
              className="mb-5 h-[10.5rem] w-auto max-w-full object-contain"
            />
            <p className="leading-relaxed text-brand-muted">
              7 e 8 de novembro, online e ao vivo. Em dois dias, reconheça os 3 Padrões que estão travando sua
              jornada e descubra como acelerar sua expansão da consciência.
            </p>
          </div>

          <div>
            <h4 className="mb-5 font-bold text-white">Links rápidos</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-xs font-bold uppercase tracking-[0.14em] text-brand-muted transition-colors hover:text-brand-gold">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 font-bold text-white">Contato</h4>
            <div className="mb-5 flex gap-3">
              {/* TODO_LINKS: substituir pelos perfis/canais oficiais da Semana da Nova Consciência */}
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-brand-ice transition-colors hover:bg-brand-gold hover:text-brand-night"
              >
                <AtSign size={20} />
              </a>
              <a
                href="#"
                aria-label="WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-brand-ice transition-colors hover:bg-brand-gold hover:text-brand-night"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="#"
                aria-label="E-mail"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-brand-ice transition-colors hover:bg-brand-gold hover:text-brand-night"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-sm text-brand-muted">
              Dúvidas? Fale com a equipe pelo WhatsApp ou pelas redes sociais oficiais do evento.
            </p>
          </div>
        </div>

        <div className="hairline mt-12" aria-hidden="true" />
        <div className="mt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-brand-muted">
            © 2026 Imersão Destrave sua Expansão da Consciência. Todos os direitos reservados.
          </p>
          <p className="text-xs text-brand-muted/80">
            Realização: Leandra Soares | Co-realização: Valter Monteiro
          </p>
        </div>
      </div>
    </footer>
  );
}
