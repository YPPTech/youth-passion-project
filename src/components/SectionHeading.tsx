type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
};

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2 className="font-heading text-3xl font-bold text-[var(--ypp-deep)] sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="font-body mx-auto mt-3 max-w-2xl text-lg text-[var(--ypp-muted)]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
