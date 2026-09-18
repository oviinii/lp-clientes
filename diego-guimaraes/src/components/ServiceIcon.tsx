import type { ReactNode } from 'react'
import {
  Compass,
  Flame,
  Users,
  ScrollText,
  HandHelping,
  Music,
} from 'lucide-react'
import type { Service } from '../data/services'

const icons: Record<Service['icon'], ReactNode> = {
  obi: <Compass size={20} strokeWidth={1.4} />,
  ewe: <Flame size={20} strokeWidth={1.4} />,
  egungun: <Music size={20} strokeWidth={1.4} />,
  family: <Users size={20} strokeWidth={1.4} />,
  mentor: <HandHelping size={20} strokeWidth={1.4} />,
  festival: <ScrollText size={20} strokeWidth={1.4} />,
}

export function ServiceIcon({ name }: { name: Service['icon'] }) {
  return <>{icons[name]}</>
}
