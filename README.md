# Portfolio - Brikman Paul Morales

Personal portfolio site for **Brikman Paul Morales** — Full Stack Developer.

Based on the open-source portfolio by **David Heckhoff** ([david-hckh.com](https://david-hckh.com)).

Built with **Vue 3**, **TypeScript**, and **Vite**. Motion via **GSAP** and **Lenis**, 3D via **three.js**, audio via **Howler**. GLSL compiled through **vite-plugin-glsl**.

## Scripts

| Command            | Description                          |
| ------------------ | ------------------------------------ |
| `npm run dev`      | Dev server on port **3000**          |
| `npm run build`    | Typecheck + production build to `dist/` |
| `npm run preview`  | Serve the production build locally   |
| `npm run typecheck`| Typecheck only (`vue-tsc -b`)        |

## Content

- **Projects**: `src/content/projects/{es,en}/<slug>.ts` — copy, tags, media, links.
- **Previews / listing**: `src/content/projects/previews/`.
- **Tags**: variants and labels in `src/components/tagVariants.ts`.

## Locale

- Default: **Español** (`es`)
- Secondary: **English** (`en`)
- Toggle via header button.

## Stack

- Vue 3 (`<script setup>`), SCSS (`src/assets/styles/`)
- i18n: `src/i18n/` (custom loader)
- 3D / GLSL: `src/three/`

## Credits

Original concept and design by **David Heckhoff**.
Original portfolio: [https://david-hckh.com](https://david-hckh.com)

Attribution must be preserved in derivative works.
