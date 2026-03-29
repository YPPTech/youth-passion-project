import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { CONTACT_EMAILS } from "@/constants/site";

function EmailWithBreak({ addr }: { addr: string }) {
  const i = addr.indexOf("@");
  if (i === -1) return addr;
  return (
    <>
      {addr.slice(0, i + 1)}
      <wbr />
      {addr.slice(i + 1)}
    </>
  );
}

export default function ContactPage() {
  const supportMail = CONTACT_EMAILS.support;

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
          <div className="relative mt-8 overflow-hidden rounded-2xl border-2 border-[var(--ypp-primary)]/30 bg-[var(--ypp-white)] px-5 py-7 shadow-[var(--shadow-lg)] sm:px-8 sm:py-8">
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--ypp-lavender)]/40 via-transparent to-[var(--ypp-blush)]/50"
              aria-hidden
            />
            <div className="relative mx-auto w-full max-w-xl">
              <p
                id="contact-general-inbox-desc"
                className="font-body text-base font-medium leading-snug text-[var(--ypp-muted)] sm:text-lg"
              >
                Main inbox (students, families, instructors, and partners)
              </p>
              <a
                href={`mailto:${supportMail}`}
                aria-describedby="contact-general-inbox-desc"
                className="group mt-4 flex w-full min-w-0 items-start gap-3 rounded-xl py-1.5 pr-2 text-[var(--ypp-deep)] no-underline outline-offset-2 transition-colors hover:text-[var(--ypp-primary)] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ypp-primary)] focus-visible:ring-offset-2 sm:mt-5 sm:gap-3 sm:py-2"
              >
                <svg
                  className="mt-0.5 h-6 w-6 shrink-0 text-[var(--ypp-primary)] group-hover:text-[var(--ypp-mid)] sm:mt-1 sm:h-7 sm:w-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="min-w-0 flex-1 break-words font-heading text-lg font-semibold leading-snug sm:text-xl md:text-2xl md:leading-snug">
                  <EmailWithBreak addr={supportMail} />
                </span>
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
