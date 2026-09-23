import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { INSTAGRAM_URL, WHATSAPP_URL, lineage } from '../data/content'

export function ContactCTA() {
  return (
    <>
      <section id="contato" className="adire-dots relative overflow-hidden bg-ink-3 py-24 lg:py-32">
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <p className="font-display text-xl italic text-goldsoft">
              Aboru Aboye oo!
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-bone sm:text-6xl">
              Dê o primeiro passo
              <br />
              com <span className="italic text-goldsoft">Orunmila.</span>
            </h2>
            <p className="mt-5 font-sans text-sm leading-relaxed text-bone-dim">
              {lineage.temple} · {lineage.tradition}
              <br />
              {lineage.location}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-3 rounded-full bg-brass px-8 py-4 font-sans text-sm font-semibold uppercase tracking-[0.18em] text-ink transition hover:bg-goldsoft"
              >
                <MessageCircle size={16} /> Agendar jogo — WhatsApp
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full border border-line px-8 py-4 font-sans text-sm uppercase tracking-[0.18em] text-bone-dim transition hover:border-brass hover:text-brass"
              >
                Seguir no Instagram <ArrowUpRight size={15} />
              </a>
            </div>
            <p className="mt-5 font-sans text-[13px] text-bone-dim">
              Mensagem pré-preenchida · Ire oo!
            </p>
          </Reveal>
        </div>
      </section>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Agendar jogo pelo WhatsApp"
        className="fixed bottom-5 right-5 z-[100] flex items-center gap-2 rounded-full bg-moss py-3 pl-4 pr-5 font-sans text-sm font-semibold text-bone shadow-glow transition hover:scale-105"
      >
        <span className="grid h-9 w-9 place-items-center rounded-full bg-bone/15">
          <MessageCircle size={17} />
        </span>
        Agendar jogo
      </a>
    </>
  )
}
