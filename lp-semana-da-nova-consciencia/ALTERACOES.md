# Semana da Nova Consciência — registro de alterações

Documento de handoff das alterações feitas na LP `lp-semana-da-nova-consciencia`.

**Data:** 06/10/2026
**Fontes de verdade usadas:**

1. `Landing Page Semana da Nova Consciência-alterações.docx` (raiz desta pasta) — os trechos **grifados em amarelo** são os itens que deveriam ser alterados.
2. `imagens-referencia/` (raiz desta pasta) — 22 criativos da campanha (1080×1920). Definem cores, logo e linguagem visual.
3. `manual de marca` (`Manual de marca.pdf` + `public/logos/logo-fundo-escuro.png` / `logo-fundo-claro.png`) — swatches oficiais de cor.

---

## 1. Identidade visual aplicada (cores e referências dos criativos)

### Paleta oficial da campanha

Extraída por quantização dos 22 criativos (`imagens-referencia/`) e conferida contra os swatches do manual de marca:

| Cor | Hex | Origem / uso |
|---|---|---|
| Navy cósmico | `#03062f` | Cor dominante dos criativos (~62% dos pixels). Fundo principal. |
| Navy elevado | `#0a1140` | Cards sobre fundo escuro. |
| Azul institucional | `#1028a0` | Swatch do manual de marca (`logo-fundo-*.png`). |
| Azul nebulosa | `#203c65` | Brilhos/halos dos criativos. |
| Amarelo campanha | `#f3b100` | CTA e destaques (pixel mais frequente: `#f3b100`/`#fcb500`). |
| Dourado marca | `#e0a818` | Swatch do manual de marca; usado em bordas e textos sobre fundo claro. |
| Gelo | `#e8ecf8` | Texto sobre navy. |
| Cinza-azulado | `#9aa4c8` | Texto secundário sobre navy. |
| Claro | `#f4f6fb` | Fundo das seções de contraste. |
| Ink | `#0b1030` | Texto sobre fundo claro. |

Antes o tema usava roxo (`#3b0b59`) + dourado apagado (`#cda13c`) — cores que **não** existem nos criativos. Foram substituídas pela paleta acima em `tailwind.config.js`, e todos os componentes foram migrados para os novos tokens (`brand-night`, `brand-deep`, `brand-gold`, `brand-blue`, `brand-light`, `brand-muted`, `brand-ice`).

### Elementos de identidade recriados em CSS (`src/index.css`)

- `.cosmic` — fundo navy com nebulosas azul/amarela (igual aos criativos).
- `.stars` — campo de estrelas em `radial-gradient` (criativos têm estrelas em todos os fundos).
- `.rings` / `.rings-gold` — anéis concêntricos de geometria sagrada (presentes nos criativos de fundo).
- `.particle` — partículas de luz subindo (seção lúdica).
- `.btn-gold`, `.btn-ghost`, `.chip`, `.card-dark`, `.card-cosmic` — componentes padronizados de CTA, selo e card.
- Animações: `floaty`, `twinkle`, `glow-pulse`, `shine` + respeito a `prefers-reduced-motion`.

### Logo

- Variante usada: `/logos/logo-horizontal-1.png` (cabeça amarela + "Semana da" branco + "Nova Consciência" amarelo) — é exatamente a logo dos criativos, correta sobre navy.
- A variante `logo-horizontal-2.png` (linha escura) é a indicada para fundos claros, caso a logo passe a aparecer em seção clara.

---

## 2. Item por item — o que estava grifado em amarelo no DOCX

### 2.1 Banner / Hero — "Utilizar somente a Leandra ou a identidade do criativo principal de evento. Tentar alinhar à esquerda os dizeres."

**Antes:** texto centralizado, fundo roxo→dourado, foto da plateia com 20% de opacidade, `<h2>` (sem `h1`).

**Depois** (`src/components/Hero.tsx`):
- Todo o texto **alinhado à esquerda** (`text-left`), em grid de 2 colunas no desktop.
- Visual da direita = **identidade do criativo principal do evento**: arte cósmica (`/imagens/imagem de capa2.webp`) dentro de um "portal" com anéis dourados animados e halo.
- Fundo navy cósmico com estrelas e anéis — sem a foto da plateia (a plateia passou a ser usada na seção da mentora, onde o briefing pede).
- `<h1>` novo: "Semana da **Nova Consciência**" + subtítulo "O ano do salto de consciência" (antes não existia `h1` na página).
- Selos de data/live, 3 provas (5 dias / 25+ / 100%), CTA "Garantir minha vaga" + CTA secundário "Ver a programação".
- Cards flutuantes "Ao vivo · De 2 a 6 de dezembro" e "Vagas limitadas · Lote 1 · 50% off".

> Alternativa prevista no briefing ("utilizar somente a Leandra") foi aplicada na **Sessão 04 / Mentora**, onde o briefing pede a foto da organizadora com a plateia ao fundo.

### 2.2 Sessão 01 / Pilares — "Utilizar mulher com média de idade de 45 anos."

**Antes:** 3 cards com fotos trocadas em relação aos conceitos do briefing (a foto de palco ilustrava "Relacionamentos" e a do abraço ilustrava "Prosperidade").

**Depois** (`src/components/Pilares.tsx`):
- Reorganização das imagens para casar com o conceito de cada pilar:
  - **Saúde para viver** (vitalidade/equilíbrio) → `/imagens/IMG_1951.JPG` (mulher sorrindo).
  - **Relacionamentos** (abraço afetuoso e genuíno entre mulheres) → `/imagens/opt/IMG_8671.jpg` (abraço real entre mulheres do evento).
  - **Prosperidade** (mulher elegante e confiante) → `/imagens/IMG_5398.jpg` (retrato oficial, mesma foto do criativo "Quem vai te conduzir nessa jornada?").
- Todas as fotos recebem duotone navy (`bg-brand-blue/30 mix-blend-color` + gradiente) para unificar na identidade cósmica, conforme "fundo com aura, espaço ou galáxia".
- Adicionado o subtítulo de cada pilar (Vitalidade e equilíbrio / Para amar e ser amada / Para realizar) e ícones.

> Observação de acervo: as fotos disponíveis são do evento (Leandra Soares, 40+) e do acolhimento entre mulheres. **Não existe no acervo atual uma foto "de banco" de mulher com 45 anos em meditação/natureza para o pilar Saúde** — a imagem usada é a que melhor atende ao conceito. Se o cliente quiser exatamente o conceito descrito, precisa enviar a foto.

### 2.3 Sessão 02 / Depoimentos — "O CARROSSEL ESTÁ COM PROBLEMAS NA HORA DE PASSAR."

**Causas encontradas (3 problemas reais):**

1. **Salto de layout:** os 8 prints em `public/depoimentos/` têm proporções muito diferentes entre si — de `876×422` (paisagem) a `704×1381` (retrato altíssimo). Como o grid não tinha altura fixa, ao trocar de página a seção inteira mudava de altura e "pulava".
2. **Setas fora do container:** `left-[-16px]` / `right-[-16px]` posicionavam os botões fora da área visível no mobile.
3. **Depoimentos nunca exibidos:** o array tinha só 6 itens, mas existem 8 arquivos na pasta (2 nunca apareciam).

**Depois** (`src/components/Depoimentos.tsx`) — **os prints foram substituídos por cards transcritos**:
- Cada depoimento virou um **card de texto com altura idêntica** (`h-[22rem]`) → o carrossel não muda de tamanho em nenhuma página e o "pulo" desaparece na raiz do problema.
- Texto **transcrito fielmente** (erros, CAIXA ALTA, emojis e pontuação preservados). Apenas 3 depoimentos mais longos aparecem com final cortado pelo limite de linhas do card; os textos integrais estão no final desta seção.
- Autoria exibida como **nome + inicial** (ex.: "Leonice A.") ou "Participante" — **sem telefone, e-mail, CPF ou link**.
- Navegação por página com animação `spring`, **arraste/swipe** no mobile (gatilho de 60px), setas dentro do container no mobile e fora no desktop largo, indicadores com `aria-current`.
- Responsivo: 1 card (mobile), 2 (≥640px), 3 (≥1024px), com a página reajustada ao mudar o breakpoint.
- **Resultado colateral positivo:** a seção deixou de carregar ~2,5 MB de imagens.

#### Por que os prints saíram da página (achado importante)

Ao transcrever os 8 prints, apareceu um problema que não estava no briefing: **em 7 dos 8 aparece o telefone com DDD do cliente**. Não é uma barra de cabeçalho — o número fica **inline, acima do bloco de mensagem**, misturado ao conteúdo. Isso significa que:

- **a versão publicada anteriormente expunha telefones de clientes reais** (dado pessoal — atenção à LGPD);
- recortar o cabeçalho automaticamente é pouco confiável: um corte fixo de 15% decepou a primeira linha do texto, e a detecção por linha uniforme errou em pelo menos uma imagem (a que não tem cabeçalho, `IMG_2670`), onde o corte comeria a mensagem.

Por isso os 8 arquivos originais foram **movidos de `public/depoimentos/` para `depoimentos-originais/`** (`git mv`, histórico preservado): continuam no repositório e no disco, mas **não são mais servidos no deploy**. Se o cliente quiser exibir as conversas originais como prova, é preciso enviar versões **autorizadas e com os telefones removidos** — aí é só reativar um bloco de imagem no card.

#### Textos integrais transcritos (fonte de verdade)

| Arquivo original | Autor exibido | Transcrição |
|---|---|---|
| `7489452d-...jpg` | Leonice A. | LEANDRA amei tudo foi tudo maravilhoso, a recepção do hotel as apresentações dos palestrantes o almoço o lanche da tarde, foi tudo de bom, gostei muito gratidão gratidão gratidão você Leandra e maravilhosa amei te conhecer |
| `IMG_2657.jpg` | Adelia M. | Oi Leandra e Valter!!! Adorei conhece-los pessoalmente. E que congresso vocês prepararam para nós. !!!!!! Quantas informações maravilhosas!!! Obrigada por tanta dedicação e empenho. Espero ve-los em breve. Um grande abraço!!! ❤️❤️❤️❤️ |
| `IMG_2664.jpg` | Glauciarpaula | O Congresso pode ser definido por uma única palavra. PERFEITO em tudo. amei. / Gostaria de saber se o texto que o Prof Ergom leu no final pode ser enviado. Achei maravilhoso.. |
| `IMG_2668.jpg` | Katia A. | Leandra equipe! Gratidão pelo evento maravilhoso!!!!! Amei, aprendi muito e sei que é só o começo... Os 2 dias passaram voando... Senti uma energia linda!!! Parabéns aos palestrantes também.... entrei em contato com coisas fantásticas... Gratidão ao Universo, Deus e à espiritualidade toda por ter acesso à todo esse ensinamento. Lindas vibrações à todos!!! 🌷💙🩵💙🩵💙🩵💙🌷 |
| `IMG_2670.jpg` | Participante | Parabéns e gratidão a Leandra e toda equipe maravilhosa!!! Muita emoção e crescimento pessoal nesses 2 dias abençoados. Já estou inscrita para o terceiro Congresso. 😍 |
| `IMG_2672.jpg` | Vera | Parabéns Leandra, a você e a toda sua equipe, pelo congresso maravilhoso e inesquecível que vocês nos proporcionaram! Você é muito iluminada! Gratidão por tudo! 🙏✨🙏✨🙏✨🙏✨ |
| `IMG_2673.jpg` | Jana | Eu gostaria de agradecer a todos envolvidos no Congresso, em especial aos organizadores que deram um show em simpatia. Palestras maravilhosas e muitos conhecimentos adquiridos. Que a luz do Mestre Jesus abençoe a todos vcs 🙏 E com certeza não deixarei de ir aos próximos . |
| `ddb36d34-...jpg` | Rosangela T. | Parabéns! Gratidão 🙏 😍 Querida Leandra, toda equipe organizadora e os Anjos de Luz incansáveis que cuidaram com tanto carinho da organização impecável do congresso . Foi maravilhoso! Indescrítível! 🙏 🙏 😍 Tenho a certeza que para vencer cada etapa desde o início sonharam, planejaram e realizaram com muito esforço , trabalho, dedicação e amor 💖 cada momento. Gratidão 🙏 por cada palestrante, cada ensinamento, abraço, amigos, verdades que soubemos e nos levam para uma jornada de crescimento melhor ! Que o Mestre Jesus 🙏 abençoe a todos os envolvidos. Em especial a você, Leandra e ao Valter , Companheiro incansável nesta jornada de luz . |

> **Atenção (conteúdo e autorização):** os depoimentos são sobre o **Congresso Multidimensional** (2 dias, presencial), não sobre a Semana da Nova Consciência (5 dias, online). Por isso a seção traz a ressalva "mensagens enviadas por participantes do Congresso Multidimensional, realizado pela mesma equipe". Também é necessário **consentimento documentado** dos autores para uso de nome, texto e imagem — e vale atenção a menções religiosas ("Mestre Jesus", "Anjos de Luz", "Universo") e a relatos de resultado subjetivo, que não devem ser lidos como promessa de resultado.

### 2.4 Sessão 03 / Programação — "Fundo claro com as caixinhas referentes aos dias e imagens condizentes com os títulos dos dias. As caixinhas precisam dar contraste no fundo claro, com identidade cósmica ou galáxia etc."

**Antes:** fundo claro com caixas **brancas** — ou seja, contraste baixíssimo, sem identidade cósmica e sem imagem por dia.

**Depois** (`src/components/Programacao.tsx`):
- Seção em fundo claro (`brand-light`), título em navy.
- Cada dia virou uma **caixa navy cósmica** (`.card-cosmic .cosmic` + estrelas), criando o contraste exigido com o fundo claro.
- Cada dia tem **imagem condizente com o tema**:
  | Dia | Tema (briefing) | Imagem |
  |---|---|---|
  | 1 · **Reconhecer** | Entendimento do cenário | Plateia do último congresso (`opt/IMG_8663.jpg`) |
  | 2 · **Compreender** | Estrutura oculta | Arte cósmica (`imagem de capa2.webp`) |
  | 3 · **Libertar** | Correntes de escassez emocional | Roda de Cura Tridimensional |
  | 4 · **Ativar** | Consciência capaz de desejar e realizar | Mentora no palco (`opt/IMG_8902.jpg`) |
  | 5 · **Atravessar** | Portais do próximo ano | Palco/telão do congresso (`opt/CONGRESSOMULTIDIMENSIONAL-00127.jpg`) |
- O verbo de cada dia (RECONHECER, COMPREENDER, LIBERTAR, ATIVAR, ATRAVESSAR) vem dos criativos oficiais "DIA 1 a 5" e foi adicionado como selo.

> Divergência registrada (decisão pendente do cliente): o DOCX e os criativos trazem **textos diferentes** para os dias 2, 3, 4 e 5. Foi mantido o texto do DOCX (fonte do pedido de alteração) e adicionado o verbo do criativo. Se o cliente preferir o texto dos criativos, é só trocar as strings.

### 2.5 Sessão 04 / Mentora — "Foto da organizadora Leandra com fundo da plateia do último evento."

**Antes:** a imagem exibida como "Leandra Soares" era `/imagens/imagem de capa2.webp`, que é uma **ilustração cósmica genérica** (não é a Leandra) — ou seja, o retrato estava errado.

**Depois** (`src/components/Mentora.tsx`):
- Fundo da seção = **plateia do último evento** (`opt/IMG_8663.jpg`) com overlay navy e estrelas.
- Primeiro plano = **foto real da Leandra** (`IMG_5398.jpg`, a mesma usada no criativo "Quem vai te conduzir nessa jornada?") em moldura dourada com halo e anéis.
- Bio do briefing mantida + 3 selos de credencial (30 anos em comunicação / Congresso Multidimensional / Despertadores da Nova Era) + CTA.
- A ilustração cósmica que estava aqui foi reaproveitada no Hero (onde faz sentido como identidade do evento).

### 2.6 Sessão 07 / Comparação — "FUNDO PRECISA DAR CONTRASTE COM A CAIXA"

**Antes:** fundo navy `#1a1025` com caixa branca **translúcida** (`bg-white/5`) → contraste praticamente nulo entre fundo e caixa.

**Depois** (`src/components/Comparacao.tsx`):
- Fundo navy cósmico (estrelas + nebulosas) e **caixa sólida clara** (`bg-brand-light`) com sombra profunda → contraste alto e imediato.
- Dentro da caixa: 2026 em cinza-navy apagado vs 2027 em dourado; cada linha com divisória central.
- **Mobile em leitura vertical** (item 2026 → seta → item 2027), respondendo à dúvida do briefing ("será que comparação vertical ficaria legal?") — no mobile cada par é empilhado com rótulos "2026 · preparação" / "2027 · o salto".

### 2.7 Sessão 08 / Frase — "Bem lúdica na identidade do evento."

**Antes:** fundo roxo, foto em 10% de opacidade, sem elementos lúdicos.

**Depois** (`src/components/Frase.tsx`):
- Portal de luz com **anéis dourados animados**, halo pulsante e estrelas.
- **22 partículas de luz** subindo continuamente (`.particle`), com durações/atrasos variados.
- Frase em serifada itálica (Playfair Display, agora carregada no `index.html`) com trecho central em degradê dourado.
- Assinatura "Leandra Soares".

### 2.8 Sessão 09 — "Sessão 9 em processo de criação"

Nada implementado: o briefing marca a seção como **ainda em criação**. A posição dela (entre a Frase / Sessão 08 e a Oferta) está livre para receber o conteúdo quando for definido. **Ação necessária do cliente:** enviar o conteúdo da Sessão 9.

### 2.9 Ingressos — "Vagas Limitadas" (Acesso Comunidade Nova Era)

**Depois** (`src/components/Oferta.tsx`):
- Selo **"Vagas limitadas"** adicionado ao card **Acesso Comunidade Nova Era**, em amarelo, com `animate-glow-pulse` para dar destaque (antes esse texto só existia no card Promocional).
- Selo "Opção escolhida por +90% dos participantes" mantido no topo do card.

### 2.10 Ingressos — "Lote 1 com 50% de Desconto - De R$ 497,00 por apenas R$ 297,00"

**Depois** (`src/components/Oferta.tsx`):
- Card **Acesso Promocional** com selo "**Lote 1 · 50% de desconto**" (o "50% de desconto" não existia na página).
- Preço com âncora: ~~R$ 497,00~~ → **R$ 297,00**, "à vista ou parcelado no cartão".
- Selo "Vagas limitadas" também no card Promocional.
- Card Comunidade: ~~R$ 1.497,00~~ → **R$ 797,00** ou 12x, com os 2 bônus exclusivos.
- Bloco de "Ancoragem" (texto do briefing) lembrando que o valor muda por lote.
- Selo "Pagamento seguro via Kiwify" nos dois cards.

---

## 3. Correções e melhorias adicionais (fora do grifo, mas necessárias)

| Item | O que foi feito | Arquivo |
|---|---|---|
| CTAs mortos | Botões "Garantir minha vaga", "Quero minha vaga" etc. não tinham ação. Agora são âncoras para `#ingressos` / `#programacao`. | Hero, Depoimentos, Comparacao, Programacao, Header, FAQ |
| Âncoras do menu | O menu apontava para `#inicio/#programacao/#palestrantes/#depoimentos/#ingressos/#faq`; `#depoimentos` e outros existiam só em `div` externas. Agora cada seção tem o seu `id` e o menu ganhou "A experiência" e "Mentora". | `App.tsx` + todos os componentes |
| Favicon quebrado | `index.html` apontava para `/vite.svg`, arquivo que **não existe** em `public/`. Agora usa a logo do evento e há `theme-color`, `description` e Open Graph. | `index.html` |
| Sem `h1` na página | O título principal era `<h2>`. Agora o Hero tem `h1` com o nome do evento (SEO/acessibilidade). | `Hero.tsx` |
| Egrégora sem autoria | O texto do briefing termina com "Leandra Soares"; a página não exibia a assinatura. Adicionada. | `Egregora.tsx` |
| Faixa de campanha | Adicionada faixa superior dourada com "De 2 a 6 de dezembro · 100% online · Vagas limitadas — Lote 1 com 50% de desconto" (elemento constante nos criativos e no site de referência). | `Header.tsx` |
| FAQ incompleto | A pergunta "Quais os horários da Semana da Nova Consciência?" existe no DOCX mas não estava na página. Foi incluída (resposta redigida a partir das informações de transmissão do próprio briefing — **validar com o cliente**). | `FAQ.tsx` |
| Acessibilidade | `aria-expanded`, `aria-current`, `aria-label` em menus, carrossel e acordeão; `alt` descritivo em todas as imagens de conteúdo; `prefers-reduced-motion` respeitado. | vários |

### Performance (importante)

As três fotos usadas em fundo/cards eram **gigantes**:

| Arquivo | Antes | Depois (cópia otimizada) |
|---|---|---|
| `IMG_8663.jpg` | 11,9 MB (6000×4000) | **0,31 MB** (1920×1280) |
| `IMG_8671.jpg` | 16,7 MB (6000×4000) | **0,19 MB** |
| `IMG_8902.jpg` | 15,6 MB (6000×4000) | **0,18 MB** |
| `CONGRESSOMULTIDIMENSIONAL-00127.jpg` | 0,38 MB | 0,28 MB |
| `CONGRESSOMULTIDIMENSIONAL-00130.jpg` | 0,44 MB | 0,32 MB |

Total: **~45 MB → 1,3 MB** de imagens efetivamente carregadas.

As cópias estão em `public/imagens/opt/` (mesmos nomes) e os **originais foram preservados**. Recomendações:

- Os originais `IMG_8663.jpg`, `IMG_8671.jpg` e `IMG_8902.jpg` (45 MB, rastreados no Git) **não são mais referenciados** pelo código — podem ser removidos do repositório para reduzir clone/deploy (ficam no histórico).
- `public/logos/textura.png` (9,1 MB) não é usado por nenhum componente e vai para o `dist` a cada build — pode sair do `public/`.
- `public/imagens/_MG_6682.CR2` (21 MB, arquivo RAW, não usado) **não deveria estar dentro de `public/`**: tudo em `public/` é copiado para o deploy. Mover para fora de `public/` economiza 21 MB por deploy.

---

## 4. Pendências de conteúdo (precisam do cliente)

1. **URLs de checkout (Kiwify)** — os botões "COMPRAR INGRESSO" dos dois acessos estão marcados no código com `TODO_CHECKOUT`. Nenhuma URL foi enviada, então nada foi inventado.
2. **Palestrantes** — nomes, temas, mini currículos e fotos reais. A seção está funcional, mas com marcadores ("Palestrante convidado 1/2/3") e aviso de "nome oficial em breve".
3. **Apoiadores** — logotipos oficiais (a seção está com espaços reservados).
4. **Redes/contato** — Instagram, WhatsApp e e-mail do evento estão como `#` (marcados com `TODO_LINKS` no `Footer.tsx`).
5. **Conteúdo da Sessão 9** — ainda em criação no briefing.
6. **Correção de texto no FAQ** — o DOCX (e a página) dizem "certificado de participação na **Semana da Expansão da Consciência**", mas o evento é "Semana da **Nova** Consciência". Mantido como está no DOCX; precisa de confirmação.
7. **Resposta do FAQ sobre horários** — redigida por nós; validar.
8. **Texto dos dias 2 a 5** — DOCX vs criativos divergem (ver 2.4).
9. **Depoimentos** — textos transcritos dos prints e autorias reduzidas a nome + inicial. É necessário **consentimento documentado** dos autores (nome/texto/imagem) antes de publicar. Se o cliente quiser mostrar as conversas originais como prova, precisa enviar versões com os **telefones removidos** (os atuais expõem dados pessoais — ver 2.3).

---

## 5. Verificação realizada

| Verificação | Resultado |
|---|---|
| `tsc --noEmit` (strict + `noUnusedLocals`) | **sem erros** |
| `vite build` | **sucesso** — 2301 módulos; `index.html` 1,59 kB · CSS 32,5 kB · JS 407 kB (125 kB gzip) |
| Imagens referenciadas no DOM | **25 de 25 existem no disco** (zero 404) |
| Âncoras internas do menu/CTAs | **24 de 24 apontam para ids existentes** |
| Seções com `id` | 8 (`#inicio`, `#pilares`, `#depoimentos`, `#programacao`, `#mentora`, `#palestrantes`, `#ingressos`, `#faq`) |
| Hierarquia de títulos | exatamente **1 `<h1>`** (10 `h2`, 16 `h3`) |
| Lixo no HTML | nenhum `undefined`, `NaN`, `[object Object]` ou `TODO_*` vazando |
| Checklist dos itens grifados | **todos OK** (hero à esquerda, fundo claro + caixas cósmicas na programação, Leandra + plateia, caixa clara contrastante, partículas lúdicas, vagas limitadas, lote 1 50%) |
| Carrossel (versão final, após a transcrição) | **8 cards** com altura idêntica (`h-[22rem]`), **0 imagens de print** no DOM, 8 autores presentes |
| `dist/` após a mudança | os prints **não são mais gerados no build** (saíram de `public/`) |
| Correção pós-QA | adicionadas classes `scroll-mt-28 md:scroll-mt-32` nas seções (o header fixo cobria o topo da seção ao usar o menu) — `tsc` reexecutado sem erros |

Como a QA foi feita: o build de produção foi congelado em HTML estático (snapshot do DOM renderizado pelo Chrome) e analisado por script — verificação estrutural/conteúdo, não visual.

> **Limitação do ambiente:** não foi possível gerar screenshots (pixel) nesta máquina — o Chrome headless trava ao carregar sub-recursos via `file://` sob o sandbox de arquivos (páginas triviais funcionam; páginas com CSS/imagens não). **Recomendação:** rodar `npm run dev` e revisar visualmente desktop (1440) e mobile (390) antes de publicar — os breakpoints usados são `sm` 640, `lg` 1024 e o carrossel muda de 1 → 2 → 3 slides nesses pontos.

## 6. Arquivos alterados

```
index.html                                  (favicon, meta, fontes)
tailwind.config.js                          (paleta + animações da campanha)
src/index.css                               (utilitários cósmicos, botões, partículas)
src/App.tsx                                 (ordem/ids das seções)
src/components/Header.tsx                   (faixa de campanha, paleta, menu animado)
src/components/Hero.tsx                     (alinhado à esquerda + identidade do criativo)
src/components/Pilares.tsx                  (imagens por conceito + duotone)
src/components/Depoimentos.tsx              (cards transcritos com altura uniforme; prints fora do ar)
src/components/Programacao.tsx              (fundo claro + caixas cósmicas + imagem por dia)
src/components/Mentora.tsx                  (Leandra + plateia do último evento)
src/components/Egregora.tsx                 (paleta + assinatura)
src/components/Palestrantes.tsx             (paleta + aviso de grade em atualização)
src/components/Comparacao.tsx               (contraste do fundo + mobile vertical)
src/components/Frase.tsx                    (identidade lúdica + partículas)
src/components/Oferta.tsx                   (vagas limitadas + lote 1 50% + âncora de preço)
src/components/Apoiadores.tsx               (espaços reservados)
src/components/FAQ.tsx                      (paleta + pergunta de horários + CTA)
src/components/Footer.tsx                   (paleta + contatos)
public/imagens/opt/*.jpg                    (novas cópias otimizadas)
depoimentos-originais/*.jpg                 (prints movidos de public/depoimentos — fora do deploy)
ALTERACOES.md                               (este documento)
```

## 7. Como rodar e publicar

```bash
cd lp-semana-da-nova-consciencia
npm install
npm run dev      # http://localhost:5173
npm run build    # gera dist/
npm run preview
```

Deploy: Vercel, projeto com Root Directory = `lp-semana-da-nova-consciencia` (Framework Vite), conforme o padrão do repositório descrito no `README.md` da raiz.
