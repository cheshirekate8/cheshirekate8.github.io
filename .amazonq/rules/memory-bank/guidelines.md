# Development Guidelines

## Code Style & Formatting
- **Prettier** for formatting (`npm run format`) — double quotes, trailing commas
- **ESLint flat config** — `eslint.config.js` with react-hooks and react-refresh plugins
- **ES Modules** throughout — `export default` for components and configs
- **Unused vars rule** — allows uppercase/underscore-prefixed unused variables (`varsIgnorePattern: '^[A-Z_]'`)

## Component Patterns

### File Conventions
- Layout components: `.tsx` in `src/components/layout/`
- Section components: `.tsx` in `src/components/sections/`
- Reusable UI: `.tsx` in `src/components/ui/`
- Data files: `.ts` in `src/data/`
- Types: `.ts` in `src/types/` with barrel export via `index.ts`

### Component Structure
- **Arrow function components** with `const ComponentName = () => { ... }`
- **Default exports** — one component per file
- **Props interfaces** defined inline above the component (not exported separately)
- **Variant pattern** for UI components:
```tsx
interface ButtonProps {
  variant?: "primary" | "secondary";
  className?: string;
}
const Button = ({ variant = "primary", className = "" }: ButtonProps) => {
  const variants = { primary: "...", secondary: "..." };
  return <button className={`${baseStyles} ${variants[variant]} ${className}`}>...</button>;
};
```

## Styling Patterns
- **Tailwind utility classes** directly in JSX — no separate CSS modules
- **`cn()` helper** from `src/data/styles.ts` for conditional class merging (clsx + tailwind-merge)
- **Dark mode** — always pair light/dark classes: `text-marian-blue dark:text-vivid-sky`
- **Custom color palette** — use named colors (federal-blue, marian-blue, honolulu-blue, blue-green, pacific-cyan, vivid-sky, non-photo, light-cyan) instead of generic Tailwind colors
- **Responsive** — mobile-first with `md:` and `lg:` breakpoints
- **Template literal class composition** — `${baseStyles} ${variants[variant]} ${className}`

## Animation Patterns (Framer Motion)
- **`motion.div`** wrappers for animated elements
- **Staggered entrance** — `initial={{ opacity: 0, y: 20 }}` → `animate={{ opacity: 1, y: 0 }}` with incremental `delay`
- **Infinite animations** — `repeat: Infinity` with `ease: "easeInOut"` for background effects
- **Hover interactions** — `hover:scale-105` via Tailwind (not Framer Motion whileHover)
- **Hidden on mobile** — decorative animations use `hidden md:block`

## Data Architecture
- Static content in typed data files (`src/data/*.ts`)
- Section components import and map over data arrays
- Types defined separately in `src/types/` and re-exported from barrel `index.ts`

## Build Optimization
- **Manual chunks** — Framer Motion split into separate chunk in vite.config.js:
```js
manualChunks: { 'framer-motion': ['framer-motion'] }
```
- **Base path** — `base: '/'` for GitHub Pages root deployment

## Navigation Pattern
- Smooth scroll to sections via `document.querySelector` + `getBoundingClientRect` with 80px offset for navbar
- Section IDs match navigation links (`#hero`, `#about`, `#experience`, `#projects`, `#skills`, `#contact`)

## Conventions Summary
| Aspect | Convention |
|--------|-----------|
| Components | Arrow functions, default export, .tsx |
| Config files | ES module default export, .js |
| Styling | Tailwind utilities, custom palette, dark: variants |
| State | Minimal — mostly static data-driven |
| Icons | lucide-react + @icons-pack/react-simple-icons |
| Animations | Framer Motion motion.* components |
| Types | Separate files, barrel export |
