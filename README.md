# LP Clientes — Sistema de Briefings e Produção

Monorepo com a aplicação principal de briefings + painel admin + todas as LPs de clientes.

```
lp-clientes/
├── app/                           # app Next.js na main
│   ├── page.tsx                   # home + LPs publicadas
│   ├── briefing/                  # formulário público
│   └── admin/                     # login, dashboard, briefings, kanban
├── lib/                           # db, auth, validações, status
├── components/                    # AdminShell, LoginForm
├── scripts/                       # init-db.mjs
├── congresso-multidimensional/    # LP em produção
├── iyalinda/                      # LP em produção
├── diego-guimaraes/               # LP existente
└── kbza-marketing-de-resultado/   # LP existente
```

## Arquitetura

- **Frontend:** Next.js 16 + React + Tailwind CSS
- **Backend:** Next.js Server Actions + API Routes
- **Banco:** SQLite via libSQL/Turso (persistente na Vercel)
- **Auth:** JWT com sessão HTTP-only cookie
- **Validação:** Zod + React Hook Form

## Desenvolvimento local

```bash
npm install
npm run db:init
npm run dev
```

Acesse:
- http://localhost:3000 (app principal)
- http://localhost:3000/briefing (formulário)
- http://localhost:3000/admin (login)

**Login padrão:**
```
admin@lpclientes.local
admin123
```

Banco local: `local.db`

## Rotas principais

- `/` home + LPs publicadas
- `/briefing` formulário público
- `/admin` login
- `/admin/dashboard` métricas
- `/admin/briefings` lista de briefings
- `/admin/briefings/:id` detalhe + notas + status
- `/admin/kanban` fluxo de produção (10 status)

## Deploy na Vercel

### 1. Criar banco Turso

Acesse https://turso.tech:

1. Crie uma conta (pode usar GitHub)
2. Clique em "Create Database"
3. Nome: `lp-clientes`
4. Região: sua região (ex: `sjc` para EUA)
5. Copie a **URL** e o **Token**

### 2. Configurar Vercel

No projeto da Vercel (Settings > Environment Variables):

```
AUTH_SECRET = gera_uma_string_aleatoria_forte
ADMIN_EMAIL = seu-email@dominio.com
ADMIN_PASSWORD = senha_forte
TURSO_DATABASE_URL = libsql://seu-banco.turso.io
TURSO_AUTH_TOKEN = seu_token_turso
```

### 3. Deploy

```bash
vercel
```

Ou conecte o repositório GitHub e Vercel fará deploy automático.

### 4. Verificar

Na Vercel, vá para Logs e procure por:
```
Database ready at libsql://...
```

Se ver isso, está tudo funcionando.

## LPs publicadas

- **Congresso Multidimensional** → https://congresso-multidimensional.vercel.app/
- **Ìyá Linda T'Osún** → https://iyalinda.vercel.app/
- **Diego Guimarães** → https://lp-diego-guimaraes.vercel.app/
- **KBZA Marketing** → https://kbza-marketing-de-resultado.vercel.app/

## Fluxo de briefingas

1. Cliente preenche `/briefing`
2. Dados salvos em SQLite com status `new`
3. Admin acessa `/admin/dashboard` para ver métricas
4. Admin abre `/admin/briefings` para listar
5. Clica em um briefing para ver detalhes, adicionar notas
6. Move para backlog, produção, revisão, aprovação no kanban
7. Histórico de mudanças salvo em `status_history`

## Status do kanban

```
new → backlog → missing_info
               ↓
              planning
                ↓
          in_production
                ↓
         internal_review
                ↓
         client_approval → approved → published
                ↓
              archived
```

## Primeiras ações após deploy

1. Ir para `/admin` e fazer login
2. Ir para `/admin/dashboard` e conferir as métricas
3. Testar `/briefing` para submeter um briefing de teste
4. Verificar se o briefing aparece em `/admin/briefings`
5. Abrir o briefing e testar adicionar notas
6. Testar mover entre status no kanban

## Estrutura do banco

- **admins**: email, password_hash, created_at
- **briefings**: todas as respostas do formulário + status + metadata
- **briefing_notes**: notas internas do admin
- **project_links**: links úteis (repo, Vercel, Figma, etc)
- **status_history**: auditoria de mudanças de status

## Desenvolvimento futuro

- [ ] Upload de arquivos (fotos, briefing.pdf)
- [ ] Envio automático de e-mail
- [ ] Notificações no WhatsApp
- [ ] Comentários por etapa
- [ ] Drag-and-drop no Kanban
- [ ] Exportação PDF/CSV
- [ ] Integração com GitHub Actions
- [ ] Geração automática de copy/estrutura LP
