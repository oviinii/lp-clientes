import Reveal from "@/components/Reveal";
import { PageHero } from "@/components/ui";

export const metadata = { title: "Avalie Nossos Serviços — Planeta Turismo" };

export default function Avaliacao() {
  return (
    <>
      <PageHero
        crumbs="Início · A Planeta"
        eyebrow="Avalie nossos serviços"
        title={<>Ajude-nos a ser uma agência <span className="gold-gradient-text">5 estrelas</span></>}
        desc="Sua opinião molda cada roteiro: avalie atendimento, organização e experiência — leva menos de 1 minuto."
        image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop"
      />
      <section className="mx-auto grid max-w-5xl gap-8 px-5 py-16 md:grid-cols-[1fr_360px]">
        <Reveal>
          <form className="rounded-[28px] bg-white p-8 ring-1 ring-ink-900/8 md:p-10">
            <p className="text-sm font-bold">Como foi sua experiência geral?</p>
            <div className="mt-3 flex gap-2 text-3xl">
              {["⭐", "⭐", "⭐", "⭐", "⭐"].map((s, i) => (
                <label key={i} className="cursor-pointer rounded-2xl border border-ink-900/10 px-3 py-2 hover:border-gold-500 has-checked:border-gold-500 has-checked:bg-gold-100">
                  <input type="radio" name="nota" className="sr-only" defaultChecked={i === 4} />{s}
                </label>
              ))}
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1.5 text-sm font-semibold">Nome<input required placeholder="Seu nome" className="rounded-2xl border border-ink-900/10 bg-cream-50 px-4 py-3.5 font-normal outline-none" /></label>
              <label className="grid gap-1.5 text-sm font-semibold">Destino / serviço<input placeholder="Ex.: Portugal, corporativo…" className="rounded-2xl border border-ink-900/10 bg-cream-50 px-4 py-3.5 font-normal outline-none" /></label>
            </div>
            <label className="mt-4 grid gap-1.5 text-sm font-semibold">Seu depoimento<textarea rows={5} placeholder="Conte como foi…" className="rounded-2xl border border-ink-900/10 bg-cream-50 px-4 py-3.5 font-normal outline-none" /></label>
            <button className="mt-6 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 px-8 py-4 font-bold text-deep-950">Enviar avaliação →</button>
          </form>
        </Reveal>
        <Reveal delay={100}>
          <div className="h-fit rounded-[24px] bg-deep-950 p-7 text-white">
            <p className="font-display text-xl font-semibold text-gold-400">Onde mais avaliar</p>
            <ul className="mt-3 space-y-2.5 text-[14px] text-white/75">
              <li>★ Google — busque “Planeta Turismo Sorocaba”</li>
              <li>★ Instagram — marque @planetaturismo</li>
              <li>★ TripAdvisor e ReclameAqui</li>
            </ul>
            <p className="mt-4 text-[13px] text-white/55">Cada avaliação pública ajuda outros viajantes a confiarem — e a gente a melhorar sempre.</p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
