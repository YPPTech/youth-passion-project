import type { Metadata } from "next";
import Link from "next/link";
import { LEGAL_LINKS } from "@/constants/site";

export const metadata: Metadata = {
  title: "Legal | Youth Passion Project",
  description:
    "By-laws, policies, and legal documents for Youth Passion Project Inc.",
};

export default function LegalPage() {
  return (
    <div>
      <section className="border-b border-[var(--ypp-border)] bg-[var(--ypp-white)] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-label mx-auto mb-4 block text-xs text-[var(--ypp-primary)]">
            Resources
          </span>
          <h1 className="font-display text-4xl font-bold tracking-tight text-[var(--ypp-ink)] sm:text-5xl">
            Legal
          </h1>
          <p className="mt-4 text-lg text-[var(--ypp-muted)]">
            By-laws, policies, agreements, and other legal documents.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <ul className="flex flex-col gap-2">
            {LEGAL_LINKS.map(({ href, label, internal }) => (
              <li key={label}>
                {internal ? (
                  <Link
                    href={href}
                    className="flex items-center gap-2 rounded-lg border border-[var(--ypp-border)] bg-[var(--ypp-white)] px-5 py-4 font-body text-[var(--ypp-ink)] shadow-sm transition-colors hover:border-[var(--ypp-primary)] hover:bg-[var(--ypp-blush)] hover:text-[var(--ypp-primary)]"
                  >
                    <span className="flex-1">{label}</span>
                    <span className="text-[var(--ypp-muted)]" aria-hidden>
                      →
                    </span>
                  </Link>
                ) : (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-[var(--ypp-border)] bg-[var(--ypp-white)] px-5 py-4 font-body text-[var(--ypp-ink)] shadow-sm transition-colors hover:border-[var(--ypp-primary)] hover:bg-[var(--ypp-blush)] hover:text-[var(--ypp-primary)]"
                  >
                    <span className="flex-1">{label}</span>
                    <span className="text-[var(--ypp-muted)]" aria-hidden>
                      ↗
                    </span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
