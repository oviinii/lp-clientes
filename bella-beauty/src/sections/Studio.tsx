import { MAPS_URL, WA } from '../data/content'
import { Reveal } from '../components/Reveal'

export function Studio() {
  return (
    <section className="border-y border-line bg-cream-2/60">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-2 lg:px-10">
        <Reveal>
          <p className="eyebrow text-rose">Conheça o studio · Tatuapé</p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-ink md:text-5xl">
            Sobrancelhas no Tatuapé com excelência
          </h2>
          <p className="mt-5 font-sans leading-relaxed text-ink-2">
            No Bella Beauty, o{' '}
            <strong>design de sobrancelhas no Tatuapé</strong> é tratado como
            arte. Nosso studio fica no{' '}
            <strong>Edifício Platina — o mais alto de São Paulo</strong>, a
            poucos minutos do Metrô Tatuapé, com manobrista, Shopping Tatuapé
            ao lado e café no prédio.
          </p>
          <p className="mt-4 font-sans leading-relaxed text-ink-2">
            Atendemos clientes do <strong>Tatuapé, Anália Franco, Vila
            Formosa, Mooca</strong> e toda a Zona Leste. Comece com uma{' '}
            <strong>avaliação de design grátis pelo WhatsApp</strong>.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={WA.avaliacao}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-rose px-7 py-3.5 text-center font-sans text-sm uppercase tracking-[0.18em] text-white transition hover:bg-rose-deep"
            >
              Avaliação grátis no WhatsApp →
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-ink/25 px-7 py-3.5 text-center font-sans text-sm uppercase tracking-[0.18em] text-ink transition hover:border-rose hover:text-rose"
            >
              ★★★ Ver avaliações reais
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="grid grid-cols-3 gap-3">
            {[
              ['5,0★', 'Avaliação Google'],
              ['500+', 'Clientes satisfeitas'],
              ['5', 'Anos de expertise'],
            ].map(([n, label]) => (
              <div
                key={label}
                className="rounded-2xl bg-ink px-4 py-8 text-center text-cream"
              >
                <p className="font-display text-3xl text-gold">{n}</p>
                <p className="mt-2 font-sans text-[11px] uppercase tracking-[0.18em] text-cream/70">
                  {label}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-2xl border border-line bg-white/70 p-6">
            <p className="font-sans text-sm leading-relaxed text-ink-2">
              <strong className="text-ink">Atelier de cílios · Tatuapé.</strong>{' '}
              Extensões premium, lash lifting e volumes (Brasileiro, Egípcio,
              Glam e Molhado) para um olhar que dispensa maquiagem.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
