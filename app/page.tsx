import Link from 'next/link';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { CourseCard } from '../components/ui/course-card';
import { SectionHeading } from '../components/ui/section-heading';
import { certifications, courses, profile, projects } from '../lib/data';

export default function HomePage() {
  const hasEmail = Boolean(profile.email);
  const hasGithub = Boolean(profile.github);
  const developmentProjects = projects.filter((project) => project.category === 'development');
  const testingProjects = projects.filter((project) => project.category === 'testing');

  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-20 border-b border-[var(--line)] bg-[rgba(247,250,252,0.72)] backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1100px] items-center justify-between px-6 lg:px-12">
          <div>
            <p className="font-display text-[15px] font-semibold uppercase tracking-[0.08em] text-[var(--text)]">{profile.name}</p>
            <p className="font-display mt-px text-[11px] uppercase tracking-[0.15em] text-[var(--accent)]">Quality Engineering</p>
          </div>
          <nav className="hidden gap-9 md:flex">
            <a className="font-display text-[13px] font-medium tracking-[0.05em] text-[var(--muted)] hover:text-[var(--text)]" href="#projects">Projects</a>
            <a className="font-display text-[13px] font-medium tracking-[0.05em] text-[var(--muted)] hover:text-[var(--text)]" href="#certifications">Certifications</a>
            <a className="font-display text-[13px] font-medium tracking-[0.05em] text-[var(--muted)] hover:text-[var(--text)]" href="#courses">Courses</a>
            <a className="font-display text-[13px] font-medium tracking-[0.05em] text-[var(--muted)] hover:text-[var(--text)]" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-[1100px] gap-10 px-6 py-14 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start lg:px-12 lg:py-[52px]">
        <div>
          <h1 className="font-display text-[clamp(38px,4.5vw,56px)] font-bold leading-none tracking-[-0.02em] text-[var(--text)]">
            Sindhuja Martha
          </h1>
          <p className="font-display mb-[14px] mt-[10px] flex items-center text-[15px] text-[var(--muted)]">
            {profile.role}
            <span className="ml-[6px] inline-block h-[1.1em] w-[2px] animate-pulse bg-[var(--accent)] align-middle" />
          </p>
          <p className="mb-[22px] max-w-[620px] text-[14px] leading-[1.65] text-[var(--muted)]">
            Expert in manual and automation testing for web and mobile applications. Skilled in JavaScript, TypeScript, Playwright, Selenium, and Cypress, with hands-on work in API, functional, regression, smoke, exploratory, and performance testing, plus AI-assisted web development.
          </p>
          <div className="flex flex-wrap gap-[14px]">
            <Button href="#projects">View Projects</Button>
            <Button variant="secondary" href="#contact">
              Contact
            </Button>
          </div>
        </div>

        <aside className="surface-card-strong rounded-[14px] px-5 py-[14px] lg:mt-1">
          <p className="font-display mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            Quick Overview
          </p>
          <div>
            <div className="flex items-baseline justify-between border-b border-[var(--line)] py-[5px]">
              <p className="font-display text-[28px] font-bold leading-none text-[var(--text)]">{projects.length}</p>
              <p className="text-[13px] tracking-[0.03em] text-[var(--muted)]">Projects</p>
            </div>
            <div className="flex items-baseline justify-between border-b border-[var(--line)] py-[5px]">
              <p className="font-display text-[28px] font-bold leading-none text-[var(--text)]">{certifications.length}</p>
              <p className="text-[13px] tracking-[0.03em] text-[var(--muted)]">Certifications</p>
            </div>
            <div className="flex items-baseline justify-between py-[5px]">
              <p className="font-display text-[28px] font-bold leading-none text-[var(--text)]">{courses.length}</p>
              <p className="text-[13px] tracking-[0.03em] text-[var(--muted)]">Courses</p>
            </div>
          </div>
          <div className="mt-2 border-t border-[var(--line)] pt-[10px]">
            <p className="font-display mb-[5px] text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Focus Areas</p>
            <p className="max-w-[320px] text-[13px] leading-[1.5] text-[var(--muted)]">
              Quality engineering, automation, and user-focused application development and testing.
            </p>
          </div>
        </aside>
      </section>

      <div className="mx-auto h-px max-w-[1100px] bg-[rgba(17,24,39,0.08)]" />

      <section id="projects" className="mx-auto max-w-[1100px] px-6 py-16 lg:px-12">
        <div className="mb-8">
          <div className="mb-3 flex items-center justify-between gap-4">
            <span className="font-display text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Work</span>
            <span className="text-xs italic text-[var(--muted)]">Project links open when available.</span>
          </div>
          <SectionHeading
            title="Projects"
            description="Projects are grouped into development work and testing work to show both product building and quality engineering experience."
          />
        </div>
        <div className="space-y-12">
          <div>
            <div className="mb-5">
              <h3 className="font-display text-[24px] font-bold tracking-[-0.02em] text-[var(--text)]">Development Projects</h3>
              <p className="mt-2 text-[14px] leading-[1.6] text-[var(--muted)]">Includes AI-assisted web development workflows used to speed up implementation and iteration.</p>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {developmentProjects.map((project) => (
                <Card
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  tech={project.tech}
                  highlight={project.keyHighlight}
                  href={project.href}
                  badge={project.badge}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-5">
              <h3 className="font-display text-[24px] font-bold tracking-[-0.02em] text-[var(--text)]">Testing Projects</h3>
              <p className="mt-2 text-[14px] leading-[1.6] text-[var(--muted)]">Automation and quality-focused projects built around browser testing, assertions, and reliable validation workflows.</p>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {testingProjects.map((project) => (
                <Card
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  tech={project.tech}
                  highlight={project.keyHighlight}
                  href={project.href}
                  badge={project.badge}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto h-px max-w-[1100px] bg-[rgba(17,24,39,0.08)]" />

      <section id="certifications" className="mx-auto max-w-[1100px] px-6 py-16 lg:px-12">
        <div className="mb-8">
          <SectionHeading
            title="Certifications"
            description="Credentials related to software development and applied technical skills."
            badge="Credentials"
          />
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {certifications.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="surface-card-strong block rounded-[14px] px-[22px] py-5 transition duration-200 hover:translate-y-[-3px] hover:shadow-[0_18px_34px_rgba(37,64,97,0.12)]"
            >
              <div className="mb-[2px] flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-[15px] font-bold tracking-[-0.01em] text-[var(--text)]">{item.title}</h3>
                  <p className="font-display mt-1 text-[11px] tracking-[0.04em] text-[var(--accent)]">{item.issuer}</p>
                </div>
                <span className="font-display rounded-[3px] bg-[var(--accent-soft)] px-2 py-[3px] text-[11px] font-semibold tracking-[0.06em] text-[var(--accent)]">
                  {item.date}
                </span>
              </div>
              <p className="mt-2 text-[13px] leading-[1.55] text-[var(--muted)]">{item.description}</p>
            </a>
          ))}
        </div>
      </section>

      <div className="mx-auto h-px max-w-[1100px] bg-[rgba(17,24,39,0.08)]" />

      <section id="courses" className="mx-auto max-w-[1100px] px-6 py-16 lg:px-12">
        <div className="mb-8">
          <SectionHeading
            title="Courses"
            description="Coursework completed to strengthen development skills and tools."
            badge="Learning"
          />
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              relatedProjects={projects.filter((project) => project.relatedCourseIds?.includes(course.id))}
            />
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-[1100px] px-6 pb-16 pt-4 lg:px-12">
        <div className="surface-card-strong grid gap-8 rounded-[16px] px-6 py-8 lg:grid-cols-2 lg:items-center lg:px-12">
          <div>
            <div className="font-display mb-[14px] inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--accent)] before:inline-block before:h-px before:w-[18px] before:bg-[var(--accent)] before:content-['']">
              Contact
            </div>
            <h2 className="font-display mb-[10px] text-[32px] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--text)]">Let&apos;s connect</h2>
            <p className="text-[13px] text-[var(--muted)]">Reach out for opportunities, collaboration, or hiring conversations.</p>
          </div>
          <div className="flex flex-col gap-[10px]">
            {hasEmail ? (
              <a href={`mailto:${profile.email}`} className="flex items-center gap-3 rounded-[10px] border border-[rgba(17,24,39,0.08)] bg-white/55 px-4 py-3 transition duration-200 hover:border-[rgba(37,99,235,0.2)] hover:bg-white/72">
                <span className="flex h-[30px] w-[30px] items-center justify-center rounded-[6px] bg-[var(--accent-soft)] text-[var(--accent)]">@</span>
                <span>
                  <span className="font-display block text-[11px] tracking-[0.05em] text-[var(--muted)]">EMAIL</span>
                  <span className="font-display text-[13px] font-medium text-[var(--text)]">{profile.email}</span>
                </span>
              </a>
            ) : (
              <div className="rounded-[10px] border border-[rgba(17,24,39,0.08)] bg-white/55 px-4 py-3 text-sm text-[var(--muted)]">
                Add your email address in <code>lib/data.ts</code>.
              </div>
            )}
            {hasGithub ? (
              <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-[10px] border border-[rgba(17,24,39,0.08)] bg-white/55 px-4 py-3 transition duration-200 hover:border-[rgba(37,99,235,0.2)] hover:bg-white/72">
                <span className="flex h-[30px] w-[30px] items-center justify-center rounded-[6px] bg-[var(--accent-soft)] text-[var(--accent)]">#</span>
                <span>
                  <span className="font-display block text-[11px] tracking-[0.05em] text-[var(--muted)]">GITHUB</span>
                  <span className="font-display text-[13px] font-medium text-[var(--text)]">{profile.github.replace(/^https?:\/\//, '')}</span>
                </span>
              </a>
            ) : (
              <div className="rounded-[10px] border border-[rgba(17,24,39,0.08)] bg-white/55 px-4 py-3 text-sm text-[var(--muted)]">
                Add your GitHub profile URL in <code>lib/data.ts</code>.
              </div>
            )}
            <Link href="#contact" className="flex items-center gap-3 rounded-[10px] border border-[rgba(17,24,39,0.08)] bg-white/55 px-4 py-3 transition duration-200 hover:border-[rgba(37,99,235,0.2)] hover:bg-white/72">
              <span className="flex h-[30px] w-[30px] items-center justify-center rounded-[6px] bg-[var(--accent-soft)] text-[var(--accent)]">R</span>
              <span>
                <span className="font-display block text-[11px] tracking-[0.05em] text-[var(--muted)]">RESUME</span>
                <span className="font-display text-[13px] font-medium text-[var(--text)]">Add your resume link here</span>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
