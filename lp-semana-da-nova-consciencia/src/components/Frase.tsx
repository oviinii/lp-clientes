import { motion } from 'framer-motion';

/**
 * Frase de impacto — na ID da campanha: fundo navy profundo,
 * citação em Anton com destaque ouro, sem efeitos artificiais.
 */
export function Frase() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-brand-night py-28 sm:py-36">
      <div
        className="absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-royal/25 blur-[140px]"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="chip mx-auto">Leandra Soares</span>

          <blockquote className="mt-8 font-display text-4xl uppercase leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            “Você enxerga apenas 1% da realidade.{' '}
            <span className="text-gold-gradient">
              Nos outros 99% existe um campo de infinitas possibilidades
            </span>{' '}
            que você nasceu com as ferramentas de acesso, mas não sabe usar. Chegou a hora de eu te
            mostrar.”
          </blockquote>

          <div className="mx-auto mt-9 h-1 w-24 bg-brand-gold" />
        </motion.div>
      </div>
    </section>
  );
}
