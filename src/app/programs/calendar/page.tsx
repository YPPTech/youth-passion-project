import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export default function CalendarPage() {
  return (
    <div className="w-full min-w-0">
      <PageHeader
        label="Schedule"
        title="Calendar"
        subtitle="Nothing is scheduled here yet. When weekly chapter events, trainings, or program updates are ready, they will appear on this page."
        action={
          <Link
            href="/programs"
            className="inline-flex items-center rounded-lg border-2 border-[var(--ypp-primary)] bg-[var(--ypp-white)] px-4 py-2 font-semibold text-[var(--ypp-primary)] transition-colors hover:bg-[var(--ypp-primary)] hover:text-white"
          >
            Back to Programs & Chapters
          </Link>
        }
      />
    </div>
  );
}
