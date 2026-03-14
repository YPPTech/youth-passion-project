/**
 * Site-wide copy and data aligned with youthpassionproject.org
 * (Trigger deploy)
 */

/** Pathways Portal (student registration, course catalog, instructor applications). Temp domain; may change. */
export const PORTAL_URL = "https://youthpassionproject-portal.vercel.app";

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

export const mailingListSubtitle =
  "Receive updates about registration and upcoming sessions.";

export const mailingListSuccessMessage = "We're excited to be in touch!";
