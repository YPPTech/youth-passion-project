import Link from "next/link";
import ClassInActionGallery from "@/components/ClassInActionGallery";
import HeroSection from "@/components/HeroSection";
import MouseFollowSection from "@/components/MouseFollowSection";
import { getNewestCourses } from "@/data/programsData";
import { getWeeklySpotlight } from "@/data/weeklySpotlight";
import {
  statsByTheNumbers,
  hiringRolePills,
  openPositions,
} from "@/constants/site";

/** Hero aside: subject chips → Programs & Chapters (/programs). */
const passionTopics = [
  { label: "STEM", href: "/programs" },
  { label: "Writing", href: "/programs" },
  { label: "Music", href: "/programs" },
  { label: "Business", href: "/programs" },
  { label: "Arts", href: "/programs" },
  { label: "Languages & Culture", href: "/programs" },
] as const;

export default function HomePage() {
  const weeklySpotlight = getWeeklySpotlight();
  const spotlightCtaExternal = weeklySpotlight.ctaHref.startsWith("http");

  return (
    <div className="w-full min-w-0">
      {/* Hero */}
      <HeroSection className="hero-gradient hero-glow hero-curve relative flex min-h-[min(88vh,52rem)] flex-col overflow-hidden px-4 pt-10 pb-20 sm:px-6 sm:pt-14 sm:pb-28 lg:px-10 lg:pt-16 lg:pb-24">
        <div className="hero-blob hero-blob-1" aria-hidden />
        <div className="hero-blob hero-blob-2" aria-hidden />
        <div className="hero-blob hero-blob-3" aria-hidden />

        <div className="relative z-10 mx-auto flex w-full min-w-0 max-w-6xl flex-1 flex-col justify-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16 xl:gap-20">
          <div className="min-w-0 max-w-2xl">
            <div
              className="hero-animate-in mb-5 flex items-center gap-3"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="h-px w-8 shrink-0 bg-[var(--ypp-primary)] sm:w-10" aria-hidden />
              <p className="font-label text-[11px] font-semibold uppercase tracking-wider text-[var(--ypp-primary)] sm:text-xs">
                Peer learning · 100% free · Worldwide
              </p>
            </div>
            <h1
              className="hero-animate-in font-heading max-w-2xl text-4xl font-normal leading-tight tracking-tight text-[var(--ypp-ink)] sm:text-5xl"
              style={{ animationDelay: "0.2s" }}
            >
              Guiding The Stars{" "}
              <span className="font-normal italic text-[var(--ypp-primary)]">Of Tomorrow.</span>
            </h1>
            <p
              className="hero-animate-in font-body mt-6 max-w-xl text-base font-normal leading-relaxed text-[var(--ypp-muted)] sm:mt-7 sm:text-[1.0625rem] sm:leading-relaxed"
              style={{ animationDelay: "0.35s" }}
            >
              Free, peer-taught classes online or in person. Take a class—or teach one.
            </p>

            <div
              className="hero-animate-in mt-10 flex flex-wrap items-center justify-start gap-3 sm:gap-4"
              style={{ animationDelay: "0.5s" }}
            >
              <Link
                href="/programs"
                className="btn-primary font-body inline-flex min-h-[2.75rem] items-center px-6 py-3 text-base"
              >
                Browse programs
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/join"
                className="btn-secondary font-body inline-flex min-h-[2.75rem] items-center px-6 py-3 text-base"
              >
                Join Us
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="w-full min-w-0 shrink-0 lg:max-w-sm">
            <div
              className="hero-animate-in overflow-hidden rounded-2xl border border-[var(--ypp-border)] bg-[var(--ypp-white)] shadow-[var(--shadow-sm)]"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="border-b border-[var(--ypp-border)] bg-[var(--ypp-blush)]/50 px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-px w-6 shrink-0 bg-[var(--ypp-primary)]" aria-hidden />
                  <p className="font-label text-[10px] font-semibold uppercase tracking-wider text-[var(--ypp-primary)] sm:text-xs">
                    Explore by subject
                  </p>
                </div>
                <h2 className="font-heading mt-3 text-xl font-semibold leading-snug tracking-tight text-[var(--ypp-deep)] sm:text-2xl">
                  Browse by{" "}
                  <span className="font-normal italic text-[var(--ypp-primary)]">subject</span>
                </h2>
              </div>

              <div className="border-y border-[var(--ypp-border)] bg-[var(--ypp-white)] px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-px w-6 shrink-0 bg-[var(--ypp-primary)]/70" aria-hidden />
                  <p className="font-label text-[10px] font-semibold uppercase tracking-wider text-[var(--ypp-primary)] sm:text-xs">
                    {weeklySpotlight.source === "idle" ? "Between sessions" : "This week"}
                  </p>
                </div>
                <h3 className="font-heading mt-2 text-base font-semibold leading-snug text-[var(--ypp-deep)] sm:text-lg">
                  {weeklySpotlight.title}
                </h3>
                {(weeklySpotlight.gradesLabel || weeklySpotlight.source === "catalog") && (
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    {weeklySpotlight.gradesLabel ? (
                      <span className="rounded-full bg-[var(--ypp-lavender)] px-2.5 py-0.5 font-body text-xs text-[var(--ypp-muted)]">
                        {weeklySpotlight.gradesLabel}
                      </span>
                    ) : null}
                    {weeklySpotlight.source === "catalog" && (
                      <span className="rounded-full border border-[var(--ypp-border)] bg-[var(--ypp-blush)]/40 px-2.5 py-0.5 font-body text-xs font-medium text-[var(--ypp-primary)]">
                        Live catalog
                      </span>
                    )}
                  </div>
                )}
                <p
                  className={`font-body mt-2 text-xs leading-snug text-[var(--ypp-muted)] sm:text-[13px] sm:leading-relaxed ${
                    weeklySpotlight.source === "catalog" ? "line-clamp-2" : ""
                  }`}
                >
                  {weeklySpotlight.blurb}
                </p>
                {spotlightCtaExternal ? (
                  <a
                    href={weeklySpotlight.ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body mt-3 inline-flex items-center text-sm font-semibold text-[var(--ypp-primary)] transition-colors hover:underline"
                  >
                    {weeklySpotlight.ctaLabel}
                    <svg className="ml-1 h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ) : (
                  <Link
                    href={weeklySpotlight.ctaHref}
                    className="font-body mt-3 inline-flex items-center text-sm font-semibold text-[var(--ypp-primary)] transition-colors hover:underline"
                  >
                    {weeklySpotlight.ctaLabel}
                    <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                )}
                {weeklySpotlight.disclaimer && (
                  <p className="font-body mt-2 text-[10px] leading-snug text-[var(--ypp-muted)] sm:text-[11px]">
                    {weeklySpotlight.disclaimer}
                  </p>
                )}
              </div>

              <div className="bg-gradient-to-b from-[var(--ypp-lavender)]/25 to-[var(--ypp-blush)]/20 p-4">
                <ul className="flex flex-wrap justify-center gap-2 sm:justify-start">
                  {passionTopics.map(({ label, href }, i) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="hero-animate-in inline-flex rounded-full border border-[var(--ypp-border)] bg-[var(--ypp-white)]/95 px-3 py-1.5 font-body text-[11px] font-semibold text-[var(--ypp-ink)] shadow-[var(--shadow-sm)] backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--ypp-primary)]/35 hover:bg-[var(--ypp-lavender)]/45 hover:text-[var(--ypp-primary)] hover:shadow-[var(--shadow-md)] sm:px-3.5 sm:py-2 sm:text-xs"
                        style={{ animationDelay: `${0.35 + i * 0.04}s` }}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-[var(--ypp-border)] bg-[var(--ypp-white)] px-4 py-2.5">
                <p className="text-center font-body text-[10px] leading-snug text-[var(--ypp-muted)] sm:text-[11px]">
                  Each chip links to Programs &amp; Chapters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </HeroSection>

      {/* Now Hiring banner */}
      <section className="bg-[var(--ypp-deep)] px-4 py-5 sm:px-6 lg:px-8">
        <div className="mx-auto flex min-w-0 max-w-6xl flex-col flex-wrap items-stretch justify-between gap-5 sm:flex-row sm:items-center sm:gap-6">
          <div className="flex min-w-0 flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <span className="font-label text-xs font-semibold uppercase tracking-widest text-[var(--ypp-primary)]">
              We&apos;re hiring
            </span>
            <p className="font-body text-sm text-white/85">
              High schoolers: teach a class or lead a chapter.
            </p>
          </div>
          <div className="flex min-w-0 flex-wrap items-center justify-start gap-3 sm:justify-end">
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
              className="font-body inline-flex min-h-[2.5rem] items-center rounded-full border-2 border-white/80 bg-transparent px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white hover:text-[var(--ypp-deep)]"
            >
              All openings
              <svg className="ml-1.5 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/join"
              className="font-body text-sm font-medium text-white/90 underline decoration-white/40 underline-offset-2 hover:text-white"
            >
              Taking classes? Join Us
            </Link>
          </div>
        </div>
      </section>

      {/* Stats strip — By the Numbers */}
      <section className="border-b border-[var(--ypp-border)] bg-[var(--ypp-white)] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto min-w-0 max-w-6xl">
          <p className="section-label justify-center text-[var(--ypp-muted)]">
            By the Numbers
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {statsByTheNumbers.map(({ value, label }) => (
              <div key={label} className="min-w-0 text-center">
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

      <ClassInActionGallery subtitle="Live video, shared tools, and small groups—same idea online and in person." />

      {/* Open positions — Join Our Team (cursor-follow bubble) */}
      <MouseFollowSection className="relative bg-[var(--ypp-blush)]/60 px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative z-10 mx-auto min-w-0 max-w-6xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--ypp-primary)]" aria-hidden />
            <p className="font-label text-xs font-semibold uppercase tracking-wider text-[var(--ypp-primary)]">
              Now Hiring
            </p>
          </div>
          <h2 className="font-heading mt-4 text-balance text-3xl font-bold tracking-tight text-[var(--ypp-deep)] sm:text-4xl">
            Teach or lead where you are
          </h2>
          <p className="font-body mt-4 max-w-2xl text-pretty leading-relaxed text-[var(--ypp-muted)]">
            Instructors and chapter presidents run programs locally and online.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {openPositions.map(({ title, description, href }) => (
              <Link
                key={title}
                href={href}
                className="group flex min-w-0 flex-col rounded-2xl border-2 border-[var(--ypp-border)] bg-[var(--ypp-white)] p-6 shadow-sm transition-all hover:border-[var(--ypp-primary)]/40 hover:shadow-md"
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
        <div className="mx-auto min-w-0 max-w-6xl text-right">
          <div className="flex items-center justify-end gap-3">
            <span className="h-px w-8 bg-[var(--ypp-primary)]" aria-hidden />
            <p className="font-label text-xs font-semibold uppercase tracking-wider text-[var(--ypp-primary)] underline decoration-[var(--ypp-primary)] underline-offset-2">
              Newest Courses
            </p>
          </div>
          <h2 className="font-heading mt-2 text-2xl font-bold text-[var(--ypp-deep)] sm:text-3xl">
            Newest Additions
          </h2>
          <p className="font-body ml-auto mt-3 max-w-2xl text-right text-[var(--ypp-muted)]">
            We add courses often. Until the student portal opens, use Programs &amp; Chapters for the catalog.
          </p>
          {getNewestCourses().length === 0 ? (
            <div className="card-ypp mt-12 flex flex-col items-center justify-center px-6 py-16 text-center">
              <p className="font-body text-lg text-[var(--ypp-ink)]">
                No classes available at the moment.
              </p>
              <p className="font-body mt-2 text-[var(--ypp-muted)]">
                Check back soon or browse Programs &amp; Chapters.
              </p>
              <Link
                href="/programs"
                className="btn-primary mt-6 inline-flex items-center"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                View Programs & Chapters
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ) : (
          <>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
                    className="card-ypp block min-w-0 text-left"
                  >
                    {CardInner}
                  </a>
                ) : (
                  <div key={course.name} className="card-ypp block min-w-0 text-left">
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
                View all Programs & Chapters
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
