## Learned User Preferences
- Prefers iterative UI refinements through direct, concrete edit requests on page elements.
- Prefers concise team-card copy focused on roles, and avoids redundant years-of-experience wording.
- Team expertise should read consistently across cards: non-featured members use the same **specialties / role line** treatment as the featured profile (uppercase specialty line where applicable).
- Official Wisemetrics slogan in primary marketing surfaces: **Data into Action** (hero headline and footer tagline stay aligned).
- Methodology section: **one** navigation pattern—the **flow grid cards** select the step; avoid a redundant horizontal tab row duplicating the same choices.
- Navbar and footer **wordmarks must match** (reuse the shared logo treatment, e.g. `Logo` + `nav-brand`, not divergent footer-only markup).
- Prefers the site visual direction to align closely with `wisemetrics-design-system-v2.html`.
- Frequently communicates in Portuguese for implementation requests.

## Learned Workspace Facts
- The public site is a **Vite + React** app (`src/`, `src/pages/*`, `src/components/*`). Root `index.html` is the Vite shell, not where page content lives.
- `wisemetrics-design-system-v2.html` is used as a visual reference for UI alignment.
- Visual assets used by the site are stored in `deck/`, including team photos.
- **Production** GitHub source for the live site (`wisemetrics.in`) is **[theluisgomes/wm_main](https://github.com/theluisgomes/wm_main)** (`main`). Local `origin` may still point at the **wm_fork** working repo; use remote `wm_main` (or equivalent) when pushing releases to production.
- CI/hosting should run **`npm ci`** (or `npm install`) and **`npm run build`**; publish **`dist/`** only—do not commit `dist/` (see `.gitignore`). SPA routing relies on `vercel.json` and/or `public/_redirects` copied into `dist`.
- GitHub rejects blobs **> 100 MB**; keep large installers and similar files out of the repo (e.g. ignore `*.rpm`).
