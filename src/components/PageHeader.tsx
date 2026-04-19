import type { ReactNode } from "react";

type PageHeaderProps = {
  label?: string;
  title: string;
  subtitle?: ReactNode;
  action?: ReactNode;
};

export default function PageHeader({ label, title, subtitle, action }: PageHeaderProps) {
  return (
    <section className="border-b border-[var(--ypp-border)] bg-[var(--ypp-white)] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-3xl min-w-0 px-0 text-center sm:px-1">
        {label && (
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 shrink-0 bg-[var(--ypp-primary)]/60" aria-hidden />
            <p className="font-label text-xs font-semibold uppercase tracking-wider text-[var(--ypp-primary)] underline decoration-[var(--ypp-primary)] underline-offset-2">
              {label}
            </p>
            <span className="h-px w-8 shrink-0 bg-[var(--ypp-primary)]/60" aria-hidden />
          </div>
        )}
        <h1 className="font-heading max-w-full text-balance break-words text-4xl font-bold tracking-tight text-[var(--ypp-ink)] sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="font-body mt-4 max-w-full text-pretty break-words text-base text-[var(--ypp-muted)] sm:text-lg">
            {subtitle}
          </p>
        )}
        {action && (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">{action}</div>
        )}
      </div>
    </section>
  );
}
