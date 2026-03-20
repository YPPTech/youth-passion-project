"use client";

import { useState } from "react";

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

type Props = {
  locations: InPersonLocation[];
};

export default function InPersonSection({ locations }: Props) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Restore map when needed: uncomment the block below and change wrapper to grid lg:grid-cols-2
  // {/* Map card (stored for later):
  //   <div className="card-ypp">
  //     <h3 className="font-heading font-semibold text-[var(--ypp-ink)]">Map</h3>
  //     <div className="mt-4 flex aspect-video w-full items-center justify-center overflow-hidden rounded-lg bg-[var(--ypp-border)]">
  //       <p className="text-center text-sm text-[var(--ypp-muted)]">
  //         Map: DE, PA (in-person locations)
  //       </p>
  //     </div>
  //   </div>
  // */}

  return (
    <div className="mt-10">
      <div className="card-ypp">
        <h3 className="font-heading font-semibold text-[var(--ypp-ink)]">
          Locations & Sessions
        </h3>
        {locations.length === 0 ? (
          <div className="mt-6 flex flex-col items-center justify-center rounded-xl border border-[var(--ypp-border)] bg-[var(--ypp-blush)]/30 px-6 py-12 text-center">
            <p className="font-body text-[var(--ypp-ink)]">
              No in-person locations at the moment.
            </p>
            <p className="font-body mt-2 text-[var(--ypp-muted)]">
              Please check back later for new sessions.
            </p>
          </div>
        ) : (
          <>
            <p className="mt-1 text-sm text-[var(--ypp-muted)]">
              Tap a location to preview classes offered there.
            </p>
            <ul className="mt-4 space-y-2">
              {locations.map((loc) => {
            const isOpen = selectedId === loc.id;
            return (
              <li key={loc.id} className="flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedId(isOpen ? null : loc.id)}
                  className={`card-ypp w-full rounded-xl border-2 p-4 text-left transition-colors hover:border-[var(--ypp-primary)]/40 hover:bg-[var(--ypp-lavender)]/30 ${
                    isOpen
                      ? "border-[var(--ypp-primary)] bg-[var(--ypp-lavender)]/40"
                      : "border-transparent"
                  }`}
                >
                  <span className="font-medium text-[var(--ypp-ink)]">
                    {loc.city}, {loc.state}
                  </span>
                  <span className="mt-1 block text-sm text-[var(--ypp-muted)]">
                    Sessions: {loc.sessions}
                  </span>
                  <span className="mt-2 inline-block text-sm font-medium text-[var(--ypp-primary)]">
                    {isOpen ? "Hide classes ▼" : "View classes →"}
                  </span>
                </button>
                {isOpen && (
                  <div className="rounded-xl border border-[var(--ypp-border)] bg-[var(--ypp-white)] p-4">
                    <h4 className="font-heading font-semibold text-[var(--ypp-ink)]">
                      Classes at {loc.city}
                    </h4>
                    <ul className="mt-4 space-y-3">
                      {loc.classes.map((cls) => {
                        const hasLink = cls.link.trim().length > 0;
                        const inner = (
                          <>
                            <span className="font-medium text-[var(--ypp-ink)]">
                              {cls.name}
                            </span>
                            <span className="mt-0.5 block text-sm text-[var(--ypp-primary)]">
                              {cls.grades}
                            </span>
                            <p className="mt-2 line-clamp-2 text-sm text-[var(--ypp-muted)] leading-relaxed">
                              {cls.description}
                            </p>
                            <span className="mt-2 inline-block text-xs font-semibold text-[var(--ypp-primary)]">
                              {hasLink ? "Full details & sign up →" : "Coming soon"}
                            </span>
                          </>
                        );
                        return (
                          <li key={cls.name}>
                            {hasLink ? (
                              <a
                                href={cls.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block rounded-lg border border-[var(--ypp-border)] p-3 transition-colors hover:border-[var(--ypp-primary)]/50 hover:bg-[var(--ypp-lavender)]/20"
                              >
                                {inner}
                              </a>
                            ) : (
                              <div className="block rounded-lg border border-[var(--ypp-border)] p-3">
                                {inner}
                              </div>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                    {loc.classes[0]?.link?.trim() ? (
                      <a
                        href={loc.classes[0].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block text-sm font-semibold text-[var(--ypp-primary)] hover:underline"
                      >
                        View all classes & sign up on portal →
                      </a>
                    ) : (
                      <p className="mt-4 text-sm font-semibold text-[var(--ypp-primary)]">
                        Student portal — coming soon
                      </p>
                    )}
                  </div>
                )}
              </li>
            );
          })}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
