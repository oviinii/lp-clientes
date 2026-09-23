import { WHATSAPP_URL } from '../data/content'

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink-3">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 text-center sm:flex-row sm:text-left lg:px-10">
        <div>
          <p className="font-display text-xl font-bold text-bone">
            zinbox<span className="text-volt">.</span>
          </p>
          <p className="mt-1 font-sans text-xs uppercase tracking-[0.24em] text-bone-dim">
            Software · Sites · LPs · Soluções digitais
          </p>
        </div>
        <p className="font-display text-lg italic text-bone-dim">
          Sua ideia no ar, sem enrolação.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer noopener"
          className="rounded-full border border-line px-5 py-2 font-sans text-sm text-bone-dim transition hover:border-volt hover:text-volt"
        >
          Falar com a Zinbox
        </a>
      </div>
    </footer>
  )
}
