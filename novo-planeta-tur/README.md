# Planeta Turismo — Novo Site ✈️

Rebuild completo do site [planeta.tur.br](https://planeta.tur.br/) com layout novo, moderno e premium.

**Stack:** Next.js 16 (App Router) + Tailwind CSS v4 + TypeScript

## Rodar

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm start
```

## Páginas (todas as originais refeitas)

| Nova rota | Origem antiga |
|---|---|
| `/` Home | `/` |
| `/pacotes` | `/pacotes` + `/portfolio` (redirect) |
| `/produtos-e-servicos` | `/produtoseservicos` (redirect) |
| `/promocoes` | `/centraldepromocoes` (redirect) |
| `/roteiros-de-fe` | `/roteiros-de-fe` |
| `/viagens-romanticas` | `/viagens-romanticas` |
| `/grupos` | `/grupos` |
| `/corporativo` | `/corporativo` |
| `/viagens-corporativas` | `/viagens-corporativas` |
| `/eventos` | `/eventos` |
| `/incentivos` | `/incentivos` |
| `/quem-somos` | `/quemsomos` (redirect) |
| `/contato` | `/contato` + `/copia-contato-2` (redirect) |
| `/avaliacao` | `/avalienossosservicos` (redirect) |
| `/responsabilidade-social` | `/copia-contato-1` (redirect) |
| `/fale-conosco` | `/faleconosco` (redirect) |
| `/talentos` | `/talentos` |
| `/documentos` | `/documentos` |
| `/politica-de-privacidade` | idem |
| `/direito-do-consumidor` | idem |

## Contato da agência (conteúdo real)

- 📞 (15) 3212-8890 · ✉️ contato@planeta.tur.br
- 📍 Rua Salvador Corrêa, 628 — Jardim Faculdade, Sorocaba/SP
- 🕘 Seg–Sex 9h–19h · Sáb 9h–13h

> ⚠️ Trocar o número de WhatsApp placeholder (`wa.me/5515999999999`) pelo número oficial em `lib/data.ts` (const `WHATSAPP`) antes de publicar.

## Deploy

Recomendado: Vercel (importar repo → deploy automático). Também funciona em qualquer host Node (`npm run build && npm start`).
