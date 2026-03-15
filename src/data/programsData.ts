/**
 * Single source of truth for programs/courses. Used by:
 * - Programs page (online + in-person sections)
 * - Homepage "Newest Courses" section
 *
 * When you have courses again: import from programs-sample-data.ts and assign below,
 * or replace the empty arrays with the sample data. Homepage and Programs stay in sync.
 */

export type OnlineClass = {
  name: string;
  grades: string;
  description: string;
  link: string;
};

export type OnlineSession = {
  session: string;
  location: string;
  classes: OnlineClass[];
};

export type InPersonClass = {
  name: string;
  grades: string;
  description: string;
  link: string;
};

export type InPersonLocation = {
  id: string;
  city: string;
  state: string;
  sessions: string;
  classes: InPersonClass[];
};

/** No classes at the moment. Restore from programs-sample-data when sessions are available. */
export const onlineSessions: OnlineSession[] = [];
export const inPersonLocations: InPersonLocation[] = [];

export type NewestCourseItem = {
  name: string;
  delivery: "online" | "in-person";
  chapter: string | null;
  grades: string;
  summary: string;
  href: string;
  ages?: string;
};

/** Derived from onlineSessions + inPersonLocations for homepage. Always in sync with Programs page. */
export function getNewestCourses(limit = 8): NewestCourseItem[] {
  const out: NewestCourseItem[] = [];
  for (const s of onlineSessions) {
    for (const c of s.classes) {
      out.push({
        name: c.name,
        delivery: "online",
        chapter: null,
        grades: c.grades.replace(/^Grades\s+/i, "").trim() || c.grades,
        summary: c.description,
        href: c.link,
      });
    }
  }
  for (const loc of inPersonLocations) {
    for (const c of loc.classes) {
      out.push({
        name: c.name,
        delivery: "in-person",
        chapter: `${loc.city}, ${loc.state}`,
        grades: c.grades.replace(/^Grades\s+/i, "").trim() || c.grades,
        summary: c.description,
        href: c.link,
      });
    }
  }
  return out.slice(0, limit);
}
