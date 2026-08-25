import Link from 'next/link';
import type { ReactNode } from 'react';

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
}

export function Button({ href, children, variant = 'primary' }: ButtonProps) {
  const baseStyles =
    'font-display inline-flex items-center justify-center rounded-[4px] px-[22px] py-[10px] text-xs font-semibold uppercase tracking-[0.06em] transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]';
  const variantStyles =
    variant === 'primary'
      ? 'bg-[var(--accent)] text-white hover:translate-y-[-1px] hover:opacity-90'
      : 'border border-[var(--line)] bg-transparent text-[var(--text)] hover:translate-y-[-1px] hover:border-[rgba(0,0,0,0.25)]';

  return (
    <Link href={href} className={`${baseStyles} ${variantStyles}`}>
      {children}
    </Link>
  );
}
