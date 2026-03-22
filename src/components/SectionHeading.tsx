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
    <div className={`w-full min-w-0 ${centered ? "text-center" : ""}`}>
      <h2 className="font-heading text-balance text-3xl font-bold text-[var(--ypp-deep)] sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="font-body mx-auto mt-3 max-w-2xl text-pretty text-base text-[var(--ypp-muted)] sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
