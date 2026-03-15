import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { PORTAL_URL } from "@/constants/site";

const sampleEvents = [
  { date: "Mar 15, 2025", title: "Spring registration opens", type: "Registration" },
  { date: "Mar 22, 2025", title: "Introduction to Java – Section A starts", type: "Class" },
  { date: "Mar 23, 2025", title: "Songwriting & Music – Section A starts", type: "Class" },
  { date: "Mar 29, 2025", title: "Art of Baking – Section A starts", type: "Class" },
  { date: "Apr 5, 2025", title: "Creative Writing – Section A starts", type: "Class" },
  { date: "Apr 12, 2025", title: "Instructor info session", type: "Event" },
  { date: "May 15, 2025", title: "Spring session ends", type: "Session" },
];

export default function CalendarPage() {
  return (
    <div>
      <PageHeader
        label="Calendar"
        title="Calendar"
        subtitle="All dates, events, and session milestones in one place."
        action={
          <Link
            href="/programs"
            className="inline-flex items-center rounded-lg border-2 border-[var(--ypp-primary)] bg-[var(--ypp-white)] px-4 py-2 font-semibold text-[var(--ypp-primary)] transition-colors hover:bg-[var(--ypp-primary)] hover:text-white"
          >
            ← Back to Programs
          </Link>
        }
      />

      <section className="bg-[var(--ypp-blush)]/60 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            title="Full calendar"
            subtitle="Registration, class start dates, and special events"
          />
          <div className="card-ypp mt-10 overflow-hidden p-0">
            <ul className="divide-y divide-[var(--ypp-border)]">
              {sampleEvents.map(({ date, title, type }) => (
                <li
                  key={`${date}-${title}`}
                  className="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="font-body font-medium text-[var(--ypp-ink)]">{title}</p>
                    <p className="font-body text-sm text-[var(--ypp-muted)]">{date}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-[var(--ypp-lavender)] px-3 py-1 text-xs font-medium text-[var(--ypp-primary)]">
                    {type}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <p className="font-body mt-6 text-center text-sm text-[var(--ypp-muted)]">
            For the most up-to-date schedule and to sign up, visit the{" "}
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
