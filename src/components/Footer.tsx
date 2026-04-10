import Link from "next/link";
import HomeReloadLink from "@/components/HomeReloadLink";

const navigateLinks = [
  { href: "/about", label: "About Us" },
  { href: "/programs", label: "Programs & Chapters" },
  { href: "/programs/calendar", label: "Calendar" },
  { href: "/join", label: "Join Us" },
  { href: "/donate", label: "Donate" },
];

const resourceLinks = [
  { href: "/resources/faqs", label: "FAQs" },
  { href: "/legal/privacy", label: "Privacy Policy" },
  { href: "/legal", label: "Legal" },
];

const contactLinks = [{ href: "/contact", label: "Contact Us" }];

const social = [
  { name: "X (Twitter)", href: "https://x.com/PassionYouth", icon: "x" as const },
  { name: "Instagram", href: "https://www.instagram.com/youthpassionproject/", icon: "instagram" as const },
  { name: "TikTok", href: "https://www.tiktok.com/@youthpassionproject", icon: "tiktok" as const },
  { name: "Facebook", href: "https://www.facebook.com/people/Youth-Passion-Project/100063756570369/", icon: "facebook" as const },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/youth-passion-project", icon: "linkedin" as const },
];

function SocialIcon({ icon }: { icon: "x" | "instagram" | "tiktok" | "facebook" | "linkedin" }) {
  const className = "h-4 w-4 shrink-0";
  if (icon === "x") {
    return (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    );
  }
  if (icon === "instagram") {
    return (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    );
  }
  if (icon === "tiktok") {
    return (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    );
  }
  if (icon === "facebook") {
    return (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    );
  }
  if (icon === "linkedin") {
    return (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    );
  }
  return null;
}

const colHeading = "font-label text-xs font-semibold uppercase tracking-wider text-[var(--ypp-primary)]";
const colList = "mt-5 flex flex-col gap-3";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--ypp-border)] bg-[var(--ypp-blush)] text-[var(--ypp-ink)]">
      <div className="mx-auto w-full max-w-6xl min-w-0 px-4 py-16 sm:px-8 lg:px-10">
        <div className="grid min-w-0 grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:gap-x-16 lg:gap-y-0 lg:items-start">
          {/* Column 1: Brand + logo + tagline */}
          <div className="flex flex-col sm:pr-4">
            <HomeReloadLink className="flex items-start gap-5 no-underline text-inherit outline-offset-4 transition-opacity hover:opacity-90 focus-visible:rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--ypp-primary)]">
              <img
                src="/logo.png"
                alt="Youth Passion Project"
                width={56}
                height={56}
                className="h-14 w-14 shrink-0 object-contain"
              />
              <div className="min-w-0 flex-1">
                <h3 className="font-heading text-lg font-bold leading-tight text-[var(--ypp-ink)]">
                  Youth Passion Project
                </h3>
                <p className="nav-logo-tagline mt-3 max-w-xs">
                  Guiding the stars of tomorrow.
                </p>
              </div>
            </HomeReloadLink>
          </div>

          {/* Column 2: Navigate */}
          <div className="flex flex-col">
            <h4 className={colHeading}>Navigate</h4>
            <ul className={colList}>
              {navigateLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-body text-sm text-[var(--ypp-ink)] transition-colors hover:text-[var(--ypp-primary)]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="flex flex-col">
            <h4 className={colHeading}>Resources</h4>
            <ul className={colList}>
              <li>
                <span className="font-body text-sm text-[var(--ypp-muted)]">
                  Student portal — <span className="text-[var(--ypp-primary)]">Coming soon</span>
                </span>
              </li>
              {resourceLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="font-body text-sm text-[var(--ypp-ink)] transition-colors hover:text-[var(--ypp-primary)]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact + social */}
          <div className="flex flex-col">
            <h4 className={colHeading}>Contact</h4>
            <ul className={colList}>
              {contactLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="font-body text-sm text-[var(--ypp-ink)] transition-colors hover:text-[var(--ypp-primary)]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              {social.map(({ name, href, icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--ypp-lavender)] text-[var(--ypp-primary)] transition-colors hover:bg-[var(--ypp-primary)] hover:text-white"
                  aria-label={name}
                >
                  <SocialIcon icon={icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-center border-t border-[var(--ypp-border)] pt-8 text-sm text-[var(--ypp-muted)]">
          <p className="font-body">© 2026 Youth Passion Project Inc.</p>
        </div>
      </div>
    </footer>
  );
}
