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

Logo original do Chaveiro Oliveira. Arquivos em `logo/`:

- `logo-original.jpg`: arquivo original enviado pelo cliente
- `logo-circulo-512.png`: o mesmo logo recortado em círculo, com fundo transparente

No site: `public/logo.png` (cabeçalho, rodapé e Google), `public/favicon.png` e `public/apple-touch-icon.png`.

## Avaliações

Os depoimentos ficam em `reviews` no `src/data/business.ts`, copiados do perfil no Google.
