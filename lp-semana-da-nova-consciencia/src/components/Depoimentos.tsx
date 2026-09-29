import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Depoimentos() {
  const prints = [
    "/depoimentos/IMG_2657.jpg",
    "/depoimentos/IMG_2664.jpg",
    "/depoimentos/IMG_2668.jpg",
    "/depoimentos/IMG_2670.jpg",
    "/depoimentos/IMG_2672.jpg",
    "/depoimentos/IMG_2673.jpg",
  ];

  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(prints.length / perPage);

  const next = () => setPage((prev) => (prev + 1) % totalPages);
  const prev = () => setPage((prev) => (prev - 1 + totalPages) % totalPages);

  const visible = prints.slice(page * perPage, page * perPage + perPage);

  return (
    <section className="py-20 bg-black relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-brand-gold/20 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 max-w-4xl mx-auto leading-tight">
          Milhares de vidas já foram transformadas unindo ciência, espiritualidade e evolução.
        </h2>

        <div className="relative max-w-6xl mx-auto mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-start">
            {visible.map((src, i) => (
              <div key={`${page}-${i}`} className="overflow-hidden rounded-2xl shadow-[0_0_30px_rgba(205,161,60,0.3)] bg-white/5">
                <img src={src} alt={`Depoimento ${page * perPage + i + 1}`} className="w-full h-auto object-contain" loading="lazy" />
              </div>
            ))}
          </div>

          <button onClick={prev} aria-label="Anterior" className="absolute left-[-16px] md:left-[-56px] top-1/2 -translate-y-1/2 bg-brand-violet/70 p-3 rounded-full hover:bg-brand-gold transition-colors shadow-lg">
            <ChevronLeft size={24} />
          </button>

          <button onClick={next} aria-label="Próximo" className="absolute right-[-16px] md:right-[-56px] top-1/2 -translate-y-1/2 bg-brand-violet/70 p-3 rounded-full hover:bg-brand-gold transition-colors shadow-lg">
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mb-12">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`Ir para página ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${i === page ? 'w-8 bg-brand-gold' : 'w-2.5 bg-white/20 hover:bg-white/40'}`}
            />
          ))}
        </div>

        <button className="bg-gradient-to-r from-brand-gold to-yellow-600 text-white font-bold text-xl py-4 px-10 rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(205,161,60,0.5)]">
          Quero minha vaga
        </button>
      </div>
    </section>
  );
}