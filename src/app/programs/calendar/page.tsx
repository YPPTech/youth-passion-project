import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import SampleChapterWeekSchedule from "@/components/SampleChapterWeekSchedule";
import { sampleChapterWeek } from "@/data/sampleChapterWeek";

export default function CalendarPage() {
  return (
    <div className="w-full min-w-0">
      <PageHeader
        label="Schedule"
        title="Sample chapter week"
        subtitle="See how a typical week can mix student classes, instructor training, alumni programming, and chapter operations. Times and offerings vary by chapter—the dated calendar and sign-up will live in the student portal when it launches."
        action={
          <Link
            href="/programs"
            className="inline-flex items-center rounded-lg border-2 border-[var(--ypp-primary)] bg-[var(--ypp-white)] px-4 py-2 font-semibold text-[var(--ypp-primary)] transition-colors hover:bg-[var(--ypp-primary)] hover:text-white"
          >
            ← Back to Programs & Chapters
          </Link>
        }
      />

      <section className="bg-[var(--ypp-blush)]/60 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-3xl min-w-0">
          <SectionHeading
            title="One week at a glance"
            subtitle="Scroll day by day—built for phones first. This is a sample rhythm, not your personal schedule."
          />
          <p className="font-body mx-auto mt-6 max-w-xl text-center text-pretty text-sm text-[var(--ypp-muted)] sm:text-base">
            All times below are{" "}
            <span className="font-semibold text-[var(--ypp-ink)]">Eastern Time (ET)</span>
            —US Eastern, including EST and EDT depending on the season.
          </p>
          <div className="mt-8">
            <SampleChapterWeekSchedule days={sampleChapterWeek} />
          </div>

          <div className="card-ypp mt-12 px-5 py-6 sm:px-8 sm:py-8">
            <h3 className="font-heading text-lg font-bold text-[var(--ypp-ink)] sm:text-xl">
              Need the real calendar?
            </h3>
            <p className="font-body mt-3 text-[var(--ypp-muted)] leading-relaxed">
              Registration deadlines, room changes, and your own class list will be in the{" "}
              <span className="font-medium text-[var(--ypp-primary)]">student portal</span> when it
              goes live. Until then, browse{" "}
              <Link href="/programs" className="font-medium text-[var(--ypp-primary)] hover:underline">
                Programs & Chapters
              </Link>{" "}
              for what we offer, or reach out on{" "}
              <Link href="/contact" className="font-medium text-[var(--ypp-primary)] hover:underline">
                Contact
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
