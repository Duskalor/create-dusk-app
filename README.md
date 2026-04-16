# create-dusk-app

Scaffold professional landing pages and portfolios with Astro + Tailwind CSS in seconds.

[![npm version](https://img.shields.io/npm/v/create-dusk-app.svg)](https://www.npmjs.com/package/create-dusk-app)
[![npm downloads](https://img.shields.io/npm/dm/create-dusk-app.svg)](https://www.npmjs.com/package/create-dusk-app)

> [!NOTE]
> 📽️ Coming soon — CLI demo GIF

## Quick Start

```bash
npx create-dusk-app@latest
```

The CLI will ask for a project name and a template. That's it.

## Templates

| Template | Description | Stack | Sanity needed |
|----------|-------------|-------|---------------|
| 🍽️ Restaurant | Menu, gallery, reservations & WhatsApp | Astro + Tailwind | Yes |
| 🏔️ Tourism | Tours, gallery, reservations & WhatsApp | Astro + Tailwind | Yes |
| ⚖️ Law Firm | Legal practice areas & contact | Astro + Tailwind | No |
| 🧑‍💻 Portfolio | Skills, projects & contact | Astro + Tailwind | No |

## Post-Install

### Law & Portfolio (no Sanity)

```bash
cd my-project
pnpm install
pnpm dev
```

### Restaurant & Tourism (Sanity required)

```bash
cd my-project
cp .env.example .env
# Fill in SANITY_PROJECT_ID and SANITY_DATASET in .env
pnpm install
pnpm dev
```

### Portfolio Customization

Edit `src/data/portfolio.ts` — it is the only file you need to change to make the portfolio your own.

## Requirements

- Node.js >= 18
- pnpm (recommended)

## License

MIT
