import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Youth Passion Project",
  description:
    "Youth Passion Project's privacy policy: how we collect, use, and protect your information when you use our website and services.",
};

const sections = [
  {
    id: "intro",
    title: "Who we are",
    content: (
      <>
        <p>
          Youth Passion Project Inc. (hereafter, &ldquo;The Project&rdquo;) is a Delaware
          Nonprofit Corporation with IRS-issued tax-exempt status under section 501(c)(3).
          The Project respects the privacy of all those who visit its website at
          &ldquo;youthpassionproject.org&rdquo; (hereafter, &ldquo;Website&rdquo;),
          subscribe to its mailing list, register for or teach classes, or otherwise
          contribute to The Project&rsquo;s mission.
        </p>
      </>
    ),
  },
  {
    id: "data",
    title: "Data we collect",
    content: (
      <>
        <p>
          When you use The Project&rsquo;s Website, we may collect some data from visitors—
          only through lawful means and with your consent. We collect information such as
          names, email addresses, phone numbers, and location only when you voluntarily
          submit it, and we request such information only when necessary to provide
          services—for example, when a parent registers their child for courses or when a
          student applies to be a volunteer.
        </p>
        <p>
          Any personal information we collect is kept private and secure and is never sold
          or otherwise distributed to any entity outside The Project. Personal information
          is handled in accordance with The Project&rsquo;s confidentiality policy, which
          is included in The Project&rsquo;s by-laws and is agreed to by every volunteer
          retained by The Project.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies",
    content: (
      <>
        <p>
          This Website may use cookies to customize your experience. Cookies help manage
          your browsing session and may be used for tracking page visits and other
          aggregate site statistics. Cookies do not contain any identifiable personal
          information and are used only to improve the functionality of the Website and
          your experience while using it.
        </p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual property & use of content",
    content: (
      <>
        <p>
          Text, images, videos, documents, and other materials or media available on The
          Project&rsquo;s Website are the sole property of The Project; all rights are
          reserved and protected by copyright. The reproduction, redistribution, and/or
          exploitation of any of these materials is prohibited without express, written
          consent from The Project.
        </p>
        <p>
          All visitors agree that content and data—whether public or password-protected—is
          restricted to the personal use of authorized visitors only. Commercial use of
          information on this Website is strictly prohibited. Visitors agree not to copy
          or otherwise transmit any unsolicited or unauthorized advertising or promotional
          materials. The Project reserves the right to limit, restrict, or terminate use
          of its Website by any person or party at any time, with or without advance
          notice.
        </p>
      </>
    ),
  },
  {
    id: "third-party",
    title: "Third-party links",
    content: (
      <>
        <p>
          The Project is not responsible for the privacy practices of any other
          organization or website. Some links on this Website may lead to sites not owned
          or operated by The Project. We encourage you to review the privacy policies of
          those sites when you visit them.
        </p>
      </>
    ),
  },
  {
    id: "effective-date",
    title: "Effective date",
    content: (
      <>
        <p>
          This policy is effective as of June 1, 2021 and has not been updated since then.
          If we make material changes in the future, we will post an updated version on
          this page.
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div>
      {/* Page header */}
      <section className="border-b border-[var(--ypp-border)] bg-[var(--ypp-white)] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-label mx-auto mb-4 block text-xs text-[var(--ypp-primary)]">
            Legal
          </span>
          <h1 className="font-display text-4xl font-bold tracking-tight text-[var(--ypp-ink)] sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-[var(--ypp-muted)]">
            How we collect, use, and protect your information when you use our website
            and services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col gap-14">
            {sections.map((section) => (
              <article
                key={section.id}
                id={section.id}
                className="scroll-mt-24"
              >
                <h2 className="font-heading text-xl font-bold text-[var(--ypp-ink)] sm:text-2xl">
                  {section.title}
                </h2>
                <div className="mt-4 flex flex-col gap-4 font-body text-[var(--ypp-muted)] leading-relaxed">
                  {section.content}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-[var(--ypp-border)] bg-[var(--ypp-lavender)]/40 px-6 py-5">
            <p className="font-body text-sm text-[var(--ypp-ink)]">
              For questions about this privacy policy or how we handle your data, please
              contact us at{" "}
              <a
                href="mailto:support@youthpassionproject.org"
                className="font-medium text-[var(--ypp-primary)] hover:underline"
              >
                support@youthpassionproject.org
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
