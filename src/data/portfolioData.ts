export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'commercial' | 'saas-apps' | 'mobile-ai' | 'landing-pages';
  categoryLabel: string;
  year: string;
  client: string;
  role: string;
  image: string;
  summary: string;
  challenge: string;
  solution: string;
  impact: string;
  deliverables: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  url: string;
  role: string;
  period: string;
  location: string;
  points: string[];
  skills: string[];
}

export const VISHAN_DATA = {
  profile: {
    name: "Vishan Dey",
    title: "Full Stack Developer & Founder of WyVE MEDIA",
    location: "Delhi, India | Remote Worldwide",
    email: "vishan@wyvemedia.com",
    phone: "+91 8777429675",
    whatsappUrl: "https://wa.me/918777429675",
    summary: "Full Stack Developer and systems engineer with deep expertise across modern TypeScript, Rust/Tauri, Next.js, Astro, Cloudflare edge infrastructure, and AI-native developer tooling. Creator of BhaiCode, Tomorrowly, Admium, and DrMeets. Founder at WyVE MEDIA engineering high-converting client platforms, sub-second architectures, and resilient production systems.",
    agency: "WyVE MEDIA",
    agencyUrl: "https://wyvemedia.com",
    githubUrl: "https://github.com/warhammered",
    linkedinUrl: "https://www.linkedin.com/in/vishandey",
    resumeUrl: "/vishan-dey-resume.pdf",
    availability: "Available for Full-Stack & Engineering Commissions"
  },

  skills: {
    frontend: ["React.js", "Next.js 15/16", "Astro", "Tailwind CSS", "TypeScript", "HTML5/CSS3", "WebAssembly", "Monaco Editor AST", "Zustand"],
    backend: ["Node.js", "Hono", "Express.js", "Cloudflare Workers", "Cloudflare AI Gateway", "WebSockets / Socket.io", "REST APIs", "Redis Pub/Sub"],
    database: ["PostgreSQL", "Supabase", "Neon Serverless Postgres", "Prisma ORM", "Drizzle ORM", "Cloudflare D1 / KV / R2"],
    systemsDesktop: ["Tauri v2", "Rust", "ADB Protocol Bridge", "Docker", "Git", "Linux Shell"],
    marketingAnalytics: ["SEO Architecture", "Google Analytics (GA4)", "Google Ads", "PostHog", "Sentry", "Core Web Vitals 100/100"],
    designMedia: ["Figma", "Adobe Photoshop", "Premiere Pro", "Canvas 2D / DSP", "Motion / Framer Motion", "UI/UX Systems"]
  },

  experience: [
    {
      id: "bhaicode-exp",
      company: "BhaiCode Project",
      url: "https://bhaico.de",
      role: "Creator & Lead Developer",
      period: "2025 – Present",
      location: "Open Source / Delhi, IN",
      points: [
        "AgentOS & Dynamic Model Router: Architected @bhaicode/router connecting Active Gemini 3 models via Cloudflare AI Gateway, typesafe/jev-router System One decision engine, and Fast/Heavy Gear execution pipelines.",
        "AST Compiler & WebAssembly VM: Designed custom lexer, recursive-descent parser, and AST evaluator for Hinglish programming syntax, achieving >1M ops/sec in-browser throughput.",
        "Interactive Desktop & Web IDE: Built full-featured Tauri v2 + React IDE with Monaco Editor AST inspector, REPL terminal, and instant *.bhaico.de custom subdomain deployment.",
        "Community & Ecosystem: Grew an active community of developers and learners with interactive sandboxes and zero-latency execution."
      ],
      skills: ["AgentOS", "Cloudflare AI Gateway", "Tauri v2", "Rust", "WebAssembly", "AST Compiler", "TypeScript", "Monaco Editor"]
    },
    {
      id: "wyve",
      company: "WyVE MEDIA",
      url: "https://wyvemedia.com",
      role: "Founder & Full Stack Technical Lead",
      period: "2025 – Present",
      location: "Delhi, IN | Remote Worldwide",
      points: [
        "Agency Platform: Built the official WyVE MEDIA platform with Astro 7, React 19, and Cloudflare Pages edge delivery, delivering 100/100 Lighthouse performance and sub-0.8s load times.",
        "Client Systems Delivery: Directed end-to-end full-stack engineering for enterprise clients including Unitherm Heating, Shaniya Cables, Express Wagon, VIP Maids, and Cears.",
        "Growth & Conversion Architecture: Built conversion funnels, custom WhatsApp lead pipelines, and programmatic SEO architectures generating high-intent client inquiries.",
        "Edge Infrastructure: Standardized all client deployments on Cloudflare Workers, Pages, and R2 object storage with zero cold starts."
      ],
      skills: ["Astro", "React 19", "Cloudflare Pages/Workers", "TypeScript", "Tailwind CSS", "SEO Architecture", "PostHog"]
    },
    {
      id: "drmeets-exp",
      company: "DrMeets Health",
      url: "https://drmeets.in",
      role: "Lead Full Stack Engineer",
      period: "2025 – 2026",
      location: "Remote",
      points: [
        "Healthcare Marketplace: Engineered end-to-end consultation platform connecting Medical Representatives (MRs) with Doctors for scheduled, paid video appointments.",
        "7 Portals & Role Architecture: Implemented multi-tenant RBAC across 6 user roles with dedicated portals for MRs, Doctors, Admins, and Onboarding Agents.",
        "WebRTC Video & Mutex Booking: Built WebRTC encrypted video consultation rooms with Redis mutex slot locking and automated payout escrow workflows.",
        "REST API & Database: Designed high-throughput REST API on Node.js/PostgreSQL with Prisma ORM and automated WhatsApp appointment reminders."
      ],
      skills: ["Next.js 15", "Node.js", "WebRTC", "PostgreSQL", "Prisma", "Redis", "Tailwind CSS"]
    },
    {
      id: "skillo-exp",
      company: "Skillo Learning",
      url: "https://skillo.co.in",
      role: "Full Stack Lead",
      period: "2025",
      location: "Remote",
      points: [
        "Multi-Tenant Marketplace: Built SaaS recruitment and job-matching platform connecting job seekers, educational institutions, and corporate employers.",
        "AI Resume Parsing: Integrated Google AI SDK for automated resume data extraction, skill taxonomy matching, and ML candidate suitability scoring.",
        "Recruitment Workflow: Developed drag-and-drop hiring pipeline kanban with dnd-kit and automated interview invitation webhooks.",
        "Production Infrastructure: Deployed Next.js 15 and PostgreSQL architecture behind Docker Compose on production VPS."
      ],
      skills: ["Next.js 15", "React 19", "TypeScript", "PostgreSQL", "Prisma", "Google AI SDK", "Tailwind CSS", "Docker"]
    }
  ] as ExperienceItem[],

  projects: [
    {
      id: "bhaicode",
      title: "BHAICODE",
      subtitle: "Flagship AI-native Developer Tool, AgentOS & Hinglish Language IDE",
      category: "saas-apps",
      categoryLabel: "AgentOS & Compiler IDE",
      year: "2026",
      client: "BhaiCode Community & Open Source",
      role: "Creator & Lead Developer",
      image: "/images/bhaicode-landing.png",
      summary: "Engineered BhaiCode, an AI-native Developer Tool and AgentOS featuring a dynamic model router (@bhaicode/router) with Active Gemini 3 models via Cloudflare AI Gateway, typesafe/jev-router System One decision engine, Fast Gear / Heavy Gear orchestration, Monaco Editor AST inspector, and a sandboxed WebAssembly execution VM.",
      challenge: "Min-maxing LLM token and inference cost per unit of code output while ensuring reliable, deterministic code execution without blind model escalation or prompt hallucination.",
      solution: "Built a native task intermediate representation (IR) layer, context planner, and multi-model router on Cloudflare Workers AI Gateway, coupled with an in-browser Monaco AST evaluator and WebAssembly JIT runtime.",
      impact: "Sub-second code generation cycles, >1,000,000 ops/sec VM throughput, free *.bhaico.de custom subdomain hosting, and adoption across thousands of developers.",
      deliverables: ["AgentOS Architecture", "Cloudflare AI Gateway Router", "Native Task IR Layer", "WebAssembly JIT VM", "Monaco Cloud IDE", "Subdomain Hosting Engine"],
      techStack: ["TypeScript", "Tauri v2", "Rust", "Cloudflare AI Gateway", "WebAssembly", "React", "Monaco Editor"],
      liveUrl: "https://bhaico.de"
    },
    {
      id: "tomorrowly",
      title: "TOMORROWLY",
      subtitle: "Sovereign local-first workspace for thought with plain markdown, P2P sync & native AI MCP",
      category: "saas-apps",
      categoryLabel: "Local-First Workspace & Desktop",
      year: "2026",
      client: "Tomorrowly Community & Open Source",
      role: "Creator & Lead Developer",
      image: "/images/projects/portfolio-tomorrowly.png",
      summary: "Architected and engineered Tomorrowly, an open-source, sovereign local-first personal knowledge management workspace built with Tauri v2, Rust, and React. Combines plain local markdown notes, relational databases, an infinite thinking canvas, zero-cost P2P local Wi-Fi mesh sync, and native Model Context Protocol (MCP) AI host integration.",
      challenge: "Providing seamless multi-device synchronization and infinite spatial thinking without locking user thoughts into proprietary cloud databases or exposing private notes to telemetry.",
      solution: "Engineered an offline-first architecture using local filesystem markdown storage, SQLite, WebRTC peer-to-peer relay for LAN/WAN synchronization without cloud fees, and a local Rust Model Context Protocol (MCP) server.",
      impact: "100% data sovereignty, sub-millisecond local latency, zero server subscriptions, and cross-platform desktop releases on Windows, macOS, and Linux with companion mobile support.",
      deliverables: ["Tauri v2 + Rust App Shell", "Local-First Markdown Engine", "P2P Encrypted Mesh Sync", "Infinite Thinking Canvas", "Native Rust MCP Host"],
      techStack: ["Tauri v2", "Rust", "React 19", "TypeScript", "SQLite", "WebRTC P2P", "Tailwind CSS"],
      liveUrl: "https://tomorrowly.pages.dev",
      githubUrl: "https://github.com/TomorrowlyApp/tomorrowly"
    },
    {
      id: "admium",
      title: "ADMIUM",
      subtitle: "The Marketing Operating System & High-Velocity RTB Telemetry Platform",
      category: "saas-apps",
      categoryLabel: "Marketing OS & RTB Telemetry",
      year: "2026",
      client: "Admium Technologies",
      role: "Co-Founder & Lead Developer",
      image: "/images/admium-landing.png",
      summary: "Engineered Admium, an all-in-one marketing operating system and high-velocity ad-tech engine featuring real-time bidding (RTB) telemetry, sub-50ms attribution pipelines, audience segmentation graphs, and unified multi-channel campaign analytics.",
      challenge: "Processing high-volume ad bid requests, conversion tracking events, and multi-touch attribution calculations with sub-50ms latency across global edge points without data loss.",
      solution: "Built a distributed edge-native telemetry pipeline with Cloudflare Workers, Redis real-time state synchronization, ClickHouse columnar analytics, and a reactive Next.js 15 command dashboard.",
      impact: "<50ms RTB bidding evaluation, unified attribution across millions of monthly events, and automated campaign optimization with zero infrastructure bloat.",
      deliverables: ["Marketing OS Architecture", "Sub-50ms RTB Telemetry Engine", "Edge Attribution Pipeline", "Multi-Tenant Campaign Dashboard", "Redis State Synchronization"],
      techStack: ["Next.js 15", "TypeScript", "Cloudflare Workers", "Redis", "ClickHouse", "Tailwind CSS", "REST APIs"],
      liveUrl: "https://admium-landing.pages.dev"
    },
    {
      id: "wyve-media",
      title: "WYVE MEDIA",
      subtitle: "Official agency platform & high-conversion client acquisition hub",
      category: "commercial",
      categoryLabel: "Agency Platform & Edge Infrastructure",
      year: "2026",
      client: "WyVE MEDIA",
      role: "Founder & Lead Full Stack Engineer",
      image: "/images/wyvemedia-landing.png",
      summary: "Designed, built, and launched the official platform for WyVE MEDIA, engineering high-performance web applications, brand identities, and AI products with sub-second page loads and 100/100 Google Lighthouse scores.",
      challenge: "Creating an authoritative, cutting-edge agency presence that demonstrates extreme technical mastery, conversion-driven typography, and zero layout shift on all viewports.",
      solution: "Built with Astro 7, React 19, Tailwind CSS, Google GenAI interactive AI chat consultation section, and Cloudflare Pages/Workers edge deployment.",
      impact: "100/100 Lighthouse Performance, sub-0.8s load times worldwide, and seamless automated client consultation booking funnels.",
      deliverables: ["Agency Platform Architecture", "Interactive AI Consultation Bot", "Case Studies Portfolio Showcase", "Edge Deployment Rig"],
      techStack: ["Astro 7", "React 19", "Cloudflare Pages", "Tailwind CSS", "Google GenAI", "PostHog"],
      liveUrl: "https://wyvemedia.com"
    },
    {
      id: "skillo",
      title: "SKILLO",
      subtitle: "Multi-tenant job marketplace with AI candidate scoring & resume parsing",
      category: "saas-apps",
      categoryLabel: "Multi-Tenant Talent Marketplace",
      year: "2025",
      client: "Skillo Learning",
      role: "Full Stack Lead",
      image: "https://cdn.wyvemedia.com/portfolio-skillo.webp",
      summary: "Developed the full-stack architecture for Skillo, a multi-tenant talent marketplace connecting job seekers, corporate employers, and educational institutions with AI-powered resume parsing and ML candidate skill scoring.",
      challenge: "Handling multi-tenant organizational hierarchies with disparate candidate databases, role permissions, and complex drag-and-drop recruitment stage boards.",
      solution: "Constructed a modular Next.js 15 + React 19 architecture with Prisma ORM, dnd-kit sortable pipeline stages, Google AI SDK resume extractors, and automated transactional emails.",
      impact: "Adopted by educational institutions across India, processing thousands of student resumes with automated skill taxonomy mapping.",
      deliverables: ["Multi-Tenant Organization Portal", "AI Resume Parser & Scorer", "Drag-and-Drop Hiring Kanban", "Prisma Enterprise Schema"],
      techStack: ["Next.js 15", "React 19", "TypeScript", "Prisma", "PostgreSQL", "Google AI SDK", "Tailwind CSS"],
      liveUrl: "https://skillo.co.in/landing/individual"
    },
    {
      id: "express-wagon",
      title: "EXPRESS WAGON",
      subtitle: "Next-day freight & logistics sourcing platform with Headless CMS",
      category: "commercial",
      categoryLabel: "Logistics & Freight Platform",
      year: "2026",
      client: "Express Wagon Logistics",
      role: "Founder & Full Stack Engineer (WyVE MEDIA)",
      image: "https://cdn.wyvemedia.com/portfolio-express-wagon.webp",
      summary: "Designed and built Express Wagon, a high-converting logistics and next-day freight management platform with real-time rate calculator and dynamic content management.",
      challenge: "Empowering logistics dispatchers to update routes, freight pricing tiers, and regional coverage without code deployments while preserving fast frontend delivery.",
      solution: "Integrated modular Sanity CMS and Tina CMS content schemas with an Astro/React frontend and automated WhatsApp/email lead dispatch.",
      impact: "Streamlined freight inquiries across 50+ transport lanes with 80% faster operational update cycles.",
      deliverables: ["Modular UI Component Rig", "Headless CMS Integration", "Real-Time Freight Estimator", "Multi-Channel Lead Dispatch"],
      techStack: ["Astro", "TypeScript", "Tailwind CSS", "Zustand", "Sanity CMS"],
      liveUrl: "https://theexpresswagon.com"
    },
    {
      id: "vipplacement",
      title: "VIP PLACEMENT",
      subtitle: "24x7 Live-in domestic care & premium household staffing platform",
      category: "commercial",
      categoryLabel: "Care & Staffing Marketplace",
      year: "2026",
      client: "VIP Placement Services",
      role: "Founder & Full Stack Engineer (WyVE MEDIA)",
      image: "https://cdn.wyvemedia.com/portfolio-vipplacement.webp",
      summary: "Engineered a modern luxury residential staffing and domestic care booking platform with instant requirement matching, background verification workflows, and conversion-optimized candidate scheduling.",
      challenge: "Designing a high-trust, frictionless onboarding flow for families requiring verified, experienced domestic healthcare and household staff on short notice.",
      solution: "Built a responsive platform with Astro, Tailwind CSS, and Cloudflare Pages edge delivery, coupled with WhatsApp Cloud API direct inquiry routing.",
      impact: "Sub-second edge loading, high mobile conversion rates, and automated candidate interview pipelines.",
      deliverables: ["Care Requirement Configurator", "Instant Inquiries Funnel", "Mobile-First Staffing Hub"],
      techStack: ["Astro", "Tailwind CSS", "TypeScript", "Cloudflare Pages"],
      liveUrl: "https://vipplacement.com"
    },
    {
      id: "shaniya-cables",
      title: "SHANIYA CABLES",
      subtitle: "Industrial cable manufacturing e-commerce & specification catalog",
      category: "commercial",
      categoryLabel: "Manufacturing B2B & Catalog",
      year: "2025",
      client: "Shaniya Cables Group",
      role: "Founder & Lead Full Stack Engineer (WyVE MEDIA)",
      image: "https://cdn.wyvemedia.com/portfolio-shaniya.webp",
      summary: "Developed an enterprise B2B product catalog and quotation engine for Shaniya Cables, featuring dynamic cable SKU specifications, electrical conductivity charts, and instant B2B quotation generation.",
      challenge: "Structuring thousands of industrial electrical parameters (voltage grades, conductor resistance, insulation thickness) into an intuitive, filterable mobile experience.",
      solution: "Engineered responsive technical data sheet viewers, edge-cached product imagery on Cloudflare R2, and streamlined inquiry routing to direct sales desks.",
      impact: "Eliminated PDF browsing delays, delivering instant spec comparisons and 100/100 Core Web Vitals scores.",
      deliverables: ["SKU Specification Database", "Technical Data Sheet Viewers", "Cloudflare R2 Asset Pipeline", "Instant RFQ Quotation Engine"],
      techStack: ["Astro", "React", "PostgreSQL", "Cloudflare R2", "Tailwind CSS"],
      liveUrl: "https://shaniyacables.com"
    },
    {
      id: "unitherm",
      title: "UNITHERM",
      subtitle: "Industrial heat treatment monitoring & energy infrastructure platform",
      category: "commercial",
      categoryLabel: "Industrial B2B & Telemetry",
      year: "2026",
      client: "Unitherm Heating Systems",
      role: "Founder & Lead Full Stack Engineer (WyVE MEDIA)",
      image: "https://cdn.wyvemedia.com/portfolio-unitherm.webp",
      summary: "Engineered a comprehensive digital platform for Unitherm Heating Systems showcasing heavy industrial furnaces, heat treatment processes, energy telemetry monitoring, and B2B quotation workflows.",
      challenge: "Presenting complex thermodynamic engineering data, industrial furnace specifications, and process certifications in a fast, accessible, mobile-first broadsheet format.",
      solution: "Crafted a static-first Astro architecture deployed to Cloudflare Pages with responsive specification tables, interactive temperature calculation modules, and instant RFP inquiry forms.",
      impact: "100% Core Web Vitals score, sub-500ms initial render, and a 45% increase in high-value industrial quotation requests.",
      deliverables: ["Industrial Equipment Catalog", "Thermal Spec Matrix", "Cloudflare Edge Deployment", "B2B RFP Inquiry Pipeline"],
      techStack: ["Astro", "React", "Cloudflare Pages", "Tailwind CSS", "TypeScript"],
      liveUrl: "https://unitherm-landing.pages.dev"
    },
    {
      id: "quizzeria",
      title: "QUIZZERIA",
      subtitle: "AI-native infinite study canvas, 1,000+ page OCR chunking & exam prep",
      category: "saas-apps",
      categoryLabel: "AI EdTech & Infinite Canvas",
      year: "2026",
      client: "EdTech Platform",
      role: "Full Stack & AI Systems Architect",
      image: "/images/projects/placeholder.svg",
      summary: "Engineered Quizzeria, an AI-powered study platform featuring an interactive Infinite Study Canvas with a tactile Ink & Paper design system, pressure-sensitive handwriting rendering, 1,000+ page OCR parsing, and Bloom's Taxonomy L1–L6 question generation.",
      challenge: "Processing multi-hundred-page textbooks and academic lecture PDFs with dense formulas while rendering low-latency pressure-sensitive inking and generating verified assessment items without hallucination.",
      solution: "Built a distributed chunking pipeline with Cloudflare AI Gateway + BYOK routing, roughjs and perfect-freehand tactile drawing engine, IMS QTI 2.1 standard export archive generator, and Anki flashcard deck sync.",
      impact: "Instant OCR ingestion for 1,000+ page documents, 4 interactive study modes, AES-256 encrypted personal study vault, and full export compatibility with Canvas LMS.",
      deliverables: ["Infinite Study Canvas", "Cloudflare AI Gateway OCR Ingestion", "Bloom's Taxonomy Generator", "IMS QTI 2.1 Exporter", "Tactile Inking Engine"],
      techStack: ["Next.js 16", "Hono", "Cloudflare Workers", "Cloudflare AI Gateway", "perfect-freehand", "roughjs", "TypeScript"],
      liveUrl: "https://quizzeria.app"
    },
    {
      id: "drmeets",
      title: "DRMEETS",
      subtitle: "Healthcare video consultation marketplace connecting MRs & licensed Doctors",
      category: "commercial",
      categoryLabel: "HealthTech & Video Marketplace",
      year: "2026",
      client: "DrMeets Health",
      role: "Lead Full Stack Engineer",
      image: "/images/projects/placeholder.svg",
      summary: "Architected and engineered DrMeets, a comprehensive multi-tenant healthcare consultation platform eliminating hospital corridor waiting times for Medical Representatives (MRs) through scheduled, paid video consultations with licensed Doctors.",
      challenge: "Designing a multi-tenant role-based platform supporting 6 distinct user roles across 7 specialized portals, handling complex time-slot locking, automated payout escrow formulas, and low-latency WebRTC video rooms.",
      solution: "Built a high-performance REST API backend on Node.js/PostgreSQL with Redis mutex slot locking, WebRTC peer-to-peer encrypted video rooms, and a responsive Next.js 15 doctor/MR dashboard.",
      impact: "Streamlined medical representative meeting schedules across hundreds of clinics, reducing wait times from hours to instantaneous scheduled appointments.",
      deliverables: ["7 Specialized Portals", "WebRTC Video Rooms", "Automated Escrow & Payout Engine", "Multi-Tenant Role RBAC", "Doctor Availability Grid"],
      techStack: ["Next.js 15", "React 19", "Node.js", "WebRTC", "PostgreSQL", "Prisma", "Redis", "Tailwind CSS"],
      liveUrl: "https://drmeets.in"
    },
    {
      id: "innerly",
      title: "INNERLY",
      subtitle: "AI wellness analytics & 3D interactive daily reflection companion",
      category: "mobile-ai",
      categoryLabel: "AI Wellness & Mobile App",
      year: "2026",
      client: "Innerly Health",
      role: "Full Stack & Mobile Engineer",
      image: "/images/projects/placeholder.svg",
      summary: "Developed Innerly, a cross-platform AI wellness companion featuring daily mood reflection analytics, 3D interactive relaxation environments with React Three Fiber, Clerk authentication, and synchronized mobile/web client states.",
      challenge: "Creating an ultra-responsive, comforting 3D spatial experience with interactive physics on both low-power mobile devices and high-resolution desktop browsers without battery drain.",
      solution: "Engineered lightweight Three.js/Rapier physics scenes with level-of-detail optimizations, coupled with Upstash Redis caching and Supabase/Neon PostgreSQL data pipelines.",
      impact: "Sub-80ms API response times, seamless offline-first mobile sync via Expo, and highly engaging 3D mental wellness visualizations.",
      deliverables: ["React Native / Expo Mobile App", "Next.js 15 Full-Stack WebApp", "React Three Fiber 3D Scenes", "Supabase & Prisma Database", "Clerk Multi-Device Auth"],
      techStack: ["Next.js 15", "React Native", "Expo", "React Three Fiber", "Supabase", "Neon PostgreSQL", "Prisma", "Clerk"],
      liveUrl: "https://innerly-landing.pages.dev"
    },
    {
      id: "quantedge-ai",
      title: "QUANTEDGE AI",
      subtitle: "Professional cloud trading suite for sports betting arbitrage & scalping",
      category: "saas-apps",
      categoryLabel: "Quantitative Analytics & Arbitrage",
      year: "2025",
      client: "QuantEdge Analytics",
      role: "Quantitative Systems & Full Stack Engineer",
      image: "/images/projects/placeholder.svg",
      summary: "Engineered QuantEdge AI, a sports betting analytics platform combining multi-bookmaker arbitrage detection, smart scalping algorithms, and automated mathematical hedging calculators to maximize risk-adjusted returns.",
      challenge: "Ingesting and normalizing thousands of live odds updates per second across disparate bookmaker feeds with sub-100ms calculation latency before market lines shift.",
      solution: "Architected a high-throughput Python/FastAPI async ingestion pipeline with WebSocket feeds, Redis real-time state caching, and an intuitive React dashboard with risk exposure sliders.",
      impact: "Detected 1,500+ daily arbitrage opportunities with automated Dutching calculators and instant risk parity alerts.",
      deliverables: ["Real-Time Odds Ingestion Pipeline", "Mathematical Hedge & Dutching Engine", "Interactive Risk Dashboard", "WebSocket Alert Rig"],
      techStack: ["Python", "FastAPI", "React", "WebSocket", "Redis", "PostgreSQL", "Tailwind CSS", "Docker"],
      liveUrl: "https://quantedge.ai"
    },
    {
      id: "wapbot",
      title: "WAPBOT",
      subtitle: "Enterprise WhatsApp bot SaaS platform with NLP & automated flows",
      category: "saas-apps",
      categoryLabel: "Conversational Automation SaaS",
      year: "2026",
      client: "Enterprise SaaS",
      role: "Backend & SaaS Architect",
      image: "/images/projects/placeholder.svg",
      summary: "Built WAPBot, an enterprise WhatsApp Bot SaaS platform supporting conversational sales automation, multi-agent inbox routing, Dialogflow NLP intent matching, and webhook integrations for e-commerce stores.",
      challenge: "Managing high-volume WhatsApp webhook bursts with zero message drop, strict rate-limit compliance, and customizable visual conversation flow builders.",
      solution: "Engineered an event-driven Node.js backend with PostgreSQL, Payload CMS for dynamic content, Dialogflow NLP, and Prisma ORM.",
      impact: "Automated 80%+ of repetitive customer inquiries for onboarded businesses with instant lead qualification.",
      deliverables: ["WhatsApp Cloud API Webhook Engine", "Dialogflow Intent Router", "Multi-Agent Team Inbox", "Payload CMS Content Hub"],
      techStack: ["Node.js", "Dialogflow", "PostgreSQL", "Payload CMS", "Prisma", "Tailwind CSS"],
      liveUrl: "https://wapbot.io"
    },
    {
      id: "phicam",
      title: "PHICAM",
      subtitle: "Real-time AI camera app with live computer vision composition overlays",
      category: "mobile-ai",
      categoryLabel: "Computer Vision Mobile App",
      year: "2025",
      client: "Mobile AI Project",
      role: "Mobile & Computer Vision Developer",
      image: "/images/projects/placeholder.svg",
      summary: "Engineered PhiCam, an AI-powered camera application for Android and iOS that overlays live computer vision insights, Fibonacci golden spirals, dynamic composition grids, and real-time object detection.",
      challenge: "Executing real-time 60 FPS video stream overlays and TFLite neural network object detection without thermal throttling or camera frame drops.",
      solution: "Developed custom camera shaders and TFLite inference delegates in Flutter/Dart, directly interfacing with native camera buffers.",
      impact: "Seamless live viewfinder rendering with instant golden ratio framing for mobile photographers.",
      deliverables: ["Live Fibonacci Composition Shader", "TFLite Real-Time Object Detector", "Flutter Cross-Platform Engine", "Native Camera Buffer Pipeline"],
      techStack: ["Flutter", "Dart", "TensorFlow Lite", "Computer Vision", "CameraX"],
      liveUrl: "https://github.com/warhammered/phicam"
    }
  ] as Project[]
};
