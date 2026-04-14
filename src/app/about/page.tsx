"use client";

import { useState, useEffect } from "react";
import ClassInActionGallery from "@/components/ClassInActionGallery";
import SectionHeading from "@/components/SectionHeading";

type LeadershipMember = {
  personName: string;
  name: string;
  bio: string;
  image: string;
};

const leadership: LeadershipMember[] = [
  {
    personName: "Ian DiLorenzo",
    name: "Co-President",
    bio: "Ian is the Co-President of the Youth Passion Project. At YPP, he is the director of our in-person learning chapters. Outside of YPP, he loves the outdoors, movies, and learning about languages. He is currently studying both Latin and Spanish at Scarsdale High School, and loves to learn about the culture and history behind all sorts of different languages.",
    image: "/team/ian-dilorenzo.png",
  },
  {
    personName: "Aveena Haswani",
    name: "Co-President",
    bio: "Aveena is the Co-President of the Youth Passion Project. At YPP, she manages the tech team and oversees the overall communication strategy. Outside of YPP, she loves swimming, baking, and spending time with friends.",
    image: "/team/aveena-haswani.png",
  },
  {
    personName: "Brayden White",
    name: "Vice President for Instruction",
    bio: "Brayden is the Vice President of Instruction at the Youth Passion Project. He helps build programs that allow students to explore their interests and develop new skills. He built YPP's portal for students and instructors and helps train educators while supporting student instruction and programming across the organization. Brayden also teaches the BOW Sports Capital: Introduction to Sports Economics, a course on the business and economics behind professional sports. Outside of YPP, he enjoys spending time with friends, following sports, and finding the best food wherever he can.",
    image: "/team/brayden-white.png",
  },
  {
    personName: "Sanvi Mehta",
    name: "Vice President for Communication",
    bio: "Sanvi is the Vice President of Communication at the Youth Passion Project. In this role, she manages sponsorship outreach, oversees parent communication, and helps expand YPP's visibility through strategic marketing and social media. Sanvi first joined YPP as an ambitious student, taking classes in health, debate, and several other subjects. Through these experiences, she developed a strong passion for the organization and its mission, wanting to further her time at YPP. Outside of YPP, Sanvi enjoys spending time with friends, watching sports, and dancing.",
    image: "/team/sanvi-mehta.png",
  },
  {
    personName: "Katherine Zhang",
    name: "Chief of Staff",
    bio: "Katherine is a junior in high school on the East Coast and currently serves as Chief of Staff of the Youth Passion Project. In this role, she is responsible for overseeing recruitment, supporting staff members and their needs, and maintaining institutional knowledge to ensure continuity and efficiency in the organization. At school, Katherine is an officer of the speech and debate team, teaching lowerclassmen techniques to develop critical thinking and argumentation skills. She also enjoys learning history and Spanish. Outside of school, Katherine likes reading and hanging out with friends and family.",
    image: "/team/katherine-zhang.png",
  },
  {
    personName: "Anthea Zamir",
    name: "Chief Technology Officer",
    bio: "Anthea is a junior in high school in Seattle and serves as the Chief Technology Officer at the Youth Passion Project. She built and maintains the organization's website and is currently developing YPP's online portal for students and instructors. In her role, she oversees the organization's technical infrastructure and works to enhance the digital systems that support YPP's programs and operations. Previously, she also taught Introduction to Algebra 1 at YPP. Outside of her work, Anthea plays varsity golf at her school and enjoys traveling, attending concerts, and exploring new technology.",
    image: "/team/anthea-zamir.png",
  },
];

const aboutHeroStats = [
  { value: "3,400+", label: "Students" },
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
    <div className="min-w-0 w-full">
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
            Mission, model, and leadership.
          </p>

          <div className="mt-12 overflow-hidden rounded-3xl border border-[var(--ypp-border)] bg-gradient-to-b from-[var(--ypp-blush)]/80 to-[var(--ypp-white)] shadow-[0_8px_40px_rgba(59,15,110,0.06)]">
            <div className="border-b border-[var(--ypp-border)]/60 bg-[var(--ypp-white)]/60 px-6 py-5 text-center sm:px-8">
              <p className="font-label text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--ypp-primary)] sm:text-xs">
                By the numbers
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {aboutHeroStats.map(({ value, label }, i) => (
                <div
                  key={label}
                  className={[
                    "flex flex-col items-center px-5 py-9 text-center sm:px-8 sm:py-10",
                    i % 2 === 1 ? "max-lg:border-l max-lg:border-[var(--ypp-border)]/45" : "",
                    i >= 2 ? "max-lg:border-t max-lg:border-[var(--ypp-border)]/45" : "",
                    i > 0 ? "lg:border-l lg:border-[var(--ypp-border)]/50" : "",
                  ].join(" ")}
                >
                  <span className="font-heading text-3xl font-bold tabular-nums tracking-tight text-[var(--ypp-deep)] sm:text-4xl lg:text-[2.75rem] lg:leading-none">
                    {value}
                  </span>
                  <span className="mt-3 h-1 w-10 shrink-0 rounded-full bg-[var(--ypp-primary)]/25" aria-hidden />
                  <span className="font-label mt-3 text-xs font-medium uppercase tracking-wider text-[var(--ypp-muted)]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ClassInActionGallery subtitle="Online: live video and shared tools (e.g. Scratch, Lichess). In person: same programs with local logistics." />

      {/* Mission and how we work */}
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
            We connect young people with peer instructors, programs, and community so they can explore interests and
            build skills—with room to lead.
          </p>

          <div className="mt-12 flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--ypp-primary)]" aria-hidden />
            <p className="font-label text-xs font-semibold uppercase tracking-wider text-[var(--ypp-primary)] underline decoration-[var(--ypp-primary)] underline-offset-2">
              How We Work
            </p>
          </div>
          <h2 className="font-heading mt-4 text-2xl font-bold text-[var(--ypp-deep)]">
            How We Work
          </h2>
          <div className="mt-8 grid gap-8 sm:gap-10 md:grid-cols-3">
            <div>
              <h3 className="font-heading text-lg font-semibold text-[var(--ypp-ink)]">
                In the Classroom{" "}
                <span className="font-normal text-[var(--ypp-primary)]">
                  (Core Instruction)
                </span>
              </h3>
              <p className="font-body mt-3 text-[var(--ypp-muted)] leading-relaxed">
                In-person programs at partner schools. Students learn from trained peer instructors in small groups.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold text-[var(--ypp-ink)]">
                Your YPP Journey{" "}
                <span className="font-normal text-[var(--ypp-primary)]">
                  (Pathways)
                </span>
              </h3>
              <p className="font-body mt-3 text-[var(--ypp-muted)] leading-relaxed">
                From first class to advanced offerings and special programs—we support students and instructors over time.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold text-[var(--ypp-ink)]">
                Behind the Mission{" "}
                <span className="font-normal text-[var(--ypp-primary)]">
                  (Global Operations)
                </span>
              </h3>
              <p className="font-body mt-3 text-[var(--ypp-muted)] leading-relaxed">
                Staff handle logistics, partnerships, and tech so chapters and online programs can focus on teaching.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Staff: leadership — plain section (no overflow:hidden; avoids clipping hover/focus and #staff scroll) */}
      <section
        id="staff"
        className="scroll-mt-[calc(var(--ypp-nav-height)+0.75rem)] bg-[var(--ypp-lavender)]/20 px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-6xl min-w-0">
          <SectionHeading
            title="Leadership Team"
            subtitle="Who runs day-to-day operations"
          />
          <p className="font-body mt-2 text-center text-sm text-[var(--ypp-muted)]">
            Open a card for the full bio.
          </p>
          <ul className="mt-12 flex list-none flex-wrap justify-center gap-x-10 gap-y-10">
            {leadership.map((person) => (
              <li key={person.personName} className="w-full max-w-[18rem] min-w-0 sm:w-72 sm:max-w-none">
                <button
                  type="button"
                  onClick={() => setSelected(person)}
                  className="card-ypp w-full cursor-pointer overflow-hidden p-0 text-left transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[var(--ypp-primary)]"
                >
                  <div className="aspect-square bg-[var(--ypp-border)] overflow-hidden">
                    {person.image && person.image !== "/team/placeholder.jpg" ? (
                      <img
                        src={person.image}
                        alt=""
                        className="h-full w-full object-cover object-[50%_38%]"
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
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Modal: full bio, name, position, picture */}
      {selected && (
        <div
          className="fixed inset-0 z-[200] flex flex-col overflow-y-auto p-4 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-[calc(var(--ypp-nav-height)+0.75rem+env(safe-area-inset-top))] items-center justify-start sm:justify-center sm:pt-[calc(var(--ypp-nav-height)+0.5rem+env(safe-area-inset-top))]"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-name"
        >
          <button
            type="button"
            className="absolute inset-0 z-0 bg-neutral-900/45"
            onClick={() => setSelected(null)}
            aria-label="Close dialog"
            tabIndex={-1}
          />
          <div className="relative z-[1] w-full max-w-4xl max-h-[min(85dvh,calc(100dvh-var(--ypp-nav-height)-2.5rem))] overflow-y-auto overscroll-contain rounded-2xl border border-[var(--ypp-border)] bg-[var(--ypp-white)] shadow-2xl">
            <div className="sticky top-0 z-10 flex justify-end border-b border-[var(--ypp-border)] bg-[var(--ypp-white)]/95 p-2 backdrop-blur-sm supports-[backdrop-filter]:bg-[var(--ypp-white)]/80">
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
                      className="h-full w-full object-cover object-[50%_38%]"
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
