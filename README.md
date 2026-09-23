# EVCOMPASS.IN

Neon, animated landing page for EVCOMPASS — an EV charging discovery and route-planning platform for India.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- CSS/SVG-style UI animations
- Lucide React icons
- Static export enabled for Cloudflare Pages

## Local setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production test

```bash
npm run build
```

Because `next.config.mjs` uses `output: "export"`, the production website is generated in `out/`.

## GitHub

```bash
git init
git add .
git commit -m "Initial EVCOMPASS website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/EVCOMPASS-IN.git
git push -u origin main
```

## Cloudflare Pages

This project is configured as a static Next.js export.

Cloudflare Pages settings:

- Framework preset: Next.js (Static HTML Export)
- Production branch: main
- Build command: `npm run build`
- Build output directory: `out`

Then connect your custom domain `EVCOMPASS.IN`.

## Cloudflare Workers option

If EVCOMPASS later becomes a full-stack Next.js application with server-side features, Cloudflare currently recommends its Workers/vinext path for new Next.js deployments. The current static export can remain on Pages until you need those features.

## Next build stages

1. Charger database / Supabase
2. User authentication
3. EV vehicle profiles
4. Route planning
5. Charger APIs / network integrations
6. Live charger availability
7. Battery-aware stop recommendations
8. Mobile apps
