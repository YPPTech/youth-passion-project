const stats = [
  { value: "2,400+", label: "Lifetime student signups" },
  { value: "30+", label: "Countries engaged" },
  { value: "30+", label: "US states represented" },
  { value: "400+", label: "Course sections taught" },
] as const;

export default function ByTheNumbersSection() {
  return (
    <section className="bg-[var(--ypp-deep)] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl min-w-0 text-center">
        <p className="font-label text-xs font-semibold uppercase tracking-wider text-[var(--ypp-lavender)]">
          Our impact
        </p>
        <h2 className="font-heading mt-3 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
          By the numbers
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-4">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center">
              <span className="font-heading text-4xl font-bold text-white sm:text-5xl">
                {value}
              </span>
              <span className="font-body mt-2 max-w-[12rem] text-pretty text-sm text-white/80 sm:text-base">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}