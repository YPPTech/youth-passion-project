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

export const statsByTheNumbers = [
  { value: "3,400+", label: "Lifetime Student Sign-ups" },
  { value: "200+", label: "Carefully Selected Instructors" },
  { value: "400+", label: "Sections Taught of 110+ Unique Courses" },
  { value: "7", label: "Average Class Size" },
  { value: "30+", label: "US States Represented" },
  { value: "30+", label: "Countries of Engagement" },
] as const;

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
    applyTeaser: "Teach a course you love—weekly sessions online or in person.",
    shortDescription:
      "Teach a course in your passion to younger students. Design or follow a curriculum, run weekly sessions online or in person. Training and support provided.",
    description:
      "Teach a course in your passion to younger students. You'll design or follow a curriculum, run weekly sessions online (e.g., Zoom) or in person at chapter locations, and help students practice and grow. Classes typically run 30–60 minutes, 1–2 times per week.",
    details: [
      "Selective application process; we provide training and ongoing support.",
      "You'll share your course idea or topic and how you'd structure sessions.",
      "Mentorship is available from experienced officers (college advice, role guidance, and beyond).",
      "Part of a global community—past instructors have been accepted to top universities nationwide.",
    ],
    applyLink: INSTRUCTOR_APPLICATION_URL,
    applyLabel: "Instructor application (25–26)",
  },
  {
    id: "chapter-president",
    title: "Chapter President",
    ageGrade: "High school students (grades 9–12)",
    applyTeaser: "Lead a YPP chapter—recruit instructors and host local programs.",
    shortDescription:
      "Launch and run a YPP chapter in your community. Lead recruitment and support of instructors, plan classes and events. We recommend contacting your school first.",
    description:
      "Coordinate the launch and operation of a YPP chapter in your community. Lead recruitment and support of student volunteers and instructors, plan classes and events, and serve as the link between YPP and your school.",
    details: [
      "We recommend reaching out to your school administration about establishing a chapter before applying.",
      "The form asks about your school, grade, and why you want to lead a chapter.",
      "You'll outline how you'd recruit instructors and run local sessions.",
      "Ongoing support and resources from YPP leadership to help your chapter succeed.",
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

export const valuePills = [
  { label: "Grow" },
  { label: "Lead" },
  { label: "Connect" },
  { label: "Create" },
] as const;

/** Who We Are section: value propositions with title and description. */
export const valueItems = [
  {
    title: "Grow",
    description:
      "Build real skills through instruction by peers who are deeply passionate about what they teach.",
  },
  {
    title: "Lead",
    description:
      "Take on leadership as instructors, chapter presidents, and officers to grow beyond the ordinary classroom.",
  },
  {
    title: "Connect",
    description:
      "Join a community spanning 30+ US states and countries around the world who have the same purpose.",
  },
  {
    title: "Create",
    description:
      "Turn your passion into something real such as projects, communities, and lasting impact.",
  },
] as const;

export const missionOneLiner =
  "Connecting young individuals with meaningful experiences, education, and leadership opportunities that ignite lifelong purpose.";

export const visionOneLiner =
  "A world where every young person has the tools, support, and confidence to pursue their passion and create positive change.";

export const featuredPrograms = [
  {
    title: "STEM Innovation Lab",
    description:
      "Hands-on engineering and science challenges. Robotics, coding, and design thinking for future innovators.",
    href: "/programs",
    icon: "microscope",
  },
  {
    title: "Creative Arts Collective",
    description:
      "Songwriting, visual art, and creative writing. Explore and share your artistic passions with peers.",
    href: "/programs",
    icon: "palette",
  },
  {
    title: "Leadership & Civic Action",
    description:
      "Build confidence and skills to lead. From public speaking to community projects and peer mentorship.",
    href: "/programs",
    icon: "graduation",
  },
] as const;
