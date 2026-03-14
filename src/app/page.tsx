import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import EmailSignup from "@/components/EmailSignup";
import {
  statsByTheNumbers,
  hiringRolePills,
  openPositions,
  valuePills,
  missionOneLiner,
  visionOneLiner,
  featuredPrograms,
  mailingListSubtitle,
  PORTAL_URL,
} from "@/constants/site";

const passionTopics = [
  { label: "Music & Songwriting", href: "/programs" },
  { label: "Coding & Tech", href: "/programs" },
  { label: "Art & Design", href: "/programs" },
  { label: "Baking & Cooking", href: "/programs" },
  { label: "Creative Writing", href: "/programs" },
  { label: "Science & More", href: "/programs" },
];

function IconTarget() {
  return (
    <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none" aria-hidden>
      <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="2" />
      <circle cx="20" cy="20" r="10" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="20" cy="20" r="4" fill="currentColor" />
    </svg>
  );
}

function IconStarburst() {
  return (
    <svg className="h-10 w-10" viewBox="0 0 40 40" fill="currentColor" aria-hidden>
      <path d="M20 2l3 10 10 3-10 3-3 10-3-10-10-3 10-3 3-10z" />
    </svg>
  );
}

function IconMicroscope() {
  return (
    <svg className="h-12 w-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M16 40h16M20 40v-4M28 40v-4M12 20c0-4 2-8 6-8s6 4 6 8v12c0 4-2 8-6 8s-6-4-6-8V20z" />
      <path d="M24 12v8M24 12a4 4 0 100-8 4 4 0 000 8z" />
    </svg>
  );
}

function IconPalette() {
  return (
    <svg className="h-12 w-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="24" cy="24" r="14" />
      <circle cx="18" cy="20" r="2" fill="currentColor" />
      <circle cx="30" cy="20" r="2" fill="currentColor" />
      <circle cx="24" cy="28" r="2" fill="currentColor" />
    </svg>
  );
}

function IconGraduation() {
  return (
    <svg className="h-12 w-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M24 8l16 8v8L24 32 8 24v-8l16-8z" />
      <path d="M8 24v8l16 8 16-8v-8" />
      <path d="M24 32V16" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient hero-glow hero-curve relative flex min-h-[85vh] flex-col overflow-hidden px-4 pb-24 pt-8 sm:px-6 sm:pt-12 lg:px-8">
        <div className="hero-blob hero-blob-1" aria-hidden />
        <div className="hero-blob hero-blob-2" aria-hidden />
        <div className="hero-blob hero-blob-3" aria-hidden />

        <div className="relative z-10 mx-auto flex max-w-6xl flex-1 flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="max-w-2xl pt-6 lg:pt-0">
            <p
              className="hero-animate-in font-label mb-3 text-[11px] text-[var(--ypp-primary)]"
              style={{ animationDelay: "0.1s" }}
            >
              501(C)(3) NONPROFIT — FREE FOR ALL STUDENTS
            </p>

            <h1
              className="hero-animate-in font-display text-4xl font-black text-[var(--ypp-ink)] sm:text-5xl lg:text-6xl"
              style={{ animationDelay: "0.2s" }}
            >
              Learn Anything.
              <br />
              <span className="font-normal italic text-[var(--ypp-deep)]">Taught by Those</span>
              <br />
              <span className="bg-gradient-to-r from-[var(--ypp-primary)] to-[var(--ypp-mid)] bg-clip-text text-transparent">Who Love It.</span>
            </h1>
            <p
              className="hero-animate-in font-body mt-6 max-w-xl text-[15px] font-normal leading-loose text-[var(--ypp-muted)]"
              style={{ animationDelay: "0.35s" }}
            >
              Free online and in-person courses taught by passionate high school students—designed to spark curiosity and expand the horizons of younger learners.
            </p>

            <div
              className="hero-animate-in mt-10 flex flex-wrap gap-4"
              style={{ animationDelay: "0.5s" }}
            >
              <a
                href={PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary font-body inline-flex items-center transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Join the Portal
                <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <Link
                href="/apply"
                className="btn-primary font-body inline-flex items-center px-6 py-3 text-base"
              >
                Apply to Teach
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="mt-12 lg:mt-0 lg:max-w-md">
            <p
              className="hero-animate-in font-label mb-4 text-sm text-[var(--ypp-muted)]"
              style={{ animationDelay: "0.3s" }}
            >
              What sparks your curiosity?
            </p>
            <div className="flex flex-wrap gap-3">
              {passionTopics.map(({ label, href }, i) => (
                <Link
                  key={label}
                  href={href}
                  className="hero-animate-in hero-passion-pill group inline-flex items-center rounded-full border-2 border-[var(--ypp-border)] bg-[var(--ypp-white)] px-4 py-2.5 text-sm font-medium text-[var(--ypp-ink)] shadow-[var(--shadow-sm)] transition-all duration-200 hover:scale-105 hover:border-[var(--ypp-primary)] hover:bg-[var(--ypp-lavender)] hover:shadow-[var(--shadow-md)] active:scale-100"
                  style={{ animationDelay: `${0.4 + i * 0.06}s` }}
                >
                  <span className="font-body">{label}</span>
                </Link>
              ))}
            </div>
            <p
              className="hero-animate-in font-body mt-4 text-xs text-[var(--ypp-muted)]"
              style={{ animationDelay: "0.7s" }}
            >
              Tap any topic to explore 110+ free courses →
            </p>
          </div>
        </div>
      </section>

      {/* Now Hiring banner */}
      <section className="bg-[var(--ypp-deep)] px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
          <span className="font-label text-sm text-white/70">
            Now Hiring
          </span>
          <div className="flex flex-wrap justify-center gap-2">
            {hiringRolePills.map((role) => (
              <Link
                key={role}
                href="/apply"
                className="font-body rounded-full bg-[var(--ypp-lavender)]/90 px-4 py-2 text-sm font-semibold text-[var(--ypp-deep)] transition-colors hover:bg-[var(--ypp-lavender)]"
              >
                {role}
              </Link>
            ))}
          </div>
          <Link
            href="/apply"
            className="font-body text-sm font-semibold text-white underline underline-offset-2 hover:no-underline"
          >
            View all openings +
          </Link>
        </div>
      </section>

      {/* Who We Are (two-column) + Mission & Vision cards */}
      <section className="border-y border-[var(--ypp-border)] bg-[var(--ypp-blush)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="section-label text-[var(--ypp-muted)]">
                — Who we are
              </p>
              <h2 className="font-heading mt-2 text-2xl font-bold text-[var(--ypp-deep)] sm:text-3xl">
                Built Around Young People&apos;s Potential
              </h2>
              <p className="font-body mt-4 text-[var(--ypp-muted)] leading-relaxed">
                We exist to discover, develop, and celebrate the passions of youth—providing the resources, mentorship, and community they need to thrive in whatever path they choose.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {valuePills.map(({ label }) => (
                  <span
                    key={label}
                    className="font-body rounded-full bg-[var(--ypp-lavender)] px-4 py-2 text-sm font-semibold text-[var(--ypp-deep)]"
                  >
                    {label}
                  </span>
                ))}
              </div>
              <Link
                href="/about"
                className="btn-primary font-body mt-8 inline-flex items-center"
              >
                Meet Our Team
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="flex flex-col gap-6">
              <div className="card-ypp flex flex-col gap-4">
                <div className="text-[var(--ypp-primary)]">
                  <IconTarget />
                </div>
                <h3 className="font-heading text-lg font-bold text-[var(--ypp-ink)]">
                  Our Mission
                </h3>
                <p className="font-body text-sm text-[var(--ypp-muted)] leading-relaxed">
                  {missionOneLiner}
                </p>
              </div>
              <div className="flex flex-col gap-4 rounded-2xl border border-transparent bg-[rgba(36,0,77,1)] p-8 shadow-lg">
                <div className="text-[var(--ypp-light)]">
                  <IconStarburst />
                </div>
                <h3 className="font-heading text-lg font-bold text-white">
                  Our Vision
                </h3>
                <p className="font-body text-sm text-white/80 leading-relaxed">
                  {visionOneLiner}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip — By the Numbers */}
      <section className="border-b border-[var(--ypp-border)] bg-[var(--ypp-white)] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="section-label justify-center text-[var(--ypp-muted)]">
            By the Numbers
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {statsByTheNumbers.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="font-heading text-2xl font-bold text-[var(--ypp-deep)] sm:text-3xl">
                  {value}
                </div>
                <div className="font-label mt-1 text-xs text-[var(--ypp-muted)]">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section className="bg-[var(--ypp-blush)]/60 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="Join our team" subtitle="Open positions for students and volunteers" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {openPositions.map(({ title, description, href }) => (
              <Link key={title} href={href} className="card-ypp block">
                <h3 className="font-heading font-semibold text-[var(--ypp-deep)] hover:text-[var(--ypp-primary)]">
                  {title}
                </h3>
                <p className="font-body mt-2 text-sm text-[var(--ypp-muted)]">
                  {description}
                </p>
                <span className="font-body mt-3 inline-flex items-center text-sm font-medium text-[var(--ypp-primary)]">
                  Apply now
                  <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/apply"
              className="font-body font-semibold text-[var(--ypp-primary)] underline underline-offset-2 hover:no-underline"
            >
              View all openings →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="border-y border-[var(--ypp-border)] bg-[var(--ypp-white)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="section-label justify-center text-[var(--ypp-muted)]">
            — Featured Programs —
          </p>
          <h2 className="font-heading mt-2 text-center text-2xl font-bold text-[var(--ypp-deep)] sm:text-3xl">
            Where Passion Comes Alive
          </h2>
          <p className="font-body mx-auto mt-3 max-w-2xl text-center text-[var(--ypp-muted)]">
            Explore our signature programs designed to challenge, inspire, and connect young leaders.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {featuredPrograms.map(({ title, description, href, icon }) => (
              <Link key={title} href={href} className="card-ypp block overflow-hidden p-0">
                <div className="flex h-32 items-center justify-center bg-[var(--ypp-deep)] text-[var(--ypp-lavender)]">
                  {icon === "microscope" && <IconMicroscope />}
                  {icon === "palette" && <IconPalette />}
                  {icon === "graduation" && <IconGraduation />}
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-[var(--ypp-deep)]">
                    {title}
                  </h3>
                  <p className="font-body mt-2 text-sm text-[var(--ypp-muted)]">
                    {description}
                  </p>
                  <span className="mt-3 inline-flex items-center text-sm font-medium text-[var(--ypp-primary)]">
                    Learn more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/programs"
              className="btn-primary inline-flex items-center"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              View All Programs
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Stay in the Loop — dark email section */}
      <section className="bg-[var(--ypp-deep)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-md text-center md:text-left">
            <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
              Stay in the Loop
            </h2>
            <p className="font-body mt-3 text-white/80">
              {mailingListSubtitle}
            </p>
          </div>
          <div className="w-full shrink-0 md:max-w-md">
            <EmailSignup variant="dark" />
          </div>
        </div>
      </section>

    </div>
  );
}
