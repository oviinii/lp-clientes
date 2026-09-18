'use client'
import { useActionState } from 'react'
import { loginAction } from '../actions'

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(loginAction, { ok: false, message: '' })
  return (
    <form action={formAction} className="card" style={{ padding: 24, marginTop: 24 }}>
      <label>
        <span className="label">E-mail</span>
        <input className="input" name="email" defaultValue="admin@lpclientes.local" autoComplete="username" />
      </label>
      <label style={{ display: 'block', marginTop: 14 }}>
        <span className="label">Senha</span>
        <input className="input" type="password" name="password" defaultValue="admin123" autoComplete="current-password" />
      </label>
      {state?.message ? <p className="muted" style={{ marginTop: 14 }}>{state.message}</p> : null}
      <button className="btn btn-primary" style={{ marginTop: 22, width: '100%' }} disabled={pending}>
        {pending ? 'Entrando...' : 'Entrar'}
      </button>
      <p className="muted" style={{ fontSize: 12, marginTop: 16 }}>
        <b>Demo:</b> admin@lpclientes.local / admin123<br/>
        <b>Produção:</b> Troque ADMIN_EMAIL, ADMIN_PASSWORD e AUTH_SECRET na Vercel.
      </p>
    </form>
  )
}
