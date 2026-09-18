import Reveal from "./Reveal";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.24em] text-petrol-700">
      <span className="h-[2px] w-8 bg-gold-500" /> {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  desc,
  align = "left",
  dark = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  desc?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p
        className={`flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.24em] ${
          dark ? "text-gold-400" : "text-petrol-700"
        } ${align === "center" ? "justify-center" : ""}`}
      >
        <span className="h-[2px] w-8 bg-gold-500" /> {eyebrow}
        {align === "center" && <span className="h-[2px] w-8 bg-gold-500" />}
      </p>
      <h2
        className={`mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance md:text-5xl ${
          dark ? "text-white" : "text-ink-900"
        }`}
      >
        {title}
      </h2>
      {desc && <p className={`mt-4 text-[16px] leading-relaxed ${dark ? "text-white/70" : "text-ink-500"}`}>{desc}</p>}
    </Reveal>
  );
}

export function PageHero({
  eyebrow,
  title,
  desc,
  image,
  crumbs,
}: {
  eyebrow: string;
  title: React.ReactNode;
  desc: string;
  image: string;
  crumbs: string;
}) {
  return (
    <section className="relative overflow-hidden bg-deep-950 text-white">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-35" />
      <div className="absolute inset-0 bg-gradient-to-r from-deep-950 via-deep-950/85 to-deep-950/20" />
      <div className="hero-grid absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-16 md:pb-24 md:pt-24">
        <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-white/50">{crumbs}</p>
        <p className="mt-4 flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.24em] text-gold-400">
          <span className="h-[2px] w-8 bg-gold-500" /> {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-[1.02] tracking-tight text-balance md:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-[16.5px] leading-relaxed text-white/75">{desc}</p>
      </div>
    </section>
  );
}

export function CTAWhats({ title = "Vamos planejar sua próxima viagem?", desc = "Fale agora com um especialista Planeta e receba um roteiro sob medida — sem compromisso." }: { title?: string; desc?: string }) {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-[28px] bg-deep-950 px-8 py-12 text-white md:px-14 md:py-16">
          <div className="hero-grid absolute inset-0" />
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gold-500/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-16 h-96 w-96 rounded-full bg-petrol-600/40 blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-xl">
              <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-gold-400">Atendimento humano · resposta rápida</p>
              <h3 className="mt-3 font-display text-3xl font-semibold md:text-4xl">{title}</h3>
              <p className="mt-3 text-white/70">{desc}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <a href="https://wa.me/5515999999999?text=Ol%C3%A1!%20Quero%20um%20or%C3%A7amento%20Planeta%20Turismo." target="_blank" className="rounded-full bg-gradient-to-r from-gold-400 to-gold-500 px-8 py-4 text-center font-bold text-deep-950 shadow-xl hover:brightness-110">
                Chamar no WhatsApp →
              </a>
              <a href="tel:+551532128890" className="rounded-full border border-white/20 px-8 py-4 text-center font-semibold text-white hover:bg-white/10">
                Ligar 15 3212-8890
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
