import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import InPersonSection from "@/components/InPersonSection";
import { onlineSessions, inPersonLocations } from "@/data/programsData";

export default function ProgramsPage() {
  return (
    <div>
      <PageHeader
        label="Programs"
        title="Programs & Classes"
        subtitle="Browse online and in-person sessions. Our student portal is coming soon—sign-up will be available there when it launches."
        action={
          <span className="btn-primary inline-flex cursor-default items-center opacity-90" aria-label="Student portal coming soon">
            Coming soon
          </span>
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
            subtitle="Sessions and classes (Zoom). Full details and sign-up will be on our student portal when it launches."
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
                    {classes.map(({ name, grades, description, link }) => {
                      const hasLink = link.trim().length > 0;
                      const body = (
                        <>
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
                            {hasLink ? "Full details & sign up →" : "Coming soon"}
                          </span>
                        </>
                      );
                      return (
                        <li key={name}>
                          {hasLink ? (
                            <a
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="card-ypp block p-5 transition-colors hover:border-[var(--ypp-primary)]/50 hover:bg-[var(--ypp-lavender)]/20"
                            >
                              {body}
                            </a>
                          ) : (
                            <div className="card-ypp block p-5">{body}</div>
                          )}
                        </li>
                      );
                    })}
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
            Descriptions, age ranges, grades, and instructor profiles will be
            available on the student portal when it launches. For a full
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
