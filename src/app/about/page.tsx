import SectionHeading from "@/components/SectionHeading";

const leadership = [
  {
    personName: "Ian DiLorenzo",
    name: "Co-President",
    bio: "Shares overall strategy, partnerships, and day-to-day leadership of Youth Passion Project.",
    image: "/team/placeholder.jpg",
  },
  {
    personName: "Aveena Haswani",
    name: "Co-President",
    bio: "Shares overall strategy, partnerships, and day-to-day leadership of Youth Passion Project.",
    image: "/team/placeholder.jpg",
  },
  {
    personName: "Brayden White",
    name: "Vice President for Instruction",
    bio: "Oversees course design, instructor training, and quality of our 110+ unique courses.",
    image: "/team/placeholder.jpg",
  },
  {
    personName: "Sanvi Mehta",
    name: "Vice President for Communication",
    bio: "Leads messaging, social media, and external communications for YPP.",
    image: "/team/placeholder.jpg",
  },
  {
    personName: "Katherine Zhang",
    name: "Chief of Staff",
    bio: "Coordinates operations, scheduling, and supports the leadership team and volunteers.",
    image: "/team/placeholder.jpg",
  },
  {
    personName: "Anthea Zamir",
    name: "Director of Tech",
    bio: "Leads technology, systems, and digital infrastructure for programs and the organization.",
    image: "/team/placeholder.jpg",
  },
  {
    personName: "Yuvaan Das",
    name: "Director of Tech",
    bio: "Leads technology, systems, and digital infrastructure for programs and the organization.",
    image: "/team/placeholder.jpg",
  },
];

const aboutHeroStats = [
  { value: "3,200+", label: "Students" },
  { value: "200+", label: "Instructors" },
  { value: "110+", label: "Courses" },
  { value: "30+", label: "Countries" },
];

export default function AboutPage() {
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

      {/* Staff: leadership, instructors, chapter leadership */}
      <section id="staff" className="scroll-mt-20 bg-[var(--ypp-lavender)]/20 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Leadership Team"
            subtitle="The people who guide Youth Passion Project"
          />
          <div className="mt-12 flex flex-col items-center gap-8">
            {/* Row 1: 2 cards — Co-Presidents */}
            <div className="flex flex-wrap justify-center gap-8">
              {leadership.slice(0, 2).map(({ personName, name, bio }, i) => (
                <div
                  key={`leadership-0-${i}`}
                  className="card-ypp w-full max-w-sm overflow-hidden p-0 sm:max-w-xs"
                >
                  <div className="aspect-[4/3] bg-[var(--ypp-border)]">
                    <div className="flex h-full items-center justify-center text-[var(--ypp-muted)] text-sm">
                      Photo
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold tracking-wider text-[var(--ypp-primary)]">
                      {personName}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-[var(--ypp-ink)]">
                      {name}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--ypp-muted)]">{bio}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Row 2: 3 cards — VP Instruction, VP Communication, Chief of Staff */}
            <div className="grid w-full max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3">
              {leadership.slice(2, 5).map(({ personName, name, bio }, i) => (
                <div
                  key={`leadership-1-${i}`}
                  className="card-ypp overflow-hidden p-0"
                >
                  <div className="aspect-[4/3] bg-[var(--ypp-border)]">
                    <div className="flex h-full items-center justify-center text-[var(--ypp-muted)] text-sm">
                      Photo
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold tracking-wider text-[var(--ypp-primary)]">
                      {personName}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-[var(--ypp-ink)]">
                      {name}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--ypp-muted)]">{bio}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Row 3: 2 cards — Co-Directors of Tech */}
            <div className="flex flex-wrap justify-center gap-8">
              {leadership.slice(5, 7).map(({ personName, name, bio }, i) => (
                <div
                  key={`leadership-2-${i}`}
                  className="card-ypp w-full max-w-sm overflow-hidden p-0 sm:max-w-xs"
                >
                  <div className="aspect-[4/3] bg-[var(--ypp-border)]">
                    <div className="flex h-full items-center justify-center text-[var(--ypp-muted)] text-sm">
                      Photo
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold tracking-wider text-[var(--ypp-primary)]">
                      {personName}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-[var(--ypp-ink)]">
                      {name}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--ypp-muted)]">{bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
