import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { WHATSAPP_URL } from '../data/content'

export function ContactCTA() {
  return (
    <>
      <section
        id="contato"
        className="grid-bg relative overflow-hidden bg-ink py-24 lg:py-32"
      >
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <p className="font-display text-xl italic text-volt">
              Bora tirar do papel?
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-bone sm:text-6xl">
              Seu projeto no ar,
              <br />
              <span className="text-volt">sem enrolação.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl font-sans text-sm leading-relaxed text-bone-dim">
              Conte sua ideia em uma mensagem: respondemos com próximos passos
              e uma proposta fechada. Software, sites, LPs e soluções digitais.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-3 rounded-full bg-volt px-8 py-4 font-sans text-sm font-semibold uppercase tracking-[0.18em] text-ink transition hover:bg-bone"
              >
                <MessageCircle size={16} /> Pedir orçamento
              </a>
              <a
                href="#projetos"
                className="inline-flex items-center gap-2 rounded-full border border-line px-8 py-4 font-sans text-sm uppercase tracking-[0.18em] text-bone-dim transition hover:border-volt hover:text-volt"
              >
                Ver projetos <ArrowUpRight size={15} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Pedir orçamento pelo WhatsApp"
        className="fixed bottom-5 right-5 z-[100] flex items-center gap-2 rounded-full bg-volt py-3 pl-4 pr-5 font-sans text-sm font-semibold text-ink shadow-glow transition hover:scale-105"
      >
        <span className="grid h-9 w-9 place-items-center rounded-full bg-ink/10">
          <MessageCircle size={17} />
        </span>
        Orçamento
      </a>
    </>
  )
}
