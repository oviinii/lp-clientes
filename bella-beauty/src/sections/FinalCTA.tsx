import { INSTAGRAM_URL, WA, WHATSAPP_DISPLAY } from '../data/content'
import { Reveal } from '../components/Reveal'

export function FinalCTA() {
  return (
    <section id="contato" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <Reveal className="overflow-hidden rounded-[2rem] bg-ink px-6 py-14 text-center text-cream md:px-16 md:py-20">
        <p className="eyebrow text-gold">
          ✦ Avaliação de design grátis · Sem compromisso
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl leading-tight md:text-6xl">
          Pronta para sua <span className="italic text-gold">transformação?</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl font-sans leading-relaxed text-cream/75">
          Mande uma foto pelo WhatsApp e receba uma avaliação gratuita do seu
          design ideal. Sem compromisso. Resposta em minutos.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={WA.avaliacao}
            target="_blank"
            rel="noreferrer"
            className="w-full rounded-full bg-rose px-8 py-4 font-sans text-sm uppercase tracking-[0.18em] text-white transition hover:bg-rose-deep sm:w-auto"
          >
            Avaliação grátis no WhatsApp
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="w-full rounded-full border border-cream/30 px-8 py-4 font-sans text-sm uppercase tracking-[0.18em] text-cream transition hover:border-gold hover:text-gold sm:w-auto"
          >
            Ver no Instagram →
          </a>
        </div>
        <p className="mt-6 font-sans text-sm text-cream/70">
          {WHATSAPP_DISPLAY} · @bellaabeauti
        </p>
        <p className="mt-2 font-sans text-xs uppercase tracking-[0.2em] text-cream/50">
          ✓ 5,0 ★ no Google ✓ Profissional certificada ✓ Aberto todos os dias
          ✓ Higiene e biossegurança
        </p>
      </Reveal>
    </section>
  )
}
