# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at http://localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test framework is configured.

## Architecture

**Kulana IT Solutions** is a single-page Next.js 16 marketing website (App Router, TypeScript, Tailwind CSS 4, React 19).

### Page composition

`src/app/page.tsx` composes all sections in order:

```
Navbar → Hero → Services → About → Partners → Academy → Contact → Footer
```

Each section is a self-contained component under `src/components/`. All components are `"use client"` and use `useState`/`useEffect` for interactivity. There is no separate API layer — the contact form manages state locally with no backend integration.

### Styling system

- **Tailwind CSS 4** with PostCSS plugin (`@tailwindcss/postcss`)
- Custom CSS variables and utility classes are defined in `src/app/globals.css`:
  - Brand colors: `--primary` (`#0057a8`), `--primary-dark` (`#003d7a`), `--accent` (`#00b4d8`)
  - Utility classes: `.gradient-primary`, `.gradient-hero`, `.text-gradient`, `.card-hover`, `.nav-link`
- Font: Inter via `next/font/google`
- Import alias `@/*` resolves to `src/*`

### Key config

- **React Compiler** is enabled in `next.config.ts` (`reactCompiler: true`) — avoid manual memoization with `useMemo`/`useCallback` unless profiling shows it's needed
- **ESLint** uses flat config (v9) in `eslint.config.mjs`, extending `next/core-web-vitals` and `next/typescript`
- **TypeScript** strict mode is on; path alias `@/*` → `./src/*`
