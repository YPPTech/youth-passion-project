import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import CalendarView, { type CalendarEvent } from "@/components/CalendarView";
import { PORTAL_URL, USE_PORTAL_WAITLIST } from "@/constants/site";

// Calendar events (add more when you have dates)
const sampleEvents: CalendarEvent[] = [
  { date: "2026-03-17", title: "Applications open", type: "Event" },
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
            {USE_PORTAL_WAITLIST ? (
              <>
                We’re getting the portal ready.{" "}
                <Link href="/notify" className="text-[var(--ypp-primary)] font-medium hover:underline">
                  Get notified when you can sign up
                </Link>
                .
              </>
            ) : (
              <>
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
              </>
            )}
          </p>
        </div>
      </section>
    </div>
  );
}
