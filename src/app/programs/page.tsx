import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import InPersonSection from "@/components/InPersonSection";
import { onlineSessions, inPersonLocations } from "@/data/programsData";

const programModelLinkClass =
  "font-medium text-[var(--ypp-primary)] underline decoration-[var(--ypp-primary)]/40 underline-offset-2 transition-colors hover:text-[var(--ypp-deep)] hover:decoration-[var(--ypp-primary)]";

const sectionScrollClass = "scroll-mt-[calc(var(--ypp-nav-height)+0.75rem)]";

const programTypes = [
  {
    title: "YPP Chapters",
    description: "In-person at partner schools",
    sectionId: "ypp-chapters",
  },
  {
    title: "Special Opportunities",
    description: "Passion Labs, competitions, events",
    sectionId: "special-opportunities",
  },
  {
    title: "Online Offerings",
    description: "Where available",
    sectionId: "online-offerings",
  },
] as const;

function ProgramModelCopy({ className }: { className?: string }) {
  return (
    <p className={className}>
      Programs run through YPP&apos;s partner school chapters. New sessions launch regularly — sign up for our
      newsletter or{" "}
      <Link href="/notify" className={programModelLinkClass}>
        get notified when the Student Portal is ready
      </Link>{" "}
      to enroll and stay updated.
    </p>
  );
}

export default function ProgramsPage() {
  const noOnline = onlineSessions.length === 0;
  const noInPerson = inPersonLocations.length === 0;
  const bothListingsEmpty = noOnline && noInPerson;

  return (
    <div className="w-full min-w-0">
      {/* When student portal launches, add back to PageHeader:
        action={
          <span className="btn-primary inline-flex cursor-default items-center opacity-90" aria-label="Student portal coming soon">
            Coming soon
          </span>
        }
      */}
      <PageHeader
        label="Programs & Chapters"
        title="Programs & Classes"
        subtitle="Browse how YPP shows up near you and online. Our student portal is coming soon—sign-up will be available there when it launches."
      />

      <section className="border-b border-[var(--ypp-border)] bg-[var(--ypp-white)] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-6xl min-w-0">
          <h2 className="sr-only">Program types</h2>
          <p className="font-body mx-auto max-w-3xl text-center text-pretty text-base leading-relaxed text-[var(--ypp-muted)] sm:text-lg">
            Our programs span <span className="font-medium text-[var(--ypp-ink)]">subjects, formats, and locations</span>
            —so you can follow your curiosity as a learner, or share what you love as an instructor, in whatever shape
            fits you best.
          </p>
          <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:items-stretch">
            {programTypes.map(({ title, description, sectionId }) => (
              <li key={title} className="min-w-0">
                <a
                  href={`#${sectionId}`}
                  aria-label={`Jump to ${title} section`}
                  className="flex h-full min-h-0 flex-col rounded-2xl border border-[var(--ypp-border)] bg-[var(--ypp-blush)]/40 px-5 py-5 text-left shadow-[var(--shadow-sm)] no-underline transition-colors hover:border-[var(--ypp-primary)]/35 hover:bg-[var(--ypp-lavender)]/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ypp-primary)] focus-visible:ring-offset-2"
                >
                  <h3 className="font-heading text-balance text-lg font-bold text-[var(--ypp-deep)] sm:text-xl">{title}</h3>
                  <p className="font-body mt-2 text-pretty text-sm leading-snug text-[var(--ypp-muted)] sm:text-base">{description}</p>
                  <span className="font-body mt-3 inline-flex items-center text-xs font-semibold text-[var(--ypp-primary)] sm:text-sm">
                    View section <span aria-hidden>→</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className="font-body mx-auto mt-10 max-w-2xl text-center text-pretty text-sm text-[var(--ypp-muted)] sm:text-base">
            Interested in building a curriculum for YPP?{" "}
            <Link href="/apply" className={`inline-flex items-center gap-1 ${programModelLinkClass}`}>
              Apply to Teach
              <span aria-hidden>→</span>
            </Link>
          </p>
        </div>
      </section>

      {bothListingsEmpty && (
        <section className="border-b border-[var(--ypp-border)] bg-[var(--ypp-white)] px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-3xl min-w-0">
            <div className="card-ypp border-[var(--ypp-primary)]/25 bg-[var(--ypp-lavender)]/15 px-6 py-8 text-center sm:px-8">
              <ProgramModelCopy className="font-body text-base leading-relaxed text-[var(--ypp-ink)] sm:text-lg" />
            </div>
          </div>
        </section>
      )}

      {/* In-person map + list */}
      <section
        id="ypp-chapters"
        className={`bg-[var(--ypp-blush)]/60 px-4 py-16 sm:px-6 lg:px-8 ${sectionScrollClass}`}
      >
        <div className="mx-auto w-full max-w-6xl min-w-0">
          <SectionHeading
            title="YPP Chapters"
            subtitle="In-person programs at partner schools"
          />
          <InPersonSection
            locations={inPersonLocations}
            compactEmptyState={bothListingsEmpty}
            emptyStateIntro={<ProgramModelCopy />}
          />
        </div>
      </section>

      {/* Special opportunities (static overview) */}
      <section
        id="special-opportunities"
        className={`border-y border-[var(--ypp-border)] bg-[var(--ypp-white)] px-4 py-16 sm:px-6 lg:px-8 ${sectionScrollClass}`}
      >
        <div className="mx-auto w-full max-w-6xl min-w-0">
          <SectionHeading
            title="Special Opportunities"
            subtitle="Passion Labs, competitions, and events beyond the regular chapter week"
          />
          <div className="card-ypp mx-auto mt-10 max-w-3xl px-6 py-8 sm:px-8">
            <p className="font-body text-center text-pretty text-base leading-relaxed text-[var(--ypp-ink)] sm:text-lg">
              One-off labs, friendly competitions, and community events pop up across the network. Timing and
              registration vary—when our student portal launches, you&apos;ll see what&apos;s open and how to join.
              Until then,{" "}
              <Link href="/notify" className={programModelLinkClass}>
                get notified when the Student Portal is ready
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Online list */}
      <section
        id="online-offerings"
        className={`bg-[var(--ypp-lavender)]/20 px-4 py-16 sm:px-6 lg:px-8 ${sectionScrollClass}`}
      >
        <div className="mx-auto w-full max-w-6xl min-w-0">
          <SectionHeading
            title="Online Offerings"
            subtitle="Live online sessions where we run them—platform and format vary by class. Full details and sign-up will be on our student portal when it launches."
          />
          {onlineSessions.length === 0 ? (
            <div className="card-ypp mt-10 flex flex-col items-center justify-center px-6 py-16 text-center">
              {!bothListingsEmpty && (
                <ProgramModelCopy className="font-body max-w-2xl text-base leading-relaxed text-[var(--ypp-ink)] sm:text-lg" />
              )}
              <p
                className={`font-body text-lg text-[var(--ypp-ink)] ${bothListingsEmpty ? "" : "mt-8"}`}
              >
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
                  className="card-ypp min-w-0"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
                    <h3 className="font-heading min-w-0 text-balance text-lg font-semibold text-[var(--ypp-ink)]">
                      {session}
                    </h3>
                    <span className="shrink-0 text-sm text-[var(--ypp-muted)] sm:text-right">{location}</span>
                  </div>
                  <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
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
        <div className="mx-auto w-full max-w-3xl min-w-0 text-center">
          <p className="font-body text-pretty text-[var(--ypp-muted)]">
            Descriptions, age ranges, grades, and instructor profiles will be
            available on the student portal when it launches. For a sample of
            how a chapter week can look, see our{" "}
            <Link
              href="/programs/calendar"
              className="text-[var(--ypp-primary)] font-medium hover:underline"
            >
              weekly schedule preview
            </Link>
            .
          </p>
          <p className="font-body mt-6 text-sm text-[var(--ypp-muted)] sm:text-base">
            Want to teach?{" "}
            <Link href="/apply" className={`font-medium ${programModelLinkClass}`}>
              Apply to Teach →
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
