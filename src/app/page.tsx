import Link from "next/link";
import ClassInActionGallery from "@/components/ClassInActionGallery";
import HeroSection from "@/components/HeroSection";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";
import { hiringRolePills, openPositions, PORTAL_URL } from "@/constants/site";
import { homeTestimonials } from "@/constants/testimonials";

export default function HomePage() {
  return (
    <div className="w-full min-w-0">
      {/* Hero */}
      <HeroSection className="hero-celestial hero-celestial-curve relative flex min-h-[min(88vh,52rem)] flex-col overflow-hidden px-4 pt-10 pb-20 sm:px-6 sm:pt-14 sm:pb-28 lg:px-10 lg:pt-16 lg:pb-24">
        <div className="relative z-10 mx-auto flex w-full min-w-0 max-w-6xl flex-1 flex-col justify-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16 xl:gap-20">
          <div className="min-w-0 max-w-2xl">
            <div
              className="hero-animate-in mb-5 flex items-center gap-3"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="h-px w-8 shrink-0 bg-[var(--ypp-primary)] sm:w-10" aria-hidden />
              <p className="font-label text-[11px] font-semibold uppercase tracking-wider text-[var(--ypp-primary)] sm:text-xs">
                Summer 2026 · Now Accepting Applications
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
              Free classes taught by passionate students—designed to help learners grow, explore, and succeed together. Join a class or become a mentor.
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
              <a
                href={PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary font-body inline-flex min-h-[2.75rem] items-center px-6 py-3 text-base"
              >
                Student Portal
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          <div className="w-full min-w-0 shrink-0 lg:max-w-md xl:max-w-lg">
            <div
              className="hero-animate-in overflow-hidden rounded-2xl border border-white/80 bg-white/92 shadow-[0_22px_70px_rgba(59,15,110,0.20)] ring-1 ring-[var(--ypp-primary)]/15 backdrop-blur-md"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="border-b border-[var(--ypp-border)] bg-gradient-to-br from-[var(--ypp-lavender)]/70 via-white/70 to-[var(--ypp-blush)]/60 px-6 py-6 sm:px-7">
                <div className="flex items-center gap-2">
                  <span className="h-px w-6 shrink-0 bg-[var(--ypp-primary)]" aria-hidden />
                  <p className="font-label text-[10px] font-semibold uppercase tracking-wider text-[var(--ypp-primary)] sm:text-xs">
                    Summer 2026 · Applications open
                  </p>
                </div>
                <h2 className="font-heading mt-3 text-3xl font-bold leading-tight tracking-tight text-[var(--ypp-deep)] sm:text-[2.1rem]">
                  Find your place at YPP this summer
                </h2>
              </div>

              <div className="bg-[var(--ypp-white)] px-6 py-6 sm:px-7 sm:py-7">
                <div className="flex items-center gap-2">
                  <span className="h-px w-6 shrink-0 bg-[var(--ypp-primary)]/70" aria-hidden />
                  <p className="font-label text-[10px] font-semibold uppercase tracking-wider text-[var(--ypp-primary)] sm:text-xs">
                    Open roles and registration
                  </p>
                </div>
                <h3 className="font-heading mt-3 text-2xl font-semibold leading-snug text-[var(--ypp-deep)] sm:text-[1.7rem]">
                  Classes, teaching roles, chapter leadership, and tech team roles are live.
                </h3>
                <p className="font-body mt-4 text-sm leading-relaxed text-[var(--ypp-muted)] sm:text-base">
                  Create an account in the student portal to register for courses or apply to help run the next session.
                </p>
                <div className="mt-5 grid grid-cols-2 gap-2 text-sm sm:grid-cols-3">
                  {["Students", "Chapters", "Tech"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--ypp-primary)]/15 bg-[var(--ypp-lavender)]/45 px-3 py-2 text-center font-body text-xs font-semibold text-[var(--ypp-deep)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <a
                  href={PORTAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary font-body mt-7 inline-flex min-h-[3.35rem] w-full items-center justify-center rounded-xl px-5 py-4 text-center text-base font-bold shadow-[0_12px_34px_rgba(107,33,200,0.30)]"
                >
                  Apply in the portal
                  <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
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
              Summer 2026 · Now Accepting Applications
            </span>
            <p className="font-body text-sm text-white/85">
              High schoolers: teach a class, lead a chapter, or help build YPP tech this summer.
            </p>
          </div>
          <div className="flex min-w-0 flex-wrap items-center justify-start gap-3 sm:justify-end">
            <Link
              href="/join"
              className="font-body rounded-full bg-white px-6 py-3 text-base font-bold text-[var(--ypp-deep)] shadow-md ring-2 ring-white/40 transition-all hover:scale-105 hover:bg-[var(--ypp-lavender)] hover:shadow-lg"
            >
              Technology Manager
            </Link>
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
              href="/join"
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

      <ClassInActionGallery subtitle="Live video, shared tools, and small groups—same idea online and in person." />

      <section
        className="border-y border-[var(--ypp-border)] bg-[var(--ypp-white)] px-4 py-16 sm:px-6 lg:px-8"
        aria-labelledby="testimonials-heading"
      >
        <div className="mx-auto max-w-6xl min-w-0">
          <div className="text-center">
            <p className="font-label text-xs font-semibold uppercase tracking-wider text-[var(--ypp-primary)]">
              From families
            </p>
            <h2
              id="testimonials-heading"
              className="font-heading mt-3 text-balance text-3xl font-bold tracking-tight text-[var(--ypp-deep)] sm:text-4xl"
            >
              What people are saying
            </h2>
          </div>
          <TestimonialsMarquee items={homeTestimonials} />
        </div>
      </section>

      {/* Open positions — Join Our Team (palette + glass cards aligned with celestial hero) */}
      <section className="relative overflow-hidden border-y border-[var(--ypp-border)]/40 bg-gradient-to-b from-[#e8deff]/90 via-[var(--ypp-blush)]/85 to-[#faf7ff] px-4 py-16 sm:px-6 lg:px-8">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,rgba(139,63,232,0.14),transparent_55%),radial-gradient(ellipse_70%_45%_at_100%_50%,rgba(107,33,200,0.06),transparent)]"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[rgba(255,255,255,0.55)] to-transparent" aria-hidden />
        <div className="relative z-10 mx-auto min-w-0 max-w-6xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--ypp-primary)]" aria-hidden />
            <p className="font-label text-xs font-semibold uppercase tracking-wider text-[var(--ypp-primary)]">
              Now Hiring
            </p>
            <span className="h-px w-8 bg-[var(--ypp-primary)]/50 sm:w-12" aria-hidden />
          </div>
          <h2 className="font-heading mt-4 text-balance text-3xl font-bold tracking-tight text-[var(--ypp-deep)] sm:text-4xl">
            Lead or build where you are
          </h2>
          <p className="font-body mt-4 max-w-2xl text-pretty leading-relaxed text-[var(--ypp-muted)]">
            Instructors, chapter presidents, and technology managers help run programs and keep YPP moving.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {openPositions.map(({ title, description, href }) => (
              <Link
                key={title}
                href={href}
                className="group flex min-w-0 flex-col rounded-2xl border border-white/70 bg-[rgba(255,255,255,0.72)] p-6 shadow-[0_8px_32px_rgba(59,15,110,0.08)] ring-1 ring-[var(--ypp-primary)]/10 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--ypp-primary)]/35 hover:bg-[rgba(255,255,255,0.88)] hover:shadow-[0_12px_40px_rgba(107,33,200,0.12)] hover:ring-[var(--ypp-primary)]/20"
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
              href="/join"
              className="btn-primary font-body inline-flex items-center rounded-full px-6 py-3 text-base shadow-[0_6px_24px_rgba(107,33,200,0.25)]"
            >
              View all openings
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
