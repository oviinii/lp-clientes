import Link from "next/link";
import Reveal from "@/components/Reveal";
import { CTAWhats, PageHero, SectionHeading } from "@/components/ui";

export const metadata = { title: "Corporativo — Planeta Turismo" };

export default function Corporativo() {
  return (
    <>
      <PageHero
        crumbs="Início · Corporativo"
        eyebrow="Planeta Viagens Corporativas"
        title={<>Gestão inteligente de <span className="gold-gradient-text">viagens, eventos e incentivos</span></>}
        desc="Atendimento integral às necessidades da sua empresa: deslocamentos, hospedagens e locações em plataforma self booking + atendimento offline e emergencial 24h."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop"
      />
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { t: "Viagens Corporativas", d: "Deslocamentos, hospedagens e locações com política de viagens, aprovações e controle total.", h: "/viagens-corporativas", i: "✈️" },
            { t: "Eventos", d: "De pequenas reuniões a convenções nacionais — fornecedores, budget e execução minuciosa.", h: "/eventos", i: "🎤" },
            { t: "Incentivos", d: "Campanhas que premiam, engajam e geram resultados — viagens que viram memória.", h: "/incentivos", i: "🏆" },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 80}>
              <Link href={c.h} className="card-lift block h-full rounded-[24px] bg-white p-8 ring-1 ring-ink-900/5">
                <span className="text-4xl">{c.i}</span>
                <h3 className="mt-4 font-display text-2xl font-semibold">{c.t}</h3>
                <p className="mt-2 text-[14.5px] text-ink-500">{c.d}</p>
                <span className="mt-4 inline-block font-bold text-petrol-700">Aprofundar →</span>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1400&auto=format&fit=crop" alt="Reunião corporativa" className="h-[420px] w-full rounded-[28px] object-cover shadow-xl" />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Controle & resultados"
              title={<>Suporte completo ao gestor, <em className="text-petrol-700">economia de verdade</em></>}
              desc="Parametrização da política de viagens, fluxo de aprovação, relatórios de justificativas, client review e desenvolvimento de acordos comerciais."
            />
            <Reveal delay={100}>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {["Atendimento dedicado", "Suporte 24h", "Client review", "Relatórios gerenciais", "Self booking", "Seguros", "Aéreo + hotel + carro", "Traslados e receptivo"].map((t) => (
                  <li key={t} className="flex items-center gap-2.5 rounded-2xl bg-white px-4 py-3 text-[14px] font-medium ring-1 ring-ink-900/5">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-100 text-[12px]">✓</span> {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>
      <CTAWhats title="Agregue qualidade à gestão de viagens da sua empresa" desc="Fale com nosso comercial e receba um diagnóstico gratuito do potencial de economia." />
    </>
  );
}
