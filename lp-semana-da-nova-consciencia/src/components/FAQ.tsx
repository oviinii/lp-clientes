import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';

/** Sessão 12 do briefing — Dúvidas Frequentes (conteúdo integral mantido). */
const faqs = [
  {
    q: 'Posso comprar meu ticket de ingresso fora do site oficial do Evento?',
    a: 'Os ingressos para a Semana da Nova Consciência estão disponíveis apenas no site oficial do evento. Não compre de terceiros pois a plataforma não faz transferência de titularidade.',
  },
  {
    q: 'Como recebo meu acesso?',
    a: 'Ao adquirir seu ingresso, você receberá um e-mail da remetente Leandra Soares com a confirmação de compra e participação no evento. Nesse e-mail, clique no link para entrar no grupo de WhatsApp por onde receberá os avisos sobre o evento e as MENSAGENS E CONTEÚDOS DE PREPARAÇÃO ENERGÉTICA.',
  },
  {
    q: 'Onde será a Semana da Nova Consciência?',
    a: 'A Semana da Nova Consciência será um grande congresso 100% online, realizado de 2 a 6 de dezembro de 2026, com 5 dias de Palestras, Vivências e Entrevistas para romper padrões antigos e manifestar uma nova realidade em 2027. Você terá ferramentas para alcançar Saúde para viver, Relacionamentos para amar e ser amada e Prosperidade para realizar.',
  },
  {
    q: 'Quais os horários da Semana da Nova Consciência?',
    a: 'As transmissões acontecem nos períodos da manhã, tarde e noite. A grade completa com os horários de cada dia será enviada no grupo oficial do evento após a sua inscrição.',
  },
  {
    q: 'O pagamento na plataforma é seguro?',
    a: 'Sim, é muito seguro. Confiamos inteiramente na Kiwify, plataforma que utilizamos para receber o seu pagamento. Ela é uma empresa credenciada pelos bancos, apta a receber pagamentos por PIX e cartões de crédito em diversas bandeiras.',
  },
  {
    q: 'É possível usar dois cartões de crédito na compra?',
    a: 'Sim é possível. Ao acessar o checkout após preencher os seus dados na parte de pagamento selecione a opção 2 cartões, em seguida aparecerá os campos para preencher com os dados do cartão 1 e abaixo do cartão 2. Ao optar pela modalidade de 2 cartões, não é possível completar o pagamento com outra forma, apenas com um segundo cartão de crédito.',
  },
  {
    q: 'É possível parcelar meu ticket de ingresso na compra?',
    a: 'Sim. O valor do ingresso pode ser dividido em até 12 vezes no cartão.',
  },
  {
    q: 'Posso presentear um amigo ou comprar mais de um ingresso?',
    a: 'Sim! Para isso, no ato da compra é imprescindível que você preencha os dados da pessoa presenteada, incluindo NOME, CPF e e-mail com atenção. Depois peça a outra pessoa que te confirme o recebimento do ingresso em seu e-mail e entre no grupo de WhatsApp exclusivo do evento.',
  },
  {
    q: 'Sobre troca, cancelamento ou transferência de ingresso, como proceder?',
    a: 'O ingresso é pessoal e intransferível, não é permitida a troca de titularidade. Casos de cancelamento: de acordo com o Código de Defesa do Consumidor, desistências após 7 dias da compra não são passíveis de cancelamento ou reembolso. Para solicitar devolução, entre em contato direto com a plataforma Kiwify em até 7 dias corridos. Em caso de imprevistos, desastres naturais ou calamidade pública que afete a transmissão online partindo de nossos servidores, o evento será reagendado e com antecedência a nova data será comunicada, não havendo reembolso. Casos de não comparecimento também não serão reembolsados.',
  },
  {
    q: 'Sobre direito de uso de imagem:',
    a: 'Ao participar do evento você concorda obrigatoriamente em ceder o uso da sua imagem em foto e vídeo que serão utilizados nas redes sociais, site e anúncios.',
  },
  {
    q: 'Receberei um Certificado de participação?',
    a: 'Sim, após o evento você pode solicitar seu certificado de participação na Semana da Expansão da Consciência com carga horária por e-mail e poderá imprimi-lo.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="cosmic relative scroll-mt-28 py-20 sm:py-24 md:scroll-mt-32">
      <div className="stars absolute inset-0 opacity-35" aria-hidden="true" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Duas colunas: título fixo à esquerda, acordeão à direita */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <span className="chip">Ainda tem dúvidas?</span>
              <h2 className="mt-6 text-3xl text-white sm:text-4xl">Dúvidas frequentes</h2>
              <p className="mt-5 text-sm leading-relaxed text-brand-muted">
                Se não encontrar sua resposta, fale com a equipe pelo WhatsApp ou e-mail.
              </p>
              <a href="#ingressos" className="btn-ghost mt-7">
                <MessageCircle size={16} />
                Falar com a equipe
              </a>
              <div className="hairline mt-8 hidden lg:block" aria-hidden="true" />
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div
                  key={faq.q}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-colors hover:bg-white/[0.06]"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    aria-expanded={openIndex === idx}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/60"
                  >
                    <span className="text-base font-semibold text-white">{faq.q}</span>
                    <ChevronDown
                      className={`shrink-0 transition-all duration-300 ${
                        openIndex === idx ? 'rotate-180 text-brand-gold' : 'text-brand-muted'
                      }`}
                      size={22}
                    />
                  </button>

                  <AnimatePresence>
                    {openIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="border-t border-white/10 p-6 text-sm leading-relaxed text-brand-muted">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <h3 className="text-lg text-white sm:text-xl">Informações gerais</h3>
              <div className="hairline mt-4" aria-hidden="true" />
              <p className="mt-5 text-sm leading-relaxed text-brand-muted">
                Reforçamos que o evento conta com uma carga extensa de conteúdo profundo, intervenções e
                dinâmicas, para que você possa realmente se integrar ao grupo e ao trabalho dos Despertadores
                da Nova Era.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-brand-muted">
                É importante estar atento aos horários de entrada nas salas online para não perder conteúdo.
              </p>
              <p className="mt-4 text-sm font-semibold text-white">
                Os valores de inscrição sofrerão alteração por lotes, sendo importante você efetuar sua
                compra o quanto antes para garantir menores preços.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
