"use client";

import type { ReactNode } from "react";

type HomeReloadLinkProps = {
  className?: string;
  children: ReactNode;
  /** e.g. close mobile nav before navigating */
  onBeforeNavigate?: () => void;
};

/** Full page load to home (not client-side navigation). */
export default function HomeReloadLink({ className, children, onBeforeNavigate }: HomeReloadLinkProps) {
  return (
    <a
      href="/"
      className={className}
      onClick={(e) => {
        if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
        e.preventDefault();
        onBeforeNavigate?.();
        window.location.assign("/");
      }}
    >
      {children}
    </a>
  );
}
