import { useState } from 'react'
import { Plus } from 'lucide-react'
import { FAQ, PHONE_HREF } from '../data/content'
import { Reveal } from '../components/Reveal'

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="mx-auto max-w-4xl px-6 py-20 lg:px-10">
      <Reveal className="text-center">
        <p className="eyebrow text-honey">Dúvidas frequentes</p>
        <h2 className="mt-3 font-display text-4xl text-cream md:text-5xl">
          Antes de pegar a estrada
        </h2>
      </Reveal>

      <div className="mt-10 divide-y divide-line rounded-3xl border border-line bg-ember-900/60 px-6 md:px-8">
        {FAQ.map((item, i) => {
          const isOpen = open === i
          return (
            <div key={item.q}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="font-display text-lg text-cream md:text-xl">
                  {item.q}
                </span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition ${
                    isOpen
                      ? 'rotate-45 border-flame bg-flame text-white'
                      : 'border-cream/30 text-cream'
                  }`}
                >
                  <Plus size={16} />
                </span>
              </button>
              {isOpen && (
                <p className="pb-6 font-sans text-[15px] leading-relaxed text-cream-dim">
                  {item.a}
                </p>
              )}
            </div>
          )
        })}
      </div>

      <Reveal className="mt-8 text-center">
        <a
          href={PHONE_HREF}
          className="inline-flex rounded-full border border-cream/30 px-8 py-4 font-sans text-sm uppercase tracking-[0.18em] text-cream transition hover:border-flame hover:text-flame"
        >
          Ainda com dúvida? Ligue
        </a>
      </Reveal>
    </section>
  )
}
