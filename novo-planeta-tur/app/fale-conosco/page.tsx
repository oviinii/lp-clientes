import Reveal from "@/components/Reveal";
import { PageHero } from "@/components/ui";
import { PHONE_DISPLAY, PHONE_HREF, WHATSAPP } from "@/lib/data";

export const metadata = { title: "Fale Conosco — Planeta Turismo" };

const CANAIS = [
  { t: "WhatsApp comercial", d: "Resposta rápida em horário comercial", a: "Chamar agora →", h: WHATSAPP },
  { t: `Telefone ${PHONE_DISPLAY}`, d: "Seg–Sex 9h–19h · Sáb 9h–13h", a: "Ligar →", h: PHONE_HREF },
  { t: "E-mail", d: "contato@planeta.tur.br", a: "Escrever →", h: "mailto:contato@planeta.tur.br" },
  { t: "Presencial", d: "Rua Salvador Corrêa, 628 — Sorocaba/SP", a: "Ver no mapa →", h: "https://www.google.com/maps?q=Rua+Salvador+Corr%C3%AAa,+628,+Sorocaba+SP" },
];

export default function FaleConosco() {
  return (
    <>
      <PageHero
        crumbs="Início · A Planeta"
        eyebrow="Fale conosco"
        title={<>Um time inteiro <span className="gold-gradient-text">pronto para te ouvir</span></>}
        desc="Escolha o canal mais confortável — lazer, grupos, corporativo, eventos ou incentivos: a gente responde de verdade."
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2000&auto=format&fit=crop"
      />
      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {CANAIS.map((c, i) => (
          <Reveal key={c.t} delay={i * 70}>
            <a href={c.h} target="_blank" className="card-lift block h-full rounded-[24px] bg-white p-7 ring-1 ring-ink-900/5">
              <h3 className="font-bold">{c.t}</h3>
              <p className="mt-1.5 text-[14px] text-ink-500">{c.d}</p>
              <span className="mt-4 inline-block font-bold text-petrol-700">{c.a}</span>
            </a>
          </Reveal>
        ))}
      </section>
    </>
  );
}
