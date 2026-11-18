# Abdelrahman Mohamed Antar – Portfolio

Next.js 14 (App Router) · TypeScript · Tailwind CSS · GSAP + ScrollTrigger · Lenis · Lucide

## Run locally
    npm install
    npm run dev      # http://localhost:3000
    npm run build && npm start

## Deploy on Vercel
1. Push this folder to a GitHub repository.
2. In Vercel choose "Add New Project", import the repo (framework preset: Next.js, no extra settings).
3. Optional: set `NEXT_PUBLIC_SITE_URL` to your final domain so Open Graph links resolve.

## Add a project
1. Put images in `public/images/projects/<project-id>/` (e.g. `thumbnail.webp`, `screenshot-1.webp`).
2. Add an object to `data/projects.ts` (`thumbnail`, optional `gallery`, `githubUrl`, `liveUrl`).
Cards, the carousel and the gallery modal update automatically. A project with no thumbnail shows a clean placeholder.

## Edit content
Personal info, skills, experience and education live in `data/profile.ts`. Replace the CV at `public/Abdelrahman_Mohamed_Antar_CV.pdf`.
