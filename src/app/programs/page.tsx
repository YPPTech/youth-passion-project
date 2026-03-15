import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import InPersonSection from "@/components/InPersonSection";
import { onlineSessions, inPersonLocations } from "@/data/programsData";
import { PORTAL_URL, USE_PORTAL_WAITLIST } from "@/constants/site";

export default function ProgramsPage() {
  return (
    <div>
      <PageHeader
        label="Programs"
        title="Programs & Classes"
        subtitle={
          USE_PORTAL_WAITLIST
            ? "We’ll notify you when the portal is ready for class sign-up."
            : "Browse online and in-person sessions. Full details, schedules, and sign-up are on our portal."
        }
        action={
          USE_PORTAL_WAITLIST ? (
            <Link href="/notify" className="btn-primary inline-flex items-center">
              Get notified when portal is ready
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ) : (
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
          )
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
          {onlineSessions.length === 0 ? (
            <div className="card-ypp mt-10 flex flex-col items-center justify-center px-6 py-16 text-center">
              <p className="font-body text-lg text-[var(--ypp-ink)]">
                No online classes available at the moment.
              </p>
              <p className="font-body mt-2 text-[var(--ypp-muted)]">
                Please check back later for new sessions.
              </p>
            </div>
          ) : (
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
          )}
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
