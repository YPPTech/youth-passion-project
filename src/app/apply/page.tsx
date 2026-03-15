import Link from "next/link";
import PageHeader from "@/components/PageHeader";
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
      <PageHeader
        label="Apply"
        title="Apply to Join YPP"
        subtitle="Open roles for instructors, curriculum developers, outreach, and more. Apply through our portal or use the links below."
        action={
          <a
            href={PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            Go to portal
            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        }
      />

      {/* Roles list */}
      <section className="bg-[var(--ypp-blush)]/60 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            title="What's Available"
            subtitle="Role, age/grade, and how to apply"
          />
          <div className="mt-12 space-y-10">
            {roles.map(({ id, title, ageGrade, description, applyLink, applyLabel }) => (
              <article
                key={id}
                id={id}
                className="card-ypp scroll-mt-24 sm:p-8"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h2 className="font-heading text-xl font-bold text-[var(--ypp-ink)]">
                      {title}
                    </h2>
                    <p className="font-body mt-1 text-sm font-medium text-[var(--ypp-primary)]">
                      {ageGrade}
                    </p>
                  </div>
                  <a
                    href={applyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 rounded-lg border-2 border-[var(--ypp-primary)] bg-[var(--ypp-white)] px-4 py-2 text-sm font-semibold text-[var(--ypp-primary)] transition-colors hover:bg-[var(--ypp-primary)] hover:text-white"
                  >
                    {applyLabel}
                  </a>
                </div>
                <p className="font-body mt-4 text-[var(--ypp-muted)] leading-relaxed">
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
          <p className="font-body text-[var(--ypp-muted)]">
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
