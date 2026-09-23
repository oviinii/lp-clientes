import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Music, Flame, BookOpen } from 'lucide-react'
import egungun1 from '../assets/images/egungun-oyo.jpg'
import egungun2 from '../assets/images/palms.jpg'
import egungun3 from '../assets/images/iron.jpg'
import ogun1 from '../assets/images/ogun-statue.jpg'
import ogun2 from '../assets/images/ogun-mask.jpg'
import ogun3 from '../assets/images/forge.jpg'

type Slide = {
  id: number
  src: string
  alt: string
  title: string
  category: string
}

const slides: Slide[] = [
  {
    id: 1,
    src: egungun1,
    alt: 'Egungun em Òyó',
    title: 'Egungun Masquerade — Òyó',
    category: 'Egungun',
  },
  {
    id: 2,
    src: egungun2,
    alt: 'Palmas em Òyó',
    title: 'Caminho dos ancestrais',
    category: 'Egbe Orun',
  },
  {
    id: 3,
    src: egungun3,
    alt: 'Ferro e tradição',
    title: 'O ferro que não mente',
    category: 'Ògún',
  },
  {
    id: 4,
    src: ogun1,
    alt: 'Estátua de Ògún',
    title: 'Ògún, senhor do ferro',
    category: 'Ògún',
  },
  {
    id: 5,
    src: ogun2,
    alt: 'Máscara de Ògún',
    title: 'A máscara do guerreiro',
    category: 'Ògún',
  },
  {
    id: 6,
    src: ogun3,
    alt: 'Forja tradicional',
    title: 'O fogo que transforma',
    category: 'Ògún',
  },
]

const categoryIcons: Record<string, React.ReactNode> = {
  Egungun: <Music size={12} strokeWidth={1.5} />,
  'Egbe Orun': <BookOpen size={12} strokeWidth={1.5} />,
  Ògún: <Flame size={12} strokeWidth={1.5} />,
}

export function EgbeEgungun() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center', slidesToScroll: 1 })
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)

  const scrollTo = useCallback((index: number) => {
    emblaApi?.scrollTo(index)
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const onInit = () => setScrollSnaps(emblaApi.scrollSnapList())
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    const onScroll = () => setScrollProgress(emblaApi.scrollProgress())
    emblaApi.on('init', onInit)
    emblaApi.on('select', onSelect)
    emblaApi.on('scroll', onScroll)
    onInit()
    return () => {
      emblaApi.off('init', onInit)
      emblaApi.off('select', onSelect)
      emblaApi.off('scroll', onScroll)
    }
  }, [emblaApi])

  return (
    <section id="egbe" className="relative bg-ink-2 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-3">
          <p className="flex items-center gap-3 font-sans text-xs uppercase tracking-[0.4em] text-brass">
            <span className="slash" /> Memória viva
          </p>
          <h2 className="max-w-3xl font-display text-4xl leading-tight text-bone sm:text-5xl">
            Egbe Orun e Egungun:
            <br />
            <span className="italic text-iron">os ancestrais falam</span>.
          </h2>
          <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-bone-dim">
            Egbe Orun é o grupo espiritual que acompanha o ori desde antes do
            nascimento. Egungun é a manifestação dos ancestrais na terra. Em
            Òyó, isso não é teoria — é culto, responsabilidade e presença.
          </p>
        </div>

        <div className="relative mt-16" ref={emblaRef}>
          <div className="overflow-hidden">
            <div className="flex" style={{ transform: `translateX(-${scrollProgress * 100}%)` }}>
              {slides.map((slide) => (
                <div key={slide.id} className="flex-[0_0_100%] min-w-0 px-2 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
                  <div className="relative aspect-[4/5] overflow-hidden bg-ink-3">
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.28em] text-brass mb-3">
                        <span>{categoryIcons[slide.category]}</span>
                        {slide.category}
                      </div>
                      <h3 className="font-display text-xl text-bone sm:text-2xl">
                        {slide.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => emblaApi?.scrollPrev()}
              aria-label="Anterior"
              className="h-12 w-12 flex items-center justify-center rounded-full border border-brass/40 text-brass transition hover:border-iron hover:text-iron hover:bg-ink"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-1.5" role="tablist" aria-label="Slides">
              {scrollSnaps.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === selectedIndex}
                  aria-label={`Ir para slide ${i + 1}`}
                  onClick={() => scrollTo(i)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    i === selectedIndex
                      ? 'w-6 bg-iron'
                      : 'bg-brass/40 hover:bg-brass'
                  }`} />
              ))}
            </div>

            <button
              type="button"
              onClick={() => emblaApi?.scrollNext()}
              aria-label="Próximo"
              className="h-12 w-12 flex items-center justify-center rounded-full border border-brass/40 text-brass transition hover:border-iron hover:text-iron hover:bg-ink"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {[
            {
              icon: Music,
              title: 'Egungun',
              text: 'Culto aos ancestrais manifestados. Responsabilidade, memória, axé da linhagem.',
            },
            {
              icon: BookOpen,
              title: 'Egbe Orun',
              text: 'O grupo do céu. O que escolhemos antes de vir. Orientação para alinhar o destino.',
            },
            {
              icon: Flame,
              title: 'Ògún + Osoosi',
              text: 'O ferro que abre caminho e o caçador que mira certo. Cultuados juntos na família.',
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-6 border border-line bg-ink"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center border border-brass/40 text-brass mb-4">
                <item.icon size={20} strokeWidth={1.4} />
              </div>
              <h3 className="font-display text-xl text-bone">{item.title}</h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-bone-dim">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { motion } from 'motion/react'