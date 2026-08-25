interface TechPillProps {
  label: string;
}

export function TechPill({ label }: TechPillProps) {
  return (
    <span className="font-display rounded-[4px] border border-[rgba(17,24,39,0.08)] bg-white/65 px-[10px] py-1 text-[11px] font-medium tracking-[0.04em] text-[var(--muted)]">
      {label}
    </span>
  );
}
