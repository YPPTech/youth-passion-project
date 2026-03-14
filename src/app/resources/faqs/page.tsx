import Link from "next/link";
import { PORTAL_URL, CONTACT_EMAILS } from "@/constants/site";

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

const faqCategories = [
  {
    title: "For Students & Families",
    items: [
      {
        q: "Are Youth Passion Project courses really free?",
        a: "Yes. All of our courses are completely free for students. We're a 501(c)(3) nonprofit and rely on donations and volunteers so that cost is never a barrier to learning.",
      },
      {
        q: "What age group are the courses for? Do I have to live in a certain area?",
        a: "Our courses are designed for elementary and middle school students. We offer both online and in-person classes. Online classes are open to any eligible student worldwide—no location requirement. In-person classes depend on where we have active chapters; check our Programs and Calendar pages to see what’s available in your area.",
      },
      {
        q: "How do I register for courses?",
        a: "You register through our student portal. Go to the portal (link in the header and footer), sign in or create an account, and use the course catalog and registration form there. For in-person classes (where offered), the process is location-dependent—some require in-person sign-up, others have online links; check the registration catalogue on the portal for details. Parents will need to sign a liability form.",
      },
      {
        q: "How do I know if my registration went through?",
        a: "If you registered online, you’ll receive an automated email from registrar@youthpassionproject.org with the status of your registration. If approved, you’ll get your student’s schedule as a Google Doc. If any part was rejected, you’ll get a description of the error. Make sure registrar@youthpassionproject.org is not blocked and check your spam folder. If you don’t receive the email within two hours, reach out to us.",
      },
      {
        q: "A course I want isn’t on the registration form. Why?",
        a: "If a course isn’t on the form, it has likely reached its maximum capacity. The registration form reflects current availability. If you’d still like to be considered, you can request an exception by contacting our Enrollment & Student Services Team with your child’s name, grade, and any courses they’re currently enrolled in.",
      },
      {
        q: "Why was my registration rejected? How do I fix it?",
        a: "Some instructors set grade-level or class-size requirements. If you don’t meet those prerequisites, your registration may be rejected and all enrollments voided. Re-register through the student portal and only choose courses for which you meet the prerequisites. Also, do not register for more than three courses—that will cause rejection. If you have questions, contact our Enrollment & Student Services Team.",
      },
      {
        q: "How often do courses meet? What do I need to prepare?",
        a: "Courses meet once or twice a week at set times; the exact schedule is in the course catalog and registration form. The catalog also lists any prerequisites and materials. Read the course description before signing up so you know what to expect.",
      },
      {
        q: "Do I need to attend every class?",
        a: "Yes. We ask that you commit to attending every class. Our curriculums are progressive and build on past content, and we have limited spots—we count on full attendance. If your schedule conflicts or you can’t attend consistently, please contact our Enrollment & Student Services Team before enrolling.",
      },
      {
        q: "How do the classes work? Online vs. in-person?",
        a: "We offer both online and in-person classes. Online classes are live and interactive (e.g., Zoom or similar) and can be taken from anywhere. In-person classes meet at chapter locations when available. Both formats typically run 30–60 minutes, once or twice a week, and emphasize practice and participation. The course catalog and registration form indicate whether each course is online or in-person.",
      },
      {
        q: "Do I need any special equipment or software?",
        a: "For online classes: you’ll need a device with a camera and microphone and a stable internet connection. For in-person classes: requirements depend on the course and chapter. Some courses may list additional materials (e.g., for art or coding); those details are in the course description.",
      },
      {
        q: "Who do I contact for enrollment issues or problems with my course or instructor?",
        a: "Contact Enrollment and Student Services at support@youthpassionproject.org. For enrollment issues, send your email from the address you used to register and include the student’s full name. For course or instructor issues, include the student’s full name, the instructor’s full name, and the course name.",
      },
      {
        q: "How do I give feedback on my course?",
        a: "We welcome feedback. At the end of each session you’ll receive a form via email to submit feedback. For immediate concerns, contact Enrollment and Student Services at support@youthpassionproject.org.",
      },
    ],
  },
  {
    title: "For Instructors & Volunteers",
    items: [
      {
        q: "How do I become an instructor?",
        a: "High school students can apply through our Apply page. You’ll share your passion, proposed course idea, and availability. Our team reviews applications and supports new instructors through training and curriculum help.",
      },
      {
        q: "What’s the time commitment for teaching a course?",
        a: "Most courses meet once or twice a week for 30–60 minutes per session, plus some prep time. Exact commitment depends on the course length and your syllabus.",
      },
      {
        q: "Can I teach more than one course?",
        a: "Yes. Many instructors start with one course and later propose additional subjects. Contact us or apply again for another course idea.",
      },
      {
        q: "Who do I contact for instructor support?",
        a: "In-person instructors: In-person Support at in-person-instructors@youthpassionproject.org.\n\nOnline instructors: Online Support at online-instructor-support@youthpassionproject.org.",
      },
      {
        q: "I’m not in high school. How can I help?",
        a: "Our instructor and volunteer roles—including curriculum development, outreach, and operations—are for high school students only. You must be in high school to apply. Check the Apply page for current opportunities or email us at support@youthpassionproject.org with questions.",
      },
    ],
  },
  {
    title: "Programs & Organization",
    items: [
      {
        q: "What is the Youth Passion Project?",
        a: "The Youth Passion Project is an organization that offers free classes—both online and in-person—taught by high school students. We focus on subjects that aren’t traditionally taught in school—from songwriting to coding to baking—giving younger students unique learning opportunities. Online classes are available from anywhere; in-person classes run where we have chapters. We’re a Delaware nonprofit with 501(c)(3) status. You can read more about our mission on our About page.",
      },
      {
        q: "What courses are offered?",
        a: "We offer a large variety of courses in subjects like Competition Math, Painting, Chess, Creative Writing, and many more. The lineup changes each session based on which instructors are teaching. Check the course catalog on our student portal for the current list and detailed descriptions.",
      },
      {
        q: "Who are the instructors?",
        a: "Our 100+ instructors are high school students who are passionate about what they teach. All potential instructors submit applications, and we accept only a small percentage. We evaluate teaching ability, professionalism, organization, qualifications, character, and course feasibility through interviews with trained hiring staff. Our instructors include published authors, award-winning researchers, musicians who have performed at venues like Carnegie Hall, ranked chess players and athletes, and seniors accepted to prestigious colleges. We hand-pick instructors who we believe add greatly to our mission and community.",
      },
      {
        q: "When will the next session be open for registration?",
        a: "You can view our full course schedule on our Calendar page. Subscribe to our mailing list (subscription box at the bottom of our website pages) to get the latest updates about registration openings.",
      },
      {
        q: "Where do you operate?",
        a: "We’re based in Delaware. Online classes are open to students anywhere in the world. In-person classes run in locations where we have active chapters—availability varies by region. Our programs run in Fall and Spring; see the Programs and Calendar pages for chapter locations, dates, and what’s offered near you.",
      },
      {
        q: "How is YPP funded?",
        a: "We’re supported by donations (including through the Community Foundation of Delaware), grants, and in-kind support. Donations are tax-deductible. See the Donate page for more.",
      },
      {
        q: "How do I contact the Youth Passion Project?",
        a: "Students and parents: Enrollment and Student Services at support@youthpassionproject.org\n\nMedia inquiries: Public Relations at marketing@youthpassionproject.org\n\nIn-person instructors: In-person Support at in-person-instructors@youthpassionproject.org\n\nOnline instructors: Online Support at online-instructor-support@youthpassionproject.org\n\nYou can also connect with us on Instagram or X (Twitter). For postal mail, phone, or Zoom, email the relevant address above and we can arrange it.",
      },
    ],
  },
];

export default function FAQsPage() {
  return (
    <div>
      {/* Page header */}
      <section className="border-b border-[var(--ypp-border)] bg-[var(--ypp-white)] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-[var(--ypp-ink)] sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-[var(--ypp-muted)]">
            Quick answers about our courses, how to join, and how we run.
          </p>
        </div>
      </section>

      {/* FAQ content */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {faqCategories.map((category) => (
            <div key={category.title} className="mb-14 last:mb-0">
              <h2 className="font-heading text-xl font-bold text-[var(--ypp-ink)] sm:text-2xl">
                {category.title}
              </h2>
              <ul className="mt-6 flex flex-col gap-3" aria-label={`FAQs: ${category.title}`}>
                {category.items.map((faq) => (
                  <li key={faq.q}>
                    <details className="group rounded-xl border border-[var(--ypp-border)] bg-[var(--ypp-white)] shadow-sm">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-body font-medium text-[var(--ypp-ink)] transition-colors hover:bg-[var(--ypp-blush)] [&::-webkit-details-marker]:hidden">
                        <span className="pr-2">{faq.q}</span>
                        <span className="shrink-0 text-[var(--ypp-primary)] transition-transform group-open:rotate-180" aria-hidden>
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </summary>
                      <div className="border-t border-[var(--ypp-border)] px-5 py-4">
                        <p className="font-body text-[var(--ypp-muted)] leading-relaxed whitespace-pre-line">
                          {textWithEmailLinks(faq.a)}
                        </p>
                      </div>
                    </details>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <p className="mt-12 text-center text-sm text-[var(--ypp-muted)]">
            To register or view the course catalog, visit our{" "}
            <a href={PORTAL_URL} target="_blank" rel="noopener noreferrer" className="font-medium text-[var(--ypp-primary)] hover:underline">
              student portal
            </a>
            . For enrollment or student services, use our{" "}
            <Link href="/about" className="font-medium text-[var(--ypp-primary)] hover:underline">
              Contact page
            </Link>
            . For students and parents, email{" "}
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
