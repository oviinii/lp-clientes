import { PageHero } from "@/components/ui";

export const metadata = { title: "Direito do Consumidor — Planeta Turismo" };

export default function Consumidor() {
  return (
    <>
      <PageHero
        crumbs="Início · Documentos"
        eyebrow="Direito do consumidor"
        title={<>Seus direitos, <span className="gold-gradient-text">sempre respeitados</span></>}
        desc="Transcrevemos os fundamentos do Código de Defesa do Consumidor (Lei nº 8.078/1990) — a base de todas as nossas relações."
        image="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2000&auto=format&fit=crop"
      />
      <section className="mx-auto max-w-3xl px-5 py-14">
        <article className="rounded-[24px] bg-white p-8 ring-1 ring-ink-900/5 md:p-12 [&_h3]:mt-8 [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-semibold [&_p]:mt-3 [&_p]:text-[15px] [&_p]:leading-relaxed [&_p]:text-ink-900/80">
          <h3>Lei nº 8.078, de 11 de setembro de 1990</h3>
          <p>Dispõe sobre a proteção do consumidor. O presente código estabelece normas de proteção e defesa do consumidor, de ordem pública e interesse social (arts. 5º XXXII e 170 V da Constituição).</p>
          <h3>Quem é consumidor e fornecedor</h3>
          <p><b>Art. 2º</b> — Consumidor é toda pessoa física ou jurídica que adquire ou utiliza produto ou serviço como destinatário final. <b>Art. 3º</b> — Fornecedor é quem produz, monta, cria, constrói, transforma, importa, exporta, distribui, comercializa ou presta serviços.</p>
          <h3>Política Nacional de Relações de Consumo (Art. 4º)</h3>
          <p>Atendimento das necessidades, respeito à dignidade, saúde e segurança, proteção dos interesses econômicos e melhoria da qualidade de vida — com transparência e harmonia nas relações de consumo.</p>
          <h3>Direitos básicos (Art. 6º — resumo)</h3>
          <p>Proteção da vida, saúde e segurança; educação para o consumo; informação adequada e clara; proteção contra publicidade enganosa; modificação de cláusulas abusivas; prevenção e reparação de danos; acesso à justiça; facilitação da defesa; e qualidade dos serviços públicos.</p>
          <h3>Como a Planeta aplica</h3>
          <p>Informação clara de preços, taxas e condições; contratos transparentes; assistência antes, durante e depois da viagem; canais abertos de reclamação e reparação; e cumprimento integral do ofertado.</p>
          <p className="text-[13px] text-ink-500">Resumo fiel ao conteúdo de planeta.tur.br/direito-do-consumidor. Texto legal completo em <a className="underline" href="https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm" target="_blank">planalto.gov.br</a>.</p>
        </article>
      </section>
    </>
  );
}
