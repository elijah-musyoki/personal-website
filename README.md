# Personal Website

A simple portfolio starter built with Astro and deployed on Cloudflare Workers.

## Getting Started

If you're using this repo yourself, here's the quickest way to get going.

### Prerequisites
- Node.js
- pnpm
- A Cloudflare account if you want to deploy your own copy

### Install dependencies

```bash
pnpm i
```

### Run locally

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
pnpm build
```

### Checks

```bash
pnpm test
pnpm typecheck
pnpm check
```

## Deploy

Push to `main` to trigger an automatic Cloudflare build and deploy.

## Reusing This Site

If you want to use this repo as your own site:

- create your own Cloudflare Web Analytics site first
- replace the token in `apps/www/src/layouts/Layout.astro`
- add the analytics snippet manually in `apps/www/src/layouts/Layout.astro` just before `</body>`
- do not reuse my token

Cloudflare Web Analytics getting started guide: https://developers.cloudflare.com/web-analytics/get-started/

## Project Notes

- The website lives in `apps/www`.
- The shared layout adds the analytics snippet for every page.
- `apps/www/dist` is generated output.
- The social preview image is a raw SVG in `apps/www/public/og.svg`; replace `EM` with your own initials if you reuse the site.
