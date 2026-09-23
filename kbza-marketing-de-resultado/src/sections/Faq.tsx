import { Plus } from 'lucide-react'
import { useState } from 'react'
import { Reveal } from '../components/Reveal'
import { faqs } from '../data/content'

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <p className="text-center font-sans text-xs uppercase tracking-[0.4em] text-leaf">
            Dúvidas frequentes
          </p>
          <h2 className="mt-6 text-center font-display text-4xl font-bold tracking-tight text-bone sm:text-5xl">
            Perguntas de quem <span className="text-lime">capta alunos.</span>
          </h2>
        </Reveal>

        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <Reveal key={f.question} delay={i * 0.05}>
                <div
                  className={`rounded-2xl border transition-colors ${
                    isOpen ? 'border-leaf/40 bg-ink-2' : 'border-line bg-ink-2/60'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  >
                    <span className="font-sans font-semibold text-bone">
                      {f.question}
                    </span>
                    <Plus
                      size={18}
                      className={`shrink-0 text-leaf transition-transform duration-300 ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="px-5 pb-5 font-sans text-sm leading-relaxed text-bone-dim">
                      {f.answer}
                    </p>
                  )}
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
