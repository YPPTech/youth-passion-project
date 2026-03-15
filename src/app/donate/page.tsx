import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { CONTACT_EMAILS } from "@/constants/site";

const sponsors = [
  { name: "Community Foundation of Delaware", tier: "Founding supporter" },
  { name: "Local business partners", tier: "Program sponsors" },
];

export default function DonatePage() {
  return (
    <div>
      <PageHeader
        label="Donate"
        title="Support Youth Passion Project"
        subtitle="Your tax-deductible donation helps us keep classes free for every student."
      />

      {/* Donate CTA + info */}
      <section className="bg-[var(--ypp-blush)]/60 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <SectionHeading
            title="Donate"
            subtitle="100% tax deductible. Every dollar helps us expand into new communities and develop more courses."
          />
          <div className="card-ypp mt-10 p-8">
            <p className="font-body text-[var(--ypp-muted)] leading-relaxed">
              Currently, we depend on dedicated volunteers and supporters to keep
              our project running. Your donation will help the Youth Passion
              Project reach more students, train more instructors, and offer an
              even broader set of free courses.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="https://www.paypal.com/us/fundraiser/charity/4239878"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center px-8 py-4"
              >
                Donate here
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <p className="font-body text-sm text-[var(--ypp-muted)]">
                Youth Passion Project is a 501(c)(3) nonprofit. EIN available
                upon request.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Honoring sponsors */}
      <section className="bg-[var(--ypp-lavender)]/20 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            title="Our sponsors"
            subtitle="With gratitude to those who make our work possible"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {sponsors.map(({ name, tier }) => (
              <div
                key={name}
                className="card-ypp p-6 text-center"
              >
                <p className="font-heading font-semibold text-[var(--ypp-ink)]">{name}</p>
                <p className="font-body mt-1 text-sm text-[var(--ypp-primary)]">{tier}</p>
              </div>
            ))}
          </div>
          <p className="font-body mt-8 text-center text-sm text-[var(--ypp-muted)]">
            Interested in becoming a sponsor?{" "}
            <a
              href={`mailto:${CONTACT_EMAILS.support}`}
              className="text-[var(--ypp-primary)] font-medium hover:underline"
            >
              Contact us
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
