"use client";

import { useEffect, useRef, useCallback } from "react";
import PageHeader from "@/components/PageHeader";

type Newsletter = {
  id: string;
  title: string;
  date: string;
  summary: string;
  image: string;
  readTime: string;
  href: string;
};

const newsletters: Newsletter[] = [
  {
    id: "summer-2026",
    title: "Summer 2026 Update: New Courses & Apply Flow",
    date: "July 18, 2026",
    summary:
      "Registration is open for Summer 2026. We expanded our catalog with Algebra 2, Sports Economics, and Public Speaking. Use the new student portal to apply to teach, lead a chapter, or take a class. In-person cohorts at partner schools also open this window.",
    image: "/newsletters/summer-2026.jpg",
    readTime: "5 min read",
    href: "#",
  },
  {
    id: "success-stories-2026",
    title: "Success Stories from Fall 2025",
    date: "January 8, 2026",
    summary:
      "Over 1,200 learners completed the Fall session. Student and instructor testimonials, attendance highlights, and instructor spotlights from our chapters in Scarsdale, New York, and Frisco, Texas.",
    image: "/newsletters/fall-2025.jpg",
    readTime: "7 min read",
    href: "#",
  },
  {
    id: "portal-launch",
    title: "Student Portal is Live",
    date: "June 2, 2025",
    summary:
      "We shipped the new student portal. Explore sessions, register for classes, and track your progress in one place. Instructors and chapter presidents also have new admin tools for attendance and scheduling.",
    image: "/newsletters/portal-launch.jpg",
    readTime: "4 min read",
    href: "#",
  },
];

function ScrollArrows({
  scrollContainerRef,
}: {
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const scrollByAmount = (direction: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const cardWidth = el.querySelector("article")?.offsetWidth ?? 320;
    const gap = 24;
    el.scrollBy({ left: direction === "left" ? -(cardWidth + gap) : cardWidth + gap, behavior: "smooth" });
  };

  return (
    <>
      <button
        type="button"
        onClick={() => scrollByAmount("left")}
        className="scroll-arrow scroll-arrow-prev"
        aria-label="Previous newsletters"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => scrollByAmount("right")}
        className="scroll-arrow scroll-arrow-next"
        aria-label="Next newsletters"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </>
  );
}

export default function NewsletterPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Keyboard navigation
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollContainerRef.current?.querySelector('[aria-label="Next newsletters"]')?.dispatchEvent(
        new MouseEvent("click", { bubbles: true })
      );
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollContainerRef.current?.querySelector('[aria-label="Previous newsletters"]')?.dispatchEvent(
        new MouseEvent("click", { bubbles: true })
      );
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  return (
    <div className="min-w-0 w-full">
      <PageHeader
        label="Newsletter"
        title="Newsletter"
        subtitle="Updates, stories, and announcements from YPP."
      />

      <section className="border-y border-[var(--ypp-border)] bg-[var(--ypp-white)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-6xl min-w-0">
          {/* Scroll container with fade edges */}
          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="scroll-container flex gap-6 overflow-x-auto pb-4 scroll-smooth"
              aria-label="Newsletters"
              role="region"
            >
              {newsletters.map((item) => (
                <article
                  key={item.id}
                  className="card-ypp flex w-80 flex-col overflow-hidden rounded-3xl border border-[var(--ypp-border)] bg-[var(--ypp-white)] text-left transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_20px_60px_rgba(107,33,200,0.18)] hover:ring-2 hover:ring-[var(--ypp-primary)]/30 cursor-pointer md:w-96"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[var(--ypp-border)]">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-sm text-[var(--ypp-muted)]">
                        Photo
                      </div>
                    )}
                    <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-black/35 to-transparent" aria-hidden />
                    <span className="absolute left-4 top-4 rounded-full bg-white/88 px-3 py-1.5 font-label text-[11px] font-semibold uppercase tracking-widest text-[var(--ypp-deep)]">
                      {item.date}
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
                    <h2 className="font-heading text-xl font-semibold leading-snug text-[var(--ypp-ink)] sm:text-2xl">
                      {item.title}
                    </h2>
                    <p className="font-body mt-3 flex-1 text-sm leading-relaxed text-[var(--ypp-muted)] sm:text-base">
                      {item.summary}
                    </p>
                    <div className="mt-5 flex items-center justify-between gap-3">
                      <span className="font-label text-[11px] font-medium uppercase tracking-widest text-[var(--ypp-muted)]">
                        {item.readTime}
                      </span>
                      <a
                        href={item.href}
                        className="btn-secondary inline-flex min-h-[2.5rem] items-center rounded-full px-5 py-2.5 text-sm"
                      >
                        Read newsletter
                        <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Fade edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[var(--ypp-white)] to-transparent" aria-hidden />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[var(--ypp-white)] to-transparent" aria-hidden />
          </div>

          {/* Navigation arrows */}
          <ScrollArrows scrollContainerRef={scrollContainerRef} />
        </div>
      </section>
    </div>
  );
}