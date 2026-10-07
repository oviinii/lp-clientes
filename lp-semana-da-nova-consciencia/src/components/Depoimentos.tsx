import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

/**
 * Sessão 02 do briefing — depoimentos.
 *
 * Por que os prints saíram da página:
 *  1. Cada print tinha uma proporção diferente (422px a 1381px de altura), o que fazia a
 *     seção inteira "pular" a cada troca de página.
 *  2. Os prints expõem dados pessoais: em 7 dos 8 aparece o telefone com DDD do cliente
 *     logo acima da mensagem (não é uma barra de cabeçalho — o número fica inline, acima
 *     de cada bloco de mensagem, o que torna o recorte automático pouco confiável).
 *
 * Solução: cards de depoimento transcritos, todos com a MESMA altura, com o texto fiel do
 * que foi escrito (sem correções) e apenas nome + inicial (sem telefone, e-mail ou link).
 * Os arquivos originais foram movidos de `public/` para `depoimentos-originais/` para não
 * serem servidos no deploy.
 *
 * Design: balão de conversa redesenhado (avatar com inicial + selo), altura fixa idêntica
 * e o amarelo reservado ao ornamento, ao selo e ao indicador ativo.
 */
const depoimentos = [
  {
    autor: 'Leonice A.',
    texto:
      'LEANDRA amei tudo foi tudo maravilhoso, a recepção do hotel as apresentações dos palestrantes o almoço o lanche da tarde, foi tudo de bom, gostei muito gratidão gratidão gratidão você Leandra e maravilhosa amei te conhecer',
  },
  {
    autor: 'Adelia M.',
    texto:
      'Oi Leandra e Valter!!! Adorei conhece-los pessoalmente. E que congresso vocês prepararam para nós. !!!!!! Quantas informações maravilhosas!!! Obrigada por tanta dedicação e empenho. Espero ve-los em breve. Um grande abraço!!! ❤️❤️❤️❤️',
  },
  {
    autor: 'Glauciarpaula',
    texto:
      'O Congresso pode ser definido por uma única palavra. PERFEITO em tudo. amei.\n\nGostaria de saber se o texto que o Prof Ergom leu no final pode ser enviado. Achei maravilhoso..',
  },
  {
    autor: 'Katia A.',
    texto:
      'Leandra equipe!\nGratidão pelo evento maravilhoso!!!!!\nAmei, aprendi muito e sei que é só o começo...\nOs 2 dias passaram voando...\nSenti uma energia linda!!!\nParabéns aos palestrantes também.... entrei em contato com coisas fantásticas...\nGratidão ao Universo, Deus e à espiritualidade toda por ter acesso à todo esse ensinamento.\n\nLindas vibrações à todos!!!\n🌷💙🩵💙🩵💙🩵💙🌷',
  },
  {
    autor: 'Participante',
    texto:
      'Parabéns e gratidão a Leandra e toda equipe maravilhosa!!! Muita emoção e crescimento pessoal nesses 2 dias abençoados. Já estou inscrita para o terceiro Congresso. 😍',
  },
  {
    autor: 'Vera',
    texto:
      'Parabéns Leandra, a você e a toda sua equipe, pelo congresso maravilhoso e inesquecível que vocês nos proporcionaram!\nVocê é muito iluminada! Gratidão por tudo! 🙏✨🙏✨🙏✨🙏✨',
  },
  {
    autor: 'Jana',
    texto:
      'Eu gostaria de agradecer a todos envolvidos no Congresso, em especial aos organizadores que deram um show em simpatia.\nPalestras maravilhosas e muitos conhecimentos adquiridos.\nQue a luz do Mestre Jesus abençoe a todos vcs 🙏\nE com certeza não deixarei de ir aos próximos .',
  },
  {
    autor: 'Rosangela T.',
    texto:
      'Parabéns! Gratidão 🙏 😍\nQuerida Leandra, toda equipe organizadora e os Anjos de Luz incansáveis que cuidaram com tanto carinho da organização impecável do congresso .\nFoi maravilhoso! Indescrítível! 🙏\n🙏 😍\nTenho a certeza que para vencer cada etapa desde o início sonharam, planejaram e realizaram com muito esforço , trabalho, dedicação e amor 💖 cada momento. Gratidão 🙏 por cada palestrante, cada ensinamento, abraço, amigos, verdades que soubemos e nos levam para uma jornada de crescimento melhor !\nQue o Mestre Jesus 🙏 abençoe a todos os envolvidos.\nEm especial a você, Leandra e ao Valter , Companheiro incansável nesta jornada de luz .',
  },
];

function usePerView() {
  const [perView, setPerView] = useState(1);

  useEffect(() => {
    const sm = window.matchMedia('(min-width: 640px)');
    const lg = window.matchMedia('(min-width: 1024px)');
    const update = () => setPerView(lg.matches ? 3 : sm.matches ? 2 : 1);
    update();
    sm.addEventListener('change', update);
    lg.addEventListener('change', update);
    return () => {
      sm.removeEventListener('change', update);
      lg.removeEventListener('change', update);
    };
  }, []);

  return perView;
}

export function Depoimentos() {
  const perView = usePerView();
  const [page, setPage] = useState(0);

  const totalPages = Math.max(1, Math.ceil(depoimentos.length / perView));

  // Mantém a página válida quando o número de cards por página muda (responsivo)
  useEffect(() => {
    setPage((atual) => Math.min(atual, totalPages - 1));
  }, [totalPages]);

  const next = () => setPage((atual) => (atual + 1) % totalPages);
  const prev = () => setPage((atual) => (atual - 1 + totalPages) % totalPages);

  return (
    <section id="depoimentos" className="cosmic relative scroll-mt-28 overflow-hidden py-20 sm:py-24 md:scroll-mt-32">
      <div className="stars absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-0 h-96 w-full max-w-3xl -translate-x-1/2 rounded-full bg-brand-gold/15 blur-[120px]"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-4">
        {/* Cabeçalho assimétrico */}
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <span className="chip">Provas de transformação</span>
            <h2 className="mt-6 text-[1.8rem] text-white sm:text-3xl lg:text-[2.6rem]">
              Milhares de vidas já foram transformadas unindo ciência, espiritualidade e evolução.
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-brand-muted lg:col-span-4 lg:pb-2">
            Mensagens reais de quem já viveu a experiência com a nossa equipe.
          </p>
        </div>

        <div className="relative mx-auto mt-14 max-w-6xl">
          <div className="overflow-hidden">
            <motion.div
              className="flex cursor-grab select-none items-stretch active:cursor-grabbing"
              animate={{ x: `-${page * 100}%` }}
              transition={{ type: 'spring', stiffness: 260, damping: 32 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.14}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) next();
                else if (info.offset.x > 60) prev();
              }}
            >
              {depoimentos.map((d, idx) => (
                <div key={d.autor + idx} className="shrink-0 px-2 sm:px-3" style={{ width: `${100 / perView}%` }}>
                  {/* Altura fixa igual para todos os cards: o carrossel nunca muda de tamanho */}
                  <article className="card-cosmic cosmic flex h-[25rem] flex-col p-6 sm:p-7">
                    <Quote className="shrink-0 text-brand-gold/70" size={22} aria-hidden="true" />

                    <p className="mt-4 flex-1 overflow-hidden whitespace-pre-line text-sm leading-relaxed text-brand-ice/90 line-clamp-[9]">
                      {d.texto}
                    </p>

                    <footer className="mt-5 flex shrink-0 items-center gap-3 border-t border-white/10 pt-5">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-gold/40 bg-brand-gold/10 text-sm font-black uppercase text-brand-gold">
                        {d.autor.charAt(0)}
                      </span>
                      <div className="min-w-0">
                        <p className="flex items-center gap-1.5 text-sm font-bold text-white">
                          {d.autor}
                          <BadgeCheck size={14} className="shrink-0 text-brand-gold" aria-hidden="true" />
                        </p>
                        <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-brand-muted">
                          Participante do congresso
                        </p>
                      </div>
                    </footer>
                  </article>
                </div>
              ))}
            </motion.div>
          </div>

          {totalPages > 1 && (
            <>
              <button
                onClick={prev}
                aria-label="Depoimentos anteriores"
                className="absolute left-1 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/15 bg-brand-night/80 p-3 text-brand-ice backdrop-blur transition-colors hover:border-brand-gold hover:text-brand-gold sm:left-2 lg:-left-16"
              >
                <ChevronLeft size={22} />
              </button>

              <button
                onClick={next}
                aria-label="Próximos depoimentos"
                className="absolute right-1 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/15 bg-brand-night/80 p-3 text-brand-ice backdrop-blur transition-colors hover:border-brand-gold hover:text-brand-gold sm:right-2 lg:-right-16"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}
        </div>

        {totalPages > 1 && (
          <>
            <div className="mt-8 flex justify-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  aria-label={`Ir para a página ${i + 1} de depoimentos`}
                  aria-current={i === page}
                  className={`h-2.5 rounded-full transition-all ${
                    i === page ? 'w-8 bg-brand-gold' : 'w-2.5 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <p className="mt-4 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-brand-muted lg:hidden">
              Arraste para o lado
            </p>
          </>
        )}

        <div className="hairline mx-auto mt-14 max-w-2xl" aria-hidden="true" />

        <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-brand-muted">
          Mensagens enviadas por participantes do Congresso Multidimensional, realizado pela mesma equipe.
          Textos transcritos exatamente como foram escritos; telefones e dados pessoais foram removidos.
        </p>

        <div className="mt-10 text-center">
          <a href="#ingressos" className="btn-gold">
            Quero minha vaga
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
