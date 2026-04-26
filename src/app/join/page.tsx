import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export default function JoinPage() {
  return (
    <div className="min-w-0 w-full">
      <PageHeader
        label="Get involved"
        title="Join Us"
        subtitle="High school students: apply to teach a class, lead a chapter, or help build YPP's platform."
      />

      <section className="bg-[var(--ypp-blush)]/60 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl min-w-0">
          <div className="grid min-w-0 grid-cols-1 gap-6 lg:grid-cols-2 lg:items-stretch">
            <article className="min-h-0 min-w-0 rounded-2xl border border-[var(--ypp-border)] bg-[var(--ypp-white)] p-6 shadow-[var(--shadow-sm)] sm:p-8">
            <div className="flex items-center gap-2">
              <span className="h-px w-8 shrink-0 bg-[var(--ypp-primary)]" aria-hidden />
              <p className="font-label text-[11px] font-semibold uppercase tracking-wider text-[var(--ypp-primary)] sm:text-xs">
                Open role
              </p>
            </div>
            <h2 className="font-heading mt-3 text-xl font-bold text-[var(--ypp-deep)] sm:text-2xl">
              Technology Manager
            </h2>
            <p className="font-body mt-2 text-sm leading-relaxed text-[var(--ypp-muted)] sm:text-base">
              Design engaging ways to present YPP online and help oversee improvements to the portal and website.
            </p>
            <ul className="mt-4 space-y-2 pl-5 font-body text-sm leading-relaxed text-[var(--ypp-muted)] sm:text-[15px]">
              <li className="list-disc">Eligibility: grades 9–10 (experience required).</li>
              <li className="list-disc">Maintain and troubleshoot technical issues for reliability.</li>
              <li className="list-disc">Collaborate with design and outreach on digital tools and content.</li>
            </ul>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf8AzWsbi6QNY2F8DUkPk1xdoSErIm7F2EhfpPCZGGhgKeLrA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary font-body mt-6 inline-flex min-h-[2.75rem] w-full items-center justify-center rounded-xl px-4 py-3 text-center text-sm font-semibold"
            >
              Apply for Technology Manager
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </article>

            <article
              id="teach-or-lead"
              className="scroll-mt-[calc(var(--ypp-nav-height)+0.75rem)] flex min-h-0 min-w-0 flex-col rounded-2xl border-2 border-[var(--ypp-primary)]/35 bg-[var(--ypp-white)] p-6 shadow-[var(--shadow-sm)] sm:p-8"
            >
              <h2 className="font-heading text-xl font-bold text-[var(--ypp-deep)] sm:text-2xl">Teach or lead</h2>
              <p className="font-body mt-2 flex-1 text-sm leading-relaxed text-[var(--ypp-muted)] sm:text-base">
                Choose an application to get started.
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                <li>
                  <Link
                    href="/apply#instructor"
                    className="font-body inline-flex min-h-[2.75rem] w-full items-center justify-center rounded-xl border-2 border-[var(--ypp-primary)] bg-[var(--ypp-primary)] px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[var(--ypp-deep)]"
                  >
                    Instructor application
                  </Link>
                </li>
                <li>
                  <Link
                    href="/apply#chapter-president"
                    className="font-body inline-flex min-h-[2.75rem] w-full items-center justify-center rounded-xl border border-[var(--ypp-border)] bg-[var(--ypp-blush)]/50 px-4 py-3 text-center text-sm font-semibold text-[var(--ypp-ink)] transition-colors hover:border-[var(--ypp-primary)]/35 hover:bg-[var(--ypp-lavender)]/40"
                  >
                    Chapter President application
                  </Link>
                </li>
                <li>
                  <Link
                    href="/apply"
                    className="font-body text-center text-sm font-semibold text-[var(--ypp-primary)] underline decoration-[var(--ypp-primary)]/40 underline-offset-2 hover:text-[var(--ypp-deep)]"
                  >
                    All volunteer roles
                  </Link>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
