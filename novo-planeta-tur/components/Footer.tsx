import Link from "next/link";
import { ADDRESS, EMAIL, HOURS, PHONE_DISPLAY, PHONE_HREF, WHATSAPP } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-deep-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img
            src="/logo.png"
            alt="Conexão Planeta Turismo"
            className="h-14 w-auto rounded-2xl bg-white px-4 py-2"
          />
          <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-white/65">
            Há mais de 10 anos transformando viagens em experiências únicas — lazer, grupos, românticas, fé e corporativo com atendimento de excelência.
          </p>
          <a href={WHATSAPP} target="_blank" className="mt-5 inline-block rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold hover:bg-white/20">
            💬 Falar no WhatsApp
          </a>
        </div>

        <div>
          <h4 className="text-[12px] font-bold uppercase tracking-[0.2em] text-gold-400">Viagens</h4>
          <ul className="mt-4 space-y-2.5 text-[14px] text-white/75">
            <li><Link className="hover:text-white" href="/pacotes">Pacotes</Link></li>
            <li><Link className="hover:text-white" href="/produtos-e-servicos">Produtos e Serviços</Link></li>
            <li><Link className="hover:text-white" href="/promocoes">Promoções</Link></li>
            <li><Link className="hover:text-white" href="/roteiros-de-fe">Roteiros de Fé</Link></li>
            <li><Link className="hover:text-white" href="/viagens-romanticas">Viagens Românticas</Link></li>
            <li><Link className="hover:text-white" href="/grupos">Grupos</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[12px] font-bold uppercase tracking-[0.2em] text-gold-400">Corporativo & Institucional</h4>
          <ul className="mt-4 space-y-2.5 text-[14px] text-white/75">
            <li><Link className="hover:text-white" href="/corporativo">Corporativo</Link></li>
            <li><Link className="hover:text-white" href="/viagens-corporativas">Viagens Corporativas</Link></li>
            <li><Link className="hover:text-white" href="/eventos">Eventos</Link></li>
            <li><Link className="hover:text-white" href="/incentivos">Incentivos</Link></li>
            <li><Link className="hover:text-white" href="/quem-somos">Quem Somos</Link></li>
            <li><Link className="hover:text-white" href="/talentos">Talentos</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[12px] font-bold uppercase tracking-[0.2em] text-gold-400">Atendimento</h4>
          <ul className="mt-4 space-y-3 text-[14px] text-white/75">
            <li>📞 <a href={PHONE_HREF} className="font-semibold text-white">{PHONE_DISPLAY}</a></li>
            <li>✉️ <a href={`mailto:${EMAIL}`} className="hover:text-white">{EMAIL}</a></li>
            <li>📍 {ADDRESS}</li>
            <li>🕘 {HOURS}</li>
          </ul>
          <div className="mt-4 flex gap-2 text-[12.5px]">
            <Link href="/politica-de-privacidade" className="text-white/60 hover:text-white">Privacidade</Link>
            <span className="text-white/25">·</span>
            <Link href="/direito-do-consumidor" className="text-white/60 hover:text-white">Consumidor</Link>
            <span className="text-white/25">·</span>
            <Link href="/documentos" className="text-white/60 hover:text-white">Documentos</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-[12.5px] text-white/45 sm:flex-row">
          <p>© {new Date().getFullYear()} Planeta Turismo — Sorocaba/SP. Todos os direitos reservados.</p>
          <p>CNPJ · Cadastur · IATA — site refeito com ♥ em Next.js</p>
        </div>
      </div>
    </footer>
  );
}
