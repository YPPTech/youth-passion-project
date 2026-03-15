"use client";

import { useMemo, useState } from "react";

export type CalendarEvent = {
  date: string; // YYYY-MM-DD
  title: string;
  type: "Registration" | "Class" | "Event" | "Session";
};

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function formatKey(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

type Props = {
  events: CalendarEvent[];
  initialYear?: number;
  initialMonth?: number; // 1–12
};

export default function CalendarView({
  events,
  initialYear,
  initialMonth,
}: Props) {
  const today = useMemo(() => new Date(), []);
  const [viewDate, setViewDate] = useState(() => {
    const y = initialYear ?? today.getFullYear();
    const m = (initialMonth ?? today.getMonth() + 1) - 1;
    return new Date(y, m, 1);
  });

  const eventsByDate = useMemo(() => {
    const map = new Map<string, CalendarEvent[]>();
    for (const e of events) {
      const list = map.get(e.date) ?? [];
      list.push(e);
      map.set(e.date, list);
    }
    return map;
  }, [events]);

  const { calendarDays, monthLabel, year } = useMemo(() => {
    const y = viewDate.getFullYear();
    const m = viewDate.getMonth();
    const first = new Date(y, m, 1);
    const last = new Date(y, m + 1, 0);
    const startPad = first.getDay();
    const daysInMonth = last.getDate();
    const totalSlots = startPad + daysInMonth;
    const rows = Math.ceil(totalSlots / 7);
    const totalCells = rows * 7;
    const days: { date: Date; isCurrentMonth: boolean; key: string }[] = [];

    for (let i = 0; i < startPad; i++) {
      const d = new Date(y, m, -startPad + i + 1);
      days.push({ date: d, isCurrentMonth: false, key: formatKey(d) });
    }
    for (let i = 1; i <= daysInMonth; i++) {
      const d = new Date(y, m, i);
      days.push({ date: d, isCurrentMonth: true, key: formatKey(d) });
    }
    const remaining = totalCells - days.length;
    for (let i = 1; i <= remaining; i++) {
      const d = new Date(y, m + 1, i);
      days.push({ date: d, isCurrentMonth: false, key: formatKey(d) });
    }

    return {
      calendarDays: days,
      monthLabel: MONTHS[m],
      year: y,
    };
  }, [viewDate]);

  const goPrev = () => {
    setViewDate((d) => new Date(d.getFullYear(), d.getMonth() - 1, 1));
  };

  const goNext = () => {
    setViewDate((d) => new Date(d.getFullYear(), d.getMonth() + 1, 1));
  };

  const goToday = () => {
    setViewDate(new Date(today.getFullYear(), today.getMonth(), 1));
  };

  return (
    <div className="rounded-2xl border border-[var(--ypp-border)] bg-[var(--ypp-white)] overflow-hidden shadow-sm">
      {/* Month nav */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--ypp-border)] bg-[var(--ypp-blush)]/40 px-4 py-3 sm:px-6">
        <h3 className="font-heading text-lg font-bold text-[var(--ypp-ink)] sm:text-xl">
          {monthLabel} {year}
        </h3>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={goPrev}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--ypp-border)] bg-[var(--ypp-white)] text-[var(--ypp-ink)] transition-colors hover:bg-[var(--ypp-lavender)] hover:border-[var(--ypp-primary)]/30"
            aria-label="Previous month"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={goToday}
            className="rounded-lg border border-[var(--ypp-border)] bg-[var(--ypp-white)] px-3 py-2 text-sm font-medium text-[var(--ypp-ink)] transition-colors hover:bg-[var(--ypp-lavender)]"
          >
            Today
          </button>
          <button
            type="button"
            onClick={goNext}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--ypp-border)] bg-[var(--ypp-white)] text-[var(--ypp-ink)] transition-colors hover:bg-[var(--ypp-lavender)] hover:border-[var(--ypp-primary)]/30"
            aria-label="Next month"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Weekday headers */}
      <div className="grid grid-cols-7 border-b border-[var(--ypp-border)] bg-[var(--ypp-white)]">
        {WEEKDAYS.map((day) => (
          <div
            key={day}
            className="border-r border-[var(--ypp-border)] py-2 text-center last:border-r-0"
          >
            <span className="font-label text-xs font-semibold uppercase tracking-wider text-[var(--ypp-muted)]">
              {day}
            </span>
          </div>
        ))}
      </div>

      {/* Day grid */}
      <div className="grid grid-cols-7">
        {calendarDays.map(({ date, isCurrentMonth, key }) => {
          const dayEvents = eventsByDate.get(key) ?? [];
          const isToday = isSameDay(date, today);
          return (
            <div
              key={key}
              className={`min-h-[100px] border-b border-r border-[var(--ypp-border)] last:border-r-0 p-2 sm:min-h-[120px] ${
                !isCurrentMonth ? "bg-[var(--ypp-blush)]/20" : "bg-[var(--ypp-white)]"
              }`}
            >
              <div className="flex flex-col gap-1">
                <span
                  className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-sm font-medium ${
                    isToday
                      ? "bg-[var(--ypp-primary)] text-white"
                      : isCurrentMonth
                        ? "text-[var(--ypp-ink)]"
                        : "text-[var(--ypp-muted)]"
                  }`}
                >
                  {date.getDate()}
                </span>
                <div className="flex flex-col gap-1 overflow-hidden">
                  {dayEvents.slice(0, 3).map((evt) => (
                    <div
                      key={`${key}-${evt.title}`}
                      className="rounded bg-[var(--ypp-lavender)]/60 px-1.5 py-1 text-left"
                    >
                      <p className="truncate font-body text-xs font-medium text-[var(--ypp-ink)]" title={evt.title}>
                        {evt.title}
                      </p>
                      <span className="text-[10px] font-medium text-[var(--ypp-primary)]">
                        {evt.type}
                      </span>
                    </div>
                  ))}
                  {dayEvents.length > 3 && (
                    <span className="font-body text-xs text-[var(--ypp-muted)]">
                      +{dayEvents.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
