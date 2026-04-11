# Youth Passion Project — marketing site

Public website for [Youth Passion Project](https://www.youthpassionproject.org): program information, apply flows, legal pages, and links to the separate **student portal** app.

**Stack:** [Next.js](https://nextjs.org) 16 (App Router), React 19, TypeScript, Tailwind CSS 4.

---

## For new contributors

1. **Clone** this repo and install dependencies.
2. **Run locally** with `npm run dev` and open [http://localhost:3000](http://localhost:3000).
3. **Read** [Environment variables](#environment-variables) and the `docs/` folder for portal-related behavior.
4. **Edit** page content under `src/app/`, shared copy in `src/constants/site.ts`, and global styles in `src/app/globals.css`.

---

## Prerequisites

- **Node.js** — use a current LTS version (e.g. 20.x or 22.x). Install from [nodejs.org](https://nodejs.org) or your version manager.
- **npm** — included with Node (this repo uses `package-lock.json`).

---

## Setup

```bash
cd youth-passion-project
npm install
npm run dev
```

The dev server runs at **http://localhost:3000** with hot reload.

### Other commands

| Command        | Purpose                          |
|----------------|----------------------------------|
| `npm run dev`  | Development server               |
| `npm run build`| Production build (run before deploy) |
| `npm run start`| Serve production build locally   |
| `npm run lint` | ESLint                           |
| `npm run test` | Vitest unit tests                |

---

## Environment variables

Copy `.env.example` to **`.env.local`** in the project root (Next.js loads this automatically; do not commit secrets).

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_PORTAL_URL` | Base URL for the student portal. If unset, the app uses the default in `src/constants/site.ts`. |
| `NEXT_PUBLIC_PORTAL_WAITLIST_FORM_URL` | Optional Google Form `viewform` URL for the “notify me when the portal is ready” flow. See [docs/PORTAL_WAITLIST.md](docs/PORTAL_WAITLIST.md). |

**Vercel (or any host):** add the same variables under Project → Settings → Environment Variables, then redeploy.

---

## Project layout

```
src/
  app/                 # Routes (App Router): each folder with page.tsx is a URL
    layout.tsx         # Root layout: fonts, metadata (title, favicon), Header, Footer
    globals.css        # Design tokens, nav styles, Tailwind theme bridge
    page.tsx           # Homepage
    …/page.tsx         # Other pages (about, programs, legal, etc.)
  components/          # Reusable UI (Header, Footer, sections, etc.)
  constants/
    site.ts            # Site-wide copy: portal URL, emails, apply roles, legal links
  data/
    programsData.ts    # Online sessions and in-person locations for /programs
public/                # Static files served at /filename (images, logo, etc.)
docs/                  # Maintainer docs (portal sync, waitlist)
```

**Import alias:** `@/` maps to `src/` (see `tsconfig.json`).

---

## Common editing tasks

### Navigation and header/footer

- **Main nav links:** `src/components/Header.tsx` — `navLinks` array.
- **Footer:** `src/components/Footer.tsx` (social links, columns, legal).
- **Logo:** `public/logo.png` (also used as favicon via `metadata.icons` in `src/app/layout.tsx`).

### Site-wide copy, emails, and applications

- **`src/constants/site.ts`** — single source for:
  - Portal URL and **“portal coming soon”** behavior (`STUDENT_PORTAL_COMING_SOON`).
  - Contact emails (`CONTACT_EMAILS`).
  - **Apply / hiring:** `applyRoles` (roles, teasers, Google Form links). Homepage “Now Hiring” and `/apply` stay in sync with this list.
  - **Legal:** `LEGAL_LINKS` (internal routes + external Google Docs/Sheets).

### Student portal and external app

The **portal** (login, courses, registration) is a **different codebase**. This site only links to it.

- How to keep URLs and behavior aligned: **[docs/SYNC_WITH_PORTAL.md](docs/SYNC_WITH_PORTAL.md)**.
- Waitlist / notify flow: **[docs/PORTAL_WAITLIST.md](docs/PORTAL_WAITLIST.md)**.

### Calendar and programs

- **Calendar events** are **static** in `src/app/programs/calendar/page.tsx` (edit the data structure there; not synced to the portal).
- **Programs page** content: `src/app/programs/page.tsx`, with online/in-person lists in **`src/data/programsData.ts`**.

### Branding and colors

- **Colors, typography tokens, nav classes:** `src/app/globals.css` (`:root` CSS variables and `@theme inline` for Tailwind).
- Reference palette HTML (design exploration): `ypp-design-palette.html` at repo root (not part of the Next.js build).

### SEO and social previews

- **Default title/description:** `metadata` in `src/app/layout.tsx`.
- **Per-page titles:** add or override `metadata` exports in individual `page.tsx` files where needed.

### Static images

Place files in **`public/`** and reference them as `/filename.ext` (e.g. `/team/photo.jpg` for `public/team/photo.jpg`).

---

## Deployment

This project is set up like a standard Next.js app. **Vercel** is a common choice: connect the GitHub repo, set environment variables, and deploy from `main`.

After changing env vars or `site.ts` flags that affect the portal, **redeploy** so visitors see updates.

---

## Repository

Source: GitHub — coordinate with your team for branch strategy and review rules.

---

## Learn more

- [Next.js documentation](https://nextjs.org/docs)
- [React documentation](https://react.dev)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
