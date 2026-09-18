import Link from "next/link";
import Reveal from "@/components/Reveal";
import { CTAWhats, SectionHeading } from "@/components/ui";
import { DEPOIMENTOS, PACOTES, SERVICOS, WHATSAPP } from "@/lib/data";

const DESTINOS_MARQUEE = ["Portugal", "Itália", "Riviera Maia", "França", "Grécia", "Espanha", "Nova York", "Turquia", "Londres", "Caribe"];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-deep-950 text-white">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2000&auto=format&fit=crop"
          alt="Viajante planejando roteiro"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-950/60 via-deep-950/80 to-deep-950" />
        <div className="hero-grid absolute inset-0" />
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-petrol-600/30 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-gold-500/15 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-14 md:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[12.5px] font-medium text-white/85 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Há +10 anos em Sorocaba · Lazer, Grupos & Corporativo
            </div>
            <h1 className="mt-6 font-display text-[44px] font-semibold leading-[1.02] tracking-tight text-balance md:text-[68px]">
              Viaje melhor.
              <br />
              <span className="gold-gradient-text">Viaje Planeta.</span>
            </h1>
            <p className="mt-5 max-w-xl text-[16.5px] leading-relaxed text-white/75">
              Transformamos viagens em experiências únicas — do roteiro de lazer sob medida à gestão completa
              de viagens corporativas, eventos e incentivos. Conforto, segurança e atendimento de excelência do início ao fim.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={WHATSAPP} target="_blank" className="rounded-full bg-gradient-to-r from-gold-400 to-gold-500 px-8 py-4 text-center font-bold text-deep-950 shadow-xl shadow-gold-500/20 hover:brightness-110">
                Montar minha viagem →
              </a>
              <Link href="/pacotes" className="rounded-full border border-white/20 px-8 py-4 text-center font-semibold text-white hover:bg-white/10">
                Ver pacotes
              </Link>
            </div>
            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-6">
              {[
                ["+10", "anos de experiência"],
                ["24/7", "suporte emergencial"],
                ["+5 mil", "viajantes atendidos"],
              ].map(([n, l]) => (
                <div key={l}>
                  <dt className="font-display text-3xl font-semibold text-white">{n}</dt>
                  <dd className="mt-1 text-[13px] text-white/60">{l}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* collage */}
          <div className="relative hidden lg:block">
            <div className="float-slow relative overflow-hidden rounded-[28px] border border-white/15 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=1200&auto=format&fit=crop" alt="Asa do avião sobre as nuvens" className="h-[420px] w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-deep-950/90 to-transparent p-6">
                <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-gold-400">Embarque imediato</p>
                <p className="font-display text-2xl font-semibold">Santorini, Paris, Caribe… onde você quer estar?</p>
              </div>
            </div>
            <div className="float-slower absolute -bottom-8 -left-10 w-64 overflow-hidden rounded-3xl border border-white/15 bg-deep-900 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop" alt="Praia paradisíaca" className="h-40 w-full object-cover" />
              <div className="p-4">
                <p className="text-[13px] font-bold">Riviera Maia · All inclusive</p>
                <p className="text-[12.5px] text-white/60">a partir de 12x · consulte</p>
              </div>
            </div>
            <div className="absolute -right-4 -top-6 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-xl">
              <p className="font-display text-2xl font-bold text-gold-400">4.9 ★</p>
              <p className="text-[12px] text-white/70">avaliação média<br />dos viajantes</p>
            </div>
          </div>
        </div>

        {/* marquee */}
        <div className="relative border-t border-white/10 bg-deep-950/60 py-4 backdrop-blur">
          <div className="flex overflow-hidden">
            <div className="marquee flex shrink-0 items-center gap-8 pr-8">
              {[...DESTINOS_MARQUEE, ...DESTINOS_MARQUEE].map((d, i) => (
                <span key={i} className="flex items-center gap-8 whitespace-nowrap font-display text-lg italic text-white/60">
                  {d} <span className="text-gold-500">✦</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1400&auto=format&fit=crop" alt="Estrada de viagem" className="h-[480px] w-full rounded-[28px] object-cover shadow-2xl" />
            <div className="absolute -bottom-6 -right-2 max-w-[280px] rounded-3xl bg-deep-950 p-6 text-white shadow-2xl md:-right-6">
              <p className="font-display text-4xl font-semibold text-gold-400">+10</p>
              <p className="mt-1 text-[13.5px] leading-snug text-white/75">anos criando memórias com equipes especializadas em lazer e corporativo.</p>
            </div>
          </div>
        </Reveal>
        <div>
          <SectionHeading
            eyebrow="Sobre a Planeta Turismo"
            title={<>Mais do que destinos, criamos <em className="text-petrol-700">experiências marcantes</em></>}
            desc="Atendemos clientes de lazer e corporativos com o mesmo cuidado: conforto, segurança e atenção em cada detalhe — da hospedagem ao deslocamento, você viaja com assistência total."
          />
          <Reveal delay={120}>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["🎯", "Roteiros personalizados", "Nada de pacote genérico: tudo sob medida."],
                ["🤝", "Equipe especialista", "Profissionais apaixonados por viagens."],
                ["🛡️", "Segurança total", "Seguros, suporte 24h e gestão de imprevistos."],
                ["💰", "Melhor custo-benefício", "Negociação direta com fornecedores."],
              ].map(([icon, t, d]) => (
                <li key={t} className="rounded-2xl border border-ink-900/8 bg-white p-5 card-lift">
                  <span className="text-2xl">{icon}</span>
                  <p className="mt-2 font-bold">{t}</p>
                  <p className="mt-1 text-[13.5px] text-ink-500">{d}</p>
                </li>
              ))}
            </ul>
            <Link href="/quem-somos" className="mt-8 inline-block font-bold text-petrol-700 link-underline">Conheça nossa história →</Link>
          </Reveal>
        </div>
      </section>

      {/* SEGMENTOS */}
      <section className="bg-deep-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            dark align="center" eyebrow="O que fazemos"
            title={<>Um planeta inteiro de <span className="gold-gradient-text">possibilidades</span></>}
            desc="Três frentes, um único padrão: excelência."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                href: "/pacotes", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000&auto=format&fit=crop",
                tag: "Lazer & Férias", title: "Viagens personalizadas",
                desc: "Pacotes, lua de mel, roteiros de fé, cruzeiros e resorts — tudo planejado para você.",
              },
              {
                href: "/grupos", img: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=1000&auto=format&fit=crop",
                tag: "Grupos Planeta", title: "Viajar em grupo",
                desc: "Grupos exclusivos com acompanhamento total: novas amizades e memórias coletivas.",
              },
              {
                href: "/corporativo", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
                tag: "Empresas", title: "Corporativo & Eventos",
                desc: "Gestão de viagens, eventos e incentivos com controle, economia e suporte 24/7.",
              },
            ].map((c) => (
              <Reveal key={c.title}>
                <Link href={c.href} className="card-lift group block overflow-hidden rounded-[24px] border border-white/10 bg-white/5">
                  <div className="relative h-60 overflow-hidden">
                    <img src={c.img} alt={c.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                    <span className="absolute left-4 top-4 rounded-full bg-deep-950/80 px-3 py-1.5 text-[11.5px] font-bold uppercase tracking-widest text-gold-400 backdrop-blur">{c.tag}</span>
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-2xl font-semibold">{c.title}</h3>
                    <p className="mt-2 text-[14.5px] leading-relaxed text-white/65">{c.desc}</p>
                    <span className="mt-4 inline-block font-bold text-gold-400">Explorar →</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PACOTES */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Pacotes em destaque"
            title={<>Destinos que estão <em className="text-petrol-700">em alta</em></>}
            desc="Uma seleção dos roteiros mais pedidos — todos 100% personalizáveis pela nossa equipe."
          />
          <Reveal><Link href="/pacotes" className="rounded-full border border-ink-900/15 px-6 py-3 font-bold hover:bg-ink-900 hover:text-white">Ver todos →</Link></Reveal>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PACOTES.slice(0, 6).map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 90}>
              <Link href="/pacotes" className="card-lift group block overflow-hidden rounded-[24px] bg-white shadow-sm ring-1 ring-ink-900/5">
                <div className="relative h-64 overflow-hidden">
                  <img src={p.imagem} alt={p.destino} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" style={{ transform: undefined }} />
                  {p.tag && <span className="absolute left-4 top-4 rounded-full bg-gold-500 px-3 py-1.5 text-[11.5px] font-bold uppercase tracking-wider text-deep-950">{p.tag}</span>}
                  <span className="absolute bottom-4 left-4 rounded-full bg-deep-950/75 px-3 py-1.5 text-[12px] font-semibold text-white backdrop-blur">📍 {p.pais}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-[22px] font-semibold">{p.destino}</h3>
                  <p className="mt-2 line-clamp-2 text-[14px] leading-relaxed text-ink-500">{p.descricao}</p>
                  <span className="mt-4 inline-block font-bold text-petrol-700">Solicitar roteiro →</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="bg-cream-100 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading align="center" eyebrow="Produtos e serviços" title={<>Tudo da sua viagem <em className="text-petrol-700">num só lugar</em></>} desc="Da passagem ao seguro, do hotel ao ingresso do parque — cuidamos de tudo." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICOS.map((s, i) => (
              <Reveal key={s.titulo} delay={(i % 3) * 70}>
                <div className="card-lift h-full rounded-3xl bg-white p-6 ring-1 ring-ink-900/5">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-petrol-50 text-2xl">{s.icone}</span>
                  <h3 className="mt-4 font-bold">{s.titulo}</h3>
                  <p className="mt-1.5 text-[14px] text-ink-500">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Link href="/produtos-e-servicos" className="inline-block rounded-full bg-deep-950 px-8 py-4 font-bold text-white hover:bg-deep-800">Ver página completa de serviços →</Link>
          </Reveal>
        </div>
      </section>

      {/* CORPORATIVO BANNER */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <Reveal>
          <div className="grid overflow-hidden rounded-[28px] bg-deep-950 text-white lg:grid-cols-2">
            <div className="p-10 md:p-14">
              <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-gold-400">Para empresas · Planeta Corporativo</p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-[44px]">Gestão de viagens que <span className="gold-gradient-text">gera economia real</span></h2>
              <p className="mt-4 text-white/70">Self booking + atendimento offline + emergencial 24h. Política de viagens, aprovações, relatórios gerenciais e client review.</p>
              <ul className="mt-6 grid gap-2.5 text-[14.5px] text-white/85 sm:grid-cols-2">
                {["Atendimento dedicado", "Suporte 24h", "Relatórios gerenciais", "Self booking", "Faturamento flexível", "Eventos & Incentivos"].map((t) => (
                  <li key={t} className="flex items-center gap-2"><span className="text-gold-400">✓</span> {t}</li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/viagens-corporativas" className="rounded-full bg-gradient-to-r from-gold-400 to-gold-500 px-7 py-3.5 text-center font-bold text-deep-950">Solução corporativa →</Link>
                <Link href="/corporativo" className="rounded-full border border-white/20 px-7 py-3.5 text-center font-semibold hover:bg-white/10">Visão geral</Link>
              </div>
            </div>
            <div className="relative min-h-[320px]">
              <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1400&auto=format&fit=crop" alt="Evento corporativo" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-deep-950 to-transparent" />
            </div>
          </div>
        </Reveal>
      </section>

      {/* DEPOIMENTOS */}
      <section className="mx-auto max-w-7xl px-5 pb-20">
        <SectionHeading align="center" eyebrow="Quem viajou, recomenda" title={<>Histórias de quem foi <em className="text-petrol-700">de Planeta</em></>} />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {DEPOIMENTOS.map((d, i) => (
            <Reveal key={d.nome} delay={i * 90}>
              <figure className="card-lift h-full rounded-[24px] bg-white p-7 ring-1 ring-ink-900/5">
                <div className="text-gold-500">★★★★★</div>
                <blockquote className="mt-3 text-[15px] leading-relaxed text-ink-900">“{d.texto}”</blockquote>
                <figcaption className="mt-5 border-t border-ink-900/8 pt-4">
                  <p className="font-bold text-[14px]">{d.nome}</p>
                  <p className="text-[12.5px] text-ink-500">{d.viagem}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8 text-center">
          <Link href="/avaliacao" className="font-bold text-petrol-700 link-underline">Viajou com a gente? Avalie nossos serviços →</Link>
        </Reveal>
      </section>

      <CTAWhats />
    </>
  );
}
