export interface SkillGroup {
  category: string;
  description: string;
  skills: { name: string; proficiency: string; focus: string }[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Frontend Engineering',
    description: 'Modern, accessible, sub-second web experiences with rock-solid type safety.',
    skills: [
      { name: 'React 19 & Next.js', proficiency: 'Advanced', focus: 'Server Components, Hooks, State Architecture' },
      { name: 'TypeScript', proficiency: 'Advanced', focus: 'Strict Typing, Generics, Zod Schema Sync' },
      { name: 'Tailwind CSS', proficiency: 'Advanced', focus: 'Design Systems, Fluid Typography, Tokens' },
      { name: 'Web Performance & CWV', proficiency: 'Expert', focus: 'LCP/CLS/INP tuning, code splitting, memoization' },
      { name: 'Accessibility (a11y)', proficiency: 'Proficient', focus: 'WCAG 2.2 AA compliance, ARIA, keyboard navigation' },
    ],
  },
  {
    category: 'Backend & System APIs',
    description: 'High-throughput server runtimes, clean RESTful contracts, and event streams.',
    skills: [
      { name: 'Node.js & Express', proficiency: 'Advanced', focus: 'Modular routers, middleware pipelines, error handling' },
      { name: 'REST & GraphQL APIs', proficiency: 'Advanced', focus: 'Contract-first design, pagination, OpenAPI 3.1' },
      { name: 'Authentication & Security', proficiency: 'Advanced', focus: 'JWT, OAuth 2.0, HTTP-only cookies, RBAC, CSRF' },
      { name: 'WebSockets & SSE', proficiency: 'Proficient', focus: 'Real-time telemetry, bi-directional event broadcasts' },
    ],
  },
  {
    category: 'Databases & Data Modeling',
    description: 'Scalable relational schemas, index optimization, and transaction safety.',
    skills: [
      { name: 'PostgreSQL', proficiency: 'Advanced', focus: 'Schema migrations, indexing, constraints, advisory locks' },
      { name: 'Redis', proficiency: 'Proficient', focus: 'In-memory caching, rate-limiting counters, pub/sub queues' },
      { name: 'Prisma & Drizzle ORM', proficiency: 'Proficient', focus: 'Type-safe queries, relational joins, seeding' },
    ],
  },
  {
    category: 'DevOps, Cloud & Infrastructure',
    description: 'Predictable containerized deployments, CI/CD automation, and monitoring.',
    skills: [
      { name: 'Docker & Containers', proficiency: 'Proficient', focus: 'Multi-stage builds, minimal images, compose' },
      { name: 'Cloud Platforms', proficiency: 'Proficient', focus: 'Cloud Run, Vercel, AWS, GCP, Fly.io' },
      { name: 'CI/CD & Testing', proficiency: 'Advanced', focus: 'GitHub Actions, automated linting, unit/integration suites' },
      { name: 'Observability & Logging', proficiency: 'Proficient', focus: 'Structured JSON logging, health probes, OpenTelemetry' },
    ],
  },
];
