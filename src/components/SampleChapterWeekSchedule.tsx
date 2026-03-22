import type { ScheduleCategory, ScheduleDay } from "@/data/sampleChapterWeek";

const categoryStyles: Record<
  ScheduleCategory,
  string
> = {
  "Student class":
    "border-[var(--ypp-primary)]/25 bg-[var(--ypp-lavender)]/50 text-[var(--ypp-primary)]",
  "Instructor training":
    "border-[var(--ypp-deep)]/20 bg-[var(--ypp-deep)]/5 text-[var(--ypp-deep)]",
  Alumni: "border-[var(--ypp-primary)]/25 bg-[var(--ypp-blush)]/70 text-[var(--ypp-deep)]",
  Chapter: "border-[var(--ypp-border)] bg-[var(--ypp-white)] text-[var(--ypp-ink)]",
  Community: "border-[var(--ypp-primary)]/30 bg-[var(--ypp-lavender)]/30 text-[var(--ypp-deep)]",
};

type Props = {
  days: ScheduleDay[];
};

export default function SampleChapterWeekSchedule({ days }: Props) {
  return (
    <div className="w-full min-w-0 space-y-6">
      {days.map((day) => (
        <section
          key={day.id}
          className="overflow-hidden rounded-2xl border border-[var(--ypp-border)] bg-[var(--ypp-white)] shadow-[var(--shadow-sm)]"
          aria-labelledby={`day-${day.id}`}
        >
          <div className="border-b border-[var(--ypp-border)] bg-[var(--ypp-blush)]/45 px-4 py-3 sm:px-5">
            <div className="flex flex-wrap items-start justify-between gap-2 sm:items-baseline">
              <h3
                id={`day-${day.id}`}
                className="min-w-0 font-heading text-balance text-lg font-bold text-[var(--ypp-ink)] sm:text-xl"
              >
                {day.label}
              </h3>
              <span className="font-label text-xs font-semibold uppercase tracking-wider text-[var(--ypp-muted)]">
                {day.short}
              </span>
            </div>
          </div>
          <ul className="divide-y divide-[var(--ypp-border)]">
            {day.slots.map((slot, i) => (
              <li key={`${day.id}-${i}`} className="px-4 py-4 sm:px-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-6">
                  <p className="font-body shrink-0 text-sm font-semibold tabular-nums text-[var(--ypp-ink)] sm:w-36 sm:pt-0.5">
                    {slot.time}
                  </p>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-start gap-2 gap-y-2 sm:items-center">
                      <p className="min-w-0 font-heading text-base font-semibold text-[var(--ypp-deep)] sm:text-lg">
                        {slot.title}
                      </p>
                      <span
                        className={`inline-flex shrink-0 rounded-full border px-2.5 py-0.5 font-label text-[10px] font-semibold uppercase tracking-wide sm:text-xs ${categoryStyles[slot.category]}`}
                      >
                        {slot.category}
                      </span>
                    </div>
                    {slot.note && (
                      <p className="font-body mt-2 text-sm leading-relaxed text-[var(--ypp-muted)]">
                        {slot.note}
                      </p>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
