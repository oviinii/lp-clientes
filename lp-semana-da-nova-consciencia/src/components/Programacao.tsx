import { motion } from 'framer-motion';

export function Programacao() {
  const dias = [
    {
      dia: "1º Dia: Entendimento do cenário",
      titulo: "2027 está chegando: o que vai mudar na humanidade e como isso afetará minha vida?"
    },
    {
      dia: "2º Dia: Compreender a estrutura oculta",
      titulo: "Descubra as estratégias invisíveis de quem ainda tenta programar sua mente"
    },
    {
      dia: "3º Dia: Libertar-se das correntes de escassez emocional",
      titulo: "Reconheça padrões, crenças e feridas e veja como curá-los"
    },
    {
      dia: "4º Dia: Ativar a consciência capaz de desejar e realizar",
      titulo: "Ancore realizações infinitas com ferramentas de práticas quânticas seguras"
    },
    {
      dia: "5º Dia: Extrair o melhor dos portais abertos no próximo ano",
      titulo: "Como aproveitar o salto de consciência de 2027 para manifestar saúde, amor e prosperidade"
    }
  ];

  return (
    <section className="py-20 bg-brand-light text-brand-dark">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-brand-violet">
          Como será a Semana da Nova Consciência?
        </h2>

        <div className="space-y-6">
          {dias.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-xl flex flex-col md:flex-row gap-6 items-center border-l-4 border-brand-gold"
            >
              <div className="flex-shrink-0 w-24 h-24 rounded-full bg-brand-violet/10 flex items-center justify-center border-2 border-brand-violet/20">
                <span className="text-3xl font-bold text-brand-violet">{idx + 1}</span>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-brand-violet mb-2">{item.dia}</h3>
                <p className="text-lg text-gray-700 font-medium">{item.titulo}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}