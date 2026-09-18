import { PageHero } from "@/components/ui";

export const metadata = { title: "Política de Privacidade — Planeta Turismo" };

export default function Privacidade() {
  return (
    <>
      <PageHero
        crumbs="Início · Documentos"
        eyebrow="Política de privacidade"
        title={<>Seus dados, <span className="gold-gradient-text">protegidos de verdade</span></>}
        desc="Valorizamos nossos usuários e resguardamos sua privacidade — em conformidade com a legislação brasileira (LGPD)."
        image="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2000&auto=format&fit=crop"
      />
      <section className="mx-auto max-w-3xl px-5 py-14">
        <article className="prose prose-neutral max-w-none rounded-[24px] bg-white p-8 ring-1 ring-ink-900/5 md:p-12 [&_h3]:mt-8 [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-semibold [&_p]:mt-3 [&_p]:text-[15px] [&_p]:leading-relaxed [&_p]:text-ink-900/80 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-[15px] [&_ul]:text-ink-900/80">
          <h3>1. Aceite e abrangência</h3>
          <p>Ao visitar, utilizar e/ou se cadastrar neste website e em nossos sistemas operacionais e de backoffice, você aceita esta política e consente com as práticas descritas. Ela abrange o website e os sistemas operacionais da Planeta Turismo.</p>
          <h3>2. Dados compartilhados por exigência operacional</h3>
          <p>Para atender regulamentações da ANAC (Agência Nacional de Aviação Civil), SUSEP (Superintendência de Seguros Privados) e parceiros (hotéis, locadoras, companhias aéreas), compartilhamos dados como nome, data de nascimento e documentos. Informações complementares poderão ser exigidas pelos fornecedores.</p>
          <p>Em serviços compartilhados (hospedagem, reservas aéreas, apólices, locação), outros participantes do mesmo serviço podem eventualmente visualizar dados dos co-compartilhadores (ex.: check-in, contratos, apresentações).</p>
          <h3>3. Segurança dos sistemas</h3>
          <ul>
            <li>Armazenamento em nuvem com criptografia SSL 256 bits (AlphaSSL), inclusive para dados sensíveis como cartão de crédito;</li>
            <li>Controle total de usuários internos com perfis individualizados, histórico de operações e autenticação;</li>
            <li>Integração com sistemas de fornecedores para reduzir o compartilhamento de informações;</li>
            <li>TI contínuo e analista de segurança com verificações mensais de conformidade.</li>
          </ul>
          <h3>4. Seus direitos (LGPD)</h3>
          <p>Você pode solicitar confirmação de tratamento, acesso, correção, anonimização, portabilidade e eliminação de dados pessoais. Fale com <b>contato@planeta.tur.br</b> ou <b>(15) 3212-8890</b>.</p>
          <h3>5. Contato do encarregado</h3>
          <p>Planeta Turismo — Rua Salvador Corrêa, 628, Jardim Faculdade, Sorocaba/SP. E-mail: contato@planeta.tur.br.</p>
          <p className="text-[13px] text-ink-500">Texto reestruturado a partir da política original publicada em planeta.tur.br/politica-de-privacidade.</p>
        </article>
      </section>
    </>
  );
}
