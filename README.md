# Joseph Raju Myla — Portfolio

A modern, production-ready personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** (Button, Card, Badge, Separator, Input, Textarea)
- **Framer Motion** (subtle animations)
- **lucide-react** (icons)

## Features

- Single-page layout with sticky navbar and smooth scroll
- Dark mode toggle (system default, persisted preference)
- Responsive, mobile-first design
- SEO: metadata, OpenGraph, sitemap, robots.txt
- Print-friendly `/resume` page
- Download CV button (placeholder PDF until you add your own)
- Accessible: semantic HTML, ARIA labels, keyboard navigation
- Respects `prefers-reduced-motion`

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Install

```bash
cd portfolio
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
```

### Start (production)

```bash
npm start
```

### Deploy to Vercel

1. Push the project to GitHub.
2. Import the repo in [Vercel](https://vercel.com).
3. Vercel will auto-detect Next.js. Click Deploy.
4. Add environment variable `NEXT_PUBLIC_SITE_URL` with your domain (e.g. `https://josephmyla.com`) for sitemap/robots.

## Replacing the CV PDF

The "Download CV" button serves a placeholder PDF. To use your real CV:

1. Export your CV as a PDF.
2. Name it `Joseph_Raju_Myla_CV.pdf`.
3. Put it in the `public` folder: `portfolio/public/Joseph_Raju_Myla_CV.pdf`.
4. Remove the API route and rewrite:
   - Delete `src/app/api/cv/route.ts`
   - Remove the `rewrites` block from `next.config.mjs`

Static files in `public/` are served at the root, so `/Joseph_Raju_Myla_CV.pdf` will serve your file.

## Project Structure

```
portfolio/
├── public/
│   └── CV_README.md          # Instructions for replacing CV
├── src/
│   ├── app/
│   │   ├── api/cv/           # Placeholder PDF API (remove when adding real CV)
│   │   ├── resume/           # Print-friendly resume page
│   │   ├── layout.tsx
│   │   ├── page.tsx          # Main single-page layout
│   │   ├── globals.css
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── ui/               # shadcn-style components
│   │   ├── hero.tsx
│   │   ├── navbar.tsx
│   │   ├── section.tsx
│   │   ├── timeline.tsx
│   │   ├── skill-grid.tsx
│   │   ├── contact-card.tsx
│   │   └── ...
│   ├── data/
│   │   └── profile.ts        # All CV content (edit here)
│   └── lib/
│       └── utils.ts
└── ...
```

## Editing Content

All content lives in `src/data/profile.ts`. Update that file to change your portfolio without touching components.

## License

MIT
