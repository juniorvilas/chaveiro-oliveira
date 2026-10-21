# Chaveiro Oliveira — site

Landing page em React + Vite + TypeScript.

## Rodar

Requer Node 20+ (`nvm use 20`).

```bash
npm install
npm run dev      # desenvolvimento em http://localhost:5173
npm run build    # gera a pasta dist/ para publicar
```

## Editar conteúdo

Telefone, WhatsApp, endereço, horários, links e a lista de serviços ficam em `src/data/business.ts`.
Os dados para o Google (SEO) ficam no `<script type="application/ld+json">` em `index.html`.

## Galeria

As fotos do carrossel ficam em `public/media/` e são listadas em `gallery` no `src/data/business.ts`
(aceita `type: 'image'` ou `type: 'video'`). As atuais são ilustrativas, da Wikimedia Commons, com créditos no rodapé.

## Logo

Marca "chave no O" (chave atravessando o O de Oliveira, com folha de oliveira). Arquivos em `logo/`:

- `marca.svg` / `marca-preta.svg`: só o símbolo (vetor, para impressão)
- `icone.svg` / `icone-512.png`: foto de perfil (Instagram, WhatsApp) e favicon
- `logo-vertical-*.png` e `logo-horizontal-*.png`: versões para fundo escuro, claro e transparente
- `propostas.png`: as 6 propostas iniciais

Fonte do logo: Montserrat (Google Fonts), 900 em OLIVEIRA e 700 em CHAVEIRO.

## Avaliações

Os depoimentos ficam em `reviews` no `src/data/business.ts`, copiados do perfil no Google.
