import Reveal from "@/components/Reveal";
import { CTAWhats, PageHero, SectionHeading } from "@/components/ui";

export const metadata = { title: "Responsabilidade Social — Planeta Turismo" };

const PILARES = [
  ["🌍", "Diversidade", "Incentivar experiências em qualquer lugar do mundo respeitando identidades — divulgar os melhores valores dessas interações e promover a assimilação da diversidade."],
  ["🤝", "Igualdade de oportunidades", "Favorecer o desenvolvimento pessoal sem barreiras e sem distinção, para que todos tenham as mesmas oportunidades."],
  ["🌱", "Desenvolvimento", "O turismo desenvolve sociedades: privilegiamos pequenos negócios e fornecedores locais de qualidade, éticos e socialmente responsáveis."],
  ["♻️", "Sustentabilidade", "Hábitos de consumo e atitudes definem nosso impacto: divulgamos boas práticas e buscamos reduzir e compensar nossa pegada."],
];

export default function RespSocial() {
  return (
    <>
      <PageHero
        crumbs="Início · A Planeta"
        eyebrow="Responsabilidade social"
        title={<>Planeta atuando por <span className="gold-gradient-text">um mundo melhor</span></>}
        desc="Nossa responsabilidade social traduz valores, anseios e nosso papel na sociedade — projetando o mundo melhor em que acreditamos."
        image="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop"
      />
      <section className="mx-auto max-w-7xl px-5 py-16">
        <SectionHeading eyebrow="Nossos pilares" title={<>Viajar bem é viajar <em className="text-petrol-700">com consciência</em></>} />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {PILARES.map(([i, t, d], k) => (
            <Reveal key={t} delay={(k % 2) * 80}>
              <div className="h-full rounded-[24px] bg-white p-8 ring-1 ring-ink-900/5">
                <span className="text-4xl">{i}</span>
                <h3 className="mt-3 font-display text-2xl font-semibold">{t}</h3>
                <p className="mt-2 text-[14.5px] text-ink-500">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <CTAWhats title="Viaje com uma agência que cuida do mundo" />
    </>
  );
}
