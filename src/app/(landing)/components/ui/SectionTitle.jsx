export default function SectionTitle({ title, subtitle, tag, centered = true }) {
  return (
    <div className={centered ? "text-center" : ""}>
      {tag && (
        <h4 className="text-primary text-sm font-bold leading-normal tracking-[0.015em] uppercase mb-2">
          {tag}
        </h4>
      )}
      <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em] text-heading-light dark:text-heading-dark">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl mx-auto text-text-light dark:text-text-dark">
          {subtitle}
        </p>
      )}
    </div>
  );
}
