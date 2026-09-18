import Reveal from "@/components/Reveal";
import { CTAWhats, PageHero, SectionHeading } from "@/components/ui";
import { PACOTES } from "@/lib/data";

export const metadata = { title: "Viagens Românticas — Planeta Turismo" };

const FORMATOS = [
  { t: "Lua de mel", d: "A viagem perfeita para a celebração mais marcante da vida — serviços selecionados para momentos especialmente românticos.", i: "💍" },
  { t: "Destination wedding", d: "Case-se num cenário paradisíaco com estrutura cinco estrelas ao lado de quem você ama.", i: "🏝️" },
  { t: "Renovação de votos", d: "Reviva desejos e memórias numa viagem feita para demonstrar amor.", i: "💞" },
  { t: "Cotas & listas", d: "Transforme sua viagem no presente ideal: compartilhe cotas com amigos e familiares.", i: "🎁" },
  { t: "Vale-viagem", d: "Presenteie com um Vale Viagem Planeta Turismo e proporcione momentos memoráveis.", i: "✨" },
];

export default function Romanticas() {
  return (
    <>
      <PageHero
        crumbs="Início · Viagens"
        eyebrow="Viagens românticas"
        title={<>O amor merece <span className="gold-gradient-text">um cenário à altura</span></>}
        desc="Lua de mel, renovações de votos, cotas de viagem, festas e cerimônias no destino — roteiros íntimos, hotéis especiais e cada detalhe no lugar."
        image="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2000&auto=format&fit=crop"
      />
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FORMATOS.map((f, i) => (
            <Reveal key={f.t} delay={(i % 3) * 70}>
              <div className="card-lift h-full rounded-3xl bg-white p-7 ring-1 ring-ink-900/5">
                <span className="text-3xl">{f.i}</span>
                <h3 className="mt-3 text-lg font-bold">{f.t}</h3>
                <p className="mt-1.5 text-[14px] text-ink-500">{f.d}</p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={120}>
            <div className="card-lift flex h-full flex-col justify-between rounded-3xl bg-deep-950 p-7 text-white">
              <div>
                <span className="text-3xl">🥂</span>
                <h3 className="mt-3 text-lg font-bold">Consultoria romântica gratuita</h3>
                <p className="mt-1.5 text-[14px] text-white/70">Conte a data, o estilo e o orçamento — nossa equipe sugere 3 cenários perfeitos.</p>
              </div>
              <a href="https://wa.me/5515999999999?text=Quero%20planejar%20minha%20viagem%20romântica" target="_blank" className="mt-5 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 px-6 py-3 text-center font-bold text-deep-950">Começar agora →</a>
            </div>
          </Reveal>
        </div>

        <div className="mt-16">
          <SectionHeading eyebrow="Destinos queridinhos dos casais" title={<>Para brindar <em className="text-petrol-700">a dois</em></>} />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PACOTES.slice(1, 7).map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 70}>
                <article className="card-lift overflow-hidden rounded-[24px] bg-white ring-1 ring-ink-900/5">
                  <img src={p.imagem} alt={p.destino} loading="lazy" className="h-52 w-full object-cover" />
                  <div className="p-6">
                    <p className="text-[12px] font-bold uppercase tracking-widest text-petrol-700">📍 {p.pais}</p>
                    <h3 className="mt-1 font-display text-xl font-semibold">{p.destino}</h3>
                    <p className="mt-1.5 line-clamp-2 text-[13.5px] text-ink-500">{p.descricao}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTAWhats title="Vamos desenhar a viagem mais romântica da sua vida?" />
    </>
  );
}
