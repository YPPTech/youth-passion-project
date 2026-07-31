"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { TECH_MANAGER_APPLICATION_URL } from "@/constants/site";

const STORAGE_KEY = "ypp-dismiss-tech-manager-promo-v1";

export default function TechManagerPromoModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      if (window.localStorage.getItem(STORAGE_KEY) === "1") return;
    } catch {
      // Ignore storage errors and still show the promo.
    }

    const timer = window.setTimeout(() => setIsOpen(true), 900);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setIsOpen(false);
      try {
        window.localStorage.setItem(STORAGE_KEY, "1");
      } catch {
        // Ignore storage errors.
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  function dismiss() {
    setIsOpen(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Ignore storage errors.
    }
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[300] flex items-end justify-center p-4 pb-[calc(1rem+env(safe-area-inset-bottom))] sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="tech-manager-promo-title"
    >
      <button
        type="button"
        className="absolute inset-0 z-0 bg-[var(--ypp-deep)]/45 backdrop-blur-[2px]"
        onClick={dismiss}
        aria-label="Close promotion"
        tabIndex={-1}
      />

      <div className="promo-modal-panel relative z-[1] w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-[0_28px_80px_rgba(59,15,110,0.28)]">
        <div className="bg-[var(--ypp-deep)] px-6 py-5 sm:px-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-label text-[11px] font-bold uppercase tracking-[0.2em] text-white/75">
                Now hiring · Summer 2026
              </p>
              <h2
                id="tech-manager-promo-title"
                className="font-heading mt-2 text-2xl font-bold leading-tight text-white sm:text-3xl"
              >
                Become a Technology Manager
              </h2>
            </div>
            <button
              type="button"
              onClick={dismiss}
              className="shrink-0 rounded-full p-2 text-white/80 transition-colors hover:bg-white/15 hover:text-white"
              aria-label="Close"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="px-6 py-6 sm:px-8 sm:py-7">
          <p className="font-body text-sm leading-relaxed text-[var(--ypp-muted)] sm:text-base">
            Help maintain YPP&apos;s website and portal, support technical reliability, and collaborate on digital
            tools. Open to high school students in grades 9–10.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={TECH_MANAGER_APPLICATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex min-h-[2.75rem] flex-1 items-center justify-center rounded-full px-5 py-2.5 text-sm font-bold"
              onClick={dismiss}
            >
              Apply now
            </a>
            <Link
              href="/join"
              className="font-body inline-flex min-h-[2.75rem] flex-1 items-center justify-center rounded-full border-2 border-[var(--ypp-primary)] px-5 py-2.5 text-sm font-bold text-[var(--ypp-primary)] transition-colors hover:bg-[var(--ypp-lavender)]/50"
              onClick={dismiss}
            >
              View all openings
            </Link>
          </div>

          <button
            type="button"
            onClick={dismiss}
            className="font-body mt-4 w-full text-center text-sm text-[var(--ypp-muted)] underline decoration-[var(--ypp-border)] underline-offset-2 transition-colors hover:text-[var(--ypp-deep)]"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}
