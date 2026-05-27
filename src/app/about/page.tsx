"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import SectionHeading from "@/components/SectionHeading";

type LeadershipMember = {
  personName: string;
  role: string;
  location: string;
  bio: string;
  image: string;
};

const leadership: LeadershipMember[] = [
  {
    personName: "Aveena Haswani",
    role: "Co-President",
    location: "Acton, MA",
    bio: "Aveena is the Co-President of the Youth Passion Project. At YPP, she manages the technology team and oversees the overall communication strategy. Outside of YPP, she loves swimming, baking, and spending time with friends.",
    image: "/team/aveena-haswani-new.jpg",
  },
  {
    personName: "Ian DiLorenzo",
    role: "Co-President",
    location: "Scarsdale, NY",
    bio: "Ian is the Co-President of the Youth Passion Project. At YPP, he is the director of our in-person learning chapters. Outside of YPP, he loves the outdoors, movies, and learning about languages. He is currently studying both Latin and Spanish at Scarsdale High School, and loves to learn about the culture and history behind all sorts of different languages.",
    image: "/team/ian-dilorenzo-new.jpg",
  },
  {
    personName: "Brayden White",
    role: "Vice President of Instruction",
    location: "Scarsdale, NY",
    bio: "Brayden is the Vice President of Instruction of the Youth Passion Project. He helps build programs that allow students to explore their interests and develop new skills. He built YPP's portal for students and instructors and helps train educators while supporting student instruction and programming across the organization. Brayden also teaches the BOW Sports Capital: Introduction to Sports Economics, a course on the business and economics behind professional sports. Outside of YPP, he enjoys spending time with friends, following sports, and finding the best food wherever he can.",
    image: "/team/brayden-white-new.jpg",
  },
  {
    personName: "Sanvi Mehta",
    role: "Vice President of Communications",
    location: "Frisco, TX",
    bio: "Sanvi is the Vice President of Communications of the Youth Passion Project. In this role, she manages sponsorship outreach, oversees parent communication, and helps expand YPP's visibility through strategic marketing and social media. Sanvi first joined YPP as an ambitious student, taking classes in health, debate, and several other subjects. Through these experiences, she developed a strong passion for the organization and its mission, wanting to further her involvement at YPP. Outside of YPP, Sanvi enjoys spending time with friends, watching sports, and dancing.",
    image: "/team/sanvi-mehta-new.jpg",
  },
  {
    personName: "Katherine Zhang",
    role: "Chief of Staff",
    location: "Scarsdale, NY",
    bio: "Katherine is a junior in high school on the East Coast and currently serves as Chief of Staff of the Youth Passion Project. In this role, she is responsible for overseeing recruitment, supporting staff members and their needs, and maintaining institutional knowledge to ensure continuity and efficiency in the organization. At school, Katherine is an officer of the speech and debate team, teaching lowerclassmen techniques to develop critical thinking and argumentation skills. She also enjoys learning about history and Spanish. Outside of school, Katherine likes reading and hanging out with friends and family.",
    image: "/team/katherine-zhang-new-optimized.jpg",
  },
  {
    personName: "Anthea Zamir",
    role: "Chief Technology Officer",
    location: "Snoqualmie, WA",
    bio: "Anthea is a junior in high school in the Greater Seattle Area and serves as the Chief Technology Officer of the Youth Passion Project. She built and maintains the organization's website and is currently developing YPP's online portal for students and instructors. In her role, she oversees the organization's technical infrastructure and works to enhance the digital systems that support YPP's programs and operations. Previously, she also taught Introduction to Algebra 1 at YPP. Outside of her work, Anthea plays golf at her school and enjoys traveling, attending concerts, and exploring new technology.",
    image: "/team/anthea-zamir.jpg",
  },
  {
    personName: "Milo Wald",
    role: "Chapter President",
    location: "Scarsdale, NY",
    bio: "Milo is the Chapter President at Scarsdale of the Youth Passion Project, where he helps lead and organize in-person learning opportunities for students in his community. Outside of school, he enjoys exploring STEM topics, playing soccer, and snowboarding. He is always excited to learn new things and share his interests with others through both academics and leadership.",
    image: "/team/milo-wald.jpg",
  },
  {
    personName: "Wesley Ho",
    role: "Director of Technology",
    location: "New York, NY",
    bio: "Wesley is the Director of Technology of the Youth Passion Project (YPP) and a junior in high school in New York. While working at YPP, he works alongside YPP's tech team to make sure its software is up to date and works to improve the learning experiences of educators and students across the country. Outside of YPP, he is a member of his school's Science Olympiad team and enjoys learning alongside and getting to know other people.",
    image: "/team/wesley-ho.jpg",
  },
  {
    personName: "Jackson Faber",
    role: "Communications Director",
    location: "San Rafael, CA",
    bio: "Jackson, a high school junior in San Francisco, California, is the Communications Director of the Youth Passion Project. As Communications Director, he is in charge of coordinating YPP's initiatives and spearheading various communication projects. Outside of school, Jackson captains his high school's varsity tennis and cross-country teams and also plays varsity soccer. Aside from athletics, he likes spending time with friends and reading interesting books.",
    image: "/team/jackson-faber.jpg",
  },
  {
    personName: "Jennifer Chen",
    role: "Communications Manager",
    location: "Brooklyn, NY",
    bio: "Jennifer, a high school sophomore in New York, is the Communications Manager of the Youth Passion Project. As Communications Manager, she is in charge of expanding YPP, managing social media content execution, maintaining consistent branding, and ensuring that all communication among parents, students, and teams is smooth. Prior to YPP, she tutored elementary and middle school students online and in person, sparking her interest in helping other students.",
    image: "/team/jennifer-chen.jpg",
  },
  {
    personName: "Alina Peng",
    role: "Social Media Manager",
    location: "Scarsdale, NY",
    bio: "Alina is a junior in high school in New York and serves as the Social Media Manager of the Youth Passion Project. She is in charge of creating content for YPP's Instagram as well as TikTok to increase outreach to potential students and teachers. Through her different posts, she helps promote YPP's mission and increase awareness of its programs, opportunities, and benefits.",
    image: "/team/alina-peng-optimized.jpg",
  },
];

const aboutHeroStats = [
  { value: "3,400+", label: "Students" },
  { value: "200+", label: "Volunteers" },
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
            We connect young people with peer teachers, programs, and community so they can explore interests and
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
                In-person programs at partner schools. Students learn from trained peer teachers in small groups.
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
                From first class to advanced offerings and special programs—we support students and volunteers over time.
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
            subtitle="Meet the students leading YPP's programs, technology, and communications."
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
                  <div className="relative aspect-square overflow-hidden bg-[var(--ypp-border)]">
                    {person.image && person.image !== "/team/placeholder.jpg" ? (
                      <Image
                        src={person.image}
                        alt=""
                        fill
                        className="object-cover object-[50%_38%]"
                        sizes="(max-width: 640px) 100vw, 18rem"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-[var(--ypp-muted)] text-sm">
                        Photo
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold leading-tight text-[var(--ypp-ink)]">
                      {person.personName}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-[var(--ypp-deep)]">{person.role}</p>
                    <p className="mt-1 text-sm text-[var(--ypp-muted)]">{person.location}</p>
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
                <div className="relative mx-auto h-80 w-80 shrink-0 overflow-hidden rounded-xl bg-[var(--ypp-border)] sm:h-96 sm:w-96">
                  {selected.image && selected.image !== "/team/placeholder.jpg" ? (
                    <Image
                      src={selected.image}
                      alt=""
                      fill
                      className="object-cover object-[50%_38%]"
                      sizes="(max-width: 640px) 20rem, 24rem"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-[var(--ypp-muted)]">
                      Photo
                    </div>
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 id="modal-name" className="text-3xl font-semibold leading-tight text-[var(--ypp-ink)]">
                    {selected.personName}
                  </h3>
                  <p className="mt-2 text-base font-medium text-[var(--ypp-deep)]">{selected.role}</p>
                  <p className="mt-1 text-sm text-[var(--ypp-muted)]">{selected.location}</p>
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
