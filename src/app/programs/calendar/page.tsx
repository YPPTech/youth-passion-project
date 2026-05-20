import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export default function CalendarPage() {
  return (
    <div className="w-full min-w-0">
      <PageHeader
        label="Schedule"
        title="Calendar"
        subtitle="Use the student portal for registration and current course details. This page will continue to show chapter schedules, training, and operations updates."
        action={
          <Link
            href="/programs"
            className="inline-flex items-center rounded-lg border-2 border-[var(--ypp-primary)] bg-[var(--ypp-white)] px-4 py-2 font-semibold text-[var(--ypp-primary)] transition-colors hover:bg-[var(--ypp-primary)] hover:text-white"
          >
            ← Back to Programs & Chapters
          </Link>
        }
      />
    </div>
  );
}
