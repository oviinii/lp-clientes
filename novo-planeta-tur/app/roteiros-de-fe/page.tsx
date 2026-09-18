import Reveal from "@/components/Reveal";
import { CTAWhats, PageHero, SectionHeading } from "@/components/ui";

export const metadata = { title: "Roteiros de Fé — Planeta Turismo" };

const ROTEIROS = [
  { t: "Espanha Cristã com Fátima e Lourdes", d: "Madrid, Ávila, Santiago de Compostela, Fátima, Lourdes e Barcelona — fé, história e emoção em um único caminho.", img: "https://images.unsplash.com/photo-1438032005730-c779502df39b?q=80&w=1000&auto=format&fit=crop" },
  { t: "Aparecida & Santuários do Brasil", d: "Saídas em grupo com acompanhamento, missas e momentos de oração — do interior paulista aos grandes santuários.", img: "https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?q=80&w=1000&auto=format&fit=crop" },
  { t: "Terra Santa", d: "Jerusalém, Belém, Nazaré e Mar da Galileia — uma jornada transformadora com guias especializados.", img: "https://images.unsplash.com/photo-1552423314-cf29ab68ad73?q=80&w=1000&auto=format&fit=crop" },
  { t: "Itália Religiosa", d: "Roma, Vaticano, Assis, Pádua e San Giovanni Rotondo — os passos de santos e séculos de devoção.", img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1000&auto=format&fit=crop" },
];

export default function RoteirosFe() {
  return (
    <>
      <PageHero
        crumbs="Início · Viagens"
        eyebrow="Roteiros de fé"
        title={<>Viagens que tocam <span className="gold-gradient-text">a alma</span></>}
        desc="Turismo religioso com sensibilidade, organização e acompanhamento: santuários, festas, caminhos e celebrações no Brasil e no mundo."
        image="https://images.unsplash.com/photo-1438032005730-c779502df39b?q=80&w=2000&auto=format&fit=crop"
      />
      <section className="mx-auto max-w-7xl px-5 py-16">
        <SectionHeading eyebrow="Caminhos de devoção" title={<>Roteiros com <em className="text-petrol-700">propósito</em></>} desc="Grupos paroquiais, famílias e peregrinos individuais — cuidamos de missas, guias, hospedagem próxima aos santuários e ritmo respeitoso." />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {ROTEIROS.map((r, i) => (
            <Reveal key={r.t} delay={(i % 2) * 80}>
              <article className="card-lift grid overflow-hidden rounded-[24px] bg-white ring-1 ring-ink-900/5 sm:grid-cols-[240px_1fr]">
                <img src={r.img} alt={r.t} className="h-56 w-full object-cover sm:h-full" loading="lazy" />
                <div className="p-7">
                  <h3 className="font-display text-[22px] font-semibold">{r.t}</h3>
                  <p className="mt-2 text-[14px] text-ink-500">{r.d}</p>
                  <a href="https://wa.me/5515999999999?text=Quero%20um%20roteiro%20de%20f%C3%A9" target="_blank" className="mt-4 inline-block font-bold text-petrol-700">Solicitar datas e valores →</a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <CTAWhats title="Organize a peregrinação da sua paróquia ou família" desc="Grupos fechados com condições especiais, celebrações e acompanhamento dedicado." />
    </>
  );
}
