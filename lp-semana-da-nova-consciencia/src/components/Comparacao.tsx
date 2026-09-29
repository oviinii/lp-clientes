import { motion } from 'framer-motion';

export function Comparacao() {
  const itens = [
    { ano26: "Encarar a verdade", ano27: "Acessar uma nova consciência" },
    { ano26: "Romper padrões antigos", ano27: "Fazer escolhas alinhadas à nova realidade" },
    { ano26: "Curar e encerrar ciclos", ano27: "Receber saúde, amor e prosperidade" },
    { ano26: "Reorganizar-se por dentro", ano27: "Transformar intenção em realização" },
    { ano26: "Preparar-se para a mudança", ano27: "Viver o salto para a Nova Era" },
  ];

  return (
    <section className="py-20 bg-brand-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-violet/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-gold/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 leading-tight text-white">
          O que você curar ainda em 2026 determinará a realidade que poderá viver em 2027.
        </h2>

        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 md:p-12 border border-white/10 mb-12">
          <div className="grid grid-cols-2 gap-4 md:gap-8 mb-8 pb-8 border-b border-white/20">
            <div className="text-center">
              <h3 className="text-2xl md:text-4xl font-bold text-gray-400">2026</h3>
              <p className="text-sm md:text-lg text-gray-500 uppercase tracking-widest mt-2">O ano da preparação</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl md:text-4xl font-bold text-brand-gold">2027</h3>
              <p className="text-sm md:text-lg text-brand-gold/70 uppercase tracking-widest mt-2">O ano do salto</p>
            </div>
          </div>

          <div className="space-y-6">
            {itens.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="grid grid-cols-2 gap-4 md:gap-8 items-center"
              >
                <div className="text-right pr-4 md:pr-8 border-r border-white/10">
                  <p className="text-gray-300 md:text-xl">{item.ano26}</p>
                </div>
                <div className="text-left pl-4 md:pl-8">
                  <p className="text-white font-bold md:text-xl">{item.ano27}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <button className="bg-gradient-to-r from-brand-gold to-yellow-600 text-white font-bold text-xl py-4 px-10 rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(205,161,60,0.5)]">
          Quero garantir minha vaga
        </button>
      </div>
    </section>
  );
}