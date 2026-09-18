import Reveal from "@/components/Reveal";
import { CTAWhats, PageHero, SectionHeading } from "@/components/ui";

export const metadata = { title: "Eventos Corporativos — Planeta Turismo" };

const TIPOS = ["Workshops e Treinamentos", "Lançamento de Produto", "Feiras e Exposições", "Reuniões de equipes internas", "Convenções", "Networking", "Eventos de Integração", "Jantares e Festas Corporativas", "Conselho / Reuniões Executivas", "Roadshows"];
const ATIVIDADES = ["Planejamento e Organização", "Coordenação in loco", "Receptivo e logística completa", "Visitas técnicas", "Relatórios de custos detalhados", "Checklist / Ordem de serviço", "Locação de salas e espaços", "Equipamentos audiovisuais", "Alimentos e bebidas", "Gestão de riscos e compliance", "Personalização do evento"];

export default function Eventos() {
  return (
    <>
      <PageHero
        crumbs="Início · Corporativo"
        eyebrow="Eventos corporativos"
        title={<>Eventos impecáveis, <span className="gold-gradient-text">dentro do budget</span></>}
        desc="Time dedicado à execução e organização — do briefing ao pós-evento, com gestão de fornecedores, controle de custos e supervisão completa."
        image="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2000&auto=format&fit=crop"
      />
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHeading eyebrow="Formatos que dominamos" title={<>Do workshop à <em className="text-petrol-700">convenção nacional</em></>} />
            <div className="mt-8 flex flex-wrap gap-2.5">
              {TIPOS.map((t) => (
                <span key={t} className="rounded-full bg-white px-4 py-2.5 text-[13.5px] font-semibold ring-1 ring-ink-900/8">{t}</span>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="O que cuidamos" title={<>Cada detalhe, <em className="text-petrol-700">sob controle</em></>} />
            <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
              {ATIVIDADES.map((a) => (
                <Reveal key={a}>
                  <li className="flex items-center gap-2.5 rounded-2xl bg-deep-950 px-4 py-3.5 text-[13.5px] font-medium text-white">
                    <span className="text-gold-400">✓</span> {a}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
        <Reveal className="mt-12">
          <div className="grid overflow-hidden rounded-[28px] bg-petrol-700 text-white md:grid-cols-[1fr_380px]">
            <div className="p-10">
              <h3 className="font-display text-3xl font-semibold">Ganhe eficiência com a experiência Planeta</h3>
              <p className="mt-3 text-white/80">Rede de fornecedores confiável, conhecimento especializado e assistência profissional — mais economia, menos risco, zero dor de cabeça.</p>
            </div>
            <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop" alt="Convenção" className="h-64 w-full object-cover md:h-full" />
          </div>
        </Reveal>
      </section>
      <CTAWhats title="Vamos tirar seu evento do papel?" />
    </>
  );
}
