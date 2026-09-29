import { motion } from 'framer-motion';

export function Frase() {
  return (
    <section className="py-32 relative bg-brand-violet overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/imagens/IMG_1951.JPG')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-violet via-brand-violet/80 to-brand-dark"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="text-3xl md:text-5xl font-light italic text-white leading-relaxed mb-8 font-serif">
            “Você enxerga apenas 1% da realidade. Nos outros 99% existe um campo de infinitas possibilidades que você nasceu com as ferramentas de acesso, mas não sabe usar. Chegou a hora de eu te mostrar.”
          </p>
          <p className="text-xl md:text-2xl font-bold text-brand-gold uppercase tracking-widest">
            - Leandra Soares
          </p>
        </motion.div>
      </div>
    </section>
  );
}