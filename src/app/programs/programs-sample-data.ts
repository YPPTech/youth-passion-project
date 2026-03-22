/**
 * Sample data for Programs page and homepage "Newest Courses". Restore when classes are available:
 * 1. In src/data/programsData.ts, set:
 *    import { onlineSessionsSample, inPersonLocationsSample } from "@/app/programs/programs-sample-data";
 *    export const onlineSessions = onlineSessionsSample;
 *    export const inPersonLocations = inPersonLocationsSample;
 * 2. Programs page and homepage will both show courses; remove the "no classes" conditionals if you prefer.
 */
/** Empty link = no portal URL while portal is coming soon. */
const NO_PORTAL_LINK = "";

export const onlineSessionsSample = [
  {
    session: "Spring 2026",
    location: "Online (Zoom)",
    classes: [
      {
        name: "Introduction to Coding in Java",
        grades: "Grades 6–9",
        description:
          "Learn the fundamentals of programming with Java. Students write real code, build small projects, and develop problem-solving skills. No prior experience required—ideal for middle schoolers curious about computer science.",
        link: NO_PORTAL_LINK,
      },
      {
        name: "Songwriting & Music",
        grades: "Grades 4–8",
        description:
          "Explore melody, lyrics, and basic music theory while writing your own songs. From idea to finished piece, with guidance on structure, rhyme, and simple arrangements. Bring your instrument or use your voice.",
        link: NO_PORTAL_LINK,
      },
      {
        name: "Art of Baking",
        grades: "Grades 5–8",
        description:
          "Hands-on baking from scratch: cookies, quick breads, and simple pastries. Learn measuring, mixing, and oven safety while building confidence in the kitchen. Recipes are chosen so students can practice at home.",
        link: NO_PORTAL_LINK,
      },
      {
        name: "Creative Writing",
        grades: "Grades 5–9",
        description:
          "Develop your voice through short stories, poetry, and personal narratives. Focus on character, setting, and revision in a supportive workshop setting. Great for students who love to read and want to write more.",
        link: NO_PORTAL_LINK,
      },
    ],
  },
];

export const inPersonLocationsSample = [
  {
    id: "wilmington-de",
    city: "Wilmington, DE",
    state: "Delaware",
    sessions: "Fall & Spring",
    classes: [
      {
        name: "Introduction to Coding in Java",
        grades: "Grades 6–9",
        description:
          "Learn programming fundamentals with Java. Build small projects and develop problem-solving skills. No prior experience required.",
        link: NO_PORTAL_LINK,
      },
      {
        name: "Songwriting & Music",
        grades: "Grades 4–8",
        description:
          "Explore melody, lyrics, and music theory while writing your own songs. Bring your instrument or use your voice.",
        link: NO_PORTAL_LINK,
      },
      {
        name: "Creative Writing",
        grades: "Grades 5–9",
        description:
          "Short stories, poetry, and personal narratives in a supportive workshop. Focus on character, setting, and revision.",
        link: NO_PORTAL_LINK,
      },
    ],
  },
  {
    id: "philadelphia-pa",
    city: "Philadelphia area",
    state: "Pennsylvania",
    sessions: "Spring",
    classes: [
      {
        name: "Art of Baking",
        grades: "Grades 5–8",
        description:
          "Hands-on baking from scratch: cookies, quick breads, and simple pastries. Learn measuring, mixing, and oven safety.",
        link: NO_PORTAL_LINK,
      },
      {
        name: "Introduction to Coding in Java",
        grades: "Grades 6–9",
        description:
          "Learn programming fundamentals with Java. Build small projects and develop problem-solving skills.",
        link: NO_PORTAL_LINK,
      },
    ],
  },
];
