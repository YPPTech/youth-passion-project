import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { PORTAL_URL } from "@/constants/site";

export default function NotifyPage() {
  return (
    <div className="min-w-0 w-full">
      <PageHeader
        label="Student Portal"
        title="The student portal is open"
        subtitle="Create an account or sign in to view current courses and registration details."
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <a
            href={PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            Open student portal
            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
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
