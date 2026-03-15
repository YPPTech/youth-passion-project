import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Volunteer Media Release Agreement | Youth Passion Project",
  description:
    "Volunteer media release agreement for use of volunteer photographs, video, and audio by Youth Passion Project.",
};

const sections = [
  {
    id: "purpose",
    title: "1. Purpose",
    content: (
      <p>
        The purpose of this volunteer media release agreement (hereafter &ldquo;Agreement&rdquo;) is to set forth mutual understanding and agreement between the Youth Passion Project Inc. (hereafter &ldquo;The Project&rdquo;), a Delaware Nonprofit Corporation exempt by the Internal Revenue Service under 26 US Code Section 501(c)(3), and any volunteer of The Project (hereafter &ldquo;Volunteer&rdquo;) on the recording of Volunteer and the utilization of such recordings.
      </p>
    ),
  },
  {
    id: "recordings",
    title: "2. Recordings",
    content: (
      <p>
        Volunteer agrees that The Project may produce photographs, video and/or audio recordings of Volunteer or Volunteer&rsquo;s likeness (hereafter, &ldquo;Recordings&rdquo;). Volunteer gives consent for The Project to utilize Recordings in print, video, digital, and internet media. Volunteer understands Recordings will be the property of The Project and Volunteer will not be compensated for Recordings in any way.
      </p>
    ),
  },
  {
    id: "governance",
    title: "3. Governance and Signature",
    content: (
      <p>
        Volunteer expressly agrees that this Agreement is intended to be as broad and inclusive as permitted by the laws of Delaware and that the laws of Delaware shall govern, and the Courts of Delaware shall interpret this Agreement such that if one part of this Agreement is found to be unlawful, said clause shall cease to apply to parties, yet the remaining sections of the agreement shall still be valid. Signatories shall sign to indicate being of sound mind and body, having read and understood the Agreement, and if volunteer is not emancipated and is under the age of eighteen (18), their legal parent or guardian has agreed to this Agreement on their behalf. All parties not signatories of this Agreement shall not be expected to uphold said Agreements where they are parties to a possible transaction, nor will the breach of Agreement involving non-signatory parties of Agreement be interpreted as violation of said Agreement. The signing of this Agreement shall not nullify any other Agreement between signatories of this agreement. This Agreement shall be consistent with the by-laws of The Project at the date of the signing of this Agreement. A change to the by-laws of The Project after the signing of this Agreement shall not affect this Agreement.
      </p>
    ),
  },
];

export default function VolunteerMediaReleasePage() {
  return (
    <div>
      <section className="border-b border-[var(--ypp-border)] bg-[var(--ypp-white)] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/legal"
            className="font-body mb-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--ypp-primary)] transition-colors hover:text-[var(--ypp-deep)]"
          >
            <span aria-hidden>←</span>
            Back to Legal
          </Link>
          <div className="text-center">
            <span className="font-label mx-auto mb-4 block text-xs font-semibold uppercase tracking-wider text-[var(--ypp-primary)]">
              Legal
            </span>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-[var(--ypp-ink)] sm:text-5xl">
              Volunteer Media Release Agreement
            </h1>
            <p className="mt-4 text-lg text-[var(--ypp-muted)]">
              Consent for use of volunteer recordings in YPP media.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col gap-14">
            {sections.map((section) => (
              <article key={section.id} id={section.id} className="scroll-mt-24">
                <h2 className="font-heading text-xl font-bold text-[var(--ypp-ink)] sm:text-2xl">
                  {section.title}
                </h2>
                <div className="mt-4 font-body text-[var(--ypp-muted)] leading-relaxed">
                  {section.content}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
