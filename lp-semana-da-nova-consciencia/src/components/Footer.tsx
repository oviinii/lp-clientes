/** Ícones das redes (lucide atual não exporta mais ícones de marcas). */
function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

const redes = [
  {
    nome: 'Leandra Soares - Criadora do Congresso Multidimensional',
    url: 'https://www.instagram.com/leandra.soares/',
    ico: InstagramIcon,
    rede: 'Instagram',
  },
  {
    nome: 'Leandra Soares - Expansão da Consciência',
    url: 'https://www.youtube.com/@leandrasoaresexpansao',
    ico: YoutubeIcon,
    rede: 'YouTube',
  },
];

export function Footer() {
  const links = [
    { label: 'Conteúdo', href: '#vai' },
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
            <span className="font-display text-2xl uppercase tracking-[0.18em] text-white">
              Leandra <span className="text-gold-gradient">Soares</span>
            </span>
            <p className="mt-5 leading-relaxed text-brand-muted">
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
            <h4 className="mb-5 font-bold text-white">Redes Sociais</h4>
            <div className="flex flex-col gap-3">
              {redes.map(({ nome, url, ico: Ico, rede }) => (
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${rede}: ${nome}`}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-brand-ice transition-colors hover:bg-brand-gold hover:text-brand-night"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10">
                    <Ico />
                  </span>
                  <span className="text-sm font-semibold leading-snug">{nome}</span>
                </a>
              ))}
            </div>
            <p className="mt-5 text-sm text-brand-muted">Siga a Leandra nas redes oficiais.</p>
          </div>
        </div>

        <div className="hairline mt-12" aria-hidden="true" />
        <div className="mt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-brand-muted">
            © 2026 Imersão Destrave sua Expansão da Consciência. Todos os direitos reservados.
          </p>
          <p className="text-xs text-brand-muted/80">Realização: Leandra Soares</p>
        </div>
      </div>
    </footer>
  );
}
