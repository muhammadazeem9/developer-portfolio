import { ServiceItem, FaqItem } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'fullstack-web-apps',
    title: 'Full-Stack Web Application Development',
    shortDescription:
      'Custom web applications built from scratch with clean TypeScript, robust backends, and responsive user interfaces.',
    idealFor:
      'Startups, businesses, and product teams launching new platforms or replacing legacy systems with modern architectures.',
    problemSolved:
      'Bridges the gap between disjointed frontends and unstable backends by delivering cohesive, maintainable, end-to-end web software.',
    deliverables: [
      'Modular React / Next.js / TypeScript frontend with Tailwind CSS',
      'Scalable Express / Node.js or serverless backend architecture',
      'Database schema design (PostgreSQL) with migrations & connection pooling',
      'Secure authentication, session handling, and role-based permissions',
      'Production deployment pipeline with automated build checks and monitoring',
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Docker', 'REST / GraphQL'],
    workflow: [
      'Requirements breakdown and domain modeling',
      'API contract design and schema definition',
      'Iterative milestone builds with bi-weekly preview deployments',
      'Integration testing, performance tuning, and launch handover',
    ],
    pricingGuidance: 'Custom scope · Typical project spans 4–10 weeks based on feature depth and integrations',
    gettingStartedRequirements: [
      'Product requirements document (PRD) or clear user story list',
      'Design wireframes or Figma mockups (if available, or we can design together)',
      'Third-party service requirements (payment, email, auth providers)',
    ],
  },
  {
    id: 'saas-mvp-development',
    title: 'SaaS MVP Development',
    shortDescription:
      'Fast-track your SaaS product from concept to working software ready for real users and early revenue in weeks.',
    idealFor:
      'Founders seeking a fast, dependable go-to-market build that can scale without requiring an immediate complete rewrite.',
    problemSolved:
      'Prevents founders from wasting months on over-engineered infrastructure or fragile no-code solutions that hit scaling dead-ends.',
    deliverables: [
      'Complete subscription billing (Stripe Checkout / Customer Portal)',
      'Multi-tenant database schema with tenant isolation',
      'User onboarding flow, auth (OAuth / Email OTP), and password reset',
      'Core product features built to solve the primary value proposition',
      'Admin telemetry metrics dashboard and user management',
    ],
    techStack: ['Next.js / React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    workflow: [
      'Scope triage: ruthlessly identify must-have MVP features',
      'Database and subscription architecture setup',
      'Core user experience & billing implementation',
      'End-to-end sandbox testing and live production deployment',
    ],
    pricingGuidance: 'Fixed milestone scope · Typically 4–8 weeks from kickoff to customer-ready launch',
    gettingStartedRequirements: [
      'Core problem statement and target customer profile',
      'Key workflow users need to accomplish in version 1',
      'Stripe account & domain credentials ready for deployment',
    ],
  },
  {
    id: 'business-websites-landing',
    title: 'Business Websites & High-Conversion Landing Pages',
    shortDescription:
      'High-performance, beautifully crafted web pages engineered for sub-second load times and high visitor conversion.',
    idealFor:
      'B2B software companies, creative agencies, and growing brands that need a polished online presence that drives sales.',
    problemSolved:
      'Fixes slow, generic template sites with poor Core Web Vitals, confusing navigation, and low inquiry conversion rates.',
    deliverables: [
      'Custom responsive design adhering to WCAG 2.2 AA accessibility',
      'Sub-second Largest Contentful Paint (LCP < 1.2s) optimization',
      'Interactive product demonstrations, calculators, or pricing selectors',
      'SEO metadata architecture, OpenGraph cards, and Schema.org markup',
      'Spam-protected contact inquiry forms with instant notifications',
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite / Next.js', 'SEO JSON-LD'],
    workflow: [
      'Information architecture and conversion hierarchy audit',
      'High-fidelity responsive UI implementation with fluid typography',
      'Performance audit and Core Web Vitals optimization',
      'Final domain routing, DNS configuration, and launch',
    ],
    pricingGuidance: 'Project-based · Typically 2–4 weeks depending on page count and custom interactivity',
    gettingStartedRequirements: [
      'Brand assets (logo, brand colors, typography preferences)',
      'Core copy and product photography / screenshots',
      'Target audience goals and primary call-to-action objectives',
    ],
  },
  {
    id: 'admin-dashboards-internal-tools',
    title: 'Admin Dashboards & Internal Operations Tools',
    shortDescription:
      'Custom back-office control panels, data tables, and internal tooling that streamline your team’s daily operations.',
    idealFor:
      'Growing companies whose internal workflows have outgrown messy spreadsheets and manual database queries.',
    problemSolved:
      'Eliminates human error and operational bottlenecks by giving your support, finance, and operations teams tailored interfaces.',
    deliverables: [
      'Advanced data tables with server-side sorting, filtering, and CSV export',
      'Role-based permission gates (Super Admin, Manager, Operator, Viewer)',
      'Audit log tracking for sensitive data mutations',
      'Batch action tools and status transition workflows',
      'Real-time operational charts and KPI metric cards',
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'TanStack Table'],
    workflow: [
      'Review existing spreadsheets and identify manual bottlenecks',
      'Model relational operations and security permission tiers',
      'Build responsive, high-density desktop dashboards with keyboard shortcuts',
      'Team testing, workflow validation, and deployment',
    ],
    pricingGuidance: 'Milestone-based · Typically 3–6 weeks depending on data complexity and user roles',
    gettingStartedRequirements: [
      'Sample data export or description of current internal workflow',
      'List of team roles and what actions each role should be allowed to perform',
      'Target database or API connection details',
    ],
  },
  {
    id: 'api-development-integrations',
    title: 'API Development & Third-Party Integrations',
    shortDescription:
      'Resilient REST and GraphQL APIs, webhooks, and third-party integrations with clean documentation and type safety.',
    idealFor:
      'Teams connecting disjointed systems, building public developer APIs, or automating data sync between platforms.',
    problemSolved:
      'Solves unreliable webhook handling, brittle integration code, and undocumented endpoints that break unexpectedly.',
    deliverables: [
      'Clean Express / Node.js or serverless REST API endpoints with Zod validation',
      'Third-party integrations (Stripe, HubSpot, SendGrid, Twilio, Google APIs)',
      'Robust webhook ingestion with HMAC signature verification and idempotency',
      'OpenAPI 3.1 / Swagger documentation and TypeScript SDK types',
      'Automated rate-limiting, CORS configuration, and security headers',
    ],
    techStack: ['Node.js', 'Express', 'TypeScript', 'Zod', 'PostgreSQL', 'Redis', 'OpenAPI'],
    workflow: [
      'Endpoint design and payload schema contracts',
      'Core route implementation with error handling middleware',
      'Webhook idempotency and replay testing',
      'Documentation generation and client integration verification',
    ],
    pricingGuidance: 'Scoped deliverables · Typically 2–5 weeks depending on integration endpoints',
    gettingStartedRequirements: [
      'List of third-party platforms to integrate and API access credentials',
      'Data mapping specification (source fields to destination fields)',
      'Estimated traffic volume and latency requirements',
    ],
  },
  {
    id: 'performance-core-web-vitals',
    title: 'Website Performance & Core Web Vitals Optimization',
    shortDescription:
      'Deep performance profiling and optimization to turn sluggish web apps into blazing-fast experiences.',
    idealFor:
      'Businesses experiencing high bounce rates, low SEO rankings, or slow mobile experiences due to script bloat.',
    problemSolved:
      'Pinpoints and eliminates render-blocking scripts, unoptimized assets, memory leaks, and excessive re-renders.',
    deliverables: [
      'Detailed performance audit report with before-and-after benchmarks',
      'Bundle size reduction via code splitting and tree-shaking',
      'Core Web Vitals remediation (LCP < 2.0s, CLS < 0.05, INP < 150ms)',
      'Image optimization pipeline (modern WebP/AVIF formats and responsive srcsets)',
      'Client-side state refactoring to eliminate redundant component re-renders',
    ],
    techStack: ['Chrome DevTools', 'Lighthouse', 'Vite / Webpack', 'React Profiler', 'Tailwind CSS'],
    workflow: [
      'Baseline profiling and network waterfall analysis',
      'Identification of heaviest dependencies and render bottlenecks',
      'Targeted code refactoring and asset optimization',
      'Comparative verification on throttled mobile network profiles',
    ],
    pricingGuidance: 'Fixed audit + sprint package · Typically 1–2 weeks of intensive profiling and remediation',
    gettingStartedRequirements: [
      'URL of the live website or repository access for local profiling',
      'Current Google Search Console or Analytics speed reports (if available)',
      'Target devices or geographies with the highest traffic',
    ],
  },
  {
    id: 'maintenance-feature-development',
    title: 'Ongoing Maintenance & Feature Development',
    shortDescription:
      'Dedicated engineering retainers to keep your application secure, up-to-date, and continuously shipping new features.',
    idealFor:
      'Founders and businesses needing an experienced full-stack developer on call without the overhead of a full-time hire.',
    problemSolved:
      'Removes the anxiety of neglected dependencies, critical security vulnerabilities, and backlogged feature requests.',
    deliverables: [
      'Monthly dependency updates and security patch testing',
      'Continuous feature backlog implementation and bug fixes',
      'Database index maintenance and performance health checks',
      'Priority bug triage and incident resolution SLA',
      'Monthly engineering review and architecture recommendations',
    ],
    techStack: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker', 'Git'],
    workflow: [
      'Initial codebase audit and CI/CD pipeline verification',
      'Shared sprint board (Linear / GitHub Issues) for task prioritization',
      'Bi-weekly feature releases with code review and staging verification',
      'Transparent communication via Slack or email',
    ],
    pricingGuidance: 'Monthly retainer · Tailored hours per month based on your release cadence',
    gettingStartedRequirements: [
      'Access to code repository and staging/production environments',
      'List of immediate bugs or feature requests',
      'Preferred collaboration channels (Slack, Linear, GitHub)',
    ],
  },
];

export const ENGAGEMENT_PROCESS = [
  {
    step: '01',
    title: 'Discovery & Assessment',
    description:
      'We discuss your product vision, target audience, core business requirements, and technical constraints to establish a clear foundation.',
  },
  {
    step: '02',
    title: 'Scope & Architecture',
    description:
      'I outline the recommended technology stack, database schema, API contracts, milestones, and realistic timelines.',
  },
  {
    step: '03',
    title: 'Proposal & Agreement',
    description:
      'You receive a clear, milestone-based proposal with transparent deliverables, pricing, and communication cadence before work begins.',
  },
  {
    step: '04',
    title: 'Iterative Development',
    description:
      'I build the product in modular sprints with frequent staging previews so you can test features and provide feedback as we build.',
  },
  {
    step: '05',
    title: 'Testing & Polish',
    description:
      'Rigorous cross-browser testing, mobile responsiveness checks, performance audits, security validation, and accessibility compliance.',
  },
  {
    step: '06',
    title: 'Launch & Handover',
    description:
      'Production deployment, DNS cutover, environment setup, and clean code documentation handover with ongoing post-launch support.',
  },
];

export const FAQS: FaqItem[] = [
  {
    question: 'How do you handle project timelines and deadlines?',
    answer:
      'Every project begins with a realistic timeline broken into 1-to-2-week milestones. I do not overpromise unachievable dates. You receive regular progress updates, and if unforeseen technical complexities arise, they are communicated immediately with practical solutions.',
  },
  {
    question: 'What is your communication cadence during an engagement?',
    answer:
      'Clear, asynchronous-first communication is my standard. I provide written weekly summaries, staging preview links for every milestone, and quick check-in calls when needed. I am available across major time zones via Slack or email.',
  },
  {
    question: 'Who owns the code and intellectual property?',
    answer:
      'You own 100% of the code, intellectual property, and design assets upon milestone completion. All repositories, database schemas, and documentation are transferred directly to your team.',
  },
  {
    question: 'How do we handle scope changes after the project starts?',
    answer:
      'Scope adjustments are natural as products evolve. If you want to add or modify features during development, we evaluate the impact on timeline and budget together. Small adjustments are accommodated, while larger additions are scoped as dedicated follow-on milestones.',
  },
  {
    question: 'What happens after the project launches?',
    answer:
      'All projects include a complimentary 14-day warranty period for bug fixes and launch stabilization. After that, you can transition to an ongoing monthly maintenance retainer or have your team take over the well-documented codebase.',
  },
  {
    question: 'Can you work with our existing codebase or team?',
    answer:
      'Yes. I routinely collaborate with existing engineering teams, contribute to established Git workflows, conduct code reviews, and help refactor legacy modules without disrupting live users.',
  },
];
