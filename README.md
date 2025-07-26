# cf-remix [![CI/CD](https://github.com/coder7475/cf-remix/actions/workflows/ci_cd.yml/badge.svg)](https://github.com/coder7475/cf-remix/actions/workflows/ci_cd.yml)

Cloudflare Pages + Remix automated deployment with GitHub Actions.

## Development

Run the dev server:

```sh
pnpm run dev
```

To run Wrangler:

```sh
pnpm run build
pnpm run start
```

## Typegen

Generate types for your Cloudflare bindings in `wrangler.toml`:

```sh
pnpm run typegen
```

You will need to rerun typegen whenever you make changes to `wrangler.toml`.

## Deployment

First, build your app for production:

```sh
pnpm run build
```

Then, deploy your app to Cloudflare Pages:

```sh
pnpm run deploy
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.
