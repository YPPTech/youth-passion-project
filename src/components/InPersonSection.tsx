import type { ReactNode } from "react";

export type InPersonClass = {
  name: string;
  grades: string;
  description: string;
  link: string;
};

export type InPersonLocation = {
  id: string;
  city: string;
  state: string;
  sessions: string;
  classes: InPersonClass[];
};

function LocationPinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21s-6-5.35-6-10a6 6 0 1112 0c0 4.65-6 10-6 10z"
      />
      <circle cx="12" cy="11" r="2.25" strokeWidth={1.75} />
    </svg>
  );
}

type Props = {
  locations: InPersonLocation[];
  /** When locations are empty, show only the short “check back” lines (parent shows the program-model banner). */
  compactEmptyState?: boolean;
  /** Explains the chapter model when the empty state is shown (omit when parent shows the same copy). */
  emptyStateIntro?: ReactNode;
};

export default function InPersonSection({
  locations,
  compactEmptyState = false,
  emptyStateIntro,
}: Props) {
  return (
    <div className="mt-12 w-full min-w-0 sm:mt-14">
      <div className="min-w-0">
        {locations.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-[var(--ypp-border)] bg-[var(--ypp-white)]/80 px-6 py-14 text-center shadow-[var(--shadow-sm)] backdrop-blur-sm">
            {!compactEmptyState && emptyStateIntro ? (
              <div className="font-body max-w-2xl text-[var(--ypp-ink)] leading-relaxed">{emptyStateIntro}</div>
            ) : null}
            <p
              className={`font-body text-[var(--ypp-ink)] ${compactEmptyState ? "" : "mt-6"}`}
            >
              No in-person locations at the moment.
            </p>
            <p className="font-body mt-2 text-[var(--ypp-muted)]">
              Check back soon or contact us about starting a chapter.
            </p>
          </div>
        ) : (
          <ul className="mx-auto grid max-w-3xl list-none grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
            {locations.map((loc) => (
              <li key={loc.id}>
                <div className="group relative flex h-full min-h-[8.5rem] flex-col rounded-2xl border border-[var(--ypp-primary)]/15 bg-[var(--ypp-white)]/85 p-6 shadow-[0_8px_32px_rgba(59,15,110,0.08)] ring-1 ring-white/60 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--ypp-primary)]/30 hover:shadow-[0_14px_40px_rgba(107,33,200,0.12)] sm:p-7">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--ypp-lavender)] text-[var(--ypp-primary)] transition-colors group-hover:bg-[var(--ypp-primary)]/10">
                      <LocationPinIcon className="h-6 w-6" />
                    </div>
                    <div className="min-w-0 flex-1 text-left">
                      <p className="font-label text-[10px] font-semibold uppercase tracking-wider text-[var(--ypp-primary)]/90">
                        In person
                      </p>
                      <p className="font-heading mt-1.5 text-xl font-bold tracking-tight text-[var(--ypp-deep)] sm:text-2xl">
                        {loc.city}, {loc.state}
                      </p>
                      {loc.sessions ? (
                        <p className="font-body mt-2 text-sm text-[var(--ypp-muted)]">{loc.sessions}</p>
                      ) : null}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
