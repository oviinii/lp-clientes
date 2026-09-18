import Reveal from "@/components/Reveal";
import { CTAWhats, PageHero, SectionHeading } from "@/components/ui";

export const metadata = { title: "Viagens de Incentivo — Planeta Turismo" };

export default function Incentivos() {
  return (
    <>
      <PageHero
        crumbs="Início · Corporativo"
        eyebrow="Viagens de incentivo"
        title={<>Premiar com viagens é <span className="gold-gradient-text">inesquecível</span></>}
        desc="Muito mais que um prêmio: uma experiência que gera memórias duradouras, fortalece vínculos e mantém a motivação elevada antes, durante e depois da campanha."
        image="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2000&auto=format&fit=crop"
      />
      <section className="mx-auto max-w-7xl space-y-14 px-5 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-[24px] bg-white p-8 ring-1 ring-ink-900/5">
              <h3 className="font-display text-2xl font-semibold">Por que viagens funcionam?</h3>
              <ul className="mt-4 space-y-3 text-[14.5px] text-ink-500">
                <li>🏅 <b className="text-ink-900">Meritocracia reconhecida</b> — reforça valores e cultura, aumenta lealdade e produtividade.</li>
                <li>💎 <b className="text-ink-900">Exclusividade desejada</b> — diferente de prêmios materiais, viagens não são esquecidas.</li>
                <li>📣 <b className="text-ink-900">Imagem da marca</b> — posiciona a empresa como inovadora e cuidadosa com pessoas.</li>
                <li>🤝 <b className="text-ink-900">Conexão real</b> — interação fora do ambiente formal fortalece laços.</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="h-full rounded-[24px] bg-deep-950 p-8 text-white">
              <h3 className="font-display text-2xl font-semibold text-gold-400">Ações que criamos</h3>
              <ul className="mt-4 space-y-3 text-[14.5px] text-white/75">
                <li>✨ Experiências exclusivas: privativos, jantares com chefs, aventura e cultura</li>
                <li>🎖️ Cerimônias de reconhecimento para os melhores desempenhos</li>
                <li>👥 Networking e team building colaborativo</li>
                <li>📚 Momentos educacionais em ambientes inspiradores</li>
              </ul>
            </div>
          </Reveal>
        </div>

        <div>
          <SectionHeading eyebrow="Com a Planeta" title={<>Do briefing ao <em className="text-petrol-700">embarque (e além)</em></>} />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["📋", "Planejamento", "Budget por participante, metas, duração e ROI da campanha."],
              ["🗺️", "Destinos", "Seleção por perfil, objetivo, orçamento e acesso — exótico atrai mais."],
              ["🛎️", "Logística total", "Voos, hotéis, transporte local, curadoria de experiências."],
              ["🆘", "Suporte contínuo", "Gestão de crises e imprevistos sem impacto na experiência."],
            ].map(([i, t, d], k) => (
              <Reveal key={t} delay={k * 70}>
                <div className="h-full rounded-3xl bg-cream-100 p-6 ring-1 ring-ink-900/5">
                  <span className="text-3xl">{i}</span>
                  <h4 className="mt-2 font-bold">{t}</h4>
                  <p className="mt-1 text-[13.5px] text-ink-500">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <div className="rounded-[24px] bg-petrol-50 p-8 ring-1 ring-petrol-700/10 md:p-10">
            <h3 className="font-display text-2xl font-semibold md:text-3xl">Nossos projetos incluem</h3>
            <div className="mt-5 grid gap-2 text-[14px] text-ink-900/80 sm:grid-cols-2 lg:grid-cols-3">
              {["Análise detalhada do briefing", "Roteiros personalizados", "Visita técnica aos destinos", "Gestão de reservas e prazos", "Apoio remoto durante a viagem", "Central de relacionamento", "Guia de viagem + kit personalizado", "Plataforma online do evento", "Entrega de brindes", "Eventos privativos", "Assistência embarque/desembarque", "Acompanhamento bilíngue", "Suporte emergencial local"].map((t) => (
                <p key={t} className="flex gap-2"><span className="text-petrol-700">✓</span> {t}</p>
              ))}
            </div>
            <p className="mt-6 text-[13px] font-bold uppercase tracking-widest text-petrol-700">Incentivos nacionais e internacionais · Cases de sucesso sob consulta</p>
          </div>
        </Reveal>
      </section>
      <CTAWhats title="Crie a campanha de incentivo que seu time merece" />
    </>
  );
}
