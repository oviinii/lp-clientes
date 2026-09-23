import { MessageCircle } from 'lucide-react'
import { WA } from '../data/content'

export function WhatsFloat() {
  return (
    <a
      href={WA.avaliacao}
      target="_blank"
      rel="noreferrer"
      aria-label="Avaliação grátis no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25d366] py-3 pl-4 pr-5 text-white shadow-soft transition hover:brightness-95"
    >
      <MessageCircle size={20} />
      <span className="font-sans text-sm font-medium">
        Avaliação Grátis
      </span>
    </a>
  )
}
