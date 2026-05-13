# Technology Stack

## Languages
- **TypeScript** — Components (.tsx) and data/type files (.ts)
- **JavaScript (JSX)** — App.jsx, main.jsx, config files
- **CSS** — Tailwind utility classes + custom CSS

## Framework & Libraries
- **React 19** — UI framework (functional components, hooks)
- **Framer Motion 12** — Animation library for scroll/interaction animations
- **React Router DOM 7** — Available but app is single-page (no routing currently used)
- **Lucide React** — Icon library
- **@icons-pack/react-simple-icons** — Brand/technology icons
- **clsx + tailwind-merge** — Conditional class name composition via `cn()` utility

## Build & Tooling
- **Vite 7** — Dev server and production bundler
- **@vitejs/plugin-react** — React Fast Refresh and JSX transform
- **Tailwind CSS 3** — Utility-first CSS framework
- **PostCSS + Autoprefixer** — CSS processing pipeline
- **ESLint 9** — Linting (flat config with react-hooks and react-refresh plugins)
- **Prettier** — Code formatting

## Deployment
- **gh-pages** — Deploys `dist/` to GitHub Pages

## Development Commands
| Command | Purpose |
|---------|---------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm run format` | Run Prettier on src files |
| `npm run deploy` | Build and deploy to GitHub Pages |

## Configuration
- **ES Modules** — `"type": "module"` in package.json
- **Dark Mode** — Tailwind `darkMode: 'class'`
- **Custom Colors** — Ocean-blue palette defined in tailwind.config.js
- **Base URL** — Configured in vite.config.js for GitHub Pages subpath
