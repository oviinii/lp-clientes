# Zinbox — Agência digital + LPs de clientes

A branch `main` é a **LP da agência Zinbox** (software, sites, landing pages e soluções digitais), construída em React + Vite + Tailwind v4 + Motion + Lenis.

As **LPs de clientes** moram em pastas separadas na raiz, cada uma autocontida para deploy via Root Directory na Vercel:

```
lp-clientes/                    # branch main
├── src/                        # LP da agência Zinbox (Root Directory ./)
├── bella-beauty/               # LP em produção
├── congresso-multidimensional/ # LP em produção
├── diego-guimaraes/            # LP em produção
├── iyalinda/                   # LP em produção
├── kbza-marketing-de-resultado/# LP em produção (HTML estático)
├── lp-ifakorede/               # LP em produção
├── nona-churrascaria/          # LP em produção
└── novo-planeta-tur/           # Site em produção (Next.js)
```

O sistema de briefings/admin vive na branch **`admin`**. O CRM Zinbox é um repositório/projeto separado.

## Desenvolvimento local (LP da agência)

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy na Vercel

- **Agência Zinbox:** projeto a partir da `main`, Root Directory `./`, Framework **Vite**
- **Cada LP:** novo projeto a partir da `main`, Root Directory = pasta do cliente, Framework conforme a pasta (**Vite**, **Next.js** ou **Other** p/ HTML estático)

## Nova LP (regra — para aparecer no deploy da Vercel)

1. Crie a pasta na raiz da **`main`** com `package.json` + `index.html` + `src/` (padrão Vite, espelhe `diego-guimaraes/`) e `.gitignore` com `node_modules` + `dist` (nunca commite `dist/`)
2. Commit + push na `main`
3. Na Vercel (New Project → `lp-clientes` → Edit no Root Directory): a pasta aparece na lista — selecione-a e crie o projeto

## LPs publicadas

- **Congresso Multidimensional** → https://congresso-multidimensional.vercel.app/
- **Ìyá Linda T'Osún** → https://iyalinda.vercel.app/
- **Diego Guimarães** → https://lp-diego-guimaraes.vercel.app/
- **KBZA Marketing** → https://kbza-marketing-de-resultado.vercel.app/
- **Bàbáláwo Ifákọ́rẹ̀dé** → https://lp-ifakorede.vercel.app/

## Contato da agência

Troque o número em `src/data/content.ts` (`WHATSAPP_NUMBER`) pelo WhatsApp real antes de publicar.
