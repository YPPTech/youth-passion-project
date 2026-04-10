import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { LEGAL_LINKS } from "@/constants/site";

export const metadata: Metadata = {
  title: "Legal | Youth Passion Project",
  description:
    "By-laws, policies, and legal documents for Youth Passion Project Inc.",
};

export default function LegalPage() {
  return (
    <div className="min-w-0 w-full">
      <PageHeader
        label="Resources"
        title="Legal"
        subtitle="By-Laws, policies, agreements, and other legal documents."
      />

      <section className="bg-[var(--ypp-blush)]/60 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl min-w-0">
          <ul className="flex flex-col gap-2">
            {LEGAL_LINKS.map(({ href, label, internal }) => (
              <li key={label}>
                {internal ? (
                  <Link
                    href={href}
                    className="card-ypp flex min-w-0 items-center gap-2 px-5 py-4 font-body text-[var(--ypp-ink)] transition-colors hover:border-[var(--ypp-primary)] hover:bg-[var(--ypp-blush)] hover:text-[var(--ypp-primary)]"
                  >
                    <span className="min-w-0 flex-1 break-words">{label}</span>
                    <span className="text-[var(--ypp-muted)]" aria-hidden>
                      →
                    </span>
                  </Link>
                ) : (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-ypp flex min-w-0 items-center gap-2 px-5 py-4 font-body text-[var(--ypp-ink)] transition-colors hover:border-[var(--ypp-primary)] hover:bg-[var(--ypp-blush)] hover:text-[var(--ypp-primary)]"
                  >
                    <span className="min-w-0 flex-1 break-words">{label}</span>
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
