import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

const sponsors = [
  {
    name: "Disrupt the Gap",
    tier: "Sponsor",
    image: "/sponsors/disrupt-the-gap.png",
  },
  { name: "Community Foundation of Delaware", tier: "Founding Supporter" },
  { name: "Local Business Partners", tier: "Program Sponsors" },
];

const impactPoints = [
  {
    title: "Keep classes free",
    description: "Keeps 110+ courses at no cost to families.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Support young instructors",
    description: "Training and materials for student instructors.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Expand reach",
    description: "More chapters and online reach, same free model.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0h.5a2.5 2.5 0 002.5-2.5V3.935M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

function IconHeart() {
  return (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

export default function DonatePage() {
  return (
    <div className="min-w-0 w-full">
      <PageHeader
        label="Donate"
        title="Support Youth Passion Project"
        subtitle="We are a 501(c)(3) nonprofit—your contribution is tax-deductible and goes straight to free programs for students."
      />

      {/* Primary donation CTA — first on the page */}
      <section className="border-b border-[var(--ypp-border)] bg-gradient-to-b from-[var(--ypp-lavender)]/55 via-[var(--ypp-blush)]/90 to-[var(--ypp-blush)] px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-4xl min-w-0">
          <div className="mb-8 text-center">
            <p className="font-label text-xs font-bold uppercase tracking-[0.2em] text-[var(--ypp-primary)]">
              Donate now
            </p>
            <h2 className="font-heading mt-3 text-balance text-3xl font-bold tracking-tight text-[var(--ypp-deep)] sm:text-4xl md:text-[2.5rem] md:leading-tight">
              Your gift keeps every class free for students
            </h2>
            <p className="font-body mx-auto mt-4 max-w-2xl text-pretty text-base text-[var(--ypp-muted)] sm:text-lg">
              If you can give, do it here first—then scroll to see who else stands with us. Volunteers and donors together keep YPP running.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-3xl border-2 border-[var(--ypp-primary)]/35 bg-[var(--ypp-white)] p-8 shadow-[0_12px_48px_rgba(107,33,200,0.15)] sm:p-10 md:flex md:items-center md:justify-between md:gap-10">
            <div className="absolute right-0 top-0 h-40 w-40 translate-x-10 -translate-y-10 rounded-full bg-[var(--ypp-primary)]/15 blur-3xl" aria-hidden />
            <div className="absolute bottom-0 left-0 h-32 w-32 -translate-x-10 translate-y-10 rounded-full bg-[var(--ypp-mid)]/10 blur-3xl" aria-hidden />
            <div className="relative flex-1">
              <h3 className="font-heading text-xl font-bold text-[var(--ypp-ink)] sm:text-2xl">
                Make a tax-deductible gift today
              </h3>
              <p className="font-body mt-3 text-[var(--ypp-muted)] leading-relaxed sm:text-[1.05rem]">
                We depend on supporters like you. Donations help us reach more students, train peer instructors, and add
                new free courses—without charging families.
              </p>
              <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  href="https://www.paypal.com/us/fundraiser/charity/4239878"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2 px-10 py-4 text-base font-bold shadow-[0_8px_28px_rgba(107,33,200,0.45)] sm:text-lg"
                >
                  <IconHeart />
                  Donate with PayPal
                </a>
                <div className="flex items-center gap-2 text-sm text-[var(--ypp-muted)] sm:max-w-xs">
                  <IconShield />
                  <span>501(c)(3) nonprofit · Secure checkout · Receipt for your taxes</span>
                </div>
              </div>
            </div>
          </div>
          <p className="font-body mt-6 text-center text-sm text-[var(--ypp-muted)]">
            After your gift, the PayPal Giving Fund sends a written acknowledgement you can use for tax filings.
          </p>
        </div>
      </section>

      {/* Our Sponsors */}
      <section className="relative border-y-2 border-[var(--ypp-primary)]/30 bg-gradient-to-b from-[var(--ypp-lavender)]/50 to-[var(--ypp-blush)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-none" aria-hidden>
          <div className="absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 rounded-full bg-[var(--ypp-primary)]/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-5xl">
          <div className="flex flex-col items-center text-center">
            <span className="font-label text-xs font-semibold uppercase tracking-widest text-[var(--ypp-primary)]">
              With gratitude
            </span>
            <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight text-[var(--ypp-ink)] sm:text-4xl lg:text-5xl">
              Our Sponsors
            </h2>
            <p className="font-body mx-auto mt-4 max-w-2xl text-lg text-[var(--ypp-muted)]">
              Partners who help us keep programs free and growing.
            </p>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {sponsors.map(({ name, tier, image }) => (
              <div
                key={name}
                className="flex flex-col items-center justify-center rounded-2xl border-2 border-[var(--ypp-primary)]/25 bg-[var(--ypp-white)] p-10 text-center shadow-lg transition-all hover:border-[var(--ypp-primary)]/50 hover:shadow-xl"
              >
                {image ? (
                  <div className="relative h-32 w-full min-w-0 sm:h-36">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      className="object-contain object-center"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                ) : (
                  <>
                    <p className="font-heading text-xl font-semibold text-[var(--ypp-ink)]">{name}</p>
                    <p className="font-body mt-3 text-sm font-medium text-[var(--ypp-primary)]">{tier}</p>
                  </>
                )}
              </div>
            ))}
          </div>
          <p className="font-body mt-12 text-center text-sm text-[var(--ypp-muted)]">
            Interested in becoming a sponsor?{" "}
            <Link
              href="/contact"
              className="font-semibold text-[var(--ypp-primary)] hover:underline"
            >
              Contact us
            </Link>
            .
          </p>
        </div>
      </section>

      {/* What your gift supports */}
      <section className="bg-[var(--ypp-blush)]/60 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="font-label text-center text-xs font-semibold uppercase tracking-wider text-[var(--ypp-primary)]">
            Your impact
          </p>
          <h2 className="font-heading mt-2 text-center text-2xl font-bold text-[var(--ypp-deep)] sm:text-3xl">
            What donations make possible
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {impactPoints.map(({ title, description, icon }) => (
              <div
                key={title}
                className="flex flex-col items-center rounded-2xl border border-[var(--ypp-border)] bg-[var(--ypp-white)] p-6 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--ypp-lavender)] text-[var(--ypp-primary)]">
                  {icon}
                </div>
                <h3 className="font-heading mt-4 text-lg font-semibold text-[var(--ypp-ink)]">
                  {title}
                </h3>
                <p className="font-body mt-2 text-sm text-[var(--ypp-muted)] leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
          <p className="font-body mt-12 text-center text-sm text-[var(--ypp-muted)]">
            Ready to give?{" "}
            <a
              href="https://www.paypal.com/us/fundraiser/charity/4239878"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[var(--ypp-primary)] hover:underline"
            >
              Donate with PayPal
            </a>{" "}
            — same link as at the top of this page.
          </p>
        </div>
      </section>

    </div>
  );
}
