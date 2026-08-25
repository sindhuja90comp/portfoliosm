export interface Project {
  id: string;
  category: 'development' | 'testing';
  title: string;
  description: string;
  tech: string[];
  keyHighlight: string;
  badge: string;
  href?: string;
  relatedCourseIds?: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
  href: string;
}

export interface Course {
  id: string;
  title: string;
  provider: string;
  date: string;
  description: string;
  href: string;
}

export const profile = {
  name: 'Sindhuja Martha',
  role: 'Software Development Engineer in Test',
  email: '',
  github: 'https://github.com/sindhuja90comp',
};

export const projects: Project[] = [
  {
    id: 'voice-ai-logger',
    category: 'development',
    title: 'Samma',
    description: 'An AI app that logs work using voice recognition.',
    tech: ['Next.js', 'React', 'AI', 'Speech Recognition'],
    keyHighlight: 'Combines AI and voice recognition to reduce friction for users who need to capture work logs.',
    badge: 'Voice-operated AI app to log work',
  },
  {
    id: 'choretracker',
    category: 'development',
    title: 'ChoreTracker',
    description: 'A household task manager focused on reminders, progress visibility, and simple accountability.',
    tech: ['TypeScript', 'Tailwind CSS', 'Next.js'],
    keyHighlight: 'Designed to keep recurring work easy to manage without clutter.',
    badge: 'Productivity',
  },
  {
    id: 'lingoraft',
    category: 'development',
    title: 'LingoRaft',
    description: 'A browser-based English lesson chatbot with beginner-friendly chat flows, structured typing lessons, and local progress tracking.',
    tech: ['JavaScript', 'ES Modules', 'localStorage', 'DOM UI'],
    keyHighlight: 'Built with a modular lesson engine, button-first UX, and refresh-safe lesson persistence.',
    badge: 'Education',
    href: 'https://sindhuja90comp.github.io/LingoRaft/',
  },
  {
    id: 'valentine-dash',
    category: 'development',
    title: 'Valentine Dash',
    description: 'A Valentine-themed browser game where players collect hearts, avoid moving thorns, and finish before the timer runs out.',
    tech: ['HTML5 Canvas', 'CSS3', 'JavaScript', 'Web Audio API'],
    keyHighlight: 'Features collision detection, responsive controls, sound effects, and saved best-time tracking.',
    badge: 'Interactive',
    href: 'https://sindhuja90comp.github.io/Valentine_Dash/',
  },
  {
    id: 'blackjack-game',
    category: 'development',
    title: 'Blackjack Game',
    description: 'A simple browser-based Blackjack game built with HTML, CSS, and JavaScript.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    keyHighlight: 'Includes game start, card draw actions, and live tracking for cards, sum, and player chips.',
    badge: 'JavaScript game',
    href: 'https://sindhuja90comp.github.io/JS2026ScrimbaBlackJack/',
    relatedCourseIds: ['javascript'],
  },
  {
    id: 'cypress2026',
    category: 'testing',
    title: 'Cypress Automation Project',
    description: 'A Cypress-based automation project focused on end-to-end browser testing and test flow validation.',
    tech: ['Cypress', 'JavaScript', 'Test Automation'],
    keyHighlight: 'Demonstrates practical Cypress test structure, assertions, and automated UI testing workflows.',
    badge: 'Testing',
    href: 'https://github.com/sindhuja90comp/cypress2026',
    relatedCourseIds: ['cypress'],
  },
];

export const certifications: Certification[] = [
  {
    title: 'The Complete 2025 Software Testing Bootcamp',
    issuer: 'Udemy',
    date: '2025',
    description: 'Covered manual testing techniques, Agile workflows, Jira and Zephyr Scale, API testing with Postman, automation basics with Selenium and Playwright, and performance testing fundamentals.',
    href: 'https://www.udemy.com/certificate/UC-571d5195-0f04-44b1-bc70-54afaec1e5a6/',
  },
  {
    title: 'AI & Machine Learning Fundamentals',
    issuer: 'Industry Certificate',
    date: '2024',
    description: 'Covers the fundamentals of applied AI concepts used in intelligent product development.',
    href: 'https://example.com/ai-machine-learning-fundamentals',
  },
];

export const courses: Course[] = [
  {
    id: 'javascript',
    title: 'JavaScript',
    provider: 'Freecodecamp',
    date: 'April 2026',
    description: 'Built strong JavaScript fundamentals through interactive challenges, DOM work, functions, loops, events, and hands-on browser projects.',
    href: 'https://example.com/javascript-course',
  },
  {
    id: 'cypress',
    title: 'Cypress',
    provider: 'Freecodecamp',
    date: 'April 2026',
    description: 'Covered Cypress setup, commands, assertions, form and multi-page testing, intercepts, component tests, and testing best practices.',
    href: 'https://example.com/cypress-course',
  },
  {
    id: 'typescript',
    title: 'TypeScript',
    provider: 'scrimba.com',
    date: 'May 2026',
    description: 'Covered TypeScript fundamentals, generics, utility types, and practical use in React and Express applications.',
    href: 'https://example.com/typescript-course',
  },
  {
    id: 'playwright',
    title: 'Playwright',
    provider: 'Freecodecamp',
    date: 'June 2026',
    description: 'Covered Playwright setup, end-to-end automation, API testing, debugging, mocking, accessibility testing, and CI/CD best practices.',
    href: 'https://example.com/playwright-course',
  },
  {
    id: 'python',
    title: 'Python Introductory Course',
    provider: 'scrimba.com',
    date: 'May 2025',
    description: 'A beginner Python course covering core concepts through short tutorials and interactive coding challenges.',
    href: 'https://example.com/python-intro-course',
  },
];
