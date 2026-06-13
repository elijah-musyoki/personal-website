# Agent Instructions

## Package Manager
- Use **pnpm** for installs and scripts.
- Install dependencies with `pnpm i`.

## Commands
| Task | Command |
|---|---|
| Start dev server | `pnpm dev` |
| Build the site | `pnpm build` |
| Run tests | `pnpm test` |
| Typecheck | `pnpm typecheck` |
| Biome checks | `pnpm check` |
| Fix Biome issues | `pnpm check:fix` |

## Project Layout
- Main site code lives in `apps/www`.
- Edit pages and components in `apps/www/src`.
- Static assets live in `apps/www/public`.
- `apps/www/dist` is generated output; do not edit it by hand.

## Deployment
- Cloudflare Git integration deploys production from `main`.
- Push to `main` to trigger a production rebuild.
- Avoid manual Wrangler deploys unless explicitly asked.

## Conventions
- Make small, targeted changes.
- Prefer updating existing files over creating new ones.
- Keep `README.md` as the user-facing setup guide.
- Update `README.md` when setup or deploy steps change.
