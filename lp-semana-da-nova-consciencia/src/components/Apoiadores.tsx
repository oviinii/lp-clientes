import { Handshake } from 'lucide-react';

/**
 * Sessão 11 do briefing — apoiadores.
 * PENDÊNCIA DE CONTEÚDO: os logotipos oficiais dos apoiadores ainda não foram enviados.
 * Os espaços abaixo ficam reservados (sem placeholders falsos de marca) até o recebimento.
 */
export function Apoiadores() {
  return (
    <section className="paper relative overflow-hidden py-16 text-brand-ink sm:py-20">
      <div className="container relative z-10 mx-auto px-4 text-center">
        <span className="chip chip-dark">Parceiros</span>
        <h2 className="mt-5 text-2xl font-extrabold text-brand-night sm:text-3xl">
          Conheça nossos apoiadores
        </h2>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="flex h-28 w-44 items-center justify-center rounded-2xl border border-dashed border-brand-night/20 bg-white/60 text-xs font-bold uppercase tracking-[0.16em] text-brand-night/35"
            >
              <span className="flex items-center gap-2">
                <Handshake size={16} />
                Apoiador {i}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-brand-night/60">
          Quer apoiar a Semana da Nova Consciência? Fale com a nossa equipe.
        </p>
      </div>
    </section>
  );
}
