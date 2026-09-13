# Turso Setup — vinicius9141@gmail.com

## Passo a passo:

1. Acesse https://turso.tech
2. Login com GitHub ou crie conta
3. Clique em **"Create Database"**
4. Configure:
   - **Name:** `lp-clientes`
   - **Region:** `sjc` (São Francisco, mais perto do Brasil) ou `iad` (Virginia)
   - Clique em **Create**
5. Copie a **URL** que aparece (começa com `libsql://`)
6. Clique em **"View Tokens"** e copie o **Access Token**

## Exemplo de credenciais (para referência):

```
TURSO_DATABASE_URL=libsql://lp-clientes-seu-org.turso.io
TURSO_AUTH_TOKEN=eyJhbGciOiJFZERL...
```

## Na Vercel (Settings > Environment Variables):

```
AUTH_SECRET = *** gerar com openssl rand -base64 32]
ADMIN_EMAIL = vinicius9141@gmail.com
ADMIN_PASSWORD = vini2525
TURSO_DATABASE_URL = libsql://...
TURSO_AUTH_TOKEN = eyJ...
```

## Teste local:

```bash
# Criar .env.local com as credenciais Turso
npm run db:init
npm run dev
# Acessar /admin e fazer login
```

## Deploy:

```bash
vercel
```
