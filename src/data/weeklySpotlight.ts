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
  gradesLabel: string;
  blurb: string;
  ctaLabel: string;
  ctaHref: string;
  disclaimer?: string;
  source: "editorial" | "catalog";
};

/** Curated examples—tone aligned with real offerings; not an open enrollment claim. */
const EDITORIAL_SPOTLIGHTS: readonly Omit<WeeklySpotlight, "source">[] = [
  {
    title: "Introduction to Coding in Java",
    gradesLabel: "Grades 6–9",
    blurb: "Fundamentals of programming with small projects—great for middle schoolers new to CS.",
    ctaLabel: "See Programs & Chapters",
    ctaHref: "/programs",
    disclaimer: "Illustrative example—the full catalog returns with the student portal.",
  },
  {
    title: "Songwriting & Music",
    gradesLabel: "Grades 4–8",
    blurb: "Melody, lyrics, and basic theory—students leave with a finished piece of their own.",
    ctaLabel: "See Programs & Chapters",
    ctaHref: "/programs",
    disclaimer: "Illustrative example—the full catalog returns with the student portal.",
  },
  {
    title: "Art of Baking",
    gradesLabel: "Grades 5–8",
    blurb: "From scratch cookies to simple pastries—measuring, mixing, and kitchen confidence.",
    ctaLabel: "See Programs & Chapters",
    ctaHref: "/programs",
    disclaimer: "Illustrative example—the full catalog returns with the student portal.",
  },
  {
    title: "Creative Writing",
    gradesLabel: "Grades 5–9",
    blurb: "Short stories and poetry in a workshop setting—voice, revision, and peer feedback.",
    ctaLabel: "See Programs & Chapters",
    ctaHref: "/programs",
    disclaimer: "Illustrative example—the full catalog returns with the student portal.",
  },
  {
    title: "Competition Math",
    gradesLabel: "Grades 6–8",
    blurb: "Problem-solving strategies beyond the textbook—patterns, proofs, and contest-style puzzles.",
    ctaLabel: "See Programs & Chapters",
    ctaHref: "/programs",
    disclaimer: "Illustrative example—the full catalog returns with the student portal.",
  },
  {
    title: "Introduction to Chess",
    gradesLabel: "Grades 3–7",
    blurb: "Openings, tactics, and endgame ideas—play, analyze, and build focus in a fun group.",
    ctaLabel: "See Programs & Chapters",
    ctaHref: "/programs",
    disclaimer: "Illustrative example—the full catalog returns with the student portal.",
  },
  {
    title: "Public Speaking & Debate",
    gradesLabel: "Grades 6–10",
    blurb: "Structure arguments, own the stage, and speak with clarity—skills for school and beyond.",
    ctaLabel: "See Programs & Chapters",
    ctaHref: "/programs",
    disclaimer: "Illustrative example—the full catalog returns with the student portal.",
  },
];

export function getWeeklySpotlight(now = new Date()): WeeklySpotlight {
  const { weekYear, weekNumber } = getIsoWeekKey(now);
  const catalog = getNewestCourses(200);

  if (catalog.length > 0) {
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

  const idx = pickWeeklyIndex(weekYear, weekNumber, EDITORIAL_SPOTLIGHTS.length);
  const e = EDITORIAL_SPOTLIGHTS[idx]!;
  return { ...e, source: "editorial" };
}
