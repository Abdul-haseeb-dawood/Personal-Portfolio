# Abdul Haseeb Dawood — Developer Portfolio

A personal portfolio website for a full-stack developer: animated WebGL wave background, dark/light theme switching, scroll-reveal sections, and content kept in version-controlled JSON where it makes sense.

![Next.js](https://img.shields.io/badge/Next.js-16.4-000000?logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)

## Overview

The site is a single-page portfolio built with the Next.js App Router. Every section is a self-contained component, so adding, removing, or reordering content is a one-line change in `app/page.tsx`.

Sections: **Home (hero) → About → Skills → Services → Experience → Projects → Education → Contact**, plus a fixed navbar and footer.

### Highlights

- **Live WebGL background** — a ray-marched wave scene rendered with Three.js and `@react-three/fiber`, using a custom shader. It reads the active theme and switches between a luminous dark palette and a soft cyan-on-paper light palette, and only mounts on the client to keep prerendering clean.
- **Dark by default, light on demand** — `next-themes` with a class-based strategy and a persisted `portfolio-theme` key. The hero artwork also swaps between `/image.png` (dark) and `/light-image.png` (light).
- **Motion with intent** — staggered hero letter reveal, scroll-triggered entrances, 3D tilt cards, animated glows and counters via Framer Motion.
- **Content in config files** — the skills list lives in `config/portfolio.json` and each skill's label, icon and color in `config/skills-database.json`.
- **Small dependency surface** — only the UI primitives actually used are kept (`Button`, `Badge`, `ShinyButton`), along with a single `cn()` utility.

## Tech Stack

| Layer      | Tools                                                          |
| ---------- | -------------------------------------------------------------- |
| Framework  | Next.js 16 (App Router, Turbopack)                             |
| Language   | TypeScript                                                     |
| UI         | React 19, Tailwind CSS v4                                       |
| Animation  | Framer Motion                                                  |
| Background | Three.js, `@react-three/fiber`                                 |
| Theming    | `next-themes`                                                  |
| Icons      | Lucide React, React Icons                                      |
| Primitives | Radix Slot, class-variance-authority, clsx, tailwind-merge     |

## Getting Started

**Requirements:** Node.js 20.9 or newer (required by Next.js 16) and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The page hot-reloads as you edit.

### Available scripts

| Command         | What it does                             |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Development server with Turbopack        |
| `npm run build` | Production build                         |
| `npm start`     | Serve the production build               |
| `npm run lint`  | Run ESLint                               |

## Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout: fonts, metadata, ThemeProvider
│   ├── page.tsx            # Composes every section in order
│   └── globals.css         # Tailwind import, theme tokens, custom utilities
├── components/
│   ├── animated-backgound.tsx   # WebGL wave background (note the file name)
│   ├── navbar.tsx               # Fixed navbar + mobile drawer
│   ├── theme-provider.tsx       # next-themes wrapper
│   ├── theme-toggle.tsx         # Dark/light switch
│   ├── sections/                # One component per page section
│   └── ui/                      # Shared Button, Badge, ShinyButton
├── config/
│   ├── portfolio.json           # Which skills to display and in what order
│   └── skills-database.json     # Skill names, icons and chip colors
├── lib/
│   └── utils.ts                 # cn() class-name helper
└── public/                      # Hero artwork, skill icons, resume.pdf
```

## Customizing

**Page content** — the copy and data for each section live at the top of its component in `components/sections/`:

| Section    | File                             |
| ---------- | -------------------------------- |
| Hero       | `components/sections/hero.tsx`   |
| About      | `components/sections/about.tsx`  |
| Skills     | `components/sections/skills.tsx` |
| Services   | `components/sections/services.tsx` |
| Experience | `components/sections/exprience.tsx` |
| Projects   | `components/sections/project.tsx` |
| Education  | `components/sections/education.tsx` |
| Contact    | `components/sections/contect.tsx` |
| Footer     | `components/sections/footer.tsx` |

**Skills** — add or remove an id in `config/portfolio.json`, then define its display name, icon path and color in `config/skills-database.json`. Use `"color": "default"` to let the chip follow the active theme.

**Theme** — colors, border radii and custom effects (`hero-name`, `skill-glow`, `glow-border`, `text-gradient`) are defined in `app/globals.css`. The shader palettes live in the `fragmentShader` template string inside `components/animated-backgound.tsx`.

**Site metadata** — title, description, keywords and Open Graph/Twitter cards are set in `app/layout.tsx`.

**Assets** — replace files in `public/`: `image.png` and `light-image.png` for the hero visual, the skill icons referenced by `skills-database.json`, and `resume.pdf` for the download button.

## Deployment

The project is a standard Next.js app, so it deploys to [Vercel](https://vercel.com/new) with no extra configuration — import the repository, keep the detected build settings, and deploy. Any Node.js host works too:

```bash
npm run build
npm start
```

## Contact

- **Email:** [haseebdawood14@gmail.com](mailto:haseebdawood14@gmail.com)
- **LinkedIn:** [linkedin.com/in/a-haseeb](https://www.linkedin.com/in/a-haseeb-%F0%9F%8E%93-b07825301/)
- **GitHub:** [Abdul-haseeb-dawood](https://github.com/Abdul-haseeb-dawood)
