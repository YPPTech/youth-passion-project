import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import CalendarView, { type CalendarEvent } from "@/components/CalendarView";
import { PORTAL_URL } from "@/constants/site";

// Sample events for this year (placeholder — replace with real data later)
const sampleEvents: CalendarEvent[] = [
  { date: "2026-03-15", title: "Spring registration opens", type: "Registration" },
  { date: "2026-03-22", title: "Introduction to Java – Section A starts", type: "Class" },
  { date: "2026-03-23", title: "Songwriting & Music – Section A starts", type: "Class" },
  { date: "2026-03-29", title: "Art of Baking – Section A starts", type: "Class" },
  { date: "2026-04-05", title: "Creative Writing – Section A starts", type: "Class" },
  { date: "2026-04-12", title: "Instructor info session", type: "Event" },
  { date: "2026-05-15", title: "Spring session ends", type: "Session" },
  { date: "2026-03-10", title: "Early registration reminder", type: "Event" },
  { date: "2026-04-19", title: "Make-up week", type: "Session" },
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
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            title="Full Calendar"
            subtitle="Registration, class start dates, and special events. Use the arrows to change months."
          />
          <div className="mt-10">
            <CalendarView events={sampleEvents} />
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
