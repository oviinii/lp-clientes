import { AtSign, Mail, MessageCircle } from 'lucide-react';

export function Footer() {
  const links = [
    { label: 'A experiência', href: '#pilares' },
    { label: 'Programação', href: '#programacao' },
    { label: 'Mentora', href: '#mentora' },
    { label: 'Palestrantes', href: '#palestrantes' },
    { label: 'Ingressos', href: '#ingressos' },
    { label: 'Dúvidas frequentes', href: '#faq' },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-brand-night">
      <div className="stars absolute inset-0 opacity-30" aria-hidden="true" />

      <div className="container relative z-10 mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <img
              src="/logos/logo-horizontal-1.png"
              alt="Semana da Nova Consciência"
              className="mb-5 h-12 w-auto object-contain"
            />
            <p className="leading-relaxed text-brand-muted">
              De 2 a 6 de dezembro de 2026. Mais de 25 palestras, entrevistas e vivências para romper
              padrões antigos e manifestar uma nova realidade em 2027.
            </p>
          </div>

          <div>
            <h4 className="mb-5 font-bold text-white">Links rápidos</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand-muted transition-colors hover:text-brand-gold">
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
            © 2026 Semana da Nova Consciência. Todos os direitos reservados.
          </p>
          <p className="text-xs text-brand-muted/80">
            Realização: Leandra Soares | Despertadores da Nova Era
          </p>
        </div>
      </div>
    </footer>
  );
}
