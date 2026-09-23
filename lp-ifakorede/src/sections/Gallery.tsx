import { ExternalLink } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import {
  INSTAGRAM_URL,
  OLUWO_INSTAGRAM_URL,
  PHOTOGRAPHER_INSTAGRAM_URL,
  TEMPLE_INSTAGRAM_URL,
} from '../data/content'

const slots = [
  {
    title: 'Retrato oficial',
    desc: 'Traje tradicional · 1080×1350',
    url: INSTAGRAM_URL,
    label: 'pegar no perfil',
  },
  {
    title: 'Consulta com òpẹ̀lẹ̀ / ikin',
    desc: 'Mãos, tabuleiro, detalhe',
    url: INSTAGRAM_URL,
    label: 'pegar no perfil',
  },
  {
    title: 'Òrò / Oferendas',
    desc: 'Folhas, frutos, altar',
    url: TEMPLE_INSTAGRAM_URL,
    label: 'pegar no templo',
  },
  {
    title: 'Comunidade / Odún Ifá',
    desc: 'Grupo, festa, cotidiano',
    url: PHOTOGRAPHER_INSTAGRAM_URL,
    label: 'fotos: @leticiacsalviano',
  },
]

export function Gallery() {
  return (
    <section id="templo" className="relative bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="font-sans text-xs uppercase tracking-[0.4em] text-brass">
              <span className="slash mr-3 inline-block align-middle" />
              04 — Templo · Momentos
            </p>
            <h2 className="mt-6 font-display text-4xl leading-tight text-bone sm:text-5xl">
              Ìjọ Ifádọlá,{' '}
              <span className="italic text-goldsoft">vida no templo.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href={TEMPLE_INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1 font-sans text-sm text-brass hover:text-goldsoft"
            >
              Ver tudo no Instagram <ExternalLink size={14} />
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {slots.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="grid min-h-[260px] place-items-center rounded-2xl border border-dashed border-brass/40 bg-brass/5 p-6 text-center">
                <div>
                  <p className="font-sans font-semibold text-bone">{s.title}</p>
                  <p className="mt-1 font-sans text-[13px] text-bone-dim">{s.desc}</p>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-3 inline-flex items-center gap-1 font-sans text-xs text-brass hover:text-goldsoft"
                  >
                    {s.label} <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-6 rounded-2xl border border-brass/25 bg-ink-2 p-6 font-sans text-sm leading-relaxed text-bone-dim lg:p-8">
            <p>
              <strong className="text-bone">Sobre as imagens:</strong> os links
              diretos do Instagram (CDN) expiram em horas e a extração automática
              é bloqueada. Baixe manualmente no navegador ou peça as fotos em
              alta ao Bàbáláwo / à fotógrafa — depois troque estes blocos por{' '}
              <code className="text-brass">import foto from '../assets/…'</code>.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-[13px]">
              {[
                [INSTAGRAM_URL, 'Perfil principal'],
                [TEMPLE_INSTAGRAM_URL, 'Templo / Família'],
                [OLUWO_INSTAGRAM_URL, 'Oluwo Ifátokun'],
                [PHOTOGRAPHER_INSTAGRAM_URL, 'Fotógrafa'],
              ].map(([url, label]) => (
                <a
                  key={label as string}
                  href={url as string}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-full border border-line px-4 py-2 text-bone-dim transition hover:border-brass hover:text-brass"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
