"use client";

import { useRef, useState, useCallback, useEffect } from "react";

/**
 * Section wrapper that adds the same cursor-following gradient bubble as the hero.
 * Use the same class "hero-mouse-bubble" for styling (defined in globals.css).
 */
export default function MouseFollowSection({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [visible, setVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = () => setPrefersReducedMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (prefersReducedMotion) return;
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      setPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      setVisible(true);
    },
    [prefersReducedMotion]
  );

  const handleMouseLeave = useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ position: "relative", overflow: "hidden" }}
    >
      {!prefersReducedMotion && (
        <div
          className="hero-mouse-bubble"
          aria-hidden
          style={{
            left: pos.x,
            top: pos.y,
            opacity: visible ? 1 : 0,
          }}
        />
      )}
      {children}
    </section>
  );
}
