import { MANTRAS } from '../data/content'

export function Marquee() {
  const row = [...MANTRAS, ...MANTRAS]
  return (
    <div className="mt-16 overflow-hidden border-y border-line bg-oat-2/60 py-4">
      <div className="animate-marquee flex w-max items-center gap-8 pr-8">
        {row.map((m, i) => (
          <span
            key={`${m}-${i}`}
            className="flex items-center gap-8 whitespace-nowrap font-sans text-sm uppercase tracking-[0.24em] text-cocoa-2"
          >
            {m}
            <span aria-hidden className="text-mocha">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
