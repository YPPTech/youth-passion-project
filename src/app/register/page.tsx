import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import {
  CONTACT_EMAILS,
  WORKSHOP_REGISTRATION_URL,
} from "@/constants/site";

export const metadata: Metadata = {
  title: "Register for Classes | Youth Passion Project",
  description:
    "Register for Youth Passion Project classes and in-person workshops.",
};

export default function RegisterPage() {
  return (
    <div className="min-w-0 w-full">
      <PageHeader
        label="Open Now · In Person"
        title="Register for Classes"
        subtitle="Sign up for YPP’s workshop at the Scarsdale Public Library."
      />

      <section className="relative overflow-hidden border-b border-[var(--ypp-border)] bg-gradient-to-b from-[var(--ypp-lavender)]/55 via-[var(--ypp-blush)] to-[#faf8ff] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-10%,rgba(139,63,232,0.18),transparent_55%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-[2rem] border-2 border-[var(--ypp-primary)]/25 bg-white shadow-[0_24px_80px_rgba(59,15,110,0.16)] ring-1 ring-[var(--ypp-primary)]/10">
            <div className="border-b border-[var(--ypp-border)] bg-[var(--ypp-deep)] px-6 py-5 text-center sm:px-10 sm:py-6">
              <p className="font-label text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                Scarsdale Public Library
              </p>
              <p className="font-heading mt-2 text-2xl font-bold text-white sm:text-3xl">
                YPP Workshop Registration
              </p>
            </div>

            <div className="px-6 py-10 text-center sm:px-12 sm:py-14 lg:px-16">
              <span className="inline-flex rounded-full bg-[var(--ypp-lavender)] px-4 py-1.5 font-body text-sm font-bold text-[var(--ypp-primary)]">
                Open now
              </span>
              <h2 className="font-heading mt-6 text-balance text-4xl font-bold tracking-tight text-[var(--ypp-deep)] sm:text-5xl lg:text-6xl">
                Sign up for a workshop
              </h2>
              <p className="font-body mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-[var(--ypp-muted)] sm:text-xl">
                Join us at the Scarsdale Public Library. Open to students and families — fill out the registration
                form to save your spot.
              </p>

              <a
                href={WORKSHOP_REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-10 inline-flex min-h-[3.5rem] items-center justify-center gap-3 rounded-full px-10 py-4 text-lg font-bold shadow-[0_12px_40px_rgba(107,33,200,0.45)] sm:px-14 sm:text-xl"
              >
                Register for workshop
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>

              <p className="font-body mt-6 text-sm text-[var(--ypp-muted)]">
                Opens the official YPP workshop registration form.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--ypp-border)] bg-white px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="font-body text-sm leading-relaxed text-[var(--ypp-muted)]">
            Questions about classes or registration? Email{" "}
            <a
              href={`mailto:${CONTACT_EMAILS.support}`}
              className="font-semibold text-[var(--ypp-primary)] hover:underline"
            >
              {CONTACT_EMAILS.support}
            </a>
            .
          </p>
          <Link
            href="/programs"
            className="font-body text-sm font-semibold text-[var(--ypp-primary)] underline decoration-[var(--ypp-primary)]/40 underline-offset-2 hover:text-[var(--ypp-deep)]"
          >
            View Programs &amp; Chapters
          </Link>
        </div>
      </section>
    </div>
  );
}
