"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import HomeReloadLink from "@/components/HomeReloadLink";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs & Chapters" },
  { href: "/programs/calendar", label: "Calendar" },
  { href: "/join", label: "Join Us" },
  { href: "/donate", label: "Donate" },
];

const mobileNavId = "mobile-nav-drawer";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, [mobileOpen]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="nav-bar fixed left-0 right-0 top-0 z-[100] flex min-w-0 items-center justify-between gap-2">
        <HomeReloadLink
          className="flex min-w-0 max-w-[min(100%,calc(100%-3.25rem))] items-center gap-2 no-underline sm:gap-3 xl:max-w-none"
          onBeforeNavigate={() => setMobileOpen(false)}
        >
          <img
            src="/logo.png"
            alt="YPP Logo"
            width={44}
            height={44}
            className="h-10 w-10 shrink-0 object-contain drop-shadow-[0_2px_6px_rgba(107,33,200,0.3)] sm:h-11 sm:w-11"
          />
          <div className="nav-logo-text min-w-0 flex-1 leading-tight">
            <span className="line-clamp-2 sm:line-clamp-none">Youth Passion Project</span>
            <span className="nav-logo-tagline line-clamp-1">Guiding the stars of tomorrow.</span>
          </div>
        </HomeReloadLink>

        <ul className="hidden list-none items-center gap-0.5 xl:flex xl:gap-1" id="navLinks">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link href={href} className={`nav-link ${isActive ? "active" : ""}`}>
                  {label}
                </Link>
              </li>
            );
          })}
          <li>
            <span
              className="nav-link nav-cta cursor-default opacity-90"
              aria-label="Portal coming soon"
            >
              Portal coming soon
            </span>
          </li>
        </ul>

        <button
          type="button"
          className="inline-flex h-11 min-w-11 shrink-0 items-center justify-center rounded-lg p-2 text-[var(--ypp-ink)] xl:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls={mobileNavId}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </header>

      {mobileOpen && (
        <div
          id={mobileNavId}
          className="fixed inset-x-0 bottom-0 top-[var(--ypp-nav-height)] z-[99] flex max-h-[calc(100dvh-var(--ypp-nav-height))] flex-col border-t border-[var(--ypp-border)] bg-[var(--ypp-white)] shadow-[var(--shadow-sm)] xl:hidden"
        >
          <nav
            className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-3 pb-[max(1rem,env(safe-area-inset-bottom))]"
            aria-label="Main"
          >
            <div className="flex flex-col gap-0.5">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`nav-link flex min-h-[2.75rem] items-center rounded-lg px-3 py-3 ${pathname === href ? "active" : ""}`}
                >
                  {label}
                </Link>
              ))}
              <span
                className="nav-cta mt-1 flex min-h-[2.75rem] cursor-default items-center justify-center rounded-full px-3 py-3 text-center opacity-90"
                aria-label="Portal coming soon"
              >
                Portal coming soon
              </span>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
