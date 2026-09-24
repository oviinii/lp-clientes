import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from '../data/content'

export function Footer() {
  return (
    <footer className="bg-cocoa-900">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3 lg:px-10">
        <div>
          <p className="font-display text-2xl text-cream">
            Fuel <span className="italic text-caramel">Fit</span>
          </p>
          <p className="mt-3 max-w-xs font-sans text-sm leading-relaxed text-cream-dim">
            Moda fitness feminina: performance, conforto e estilo em cada
            movimento.
          </p>
        </div>

        <div>
          <p className="eyebrow text-gold">Navegação</p>
          <ul className="mt-4 space-y-2 font-sans text-sm text-cream-dim">
            {[
              ['#colecao', 'Mocha Collection'],
              ['#porque', 'Por que Fuel Fit'],
              ['#looks', 'Galeria de looks'],
              ['#comprar', 'Como comprar'],
              ['#faq', 'Dúvidas'],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="transition hover:text-cream">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-gold">Compre pelo Instagram</p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-4 block font-display text-3xl text-cream transition hover:text-caramel"
          >
            {INSTAGRAM_HANDLE}
          </a>
          <p className="mt-2 font-sans text-sm text-cream-dim">
            Drops, disponibilidade e valores direto no Direct.
          </p>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 font-sans text-xs text-cream-dim/70 md:flex-row md:items-center md:justify-between lg:px-10">
          <p>© 2026 Fuel Fit · Moda Fitness Feminina</p>
          <p>O básico NADA básico</p>
        </div>
      </div>
    </footer>
  )
}
