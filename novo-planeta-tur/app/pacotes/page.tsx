import Link from "next/link";
import Reveal from "@/components/Reveal";
import { CTAWhats, PageHero, SectionHeading } from "@/components/ui";
import { PACOTES, WHATSAPP } from "@/lib/data";

export const metadata = { title: "Pacotes de Viagem — Planeta Turismo" };

export default function Pacotes() {
  return (
    <>
      <PageHero
        crumbs="Início · Viagens"
        eyebrow="Pacotes"
        title={<>Praticidade e conforto de uma <span className="gold-gradient-text">viagem planejada</span></>}
        desc="Nossos pacotes oferecem toda a praticidade de uma viagem desenhada pela nossa equipe — e cada roteiro abaixo pode ser 100% personalizado para você."
        image="https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=2000&auto=format&fit=crop"
      />
      <section className="mx-auto max-w-7xl px-5 py-16">
        <SectionHeading eyebrow="Mais vendidos" title={<>Escolha seu próximo <em className="text-petrol-700">destino</em></>} desc="Toque em solicitar e receba valores, datas e condições pelo WhatsApp." />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PACOTES.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 70}>
              <article className="card-lift group overflow-hidden rounded-[24px] bg-white ring-1 ring-ink-900/5">
                <div className="relative h-60 overflow-hidden">
                  <img src={p.imagem} alt={p.destino} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  {p.tag && <span className="absolute left-4 top-4 rounded-full bg-gold-500 px-3 py-1.5 text-[11.5px] font-bold uppercase tracking-wider text-deep-950">{p.tag}</span>}
                </div>
                <div className="p-6">
                  <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-petrol-700">📍 {p.pais}</p>
                  <h3 className="mt-1 font-display text-2xl font-semibold">{p.destino}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-500">{p.descricao}</p>
                  <a href={`${WHATSAPP}`} target="_blank" className="mt-5 block rounded-full bg-deep-950 px-6 py-3 text-center font-bold text-white hover:bg-deep-800">
                    Solicitar este roteiro →
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 rounded-[24px] bg-petrol-50 p-8 text-center ring-1 ring-petrol-700/10 md:p-10">
          <h3 className="font-display text-2xl font-semibold md:text-3xl">Não achou seu destino? Criamos um roteiro do zero para você.</h3>
          <p className="mx-auto mt-2 max-w-xl text-ink-500">Lua de mel, família, fé, aventura, cruzeiros, resorts — conte para a gente o sonho que a gente desenha o caminho.</p>
          <a href={WHATSAPP} target="_blank" className="mt-6 inline-block rounded-full bg-gradient-to-r from-gold-400 to-gold-500 px-8 py-4 font-bold text-deep-950">Pedir roteiro personalizado →</a>
        </Reveal>
      </section>
      <CTAWhats title="Gostou de um destino? Fale com um especialista." />
    </>
  );
}
