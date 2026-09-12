import LoginForm from './LoginForm'

export default function AdminLogin() {
  return (
    <main className="container" style={{ padding: '5rem 0', maxWidth: 520 }}>
      <p className="eyebrow">Acesso administrativo</p>
      <h1 className="section-title">Entrar no painel</h1>
      <LoginForm />
    </main>
  )
}
