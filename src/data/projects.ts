import { ProjectCaseStudy } from '../types';

export const PROJECTS: ProjectCaseStudy[] = [
  {
    slug: 'aether-observability',
    title: 'Aether Cloud Observability',
    headline: 'Real-time telemetry, distributed tracing, and service topology visualizer',
    description:
      'A multi-tenant cloud monitoring dashboard that aggregates metrics across microservices, visualizes real-time service dependency graphs, and flags latency anomalies under high load.',
    category: 'SaaS',
    kind: 'Personal',
    role: 'Lead Architect & Full-Stack Developer',
    timeline: '4 months',
    featured: true,
    coverImage: '/src/assets/images/project_saas_cloud_preview_1793173844008.jpg',
    thumbnail: '/src/assets/images/project_saas_cloud_preview_1793173844008.jpg',
    technologies: ['React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Redis', 'WebSockets'],
    metrics: [
      { label: 'Latency Map Refresh', value: '50ms' },
      { label: 'Event Throughput', value: '128k rps' },
      { label: 'P99 Query Response', value: '24ms' },
      { label: 'Test Coverage', value: '94%' },
    ],
    overview:
      'Engineered an end-to-end distributed observability platform designed to solve cross-service latency debugging for modern containerized architectures. The system ingests OpenTelemetry spans, stores aggregated metrics in PostgreSQL with timescale partitioning, and streams updates via high-efficiency WebSockets.',
    problem:
      'Developers troubleshooting distributed systems frequently suffer from siloed logs and disconnected APM tools that make diagnosing cascade failures slow and error-prone.',
    goals: [
      'Render live microservice topology graphs without UI frame drops.',
      'Maintain sub-100ms dashboard hydration under 100k+ historical metric events.',
      'Implement strict multi-tenant tenant isolation and RBAC security.',
    ],
    constraints: [
      'Low memory footprint in browser tab (<60MB heap allocation).',
      'Zero external proprietary APM dependencies; purely open architecture.',
    ],
    architecture:
      'Structured around a high-performance Express/Node stream gateway, partitioned relational data stores with connection pooling, and an event-driven frontend with debounced canvas visualization.',
    frontendImplementation:
      'Custom React rendering pipeline utilizing HTML5 Canvas for the dynamic node topology map, paired with lightweight SVG sparklines and virtualized tables for zero-jank scrolling.',
    backendImplementation:
      'Asynchronous ingestion pipelines with Redis buffers that decouple high-frequency span intake from database writes, ensuring zero loss of telemetry during traffic spikes.',
    databaseAndApi:
      'PostgreSQL schema optimized with composite indexes on service_id, timestamp, and trace_id, complemented by REST query endpoints and persistent WebSocket delta broadcasts.',
    securityAndAuth:
      'Stateless JWT session authentication with rotating refresh tokens, granular role-based access control (Admin, Viewer, Auditor), and payload sanitization via strict Zod schemas.',
    challengesAndSolutions: [
      {
        challenge: 'High DOM node count caused frame drops when visualizing 100+ interconnected services.',
        solution: 'Switched from SVG nodes to a hybrid Canvas/DOM overlay with viewport bounding box culling.',
      },
      {
        challenge: 'Database write saturation during simulated traffic spikes.',
        solution: 'Implemented time-windowed bulk inserts in Redis that batch 500 telemetry records per commit.',
      },
    ],
    outcomes: [
      'Achieved steady 60 FPS graph interactions even with 150+ interconnected nodes.',
      'Reduced average incident triage time by visualizing critical path latency in one glance.',
      'Verified zero memory leaks across 48-hour continuous stress testing.',
    ],
    liveUrl: 'https://github.com/muhammadazeem/aether-observability',
    repoUrl: 'https://github.com/muhammadazeem/aether-observability',
  },
  {
    slug: 'apiforge-runtime',
    title: 'APIForge Testing Runtime',
    headline: 'Developer playground with live schema validation and latency waterfall inspector',
    description:
      'A lightweight web-based API development workbench allowing engineering teams to test REST endpoints, validate JSON Schema contracts, and profile latency waterfalls.',
    category: 'Developer Tools',
    kind: 'Open Source',
    role: 'Creator & Core Maintainer',
    timeline: '3 months',
    featured: true,
    coverImage: '/src/assets/images/project_devtools_preview_1793173845342.jpg',
    thumbnail: '/src/assets/images/project_devtools_preview_1793173845342.jpg',
    technologies: ['TypeScript', 'React', 'Tailwind CSS', 'Zod', 'Express', 'HTTP/2 Client'],
    metrics: [
      { label: 'Bundle Footprint', value: '42KB gzip' },
      { label: 'Schema Validation', value: '< 2ms' },
      { label: 'Waterfall Precision', value: '0.1ms' },
      { label: 'GitHub Stars', value: '380+' },
    ],
    overview:
      'APIForge was created to address the bloat and privacy concerns of desktop API testing suites. It runs directly in the browser with an optional local proxy bridge, keeping sensitive payloads on the local machine while providing instantaneous feedback on response structure.',
    problem:
      'Modern teams frequently face regressions when backend API contracts drift from frontend TypeScript definitions, resulting in undetected runtime exceptions.',
    goals: [
      'Provide instant client-side JSON Schema & Zod type checking.',
      'Deliver millisecond-accurate timing breakdown (DNS, TCP, TLS, TTFB, Content Download).',
      'Enable portable workspace export and zero-cloud local execution.',
    ],
    constraints: [
      'Browser CORS limitations required an optional headless proxy utility for cross-origin targets.',
      'Must maintain instant keypress responsiveness in payload editors.',
    ],
    architecture:
      'Client-first execution pipeline with modular parsing engines, dynamic Monaco-inspired syntax highlighting, and an ephemeral local execution proxy.',
    frontendImplementation:
      'Built with functional React and pure CSS custom properties for instant dark/light theme switching, custom split-panes, and accessible keyboard shortcuts.',
    backendImplementation:
      'Minimal Node.js stream proxy utilizing native HTTP/2 client sessions with high-resolution process.hrtime() nanosecond latency instrumentation.',
    databaseAndApi:
      'IndexedDB browser storage for zero-leak local test suites, environments, and response history snapshots.',
    securityAndAuth:
      'Strict Content Security Policy (CSP), client-side AES encryption for stored authorization headers, and automated credential masking in logs.',
    challengesAndSolutions: [
      {
        challenge: 'Accurately measuring browser-level network timing despite browser sandbox restrictions.',
        solution: 'Integrated the Resource Timing API for supported endpoints and fallback proxy header profiling.',
      },
      {
        challenge: 'Handling massive 10MB+ JSON responses without browser tab lockup.',
        solution: 'Implemented lazy tree parsing and virtualized scrolling for recursive JSON inspectors.',
      },
    ],
    outcomes: [
      'Adopted by engineering teams for rapid internal API prototyping.',
      'Saved developer hours by catching schema type mismatches before production deployment.',
      'Achieved a 99 Lighthouse performance score and sub-100ms first input delay.',
    ],
    liveUrl: 'https://github.com/muhammadazeem/apiforge-runtime',
    repoUrl: 'https://github.com/muhammadazeem/apiforge-runtime',
  },
  {
    slug: 'quantum-headless-commerce',
    title: 'Quantum Headless Commerce',
    headline: 'Sub-second digital storefront with atomic design system and live cart matrix',
    description:
      'An ultra-fast, headless e-commerce application featuring instant search filtering, fluid cart drawers, and an administrative inventory control center.',
    category: 'Full-Stack Applications',
    kind: 'Prototype',
    role: 'Full-Stack Product Engineer',
    timeline: '2.5 months',
    featured: true,
    coverImage: '/src/assets/images/project_ecommerce_preview_1793173845082.jpg',
    thumbnail: '/src/assets/images/project_ecommerce_preview_1793173845082.jpg',
    technologies: ['React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Stripe API'],
    metrics: [
      { label: 'Core Web Vitals LCP', value: '0.8s' },
      { label: 'Cart Interaction Time', value: '< 40ms' },
      { label: 'Search Index Speed', value: '12ms' },
      { label: 'Accessibility Score', value: '100/100' },
    ],
    overview:
      'Demonstrates high-conversion e-commerce architecture where page transitions are instantaneous and inventory management is synchronized across distributed web storefronts.',
    problem:
      'Traditional monolithic e-commerce platforms suffer from bloated script payloads, slow mobile checkouts, and cumbersome inventory management interfaces.',
    goals: [
      'Eliminate layout shifts (CLS 0.00) during variant selection and image loading.',
      'Provide instant optimistic cart updates with rollback resilience.',
      'Design an accessible, keyboard-navigable product configuration matrix.',
    ],
    constraints: [
      'Strict adherence to WCAG 2.2 AA contrast standards in both dark and light modes.',
      'Zero third-party tracking scripts slowing down checkout.',
    ],
    architecture:
      'Clean separation between headless commerce API services, edge static caching, and reactive client components.',
    frontendImplementation:
      'Modern component architecture with micro-interactions, optimistic state transitions, and responsive picture tags with prioritized loading.',
    backendImplementation:
      'Express middleware orchestrating inventory transactions with row-level database locking to prevent accidental overselling.',
    databaseAndApi:
      'Relational PostgreSQL schema with normalized products, variants, orders, and customer accounts with full-text search vectors.',
    securityAndAuth:
      'PCI-compliant Stripe tokenization flow, HTTPS-only cookies, and encrypted checkout session state.',
    challengesAndSolutions: [
      {
        challenge: 'Maintaining inventory consistency under simulated flash sale concurrency.',
        solution: 'Implemented atomic SQL decrement operations with Postgres advisory locks during order placement.',
      },
      {
        challenge: 'Preventing cumulative layout shift on high-resolution product imagery.',
        solution: 'Used CSS aspect-ratio placeholders and responsive srcset images with blur-up backdrops.',
      },
    ],
    outcomes: [
      'Sub-second Largest Contentful Paint on standard 4G mobile connections.',
      'Completely fluid cart drawer experience with zero page refreshes.',
      'Tested end-to-end checkout with automated Playwright integration tests.',
    ],
    liveUrl: 'https://github.com/muhammadazeem/quantum-commerce',
    repoUrl: 'https://github.com/muhammadazeem/quantum-commerce',
  },
  {
    slug: 'pulse-distributed-cache',
    title: 'Pulse Distributed KV Engine',
    headline: 'High-throughput edge key-value cache and lightweight pub/sub stream engine',
    description:
      'An in-memory caching engine designed for edge environments, featuring LRU eviction policies, append-only persistence logs, and WebSocket live event delivery.',
    category: 'APIs',
    kind: 'Personal',
    role: 'Systems & Backend Engineer',
    timeline: '2 months',
    featured: false,
    coverImage: '/src/assets/images/hero_developer_workspace_1793173842769.jpg',
    thumbnail: '/src/assets/images/hero_developer_workspace_1793173842769.jpg',
    technologies: ['TypeScript', 'Node.js', 'Express', 'TCP Sockets', 'Zod', 'Docker'],
    metrics: [
      { label: 'Throughput', value: '45k req/s' },
      { label: 'Avg Read Latency', value: '0.4ms' },
      { label: 'Memory Efficiency', value: '88%' },
      { label: 'Unit Test Coverage', value: '98%' },
    ],
    overview:
      'Engineered to explore distributed data storage fundamentals, Pulse delivers a fast, embedded key-value server with predictable memory bounds and atomic transaction primitives.',
    problem:
      'Standard cloud managed caches often carry excessive latency overhead and complex infrastructure orchestration for lightweight microservice workloads.',
    goals: [
      'Implement thread-safe LRU eviction and memory bounds enforcement.',
      'Build a simple text-based wire protocol alongside standard HTTP REST endpoints.',
      'Ensure zero data corruption across abrupt process shutdowns using write-ahead logging.',
    ],
    constraints: [
      'Bounded memory footprint with zero spontaneous GC pauses.',
      'Strict type safety throughout serialization and deserialization cycles.',
    ],
    architecture:
      'Modular kernel architecture: Storage Engine -> Eviction Manager -> WAL Writer -> Transport Adapters (HTTP & TCP).',
    frontendImplementation:
      'Companion management console showing real-time memory distribution, key expiration timeline, and hit/miss ratios.',
    backendImplementation:
      'Custom Node.js buffers and Doubly Linked List hash map structures for O(1) reads, writes, and evictions.',
    databaseAndApi:
      'Append-only log (AOL) on disk paired with RESTful and raw socket management interfaces.',
    securityAndAuth:
      'Pre-shared bearer token authorization, IP range whitelisting, and rate-limiting ring buffers.',
    challengesAndSolutions: [
      {
        challenge: 'Preventing disk I/O bottlenecks from degrading in-memory read speeds.',
        solution: 'Decoupled append-only logging to an asynchronous background flush queue with configurable sync intervals.',
      },
      {
        challenge: 'Memory fragmentation under rapid key churn.',
        solution: 'Implemented slab allocation pooling for fixed-size string and payload buffers.',
      },
    ],
    outcomes: [
      'Delivered reliable sub-millisecond lookup performance in local and containerized benchmarks.',
      'Rock-solid stability through chaos engineering tests involving simulated power cuts.',
      'Documented clear OpenAPI 3.1 specifications and client library SDKs.',
    ],
    liveUrl: 'https://github.com/muhammadazeem/pulse-kv-engine',
    repoUrl: 'https://github.com/muhammadazeem/pulse-kv-engine',
  },
];
