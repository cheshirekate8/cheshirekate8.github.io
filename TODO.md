## ✅ To Do
- Found in Cleanup
  - Change all buttons to Buttons OR delete Button
    - Find all button styles currently used in project
    - Choose primary, secondary, tertiary, etc
    - Assign in button file
    - Replace all buttons in project
      - Hero (3)
      - About (1)
      - Projects (2)
      - Contact (1)

## ✅ Done
- ~~Go through App.css and index.css and remove unused CSS~~ (App.css deleted — was all Vite boilerplate)
- Extracted shared `scrollToSection` utility (`src/utils/scroll.ts`)
- Fixed missing `key` on `<li>` in Footer
- Replaced deprecated `window.pageYOffset` with `window.scrollY`
- Removed unused `react-router-dom` dependency
- Moved `@types/node` and `prettier` to devDependencies
- Converted `App.jsx` → `App.tsx` and `main.jsx` → `main.tsx`
- Fixed ProjectCard badge overlap (stacks when both present)
- Fixed filter type assertion in Projects with `as const`
- Added skip-to-content link for accessibility
- Added `loading="lazy"` to project images
- Added Open Graph meta tags for social sharing

## ✅ To Do LATER
- Hero
  - Rewrite copy
- Skills
  - Redo Always Learning section
- CAHDB
  - Finish and Deploy CAHDB (last to do)
  - Image again once done
