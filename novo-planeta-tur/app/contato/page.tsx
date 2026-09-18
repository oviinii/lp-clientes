import Reveal from "@/components/Reveal";
import { PageHero } from "@/components/ui";
import { ADDRESS, EMAIL, HOURS, PHONE_DISPLAY, PHONE_HREF, WHATSAPP } from "@/lib/data";

export const metadata = { title: "Contato — Planeta Turismo" };

export default function Contato() {
  return (
    <>
      <PageHero
        crumbs="Início · A Planeta"
        eyebrow="Contato"
        title={<>Nos conte o que podemos <span className="gold-gradient-text">fazer por você</span></>}
        desc="Atendimento humano, rápido e sem robôs enrolando: escolha o canal e fale agora com a Planeta Turismo."
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2000&auto=format&fit=crop"
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-[380px_1fr]">
        <div className="grid content-start gap-5">
          <Reveal>
            <div className="rounded-[24px] bg-deep-950 p-8 text-white">
              <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-gold-400">Onde estamos</p>
              <p className="mt-3 font-semibold">📍 {ADDRESS}</p>
              <p className="mt-3 text-white/70">📞 <a className="font-bold text-white" href={PHONE_HREF}>{PHONE_DISPLAY}</a></p>
              <p className="mt-1 text-white/70">✉️ <a className="text-white" href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
              <p className="mt-3 border-t border-white/10 pt-3 text-[14px] text-white/70">🕘 <b className="text-white">Atendimento</b><br />{HOURS}</p>
              <a href={WHATSAPP} target="_blank" className="mt-5 block rounded-full bg-gradient-to-r from-gold-400 to-gold-500 px-6 py-3.5 text-center font-bold text-deep-950">Chamar no WhatsApp →</a>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <iframe
              title="Mapa Planeta Turismo"
              src="https://www.google.com/maps?q=Rua+Salvador+Corr%C3%AAa,+628,+Sorocaba+SP&output=embed"
              className="h-64 w-full rounded-[24px] border-0 shadow-lg"
              loading="lazy"
            />
          </Reveal>
        </div>
        <Reveal delay={80}>
          <div className="rounded-[28px] bg-white p-8 ring-1 ring-ink-900/8 md:p-10">
            <h2 className="font-display text-3xl font-semibold">Envie sua mensagem</h2>
            <p className="mt-2 text-ink-500">Respondemos em horário comercial — geralmente em poucas horas.</p>
            <form className="mt-8 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-1.5 text-sm font-semibold">Nome*<input required placeholder="Seu nome" className="rounded-2xl border border-ink-900/10 bg-cream-50 px-4 py-3.5 font-normal outline-none focus:border-petrol-700" /></label>
                <label className="grid gap-1.5 text-sm font-semibold">Telefone / WhatsApp*<input required placeholder="(15) 99999-9999" className="rounded-2xl border border-ink-900/10 bg-cream-50 px-4 py-3.5 font-normal outline-none focus:border-petrol-700" /></label>
              </div>
              <label className="grid gap-1.5 text-sm font-semibold">E-mail<input type="email" placeholder="voce@email.com" className="rounded-2xl border border-ink-900/10 bg-cream-50 px-4 py-3.5 font-normal outline-none focus:border-petrol-700" /></label>
              <label className="grid gap-1.5 text-sm font-semibold">Assunto
                <select className="rounded-2xl border border-ink-900/10 bg-cream-50 px-4 py-3.5 font-normal outline-none focus:border-petrol-700">
                  <option>Orçamento de viagem de lazer</option>
                  <option>Viagem corporativa / empresa</option>
                  <option>Eventos</option>
                  <option>Incentivos</option>
                  <option>Grupos</option>
                  <option>Outro assunto</option>
                </select>
              </label>
              <label className="grid gap-1.5 text-sm font-semibold">Mensagem*<textarea required rows={5} placeholder="Conte destino, datas, nº de viajantes…" className="rounded-2xl border border-ink-900/10 bg-cream-50 px-4 py-3.5 font-normal outline-none focus:border-petrol-700" /></label>
              <button className="rounded-full bg-deep-950 px-8 py-4 font-bold text-white hover:bg-deep-800">Enviar mensagem →</button>
            </form>
          </div>
        </Reveal>
      </section>
    </>
  );
}
