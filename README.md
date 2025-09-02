# Puck Editor + Chakra + Vite

This project contains a Vite app for developing a set of Puck blocks using Chakra UI – and can also be built as a reusable package.

## Scripts

- `pnpm dev` – start Vite dev server
- `pnpm build` / `pnpm build:app` – build the app
- `pnpm preview` – preview the app build
- `pnpm build:lib` – build the blocks as a library (`dist/` with multi-entries: `index`, `editor`, `renderer`, `config`)

## Library usage

The library entry is `src/lib/index.ts`. It exports:

- `Provider` – Chakra provider wrapper.
- `AppProvider` – Provider hợp nhất (Chakra + React Query + Recoil) và DI http.
- `PuckConfig` – block configuration for `@measured/puck` (also available via `puck-editor-chakra/config`).
- `PuckEditor` – via `puck-editor-chakra/editor`.
- `PuckRenderer` – via `puck-editor-chakra/renderer`.

Peer dependencies expected in the host app: `react`, `react-dom`, `@chakra-ui/react`, `@emotion/react`, `@measured/puck`, `@tanstack/react-query`, `recoil`, `tinymce`.

TinyMCE is loaded dynamically in the rich text component to keep the package SSR-safe. If your bundler doesn’t automatically include TinyMCE skin styles, import `tinymce/skins/ui/oxide/skin.css` in your application.

For full integration instructions (Editor and Renderer usage in another app), see `docs/INTEGRATION.md`.
