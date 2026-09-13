import Link from 'next/link'
import { ArrowRight, CheckCircle2, LayoutDashboard, Database, Lock, BarChart3 } from 'lucide-react'

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <nav className="nav">
            <div className="brand">📱 LP Clientes</div>
            <div style={{ display: 'flex', gap: 12 }}>
              <Link className="btn btn-soft" href="/admin">
                <Lock size={16} /> Admin
              </Link>
              <Link className="btn btn-primary" href="/briefing">
                Preencher briefing <ArrowRight size={18} />
              </Link>
            </div>
          </nav>
          <div style={{ maxWidth: 760, padding: '5rem 0 2rem' }}>
            <p className="eyebrow">Sistema de briefings e produção de LPs</p>
            <h1 className="title">Landing Pages com processo claro do briefing à publicação.</h1>
            <p className="muted" style={{ fontSize: 18, lineHeight: 1.7 }}>
              Cliente preenche o briefing, admin recebe e acompanha a produção em um kanban colaborativo. Tudo centralizado, nada se perde.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 28 }}>
              <Link className="btn btn-primary" href="/briefing">
                Enviar briefing <ArrowRight size={18} />
              </Link>
              <Link className="btn btn-soft" href="/admin/dashboard">
                <BarChart3 size={18} /> Abrir painel
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ padding: '4rem 0' }}>
        <p className="eyebrow">Como funciona</p>
        <h2 className="section-title">Um fluxo simples para evitar retrabalho.</h2>
        <div className="grid lp-grid" style={{ marginTop: 24 }}>
          <article className="card" style={{ padding: 24 }}>
            <CheckCircle2 color="var(--gold)" size={32} />
            <h3 style={{ marginTop: 12 }}>Cliente preenche o briefing</h3>
            <p className="muted">Todas as informações necessárias em um formulário organizado e fácil.</p>
          </article>
          <article className="card" style={{ padding: 24 }}>
            <CheckCircle2 color="var(--gold)" size={32} />
            <h3 style={{ marginTop: 12 }}>Admin recebe e analisa</h3>
            <p className="muted">O briefing cai no painel admin. Se faltarem dados, solicitamos antes de começar.</p>
          </article>
          <article className="card" style={{ padding: 24 }}>
            <CheckCircle2 color="var(--gold)" size={32} />
            <h3 style={{ marginTop: 12 }}>Produção no kanban</h3>
            <p className="muted">LP passa por backlog, produção, revisão, aprovação e publicação. Histórico completo de cada etapa.</p>
          </article>
        </div>
      </section>

      <section className="container" style={{ padding: '4rem 0' }}>
        <p className="eyebrow">Tecnologia</p>
        <h2 className="section-title">Banco persistente e segurança em produção.</h2>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', marginTop: 24, gap: '1rem' }}>
          <div className="card" style={{ padding: 20 }}>
            <div style={{ color: 'var(--gold)', marginBottom: 12 }}><Database size={24} /></div>
            <h3>Turso/libSQL</h3>
            <p className="muted" style={{ fontSize: 14 }}>SQLite distribuído e persistente na Vercel</p>
          </div>
          <div className="card" style={{ padding: 20 }}>
            <div style={{ color: 'var(--gold)', marginBottom: 12 }}><Lock size={24} /></div>
            <h3>Autenticação JWT</h3>
            <p className="muted" style={{ fontSize: 14 }}>Acesso seguro ao painel admin com sessão criptografada</p>
          </div>
          <div className="card" style={{ padding: 20 }}>
            <div style={{ color: 'var(--gold)', marginBottom: 12 }}><BarChart3 size={24} /></div>
            <h3>Dashboard em tempo real</h3>
            <p className="muted" style={{ fontSize: 14 }}>Métricas de briefings, status e histórico de mudanças</p>
          </div>
        </div>
      </section>

      <section className="container" style={{ padding: '4rem 0' }}>
        <p className="eyebrow">LPs publicadas na Vercel</p>
        <h2 className="section-title">Projetos em produção.</h2>
        <div className="grid lp-grid" style={{ marginTop: 24 }}>
          <article className="card" style={{ padding: 24, display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>🔮</div>
            <span className="badge" style={{ marginBottom: 12 }}>Ao vivo</span>
            <h3 style={{ flex: 1 }}>Congresso Multidimensional</h3>
            <p className="muted" style={{ fontSize: 14, marginBottom: 18 }}>Evento espiritual presencial — expansão de consciência</p>
            <a className="btn btn-gold" href="https://congresso-multidimensional.vercel.app/" target="_blank" rel="noreferrer">
              Visitar <ArrowRight size={16} />
            </a>
          </article>
          <article className="card" style={{ padding: 24, display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>✨</div>
            <span className="badge" style={{ marginBottom: 12 }}>Ao vivo</span>
            <h3 style={{ flex: 1 }}>Ìyá Linda T'Osún</h3>
            <p className="muted" style={{ fontSize: 14, marginBottom: 18 }}>Cursos, consultas e espiritualidade ancestral — Jogo de Búzios</p>
            <a className="btn btn-gold" href="https://iyalinda.vercel.app/" target="_blank" rel="noreferrer">
              Visitar <ArrowRight size={16} />
            </a>
          </article>
          <article className="card" style={{ padding: 24, display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>📸</div>
            <span className="badge" style={{ marginBottom: 12 }}>Ao vivo</span>
            <h3 style={{ flex: 1 }}>Diego Guimarães</h3>
            <p className="muted" style={{ fontSize: 14, marginBottom: 18 }}>Fotógrafo e criador de conteúdo</p>
            <a className="btn btn-gold" href="https://lp-diego-guimaraes.vercel.app/" target="_blank" rel="noreferrer">
              Visitar <ArrowRight size={16} />
            </a>
          </article>
          <article className="card" style={{ padding: 24, display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>📊</div>
            <span className="badge" style={{ marginBottom: 12 }}>Ao vivo</span>
            <h3 style={{ flex: 1 }}>KBZA Marketing</h3>
            <p className="muted" style={{ fontSize: 14, marginBottom: 18 }}>Agência de marketing e comunicação</p>
            <a className="btn btn-gold" href="https://kbza-marketing-de-resultado.vercel.app/" target="_blank" rel="noreferrer">
              Visitar <ArrowRight size={16} />
            </a>
          </article>
        </div>
      </section>

      <section className="container" style={{ padding: '2rem 0 5rem' }}>
        <div className="card" style={{ padding: 40, textAlign: 'center' }}>
          <h2 className="section-title">Pronto para criar uma LP?</h2>
          <p className="muted" style={{ fontSize: 16, maxWidth: 500, margin: '1rem auto' }}>
            Preencha o briefing e comece o processo. Nossa equipe entra em contato em breve.
          </p>
          <Link className="btn btn-primary" href="/briefing" style={{ marginTop: 24 }}>
            Preencher briefing agora
          </Link>
        </div>
      </section>
    </main>
  )
}
