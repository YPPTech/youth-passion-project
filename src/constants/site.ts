/**
 * Site-wide copy and data aligned with youthpassionproject.org
 * (Trigger deploy)
 */

/**
 * YPP Pathways Portal (registration, courses, instructor training, events).
 * Repo: https://github.com/braydenwhite-blip/YPP-Portal
 * Kept for when the portal goes live again. Do not use in UI while STUDENT_PORTAL_COMING_SOON is true.
 */
export const PORTAL_URL =
  typeof process !== "undefined" && process.env?.NEXT_PUBLIC_PORTAL_URL
    ? process.env.NEXT_PUBLIC_PORTAL_URL
    : "https://youthpassionproject-portal.vercel.app";

/**
 * When true, the marketing site shows “Coming soon” for the student portal and does not link to PORTAL_URL.
 * Set to false when the portal is ready; then restore portal links in components (or wire CTAs to PORTAL_URL).
 */
export const STUDENT_PORTAL_COMING_SOON = true;

/**
 * Optional: Google Form URL for /notify waitlist. Unused while STUDENT_PORTAL_COMING_SOON is the primary UX.
 */
export const PORTAL_WAITLIST_FORM_URL =
  typeof process !== "undefined" && process.env?.NEXT_PUBLIC_PORTAL_WAITLIST_FORM_URL
    ? process.env.NEXT_PUBLIC_PORTAL_WAITLIST_FORM_URL.trim()
    : "";

/** @deprecated Use STUDENT_PORTAL_COMING_SOON; kept for any legacy checks. */
export const USE_PORTAL_WAITLIST = PORTAL_WAITLIST_FORM_URL.length > 0;

/** Legal documents (official YPP links + internal pages). */
export const LEGAL_LINKS = [
  { href: "/legal/privacy", label: "Privacy Policy", internal: true },
  { href: "/legal/by-laws", label: "By-Laws", internal: true },
  { href: "/legal/enrollment-consent", label: "Enrollment Consent and Release Agreement", internal: true },
  { href: "/legal/enrollment-media-release", label: "Enrollment Media Release Agreement", internal: true },
  { href: "/legal/instructor-retainment", label: "Instructor Retainment", internal: true },
  { href: "/legal/volunteer-retainment", label: "Volunteer Retainment", internal: true },
  { href: "/legal/volunteer-media-release", label: "Volunteer Media Release", internal: true },
  { href: "https://docs.google.com/forms/d/e/1FAIpQLSfy4sOTNRXNjLMJ63jF2jx7B7FYBI3HLZAkuufi_vnhmvYTkg/viewform", label: "Whistleblower Report", internal: false },
  { href: "https://docs.google.com/spreadsheets/d/1XmtmKRDIX8YxVWdeeleUPWec1MSL8m_3b4naHhIo0Co/edit#gid=0", label: "Volunteer Directory", internal: false },
] as const;

/** Contact emails by audience. */
export const CONTACT_EMAILS = {
  /** Students and parents — Enrollment and Student Services */
  support: "support@youthpassionproject.org",
  /** Media inquiries — Public Relations */
  marketing: "marketing@youthpassionproject.org",
  /** Website, portal, and technical infrastructure */
  tech: "tech@youthpassionproject.org",
  /** In-person instructor support */
  inPersonInstructors: "in-person-instructors@youthpassionproject.org",
  /** Online instructor support */
  onlineInstructorSupport: "online-instructor-support@youthpassionproject.org",
} as const;

/** Application form URLs — single source for Apply page and any links to apply. */
const INSTRUCTOR_APPLICATION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfXlGvCx_itTN6bBdevbL7ohb8Ya7tQMIQS5JBF92q4xPS1QA/viewform";
const CHAPTER_PRESIDENT_APPLICATION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd7d2uxq1kJaFP5FAp5HsMe0h2U13CNz6heKuBcsY8rMgLOLQ/viewform";

/**
 * All open roles — single source of truth for Apply page and homepage (Now Hiring bar + Join Our Team cards).
 * Add or edit roles here; the Apply page and hiring bar stay in sync.
 */
export const applyRoles = [
  {
    id: "instructor",
    title: "Instructor",
    ageGrade: "High school students (grades 9–12)",
    /** One line for /apply cards; homepage still uses shortDescription. */
    applyTeaser: "Teach what you love—online or in person.",
    shortDescription:
      "Lead classes for younger students in your subject. Weekly sessions with curriculum support and training.",
    description:
      "Lead classes for younger students online or at a chapter. Most sessions run 30–60 minutes, 1–2 times per week.",
    details: [
      "Application + training; support from YPP staff.",
      "You’ll describe your course and how you’d run it.",
      "Mentorship from experienced leaders.",
    ],
    applyLink: INSTRUCTOR_APPLICATION_URL,
    applyLabel: "Instructor application (25–26)",
  },
  {
    id: "chapter-president",
    title: "Chapter President",
    ageGrade: "High school students (grades 9–12)",
    applyTeaser: "Start or grow a chapter: recruit instructors and run local programs.",
    shortDescription:
      "Coordinate a chapter—recruit instructors, plan events, and partner with your school. Reach out to your school first.",
    description:
      "Run a YPP chapter: recruit volunteers and instructors, plan classes and events, and connect your school with YPP.",
    details: [
      "Contact your school before applying when you can.",
      "The form asks for your school, grade, and why you want to lead.",
      "Ongoing support from YPP leadership.",
    ],
    applyLink: CHAPTER_PRESIDENT_APPLICATION_URL,
    applyLabel: "Chapter President application",
  },
] as const;

/** Pills for the Now Hiring bar — derived from applyRoles; links go to /apply#id. */
export const hiringRolePills = applyRoles.map((r) => ({ title: r.title, id: r.id }));

/** Cards for Join Our Team section — derived from applyRoles. */
export const openPositions = applyRoles.map((r) => ({
  title: r.title,
  description: r.shortDescription,
  href: `/apply#${r.id}` as const,
}));
