# Landing Pages — Clientes

Monorepo com todas as landing pages (LP) de clientes da agência. Cada cliente fica em sua própria pasta na raiz do repositório.

## Estrutura

```
lp-clientes/
├── kbza-marketing-de-resultado/
│   ├── index.html
│   ├── css/
│   ├── js/
│   ├── imagens/
│   └── briefing.json
└── proximo-cliente/
    └── ...
```

## Deploy na Vercel

Cada LP é um site estático (HTML + CSS + JS), sem build. Para publicar:

1. Crie um **novo projeto** na Vercel e importe este repositório.
2. Em **Root Directory**, selecione a pasta do cliente (ex.: `kbza-marketing-de-resultado`).
3. Framework Preset: **Other** (ou deixe em branco — Vercel detecta HTML estático).
4. Build Command e Output Directory: deixe em branco.
5. Clique em **Deploy**.

Repita para cada novo cliente, apontando sempre para a pasta certa. Cada projeto ganha uma URL própria (`<cliente>.vercel.app`).

## Adicionar uma nova LP

1. Crie uma pasta na raiz com o slug do cliente (ex.: `cliente-x/`).
2. Coloque `index.html` e demais arquivos dentro.
3. Faça commit e push.

## Desenvolvimento local

```bash
cd <pasta-do-cliente>
python3 -m http.server 8090
```

Abra `http://localhost:8090/` no navegador.
