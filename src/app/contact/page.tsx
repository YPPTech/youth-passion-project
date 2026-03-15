import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { CONTACT_EMAILS } from "@/constants/site";

const contactEntries = [
  {
    label: "Enrollment & Student Services",
    description: "Students and parents — registration, course questions, and general support",
    email: CONTACT_EMAILS.support,
  },
  {
    label: "Media & Public Relations",
    description: "Press, partnerships, and marketing inquiries",
    email: CONTACT_EMAILS.marketing,
  },
  {
    label: "Online instructor support",
    description: "For our online instructors — course support and logistics",
    email: CONTACT_EMAILS.onlineInstructorSupport,
  },
  {
    label: "In-person instructor support",
    description: "For in-person and chapter instructors",
    email: CONTACT_EMAILS.inPersonInstructors,
  },
] as const;

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        label="Contact"
        title="Contact Us"
        subtitle="Reach the right team with the form below or use our general contact emails."
      />

      {/* General contact emails */}
      <section className="bg-[var(--ypp-blush)]/60 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <SectionHeading
            title="General contact"
            subtitle="Use the email that best matches your question so we can respond quickly."
          />
          <ul className="mt-10 flex flex-col gap-6">
            {contactEntries.map(({ label, description, email }) => (
              <li
                key={email}
                className="card-ypp"
              >
                <p className="font-heading font-semibold text-[var(--ypp-ink)]">{label}</p>
                <p className="font-body mt-1 text-sm text-[var(--ypp-muted)]">{description}</p>
                <a
                  href={`mailto:${email}`}
                  className="mt-3 inline-flex items-center gap-2 text-[var(--ypp-primary)] font-medium hover:underline"
                >
                  {email}
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Link to About / staff */}
      <section className="border-t border-[var(--ypp-border)] bg-[var(--ypp-lavender)]/20 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-xl font-bold text-[var(--ypp-ink)]">
            Meet our team
          </h2>
          <p className="font-body mt-3 text-[var(--ypp-muted)]">
            Leadership, online instructors, chapter presidents, and the people behind Youth Passion Project.
          </p>
          <Link
            href="/about#staff"
            className="btn-primary mt-6 inline-flex items-center gap-2 px-5 py-2.5 font-semibold"
          >
            About us &amp; staff
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
