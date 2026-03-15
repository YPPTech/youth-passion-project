import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { PORTAL_WAITLIST_FORM_URL } from "@/constants/site";

export default function NotifyPage() {
  const hasForm = PORTAL_WAITLIST_FORM_URL.length > 0;

  return (
    <div>
      <PageHeader
        label="Student Portal"
        title="Get notified when the portal is ready"
        subtitle="Our student portal isn’t quite ready yet. Leave your email and we’ll notify you when you can create your account and sign up for classes."
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          {hasForm ? (
            <>
              <p className="font-body text-[var(--ypp-muted)]">
                You’ll only get an email when the portal is live. We’ll send one message with a link to create your account—no spam.
              </p>
              <a
                href={PORTAL_WAITLIST_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-8 inline-flex items-center"
              >
                Notify me when the portal is ready
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </>
          ) : (
            <div className="card-ypp text-left">
              <p className="font-body text-[var(--ypp-muted)]">
                The waitlist form is not configured yet. If you’d like to be notified when the portal is ready, please{" "}
                <Link href="/contact" className="text-[var(--ypp-primary)] font-medium hover:underline">
                  contact us
                </Link>
                .
              </p>
            </div>
          )}
          <p className="font-body mt-10 text-sm text-[var(--ypp-muted)]">
            <Link href="/" className="text-[var(--ypp-primary)] hover:underline">
              ← Back to home
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
