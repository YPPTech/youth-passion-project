/**
 * Site-wide copy and data aligned with youthpassionproject.org
 * (Trigger deploy)
 */

/** Pathways Portal (student registration, course catalog, instructor applications). Temp domain; may change. */
export const PORTAL_URL = "https://youthpassionproject-portal.vercel.app";

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
  /** In-person instructor support */
  inPersonInstructors: "in-person-instructors@youthpassionproject.org",
  /** Online instructor support */
  onlineInstructorSupport: "online-instructor-support@youthpassionproject.org",
} as const;

export const statsByTheNumbers = [
  { value: "3,200+", label: "Lifetime Student Sign-ups" },
  { value: "200+", label: "Carefully Selected Instructors" },
  { value: "400+", label: "Sections Taught of 110+ Unique Courses" },
  { value: "7", label: "Average Class Size" },
  { value: "30+", label: "US States Represented" },
  { value: "30+", label: "Countries of Engagement" },
] as const;

export const hiringRolePills = [
  "Program Coordinator",
  "Instructor — STEM",
  "Community Outreach",
  "Volunteer Mentor",
] as const;

export const openPositions = [
  {
    title: "Program Coordinator",
    description:
      "Help coordinate scheduling, instructor onboarding, and session management across our growing platform.",
    href: "/apply",
  },
  {
    title: "Instructor — STEM",
    description:
      "Teach a course in your passion to younger students. Open to high school students. STEM and all subjects welcome.",
    href: "/apply",
  },
  {
    title: "Community Outreach",
    description: "Spread the word about YPP in your school and community. Social media, partnerships, and recruitment.",
    href: "/apply",
  },
] as const;

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
    description: "Students gain skills, knowledge, and confidence through hands-on peer teaching.",
  },
  {
    title: "Lead",
    description: "High schoolers develop real leadership experience as instructors and coordinators.",
  },
  {
    title: "Connect",
    description: "A global community spanning 30+ states and countries united by curiosity.",
  },
  {
    title: "Create",
    description: "Students produce real projects, art, code, and ideas that matter to them.",
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

/** Newest courses for homepage — quick display; full details on programs page / portal. */
export const newestCourses = [
  {
    name: "Introduction to Coding in Java",
    delivery: "online" as const,
    chapter: null,
    grades: "6–9",
    ages: "11–14",
    summary: "Learn basics of Java through hands-on projects and exercises.",
    href: PORTAL_URL,
  },
  {
    name: "Songwriting & Music",
    delivery: "online" as const,
    chapter: null,
    grades: "4–8",
    ages: "9–13",
    summary: "Write lyrics and melodies and explore what makes a song work.",
    href: PORTAL_URL,
  },
  {
    name: "Art of Baking",
    delivery: "in-person" as const,
    chapter: "Wilmington, DE",
    grades: "5–8",
    ages: "10–13",
    summary: "Hands-on baking and pastry basics in our Delaware chapter.",
    href: PORTAL_URL,
  },
  {
    name: "Creative Writing",
    delivery: "online" as const,
    chapter: null,
    grades: "5–9",
    ages: "10–14",
    summary: "Short stories, poetry, and finding your writer's voice.",
    href: PORTAL_URL,
  },
];

