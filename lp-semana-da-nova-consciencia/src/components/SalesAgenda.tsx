import { motion } from 'framer-motion';
import { CalendarDays, Check, Clock3 } from 'lucide-react';

/**
 * Programação dos dois dias + "Sua inscrição inclui:" (copy fiel do documento).
 * PENDÊNCIA: lista de bônus ainda não enviada pelo cliente ("(VOU LISTAR)").
 */
const inclui = [
  { texto: 'Imersão AO VIVO' },
  { texto: 'Meditação e Exercícios' },
  { texto: 'Grupo de WhatsApp' },
  { texto: 'Material de apoio ENVIADO NO GRUPO' },
  { texto: 'Apostila do evento ENVIADA NO GRUPO' },
];

const dias = [
  { dia: 'Sábado, 7/11', horario: 'das 9h às 17h' },
  { dia: 'Domingo, 8/11', horario: 'das 9h às 12h' },
];

export function SalesAgenda() {
  return (
    <section id="programacao" className="relative scroll-mt-28 bg-brand-light py-20 text-brand-ink sm:py-24 md:scroll-mt-32">
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="chip chip-dark">Programação</span>
          <h2 className="mt-6 text-4xl text-brand-night sm:text-5xl">Dois dias dedicados ao seu próximo passo.</h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
          {dias.map((d, idx) => (
            <motion.div
              key={d.dia}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="card-light flex flex-col items-center gap-3 p-8 text-center shadow-card"
            >
              <span className="info-ico">
                <CalendarDays size={17} strokeWidth={2.5} />
              </span>
              <h3 className="text-2xl text-brand-night">{d.dia}</h3>
              <p className="flex items-center gap-2 text-base font-semibold text-brand-ink/70">
                <Clock3 size={16} className="text-brand-amber" />
                {d.horario}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="hairline mt-14 max-w-3xl mx-auto" aria-hidden="true" />

        <div className="mx-auto mt-12 max-w-3xl">
          <h3 className="text-center text-3xl text-brand-night sm:text-4xl">Sua inscrição inclui:</h3>
          <ul className="mt-8 grid gap-4">
            {inclui.map((item) => (
              <li
                key={item.texto}
                className="card-light flex items-center gap-4 px-6 py-4 text-base font-medium text-brand-ink/85 sm:text-lg"
              >
                <span className="check-box border-brand-goldDeep bg-brand-gold/20">
                  <Check size={13} strokeWidth={4} className="text-brand-amber" />
                </span>
                {item.texto}
              </li>
            ))}
          </ul>
          {/* TODO: listar bônus — doc: "(VOU LISTAR)" */}
          <p className="mt-6 hidden items-center gap-3 text-sm text-brand-night/60">
            Bônus: a ser anunciado.
          </p>
        </div>
      </div>
    </section>
  );
}
