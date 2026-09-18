import Reveal from "@/components/Reveal";
import { CTAWhats, PageHero } from "@/components/ui";
import { WHATSAPP } from "@/lib/data";

export const metadata = { title: "Central de Promoções — Planeta Turismo" };

export default function Promocoes() {
  return (
    <>
      <PageHero
        crumbs="Início · Viagens"
        eyebrow="Central de promoções"
        title={<>Ofertas que <span className="gold-gradient-text">valem a mala pronta</span></>}
        desc="Receba nossas melhores ofertas no seu WhatsApp. Conte suas preferências e a gente avisa quando aquele destino dos sonhos entrar em promoção."
        image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop"
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-[1fr_380px]">
        <Reveal>
          <div className="rounded-[28px] bg-white p-8 ring-1 ring-ink-900/8 md:p-10">
            <h2 className="font-display text-3xl font-semibold">Queremos te conhecer melhor ✈️</h2>
            <p className="mt-2 text-ink-500">Preencha e receba promoções no seu perfil — praia, Europa, EUA, cruzeiros, fé, lua de mel…</p>
            <form action={WHATSAPP} className="mt-8 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-1.5 text-sm font-semibold">Nome<input required placeholder="Seu nome" className="rounded-2xl border border-ink-900/10 bg-cream-50 px-4 py-3.5 font-normal outline-none focus:border-petrol-700" /></label>
                <label className="grid gap-1.5 text-sm font-semibold">WhatsApp<input required placeholder="(15) 99999-9999" className="rounded-2xl border border-ink-900/10 bg-cream-50 px-4 py-3.5 font-normal outline-none focus:border-petrol-700" /></label>
              </div>
              <label className="grid gap-1.5 text-sm font-semibold">E-mail<input type="email" placeholder="voce@email.com" className="rounded-2xl border border-ink-900/10 bg-cream-50 px-4 py-3.5 font-normal outline-none focus:border-petrol-700" /></label>
              <div>
                <p className="text-sm font-semibold">Quais destinos te interessam?</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {["Praias & Caribe", "Europa", "EUA & Canadá", "América do Sul", "Cruzeiros", "Lua de mel", "Roteiros de fé", "Grupos"].map((t) => (
                    <label key={t} className="cursor-pointer rounded-full border border-ink-900/12 px-4 py-2 text-[13px] font-medium has-checked:border-petrol-700 has-checked:bg-petrol-50 has-checked:text-petrol-700">
                      <input type="checkbox" className="mr-2 accent-[#0e5f6b]" />{t}
                    </label>
                  ))}
                </div>
              </div>
              <button className="mt-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 px-8 py-4 font-bold text-deep-950 hover:brightness-110">
                Quero receber promoções →
              </button>
              <p className="text-[12.5px] text-ink-500">Ao enviar, você concorda em receber mensagens da Planeta Turismo. Sem spam — só oferta boa. Ver <a className="underline" href="/politica-de-privacidade">Política de Privacidade</a>.</p>
            </form>
          </div>
        </Reveal>
        <div className="grid content-start gap-5">
          <Reveal delay={100}>
            <div className="rounded-[24px] bg-deep-950 p-7 text-white">
              <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-gold-400">Como funciona</p>
              <ol className="mt-3 space-y-3 text-[14.5px] text-white/80">
                <li><b className="text-white">1.</b> Você conta suas preferências</li>
                <li><b className="text-white">2.</b> A gente monitora tarifas e saídas</li>
                <li><b className="text-white">3.</b> Você recebe a oferta no WhatsApp</li>
                <li><b className="text-white">4.</b> Reserva com condições exclusivas</li>
              </ol>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="rounded-[24px] bg-gold-100 p-7 ring-1 ring-gold-500/20">
              <p className="font-display text-xl font-semibold">⚡ Dica de especialista</p>
              <p className="mt-2 text-[14px] text-ink-900/75">Passagens emissoras com 60–90 dias de antecedência costumam ter as melhores tarifas. Promoções relâmpago aparecem primeiro no nosso WhatsApp.</p>
            </div>
          </Reveal>
        </div>
      </section>
      <CTAWhats title="Prefere falar direto? Chama a gente." />
    </>
  );
}
