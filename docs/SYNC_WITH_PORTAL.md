# Syncing This Site With the Student Portal

This marketing site links to the **YPP Pathways Portal** in many places (header, footer, Programs, Apply, Calendar, FAQs). The portal is a separate app:

- **Repo:** [braydenwhite-blip/YPP-Portal](https://github.com/braydenwhite-blip/YPP-Portal)
- **Stack:** Next.js 14, PostgreSQL (Prisma), NextAuth — pathways, instructor training, events, chapter dashboards.
- **Deploy:** Typically `youthpassionproject-portal.vercel.app` or `portal.youthpassionproject.org`.

Here’s how to keep this site in sync with the portal.

---

## 1. Portal URL (link sync)

**Single source of truth:** `src/constants/site.ts` → `PORTAL_URL`.

- **Default:** `https://youthpassionproject-portal.vercel.app`
- **Override:** set **`NEXT_PUBLIC_PORTAL_URL`** in:
  - **Local:** `.env.local` in the project root (create it if missing)
  - **Vercel:** Project → Settings → Environment Variables

Example `.env.local`:

```bash
NEXT_PUBLIC_PORTAL_URL=https://portal.youthpassionproject.org
```

After changing the URL, restart the dev server or redeploy. Every “Student Portal”, “Go to portal”, and course/registration link will use this value.

---

## 2. Calendar (no portal sync)

The **Calendar** page uses **static data** only. It is not synced with the portal. To update events, edit `sampleEvents` in `src/app/programs/calendar/page.tsx` and deploy.

---

## 3. Quick reference

| What you want              | Where to change it |
|----------------------------|--------------------|
| Portal codebase            | [github.com/braydenwhite-blip/YPP-Portal](https://github.com/braydenwhite-blip/YPP-Portal) |
| Portal URL (all links)     | `NEXT_PUBLIC_PORTAL_URL` in `.env.local` or Vercel (or hardcode in `src/constants/site.ts`) |
| Calendar events            | `src/app/programs/calendar/page.tsx` → `sampleEvents` (static; no portal sync) |
| Programs / course list     | `src/app/programs/page.tsx` and `src/data/programsData.ts` |
