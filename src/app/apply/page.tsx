import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { applyRoles, CONTACT_EMAILS, PORTAL_URL } from "@/constants/site";

export default function ApplyPage() {
  return (
    <div className="min-w-0 w-full">
      <PageHeader
        label="Summer 2026 · Now Accepting Applications"
        title="Apply for a role"
        subtitle="High school students: apply to teach a class or lead a chapter for the Summer 2026 application cycle."
      />

      <section className="border-b border-[var(--ypp-border)] bg-[var(--ypp-white)] px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-body text-sm text-[var(--ypp-muted)] sm:text-base">
            Enrolling as a student? Use the{" "}
            <a
              href={PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[var(--ypp-primary)] hover:underline"
            >
              student portal
            </a>
            .
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
                  className="card-ypp group flex w-full flex-col gap-5 !p-5 text-left no-underline outline-offset-2 transition-colors hover:border-[var(--ypp-primary)]/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ypp-primary)] focus-visible:ring-offset-2 sm:!p-8 sm:flex-row sm:items-center sm:justify-between sm:gap-8"
                >
                  <div className="min-w-0 flex-1">
                    <h2 className="font-heading text-xl font-bold text-[var(--ypp-ink)] group-hover:text-[var(--ypp-primary)]">
                      {title}
                    </h2>
                    <p className="font-body mt-1 text-sm font-medium text-[var(--ypp-primary)]">
                      {ageGrade}
                    </p>
                    <p className="font-body mt-2 text-sm leading-relaxed text-[var(--ypp-muted)]">
                      {applyTeaser}
                    </p>
                  </div>
                  <span className="flex w-full shrink-0 items-center justify-center gap-2 rounded-xl border-2 border-[var(--ypp-primary)] bg-[var(--ypp-white)] px-4 py-3.5 text-sm font-semibold text-[var(--ypp-primary)] transition-colors group-hover:bg-[var(--ypp-primary)] group-hover:text-white sm:w-auto sm:justify-center sm:self-center sm:px-4 sm:py-2.5">
                    <span className="text-center leading-snug">{applyLabel}</span>
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

      {/* Portal reminder */}
      <section className="border-t border-[var(--ypp-border)] bg-[var(--ypp-lavender)]/20 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-body text-[var(--ypp-muted)]">
            Students can register through the{" "}
            <a
              href={PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[var(--ypp-primary)] hover:underline"
            >
              student portal
            </a>
            . For program details, visit{" "}
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
