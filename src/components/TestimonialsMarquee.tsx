"use client";

import { useEffect, useState } from "react";
import type { HomeTestimonial } from "@/constants/testimonials";

function TestimonialCard({ item, layout = "marquee" }: { item: HomeTestimonial; layout?: "marquee" | "static" }) {
  const widthClass =
    layout === "marquee"
      ? "w-[min(22rem,calc(100vw-3rem))] shrink-0 sm:w-80"
      : "w-full min-w-0";
  return (
    <div
      className={`flex h-full flex-col rounded-2xl border border-[var(--ypp-border)] bg-[var(--ypp-blush)]/40 p-6 shadow-[var(--shadow-sm)] sm:p-7 ${widthClass}`}
    >
      <blockquote className="font-body border-l-[3px] border-[var(--ypp-primary)]/35 pl-4 text-pretty text-sm leading-relaxed text-[var(--ypp-ink)] sm:text-[0.9375rem] sm:leading-relaxed">
        &ldquo;{item.quote}&rdquo;
      </blockquote>
    </div>
  );
}

export default function TestimonialsMarquee({ items }: { items: HomeTestimonial[] }) {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  if (reduceMotion) {
    return (
      <ul className="mx-auto mt-12 grid max-w-6xl list-none grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.id}>
            <TestimonialCard item={item} layout="static" />
          </li>
        ))}
      </ul>
    );
  }

  const loop = [...items, ...items];

  return (
    <div className="testimonial-marquee-outer relative left-1/2 mt-12 w-screen max-w-none -translate-x-1/2 overflow-hidden pb-2 pt-1">
      <div className="testimonial-marquee-track flex w-max gap-6 px-4 sm:gap-8 sm:px-8">
        {loop.map((item, index) => (
          <div key={`${item.id}-${index}`} className="shrink-0">
            <TestimonialCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
