import Reveal from "@/components/Reveal";
import { CTAWhats, PageHero, SectionHeading } from "@/components/ui";

export const metadata = { title: "Quem Somos — Planeta Turismo" };

export default function QuemSomos() {
  return (
    <>
      <PageHero
        crumbs="Início · A Planeta"
        eyebrow="Quem somos"
        title={<>Experiências inesquecíveis, <span className="gold-gradient-text">atendimento de excelência</span></>}
        desc="Nosso propósito em cada detalhe: plena satisfação no lazer — com roteiros cuidadosamente planejados — e na gestão corporativa completa para viajantes e gestores."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop"
      />
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1400&auto=format&fit=crop" alt="Equipe Planeta" className="h-[440px] w-full rounded-[28px] object-cover shadow-xl" />
          </Reveal>
          <div>
            <SectionHeading eyebrow="Nosso propósito" title={<>Tranquila, segura e cheia de <em className="text-petrol-700">boas lembranças</em></>} desc="Contamos com equipes especializadas — profissionais experientes e apaixonados por viagens — prontos para garantir que cada viagem seja exatamente assim." />
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[["🎯", "Missão", "Transformar viagens em experiências únicas."], ["👁️", "Visão", "Ser referência em lazer e corporativo."], ["💛", "Valores", "Cuidado, ética e atenção aos detalhes."]].map(([i, t, d]) => (
                <div key={t} className="rounded-2xl bg-white p-5 ring-1 ring-ink-900/5">
                  <span className="text-2xl">{i}</span>
                  <p className="mt-2 font-bold">{t}</p>
                  <p className="text-[13px] text-ink-500">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-4">
          {[["+10", "anos de história"], ["17+", "especialistas"], ["3", "frentes: lazer, grupos e corporate"], ["24/7", "suporte emergencial"]].map(([n, l]) => (
            <Reveal key={l}>
              <div className="rounded-[24px] bg-deep-950 p-7 text-center text-white">
                <p className="font-display text-4xl font-semibold text-gold-400">{n}</p>
                <p className="mt-1 text-[13.5px] text-white/65">{l}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <CTAWhats title="Venha viver a experiência Planeta" />
    </>
  );
}
