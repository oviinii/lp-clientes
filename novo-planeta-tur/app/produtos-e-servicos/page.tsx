import Reveal from "@/components/Reveal";
import { CTAWhats, PageHero, SectionHeading } from "@/components/ui";
import { SERVICOS } from "@/lib/data";

export const metadata = { title: "Produtos e Serviços — Planeta Turismo" };

const EXTRAS = [
  { t: "Roteiros de fé", d: "Espanha Cristã com Fátima e Lourdes, Aparecida, Terra Santa e santuários do Brasil e do mundo.", h: "/roteiros-de-fe" },
  { t: "Viagens românticas", d: "Lua de mel, renewal of vows, destination wedding e vale-viagem presenteável.", h: "/viagens-romanticas" },
  { t: "Grupos exclusivos", d: "Embarques acompanhados com assistência total e memórias coletivas.", h: "/grupos" },
  { t: "Corporativo completo", d: "Aéreo, hotel, carro, traslados, seguro, eventos e incentivos para empresas.", h: "/corporativo" },
];

export default function ProdutosServicos() {
  return (
    <>
      <PageHero
        crumbs="Início · Viagens"
        eyebrow="Produtos e serviços"
        title={<>Sua viagem completa, <span className="gold-gradient-text">sem quebra-cabeça</span></>}
        desc="Passagens, hotéis, carros, traslados, seguros, ingressos, documentação e câmbio — uma equipe especializada cuidando de tudo para você viajar com segurança e tranquilidade."
        image="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000&auto=format&fit=crop"
      />
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICOS.map((s, i) => (
            <Reveal key={s.titulo} delay={(i % 3) * 60}>
              <div className="card-lift h-full rounded-3xl bg-white p-7 ring-1 ring-ink-900/5">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-petrol-50 p-3 text-3xl">{s.icone}</span>
                <h3 className="mt-4 text-lg font-bold">{s.titulo}</h3>
                <p className="mt-1.5 text-[14.5px] text-ink-500">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-14">
          <SectionHeading eyebrow="E mais" title={<>Experiências <em className="text-petrol-700">sob medida</em></>} />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {EXTRAS.map((e) => (
              <Reveal key={e.t}>
                <a href={e.h} className="card-lift block rounded-3xl bg-deep-950 p-8 text-white">
                  <h3 className="font-display text-2xl font-semibold text-gold-400">{e.t}</h3>
                  <p className="mt-2 text-white/70">{e.d}</p>
                  <span className="mt-4 inline-block font-bold">Conhecer →</span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTAWhats />
    </>
  );
}
