import { getNewestCourses } from "./programsData";

/**
 * ISO week in UTC. Stable Mon–Sun for all visitors in the same week.
 * Switch to America/New_York (or similar) if org-local week boundaries matter.
 */
export function getIsoWeekKey(d = new Date()): { weekYear: number; weekNumber: number } {
  const input = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
  const day = (input.getUTCDay() + 6) % 7;
  const thursday = new Date(input);
  thursday.setUTCDate(input.getUTCDate() + (3 - day));

  const weekYear = thursday.getUTCFullYear();
  const jan4 = new Date(Date.UTC(weekYear, 0, 4));
  const jan4Day = (jan4.getUTCDay() + 6) % 7;
  const week1Monday = new Date(jan4);
  week1Monday.setUTCDate(4 - jan4Day);

  const weekMonday = new Date(thursday);
  weekMonday.setUTCDate(thursday.getUTCDate() - 3);

  const msPerWeek = 7 * 24 * 60 * 60 * 1000;
  const weekNumber = Math.floor((+weekMonday - +week1Monday) / msPerWeek) + 1;
  return { weekYear, weekNumber };
}

/** Deterministic index for tests and rotation (0 .. length-1). */
export function pickWeeklyIndex(weekYear: number, weekNumber: number, length: number): number {
  if (length <= 0) return 0;
  const n = weekYear * 53 + weekNumber;
  return ((n % length) + length) % length;
}

export type WeeklySpotlight = {
  title: string;
  /** Omitted when `source` is `idle` (no section to highlight). */
  gradesLabel?: string;
  blurb: string;
  ctaLabel: string;
  ctaHref: string;
  disclaimer?: string;
  source: "catalog" | "idle";
};

/**
 * Shown when `getNewestCourses` is empty—honest copy instead of rotating sample courses.
 * Remove or narrow this once `programsData` lists live sections again.
 */
const IDLE_SPOTLIGHT: Omit<WeeklySpotlight, "source"> = {
  title: "No open class list right now",
  blurb:
    "When registration opens, you'll enroll through the student portal and see offerings on Programs & Chapters.",
  ctaLabel: "Programs & Chapters",
  ctaHref: "/programs",
};

export function getWeeklySpotlight(now = new Date()): WeeklySpotlight {
  const catalog = getNewestCourses(200);

  if (catalog.length > 0) {
    const { weekYear, weekNumber } = getIsoWeekKey(now);
    const idx = pickWeeklyIndex(weekYear, weekNumber, catalog.length);
    const c = catalog[idx]!;
    const gradesLabel = /^grades\s+/i.test(c.grades) ? c.grades : `Grades ${c.grades}`;
    const hasLink = c.href.trim().length > 0;
    return {
      title: c.name,
      gradesLabel,
      blurb: c.summary,
      ctaLabel: hasLink ? "Full details & sign up" : "See Programs & Chapters",
      ctaHref: hasLink ? c.href : "/programs",
      source: "catalog",
    };
  }

  return { ...IDLE_SPOTLIGHT, source: "idle" };
}
