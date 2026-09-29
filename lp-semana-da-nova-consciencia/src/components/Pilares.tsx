import { motion } from 'framer-motion';

export function Pilares() {
  const cards = [
    {
      title: "Saúde para viver",
      desc: "Vitalidade e Equilíbrio",
      img: "/imagens/IMG_5398.jpg"
    },
    {
      title: "Relacionamentos",
      desc: "Para amar e ser amada",
      img: "/imagens/IMG_8902.jpg"
    },
    {
      title: "Prosperidade",
      desc: "Para realizar",
      img: "/imagens/IMG_8671.jpg"
    }
  ];

  return (
    <section className="py-20 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-violet/40 via-brand-dark to-brand-dark"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Chega de padrões que te travam.</h2>
          <p className="text-xl text-gray-300">Em apenas 5 dias descubra como alcançar:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-black/50 rounded-2xl overflow-hidden border border-brand-violet/30 hover:border-brand-gold/50 transition-colors"
            >
              <div className="h-64 overflow-hidden">
                <img src={card.img} alt={card.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2 text-brand-gold">{card.title}</h3>
                <p className="text-gray-300">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}