import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import MouseFollowSection from "@/components/MouseFollowSection";
import { getNewestCourses } from "@/data/programsData";
import {
  statsByTheNumbers,
  hiringRolePills,
  openPositions,
  valueItems,
} from "@/constants/site";

const passionTopics = [
  {
    label: "Music & Songwriting",
    description: "Melody, lyrics, and performance with instructors who live for music.",
    href: "/programs",
  },
  {
    label: "Coding & Tech",
    description: "Build real projects and learn fundamentals from peers who code every day.",
    href: "/programs",
  },
  {
    label: "Art & Design",
    description: "Draw, design, and express yourself in a creative, supportive space.",
    href: "/programs",
  },
  {
    label: "Baking & Cooking",
    description: "Hands-on kitchen skills and recipes you can practice at home.",
    href: "/programs",
  },
  {
    label: "Creative Writing",
    description: "Stories, poetry, and voice—workshop-style with fellow young writers.",
    href: "/programs",
  },
  {
    label: "Science & More",
    description: "STEM, curiosity, and exploration beyond the typical school day.",
    href: "/programs",
  },
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

/** Who We Are value icons — on-brand, consistent weight, centered in 24x24. */
const valueIconClass = "h-5 w-5 shrink-0";
const valueIconStroke = 1.75;

function IconGrow() {
  return (
    <svg className={valueIconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={valueIconStroke} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 22V12M12 12c-2.5 0-4-2-4-4.5S9 4 12 4s4 2 4 4.5-1.5 3.5-4 3.5z" />
      <path d="M9 9l1.5 1.5M15 9l-1.5 1.5" />
    </svg>
  );
}
function IconLead() {
  return (
    <svg className={valueIconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={valueIconStroke} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2 12h2M20 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
    </svg>
  );
}
function IconConnect() {
  return (
    <svg className={valueIconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={valueIconStroke} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 21.5c-2.2-1.8-7-5.5-7-10C5 6.4 8.1 4 12 4s7 2.4 7 7.5c0 4.5-4.8 8.2-7 10z" />
    </svg>
  );
}
function IconCreate() {
  return (
    <svg className={valueIconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={valueIconStroke} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 2l2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2z" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <HeroSection className="hero-gradient hero-glow hero-curve relative flex min-h-[85vh] flex-col overflow-hidden px-4 pb-24 pt-8 sm:px-6 sm:pt-12 lg:px-8">
        <div className="hero-blob hero-blob-1" aria-hidden />
        <div className="hero-blob hero-blob-2" aria-hidden />
        <div className="hero-blob hero-blob-3" aria-hidden />

        <div className="relative z-10 mx-auto flex max-w-6xl flex-1 flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="max-w-2xl pt-6 lg:pt-0">
            <p
              className="hero-animate-in font-label mb-3 text-[11px] font-semibold uppercase tracking-wider text-[var(--ypp-primary)]"
              style={{ animationDelay: "0.1s" }}
            >
              501(c)(3) nonprofit — free for all students
            </p>

            <h1
              className="hero-animate-in font-display text-4xl font-black leading-tight text-[var(--ypp-ink)] sm:text-5xl lg:text-6xl"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="bg-gradient-to-r from-[var(--ypp-primary)] to-[var(--ypp-mid)] bg-clip-text text-transparent">
                Guiding the stars
              </span>
              <br />
              <span className="font-normal italic text-[var(--ypp-deep)]">of tomorrow.</span>
            </h1>
            <p
              className="hero-animate-in font-body mt-6 max-w-xl text-[15px] font-normal leading-loose text-[var(--ypp-muted)]"
              style={{ animationDelay: "0.35s" }}
            >
              Youth Passion Project connects students with passionate, high-quality instructors to discover what they love and build the skills to pursue it.
            </p>

            <div
              className="hero-animate-in mt-10 flex flex-wrap gap-4"
              style={{ animationDelay: "0.5s" }}
            >
              <Link
                href="/programs"
                className="btn-secondary font-body inline-flex items-center transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Find Your Passion
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/apply"
                className="btn-primary font-body inline-flex items-center px-6 py-3 text-base"
              >
                Become a YPP Instructor
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="mt-12 w-full lg:mt-0 lg:max-w-lg">
            <div className="hero-animate-in mb-5" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center gap-2">
                <span className="h-px w-6 shrink-0 bg-[var(--ypp-primary)]" aria-hidden />
                <p className="font-label text-xs font-semibold uppercase tracking-wider text-[var(--ypp-primary)]">
                  Explore by subject
                </p>
              </div>
              <h2 className="font-heading mt-3 text-2xl font-bold tracking-tight text-[var(--ypp-deep)] sm:text-3xl">
                Where Will Your Passion Take You?
              </h2>
            </div>
            <ul className="flex flex-col gap-3">
              {passionTopics.map(({ label, description, href }, i) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="hero-animate-in hero-passion-pill group block rounded-xl border-2 border-[var(--ypp-border)] bg-[var(--ypp-white)] px-4 py-3 shadow-[var(--shadow-sm)] transition-all duration-200 hover:border-[var(--ypp-primary)] hover:bg-[var(--ypp-lavender)]/40 hover:shadow-[var(--shadow-md)]"
                    style={{ animationDelay: `${0.4 + i * 0.06}s` }}
                  >
                    <span className="font-body text-sm font-semibold text-[var(--ypp-ink)] group-hover:text-[var(--ypp-primary)]">
                      {label}
                    </span>
                    <p className="font-body mt-1 text-xs leading-snug text-[var(--ypp-muted)]">
                      {description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
            <p
              className="hero-animate-in font-body mt-4 text-xs text-[var(--ypp-muted)]"
              style={{ animationDelay: "0.7s" }}
            >
              110+ free courses across every category—tap a topic to browse Programs.
            </p>
          </div>
        </div>
      </HeroSection>

      {/* Now Hiring banner */}
      <section className="bg-[var(--ypp-deep)] px-4 py-5 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-label text-xs font-semibold uppercase tracking-widest text-[var(--ypp-primary)]">
              We&apos;re hiring
            </span>
            <p className="font-body text-sm text-white/80">
              Share what you love. Lead the next generation.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {hiringRolePills.map((role) => (
              <Link
                key={role.id}
                href={`/apply#${role.id}`}
                className="font-body rounded-full bg-white/95 px-5 py-2.5 text-sm font-bold text-[var(--ypp-deep)] shadow-md transition-all hover:scale-105 hover:bg-white hover:shadow-lg"
              >
                {role.title}
              </Link>
            ))}
            <Link
              href="/apply"
              className="font-body inline-flex items-center rounded-full border-2 border-white/80 bg-transparent px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white hover:text-[var(--ypp-deep)]"
            >
              View all openings
              <svg className="ml-1.5 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Are — two-column: intro + CTA | value propositions (cursor-follow bubble) */}
      <MouseFollowSection className="relative border-y border-[var(--ypp-border)] bg-[var(--ypp-blush)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Left: label, title, description, CTA */}
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--ypp-primary)]" aria-hidden />
                <p className="font-label text-xs font-semibold uppercase tracking-wider text-[var(--ypp-primary)]">
                  Who We Are
                </p>
              </div>
              <h2 className="font-heading mt-4 text-4xl font-normal leading-tight tracking-tight text-[var(--ypp-ink)] sm:text-5xl">
                Built Around Young People&apos;s{" "}
                <span className="font-normal italic text-[var(--ypp-primary)]">Potential</span>
              </h2>
              <p className="font-body mt-6 text-[var(--ypp-muted)] leading-relaxed">
                We exist to discover, develop, and celebrate the passions of youth—providing the resources, mentorship, and community they need to thrive in whatever path they choose.
              </p>
              <Link
                href="/about#staff"
                className="mt-8 inline-flex items-center gap-2 rounded-lg border-2 border-[var(--ypp-primary)] bg-[var(--ypp-white)] px-5 py-2.5 font-semibold text-[var(--ypp-primary)] transition-colors hover:bg-[var(--ypp-primary)] hover:text-white"
              >
                Meet Our Team
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Right: four value items with icons */}
            <div className="flex flex-col gap-6">
              {[
                { Icon: IconGrow, ...valueItems[0] },
                { Icon: IconLead, ...valueItems[1] },
                { Icon: IconConnect, ...valueItems[2] },
                { Icon: IconCreate, ...valueItems[3] },
              ].map(({ title, description, Icon }) => (
                <div
                  key={title}
                  className="flex gap-4 rounded-xl border border-[var(--ypp-border)] bg-[var(--ypp-white)] p-5 shadow-sm"
                >
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[var(--ypp-lavender)] text-[var(--ypp-primary)]"
                    aria-hidden
                  >
                    <Icon />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-heading text-lg font-bold text-[var(--ypp-ink)]">
                      {title}
                    </h3>
                    <p className="font-body mt-1 text-sm text-[var(--ypp-muted)] leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MouseFollowSection>

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

      {/* Open positions — Join Our Team (cursor-follow bubble) */}
      <MouseFollowSection className="relative bg-[var(--ypp-blush)]/60 px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--ypp-primary)]" aria-hidden />
            <p className="font-label text-xs font-semibold uppercase tracking-wider text-[var(--ypp-primary)]">
              Now Hiring
            </p>
          </div>
          <h2 className="font-heading mt-4 text-3xl font-bold tracking-tight text-[var(--ypp-deep)] sm:text-4xl">
            Share What You Love. Lead the Next Generation.
          </h2>
          <p className="font-body mt-2 max-w-2xl text-[var(--ypp-muted)]">
            YPP instructors aren&apos;t just teachers. They&apos;re leaders, mentors, and community builders who help
            make an impact. Open roles for high school students—apply below.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {openPositions.map(({ title, description, href }) => (
              <Link
                key={title}
                href={href}
                className="group flex flex-col rounded-2xl border-2 border-[var(--ypp-border)] bg-[var(--ypp-white)] p-6 shadow-sm transition-all hover:border-[var(--ypp-primary)]/40 hover:shadow-md"
              >
                <h3 className="font-heading text-lg font-semibold text-[var(--ypp-deep)] transition-colors group-hover:text-[var(--ypp-primary)]">
                  {title}
                </h3>
                <p className="font-body mt-3 flex-1 text-sm leading-relaxed text-[var(--ypp-muted)]">
                  {description}
                </p>
                <span className="font-body mt-4 inline-flex items-center text-sm font-semibold text-[var(--ypp-primary)]">
                  Apply now
                  <svg className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/apply"
              className="font-body inline-flex items-center rounded-xl border-2 border-[var(--ypp-primary)] bg-[var(--ypp-white)] px-6 py-3 font-semibold text-[var(--ypp-primary)] transition-colors hover:bg-[var(--ypp-primary)] hover:text-white"
            >
              View all openings
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </MouseFollowSection>

      {/* Newest courses — quick display, no images; right-aligned like opposite of Join Our Team */}
      <section className="border-y border-[var(--ypp-border)] bg-[var(--ypp-white)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-right">
          <div className="flex items-center justify-end gap-3">
            <span className="h-px w-8 bg-[var(--ypp-primary)]" aria-hidden />
            <p className="font-label text-xs font-semibold uppercase tracking-wider text-[var(--ypp-primary)] underline decoration-[var(--ypp-primary)] underline-offset-2">
              Newest Courses
            </p>
          </div>
          <h2 className="font-heading mt-2 text-2xl font-bold text-[var(--ypp-deep)] sm:text-3xl">
            Newest additions
          </h2>
          <p className="font-body ml-auto mt-3 max-w-2xl text-right text-[var(--ypp-muted)]">
            A quick look at our newest classes. Our student portal is coming soon—full details and sign-up will be
            available there when it launches. Browse our Programs page in the meantime.
          </p>
          {getNewestCourses().length === 0 ? (
            <div className="card-ypp mt-12 flex flex-col items-center justify-center px-6 py-16 text-center">
              <p className="font-body text-lg text-[var(--ypp-ink)]">
                No classes available at the moment.
              </p>
              <p className="font-body mt-2 text-[var(--ypp-muted)]">
                Please check back later for new sessions.
              </p>
              <Link
                href="/programs"
                className="btn-primary mt-6 inline-flex items-center"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                View Programs
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ) : (
          <>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {getNewestCourses().map((course) => {
                const hasPortalLink = course.href.trim().length > 0;
                const CardInner = (
                  <>
                    <h3 className="font-heading font-semibold text-[var(--ypp-deep)]">
                      {course.name}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      <span className="rounded-full bg-[var(--ypp-lavender)] px-2.5 py-0.5 font-body text-xs font-medium capitalize text-[var(--ypp-primary)]">
                        {course.delivery === "in-person" ? "In person" : "Online"}
                        {course.chapter ? ` · ${course.chapter}` : ""}
                      </span>
                      <span className="rounded-full bg-[var(--ypp-lavender)] px-2.5 py-0.5 font-body text-xs text-[var(--ypp-muted)]">
                        Grades {course.grades}
                      </span>
                      {course.ages && (
                        <span className="rounded-full bg-[var(--ypp-lavender)] px-2.5 py-0.5 font-body text-xs text-[var(--ypp-muted)]">
                          Ages {course.ages}
                        </span>
                      )}
                    </div>
                    <p className="font-body mt-2 text-sm text-[var(--ypp-muted)] leading-snug">
                      {course.summary}
                    </p>
                    <span className="mt-3 inline-flex items-center text-sm font-medium text-[var(--ypp-primary)]">
                      {hasPortalLink ? "Full details & sign up →" : "Coming soon"}
                    </span>
                  </>
                );
                return hasPortalLink ? (
                  <a
                    key={course.name}
                    href={course.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-ypp block text-left"
                  >
                    {CardInner}
                  </a>
                ) : (
                  <div key={course.name} className="card-ypp block text-left">
                    {CardInner}
                  </div>
                );
              })}
            </div>
            <div className="mt-10 flex justify-end">
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
          </>
          )}
        </div>
      </section>

    </div>
  );
}
