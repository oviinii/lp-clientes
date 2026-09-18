# Landing Pages — Clientes

Monorepo com todas as landing pages (LP) de clientes da agência. Cada cliente fica em sua própria pasta na raiz do repositório.

## Estrutura

```
lp-clientes/
├── novo-planeta-tur/      ← site do cliente Planeta Turismo (Next.js)
│   ├── app/
│   ├── components/
│   ├── lib/
│   ├── public/
│   └── package.json
└── proximo-cliente/
    └── ...
```

## Deploy na Vercel

1. Crie um **novo projeto** na Vercel e importe este repositório (branch `novo-planeta-tur`).
2. Em **Root Directory**, selecione a pasta do cliente (`novo-planeta-tur`).
3. Framework Preset: **Next.js** (detectado automaticamente).
4. Clique em **Deploy**.

Repita para cada novo cliente, apontando sempre para a pasta certa. Cada projeto ganha uma URL própria (`<cliente>.vercel.app`).

## Adicionar um novo cliente

1. Crie uma branch a partir da `main` (ex.: `git checkout -b cliente-x`).
2. Crie uma pasta na raiz com o slug do cliente (ex.: `cliente-x/`).
3. Coloque o site dentro dela, faça commit e push.
4. Abra um PR para a `main` para aprovação.

## Desenvolvimento local

```bash
cd novo-planeta-tur
npm install
npm run dev
```

Abra `http://localhost:3000/` no navegador.
