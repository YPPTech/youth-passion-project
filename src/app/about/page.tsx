import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { PORTAL_URL } from "@/constants/site";

const leadership = [
  {
    name: "Executive Director",
    role: "Leadership",
    bio: "Leads strategy, partnerships, and day-to-day operations for Youth Passion Project.",
    image: "/team/placeholder.jpg",
  },
  {
    name: "Director of Curriculum",
    role: "Leadership",
    bio: "Oversees course design, instructor training, and quality of our 110+ unique courses.",
    image: "/team/placeholder.jpg",
  },
  {
    name: "Director of Outreach",
    role: "Leadership",
    bio: "Builds relationships with schools and communities to grow our reach across 30+ states and countries.",
    image: "/team/placeholder.jpg",
  },
];

const instructorsPreview = [
  { name: "Instructor A", subject: "Songwriting & Music" },
  { name: "Instructor B", subject: "Introduction to Java" },
  { name: "Instructor C", subject: "Art of Baking" },
];

export default function AboutPage() {
  return (
    <div>
      {/* Page header */}
      <section className="border-b border-[var(--ypp-border)] bg-[var(--ypp-white)] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-[var(--ypp-ink)] sm:text-5xl">
            About Youth Passion Project
          </h1>
          <p className="mt-4 text-lg text-[var(--ypp-muted)]">
            Who we are, what we believe, and the people behind our mission.
          </p>
        </div>
      </section>

      {/* Mission & vision (lengthy) */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-[var(--ypp-ink)]">
            Our mission
          </h2>
          <p className="mt-4 text-[var(--ypp-muted)] leading-relaxed">
            The Youth Passion Project is a Delaware Nonprofit Corporation with
            501(c)(3) exempt status. We were first created to make use of the
            free time in people&apos;s schedules during COVID-19, and we&apos;ve
            grown into a lasting platform for peer-to-peer learning.
          </p>
          <p className="mt-4 text-[var(--ypp-muted)] leading-relaxed">
            We believe that students should always have the opportunity to
            explore new topics of interest that they cannot learn in most school
            settings. Our goal is to provide these opportunities to those with
            a love for learning, while also allowing high school students to
            share their passions with others.
          </p>
          <p className="mt-4 text-[var(--ypp-muted)] leading-relaxed">
            We offer free online and in-person courses taught by high schoolers to
            encourage younger students to expand and supplement their learning.
            Our large variety of classes ranges from Songwriting to the Art of
            Baking and Introduction to Coding in Java. Classes may be held
            online (e.g., Zoom) or in person where we have chapters. Every
            course emphasizes practice and commitment, and classes generally run
            from thirty minutes to an hour, meeting once or twice a week.
          </p>

          <h2 className="mt-12 text-2xl font-bold text-[var(--ypp-ink)]">
            Our vision
          </h2>
          <p className="mt-4 text-[var(--ypp-muted)] leading-relaxed">
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

      {/* Leadership team */}
      <section className="bg-[var(--ypp-lavender)]/20 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Leadership team"
            subtitle="The people who guide Youth Passion Project"
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map(({ name, role, bio, image }) => (
              <div
                key={name}
                className="overflow-hidden rounded-xl border border-[var(--ypp-border)] bg-[var(--ypp-white)] shadow-sm"
              >
                <div className="aspect-[4/3] bg-[var(--ypp-border)]">
                  {/* Placeholder: use next/image with real src when you have assets */}
                  <div className="flex h-full items-center justify-center text-[var(--ypp-muted)] text-sm">
                    Photo
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--ypp-primary)]">
                    {role}
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
      </section>

      {/* Instructors section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Our instructors"
            subtitle="High school students who teach what they love. Meet more on our portal."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {instructorsPreview.map(({ name, subject }) => (
              <div
                key={name}
                className="rounded-lg border border-[var(--ypp-border)] bg-[var(--ypp-white)] px-5 py-4 shadow-sm"
              >
                <p className="font-medium text-[var(--ypp-ink)]">{name}</p>
                <p className="text-sm text-[var(--ypp-muted)]">{subject}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-[var(--ypp-muted)]">
            For full instructor profiles and course details, visit our{" "}
            <a
              href={PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--ypp-primary)] font-medium hover:underline"
            >
              student portal
            </a>
            .
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--ypp-border)] bg-[var(--ypp-white)] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl font-bold text-[var(--ypp-ink)]">
            Ready to get involved?
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/programs"
              className="rounded-full bg-[var(--ypp-primary)] px-5 py-2.5 font-semibold text-white hover:bg-[var(--ypp-mid)]"
            >
              Browse classes
            </Link>
            <Link
              href="/apply"
              className="rounded-full border-2 border-[var(--ypp-primary)] px-5 py-2.5 font-semibold text-[var(--ypp-primary)] hover:bg-[var(--ypp-primary)]/10"
            >
              Apply to teach
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
