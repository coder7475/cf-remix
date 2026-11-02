# cf-remix

> Personal portfolio and developer showcase for Robiul Hossain, built with Remix v2, Tailwind CSS, and Cloudflare Pages.

[![CI/CD Pipeline](https://github.com/coder7475/cf-remix/actions/workflows/ci_cd.yml/badge.svg)](https://github.com/coder7475/cf-remix/actions/workflows/ci_cd.yml)
[![Node Version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen.svg)](https://nodejs.org/)
[![pnpm Version](https://img.shields.io/badge/pnpm-10.x-orange.svg)](https://pnpm.io/)
[![Cloudflare Pages](https://img.shields.io/badge/deployed%20on-Cloudflare%20Pages-F38020.svg)](https://pages.cloudflare.com/)

See [AUDIT.md](./AUDIT.md) for a comprehensive architecture and code quality audit.

---

## Overview

`cf-remix` is an edge-rendered developer portfolio engineered for speed, responsiveness, and accessibility. It runs on Cloudflare's global edge network using Cloudflare Pages with the Remix Vite runtime.

### Key Highlights

- **Edge-First SSR**: Rendered on Cloudflare Pages Workers with near-zero latency worldwide.
- **Hybrid Page Architecture**: Offers both a seamless single-page scroll layout (`/`) and standalone deep-link routes (`/about`, `/projects`, `/skills`, `/experiences`, `/blog`, `/contact`, `/schedule`).
- **Dynamic Theming**: Dark theme by default, toggleable to light theme via client-side state persisted in `localStorage`.
- **Live Article Integration**: Fetches published technical articles directly from the Dev.to REST API.
- **Accessible UI & Feedback**: Built on Radix UI toast primitives, Lucide icons, and Tailwind CSS utility tokens.
- **Strict TypeScript**: 100% type-checked codebase across server loaders, client components, and Cloudflare runtime bindings.

---

## Tech Stack

| Layer | Technologies |
|---|---|
| **Framework** | [Remix v2](https://remix.run/) (Vite compiler) |
| **Runtime & Hosting** | [Cloudflare Pages](https://pages.cloudflare.com/) via `@remix-run/cloudflare-pages` |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) (Strict Mode) |
| **Styling** | [Tailwind CSS v3](https://tailwindcss.com/), `tailwindcss-animate`, `tailwind-merge`, `clsx` |
| **UI Primitives & Icons** | [Radix UI](https://www.radix-ui.com/) (`@radix-ui/react-toast`), [Lucide React](https://lucide.dev/) |
| **Package Manager** | [pnpm](https://pnpm.io/) (v10+) |
| **CI / CD** | GitHub Actions (`.github/workflows/ci_cd.yml`) |

---

## Prerequisites

Before setting up the project locally, ensure you have:

- **Node.js**: `v20.0.0` or higher (v22 recommended)
- **pnpm**: `v10.0.0` or higher (installed via Corepack: `corepack enable && corepack prepare pnpm@latest --activate`)
- **Cloudflare Wrangler CLI**: bundled via devDependencies (or `npm i -g wrangler`)
- **Git**

---

## Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/coder7475/cf-remix.git
cd cf-remix
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Configure environment variables

Copy the example environment file and customize your local settings:

```bash
cp .dev.vars.example .dev.vars
```

### 4. Generate Cloudflare runtime types

Synchronize TypeScript bindings with your Cloudflare environment:

```bash
pnpm run typegen
```

### 5. Launch local development server

```bash
pnpm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

---

## Development Scripts

The project includes preconfigured scripts in [`package.json`](file:///home/fahad/Projects/cf-remix/package.json):

| Command | Action |
|---|---|
| `pnpm run dev` | Starts the Remix Vite development server with hot module replacement (HMR) at `http://localhost:5173`. |
| `pnpm run build` | Compiles the client bundles and server build into `./build`. |
| `pnpm run start` | Serves the production build using Wrangler Pages local emulator (`wrangler pages dev ./build/client`). |
| `pnpm run preview` | Runs a fresh production build, then starts the Wrangler local Pages preview. |
| `pnpm run typecheck` | Runs `tsc` to validate TypeScript types without emitting output. |
| `pnpm run lint` | Runs ESLint across the codebase using cached results. |
| `pnpm run typegen` | Generates Cloudflare runtime environment typings from `wrangler.jsonc`. |
| `pnpm run deploy` | Runs production build and deploys to Cloudflare Pages via Wrangler CLI. |

---

## Project Structure

```
cf-remix/
├── .github/
│   └── workflows/
│       └── ci_cd.yml            # Automated CI/CD pipeline for GitHub Actions
├── app/
│   ├── components/              # Section and UI components
│   │   ├── ui/                  # Primitives (Radix Toast notifications)
│   │   ├── AboutMe.tsx          # About section presentation
│   │   ├── Banner.tsx           # Hero banner with profile details and CTAs
│   │   ├── Blog.tsx             # Blog listing with Dev.to API integration
│   │   ├── CalendlyInline.tsx   # Calendly meeting scheduler embed
│   │   ├── Experience.tsx       # Career timeline component
│   │   ├── Footer.tsx           # Global footer with social links
│   │   ├── GetInTouch.tsx       # Contact form component
│   │   ├── Navbar.tsx           # Sticky navigation with mobile menu
│   │   ├── Projects.tsx         # Portfolio projects showcase
│   │   ├── RecentArticles.tsx   # Curated recent article cards
│   │   ├── ScrollToTop.tsx      # Floating back-to-top button
│   │   ├── Skills.tsx           # Interactive categorized skill tags
│   │   ├── ThemeToggle.tsx      # Dark / light mode switcher
│   │   └── WhatIDo.tsx          # Service offerings and specializations
│   ├── constants/               # Static project and skill metadata
│   ├── hooks/                   # Custom hooks (`use-theme`, `use-toast`, `use-in-view`)
│   ├── libs/                    # Core helpers (`utils.ts` for Tailwind merge)
│   ├── routes/                  # Remix file-based routes
│   │   ├── _index.tsx           # Home route (assembles full portfolio page)
│   │   ├── about.tsx            # Standalone About page
│   │   ├── blog.tsx             # Standalone Blog page
│   │   ├── contact.tsx          # Standalone Contact page
│   │   ├── experiences.tsx      # Standalone Experience page
│   │   ├── projects.tsx         # Standalone Projects page
│   │   ├── schedule.tsx         # Meeting booking page
│   │   ├── skills.tsx           # Standalone Skills page
│   │   └── $.tsx                # 404 catch-all route
│   ├── types/                   # Shared TypeScript definitions
│   ├── entry.client.tsx         # Client hydration entry point
│   ├── entry.server.tsx         # Edge SSR stream entry point
│   ├── root.tsx                 # Root HTML shell with providers and metadata
│   └── tailwind.css             # Tailwind layers, CSS variables, custom utilities
├── functions/
│   └── [[path]].ts              # Cloudflare Pages Functions Remix handler
├── public/                      # Static assets (favicons, images, resume PDF)
├── AGENTS.md                    # Guidelines and rules for autonomous AI agents
├── AUDIT.md                     # Codebase health and architecture audit
├── package.json                 # Dependencies and npm scripts
├── tailwind.config.ts           # Tailwind CSS design system tokens
├── tsconfig.json                # Strict TypeScript configuration
├── vite.config.ts               # Vite & Remix Cloudflare plugin configuration
└── wrangler.jsonc               # Cloudflare Pages and Workers configuration
```

---

## Architecture & Conventions

### Dual Routing Pattern
- **Homepage (`/`)**: Combines all section components (`Banner`, `WhatIDo`, `AboutMe`, `Experience`, `Projects`, `Skills`, `RecentArticles`, `GetInTouch`) into an interconnected single-page view.
- **Dedicated Subpages**: Individual routes under `app/routes/` allow direct linking to specific sections with dedicated title metadata and layout wrappers.
- **Catch-All 404 (`$.tsx`)**: Gracefully handles undefined paths and provides navigational recovery options.

### Theming System
- Themes are driven by CSS variables in `app/tailwind.css` using HSL token definitions.
- Dark theme is default. Light theme is toggled by applying the `.light` class to the root `<html>` element.
- Theme preferences are synchronized across reloads via `localStorage("theme")` using `app/hooks/use-theme.tsx`.

### Code Style Conventions
- **No Code Comments**: The codebase style strictly omits inline code comments.
- **Path Aliases**: Always use the `~/` path alias mapping to `./app/` (e.g., `~/components/Navbar`).
- **Strict Typing**: All components, props, and server loaders must maintain complete TypeScript coverage.

---

## Configuration & Environment Variables

The project uses a unified environment architecture supporting local development, preview deployments, and production on Cloudflare Pages.

### Environment Variable Reference

| Variable | Required | Default (Dev) | Production | Description |
|---|---|---|---|---|
| `ENVIRONMENT` | Yes | `development` | `production` | Deployment runtime identifier (`development`, `preview`, or `production`). |
| `SITE_URL` | Yes | `http://localhost:5173` | `https://robiulhossain.com` | Base URL used for canonical links, Open Graph tags, and schema.org JSON-LD. |
| `CONTACT_EMAIL` | Yes | `contact@robiulhossain.com` | `contact@robiulhossain.com` | Destination inbox for contact form submissions. |
| `RESEND_API_KEY` | Optional | `re_...` | Set via Cloudflare Secrets | API key for transactional email delivery via the Resend REST API. |

---

### 1. Local Development (`.dev.vars`)

For local development with Remix Vite and Wrangler, environment variables are loaded from `.dev.vars` (which is excluded from Git via `.gitignore`).

1. Copy the template file:
   ```bash
   cp .dev.vars.example .dev.vars
   ```

2. Inspect and adjust `.dev.vars` as needed:
   ```ini
   ENVIRONMENT=development
   SITE_URL=http://localhost:5173
   CONTACT_EMAIL=contact@robiulhossain.com
   RESEND_API_KEY=re_your_api_key_here
   ```

3. Regenerate TypeScript bindings:
   ```bash
   pnpm run typegen
   ```

Wrangler inspects `.dev.vars` along with `wrangler.jsonc` and automatically updates `worker-configuration.d.ts` with typed definitions for `interface Env`.

---

### 2. Cloudflare Pages Configuration (`wrangler.jsonc`)

Non-sensitive production and preview defaults are declared in [`wrangler.jsonc`](file:///home/fahad/Projects/cf-remix/wrangler.jsonc):

```jsonc
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "cf-remix",
  "compatibility_date": "2025-02-14",
  "pages_build_output_dir": "./build/client",
  "observability": {
    "enabled": true
  },
  "vars": {
    "ENVIRONMENT": "production",
    "SITE_URL": "https://robiulhossain.com",
    "CONTACT_EMAIL": "contact@robiulhossain.com"
  },
  "env": {
    "preview": {
      "vars": {
        "ENVIRONMENT": "preview",
        "SITE_URL": "https://preview.robiulhossain.com",
        "CONTACT_EMAIL": "contact@robiulhossain.com"
      }
    }
  }
}
```

Whenever you modify `vars` or bindings in `wrangler.jsonc`, run `pnpm run typegen` to update the type definitions.

---

### 3. Production Secrets (Cloudflare Dashboard & CLI)

Never commit sensitive credentials (such as `RESEND_API_KEY`) to version control. Set secrets for Cloudflare Pages using one of the following methods:

#### Option A: Cloudflare Dashboard
1. Navigate to **Cloudflare Dashboard > Workers & Pages > cf-remix > Settings > Environment variables**.
2. Under **Production**, click **Add variable**.
3. Select **Encrypt** (Secret), enter the variable name (e.g., `RESEND_API_KEY`), and paste the value.
4. Save and trigger a new deployment.

#### Option B: Wrangler CLI
```bash
npx wrangler pages secret put RESEND_API_KEY --project-name=cf-remix
```

---

### 4. Application Code Usage

Server loaders and actions access environment configuration through the typed helper `getAppEnv(context)` in `app/libs/env.server.ts`:

```typescript
import type { LoaderFunctionArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { getAppEnv, getPublicEnv } from "~/libs/env.server";

export async function loader({ context }: LoaderFunctionArgs) {
  const env = getAppEnv(context);

  return json({
    ENV: getPublicEnv(env),
  });
}
```

Safe public values (`ENVIRONMENT`, `SITE_URL`, `CONTACT_EMAIL`) are provided to the root loader and exposed to client components via `window.ENV`. Sensitive keys (such as `RESEND_API_KEY`) remain strictly server-side.

---

## CI/CD & Deployment

### Automated Deployment (GitHub Actions)

Every push to `main` triggers `.github/workflows/ci_cd.yml`:

1. Installs dependencies with `pnpm install`.
2. Validates types with `pnpm run typecheck`.
3. Lints codebase with `pnpm run lint`.
4. Builds the application with `pnpm run build`.
5. Deploys to Cloudflare Pages via `cloudflare/pages-action@v1`.

#### Required GitHub Secrets:
- `CLOUDFLARE_API_TOKEN`: Cloudflare API token with Pages edit permissions.
- `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID.

### Manual Deployment via Wrangler

You can also deploy directly from your local terminal:

```bash
# 1. Authenticate with Cloudflare
npx wrangler login

# 2. Build and publish
pnpm run deploy
```

---

## Troubleshooting

### Port Conflicts or Stale Dev Server
If port 5173 is occupied, specify an alternative port:
```bash
pnpm run dev -- --port 3000
```

### Type Errors on Cloudflare Bindings
If `Env` bindings appear out of date or missing:
```bash
pnpm run typegen
pnpm run typecheck
```

### Clean Reinstall
If dependency resolution issues occur:
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

---

## License

Private repository. Copyright © Robiul Hossain. All rights reserved.
