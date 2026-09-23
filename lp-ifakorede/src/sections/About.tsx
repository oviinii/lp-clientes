import { ExternalLink } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import {
  OLUWO_INSTAGRAM_URL,
  TEMPLE_INSTAGRAM_URL,
  aboutParagraphs,
  lineage,
} from '../data/content'

export function About() {
  return (
    <section id="linhagem" className="relative bg-ink-3 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 lg:grid-cols-2 lg:px-10">
        <div>
          <Reveal>
            <p className="font-sans text-xs uppercase tracking-[0.4em] text-brass">
              <span className="slash mr-3 inline-block align-middle" />
              01 — Quem sou eu / Linhagem
            </p>
            <h2 className="mt-6 font-display text-4xl leading-tight text-bone sm:text-5xl">
              Tradição que se herda,
              <br />
              <span className="italic text-goldsoft">caráter que se prova.</span>
            </h2>
          </Reveal>
          {aboutParagraphs.map((p, i) => (
            <Reveal key={i} delay={0.1 + i * 0.08}>
              <p className="mt-5 font-sans text-base leading-relaxed text-bone-dim">
                {p}
              </p>
            </Reveal>
          ))}
          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap gap-2 font-sans text-[13px]">
              <span className="rounded-full bg-brass px-4 py-1.5 text-ink">
                Filho do Oluwo Ifátokun
              </span>
              <span className="rounded-full bg-brass px-4 py-1.5 text-ink">
                Filho da Iyanifá Ifádará
              </span>
              <span className="rounded-full border border-line px-4 py-1.5 text-bone-dim">
                Ọ̀ffẹ́ Òrúnmìlà
              </span>
              <span className="rounded-full border border-line px-4 py-1.5 text-bone-dim">
                {lineage.location}
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="adire-dots relative overflow-hidden rounded-2xl border border-brass/25 bg-ink-2 p-8">
            <p className="font-display text-xl italic text-goldsoft">
              Árvore espiritual
            </p>
            <ol className="mt-6 space-y-5">
              {[
                {
                  n: '1',
                  title: 'Oluwo Ifátokun',
                  sub: 'pai / mestre — Bàbáláwo e educador tradicional de Ifá',
                  url: OLUWO_INSTAGRAM_URL,
                  handle: '@ile_ase_ifatokun',
                },
                {
                  n: '2',
                  title: 'Iyanifá Ifádará',
                  sub: 'mãe espiritual — formação, cuidado e fundamento',
                },
                {
                  n: '3',
                  title: `${lineage.priest} (${lineage.civilName})`,
                  sub: 'consultas, ẹbọ, ensino e vida comunitária no Ìjọ Ifádọlá',
                },
              ].map((m) => (
                <li key={m.n} className="flex gap-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brass font-sans text-sm font-bold text-ink">
                    {m.n}
                  </span>
                  <div>
                    <p className="font-sans font-semibold text-bone">{m.title}</p>
                    <p className="mt-1 font-sans text-sm text-bone-dim">{m.sub}</p>
                    {m.url && (
                      <a
                        href={m.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="mt-1 inline-flex items-center gap-1 font-sans text-sm text-brass hover:text-goldsoft"
                      >
                        {m.handle} <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8 rounded-xl border border-dashed border-brass/40 bg-brass/5 p-5 text-center">
              <p className="font-sans text-sm text-bone-dim">
                Foto em grupo do Ìjọ Ifádọlá — substituir por imagem oficial do
                templo / Odún Ifá
              </p>
              <a
                href={TEMPLE_INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-2 inline-flex items-center gap-1 font-sans text-sm text-brass hover:text-goldsoft"
              >
                Ver @ijoifadola <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
