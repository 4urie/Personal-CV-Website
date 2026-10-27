# Aurie D. Nellas — Personal CV Website

A responsive personal CV website and developer portfolio created by **Aurie D. Nellas**, a fourth-year BSIT student at Davao del Norte State College (DNSC). The website showcases my professional profile, technical skills, educational background, academic projects, and contact information.

## Project Information

| Detail | Description |
|---|---|
| **Project Title** | Personal CV Website |
| **Student Name** | Aurie D. Nellas |
| **Section** | BSIT 4D |
| **School** | Davao del Norte State College |
| **Professional Title** | Full-Stack Developer \| BSIT Student |
| **Project Type** | Personal Portfolio and Curriculum Vitae Website |
| **Live Website** | [https://aurie-gray.vercel.app/](https://aurie-gray.vercel.app/) |
| **GitHub Repository** | [https://github.com/4urie/Personal-CV-Website](https://github.com/4urie/Personal-CV-Website) |

## Features

- Responsive personal CV and developer portfolio.
- Professional profile and career objective.
- Education and technical skills sections.
- Featured academic and software development projects.
- GitHub profile and contact information.
- Achievements and experience sections.
- Mobile-friendly navigation with active section highlighting.
- Smooth scrolling and subtle scroll-based animations.
- Scroll-to-top button.
- Accessibility features, including keyboard focus styling and reduced-motion support.
- Search engine optimization (SEO) and Open Graph metadata.
- Custom favicon and responsive layouts for desktop, tablet, and mobile.
- Editable portfolio content managed through `src/data/portfolio.ts`.

## Technologies Used

- **Next.js** — React framework using the App Router.
- **React** — Component-based user interface.
- **TypeScript** — Type-safe JavaScript development.
- **Tailwind CSS 4** — Responsive styling and design.
- **Lucide React** — Icons and interface elements.
- **Vercel** — Website hosting and deployment.
- **Git and GitHub** — Version control and source code hosting.

## Getting Started

### Prerequisites

Make sure the following are installed:

- Node.js 20.9 or newer
- npm
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/4urie/Personal-CV-Website.git
```

Navigate to the project directory:

```bash
cd Personal-CV-Website
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open your browser and visit:

[http://localhost:3000](http://localhost:3000)

## Development Commands

```bash
npm run dev     # Start the development server
npm run build   # Build the production application
npm run start   # Start the production server
npm run lint    # Run ESLint, if configured
```

## Project Structure

```text
Personal-CV-Website/
├── public/
│   └── images/
│       └── aurie-nellas.png
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   └── data/
│       └── portfolio.ts
├── package.json
├── README.md
└── tsconfig.json
```

*Note: The structure above is illustrative. Actual files and folders may differ depending on the current implementation.*

## Deployment on Vercel

The website is deployed using Vercel.

To deploy or update the website:

1. Push the latest code to the GitHub repository.
2. Sign in to [Vercel](https://vercel.com).
3. Select **Add New → Project**.
4. Import the `Personal-CV-Website` GitHub repository.
5. Confirm the Next.js framework settings and build command.
6. Click **Deploy**.
7. Open the generated public URL and verify that the website works correctly.

Vercel can automatically rebuild the website whenever changes are pushed to the connected GitHub repository.

No environment variables are required for the current static portfolio implementation.

## Screenshots

Screenshots of the website can be added here to demonstrate its interface and responsive design.

Example:

```md
![Personal CV Website Home Page](public/images/portfolio-home.png)
```

Replace the example image path with an actual screenshot file before using it.

The profile image is expected at `public/images/aurie-nellas.png` and can be replaced with another image at the same path if the application references it there.

## Project Purpose

This project was developed as part of the **Task 2: Personal CV Website Creation using Vercel** activity. Its purpose is to establish a professional online presence, present my technical skills and academic projects, and demonstrate the use of modern web development technologies and deployment tools.

## Author

**Aurie D. Nellas**

Bachelor of Science in Information Technology  
Davao del Norte State College — BSIT 4D

- **GitHub:** [@4urie](https://github.com/4urie)
- **Portfolio:** [aurie-gray.vercel.app](https://aurie-gray.vercel.app/)
- **Email:** [nellasaurie5@gmail.com](mailto:nellasaurie5@gmail.com)

---

© Aurie D. Nellas. Personal portfolio project.
