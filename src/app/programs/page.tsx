import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import InPersonSection from "@/components/InPersonSection";
import { PORTAL_URL } from "@/constants/site";

const onlineSessions = [
  {
    session: "Spring 2026",
    location: "Online (Zoom)",
    classes: [
      {
        name: "Introduction to Coding in Java",
        grades: "Grades 6–9",
        description:
          "Learn the fundamentals of programming with Java. Students write real code, build small projects, and develop problem-solving skills. No prior experience required—ideal for middle schoolers curious about computer science.",
        link: PORTAL_URL,
      },
      {
        name: "Songwriting & Music",
        grades: "Grades 4–8",
        description:
          "Explore melody, lyrics, and basic music theory while writing your own songs. From idea to finished piece, with guidance on structure, rhyme, and simple arrangements. Bring your instrument or use your voice.",
        link: PORTAL_URL,
      },
      {
        name: "Art of Baking",
        grades: "Grades 5–8",
        description:
          "Hands-on baking from scratch: cookies, quick breads, and simple pastries. Learn measuring, mixing, and oven safety while building confidence in the kitchen. Recipes are chosen so students can practice at home.",
        link: PORTAL_URL,
      },
      {
        name: "Creative Writing",
        grades: "Grades 5–9",
        description:
          "Develop your voice through short stories, poetry, and personal narratives. Focus on character, setting, and revision in a supportive workshop setting. Great for students who love to read and want to write more.",
        link: PORTAL_URL,
      },
    ],
  },
];

const inPersonLocations = [
  {
    id: "wilmington-de",
    city: "Wilmington, DE",
    state: "Delaware",
    sessions: "Fall & Spring",
    classes: [
      {
        name: "Introduction to Coding in Java",
        grades: "Grades 6–9",
        description:
          "Learn programming fundamentals with Java. Build small projects and develop problem-solving skills. No prior experience required.",
        link: PORTAL_URL,
      },
      {
        name: "Songwriting & Music",
        grades: "Grades 4–8",
        description:
          "Explore melody, lyrics, and music theory while writing your own songs. Bring your instrument or use your voice.",
        link: PORTAL_URL,
      },
      {
        name: "Creative Writing",
        grades: "Grades 5–9",
        description:
          "Short stories, poetry, and personal narratives in a supportive workshop. Focus on character, setting, and revision.",
        link: PORTAL_URL,
      },
    ],
  },
  {
    id: "philadelphia-pa",
    city: "Philadelphia area",
    state: "Pennsylvania",
    sessions: "Spring",
    classes: [
      {
        name: "Art of Baking",
        grades: "Grades 5–8",
        description:
          "Hands-on baking from scratch: cookies, quick breads, and simple pastries. Learn measuring, mixing, and oven safety.",
        link: PORTAL_URL,
      },
      {
        name: "Introduction to Coding in Java",
        grades: "Grades 6–9",
        description:
          "Learn programming fundamentals with Java. Build small projects and develop problem-solving skills.",
        link: PORTAL_URL,
      },
    ],
  },
];

export default function ProgramsPage() {
  return (
    <div>
      <PageHeader
        label="Programs"
        title="Programs & Classes"
        subtitle="Browse online and in-person sessions. Full details, schedules, and sign-up are on our portal."
        action={
          <a
            href={PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            Open student portal
            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        }
      />

      {/* In-person map + list */}
      <section className="bg-[var(--ypp-blush)]/60 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="In-Person Programs"
            subtitle="Where we run local sessions"
          />
          <InPersonSection locations={inPersonLocations} />
        </div>
      </section>

      {/* Online list */}
      <section className="bg-[var(--ypp-lavender)]/20 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Online Classes"
            subtitle="Sessions and classes (Zoom). All linked to the portal for full details and sign-up."
          />
          <div className="mt-10 space-y-8">
            {onlineSessions.map(({ session, location, classes }) => (
              <div
                key={session}
                className="card-ypp"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-heading text-lg font-semibold text-[var(--ypp-ink)]">
                    {session}
                  </h3>
                  <span className="text-sm text-[var(--ypp-muted)]">{location}</span>
                </div>
                <ul className="mt-6 grid gap-6 sm:grid-cols-2">
                  {classes.map(({ name, grades, description, link }) => (
                    <li key={name}>
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-ypp block p-5 transition-colors hover:border-[var(--ypp-primary)]/50 hover:bg-[var(--ypp-lavender)]/20"
                      >
                        <h4 className="font-heading text-lg font-semibold text-[var(--ypp-ink)]">
                          {name}
                        </h4>
                        <p className="mt-1 text-sm font-medium text-[var(--ypp-primary)]">
                          {grades}
                        </p>
                        <p className="mt-3 font-body text-sm text-[var(--ypp-muted)] leading-relaxed">
                          {description}
                        </p>
                        <span className="mt-4 inline-block text-sm font-semibold text-[var(--ypp-primary)]">
                          Full details & sign up →
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Class descriptions note + Calendar link */}
      <section className="border-t border-[var(--ypp-border)] bg-[var(--ypp-white)] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-body text-[var(--ypp-muted)]">
            Descriptions, age ranges, grades, and instructor profiles are
            available on the portal when you open each course. For a full
            calendar of dates and events, see our{" "}
            <Link
              href="/programs/calendar"
              className="text-[var(--ypp-primary)] font-medium hover:underline"
            >
              calendar
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
