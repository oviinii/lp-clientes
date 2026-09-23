import logo from '../assets/logo.png'
import { EMAIL, INSTAGRAM_URL, SITE_URL, WHATSAPP_URL } from '../data/content'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-ink-3">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3 lg:px-10">
        <div>
          <img src={logo} alt="Kbza Marketing de Resultado" className="h-11 w-auto" />
          <p className="mt-4 max-w-xs font-sans text-sm text-bone-dim">
            Especialista em captação de alunos e funil de matrículas para
            instituições de ensino.
          </p>
        </div>
        <nav aria-label="Navegação do rodapé">
          <p className="font-sans text-xs uppercase tracking-[0.24em] text-bone-dim">
            Navegação
          </p>
          <ul className="mt-4 space-y-2.5 font-sans text-sm">
            {[
              ['#sobre', 'Quem somos'],
              ['#beneficios', 'Benefícios'],
              ['#passos', 'Passos'],
              ['#contato', 'Contato'],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="text-bone-dim transition hover:text-bone">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="font-sans text-xs uppercase tracking-[0.24em] text-bone-dim">
            Contato
          </p>
          <ul className="mt-4 space-y-2.5 font-sans text-sm">
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer noopener" className="text-bone-dim transition hover:text-bone">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="text-bone-dim transition hover:text-bone">
                {EMAIL}
              </a>
            </li>
            <li>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer noopener" className="text-bone-dim transition hover:text-bone">
                @kbzamkt
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 font-sans text-[13px] text-bone-dim sm:flex-row lg:px-10">
          <p>© {year} Kbza Marketing de Resultado. Todos os direitos reservados.</p>
          <a href={SITE_URL} target="_blank" rel="noreferrer noopener" className="transition hover:text-bone">
            www.kbza.com.br
          </a>
        </div>
      </div>
    </footer>
  )
}
