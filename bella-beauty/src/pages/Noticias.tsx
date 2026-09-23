import { ARTICLES, WA } from '../data/content'
import { Reveal } from '../components/Reveal'

export function Noticias() {
  const [featured, ...rest] = ARTICLES

  return (
    <div className="pt-28 md:pt-36">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <Reveal>
          <p className="eyebrow text-rose">Blog Bella Beauty</p>
          <h1 className="mt-4 font-display text-5xl text-ink md:text-6xl">
            Tendências <span className="italic text-rose">e beleza</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl font-sans leading-relaxed text-ink-2">
            Dicas exclusivas, tendências do momento e tudo o que você precisa
            saber sobre o universo das sobrancelhas, cílios e beleza.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-12 max-w-6xl px-6 lg:px-10">
        <Reveal>
          <a
            href={featured.href}
            target="_blank"
            rel="noreferrer"
            className="group grid overflow-hidden rounded-[2rem] bg-ink text-cream md:grid-cols-2"
          >
            <div className="min-h-56 bg-gradient-to-br from-rose via-rose-deep to-ink" />
            <div className="p-8 md:p-12">
              <p className="eyebrow text-gold">{featured.tag}</p>
              <h2 className="mt-3 font-display text-3xl leading-snug transition group-hover:text-gold md:text-4xl">
                {featured.title}
              </h2>
              <p className="mt-4 font-sans leading-relaxed text-cream/75">
                {featured.excerpt}
              </p>
              <span className="mt-6 inline-flex font-sans text-sm uppercase tracking-[0.2em] text-gold">
                Ler artigo completo →
              </span>
            </div>
          </a>
        </Reveal>

        <h2 className="mt-14 font-display text-3xl text-ink md:text-4xl">
          Últimos artigos
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((a, i) => (
            <Reveal key={a.title} delay={Math.min(i * 0.05, 0.25)}>
              <a
                href={a.href}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white/70 transition hover:shadow-soft"
              >
                <div className="h-36 bg-gradient-to-br from-blush via-cream-2 to-[#e4cdbd]" />
                <div className="flex flex-1 flex-col p-6">
                  <p className="eyebrow text-rose">{a.tag}</p>
                  <h3 className="mt-2 font-display text-xl leading-snug text-ink transition group-hover:text-rose">
                    {a.title}
                  </h3>
                  <p className="mt-2 flex-1 font-sans text-sm leading-relaxed text-ink-2">
                    {a.excerpt}
                  </p>
                  <span className="mt-4 font-sans text-xs uppercase tracking-[0.2em] text-rose">
                    Ler mais →
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal className="mx-auto max-w-4xl px-6 py-16 text-center lg:px-10">
        <h2 className="font-display text-3xl text-ink md:text-4xl">
          Quer transformar suas sobrancelhas?
        </h2>
        <p className="mt-2 font-sans text-ink-2">
          Avaliação de design GRÁTIS pelo WhatsApp. Sem compromisso.
        </p>
        <a
          href={WA.blog}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex rounded-full bg-rose px-8 py-4 font-sans text-sm uppercase tracking-[0.18em] text-white transition hover:bg-rose-deep"
        >
          Quero avaliação grátis
        </a>
      </Reveal>
    </div>
  )
}
