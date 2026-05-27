import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import {
  CONTACT_EMAILS,
  PORTAL_URL,
  TECH_MANAGER_APPLICATION_URL,
  applyRoles,
} from "@/constants/site";

const opportunityItems = [
  ...applyRoles.map((role) => ({
    title: `${role.title} application`,
    audience: role.ageGrade,
    description: role.applyTeaser,
    href: role.applyLink,
    cta: role.applyLabel,
  })),
  {
    title: "Technology Manager application",
    audience: "High school students in grades 9-10",
    description:
      "Help maintain YPP's website and portal, support technical reliability, and collaborate on digital tools.",
    href: TECH_MANAGER_APPLICATION_URL,
    cta: "Apply for Technology Manager",
  },
] as const;

export default function JoinPage() {
  return (
    <div className="min-w-0 w-full">
      <PageHeader
        label="Summer 2026 · Now Accepting Applications"
        title="Join Us"
        subtitle="High school students can apply now to teach a class, lead a chapter, or help build YPP's platform."
        action={
          <a
            href={PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center rounded-full px-6 py-3 text-base"
          >
            Open student portal
            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        }
      />

      <section className="bg-[var(--ypp-blush)]/60 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.6fr] lg:items-start">
          <aside className="rounded-2xl border border-white/80 bg-white/90 p-6 shadow-[0_14px_42px_rgba(59,15,110,0.10)] ring-1 ring-[var(--ypp-primary)]/10">
            <p className="font-label text-xs font-semibold uppercase tracking-wider text-[var(--ypp-primary)]">
              Open all week
            </p>
            <h2 className="font-heading mt-3 text-3xl font-bold leading-tight text-[var(--ypp-deep)]">
              Apply now for every open role
            </h2>
            <p className="font-body mt-4 text-sm leading-relaxed text-[var(--ypp-muted)] sm:text-base">
              Summer 2026 applications are open. Choose the role that fits how you want to help students explore what
              they love.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-2">
              {["Instructor", "Chapter President", "Tech Manager"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--ypp-primary)]/15 bg-[var(--ypp-lavender)]/45 px-3 py-2 text-center font-body text-xs font-semibold text-[var(--ypp-deep)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </aside>

          <div className="space-y-4">
            {opportunityItems.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-[var(--ypp-border)] bg-white p-5 shadow-[var(--shadow-sm)] transition-shadow hover:shadow-[0_16px_44px_rgba(59,15,110,0.10)] sm:p-6"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-[var(--ypp-lavender)] px-3 py-1 font-body text-xs font-bold text-[var(--ypp-primary)]">
                        Open now
                      </span>
                      <span className="font-body text-xs font-medium text-[var(--ypp-muted)]">
                        {item.audience}
                      </span>
                    </div>
                    <h3 className="font-heading mt-3 text-xl font-bold leading-snug text-[var(--ypp-deep)] sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="font-body mt-2 text-sm leading-relaxed text-[var(--ypp-muted)]">
                      {item.description}
                    </p>
                  </div>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body inline-flex min-h-[2.75rem] shrink-0 items-center justify-center rounded-full border-2 border-[var(--ypp-primary)] bg-[var(--ypp-white)] px-5 py-2.5 text-center text-sm font-bold text-[var(--ypp-primary)] transition-colors hover:bg-[var(--ypp-primary)] hover:text-white"
                  >
                    {item.cta}
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--ypp-border)] bg-white px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="font-body text-sm leading-relaxed text-[var(--ypp-muted)]">
            Questions about which application to choose? Email{" "}
            <a href={`mailto:${CONTACT_EMAILS.support}`} className="font-semibold text-[var(--ypp-primary)] hover:underline">
              {CONTACT_EMAILS.support}
            </a>
            .
          </p>
          <Link
            href="/apply"
            className="font-body text-sm font-semibold text-[var(--ypp-primary)] underline decoration-[var(--ypp-primary)]/40 underline-offset-2 hover:text-[var(--ypp-deep)]"
          >
            View Apply page
          </Link>
        </div>
      </section>
    </div>
  );
}
