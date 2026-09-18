# Instruções para completar o setup:

## 1. Criar banco Turso

Acesse: https://turso.tech

1. Faça login (pode usar GitHub)
2. Clique em **"Create database"**
3. Preencha:
   - **Name:** `lp-clientes-prod`
   - **Region:** `sjc` (recomendado para Brasil)
4. Clique **"Create"**
5. Copie a **URL** (ex: `libsql://lp-clientes-prod-seu-usuario.turso.io`)
6. Vá em **"Tokens"** > **"Create token"** > copie o token

## 2. Atualizar .env.local

Cole no arquivo `.env.local`:

```
AUTH_SECRET=seu-secret-aleatorio-forte
ADMIN_EMAIL=vinicius9141@gmail.com
ADMIN_PASSWORD=vini2525
TURSO_DATABASE_URL=libsql://lp-clientes-prod-seu-usuario.turso.io
TURSO_AUTH_TOKEN=seu-token-aqui
```

## 3. Testar localmente

```bash
npm run db:init
npm run dev
```

Depois acesse:
- http://localhost:3000/admin
- Login: vinicius9141@gmail.com / vini2525

## 4. Deploy na Vercel

1. Crie projeto em https://vercel.com
2. Importe o repositório GitHub: `oviinii/lp-clientes`
3. Configure as mesmas variáveis de ambiente (Settings > Environment Variables)
4. Deploy automático acontece

## 5. Verificar

Na Vercel:
- Vá para **Logs** (Functions)
- Procure por: "Database ready at libsql://..."
- Se vir, está funcionando!

---

**Status:** Aguardando credenciais Turso para prosseguir com testes e deployment.
