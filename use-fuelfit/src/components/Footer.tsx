import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from '../data/content'

export function Footer() {
  return (
    <footer className="bg-cocoa text-cream">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 lg:px-10">
        <p className="font-display text-[13vw] leading-none md:text-[7rem]">
          Fuel <span className="italic text-caramel">Fit</span>
        </p>
        <div className="mt-10 grid gap-10 border-t border-cream/15 pt-10 md:grid-cols-3">
          <p className="max-w-xs font-sans text-sm leading-relaxed text-cream/70">
            Moda fitness feminina: performance, conforto e estilo em cada
            movimento.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 font-sans text-sm text-cream/70">
            {[
              ['#colecao', 'Mocha Collection'],
              ['#looks', 'Looks'],
              ['#comprar', 'Como comprar'],
              ['#faq', 'Dúvidas'],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="transition hover:text-caramel">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="font-display text-2xl italic text-cream transition hover:text-caramel md:text-right"
          >
            {INSTAGRAM_HANDLE} →
          </a>
        </div>
        <div className="mt-10 flex flex-col gap-2 font-sans text-xs text-cream/50 md:flex-row md:justify-between">
          <p>© 2026 Fuel Fit · Moda Fitness Feminina</p>
          <p>O básico NADA básico</p>
        </div>
      </div>
    </footer>
  )
}
