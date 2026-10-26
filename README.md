# Aurie D. Nellas — Personal Portfolio

A responsive personal CV and developer portfolio for Aurie D. Nellas, a fourth-year BSIT student at Davao del Norte State College. The site presents verified background information, skills, academic projects, and contact details in an accessible, editorial-style interface.

## Features

- Responsive portfolio sections for profile, about, education, skills, projects, achievements, experience, and contact
- Mobile navigation, active section highlighting, and scroll-to-top control
- Subtle viewport reveal motion with reduced-motion support
- Editable profile, skills, education context, and project data in `src/data/portfolio.ts`
- Search engine and Open Graph metadata, custom favicon, keyboard focus styling, and semantic page structure
- No database, authentication, environment variables, or third-party runtime services

## Technology stack

- Next.js App Router and React
- TypeScript
- Tailwind CSS 4 (with custom responsive design tokens and CSS)
- Lucide React icons

## Local setup

Requirements: Node.js 20.9 or newer and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Development commands

```bash
npm run dev     # Start the local development server
npm run build   # Create an optimized production build
npm run start   # Serve the production build locally
npm run lint    # Run ESLint
```

## Deployment

1. Push this repository to your GitHub account.
2. Sign in to [Vercel](https://vercel.com), choose **Add New → Project**, and import the GitHub repository.
3. Keep the detected Next.js framework preset and default build command (`npm run build`). No environment variables are required.
4. Choose **Deploy**. When the build succeeds, Vercel provides a public `*.vercel.app` URL.
5. Open the generated URL and check the sections, navigation, and email link. Add `4urie.me` under the project's **Settings → Domains** if that domain is configured for this project.

## Screenshots

Screenshots can be added here after the site is previewed or deployed, for example:

```md
![Portfolio home page](public/images/portfolio-home.png)
```

Add optional portfolio screenshots here after the site is previewed or deployed. The profile photo lives at `public/images/aurie-nellas.png` and can be replaced with another image at the same path.
