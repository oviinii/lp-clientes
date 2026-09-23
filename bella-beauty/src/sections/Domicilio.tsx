import { MapPin } from 'lucide-react'
import { DOMICILIO_AREAS, WA } from '../data/content'
import { Reveal } from '../components/Reveal'

export function Domicilio() {
  return (
    <section id="domicilio" className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-gold">
            O atelier vai até você · Premium · Privativo
          </p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">
            Atendimento VIP <span className="italic text-gold">em domicílio</span>
          </h2>
          <p className="mt-4 font-sans leading-relaxed text-cream/75">
            Desfrute dos nossos tratamentos exclusivos no conforto e
            privacidade do seu lar, com o mesmo rigor técnico e sofisticação
            do studio. Levamos toda a estrutura para uma experiência de spa
            premium personalizada.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mt-8 flex flex-wrap gap-2.5">
            {DOMICILIO_AREAS.map((area) => (
              <li
                key={area}
                className="inline-flex items-center gap-1.5 rounded-full border border-cream/25 px-4 py-2 font-sans text-sm text-cream/85"
              >
                <MapPin size={14} className="text-gold" />
                {area}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15} className="mt-8">
          <a
            href={WA.domicilio}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-full bg-gold px-8 py-4 font-sans text-sm uppercase tracking-[0.18em] text-ink transition hover:brightness-110"
          >
            Solicitar atendimento VIP
          </a>
        </Reveal>
      </div>
    </section>
  )
}
