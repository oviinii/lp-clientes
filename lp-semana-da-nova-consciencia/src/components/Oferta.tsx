import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export function Oferta() {
  const beneficios = [
    "5 dias de programação online",
    "Grupo de WhatsApp com preparação energética para o evento",
    "Áudios diários de reprogramação frequenciados",
    "Palestras, painéis e vivências",
    "Transmissões nos períodos da manhã, tarde e noite",
    "Acesso ao grupo oficial do evento",
    "Interação pelo chat",
    "Materiais disponibilizados pelos palestrantes",
    "Replay de cada dia por 24 horas"
  ];

  return (
    <section className="py-24 bg-brand-light text-brand-dark">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-violet">
            Escolha seu Acesso
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Você deve se inscrever e entrar no grupo do evento. Lá irá receber os materiais exclusivos e os áudios diários de reprogramação frequenciados, para sucesso pessoal e abundância financeira em 2027.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-stretch justify-center">
          
          {/* Acesso Promocional */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-white rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-col"
          >
            <div className="text-center mb-8 border-b border-gray-100 pb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Acesso Promocional</h3>
              <p className="text-brand-violet font-semibold mb-6">Vagas Limitadas</p>
              <p className="text-gray-400 line-through mb-1">De R$ 497,00</p>
              <div className="text-5xl font-black text-gray-900 mb-2">
                <span className="text-2xl font-bold">R$</span> 297<span className="text-2xl font-bold">,00</span>
              </div>
              <p className="text-sm font-bold text-green-600 uppercase tracking-widest bg-green-100 py-1 px-3 rounded-full inline-block">Lote 1</p>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              {beneficios.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-600">
                  <Check className="text-green-500 shrink-0 mt-1" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button className="w-full bg-gray-900 text-white font-bold text-lg py-4 rounded-xl hover:bg-gray-800 transition-colors">
              COMPRAR INGRESSO
            </button>
          </motion.div>

          {/* Acesso Comunidade Nova Era */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex-1 bg-brand-dark text-white rounded-3xl p-8 shadow-2xl border-2 border-brand-gold relative flex flex-col transform md:-translate-y-4"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-gold text-brand-dark font-black px-6 py-2 rounded-full text-sm uppercase tracking-wider flex items-center gap-2 shadow-lg whitespace-nowrap">
              <span>Opção escolhida por +90%</span>
            </div>

            <div className="text-center mb-8 border-b border-white/10 pb-8 mt-4">
              <h3 className="text-2xl font-bold text-white mb-2">Acesso Comunidade Nova Era</h3>
              <p className="text-brand-gold font-semibold mb-6">Acesso Completo + Bônus</p>
              <p className="text-gray-400 line-through mb-1">De R$ 1.497,00</p>
              <div className="text-5xl font-black text-white mb-2">
                <span className="text-2xl font-bold">R$</span> 797<span className="text-2xl font-bold">,00</span>
              </div>
              <p className="text-gray-300">ou 12x no cartão</p>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              {beneficios.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-300">
                  <Check className="text-brand-gold shrink-0 mt-1" size={20} />
                  <span>{item}</span>
                </li>
              ))}
              <li className="flex items-start gap-3 text-white font-bold mt-4 pt-4 border-t border-white/10">
                <Check className="text-brand-gold shrink-0 mt-1" size={20} />
                <span>+ Acesso exclusivo à Comunidade Nova Era</span>
              </li>
              <li className="flex items-start gap-3 text-white font-bold">
                <Check className="text-brand-gold shrink-0 mt-1" size={20} />
                <span>+ Encontros mensais de mentoria</span>
              </li>
            </ul>

            <button className="w-full bg-gradient-to-r from-brand-gold to-yellow-600 text-white font-bold text-xl py-4 rounded-xl hover:scale-[1.02] transition-transform shadow-[0_0_20px_rgba(205,161,60,0.4)]">
              COMPRAR INGRESSO
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}