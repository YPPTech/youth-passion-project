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
        label="Become an Instructor"
        title="Become an Instructor"
        subtitle="Lead a course as a high school instructor, or apply to be a chapter president. Use the application links below for the 25–26 cycle."
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
            Need to sign up for classes as a student? Our student portal is{" "}
            <span className="font-medium text-[var(--ypp-primary)]">coming soon</span>. Visit our{" "}
            <Link href="/programs" className="text-[var(--ypp-primary)] font-medium hover:underline">
              Programs & Chapters
            </Link>{" "}
            page for what we offer, or email{" "}
            <a
              href={`mailto:${CONTACT_EMAILS.support}`}
              className="text-[var(--ypp-primary)] font-medium hover:underline"
            >
              {CONTACT_EMAILS.support}
            </a>{" "}
            for enrollment questions.
          </p>
        </div>
      </section>
    </div>
  );
}
