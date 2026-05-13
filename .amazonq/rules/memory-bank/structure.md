# Project Structure

## Directory Layout
```
├── public/                  # Static assets (images, favicon, resume PDF)
│   └── favicon_io/          # Favicon variants and web manifest
├── src/
│   ├── components/
│   │   ├── layout/          # Navbar.tsx, Footer.tsx — persistent page chrome
│   │   ├── sections/        # Hero, About, Experience, Projects, Skills, Contact
│   │   └── ui/              # Reusable UI: Button, ProjectCard, SkillCard, ScrollProgress, ThemeToggle, etc.
│   ├── data/                # Static data files (experience, projects, skills, navigation, social, styles)
│   ├── types/               # TypeScript type definitions (common, project, skill, index barrel)
│   ├── App.jsx              # Root component — assembles sections
│   ├── main.jsx             # Entry point — renders App into DOM
│   ├── App.css              # App-level styles
│   └── index.css            # Global/Tailwind base styles
├── index.html               # HTML shell with Vite entry
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite build configuration
├── tailwind.config.js       # Tailwind theme (custom blue palette, dark mode)
├── postcss.config.js        # PostCSS plugins (Tailwind, Autoprefixer)
├── eslint.config.js         # ESLint flat config
└── TODO.md                  # Development task tracking
```

## Architecture
- **Single-page app** — No routing; sections rendered sequentially in App.jsx
- **Component hierarchy**: App → Layout (Navbar/Footer) + Sections → UI components
- **Data-driven**: Section content lives in `src/data/*.ts` files, consumed by section components
- **Type safety**: TypeScript interfaces in `src/types/` define data shapes
- **Styling**: Tailwind utility classes + `cn()` helper (clsx + tailwind-merge) for conditional class merging

## Key Relationships
- `App.jsx` imports all section and layout components
- Section components (e.g., Projects.tsx) import data from `src/data/` and render UI components (e.g., ProjectCard)
- `src/data/styles.ts` exports `cn()` utility and color constants used across components
- Dark mode controlled via class on root element, toggled by ThemeToggle component
