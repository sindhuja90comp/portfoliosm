interface SectionHeadingProps {
  title: string;
  description: string;
  badge?: string;
}

export function SectionHeading({ title, description, badge }: SectionHeadingProps) {
  return (
    <div className="space-y-3">
      {badge ? <span className="font-display text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">{badge}</span> : null}
      <div>
        <h2 className="font-display text-[clamp(26px,3vw,36px)] font-bold tracking-[-0.02em] text-[var(--text)]">{title}</h2>
        <p className="mt-2 max-w-[520px] text-[15px] text-[var(--muted)]">{description}</p>
      </div>
    </div>
  );
}
