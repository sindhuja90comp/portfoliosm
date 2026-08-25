import Link from 'next/link';
import { TechPill } from './tech-pill';

interface CardProps {
  title: string;
  description: string;
  tech: string[];
  highlight: string;
  href?: string;
  badge?: string;
}

export function Card({ title, description, tech, highlight, href, badge }: CardProps) {
  const content = (
    <>
      <span className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-[var(--accent)] transition-transform duration-300 group-hover:scale-x-100" />
      <div>
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <p className="font-display text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">{badge ?? 'Project'}</p>
            <h3 className="font-display mt-2 text-[20px] font-bold tracking-[-0.01em] text-[var(--text)]">{title}</h3>
          </div>
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(17,24,39,0.08)] bg-white/70 text-[var(--muted)] transition-colors duration-200 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent-soft)] group-hover:text-[var(--accent)]">
            {href ? '↗' : '•'}
          </span>
        </div>
      </div>
      <p className="mb-4 text-[13px] leading-[1.65] text-[var(--muted)]">{description}</p>
      <p className="mb-5 border-l-2 border-[var(--accent)] pl-3 text-[12px] italic leading-[1.55] text-[var(--body)]">{highlight}</p>
      <div className="mt-auto flex flex-wrap gap-2">
        {tech.map((item) => (
          <TechPill key={item} label={item} />
        ))}
      </div>
      {!href ? <p className="mt-5 text-sm font-medium text-[var(--muted)]">Project available on request.</p> : null}
    </>
  );

  if (!href) {
    return <article className="surface-card-strong group relative block overflow-hidden rounded-[14px] px-6 py-6">{content}</article>;
  }

  return (
    <Link
      href={href}
      className="surface-card-strong group relative block overflow-hidden rounded-[14px] px-6 py-6 transition duration-200 hover:translate-y-[-4px] hover:shadow-[0_20px_40px_rgba(37,64,97,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
      target="_blank"
      rel="noreferrer"
    >
      {content}
    </Link>
  );
}
