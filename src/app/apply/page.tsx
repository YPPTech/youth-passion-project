import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { applyRoles, CONTACT_EMAILS } from "@/constants/site";

export default function ApplyPage() {
  return (
    <div>
      {/* When student portal launches, add back to PageHeader:
        action={
          <span className="btn-primary inline-flex cursor-default items-center opacity-90" aria-label="Student portal coming soon">
            Coming soon
          </span>
        }
      */}
      <PageHeader
        label="Volunteer roles"
        title="Apply for a role"
        subtitle="High school students: lead a course as an instructor or apply to be a chapter president. Open a form below for the 25–26 cycle."
      />

      <section className="border-b border-[var(--ypp-border)] bg-[var(--ypp-white)] px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-body text-sm text-[var(--ypp-muted)] sm:text-base">
            Looking to enroll as a student?{" "}
            <Link href="/join" className="font-semibold text-[var(--ypp-primary)] hover:underline">
              Join Us
            </Link>{" "}
            for classes and enrollment options.
          </p>
        </div>
      </section>

      {/* Roles list */}
      <section className="bg-[var(--ypp-blush)]/60 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            title="Open applications"
            subtitle="Each link opens a Google Form in a new tab."
          />
          <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
            {applyRoles.map(({ id, title, ageGrade, applyTeaser, applyLink, applyLabel }) => (
              <article key={id} id={id} className="scroll-mt-24">
                <a
                  href={applyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-ypp group flex w-full min-h-[4.5rem] items-start justify-between gap-4 text-left no-underline outline-offset-2 transition-colors hover:border-[var(--ypp-primary)]/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ypp-primary)] focus-visible:ring-offset-2 sm:min-h-0 sm:items-center sm:gap-6"
                >
                  <div className="min-w-0 flex-1">
                    <h2 className="font-heading text-lg font-bold text-[var(--ypp-ink)] group-hover:text-[var(--ypp-primary)] sm:text-xl">
                      {title}
                    </h2>
                    <p className="font-body mt-0.5 text-xs font-medium text-[var(--ypp-primary)] sm:text-sm">
                      {ageGrade}
                    </p>
                    <p className="font-body mt-1.5 max-w-xl text-[11px] leading-snug text-[var(--ypp-muted)] sm:text-xs sm:leading-relaxed">
                      {applyTeaser}
                    </p>
                  </div>
                  <span className="flex shrink-0 items-center gap-2 self-center rounded-lg border-2 border-[var(--ypp-primary)] bg-[var(--ypp-white)] px-3 py-2 text-xs font-semibold text-[var(--ypp-primary)] transition-colors group-hover:bg-[var(--ypp-primary)] group-hover:text-white sm:px-4 sm:text-sm">
                    <span className="max-w-[10rem] leading-tight sm:max-w-none">{applyLabel}</span>
                    <svg className="h-4 w-4 shrink-0 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    <span className="sr-only"> (opens in new tab)</span>
                  </span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Portal / waitlist reminder */}
      <section className="border-t border-[var(--ypp-border)] bg-[var(--ypp-lavender)]/20 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-body text-[var(--ypp-muted)]">
            Students: portal{" "}
            <span className="font-medium text-[var(--ypp-primary)]">coming soon</span>. See{" "}
            <Link href="/join" className="font-medium text-[var(--ypp-primary)] hover:underline">
              Join Us
            </Link>
            ,{" "}
            <Link href="/programs" className="font-medium text-[var(--ypp-primary)] hover:underline">
              Programs &amp; Chapters
            </Link>
            , or email{" "}
            <a
              href={`mailto:${CONTACT_EMAILS.support}`}
              className="font-medium text-[var(--ypp-primary)] hover:underline"
            >
              {CONTACT_EMAILS.support}
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
