import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import InPersonSection from "@/components/InPersonSection";
import { inPersonLocations } from "@/data/programsData";
import { PORTAL_URL } from "@/constants/site";

const programModelLinkClass =
  "font-medium text-[var(--ypp-primary)] underline decoration-[var(--ypp-primary)]/40 underline-offset-2 transition-colors hover:text-[var(--ypp-deep)] hover:decoration-[var(--ypp-primary)]";

const sectionScrollClass = "scroll-mt-[calc(var(--ypp-nav-height)+0.75rem)]";

export default function ProgramsPage() {
  return (
    <div className="w-full min-w-0">
      <PageHeader
        label="Summer 2026 · Now Accepting Applications"
        title="Programs & Chapters"
        subtitle={
          <>
            In-person chapters in <strong className="font-semibold text-[var(--ypp-ink)]">Scarsdale, NY</strong> and{" "}
            <strong className="font-semibold text-[var(--ypp-ink)]">Edison, NJ</strong>. Summer 2026 applications are open now; register through the{" "}
            <a href={PORTAL_URL} target="_blank" rel="noopener noreferrer" className={programModelLinkClass}>
              student portal
            </a>
            {" "}or{" "}
            <Link href="/join#teach-or-lead" className={programModelLinkClass}>
              volunteer to teach
            </Link>
            .
          </>
        }
      />

      <section
        id="ypp-chapters"
        className={`relative overflow-hidden border-b border-[var(--ypp-border)]/60 bg-gradient-to-b from-[var(--ypp-lavender)]/45 via-[var(--ypp-blush)]/90 to-[#faf8ff] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 ${sectionScrollClass}`}
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-20%,rgba(139,63,232,0.12),transparent_50%),radial-gradient(ellipse_50%_40%_at_100%_60%,rgba(107,33,200,0.06),transparent)]"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/40 to-transparent" aria-hidden />
        <div className="relative mx-auto w-full max-w-5xl min-w-0">
          <SectionHeading title="In-person chapters" subtitle="Where we run programs today." />
          <InPersonSection locations={inPersonLocations} />
        </div>
      </section>

      <section className="border-t border-[var(--ypp-border)] bg-[var(--ypp-white)] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-3xl min-w-0 text-center">
          <p className="font-body text-pretty text-[var(--ypp-muted)]">
            Course descriptions, grades, and teacher profiles are available through the{" "}
            <a href={PORTAL_URL} target="_blank" rel="noopener noreferrer" className="font-medium text-[var(--ypp-primary)] hover:underline">
              student portal
            </a>
            . The{" "}
            <Link href="/programs/calendar" className="font-medium text-[var(--ypp-primary)] hover:underline">
              Calendar
            </Link>{" "}
            will continue to show chapter updates and scheduling notes.
          </p>
        </div>
      </section>
    </div>
  );
}
