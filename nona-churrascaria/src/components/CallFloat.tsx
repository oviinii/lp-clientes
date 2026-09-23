import { Phone } from 'lucide-react'
import { PHONE_HREF } from '../data/content'

export function CallFloat() {
  return (
    <a
      href={PHONE_HREF}
      aria-label="Ligar para a Churrascaria da Nona"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-flame py-3 pl-4 pr-5 text-white shadow-glow transition hover:bg-flame-deep"
    >
      <Phone size={20} />
      <span className="font-sans text-sm font-medium">Ligar agora</span>
    </a>
  )
}
