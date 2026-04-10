import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Enrollment Consent and Release Agreement | Youth Passion Project",
  description:
    "Enrollment release and consent agreement for students and parents participating in Youth Passion Project courses.",
};

const sections = [
  {
    id: "purpose",
    title: "1. Purpose",
    content: (
      <p>
        The purpose of this enrollment release and consent agreement (hereafter &ldquo;Agreement&rdquo;) is to set forth mutual understanding and agreement of a set of guidelines pursuant to which child(ren), as defined below, (hereafter &ldquo;Student&rdquo;), if minor(s), under the care of parent(s) and/or guardian(s) (hereafter &ldquo;Parent&rdquo;), shall partake in an online course provided by instructor(s) (hereafter &ldquo;Instructors&rdquo;) organized by Youth Passion Project Inc., a Delaware Nonprofit Corporation exempt by the Internal Revenue Service under 26 US Code Section 501(c)(3) (hereafter, &ldquo;The Project&rdquo;).
      </p>
    ),
  },
  {
    id: "consent",
    title: "2. Consent",
    content: (
      <p>
        Parent and Student understands and consents to Student participation in an online course with other students and Instructors, potentially from different parts of the world. Parent and Student understands that The Project is not a test preparation service and should not be used as a replacement for a regular school curriculum. Parent and Student understand that any views or material discussed in courses by Instructors or other students are not the views of The Project.
      </p>
    ),
  },
  {
    id: "behavior",
    title: "3. Behavior",
    content: (
      <p>
        Parent and Student understands that The Project is committed to providing a safe and comfortable environment for all students to engage in learning. Parent and Student understands that Student shall be held to a set of expectations regarding behavior, and if Student behaves in any manner not conducive to a safe learning environment (including, but not limited to, disruptive, disrespectful, threatening, abusive, harassing, obscene, offensive, profane, vulgar or sexual behavior of any sort), The Project and/or Instructors may dismiss Student from courses and Student may be barred from participating in other courses. The Project may involve Parent in discussions regarding Student&rsquo;s behavior, if it is deemed appropriate by an internal investigation in accordance with the Official Governances of The Youth Passion Project Inc.
      </p>
    ),
  },
  {
    id: "release",
    title: "4. Release",
    content: (
      <p>
        Parent and Student understands that The Project is not responsible for any actions or harms caused by other students or Instructors to Student. Parent agrees to release The Project from any and all legal and/or financial responsibility for any damages Student incurs due to participation in online courses, even if such harms are due to The Project&rsquo;s neglect. The Project will strive to aid, to the best of its ability, Parent and Student in any issues involving Instructors and/or other students.
      </p>
    ),
  },
  {
    id: "binding",
    title: "5. Binding, Governance, and Severability",
    content: (
      <p>
        This Agreement shall bind Parent, Student, as well as any spouse(s), heir(s), estate(s), family member(s), administrator(s), or personal representative(s) of Parent and/or Student. This Agreement shall be governed by the laws of Delaware and shall be interpreted by the courts of Delaware. If a court decides that any clause, section, or part of this Agreement cannot be enforced, Parent agrees to amend it to make it enforceable; if it cannot legally be changed, it shall be severed, but the rest of the Agreement shall remain in effect. No party shall be obligated to pursue the possible transaction unless and until the parties enter into a binding definitive agreement with respect thereto.
      </p>
    ),
  },
  {
    id: "signature",
    title: "6. Signature",
    content: (
      <p>
        By electronically signing this Agreement, Parent or, if Student is above the age of majority, Student agrees to have read and understood this Agreement in its entirety, that Parent or Student is of the legal age of majority, is competent to sign it, and do so voluntarily and without relying on anything The Project has written or told to Parent, excepting what is written in this Agreement. If any questions or inquiries related to this Agreement arise, Parent may contact The Project&rsquo;s leadership team to resolve any issues. Parent and Student acknowledge that this Agreement is made voluntarily, that Parent and Student may choose to not sign this Agreement, and that Student may elect to not participate in online courses taught by The Project.
      </p>
    ),
  },
];

export default function EnrollmentConsentPage() {
  return (
    <div className="min-w-0 w-full">
      <section className="border-b border-[var(--ypp-border)] bg-[var(--ypp-white)] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl min-w-0">
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
              Enrollment Consent and Release Agreement
            </h1>
            <p className="mt-4 text-lg text-[var(--ypp-muted)]">
              Guidelines for student and parent participation in YPP courses.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl min-w-0 break-words">
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
