import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { PORTAL_URL } from "@/constants/site";

const onlineSessions = [
  {
    session: "Spring 2025",
    location: "Online (Zoom)",
    classes: [
      { name: "Introduction to Coding in Java", grades: "6–9", link: PORTAL_URL },
      { name: "Songwriting & Music", grades: "4–8", link: PORTAL_URL },
      { name: "Art of Baking", grades: "5–8", link: PORTAL_URL },
      { name: "Creative Writing", grades: "5–9", link: PORTAL_URL },
    ],
  },
];

const inPersonLocations = [
  { city: "Wilmington, DE", state: "Delaware", sessions: "Fall & Spring" },
  { city: "Philadelphia area", state: "Pennsylvania", sessions: "Spring" },
];

export default function ProgramsPage() {
  return (
    <div>
      <PageHeader
        label="Programs"
        title="Programs & classes"
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
            title="In-person programs"
            subtitle="Where we run local sessions"
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="card-ypp">
              <h3 className="font-heading font-semibold text-[var(--ypp-ink)]">Map</h3>
              <div className="mt-4 aspect-video w-full overflow-hidden rounded-lg bg-[var(--ypp-border)]">
                {/* Placeholder map: replace with a real map component (e.g. Mapbox, Google Maps) or embedded iframe */}
                <div className="flex h-full items-center justify-center text-[var(--ypp-muted)] text-sm">
                  Map: DE, PA (in-person locations)
                </div>
              </div>
            </div>
            <div className="card-ypp">
              <h3 className="font-heading font-semibold text-[var(--ypp-ink)]">Locations & sessions</h3>
              <ul className="mt-4 space-y-4">
                {inPersonLocations.map(({ city, state, sessions }) => (
                  <li
                    key={`${city}-${state}`}
                    className="flex flex-col gap-1 border-b border-[var(--ypp-border)] pb-4 last:border-0 last:pb-0"
                  >
                    <span className="font-medium text-[var(--ypp-ink)]">
                      {city}, {state}
                    </span>
                    <span className="text-sm text-[var(--ypp-muted)]">
                      Sessions: {sessions}
                    </span>
                    <a
                      href={PORTAL_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 text-sm font-medium text-[var(--ypp-primary)] hover:underline"
                    >
                      View classes & sign up →
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Online list */}
      <section className="bg-[var(--ypp-lavender)]/20 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Online programs"
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
                <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                  {classes.map(({ name, grades, link }) => (
                    <li key={name}>
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-ypp block p-4 transition-colors hover:border-[var(--ypp-primary)]/50 hover:bg-[var(--ypp-lavender)]/20"
                      >
                        <span className="font-medium text-[var(--ypp-ink)]">
                          {name}
                        </span>
                        <span className="mt-1 block text-sm text-[var(--ypp-muted)]">
                          Grades {grades}
                        </span>
                        <span className="mt-2 inline-block text-sm font-medium text-[var(--ypp-primary)]">
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
