# Configuração Turso para Vercel

## 1. Criar banco no Turso

Acesse: https://turso.tech

1. Faça login ou crie uma conta (pode usar GitHub)
2. Clique em "Create Database"
3. Nome: `lp-clientes` (ou similar)
4. Região: escolha a mais próxima (ex: `sjc` para EUA, `fra` para Europa)
5. Copie a **URL** (`libsql://...`)
6. Clique em "View Tokens" e copie o **Token**

## 2. Variáveis de ambiente na Vercel

No projeto da Vercel (Settings > Environment Variables), configure:

```
TURSO_DATABASE_URL=libsql://seu-banco-org.turso.io
TURSO_AUTH_TOKEN=seu_token_aqui
AUTH_SECRET=gera_uma_string_aleatoria_forte
ADMIN_EMAIL=seu-email@dominio.com
ADMIN_PASSWORD=senha_forte_aqui
```

## 3. Primeiro deploy

Na primeira vez que o app rodar na Vercel, as tabelas serão criadas automaticamente via `initDb()` no primeiro acesso.

## 4. Verificar

Na Vercel, vá para **Logs** e procure por:
```
Database ready at libsql://...
```

Se ver isso, o banco conectou e está pronto.
