import type { ReactNode } from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { applyRoles, CONTACT_EMAILS, PORTAL_URL, SOCIAL_LINKS } from "@/constants/site";

const instructorRole = applyRoles.find((r) => r.id === "instructor")!;
const chapterPresidentRole = applyRoles.find((r) => r.id === "chapter-president")!;

const EMAIL_REGEX = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
const EMAIL_TEST = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function textWithEmailLinks(text: string) {
  const parts = text.split(EMAIL_REGEX);
  return parts.map((part, i) =>
    EMAIL_TEST.test(part) ? (
      <a
        key={i}
        href={`mailto:${part}`}
        className="font-medium text-[var(--ypp-primary)] hover:underline"
      >
        {part}
      </a>
    ) : (
      part
    )
  );
}

function mailTo(addr: string, className?: string) {
  return (
    <a href={`mailto:${addr}`} className={className ?? "font-medium text-[var(--ypp-primary)] hover:underline"}>
      {addr}
    </a>
  );
}

function PortalLink({ children }: { children?: ReactNode }) {
  return (
    <a
      href={PORTAL_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-[var(--ypp-primary)] hover:underline"
    >
      {children ?? "YPP Pathways Portal"}
    </a>
  );
}

/** Matches /contact: main inbox for students, families, volunteers, and partners. */
function ContactFaqAnswer() {
  const e = CONTACT_EMAILS;
  return (
    <div className="space-y-3">
      <p>
        Start on{" "}
        <Link href="/contact" className="font-medium text-[var(--ypp-primary)] hover:underline">
          Contact Us
        </Link>
        {" "}
        — one inbox for students, families, volunteers, and partners ({mailTo(e.support)}). We route to the right team.
      </p>
      <p className="font-medium text-[var(--ypp-ink)]">Social media</p>
      <ul className="list-disc space-y-2 pl-5">
        {SOCIAL_LINKS.map(({ name, href }) => (
          <li key={href}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[var(--ypp-primary)] hover:underline"
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
      <p>
        For postal mail, phone, or Zoom, email {mailTo(e.support)} and we can arrange it.
      </p>
    </div>
  );
}

type FaqItem =
  | { q: string; a: string }
  | { q: string; answer: ReactNode };

const faqCategories: { title: string; items: FaqItem[] }[] = [
  {
    title: "For Students & Families",
    items: [
      {
        q: "Are Youth Passion Project courses really free?",
        a: "Yes. All of our courses are completely free for students. We're a 501(c)(3) nonprofit and rely on donations and volunteers so that cost is never a barrier to learning.",
      },
      {
        q: "What age group are the courses for? Do I have to live in a certain area?",
        a: "Our courses are designed for elementary and middle school students. For Summer 2026, we are running in-person classes only—no online classes at this time. Programs meet through our Scarsdale, NY chapter, so students need to be able to attend locally. See Programs & Chapters and our Calendar for what’s offered.",
      },
      {
        q: "How do I register for courses?",
        answer: (
          <p>
            Summer 2026 · Now Accepting Applications. Create an account or sign in at the{" "}
            <PortalLink />, browse the course catalog, and complete the registration form. Parents will
            need to sign enrollment consent forms. Already applied? Use the portal to check your status.
            For help, email {mailTo(CONTACT_EMAILS.support)}.
          </p>
        ),
      },
      {
        q: "When is registration open for the next session?",
        answer: (
          <p>
            Summer 2026 applications are open now. Register through the <PortalLink /> or visit our{" "}
            <Link href="/calendar" className="font-medium text-[var(--ypp-primary)] hover:underline">
              Calendar
            </Link>{" "}
            for schedules and key dates.
          </p>
        ),
      },
      {
        q: "What courses are offered?",
        answer: (
          <p>
            We offer a wide variety of courses—from competition math and chess to creative writing, coding,
            and more. The lineup changes each session. The current Summer 2026 catalog is in the{" "}
            <PortalLink />; you can also browse{" "}
            <Link href="/programs" className="font-medium text-[var(--ypp-primary)] hover:underline">
              Programs &amp; Chapters
            </Link>{" "}
            or email {mailTo(CONTACT_EMAILS.support)} with questions.
          </p>
        ),
      },
      {
        q: "How do in-person classes work?",
        a: "For now, all classes meet in person through our Scarsdale, NY chapter—we are not offering online classes at this time. Sessions typically run 30–60 minutes, once or twice a week, in small groups led by trained high school instructors. The portal catalog lists current in-person offerings.",
      },
    ],
  },
  {
    title: "For Volunteers",
    items: [
      {
        q: "How do I apply to teach as an instructor?",
        answer: (
          <p>
            Instructor roles are for high school students (grades 9–12). For Summer 2026, we are running
            in-person classes only at our Scarsdale, NY chapter—if you live in the area and can teach locally,
            apply through the{" "}
            <a
              href={instructorRole.applyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[var(--ypp-primary)] hover:underline"
            >
              instructor application
            </a>{" "}
            in the <PortalLink /> or on our{" "}
            <Link href="/apply#instructor" className="font-medium text-[var(--ypp-primary)] hover:underline">
              Apply page
            </Link>
            . You’ll share your course idea, get training and mentorship, and lead small in-person classes for
            younger students. Questions? Email {mailTo(CONTACT_EMAILS.support)}.
          </p>
        ),
      },
      {
        q: "How do I apply to be a Chapter President?",
        answer: (
          <p>
            Chapter President is for high school students (grades 9–12) who want to start or grow a YPP chapter
            at their school—you can apply from anywhere, not just Scarsdale. Summer 2026 applications are open
            now. We recommend contacting your school before applying when you can. Apply on our{" "}
            <Link href="/apply#chapter-president" className="font-medium text-[var(--ypp-primary)] hover:underline">
              Apply page
            </Link>{" "}
            or through the{" "}
            <a
              href={chapterPresidentRole.applyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[var(--ypp-primary)] hover:underline"
            >
              Chapter President application form
            </a>
            .
          </p>
        ),
      },
    ],
  },
  {
    title: "About YPP",
    items: [
      {
        q: "What is the Youth Passion Project?",
        a: "The Youth Passion Project offers free classes taught by high school volunteers. We focus on subjects that aren’t traditionally taught in school, from songwriting to coding to baking. Right now our programs are in-person only at our Scarsdale, NY chapter—we are not running online classes at this time. We’re a Delaware nonprofit with 501(c)(3) status. Read more on our About page.",
      },
      {
        q: "How do I contact the Youth Passion Project?",
        answer: <ContactFaqAnswer />,
      },
    ],
  },
];

export default function FAQsPage() {
  return (
    <div className="min-w-0 w-full">
      <PageHeader
        label="Resources"
        title="Frequently Asked Questions"
        subtitle="Quick answers about our courses, volunteering, and how we run."
      />

      {/* FAQ content */}
      <section className="bg-[var(--ypp-blush)]/60 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl min-w-0">
          {faqCategories.map((category) => (
            <div key={category.title} className="mb-14 last:mb-0">
              <h2 className="font-heading text-xl font-bold text-[var(--ypp-ink)] sm:text-2xl">
                {category.title}
              </h2>
              <ul className="mt-6 flex flex-col gap-3" aria-label={`FAQs: ${category.title}`}>
                {category.items.map((faq) => (
                  <li key={faq.q}>
                    <details className="card-ypp group p-0">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-body font-medium text-[var(--ypp-ink)] transition-colors hover:bg-[var(--ypp-blush)] [&::-webkit-details-marker]:hidden">
                        <span className="min-w-0 flex-1 pr-2 break-words">{faq.q}</span>
                        <span className="shrink-0 text-[var(--ypp-primary)] transition-transform group-open:rotate-180" aria-hidden>
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </summary>
                      <div className="border-t border-[var(--ypp-border)] px-5 py-4">
                        {"answer" in faq ? (
                          <div className="font-body text-[var(--ypp-muted)] leading-relaxed">{faq.answer}</div>
                        ) : (
                          <p className="font-body text-[var(--ypp-muted)] leading-relaxed whitespace-pre-line">
                            {textWithEmailLinks(faq.a)}
                          </p>
                        )}
                      </div>
                    </details>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <p className="font-body mt-12 text-center text-sm text-[var(--ypp-muted)]">
            Summer 2026 · Now Accepting Applications — in-person classes only (no online at this time). Register
            and browse the course catalog in the{" "}
            <PortalLink>Pathways Portal</PortalLink>
            . For enrollment or student services, use our{" "}
            <Link href="/contact" className="font-medium text-[var(--ypp-primary)] hover:underline">
              Contact page
            </Link>
            , or email{" "}
            <a
              href={`mailto:${CONTACT_EMAILS.support}`}
              className="font-medium text-[var(--ypp-primary)] hover:underline"
            >
              {CONTACT_EMAILS.support}
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
