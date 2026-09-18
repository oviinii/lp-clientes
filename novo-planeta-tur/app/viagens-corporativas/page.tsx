import Reveal from "@/components/Reveal";
import { CTAWhats, PageHero, SectionHeading } from "@/components/ui";

export const metadata = { title: "Viagens Corporativas — Planeta Turismo" };

const DIFERENCIAIS = [
  ["🤝", "Atendimento dedicado", "Consultores exclusivos que conhecem sua empresa e seus viajantes."],
  ["⚡", "Autonomia e agilidade", "Negociação direta com fornecedores e resolução rápida de problemas."],
  ["💰", "Tarifas competitivas", "Aéreo nacional e internacional sempre com os melhores preços."],
  ["🏨", "Rede ampla de hotéis", "Diretório com tarifas especiais e condições exclusivas."],
  ["🧾", "Pagamento flexível", "Faturamento estendido adequado ao fluxo da empresa."],
  ["🌙", "Atendimento 24/7", "Todos os dias, a qualquer hora, para emergências."],
];

const SERVICOS = [
  "Passagens aéreas nacionais e internacionais com atendimento personalizado",
  "Reserva de hotéis com acordos exclusivos",
  "Locação de veículos (diárias e mensais) com instruções ao condutor",
  "Traslados: carros, vans, ônibus, helicópteros e táxis aéreos",
  "Seguro viagem avaliado por destino e perfil",
  "Receptivo global em aeroportos nacionais e internacionais",
  "Cowork e lounges VIP em aeroportos",
  "Assistência em vistos, passaportes e documentação",
  "Parcerias com casas de câmbio em condições exclusivas",
];

const GESTAO = [
  ["Client Review", "Apontamento de economias e comparativos com médias de mercado."],
  ["Comportamento de compra", "Análise por departamento e centro de custo."],
  ["Antecedência de compra", "Relatórios detalhados que reduzem tarifas."],
  ["Bilhetes não utilizados", "Otimização de recursos e redução de perdas."],
  ["Melhores práticas", "Comparativo com ações eficazes de outros clientes."],
  ["Consultoria em política", "Desenvolvimento e ajustes estratégicos."],
];

export default function ViagensCorporativas() {
  return (
    <>
      <PageHero
        crumbs="Início · Corporativo"
        eyebrow="Viagens corporativas"
        title={<>Seu parceiro estratégico em <span className="gold-gradient-text">viagens de negócios</span></>}
        desc="Especialistas em gerenciamento de despesas de viagens: economia financeira, melhores negociações com fornecedores e processos de compra mais eficientes para gestores e viajantes."
        image="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="mx-auto max-w-7xl px-5 py-16">
        <SectionHeading eyebrow="Como fazemos" title={<>Ágil, eficiente e <em className="text-petrol-700">confortável</em></>} desc="Equipe experiente com +20 anos de atuação, pronta para atender gestores e viajantes com excelência e foco em resultados. Atuamos em três segmentos: Viagens Corporativas (PMEs e grandes empresas em todo o Brasil), Eventos e Incentivos, e Lazer para colaboradores." />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DIFERENCIAIS.map(([i, t, d], k) => (
            <Reveal key={t} delay={(k % 3) * 70}>
              <div className="card-lift h-full rounded-3xl bg-white p-7 ring-1 ring-ink-900/5">
                <span className="text-3xl">{i}</span>
                <h3 className="mt-3 font-bold">{t}</h3>
                <p className="mt-1.5 text-[14px] text-ink-500">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-cream-100 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Nossos serviços" title={<>Cobertura <em className="text-petrol-700">ponta a ponta</em></>} />
            <ul className="mt-8 space-y-3">
              {SERVICOS.map((s) => (
                <Reveal key={s}>
                  <li className="flex items-start gap-3 rounded-2xl bg-white px-5 py-4 text-[14.5px] ring-1 ring-ink-900/5">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-petrol-700 text-[12px] text-white">✓</span> {s}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Gestão de viagens" title={<>Dados que geram <em className="text-petrol-700">economia efetiva</em></>} desc="Relatórios gerenciais e de performance para o melhor custo x benefício." />
            <div className="mt-8 grid gap-4">
              {GESTAO.map(([t, d]) => (
                <Reveal key={t}>
                  <div className="rounded-2xl bg-deep-950 p-6 text-white">
                    <h4 className="font-bold text-gold-400">{t}</h4>
                    <p className="mt-1 text-[14px] text-white/70">{d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <div className="mt-6 rounded-2xl bg-white p-6 ring-1 ring-ink-900/5">
                <h4 className="font-bold">💳 Soluções de pagamento</h4>
                <p className="mt-1.5 text-[14px] text-ink-500">Faturamento flexível, relatórios detalhados de despesas e cartões virtuais para aéreo e hotel — segurança e controle.</p>
                <h4 className="mt-4 font-bold">🚨 Emergencial 24h</h4>
                <p className="mt-1.5 text-[14px] text-ink-500">Comercial Seg–Sex 8h–18h + plantão 24h com telefone direto para remarcações, alterações e emissões emergenciais.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <div className="pt-4"><CTAWhats title="Solicite uma proposta corporativa" desc="Diagnóstico gratuito + demonstração da plataforma self booking." /></div>
    </>
  );
}
