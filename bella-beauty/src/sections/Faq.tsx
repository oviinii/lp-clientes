import { useState } from 'react'
import { Plus } from 'lucide-react'
import { FAQ, WA } from '../data/content'
import { Reveal } from '../components/Reveal'

export function Faq({ items = FAQ }: { items?: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="border-t border-line bg-cream-2/50">
      <div className="mx-auto max-w-4xl px-6 py-20 lg:px-10">
        <Reveal className="text-center">
          <p className="eyebrow text-rose">Perguntas frequentes</p>
          <h2 className="mt-3 font-display text-4xl text-ink md:text-5xl">
            Tudo que você precisa saber
          </h2>
        </Reveal>

        <div className="mt-10 divide-y divide-line rounded-3xl border border-line bg-white/70 px-6 md:px-8">
          {items.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-display text-lg text-ink md:text-xl">
                    {item.q}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition ${
                      isOpen
                        ? 'rotate-45 border-rose bg-rose text-white'
                        : 'border-ink/25 text-ink'
                    }`}
                  >
                    <Plus size={16} />
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-6 font-sans text-[15px] leading-relaxed text-ink-2">
                    {item.a}
                  </p>
                )}
              </div>
            )
          })}
        </div>

        <Reveal className="mt-8 text-center">
          <a
            href={WA.duvidas}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-full bg-ink px-8 py-4 font-sans text-sm uppercase tracking-[0.18em] text-cream transition hover:bg-rose"
          >
            Tirar dúvidas no WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  )
}
