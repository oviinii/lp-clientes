import { AtSign } from 'lucide-react'
import { INSTAGRAM_URL } from '../data/content'

export function InstaFloat() {
  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Comprar pelo AtSign da Fuel Fit"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-gradient-to-r from-mocha-deep via-mocha to-caramel py-3 pl-4 pr-5 text-white shadow-glow transition hover:brightness-110"
    >
      <AtSign size={20} />
      <span className="font-sans text-sm font-medium">Comprar agora</span>
    </a>
  )
}
