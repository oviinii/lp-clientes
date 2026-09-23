import { Bus, Phone } from 'lucide-react'
import { PHONE_HREF } from '../data/content'
import { Reveal } from '../components/Reveal'

export function Groups() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-4 lg:px-10">
      <Reveal className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-flame-deep via-flame to-honey px-6 py-14 text-center text-white md:px-16">
        <p className="mx-auto flex w-fit items-center gap-2 rounded-full bg-black/25 px-4 py-1.5 font-sans text-xs uppercase tracking-[0.24em]">
          <Bus size={14} />
          Romeiros · Famílias · Excursões
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl leading-tight md:text-5xl">
          Traga sua excursão para a Nona
        </h2>
        <p className="mx-auto mt-4 max-w-xl font-sans leading-relaxed text-white/90">
          Atendemos ônibus, vans e grupos grandes a caminho de Aparecida.
          Ligue antes e avise a cozinha — sua caravana chega com mesa pronta.
        </p>
        <a
          href={PHONE_HREF}
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-ember-950 px-8 py-4 font-sans text-sm uppercase tracking-[0.18em] text-cream transition hover:bg-black"
        >
          <Phone size={16} />
          Reservar para grupos
        </a>
      </Reveal>
    </section>
  )
}
