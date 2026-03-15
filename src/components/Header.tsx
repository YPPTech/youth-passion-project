"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { PORTAL_URL } from "@/constants/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/programs/calendar", label: "Calendar" },
  { href: "/apply", label: "Apply" },
  { href: "/donate", label: "Donate" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="nav-bar fixed left-0 right-0 top-0 z-[100] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <img
            src="/logo.png"
            alt="YPP Logo"
            width={44}
            height={44}
            className="object-contain drop-shadow-[0_2px_6px_rgba(107,33,200,0.3)]"
          />
          <div className="nav-logo-text">
            Youth Passion Project
            <span className="nav-logo-tagline">Empowering the next generation</span>
          </div>
        </Link>

        <ul className="hidden list-none items-center gap-1 md:flex" id="navLinks">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`nav-link ${isActive ? "active" : ""}`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
          <li>
            <a
              href={`${PORTAL_URL}/login`}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link nav-cta"
            >
              Student Portal →
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-[var(--ypp-ink)] md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
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
        <div className="fixed inset-0 top-[68px] z-[99] border-t border-[var(--ypp-border)] bg-[var(--ypp-white)] px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`nav-link py-3 ${pathname === href ? "active" : ""}`}
              >
                {label}
              </Link>
            ))}
            <a
              href={`${PORTAL_URL}/login`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="nav-cta mt-2 rounded-full py-3 text-center"
            >
              Student Portal →
            </a>
          </div>
        </div>
      )}
    </>
  );
}
