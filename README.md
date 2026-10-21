# Chaveiro Oliveira — site

Landing page em React + Vite + TypeScript, estilizada com Tailwind CSS v4.

## Rodar

Requer Node 20+ (`nvm use 20`).

```bash
npm install
npm run dev      # desenvolvimento em http://localhost:5173
npm run build    # gera a pasta dist/ para publicar
```

## Estilos

- Cores, fontes, sombras e breakpoints da marca ficam no `@theme` de `src/index.css` (viram classes como `bg-surface`, `text-accent`, `split:`).
- Botão, card e `cn()` ficam em `src/lib/styles.ts`; `Section`, `Container`, `SectionTitle` e `Lead` em `src/components/ui.tsx`.
- Animações e efeitos de rolagem (classes `fx`, `fx-left`, `reveal`…) ficam em CSS no `src/index.css`, ligados ao `src/lib/scrollFx.ts`.

## Editar conteúdo

Telefone, WhatsApp, endereço, horários, links e a lista de serviços ficam em `src/data/business.ts`.
Os dados para o Google (SEO) ficam no `<script type="application/ld+json">` em `index.html`.

## Galeria

As fotos do carrossel ficam em `public/media/` e são listadas em `gallery` no `src/data/business.ts`
(aceita `type: 'image'` ou `type: 'video'`). São fotos reais do trabalho do Chaveiro Oliveira.

## Logo

Marca "chave no O" (chave atravessando o O de Oliveira, com folha de oliveira). Arquivos em `logo/`:

- `marca.svg` / `marca-preta.svg`: só o símbolo (vetor, para impressão)
- `icone.svg` / `icone-512.png`: foto de perfil (Instagram, WhatsApp) e favicon
- `logo-vertical-*.png` e `logo-horizontal-*.png`: versões para fundo escuro, claro e transparente
- `propostas.png`: as 6 propostas iniciais

Fonte do logo: Montserrat (Google Fonts), 900 em OLIVEIRA e 700 em CHAVEIRO.

## Avaliações

Os depoimentos ficam em `reviews` no `src/data/business.ts`, copiados do perfil no Google.
