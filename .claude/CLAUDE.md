# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site for Dhaval Dudheliya, built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4. Deployed on Vercel. Package manager is **pnpm** (see `pnpm-lock.yaml`).

## Commands

```bash
pnpm dev      # start dev server (localhost:3000)
pnpm build    # production build
pnpm start    # run production build
pnpm lint     # eslint
pnpm format   # prettier --write .
```

There is no test suite in this repo — do not assume `pnpm test` exists.

A Husky pre-commit hook runs `lint-staged`, which runs `eslint --fix` + `prettier --write` on staged `.js/.jsx/.ts/.tsx` files and `prettier --write` on staged `.json/.md/.mdx/.css/.html` files (see `package.json` `lint-staged` field).

## Architecture

### Content model: config objects vs. MDX files

Site content comes from two different sources depending on section — check which pattern a section uses before editing:

- **Structured/list data** (projects metadata, experience, skills, hero copy, contact info, nav, SEO) lives in typed TS/TSX objects under `src/config/` (e.g. `Projects.tsx`, `Experiences.tsx`, `Skills.tsx`, `seo.config.ts`, `Contact.tsx`, `Navbar.tsx`, `Hero.tsx`, `Resume.ts`). These are imported directly by pages/components — no filesystem read involved.
- **Long-form prose** (blog posts, book notes, project write-ups) lives as MDX files with frontmatter in `src/content/{blogs,books,projects}/`. Each has a matching loader in `src/lib/` (`blog.ts`, `books.ts`, `projects.ts`) that reads the directory with `fs`/`gray-matter` at build/request time, exposing `getAllX()`, `getXBySlug()`, `getXSlugs()`. `generateStaticParams` in the corresponding `src/app/**/[slug]/page.tsx` calls the slug getter.

Projects are a hybrid: metadata (title, links, tech, thumbnail) comes from `src/config/Projects.tsx`, while the detailed write-up body is optional MDX from `src/lib/projects.ts` (`getProjectContent`), rendered only if present.

When adding a new blog post, book, or project write-up, add an `.mdx` file to the matching `src/content/` folder with the frontmatter fields the loader expects (see the `BlogPost`/`Book` interfaces in `src/lib/blog.ts` / `src/lib/books.ts`); posts/books default to `published: true` unless frontmatter sets `published: false`.

### MDX rendering pipeline

MDX is rendered two different ways depending on context:

- Blog posts / project content render through `next-mdx-remote` RSC (`src/components/blog/MDXContent.tsx`, `src/components/projects/ProjectMDXContent.tsx`) using shared component overrides from `src/components/blog/MDXComponents.tsx` (also wired into `mdx-components.tsx` at the repo root, required by `@next/mdx`).
- `rehype-pretty-code` + `shiki` handle code block syntax highlighting; custom code block chrome is in `src/components/blog/CodeBlock.tsx`.

### API routes (server-side integrations)

- `src/app/api/contact/route.ts` — contact form submissions are forwarded to a Telegram bot via `TELEGRAM_BOT_TOKEN`/`TELEGRAM_CHAT_ID` env vars (see `telegramConfig` in `src/config/Contact.tsx`). No database involved.
- `src/app/api/reactions/route.ts` — blog post emoji reactions are stored in Upstash Redis (`@upstash/redis`, `Redis.fromEnv()` — needs `KV_REST_API_URL`/`KV_REST_API_TOKEN` or Upstash-standard env vars). Per-user reaction state is tracked by a SHA-256 fingerprint of IP + user-agent (no auth/cookies), stored as a Redis set per slug+fingerprint; counts are a Redis hash per slug. `src/hooks` doesn't hold this — the client hook is `src/lib/reactions.ts` (`useReactions`), with shared types/constants in `src/lib/reactions-data.ts`.

### UI components

- `src/components/ui/` is shadcn/ui ("new-york" style, neutral base color) built on Base UI (`@base-ui/react`) — see `components.json` for aliases (`@/components`, `@/lib/utils`, `@/hooks`, etc.). Prefer using/extending existing `ui/` primitives over adding new dependencies.
- Feature components are organized by domain under `src/components/` (`blog/`, `projects/`, `books/`, `experience/`, `home/`, `contact/`, `skills/`, `core/`). `src/components/core/` holds cross-cutting layout pieces (Navbar, Footer, ThemeProviders, CommandMenu).
- `src/components/technologies/` and `src/components/svgs/` are hand-written icon components (not from an icon library) referenced by slug/name from config files like `Technologies.tsx`/`SkillIcons.tsx`.
- Theming uses `next-themes` (class-based, system-aware); respect `suppressHydrationWarning` usage in `src/app/layout.tsx` when touching theme-dependent markup.

### Import ordering

ESLint enforces import sorting via `eslint-plugin-simple-import-sort` (`simple-import-sort/imports` and `/exports` are errors, not warnings) — run `pnpm lint` after reordering imports manually, or let `eslint --fix` / the pre-commit hook handle it.

### Path aliases

`@/*` maps to `src/*` (see `tsconfig.json`). Use it instead of relative `../../` imports.
