"use client";

import { useRef, useState, useCallback, useEffect } from "react";

export default function HeroSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
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
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slightly darker gradient bubble that follows the cursor */}
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
