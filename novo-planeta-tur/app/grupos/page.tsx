import Reveal from "@/components/Reveal";
import { CTAWhats, PageHero, SectionHeading } from "@/components/ui";

export const metadata = { title: "Grupos Planeta — Planeta Turismo" };

export default function Grupos() {
  return (
    <>
      <PageHero
        crumbs="Início"
        eyebrow="Grupos Planeta"
        title={<>Viajar em grupo é construir <span className="gold-gradient-text">memória coletiva</span></>}
        desc="Grupos exclusivos para destinos incríveis ao redor do mundo — planejamento cuidadoso, acompanhamento total e a tranquilidade de viajar assessorado do início ao fim."
        image="https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=2000&auto=format&fit=crop"
      />
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1400&auto=format&fit=crop" alt="Grupo de amigos viajando" className="h-[440px] w-full rounded-[28px] object-cover shadow-xl" />
          </Reveal>
          <div>
            <SectionHeading eyebrow="Por que ir de grupo?" title={<>Risos, histórias e <em className="text-petrol-700">novas amizades</em></>} desc="Explorar novos lugares em grupo amplia a diversão e promove conexão humana: a diversidade enriquece cada vivência, enquanto segurança e apoio mútuo sustentam a jornada." />
            <Reveal delay={100}>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[["🧭", "Acompanhamento total", "Equipe Planeta do embarque ao retorno."], ["🏨", "Curadoria completa", "Hotéis, passeios e ritmo pensados para o grupo."], ["💬", "Conexão", "Ambiente leve e acolhedor para criar laços."], ["🛡️", "Segurança", "Assistência e suporte em cada etapa."]].map(([i, t, d]) => (
                  <div key={t} className="rounded-2xl bg-white p-5 ring-1 ring-ink-900/5">
                    <span className="text-2xl">{i}</span>
                    <p className="mt-1.5 font-bold text-[15px]">{t}</p>
                    <p className="text-[13.5px] text-ink-500">{d}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal className="mt-12">
          <div className="grid overflow-hidden rounded-[28px] bg-deep-950 p-10 text-white md:p-12 lg:grid-cols-[1fr_360px] lg:items-center lg:gap-10">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-gold-400">Próximas saídas</p>
              <h3 className="mt-3 font-display text-3xl font-semibold md:text-4xl">Estamos desenhando os próximos grupos ✈️</h3>
              <p className="mt-3 max-w-xl text-white/70">Cadastre-se e receba os roteiros assim que forem lançados — com condições especiais de lançamento para os primeiros inscritos.</p>
            </div>
            <form className="grid gap-3">
              <input required placeholder="Seu nome" className="rounded-2xl border border-white/15 bg-white/10 px-5 py-3.5 text-white placeholder:text-white/40 outline-none focus:border-gold-400" />
              <input required placeholder="Seu WhatsApp" className="rounded-2xl border border-white/15 bg-white/10 px-5 py-3.5 text-white placeholder:text-white/40 outline-none focus:border-gold-400" />
              <button className="rounded-full bg-gradient-to-r from-gold-400 to-gold-500 px-6 py-3.5 font-bold text-deep-950">Avise-me dos próximos grupos →</button>
            </form>
          </div>
        </Reveal>

        <div className="mt-12">
          <SectionHeading eyebrow="Além dos grupos" title={<>Shows, teatros e <em className="text-petrol-700">musicais</em></>} desc="Acompanhe nossa programação cultural — diversão com a mesma curadoria Planeta." />
        </div>
      </section>
      <CTAWhats title="Quer um grupo fechado para sua empresa, família ou paróquia?" desc="Montamos saídas exclusivas com roteiro, valores por pessoa e acompanhamento dedicado." />
    </>
  );
}
