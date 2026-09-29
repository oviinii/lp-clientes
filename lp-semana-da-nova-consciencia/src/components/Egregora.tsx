import { motion } from 'framer-motion';

export function Egregora() {
  return (
    <section className="relative py-32 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/imagens/Roda de Cura Tridimensional.jpg" 
          alt="Egrégora" 
          className="w-full h-full object-cover opacity-40 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-transparent to-brand-dark"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white drop-shadow-2xl">
            Com a Egrégora trabalhando no campo sutil, vamos romper barreiras, criar experiências de aprendizado, reflexão, conexão e transformação.
          </h2>
        </motion.div>
      </div>
    </section>
  );
}