"use client";

import { useState } from "react";
import { mailingListSuccessMessage } from "@/constants/site";

type EmailSignupProps = {
  variant?: "default" | "dark";
};

export default function EmailSignup({ variant = "default" }: EmailSignupProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  const isDark = variant === "dark";

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 sm:flex-row sm:max-w-md"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={isDark ? "your@email.com" : "Enter your email"}
        required
        disabled={status === "loading"}
        className={
          isDark
            ? "input-focus w-full rounded-[var(--r-md)] border border-white/30 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/60 disabled:opacity-60 focus:border-white/50 focus:bg-white/15"
            : "input-focus w-full rounded-[var(--r-md)] border border-[var(--ypp-border)] bg-[var(--ypp-white)] px-4 py-3 text-[var(--ypp-ink)] outline-none placeholder:text-[var(--ypp-muted)] disabled:opacity-60"
        }
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className={
          isDark
            ? "btn-primary shrink-0 disabled:opacity-60"
            : "btn-primary shrink-0 disabled:opacity-60"
        }
      >
        {status === "loading" ? "Submitting…" : "Subscribe"}
      </button>
      {status === "success" && (
        <p
          className={
            isDark
              ? "text-sm text-[var(--ypp-lavender)]"
              : "text-sm text-green-600 dark:text-green-400"
          }
        >
          {isDark ? mailingListSuccessMessage : "Thanks! We'll be in touch."}
        </p>
      )}
      {status === "error" && (
        <p
          className={
            isDark
              ? "text-sm text-red-300"
              : "text-sm text-red-600 dark:text-red-400"
          }
        >
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
