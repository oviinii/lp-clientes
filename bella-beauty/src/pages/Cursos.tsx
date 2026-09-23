import { COURSES, COURSE_FAQ, WA } from '../data/content'
import { Reveal } from '../components/Reveal'
import { Faq } from '../sections/Faq'

export function Cursos() {
  const [featured, ...others] = COURSES

  return (
    <div className="pt-28 md:pt-36">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <Reveal>
          <p className="eyebrow text-rose">Formação profissional · Tatuapé</p>
          <h1 className="mt-4 font-display text-5xl text-ink md:text-6xl">
            Torne-se uma <span className="italic text-rose">Lash Designer</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl font-sans leading-relaxed text-ink-2">
            Aprenda extensão de cílios do zero ao profissional com quem é
            referência em beleza no Tatuapé. Turmas reduzidas, prática real em
            modelo e suporte de verdade após a formação.
          </p>
          <div className="mx-auto mt-6 grid max-w-2xl grid-cols-2 gap-3 md:grid-cols-4">
            {[
              ['5,0★', 'Nota no Google'],
              ['100%', 'Presencial'],
              ['12x', 'No cartão'],
              ['∞', 'Suporte WhatsApp'],
            ].map(([n, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-line bg-white/70 px-3 py-4"
              >
                <p className="font-display text-2xl text-rose">{n}</p>
                <p className="mt-1 font-sans text-[11px] uppercase tracking-[0.16em] text-ink-dim">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="mx-auto mt-12 max-w-4xl px-6 lg:px-10">
        <Reveal>
          <article className="overflow-hidden rounded-[2rem] bg-ink text-cream">
            <div className="p-8 md:p-12">
              <p className="eyebrow text-gold">{featured.tag}</p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">
                {featured.title}
              </h2>
              <p className="mt-2 font-sans text-cream/70">
                {featured.duration}
              </p>
              <div className="mt-5 flex flex-wrap items-baseline gap-3">
                {featured.oldPrice && (
                  <span className="font-sans text-lg text-cream/50 line-through">
                    {featured.oldPrice}
                  </span>
                )}
                <span className="font-display text-5xl text-gold">
                  {featured.price}
                </span>
              </div>
              <p className="mt-2 font-sans text-sm text-cream/70">
                {featured.note}
              </p>
              <ul className="mt-6 grid gap-2 md:grid-cols-2">
                {featured.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 font-sans text-sm text-cream/85"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={featured.ctaHref}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex rounded-full bg-gold px-8 py-4 font-sans text-sm uppercase tracking-[0.18em] text-ink transition hover:brightness-110"
              >
                Quero me inscrever
              </a>
            </div>
          </article>
        </Reveal>
      </div>

      <div className="mx-auto mt-8 max-w-6xl px-6 lg:px-10">
        <Reveal>
          <h2 className="text-center font-display text-3xl text-ink md:text-4xl">
            Outras formações
          </h2>
          <p className="mt-2 text-center font-sans text-ink-2">
            Todos os cursos são presenciais, com material incluso e suporte por
            WhatsApp após a conclusão.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {others.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <article className="flex h-full flex-col rounded-3xl border border-line bg-white/70 p-7 md:p-8">
                <p className="eyebrow text-rose">{c.tag}</p>
                <h3 className="mt-2 font-display text-3xl text-ink">
                  {c.title}
                </h3>
                <p className="mt-1 font-sans text-sm text-ink-dim">
                  {c.duration}
                </p>
                <div className="mt-4 flex flex-wrap items-baseline gap-2">
                  {c.oldPrice && (
                    <span className="font-sans text-ink-dim line-through">
                      {c.oldPrice}
                    </span>
                  )}
                  <span className="font-display text-4xl text-rose">
                    {c.price}
                  </span>
                </div>
                <p className="mt-1 font-sans text-sm text-ink-dim">{c.note}</p>
                <ul className="mt-5 flex-1 space-y-2">
                  {c.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 font-sans text-sm text-ink-2"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={c.ctaHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex w-fit rounded-full bg-ink px-6 py-3 font-sans text-xs uppercase tracking-[0.2em] text-cream transition hover:bg-rose"
                >
                  Quero me inscrever
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-4 px-6 py-14 md:grid-cols-3 lg:px-10">
        {[
          ['01 · Alta demanda', 'Clientela fiel que retorna a cada manutenção — renda recorrente.'],
          ['02 · Retorno rápido', 'Com poucas clientes por semana, o valor do curso costuma se pagar rápido.'],
          ['03 · Prática de verdade', 'Turmas reduzidas com prática em modelo real. Você sai aplicando.'],
        ].map(([title, text]) => (
          <Reveal key={title}>
            <div className="rounded-3xl border border-line bg-white/70 p-6">
              <p className="font-display text-xl text-rose">{title}</p>
              <p className="mt-2 font-sans text-sm leading-relaxed text-ink-2">
                {text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Faq items={COURSE_FAQ} />

      <Reveal className="mx-auto max-w-4xl px-6 pb-20 text-center lg:px-10">
        <h2 className="font-display text-3xl text-ink md:text-4xl">
          Pronta para começar?
        </h2>
        <p className="mt-2 font-sans text-ink-2">
          Vagas limitadas por turma. Fale com a gente pelo WhatsApp e garanta
          a sua.
        </p>
        <a
          href={WA.cursoInfo}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex rounded-full bg-rose px-8 py-4 font-sans text-sm uppercase tracking-[0.18em] text-white transition hover:bg-rose-deep"
        >
          Falar no WhatsApp
        </a>
      </Reveal>
    </div>
  )
}
