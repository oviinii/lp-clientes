import Link from "next/link";
import Reveal from "@/components/Reveal";
import { PageHero, SectionHeading } from "@/components/ui";

export const metadata = { title: "Documentos — Planeta Turismo" };

export default function Documentos() {
  return (
    <>
      <PageHero
        crumbs="Início"
        eyebrow="Documentos"
        title={<>Transparência <span className="gold-gradient-text">em primeiro lugar</span></>}
        desc="Políticas, privacidade e direitos — tudo aberto, como uma relação de confiança deve ser."
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000&auto=format&fit=crop"
      />
      <section className="mx-auto max-w-5xl px-5 py-16">
        <div className="grid gap-5 md:grid-cols-2">
          {[
            { h: "/politica-de-privacidade", t: "Política de Privacidade", d: "Como coletamos, usamos e protegemos seus dados — LGPD, ANAC, SUSEP e parceiros." },
            { h: "/direito-do-consumidor", t: "Direito do Consumidor", d: "Código de Defesa do Consumidor (Lei 8.078/1990) na íntegra para consulta." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 80}>
              <Link href={c.h} className="card-lift block h-full rounded-[24px] bg-white p-8 ring-1 ring-ink-900/5">
                <span className="text-3xl">📄</span>
                <h3 className="mt-3 font-display text-2xl font-semibold">{c.t}</h3>
                <p className="mt-2 text-[14.5px] text-ink-500">{c.d}</p>
                <span className="mt-4 inline-block font-bold text-petrol-700">Ler documento →</span>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <div className="rounded-[24px] bg-cream-100 p-8 text-center">
            <SectionHeading align="center" eyebrow="Precisa de outro documento?" title={<>Fale com a gente</>} desc="Contratos, comprovantes, notas e autorizações — nosso administrativo responde rápido." />
            <Link href="/contato" className="mt-6 inline-block rounded-full bg-deep-950 px-8 py-4 font-bold text-white">Ir para contato →</Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
