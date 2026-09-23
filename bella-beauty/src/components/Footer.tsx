import {
  ADDRESS,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  WA,
  WHATSAPP_DISPLAY,
  YOUTUBE_URL,
  MAPS_URL,
} from '../data/content'
import type { Page } from '../App'

export function Footer({ onNavigate }: { onNavigate: (p: Page) => void }) {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4 lg:px-10">
        <div>
          <p className="font-display text-2xl">
            Bella <span className="italic text-gold">Beauty</span>
          </p>
          <p className="mt-3 max-w-xs font-sans text-sm leading-relaxed text-cream/70">
            Mais que um studio de sobrancelhas no Tatuapé — o time que realça
            a sua melhor versão.
          </p>
          <div className="mt-4 flex gap-4 font-sans text-sm text-cream/80">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-gold"
            >
              Instagram
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-gold"
            >
              Facebook
            </a>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-gold"
            >
              YouTube
            </a>
          </div>
        </div>

        <div>
          <p className="eyebrow text-gold">Navegação</p>
          <ul className="mt-4 space-y-2 font-sans text-sm text-cream/80">
            {(
              [
                ['inicio', 'Início'],
                ['valores', 'Valores'],
                ['cursos', 'Cursos'],
                ['noticias', 'Notícias'],
              ] as [Page, string][]
            ).map(([p, label]) => (
              <li key={p}>
                <button
                  type="button"
                  onClick={() => onNavigate(p)}
                  className="transition hover:text-gold"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-gold">Serviços</p>
          <ul className="mt-4 space-y-2 font-sans text-sm text-cream/80">
            <li>Design de Sobrancelhas</li>
            <li>Extensão de Cílios · Lash Lifting</li>
            <li>Hidralips · Lábios</li>
            <li>Tratamentos Faciais</li>
            <li>Protocolo Estria Free</li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-gold">Studio Tatuapé</p>
          <p className="mt-4 font-sans text-sm leading-relaxed text-cream/80">
            {ADDRESS.street}
            <br />
            {ADDRESS.building}
            <br />
            {ADDRESS.city} · {ADDRESS.cep}
            <br />
            {ADDRESS.hours}
          </p>
          <p className="mt-3 font-sans text-sm text-cream/80">
            <a
              href={WA.avaliacao}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-gold"
            >
              {WHATSAPP_DISPLAY}
            </a>
            {' · '}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-gold"
            >
              @bellaabeauti
            </a>
          </p>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-block font-sans text-sm text-gold underline-offset-4 hover:underline"
          >
            Ver no Google Maps →
          </a>
        </div>
      </div>

      <div className="border-t border-cream/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 font-sans text-xs text-cream/60 md:flex-row md:items-center md:justify-between lg:px-10">
          <p>© 2026 Bella Beauty · The Modern Atelier · São Paulo, SP</p>
          <p>
            Sobrancelhas Tatuapé · Cílios Tatuapé · Brow Lamination · Lash
            Lifting · Estrias Tatuapé
          </p>
        </div>
      </div>
    </footer>
  )
}
