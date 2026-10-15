import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

/**
 * Sessão 05 do briefing — Egrégora.
 * Ajuste pedido: fundo com imagem de egrégora — foto real da plateia em
 * vivência coletiva, com véu navy para leitura do texto.
 */
export function Egregora() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden py-28 sm:py-32">
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src="/imagens/CONGRESSOMULTIDIMENSIONAL-00123.jpg"
          alt=""
          loading="lazy"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-brand-night/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-night via-brand-night/60 to-brand-night" />
      </div>

      <div className="container relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="mx-auto mb-8 flex h-14 w-14 items-center justify-center rounded-full border border-brand-gold/40 bg-brand-night/70 text-brand-gold backdrop-blur">
            <Quote size={24} />
          </span>

          <h2 className="text-2xl font-semibold leading-snug text-white sm:text-3xl lg:text-4xl">
            Com a Egrégora trabalhando no campo sutil, vamos romper barreiras, criar experiências de
            aprendizado, reflexão, conexão e transformação.
          </h2>

          <p className="chip mt-8">
            Leandra Soares
          </p>
        </motion.div>
      </div>
    </section>
  );
}
