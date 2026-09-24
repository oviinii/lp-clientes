import { useState } from 'react'
import { Plus } from 'lucide-react'
import { FAQ, INSTAGRAM_URL } from '../data/content'
import { Reveal } from '../components/Reveal'

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="mx-auto max-w-4xl px-6 pb-20 lg:px-10">
      <Reveal className="text-left">
        <p className="eyebrow text-mocha">Dúvidas frequentes</p>
        <h2 className="mt-3 font-display text-5xl text-cocoa md:text-6xl">
          Antes de garantir o seu look
        </h2>
      </Reveal>

      <div className="mt-10 overflow-hidden rounded-[2rem] bg-card shadow-lift ring-1 ring-line">
        {FAQ.map((item, i) => {
          const isOpen = open === i
          return (
            <div
              key={item.q}
              className={i > 0 ? 'border-t border-line' : undefined}
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-7 py-5 text-left transition hover:bg-oat-2/50 md:px-9"
              >
                <span className="font-display text-lg text-cocoa md:text-xl">
                  {item.q}
                </span>
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${
                    isOpen
                      ? 'rotate-45 bg-cocoa text-white'
                      : 'bg-oat-2 text-cocoa'
                  }`}
                >
                  <Plus size={16} />
                </span>
              </button>
              {isOpen && (
                <p className="px-7 pb-6 font-sans text-[15px] leading-relaxed text-cocoa-2 md:px-9">
                  {item.a}
                </p>
              )}
            </div>
          )
        })}
      </div>

      <Reveal className="mt-8">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="font-sans text-sm uppercase tracking-[0.2em] text-mocha underline-offset-8 hover:underline"
        >
          Perguntar no Direct →
        </a>
      </Reveal>
    </section>
  )
}
