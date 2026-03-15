import { ReactNode } from "react";

type PageHeaderProps = {
  label?: string;
  title: string;
  subtitle?: string;
  action?: ReactNode;
};

export default function PageHeader({ label, title, subtitle, action }: PageHeaderProps) {
  return (
    <section className="border-b border-[var(--ypp-border)] bg-[var(--ypp-white)] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        {label && (
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[var(--ypp-primary)]" aria-hidden />
            <p className="font-label text-xs font-semibold uppercase tracking-wider text-[var(--ypp-primary)] underline decoration-[var(--ypp-primary)] underline-offset-2">
              {label}
            </p>
          </div>
        )}
        <h1 className="font-heading text-4xl font-bold tracking-tight text-[var(--ypp-ink)] sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="font-body mt-4 text-lg text-[var(--ypp-muted)]">
            {subtitle}
          </p>
        )}
        {action && <div className="mt-8">{action}</div>}
      </div>
    </section>
  );
}
