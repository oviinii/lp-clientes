import { SERVICES } from '../data/content'
import { Reveal } from '../components/Reveal'

export function Services() {
  return (
    <section id="servicos" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <Reveal className="max-w-2xl">
        <p className="eyebrow text-rose">O que oferecemos</p>
        <h2 className="mt-3 font-display text-4xl text-ink md:text-5xl">
          Nossa curadoria de serviços
        </h2>
        <p className="mt-4 font-sans text-ink-2">
          Avaliação de design grátis pelo WhatsApp. Sem compromisso.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={Math.min(i * 0.06, 0.24)}>
            <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white/70 shadow-soft">
              {s.imagePair ? (
                <div className="grid grid-cols-2 gap-1 bg-blush">
                  <figure className="relative">
                    <img
                      src={s.imagePair[0]}
                      alt="Estrias antes do Protocolo Estria Free — Bella Beauty Club Tatuapé"
                      loading="lazy"
                      className="aspect-square h-full w-full object-cover"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-ink/70 px-3 py-1 font-sans text-[11px] uppercase tracking-[0.18em] text-white">
                      Antes
                    </span>
                  </figure>
                  <figure className="relative">
                    <img
                      src={s.imagePair[1]}
                      alt={s.imageAlt}
                      loading="lazy"
                      className="aspect-square h-full w-full object-cover"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-rose px-3 py-1 font-sans text-[11px] uppercase tracking-[0.18em] text-white">
                      Depois ✓
                    </span>
                  </figure>
                </div>
              ) : (
                <img
                  src={s.image}
                  alt={s.imageAlt}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover"
                />
              )}
              <div className="flex flex-1 flex-col p-7 md:p-9">
              <p className="eyebrow text-rose">{s.tag}</p>
              <h3 className="mt-3 font-display text-3xl text-ink">{s.title}</h3>
              <p className="mt-3 font-sans text-[15px] leading-relaxed text-ink-2">
                {s.description}
              </p>
              <ul className="mt-5 space-y-2">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 font-sans text-sm text-ink-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-rose" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={s.ctaHref}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-fit rounded-full bg-ink px-6 py-3 font-sans text-xs uppercase tracking-[0.2em] text-cream transition hover:bg-rose"
              >
                {s.cta} →
              </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
