import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { CONTACT_EMAILS } from "@/constants/site";

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        label="Contact"
        title="Contact Us"
        subtitle="Reach us anytime at our main support email—we’ll route your message to the right team."
      />

      {/* General contact emails */}
      <section className="bg-[var(--ypp-blush)]/60 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <SectionHeading
            title="General Contact"
            subtitle="Enrollment, programs, partnerships, or anything else—send one message and we’ll help."
          />
          <div className="relative mt-10 overflow-hidden rounded-2xl border-2 border-[var(--ypp-primary)]/30 bg-[var(--ypp-white)] px-6 py-10 text-center shadow-[var(--shadow-lg)] sm:px-10 sm:py-12">
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--ypp-lavender)]/40 via-transparent to-[var(--ypp-blush)]/50"
              aria-hidden
            />
            <div className="relative">
              <p className="font-body text-sm font-medium text-[var(--ypp-muted)] sm:text-base">
                Main inbox (students, families, instructors, and partners)
              </p>
              <a
                href={`mailto:${CONTACT_EMAILS.support}`}
                className="mt-6 inline-flex max-w-full flex-wrap items-center justify-center gap-3 break-all font-heading text-2xl font-bold tracking-tight text-[var(--ypp-primary)] transition-colors hover:text-[var(--ypp-deep)] hover:underline sm:break-normal sm:text-3xl md:text-4xl md:leading-tight"
              >
                {CONTACT_EMAILS.support}
                <svg
                  className="h-7 w-7 shrink-0 sm:h-8 sm:w-8 md:h-9 md:w-9"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Link to About / staff */}
      <section className="border-t border-[var(--ypp-border)] bg-[var(--ypp-lavender)]/20 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading
            title="Meet Our Team"
            subtitle="Leadership, online instructors, chapter presidents, and the people behind Youth Passion Project."
          />
          <Link
            href="/about#staff"
            className="btn-primary mt-8 inline-flex items-center gap-2 px-5 py-2.5 font-semibold"
          >
            About us &amp; staff
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
