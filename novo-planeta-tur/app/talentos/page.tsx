import Reveal from "@/components/Reveal";
import { CTAWhats, PageHero, SectionHeading } from "@/components/ui";

export const metadata = { title: "Talentos — Planeta Turismo" };

const VAGAS = [
  {
    t: "Estágio — Atendimento Lazer",
    d: "Assistência ao atendimento de turismo de lazer, rotinas operacionais e formação como agente de viagens. Buscamos comprometimento e bom relacionamento interpessoal. Presencial em Sorocaba.",
    tags: ["Estágio", "Presencial · Sorocaba", "Lazer"],
  },
  {
    t: "Assistente Administrativo",
    d: "Atuação junto à equipe interna de atendimento nas rotinas operacionais. Para candidatos comprometidos e com boa comunicação. Presencial em Sorocaba.",
    tags: ["CLT", "Presencial · Sorocaba", "Operacional"],
  },
  {
    t: "Banco de talentos",
    d: "Não achou sua vaga? Envie seu CV e conte onde você brilha — consultores de viagens, eventos, financeiro e marketing.",
    tags: ["Sempre aberto", "Todas as áreas"],
  },
];

export default function Talentos() {
  return (
    <>
      <PageHero
        crumbs="Início · A Planeta"
        eyebrow="Talentos"
        title={<>Venha fazer parte de uma <span className="gold-gradient-text">equipe de sucesso</span></>}
        desc="Com 10 anos de história e atuação em vários campos do turismo, apostamos no talento: equipes fortes, inovadoras e dinâmicas que fazem cada cliente viver o inesquecível."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop"
      />
      <section className="mx-auto max-w-7xl px-5 py-16">
        <SectionHeading eyebrow="Vagas abertas" title={<>Sua carreira <em className="text-petrol-700">decola aqui</em></>} desc="Envie seu CV atualizado — conte sua história, experiências e por que ama viagens." />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {VAGAS.map((v, i) => (
            <Reveal key={v.t} delay={i * 80}>
              <div className="flex h-full flex-col rounded-[24px] bg-white p-7 ring-1 ring-ink-900/5">
                <div className="flex flex-wrap gap-2">
                  {v.tags.map((t) => (
                    <span key={t} className="rounded-full bg-petrol-50 px-3 py-1 text-[11.5px] font-bold text-petrol-700">{t}</span>
                  ))}
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold">{v.t}</h3>
                <p className="mt-2 flex-1 text-[14px] text-ink-500">{v.d}</p>
                <a href="mailto:contato@planeta.tur.br?subject=Candidatura%20—%20Vaga%20Planeta%20Turismo" className="mt-5 rounded-full bg-deep-950 px-6 py-3 text-center font-bold text-white hover:bg-deep-800">Enviar CV →</a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <CTAWhats title="Dúvidas sobre vagas? Fale com a gente" />
    </>
  );
}
