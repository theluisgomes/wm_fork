## Learned User Preferences
- Prefers iterative UI refinements through direct, concrete edit requests on page elements.
- Prefers concise team-card copy focused on roles, and avoids redundant years-of-experience wording.
- Team expertise should read consistently across cards: non-featured members use the same **specialties / role line** treatment as the featured profile (uppercase specialty line where applicable).
- Official Wisemetrics slogan in primary marketing surfaces: **Data into Action** (hero headline and footer tagline stay aligned).
- Methodology section: **one** navigation pattern—the **flow grid cards** select the step; avoid a redundant horizontal tab row duplicating the same choices.
- Navbar and footer **wordmarks must match** (reuse the shared logo treatment, e.g. `Logo` + `nav-brand`, not divergent footer-only markup).
- Prefers the site visual direction to align closely with `wisemetrics-design-system-v2.html` and `DESIGN.md`.
- The public site must be **bilingual PT/EN** with a navbar language toggle.
- Home portfolio section should be a **visual carousel/showcase** with a CTA to the full portfolio—not duplicate detailed case cards from the Portfolio page.
- Portfolio project copy uses **two markdown files per project**: `project.md` (PT) and `project.en.md` (EN).
- Frequently communicates in Portuguese for implementation requests.

## Learned Workspace Facts
- The public site is a **Vite + React** app (`src/`, `src/pages/*`, `src/components/*`). Root `index.html` is the Vite shell, not where page content lives.
- Visual references: `wisemetrics-design-system-v2.html` and `DESIGN.md` / `DESIGN.json` (design tokens and north star).
- Team photos live in `deck/`; portfolio project assets live in `public/projects/{slug}/IMG/`.
- Bilingual i18n via `src/i18n/I18nContext.jsx` with `localStorage` key `wm_lang`; localized routes `/sobre`|`/about` and `/contato`|`/contact`.
- Portfolio is file-based under `public/projects/{slug}/` (`project.md`, `project.en.md`, `IMG/`); `scripts/sync-projects.mjs` builds `src/data/projects-manifest.json` on predev/prebuild.
- Individual projects have detail pages at `/portfolio/:slug` (`ProjectDetail.jsx`, `src/lib/projects.js`).
- **Production** GitHub source for the live site (`wisemetrics.in`) is **[theluisgomes/wm_main](https://github.com/theluisgomes/wm_main)** (`main`). Local `origin` may still point at the **wm_fork** working repo; use remote `wm_main` (or equivalent) when pushing releases to production.
- CI/hosting should run **`npm ci`** (or `npm install`) and **`npm run build`**; publish **`dist/`** only—do not commit `dist/` (see `.gitignore`). SPA routing relies on `vercel.json` and/or `public/_redirects` copied into `dist`.
- GitHub rejects blobs **> 100 MB**; keep large installers and similar files out of the repo (e.g. ignore `*.rpm`).
