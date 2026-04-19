/** Family feedback for homepage marquee. Add an `id` when inserting new rows (stable React keys). */
export type HomeTestimonial = {
  id: string;
  quote: string;
  attribution: string;
};

export const homeTestimonials: HomeTestimonial[] = [
  {
    id: "student-interests",
    quote:
      "I'm very grateful for this program because it helped me realize which areas I'm interested in. I loved how the teachers taught and devoted their time. Thank you for helping me realize my interests.",
    attribution: "YPP student",
  },
  {
    id: "parent-loved-classes",
    quote: "My student loved the classes. Keep up the great work. Thanks for volunteering your time.",
    attribution: "Parent of a YPP student",
  },
  {
    id: "parent-wonderful",
    quote:
      "The classes have been wonderful. The instructors engage the children, work hard in teaching them, and have made our girls look forward to their classes each week. It is an absolutely wonderful program.",
    attribution: "Parent of YPP students",
  },
  {
    id: "parent-initiative",
    quote: "It's a great initiative by YPP. My son loved all the lessons.",
    attribution: "Parent of a YPP student",
  },
  {
    id: "parent-high-school-instructors",
    quote: "My daughter really loved all the classes she attended—the high school kids did a great job!",
    attribution: "Parent of a YPP student",
  },
  {
    id: "parent-three-kids",
    quote:
      "Thank you so much for volunteering this wonderful learning program for the kids. All three of my kids enjoyed the subjects they picked.",
    attribution: "Parent of YPP students",
  },
  {
    id: "parent-teachers-enthusiasm",
    quote:
      "The teachers were incredibly helpful and knowledgeable. They were enthusiastic about what they were teaching—we hope this happens again soon.",
    attribution: "Parent of a YPP student",
  },
  {
    id: "parent-chess-volunteers",
    quote:
      "Our kids truly enjoyed Chess with Ethan. We truly appreciate the effort by the volunteers of this program.",
    attribution: "Parent of YPP students",
  },
];
