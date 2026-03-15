"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import MouseFollowSection from "@/components/MouseFollowSection";
import SectionHeading from "@/components/SectionHeading";

type LeadershipMember = {
  personName: string;
  name: string;
  bio: string;
  image: string;
  email?: string;
};

const leadership: LeadershipMember[] = [
  {
    personName: "Ian DiLorenzo",
    name: "Co-President",
    bio: "Shares overall strategy, partnerships, and day-to-day leadership of Youth Passion Project.",
    image: "/team/placeholder.jpg",
    email: "ian.dilorenzo@youthpassionproject.org",
  },
  {
    personName: "Aveena Haswani",
    name: "Co-President",
    bio: "Shares overall strategy, partnerships, and day-to-day leadership of Youth Passion Project.",
    image: "/team/placeholder.jpg",
    email: "aveena.haswani@youthpassionproject.org",
  },
  {
    personName: "Brayden White",
    name: "Vice President for Instruction",
    bio: "Brayden is the Vice President of Instruction at the Youth Passion Project. He helps build programs that allow students to explore their interests and develop new skills. He built YPP's portal for students and instructors and helps train educators while supporting student instruction and programming across the organization. Brayden also teaches the BOW Sports Capital: Introduction to Sports Economics, a course on the business and economics behind professional sports. Outside of YPP, he enjoys spending time with friends, following sports, and finding the best food wherever he can.",
    image: "/team/brayden-white.png",
    email: "brayden.white@youthpassionproject.org",
  },
  {
    personName: "Sanvi Mehta",
    name: "Vice President for Communication",
    bio: "Leads messaging, social media, and external communications for YPP.",
    image: "/team/placeholder.jpg",
    email: "sanvi.mehta@youthpassionproject.org",
  },
  {
    personName: "Katherine Zhang",
    name: "Chief of Staff",
    bio: "Katherine is a junior in high school on the East Coast and currently serves as Chief of Staff of the Youth Passion Project. In this role, she is responsible for overseeing recruitment, supporting staff members and their needs, and maintaining institutional knowledge to ensure continuity and efficiency in the organization. At school, Katherine is an officer of the speech and debate team, teaching lowerclassmen techniques to develop critical thinking and argumentation skills. She also enjoys learning history and Spanish. Outside of school, Katherine likes reading and hanging out with friends and family.",
    image: "/team/placeholder.jpg",
    email: "katherine.zhang@youthpassionproject.org",
  },
  {
    personName: "Anthea Zamir",
    name: "Director of Technology",
    bio: "Anthea is a junior in high school in Seattle and serves as Director of Technology at the Youth Passion Project. She built and maintains the organization's website and is currently developing YPP's online portal for students and instructors. In her role, she oversees the organization's technical infrastructure and works on building and improving the digital systems that support YPP's programs and operations. Outside of YPP, Anthea plays varsity golf at her school and enjoys traveling, attending concerts, and exploring new technology.",
    image: "/team/placeholder.jpg",
    email: "anthea.zamir@youthpassionproject.org",
  },
  {
    personName: "Yuvaan Das",
    name: "Director of Technology",
    bio: "Leads technology, systems, and digital infrastructure for programs and the organization.",
    image: "/team/placeholder.jpg",
    email: "yuvaan.das@youthpassionproject.org",
  },
];

const aboutHeroStats = [
  { value: "3,200+", label: "Students" },
  { value: "200+", label: "Instructors" },
  { value: "110+", label: "Courses" },
  { value: "30+", label: "Countries" },
];

export default function AboutPage() {
  const [selected, setSelected] = useState<LeadershipMember | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, [selected]);

  return (
    <div>
      {/* About header — label with lines both sides, title, subtitle, stats card */}
      <section className="border-b border-[var(--ypp-border)] bg-[var(--ypp-white)] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 shrink-0 bg-[var(--ypp-primary)]/60" aria-hidden />
            <p className="font-label text-xs font-semibold uppercase tracking-wider text-[var(--ypp-muted)]">
              About
            </p>
            <span className="h-px w-8 shrink-0 bg-[var(--ypp-primary)]/60" aria-hidden />
          </div>
          <h1 className="font-heading mt-4 text-center text-4xl font-bold tracking-tight text-[var(--ypp-ink)] sm:text-5xl">
            About Youth Passion Project
          </h1>
          <p className="font-body mt-4 text-center text-lg text-[var(--ypp-muted)]">
            Who we are, what we believe, and the people behind our mission.
          </p>
          <div className="card-ypp mt-12 overflow-hidden">
            <div className="grid grid-cols-2 divide-x divide-[var(--ypp-border)] sm:grid-cols-4">
              {aboutHeroStats.map(({ value, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center justify-center px-4 py-6 text-center sm:px-6 sm:py-8"
                >
                  <span className="font-heading text-2xl font-bold text-[var(--ypp-primary)] sm:text-3xl">
                    {value}
                  </span>
                  <span className="font-label mt-1 text-xs uppercase tracking-wider text-[var(--ypp-muted)]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & vision (lengthy) */}
      <section className="bg-[var(--ypp-blush)]/60 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--ypp-primary)]" aria-hidden />
            <p className="font-label text-xs font-semibold uppercase tracking-wider text-[var(--ypp-primary)] underline decoration-[var(--ypp-primary)] underline-offset-2">
              Our Mission
            </p>
          </div>
          <h2 className="font-heading mt-4 text-2xl font-bold text-[var(--ypp-deep)]">
            Our Mission
          </h2>
          <p className="font-body mt-4 text-[var(--ypp-muted)] leading-relaxed">
            The Youth Passion Project is a Delaware Nonprofit Corporation with
            501(c)(3) exempt status. We were first created to make use of the
            free time in people&apos;s schedules during COVID-19, and we&apos;ve
            grown into a lasting platform for peer-to-peer learning.
          </p>
          <p className="font-body mt-4 text-[var(--ypp-muted)] leading-relaxed">
            We believe that students should always have the opportunity to
            explore new topics of interest that they cannot learn in most school
            settings. Our goal is to provide these opportunities to those with
            a love for learning, while also allowing high school students to
            share their passions with others.
          </p>
          <p className="font-body mt-4 text-[var(--ypp-muted)] leading-relaxed">
            We offer free online and in-person courses taught by high schoolers to
            encourage younger students to expand and supplement their learning.
            Our large variety of classes ranges from Songwriting to the Art of
            Baking and Introduction to Coding in Java. Classes may be held
            online (e.g., Zoom) or in person where we have chapters. Every
            course emphasizes practice and commitment, and classes generally run
            from thirty minutes to an hour, meeting once or twice a week.
          </p>

          <div className="mt-12 flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--ypp-primary)]" aria-hidden />
            <p className="font-label text-xs font-semibold uppercase tracking-wider text-[var(--ypp-primary)] underline decoration-[var(--ypp-primary)] underline-offset-2">
              Our Vision
            </p>
          </div>
          <h2 className="font-heading mt-4 text-2xl font-bold text-[var(--ypp-deep)]">
            Our Vision
          </h2>
          <p className="font-body mt-4 text-[var(--ypp-muted)] leading-relaxed">
            We envision a world where every young person can pursue their
            curiosity—whether academic, creative, or technical—without cost or
            gatekeeping. By pairing passionate high school instructors with
            eager younger learners, we build community, confidence, and skills
            that last a lifetime. We aim to expand into new communities, develop
            an even broader set of courses, and keep our programs 100% free for
            all students.
          </p>
        </div>
      </section>

      {/* Staff: leadership — tap a card to open modal (cursor-follow bubble) */}
      <MouseFollowSection id="staff" className="relative scroll-mt-20 bg-[var(--ypp-lavender)]/20 px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative z-10 mx-auto max-w-6xl">
          <SectionHeading
            title="Leadership Team"
            subtitle="The people who guide Youth Passion Project"
          />
          <p className="font-body mt-2 text-center text-sm text-[var(--ypp-muted)]">
            Tap a card to see full bio and contact.
          </p>
          <div className="mt-12 flex flex-col items-center gap-10">
            {/* Row 1: 2 cards — Co-Presidents */}
            <div className="flex flex-wrap justify-center gap-10">
              {leadership.slice(0, 2).map((person, i) => (
                <button
                  type="button"
                  key={`leadership-0-${i}`}
                  onClick={() => setSelected(person)}
                  className="card-ypp w-72 shrink-0 cursor-pointer overflow-hidden p-0 text-left transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[var(--ypp-primary)]"
                >
                  <div className="aspect-square bg-[var(--ypp-border)] overflow-hidden">
                    {person.image && person.image !== "/team/placeholder.jpg" ? (
                      <img
                        src={person.image}
                        alt=""
                        className="h-full w-full object-cover object-top"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-[var(--ypp-muted)] text-sm">
                        Photo
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold tracking-wider text-[var(--ypp-primary)]">
                      {person.personName}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-[var(--ypp-ink)]">
                      {person.name}
                    </h3>
                    {person.email ? (
                      <a
                        href={`mailto:${person.email}`}
                        onClick={(e) => e.stopPropagation()}
                        className="mt-3 inline-flex items-center gap-1.5 rounded-md border border-[var(--ypp-primary)] px-2.5 py-1.5 font-body text-xs font-semibold text-[var(--ypp-primary)] transition-colors hover:bg-[var(--ypp-primary)] hover:text-white"
                        aria-label={`Email ${person.personName}`}
                      >
                        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Email
                      </a>
                    ) : (
                      <Link
                        href="/contact"
                        onClick={(e) => e.stopPropagation()}
                        className="mt-3 inline-flex items-center gap-1.5 rounded-md border border-[var(--ypp-primary)] px-2.5 py-1.5 font-body text-xs font-semibold text-[var(--ypp-primary)] transition-colors hover:bg-[var(--ypp-primary)] hover:text-white"
                        aria-label={`Contact ${person.personName}`}
                      >
                        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Contact
                      </Link>
                    )}
                  </div>
                </button>
              ))}
            </div>
            {/* Row 2: 3 cards */}
            <div className="flex flex-wrap justify-center gap-10">
              {leadership.slice(2, 5).map((person, i) => (
                <button
                  type="button"
                  key={`leadership-1-${i}`}
                  onClick={() => setSelected(person)}
                  className="card-ypp w-72 shrink-0 cursor-pointer overflow-hidden p-0 text-left transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[var(--ypp-primary)]"
                >
                  <div className="aspect-square bg-[var(--ypp-border)] overflow-hidden">
                    {person.image && person.image !== "/team/placeholder.jpg" ? (
                      <img
                        src={person.image}
                        alt=""
                        className="h-full w-full object-cover object-top"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-[var(--ypp-muted)] text-sm">
                        Photo
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold tracking-wider text-[var(--ypp-primary)]">
                      {person.personName}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-[var(--ypp-ink)]">
                      {person.name}
                    </h3>
                    {person.email ? (
                      <a
                        href={`mailto:${person.email}`}
                        onClick={(e) => e.stopPropagation()}
                        className="mt-3 inline-flex items-center gap-1.5 rounded-md border border-[var(--ypp-primary)] px-2.5 py-1.5 font-body text-xs font-semibold text-[var(--ypp-primary)] transition-colors hover:bg-[var(--ypp-primary)] hover:text-white"
                        aria-label={`Email ${person.personName}`}
                      >
                        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Email
                      </a>
                    ) : (
                      <Link
                        href="/contact"
                        onClick={(e) => e.stopPropagation()}
                        className="mt-3 inline-flex items-center gap-1.5 rounded-md border border-[var(--ypp-primary)] px-2.5 py-1.5 font-body text-xs font-semibold text-[var(--ypp-primary)] transition-colors hover:bg-[var(--ypp-primary)] hover:text-white"
                        aria-label={`Contact ${person.personName}`}
                      >
                        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Contact
                      </Link>
                    )}
                  </div>
                </button>
              ))}
            </div>
            {/* Row 3: 2 cards */}
            <div className="flex flex-wrap justify-center gap-10">
              {leadership.slice(5, 7).map((person, i) => (
                <button
                  type="button"
                  key={`leadership-2-${i}`}
                  onClick={() => setSelected(person)}
                  className="card-ypp w-72 shrink-0 cursor-pointer overflow-hidden p-0 text-left transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[var(--ypp-primary)]"
                >
                  <div className="aspect-square bg-[var(--ypp-border)] overflow-hidden">
                    {person.image && person.image !== "/team/placeholder.jpg" ? (
                      <img
                        src={person.image}
                        alt=""
                        className="h-full w-full object-cover object-top"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-[var(--ypp-muted)] text-sm">
                        Photo
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold tracking-wider text-[var(--ypp-primary)]">
                      {person.personName}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-[var(--ypp-ink)]">
                      {person.name}
                    </h3>
                    {person.email ? (
                      <a
                        href={`mailto:${person.email}`}
                        onClick={(e) => e.stopPropagation()}
                        className="mt-3 inline-flex items-center gap-1.5 rounded-md border border-[var(--ypp-primary)] px-2.5 py-1.5 font-body text-xs font-semibold text-[var(--ypp-primary)] transition-colors hover:bg-[var(--ypp-primary)] hover:text-white"
                        aria-label={`Email ${person.personName}`}
                      >
                        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Email
                      </a>
                    ) : (
                      <Link
                        href="/contact"
                        onClick={(e) => e.stopPropagation()}
                        className="mt-3 inline-flex items-center gap-1.5 rounded-md border border-[var(--ypp-primary)] px-2.5 py-1.5 font-body text-xs font-semibold text-[var(--ypp-primary)] transition-colors hover:bg-[var(--ypp-primary)] hover:text-white"
                        aria-label={`Contact ${person.personName}`}
                      >
                        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Contact
                      </Link>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </MouseFollowSection>

      {/* Modal: full bio, name, position, email, picture */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-name"
        >
            <button
              type="button"
              className="absolute inset-0 bg-neutral-400/40"
              onClick={() => setSelected(null)}
              aria-label="Close"
              tabIndex={-1}
            />
          <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-[var(--ypp-border)] bg-[var(--ypp-white)] shadow-xl">
            <div className="sticky top-0 z-10 flex justify-end border-b border-[var(--ypp-border)] bg-[var(--ypp-white)] p-2">
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="rounded-full p-2 text-[var(--ypp-muted)] transition-colors hover:bg-[var(--ypp-lavender)] hover:text-[var(--ypp-ink)]"
                aria-label="Close"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:gap-8">
                <div className="mx-auto h-80 w-80 shrink-0 overflow-hidden rounded-xl bg-[var(--ypp-border)] sm:h-96 sm:w-96">
                  {selected.image && selected.image !== "/team/placeholder.jpg" ? (
                    <img
                      src={selected.image}
                      alt=""
                      className="h-full w-full object-cover object-top"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-[var(--ypp-muted)]">
                      Photo
                    </div>
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <p id="modal-name" className="text-xs font-semibold tracking-wider text-[var(--ypp-primary)]">
                    {selected.personName}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-[var(--ypp-ink)]">
                    {selected.name}
                  </h3>
                  {selected.email && (
                    <p className="mt-2 font-body text-sm text-[var(--ypp-muted)]">
                      <a
                        href={`mailto:${selected.email}`}
                        className="text-[var(--ypp-primary)] hover:underline"
                      >
                        {selected.email}
                      </a>
                    </p>
                  )}
                  {selected.email ? (
                    <a
                      href={`mailto:${selected.email}`}
                      className="mt-3 inline-flex items-center gap-2 rounded-lg border-2 border-[var(--ypp-primary)] bg-[var(--ypp-white)] px-4 py-2 font-body text-sm font-semibold text-[var(--ypp-primary)] transition-colors hover:bg-[var(--ypp-primary)] hover:text-white"
                      aria-label={`Email ${selected.personName}`}
                    >
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Email
                    </a>
                  ) : (
                    <Link
                      href="/contact"
                      className="mt-3 inline-flex items-center gap-2 rounded-lg border-2 border-[var(--ypp-primary)] bg-[var(--ypp-white)] px-4 py-2 font-body text-sm font-semibold text-[var(--ypp-primary)] transition-colors hover:bg-[var(--ypp-primary)] hover:text-white"
                      aria-label={`Contact ${selected.personName}`}
                    >
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Contact
                    </Link>
                  )}
                  <p className="font-body mt-4 text-sm leading-relaxed text-[var(--ypp-muted)] sm:text-base">
                    {selected.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
