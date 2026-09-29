import { motion } from 'framer-motion';

export function Palestrantes() {
  const palestrantes = [
    {
      nome: "Palestrante Convidado 1",
      tema: "A Física Quântica no Dia a Dia",
      curriculo: "Especialista em desenvolvimento humano e neurociência aplicada à espiritualidade.",
      foto: "/imagens/CONGRESSOMULTIDIMENSIONAL-00123.jpg"
    },
    {
      nome: "Palestrante Convidada 2",
      tema: "Cura Energética e Frequencial",
      curriculo: "Terapeuta holística com mais de 15 anos de experiência em reprogramação mental.",
      foto: "/imagens/CONGRESSOMULTIDIMENSIONAL-00127.jpg"
    },
    {
      nome: "Palestrante Convidado 3",
      tema: "Abundância e Prosperidade na Nova Era",
      curriculo: "Mentor de negócios conscientes e facilitador de processos de expansão de consciência.",
      foto: "/imagens/CONGRESSOMULTIDIMENSIONAL-00130.jpg"
    }
  ];

  return (
    <section className="py-20 bg-brand-light">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-brand-violet">
          Palestrantes Confirmados
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {palestrantes.map((palestrante, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-brand-dark rounded-2xl overflow-hidden shadow-2xl group"
            >
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-brand-violet/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={palestrante.foto} 
                  alt={palestrante.nome} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
              <div className="p-6 text-center border-t-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-white mb-2">{palestrante.nome}</h3>
                <h4 className="text-brand-gold font-semibold mb-4">{palestrante.tema}</h4>
                <p className="text-gray-400 text-sm">{palestrante.curriculo}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}