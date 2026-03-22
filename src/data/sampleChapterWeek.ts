/**
 * Illustrative weekly rhythm for a YPP chapter—not a real dated calendar.
 * Shown on /programs/calendar; full schedules will live in the student portal.
 * Slot times are written in US Eastern Time (ET / EST–EDT).
 */

export type ScheduleCategory =
  | "Student class"
  | "Instructor training"
  | "Alumni"
  | "Chapter"
  | "Community";

export type ScheduleSlot = {
  time: string;
  title: string;
  category: ScheduleCategory;
  note?: string;
};

export type ScheduleDay = {
  id: string;
  label: string;
  short: string;
  slots: ScheduleSlot[];
};

export const sampleChapterWeek: ScheduleDay[] = [
  {
    id: "mon",
    label: "Monday",
    short: "Mon",
    slots: [
      {
        time: "4:00–5:15 PM",
        title: "Creative writing workshop",
        category: "Student class",
        note: "Small-group feedback and revision.",
      },
      {
        time: "6:00–7:30 PM",
        title: "New instructor onboarding",
        category: "Instructor training",
        note: "Lesson planning, Zoom norms, and safety basics.",
      },
    ],
  },
  {
    id: "tue",
    label: "Tuesday",
    short: "Tue",
    slots: [
      {
        time: "5:00–6:00 PM",
        title: "Chess tactics lab",
        category: "Student class",
      },
      {
        time: "7:00–8:00 PM",
        title: "Chapter leadership sync",
        category: "Chapter",
        note: "Presidents & leads align on space, roster, and comms.",
      },
    ],
  },
  {
    id: "wed",
    label: "Wednesday",
    short: "Wed",
    slots: [
      {
        time: "3:30–4:30 PM",
        title: "STEM discovery club",
        category: "Student class",
        note: "Hands-on builds for elementary & middle school.",
      },
    ],
  },
  {
    id: "thu",
    label: "Thursday",
    short: "Thu",
    slots: [
      {
        time: "4:30–6:00 PM",
        title: "Introduction to Java",
        category: "Student class",
      },
      {
        time: "6:30–7:30 PM",
        title: "Alumni mentor office hours",
        category: "Alumni",
        note: "Drop-in Q&A for instructors and interested students.",
      },
    ],
  },
  {
    id: "fri",
    label: "Friday",
    short: "Fri",
    slots: [
      {
        time: "5:00–6:00 PM",
        title: "Art of baking",
        category: "Student class",
      },
    ],
  },
  {
    id: "sat",
    label: "Saturday",
    short: "Sat",
    slots: [
      {
        time: "10:00–11:30 AM",
        title: "Community open house",
        category: "Community",
        note: "Families meet instructors; learn about the chapter.",
      },
      {
        time: "1:00–3:00 PM",
        title: "Regional instructor training",
        category: "Instructor training",
        note: "Pedagogy deep-dive across nearby chapters.",
      },
    ],
  },
  {
    id: "sun",
    label: "Sunday",
    short: "Sun",
    slots: [
      {
        time: "—",
        title: "No fixed chapter blocks",
        category: "Chapter",
        note: "Async lesson prep, grading, and optional study groups vary by team.",
      },
    ],
  },
];
