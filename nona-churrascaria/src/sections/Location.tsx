import { Clock, MapPin, Navigation, Phone } from 'lucide-react'
import {
  ADDRESS,
  DIRECTIONS_URL,
  HOURS,
  MAPS_EMBED,
  PHONE_DISPLAY,
  PHONE_HREF,
  WAZE_URL,
} from '../data/content'
import { Reveal } from '../components/Reveal'

export function Location() {
  return (
    <section
      id="visita"
      className="border-y border-line bg-ember-900/50"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <p className="eyebrow text-honey">Horários e localização</p>
          <h2 className="mt-3 font-display text-4xl text-cream md:text-5xl">
            Passe na Dutra, pare na Nona
          </h2>

          <div className="mt-7 rounded-3xl border border-line bg-ember-950/70 p-6 md:p-8">
            <p className="flex items-center gap-2 font-sans text-xs uppercase tracking-[0.24em] text-honey">
              <Clock size={14} />
              Horários
            </p>
            <ul className="mt-4 divide-y divide-line">
              {HOURS.map((h) => (
                <li
                  key={h.days}
                  className="flex items-center justify-between py-3 font-sans"
                >
                  <span className="text-cream">{h.days}</span>
                  <span className="font-medium text-honey">{h.time}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 font-sans text-xs leading-relaxed text-cream-dim">
              Café da madrugada para o amigo da estrada. Em feriados pode
              haver variação — confirme pelo telefone.
            </p>
          </div>

          <div className="mt-5 rounded-3xl border border-line bg-ember-950/70 p-6 md:p-8">
            <p className="flex items-center gap-2 font-sans text-xs uppercase tracking-[0.24em] text-honey">
              <MapPin size={14} />
              Endereço
            </p>
            <p className="mt-3 font-sans leading-relaxed text-cream">
              {ADDRESS.street} · {ADDRESS.district}
              <br />
              {ADDRESS.city} · {ADDRESS.cep}
              <br />
              <span className="text-cream-dim">{ADDRESS.reference}</span>
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-flame px-6 py-3 font-sans text-xs uppercase tracking-[0.2em] text-white transition hover:bg-flame-deep"
              >
                <Navigation size={14} />
                Google Maps
              </a>
              <a
                href={WAZE_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-cream/30 px-6 py-3 font-sans text-xs uppercase tracking-[0.2em] text-cream transition hover:border-flame hover:text-flame"
              >
                Waze
              </a>
            </div>
            <a
              href={PHONE_HREF}
              className="mt-4 inline-flex items-center gap-2 font-display text-2xl text-cream transition hover:text-flame"
            >
              <Phone size={20} />
              {PHONE_DISPLAY}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="min-h-96">
          <iframe
            title="Mapa — Restaurante e Churrascaria da Nona, Aparecida/SP"
            src={MAPS_EMBED}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full min-h-96 w-full rounded-3xl border border-line"
          />
        </Reveal>
      </div>
    </section>
  )
}
