import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export default function JoinPage() {
  return (
    <div className="min-w-0 w-full">
      <PageHeader
        label="Get involved"
        title="Join Us"
        subtitle="High school students: apply to teach a class or lead a chapter."
      />

      <section className="bg-[var(--ypp-blush)]/60 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg min-w-0">
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
      </section>
    </div>
  );
}
