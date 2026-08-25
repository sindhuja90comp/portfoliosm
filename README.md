# portfoliosm

A modern, recruiter-friendly portfolio website built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

## Project Plan

### Phase 1 — Foundation
- Create the project structure and install dependencies.
- Configure TypeScript, Tailwind CSS, and Next.js.
- Add a clean, responsive landing page with sticky navigation.
- Set up a card-based design system for projects, certifications, and courses.

### Phase 2 — Content & Sections
- Build a hero section with a strong headline and CTA.
- Add featured projects section prioritizing:
  - Voice AI Logger
  - ChoreTracker
  - English Learning App
  - Game
- Add certifications section with clean credential cards.
- Add courses section to showcase relevant learning.

### Phase 3 — Polish & Deployment
- Add responsive mobile layout and subtle animations.
- Refine typography, spacing, and color palette.
- Optimize for performance and accessibility.


### Phase 4 — Content Refinement
- Replace placeholder copy with real professional messaging.
- Add real project links and demo URLs.
- Update contact details with actual email, GitHub, and resume links.
- Finalize certifications and courses with real issuers and dates.

## Goals
- Keep the design simple, modern, and recruiter-friendly.
- Highlight top projects first, then certifications, then courses.
- Make the portfolio easy to scan on mobile and desktop.
- Use reusable components for maintainability.

## Deployment
- Target deployment on GitHub Pages using `next export`.
- Include clear instructions for building and publishing.
- Use `gh-pages` to publish the exported `out` directory to GitHub Pages.

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```
4. Export static files for GitHub Pages:
   ```bash
   npm run export
   ```
5. Publish to GitHub Pages:
   ```bash
   npm run deploy
   ```

## GitHub Pages Notes
- If you host this repo as a GitHub project page (not `username.github.io`), the exported app will be available under `/portfoliosm`.
- If your site is not at the repository root, update `next.config.mjs` with `basePath: '/portfoliosm'` and `assetPrefix: '/portfoliosm/'`.
