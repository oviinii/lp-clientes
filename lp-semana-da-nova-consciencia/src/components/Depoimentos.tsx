import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Sessão 02 do briefing — depoimentos.
 * CORREÇÃO: o carrossel anterior quebrava ao passar as páginas porque
 *  1. cada print tinha uma proporção diferente (422px a 1381px de altura), o que fazia
 *     a seção inteira "pular" a cada troca de página;
 *  2. as setas ficavam posicionadas fora do container e sumiam no mobile;
 *  3. 2 dos 8 depoimentos disponíveis em public/depoimentos nunca apareciam.
 * Agora: slides com proporção fixa + object-contain (altura estável), avanço por página,
 * arraste (swipe) no mobile, setas dentro do container e todos os depoimentos no rodízio.
 */
const prints = [
  '/depoimentos/IMG_2657.jpg',
  '/depoimentos/IMG_2664.jpg',
  '/depoimentos/IMG_2668.jpg',
  '/depoimentos/IMG_2670.jpg',
  '/depoimentos/IMG_2672.jpg',
  '/depoimentos/IMG_2673.jpg',
  '/depoimentos/ddb36d34-66a9-4be0-81d2-3c869d73e42a.jpg',
  '/depoimentos/7489452d-0604-4886-9021-165859fcc1dd.jpg',
];

function usePerView() {
  const [perView, setPerView] = useState(1);

  useEffect(() => {
    const sm = window.matchMedia('(min-width: 640px)');
    const lg = window.matchMedia('(min-width: 1024px)');
    const update = () => setPerView(lg.matches ? 3 : sm.matches ? 2 : 1);
    update();
    sm.addEventListener('change', update);
    lg.addEventListener('change', update);
    return () => {
      sm.removeEventListener('change', update);
      lg.removeEventListener('change', update);
    };
  }, []);

  return perView;
}

export function Depoimentos() {
  const perView = usePerView();
  const [page, setPage] = useState(0);

  const totalPages = Math.max(1, Math.ceil(prints.length / perView));

  // Mantém a página válida quando o número de slides por página muda (responsivo)
  useEffect(() => {
    setPage((atual) => Math.min(atual, totalPages - 1));
  }, [totalPages]);

  const next = () => setPage((atual) => (atual + 1) % totalPages);
  const prev = () => setPage((atual) => (atual - 1 + totalPages) % totalPages);

  return (
    <section id="depoimentos" className="cosmic relative scroll-mt-28 overflow-hidden py-24 md:scroll-mt-32">
      <div className="stars absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-0 h-96 w-full max-w-3xl -translate-x-1/2 rounded-full bg-brand-gold/15 blur-[120px]"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-4 text-center">
        <span className="chip">Provas de transformação</span>
        <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
          Milhares de vidas já foram transformadas unindo ciência, espiritualidade e evolução.
        </h2>

        <div className="relative mx-auto mt-14 max-w-6xl">
          {/* Trilho do carrossel — altura estável, independente da proporção de cada print */}
          <div className="overflow-hidden">
            <motion.div
              className="flex cursor-grab select-none active:cursor-grabbing"
              animate={{ x: `-${page * 100}%` }}
              transition={{ type: 'spring', stiffness: 260, damping: 32 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.14}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) next();
                else if (info.offset.x > 60) prev();
              }}
            >
              {prints.map((src, idx) => (
                <div key={src} className="shrink-0 px-2 sm:px-3" style={{ width: `${100 / perView}%` }}>
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-brand-gold/25 bg-brand-night/70 shadow-card">
                    <img
                      src={src}
                      alt={`Depoimento ${idx + 1} de participante da Semana da Nova Consciência`}
                      loading="lazy"
                      draggable={false}
                      className="absolute inset-0 h-full w-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {totalPages > 1 && (
            <>
              <button
                onClick={prev}
                aria-label="Depoimentos anteriores"
                className="absolute left-1 top-1/2 z-20 -translate-y-1/2 rounded-full border border-brand-gold/30 bg-brand-night/80 p-3 text-brand-ice backdrop-blur transition-colors hover:bg-brand-gold hover:text-brand-night sm:left-2 lg:-left-16"
              >
                <ChevronLeft size={22} />
              </button>

              <button
                onClick={next}
                aria-label="Próximos depoimentos"
                className="absolute right-1 top-1/2 z-20 -translate-y-1/2 rounded-full border border-brand-gold/30 bg-brand-night/80 p-3 text-brand-ice backdrop-blur transition-colors hover:bg-brand-gold hover:text-brand-night sm:right-2 lg:-right-16"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}
        </div>

        {totalPages > 1 && (
          <>
            <div className="mt-8 flex justify-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  aria-label={`Ir para a página ${i + 1} de depoimentos`}
                  aria-current={i === page}
                  className={`h-2.5 rounded-full transition-all ${
                    i === page ? 'w-8 bg-brand-gold' : 'w-2.5 bg-white/25 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-brand-muted lg:hidden">
              Arraste para o lado
            </p>
          </>
        )}

        <a href="#ingressos" className="btn-gold mt-12">
          Quero minha vaga
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}
