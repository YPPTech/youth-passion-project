import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { applyRoles, PORTAL_URL, USE_PORTAL_WAITLIST } from "@/constants/site";

export default function ApplyPage() {
  return (
    <div>
      <PageHeader
        label="Apply"
        title="Apply to Join YPP"
        subtitle="Apply to become an instructor or chapter president. Use the application links below for the 25–26 cycle."
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
              Go to portal
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )
        }
      />

      {/* Roles list */}
      <section className="bg-[var(--ypp-blush)]/60 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            title="What's Available"
            subtitle="Role, age/grade, and how to apply"
          />
          <div className="mt-12 space-y-10">
            {applyRoles.map(({ id, title, ageGrade, description, details, applyLink, applyLabel }) => (
              <article
                key={id}
                id={id}
                className="card-ypp scroll-mt-24 sm:p-8"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h2 className="font-heading text-xl font-bold text-[var(--ypp-ink)]">
                      {title}
                    </h2>
                    <p className="font-body mt-1 text-sm font-medium text-[var(--ypp-primary)]">
                      {ageGrade}
                    </p>
                  </div>
                  <a
                    href={applyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 rounded-lg border-2 border-[var(--ypp-primary)] bg-[var(--ypp-white)] px-4 py-2 text-sm font-semibold text-[var(--ypp-primary)] transition-colors hover:bg-[var(--ypp-primary)] hover:text-white"
                  >
                    {applyLabel}
                  </a>
                </div>
                <p className="font-body mt-4 text-[var(--ypp-muted)] leading-relaxed">
                  {description}
                </p>
                {details && details.length > 0 && (
                  <ul className="font-body mt-4 list-inside list-disc space-y-1.5 text-sm text-[var(--ypp-muted)] leading-relaxed">
                    {details.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Portal / waitlist reminder */}
      <section className="border-t border-[var(--ypp-border)] bg-[var(--ypp-lavender)]/20 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-body text-[var(--ypp-muted)]">
            {USE_PORTAL_WAITLIST ? (
              <>
                Need to sign up for classes as a student? We're getting the portal ready.{" "}
                <Link href="/notify" className="text-[var(--ypp-primary)] font-medium hover:underline">
                  Get notified when it's live
                </Link>
                .
              </>
            ) : (
              <>
                Need to sign up for classes as a student? Visit the{" "}
                <Link href="/programs" className="text-[var(--ypp-primary)] font-medium hover:underline">
                  Programs
                </Link>{" "}
                page for sessions and links to the portal, or go directly to our{" "}
                <a
                  href={PORTAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--ypp-primary)] font-medium hover:underline"
                >
                  student portal
                </a>
                .
              </>
            )}
          </p>
        </div>
      </section>
    </div>
  );
}
