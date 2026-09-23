import {
  ADDRESS,
  DIRECTIONS_URL,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
} from '../data/content'

export function Footer() {
  return (
    <footer className="bg-ember-900">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3 lg:px-10">
        <div>
          <p className="font-display text-2xl text-cream">
            Restaurante e Churrascaria{' '}
            <span className="italic text-flame">da Nona</span>
          </p>
          <p className="mt-3 max-w-xs font-sans text-sm leading-relaxed text-cream-dim">
            Comida de verdade para quem está na estrada. Parada obrigatória na
            Dutra em Aparecida.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block font-sans text-sm text-gold transition hover:text-cream"
          >
            @nonachurrascaria →
          </a>
        </div>

        <div>
          <p className="eyebrow text-gold">Onde estamos</p>
          <p className="mt-4 font-sans text-sm leading-relaxed text-cream-dim">
            {ADDRESS.street}
            <br />
            {ADDRESS.district} · {ADDRESS.city}
            <br />
            {ADDRESS.cep}
            <br />
            {ADDRESS.reference}
          </p>
          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block font-sans text-sm text-gold underline-offset-4 hover:underline"
          >
            Como chegar →
          </a>
        </div>

        <div>
          <p className="eyebrow text-gold">Fale conosco</p>
          <a
            href={PHONE_HREF}
            className="mt-4 block font-display text-3xl text-cream transition hover:text-flame"
          >
            {PHONE_DISPLAY}
          </a>
          <p className="mt-2 font-sans text-sm text-cream-dim">
            Ligue para confirmar o churrasco do dia, horários em feriados e
            grupos/excursões.
          </p>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 font-sans text-xs text-cream-dim/70 md:flex-row md:items-center md:justify-between lg:px-10">
          <p>© 2026 Restaurante e Churrascaria da Nona · Aparecida, SP</p>
          <p>Self-service · Por quilo · Churrasco · Café da madrugada</p>
        </div>
      </div>
    </footer>
  )
}
