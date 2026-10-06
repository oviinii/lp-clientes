import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

/**
 * Sessão 08 do briefing.
 * Identidade pedida (grifado): "Bem lúdica na identidade do evento."
 * Solução: portal de luz com anéis dourados, partículas flutuantes animadas e a frase
 * em serifada itálica — lúdico, cósmico e alinhado à campanha (navy + amarelo).
 */
const particulas = Array.from({ length: 22 }, (_, i) => ({
  left: `${(i * 37) % 100}%`,
  bottom: `${(i * 17) % 45}%`,
  size: 4 + (i % 4) * 3,
  duration: `${7 + (i % 6) * 1.6}s`,
  delay: `${(i % 8) * 0.9}s`,
}));

export function Frase() {
  return (
    <section className="cosmic relative flex items-center justify-center overflow-hidden py-28 sm:py-36">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="stars absolute inset-0 opacity-60" />
        <div className="rings-gold absolute left-1/2 top-1/2 h-[130vh] w-[130vh] -translate-x-1/2 -translate-y-1/2 animate-glow-pulse" />
        <div className="rings absolute left-1/2 top-1/2 h-[95vh] w-[95vh] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gold/25 blur-[120px]" />
        <div className="absolute left-[12%] top-[22%] h-40 w-40 rounded-full bg-brand-blue/40 blur-[90px]" />
        <div className="absolute bottom-[12%] right-[10%] h-52 w-52 rounded-full bg-brand-blue/30 blur-[110px]" />
      </div>

      {/* Partículas de luz subindo — o "lúdico" da identidade do evento */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {particulas.map((p, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: p.left,
              bottom: p.bottom,
              width: p.size,
              height: p.size,
              animationDuration: p.duration,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="mx-auto mb-8 flex h-14 w-14 animate-floaty items-center justify-center rounded-full border border-brand-gold/50 bg-brand-night/70 text-brand-gold backdrop-blur">
            <Sparkles size={24} />
          </span>

          <blockquote className="font-serif text-2xl font-medium italic leading-snug sm:text-3xl lg:text-[2.6rem]">
            <span className="text-white">“Você enxerga apenas 1% da realidade.</span>{' '}
            <span className="text-gold-gradient">
              Nos outros 99% existe um campo de infinitas possibilidades
            </span>{' '}
            <span className="text-white">
              que você nasceu com as ferramentas de acesso, mas não sabe usar. Chegou a hora de eu te
              mostrar.”
            </span>
          </blockquote>

          <div className="mx-auto mt-9 h-px w-24 bg-gradient-to-r from-transparent via-brand-gold to-transparent" />

          <p className="mt-6 text-sm font-bold uppercase tracking-[0.28em] text-brand-gold">
            Leandra Soares
          </p>
        </motion.div>
      </div>
    </section>
  );
}
