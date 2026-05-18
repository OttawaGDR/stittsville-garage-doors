# Stittsville Garage Doors

Local garage door repair and installation site for Stittsville, ON — built with Astro, Tailwind CSS, and deployed to Vercel.

## Commands

```bash
pnpm install
pnpm dev      # http://localhost:4321
pnpm build
pnpm preview
```

## Before launch (Vitaliy)

- Confirm pricing in `src/data/pricing.ts` and `src/data/serviceContent.ts`
- Set `email` and `legal.entity` in `src/data/site.ts`
- Add real job photos under `public/images/jobs/`
- Wire contact form to Vercel Forms or preferred handler
- Connect domain `stittsvillegaragedoors.ca` in Vercel

## Deploy

```bash
pnpm dlx vercel --prod
```
