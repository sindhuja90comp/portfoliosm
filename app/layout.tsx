import type { Metadata } from 'next';
import './globals.css';
import { profile } from '../lib/data';

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.role}`,
  description: `${profile.name}'s recruiter-friendly portfolio built with Next.js, TypeScript, and Tailwind CSS.`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
