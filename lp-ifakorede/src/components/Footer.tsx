import {
  INSTAGRAM_URL,
  TEMPLE_INSTAGRAM_URL,
  WHATSAPP_URL,
} from '../data/content'

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink-3">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 text-center sm:flex-row sm:text-left lg:px-10">
        <div>
          <p className="font-display text-xl text-bone">
            Bàbáláwo Ifákọ́rẹ̀dé
          </p>
          <p className="mt-1 font-sans text-xs uppercase tracking-[0.24em] text-bone-dim">
            Ìjọ Ifádọlá · Ìṣẹ̀ṣe Lágba
          </p>
        </div>
        <p className="font-display text-lg italic text-brass">
          Orunmila gbe wa o!
        </p>
        <div className="flex items-center gap-5 font-sans text-sm text-bone-dim">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="transition hover:text-bone"
          >
            @obabalawoifakorede
          </a>
          <a
            href={TEMPLE_INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="transition hover:text-bone"
          >
            @ijoifadola
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="transition hover:text-bone"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  )
}
