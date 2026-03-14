import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { PORTAL_URL } from "@/constants/site";

const roles = [
  {
    id: "instructor",
    title: "Instructor",
    ageGrade: "High school students (grades 9–12)",
    description:
      "Teach a course in your passion to younger students. You'll design or follow a curriculum, run weekly sessions online (e.g., Zoom) or in person at chapter locations, and help students practice and grow. We provide training and support. Classes typically run 30–60 minutes, 1–2 times per week.",
    applyLink: PORTAL_URL,
    applyLabel: "Apply via portal",
  },
  {
    id: "curriculum",
    title: "Curriculum Developer",
    ageGrade: "High school students & adult volunteers",
    description:
      "Help create and refine course materials for our catalog. You'll work with instructors to build syllabi, activities, and resources that work in both online and in-person settings.",
    applyLink: PORTAL_URL,
    applyLabel: "Apply via portal",
  },
  {
    id: "outreach",
    title: "Outreach & Marketing",
    ageGrade: "High school students & volunteers",
    description:
      "Spread the word about YPP in your school and community. You'll help with social media, school partnerships, and finding both students and future instructors.",
    applyLink: PORTAL_URL,
    applyLabel: "Apply via portal",
  },
  {
    id: "operations",
    title: "Operations & Tech",
    ageGrade: "High school students & volunteers",
    description:
      "Support day-to-day operations, registration systems, and technical needs so our classes run smoothly for everyone.",
    applyLink: PORTAL_URL,
    applyLabel: "Contact us",
  },
];

export default function ApplyPage() {
  return (
    <div>
      {/* Page header */}
      <section className="border-b border-[var(--ypp-border)] bg-[var(--ypp-white)] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-[var(--ypp-ink)] sm:text-5xl">
            Apply to join YPP
          </h1>
          <p className="mt-4 text-lg text-[var(--ypp-muted)]">
            Open roles for instructors, curriculum developers, outreach, and
            more. Apply through our portal or use the links below.
          </p>
          <div className="mt-8">
            <a
              href={PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-[var(--ypp-primary)] px-6 py-3 font-semibold text-white transition-colors hover:bg-[var(--accent-hover)]"
            >
              Go to portal
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Roles list */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            title="What's available"
            subtitle="Role, age/grade, and how to apply"
          />
          <div className="mt-12 space-y-10">
            {roles.map(({ id, title, ageGrade, description, applyLink, applyLabel }) => (
              <article
                key={id}
                id={id}
                className="scroll-mt-24 rounded-xl border border-[var(--ypp-border)] bg-[var(--ypp-white)] p-6 shadow-sm sm:p-8"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-[var(--ypp-ink)]">
                      {title}
                    </h2>
                    <p className="mt-1 text-sm font-medium text-[var(--ypp-primary)]">
                      {ageGrade}
                    </p>
                  </div>
                  <a
                    href={applyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 rounded-lg border-2 border-[var(--ypp-primary)] px-4 py-2 text-sm font-semibold text-[var(--ypp-primary)] transition-colors hover:bg-[var(--ypp-primary)]/10"
                  >
                    {applyLabel}
                  </a>
                </div>
                <p className="mt-4 text-[var(--ypp-muted)] leading-relaxed">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Portal reminder */}
      <section className="border-t border-[var(--ypp-border)] bg-[var(--ypp-lavender)]/20 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[var(--ypp-muted)]">
            Need to sign up for classes as a student? Visit the{" "}
            <Link href="/programs" className="text-[var(--ypp-primary)] font-medium hover:underline">
              Programs
            </Link>{" "}
            page for sessions and links to the portal, or go directly to our{" "}
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
    </div>
  );
}
