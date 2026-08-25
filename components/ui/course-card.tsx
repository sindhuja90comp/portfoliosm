'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { Course, Project } from '../../lib/data';

interface CourseCardProps {
  course: Course;
  relatedProjects: Project[];
}

export function CourseCard({ course, relatedProjects }: CourseCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="surface-card-strong rounded-[14px] transition duration-200 hover:translate-y-[-3px] hover:shadow-[0_18px_34px_rgba(37,64,97,0.12)]">
      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        className="block w-full px-5 py-[18px] text-left"
        aria-expanded={isOpen}
      >
        <div className="mb-[7px] flex items-center justify-between gap-3">
          <p className="font-display text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">{course.provider}</p>
          <span className="font-display rounded-[3px] bg-[var(--accent-soft)] px-2 py-[3px] text-[11px] font-semibold tracking-[0.06em] text-[var(--accent)]">
            {course.date}
          </span>
        </div>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-display mb-[7px] text-[14px] font-bold tracking-[-0.01em] text-[var(--text)]">{course.title}</p>
            <p className="text-xs leading-[1.55] text-[var(--muted)]">{course.description}</p>
          </div>
          <span className="font-display mt-0.5 text-[18px] text-[var(--muted)]">{isOpen ? '−' : '+'}</span>
        </div>
      </button>

      {isOpen ? (
        <div className="border-t border-[rgba(17,24,39,0.08)] px-5 pb-5 pt-4">
          <p className="font-display text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
            Projects built during this course
          </p>
          <div className="mt-3 flex flex-col gap-2">
            {relatedProjects.length > 0 ? (
              relatedProjects.map((project) => (
                project.href ? (
                  <Link
                    key={project.id}
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-[8px] border border-[rgba(17,24,39,0.08)] bg-white/55 px-3 py-2 text-sm font-medium text-[var(--text)] transition duration-200 hover:border-[rgba(37,99,235,0.2)] hover:bg-white/72 hover:text-[var(--accent)]"
                  >
                    {project.title}
                  </Link>
                ) : (
                  <div
                    key={project.id}
                    className="rounded-[8px] border border-[rgba(17,24,39,0.08)] bg-white/45 px-3 py-2 text-sm font-medium text-[var(--text)]"
                  >
                    <span>{project.title}</span>
                    <span className="ml-2 text-xs text-[var(--muted)]">available on request</span>
                  </div>
                )
              ))
            ) : (
              <p className="text-sm text-[var(--muted)]">No linked projects added yet.</p>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
