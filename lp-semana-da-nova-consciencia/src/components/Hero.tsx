import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-violet to-brand-gold/30">
      <div className="absolute inset-0 z-0">
        <img 
          src="/imagens/IMG_8663.jpg" 
          alt="Platéia" 
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center relative pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="/logos/logo-horizontal-1.png" 
            alt="Semana da Nova Consciência" 
            className="mx-auto mb-6 w-72 md:w-[420px] h-auto object-contain drop-shadow-[0_0_15px_rgba(205,161,60,0.3)]"
          />
          <h2 className="text-2xl md:text-3xl font-medium mb-6 text-gray-200">
            Prepare-se para 2027: O Ano do Salto de Consciência
          </h2>
          <p className="text-xl mb-8 font-light text-brand-gold">
            De 2 a 6 de dezembro | Evento 100% online
          </p>
          <p className="max-w-2xl mx-auto text-lg mb-10 text-gray-300">
            Mais de 25 Palestras, Entrevistas e Vivências para romper padrões antigos e manifestar uma nova realidade em 2027.
          </p>
          
          <button className="bg-gradient-to-r from-brand-gold to-yellow-600 text-white font-bold text-xl py-4 px-10 rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(205,161,60,0.5)]">
            Garantir minha vaga
          </button>
        </motion.div>
      </div>
    </section>
  );
}