import { motion } from 'framer-motion';

export function Mentora() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/imagens/IMG_8663.jpg" 
          alt="Platéia" 
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-brand-dark/80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-brand-gold blur-3xl opacity-20 rounded-full"></div>
              <img 
                src="/imagens/imagem de capa2.webp" 
                alt="Leandra Soares" 
                className="relative z-10 w-full max-w-md mx-auto rounded-3xl shadow-2xl border-4 border-brand-violet/50"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2 text-center md:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-gold">
              Quem vai te conduzir nessa jornada?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Mentora com 30 anos de experiência em comunicação, realizadora do Congresso Multidimensional e fundadora do movimento dos Despertadores da Nova Era, <strong className="text-white">Leandra Soares</strong> une ciência e espiritualidade para te guiar rumo a 2027 com Saúde para viver, Relacionamentos para amar e ser amada e Prosperidade para realizar.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}