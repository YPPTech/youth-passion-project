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
        ) : locations.length === 1 ? (
          <div className="mx-auto max-w-4xl">
            {locations.map((loc) => (
              <div
                key={loc.id}
                className="relative overflow-hidden rounded-2xl border border-[var(--ypp-primary)]/15 bg-white/92 shadow-[0_18px_55px_rgba(59,15,110,0.10)] ring-1 ring-white/70 backdrop-blur-sm"
              >
                <div className="grid gap-0 md:grid-cols-[1fr_auto] md:items-stretch">
                  <div className="p-7 text-left sm:p-9">
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--ypp-primary)]/15 bg-[var(--ypp-lavender)]/55 text-[var(--ypp-primary)]">
                        <LocationPinIcon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="font-label text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--ypp-primary)]">
                          Active in-person chapter
                        </p>
                        <p className="font-body mt-1 text-sm text-[var(--ypp-muted)]">
                          Programs currently run here.
                        </p>
                      </div>
                    </div>
                    <h3 className="font-heading mt-7 text-4xl font-bold tracking-tight text-[var(--ypp-deep)] sm:text-5xl">
                      {loc.city}, {loc.state}
                    </h3>
                  </div>
                  <div className="border-t border-[var(--ypp-border)] bg-[var(--ypp-blush)]/50 p-7 md:flex md:min-w-56 md:flex-col md:justify-center md:border-l md:border-t-0 sm:p-9">
                    <p className="font-label text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--ypp-primary)]">
                      Sessions
                    </p>
                    <p className="font-body mt-2 text-lg font-semibold text-[var(--ypp-ink)]">
                      {loc.sessions || "To be announced"}
                    </p>
                    <p className="font-body mt-3 text-sm leading-relaxed text-[var(--ypp-muted)]">
                      Course details and registration will be listed in the student portal when available.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <ul className="mx-auto grid max-w-5xl list-none grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
            {locations.map((loc) => (
              <li key={loc.id}>
                <div className="group relative flex h-full min-h-[18rem] flex-col overflow-hidden rounded-3xl border border-[var(--ypp-primary)]/15 bg-white/92 shadow-[0_18px_55px_rgba(59,15,110,0.10)] ring-1 ring-white/70 backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-[var(--ypp-primary)]/30 hover:shadow-[0_24px_70px_rgba(107,33,200,0.14)]">
                  <div className="flex flex-1 flex-col p-8 sm:p-10">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[var(--ypp-primary)]/15 bg-[var(--ypp-lavender)]/55 text-[var(--ypp-primary)] transition-colors group-hover:bg-[var(--ypp-primary)]/10">
                        <LocationPinIcon className="h-7 w-7" />
                      </div>
                      <div>
                        <p className="font-label text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--ypp-primary)]">
                          Active in-person chapter
                        </p>
                        <p className="font-body mt-1 text-sm text-[var(--ypp-muted)]">
                          Programs currently run here.
                        </p>
                      </div>
                    </div>
                    <h3 className="font-heading mt-8 text-4xl font-bold tracking-tight text-[var(--ypp-deep)] sm:text-5xl">
                      {loc.city}, {loc.state}
                    </h3>
                  </div>
                  <div className="border-t border-[var(--ypp-border)] bg-[var(--ypp-blush)]/50 px-8 py-7 sm:px-10 sm:py-8">
                    <p className="font-label text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--ypp-primary)]">
                      Sessions
                    </p>
                    <p className="font-body mt-2 text-xl font-semibold text-[var(--ypp-ink)] sm:text-2xl">
                      {loc.sessions || "To be announced"}
                    </p>
                    <p className="font-body mt-3 text-sm leading-relaxed text-[var(--ypp-muted)] sm:text-base">
                      Course details and registration will be listed in the student portal when available.
                    </p>
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
