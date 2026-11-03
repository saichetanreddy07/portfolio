export type ProjectPattern = 'scanlines' | 'waveform' | 'dashboard' | 'tiles'
export type ProjectAccent = 'danger' | 'teal' | 'warning' | 'amber'

export interface ProjectTheme {
  themeKey: string
  accent: ProjectAccent
  surface: 'ink-900' | 'ink-950'
  pattern: ProjectPattern
}

export interface ProjectScreenshot {
  caption: string
  label: string
}

export interface Project {
  id: string
  index: string
  title: string
  category: string
  year: string
  shortDescription: string
  overview: string
  problem: string
  motivation?: string
  approach: string
  highlights: readonly string[]
  technologies: readonly string[]
  featuredTechnologies: readonly string[]
  challenges: string
  lessonsLearned: string
  githubUrl?: string
  liveDemoUrl?: string
  imageUrl?: string
  additionalScreenshots?: readonly ProjectScreenshot[]
  status?: { label: string; tone: 'warning' }
  theme: ProjectTheme
}

export const projectsSection = {
  eyebrow: '02 / Projects',
  title: "Things I've Built",
  introduction:
    'A selection of projects that challenged me to learn, solve problems, and build practical AI and software solutions.',
  viewCaseStudy: 'View Case Study',
  openDetails: 'Explore project',
  closeDetails: 'Close project details',
  detailsDialogLabel: 'Project details',
  githubLabel: 'GitHub',
  liveDemoLabel: 'Live Demo',
  liveDemoComingSoon: 'Live Demo (Coming Soon)',
  nextProjectLabel: 'Next project',
  prevProjectLabel: 'Previous project',
  closeModalLabel: 'Close case study',
  overviewLabel: 'Overview',
  problemLabel: 'Problem',
  motivationLabel: 'Why I built it',
  solutionLabel: 'Solution',
  approachLabel: 'Solution / Approach',
  featuresLabel: 'Features',
  highlightsLabel: 'Key highlights',
  technologiesLabel: 'Technologies',
  challengesLabel: 'Challenges',
  lessonsLabel: 'What This Project Taught Me',
  whatItTaughtMeLabel: 'What This Project Taught Me',
  additionalScreenshotsLabel: 'Architecture & System Previews',
} as const

export const projects: readonly Project[] = [
  {
    id: 'pokedex-ai',
    index: '01',
    title: 'PokéDex AI',
    category: 'AI / RAG',
    year: '2026',
    shortDescription:
      'Local RAG Q&A, recommender, team builder, and analyzer over 1,576 PokéAPI documents.',
    overview:
      'A high-performance local Retrieval-Augmented Generation (RAG) assistant designed to simulate a real-world Pokédex. It indexes 1,576 structured PokéAPI entities into ChromaDB and uses Phi-3 via Ollama for zero-cost, privacy-first local semantic inference.',
    problem:
      'PokéAPI holds rich, multi-layered data across 151 Pokémon, 592 moves, and 78 evolution chains, but lacks semantic query capability. Players cannot ask natural questions like "What are the best defensive counters against Dragonite?" without manually cross-referencing dozens of static tables.',
    motivation: 'A way to learn RAG and its features.',
    approach:
      'Engineered a local RAG pipeline using ChromaDB, SentenceTransformers, and Microsoft Phi-3 running locally through Ollama. The interface features a 4-tab Gradio UI serving Q&A, contextual recommendations, balanced team building, and combat matchup analytics.',
    highlights: [
      '1,576 indexed documents: 151 Pokémon, 592 moves, and 78 evolution chains.',
      'Four-tab Gradio interface delivering sub-350ms semantic retrieval.',
      'Context-aware team builder with type advantage optimization.',
      'Privacy-first architecture running 100% locally with zero cloud API keys.',
    ],
    technologies: ['ChromaDB', 'SentenceTransformers', 'Phi-3', 'Ollama', 'FastAPI', 'Gradio', 'PokéAPI'],
    featuredTechnologies: ['ChromaDB', 'Phi-3', 'FastAPI'],
    challenges:
      'Structuring hierarchical JSON evolution trees and move damage multipliers into uniform vector embeddings without losing relational context or causing hallucinated battle outcomes.',
    lessonsLearned:
      'Optimizing chunking and embedding pipelines over structured game data, reducing ChromaDB vector retrieval latency, and serving local SLMs reliably.',
    githubUrl: 'https://github.com/saichetanreddy07/pokedex-ai-rag',
    theme: { themeKey: 'pokedex', accent: 'danger', surface: 'ink-900', pattern: 'scanlines' },
    additionalScreenshots: [
      { label: 'Semantic Search Engine', caption: 'ChromaDB vector embedding pipeline indexing 1,576 structured documents' },
      { label: 'Combat Matchup Matrix', caption: 'Dynamic type-advantage calculation engine and damage multiplier analysis' },
    ],
  },
  {
    id: 'meta-learning-time-series',
    index: '02',
    title: 'Meta-Learning for Time-Series Model Selection',
    category: 'Machine Learning',
    year: '2026',
    shortDescription:
      'Predicts whether ARIMA or Prophet will forecast a series better, without fitting both.',
    overview:
      'A machine learning meta-classifier that predicts whether ARIMA or Prophet will achieve higher forecast accuracy on an unseen time series, completely eliminating the compute-heavy process of fitting and cross-validating both models.',
    problem:
      'In enterprise forecasting across thousands of operational series, fitting multiple candidate models (such as ARIMA and Prophet) consumes massive compute clusters and creates severe deployment bottlenecks.',
    approach:
      'Extracted 10 statistical meta-features (trend strength, spectral entropy, curvature, linearity, seasonal variance) across 1,359 M4 series, training a Random Forest meta-classifier that achieves 69.12% holdout accuracy.',
    highlights: [
      'Benchmarked against 1,359 empirical M4 competition series.',
      '69.12% holdout accuracy without dual-model fitting.',
      'Interactive Streamlit application with live feature importance inspection.',
      'Sub-50ms inference time per time series.',
    ],
    technologies: ['ARIMA', 'Prophet', 'Random Forest', 'Streamlit', 'Python', 'Scikit-Learn'],
    featuredTechnologies: ['ARIMA', 'Prophet', 'Random Forest'],
    challenges:
      'Extracting robust statistical meta-features across radically different time horizons (hourly, daily, monthly) and mitigating class imbalance between ARIMA and Prophet wins.',
    lessonsLearned:
      'Meta-feature engineering across diverse time horizons, handling dataset variance, and deploying lightweight inference pipelines in Streamlit.',
    githubUrl: 'https://github.com/saichetanreddy07/Meta-Learning-Time-Series-Forecasting',
    theme: { themeKey: 'time-series', accent: 'teal', surface: 'ink-950', pattern: 'waveform' },
    additionalScreenshots: [
      { label: 'Feature Importance Radar', caption: 'Relative weights of 10 statistical meta-features across M4 horizons' },
      { label: 'Forecasting Comparison Curve', caption: 'Empirical holdout evaluation of ARIMA vs Prophet vs Meta-Model' },
    ],
  },
  {
    id: 'enterprise-sql-analytics',
    index: '03',
    title: 'Enterprise SQL Analytics & BI Platform',
    category: 'Data Analytics & BI',
    year: '2026',
    shortDescription:
      'Python ETL, PostgreSQL analytics, and a Power BI dashboard for e-commerce data.',
    overview:
      'An end-to-end data engineering and business intelligence platform processing 5+ GB of e-commerce transactions across 309,967 records to extract strategic customer retention and revenue insights.',
    problem:
      'Large e-commerce platforms accumulate millions of transactional records across disconnected schemas, leading to blind spots in repeat purchasing rates, customer lifetime value, and logistics delays.',
    approach:
      'Engineered Python ETL for 309,967 records, designed a 4-table normalized PostgreSQL schema, solved 39 complex business queries with window functions, and delivered a 4-page Power BI dashboard.',
    highlights: [
      '5+ GB e-commerce dataset with 309,967 sampled records.',
      '39 complex SQL business queries utilizing advanced window functions.',
      'Four-page interactive Power BI dashboard with executive KPIs.',
      'Automated data validation pipeline with zero data loss.',
    ],
    technologies: ['Python ETL', 'PostgreSQL', 'SQL window functions', 'Power BI', 'Data Modeling'],
    featuredTechnologies: ['Python ETL', 'PostgreSQL', 'Power BI'],
    challenges:
      'Optimizing PostgreSQL window query execution plans and indexing strategy to ensure sub-50ms execution on queries spanning 300K+ records.',
    lessonsLearned:
      'Optimizing SQL window functions on large datasets, star schema design, and translating analytical findings into executive-ready dashboards.',
    githubUrl: 'https://github.com/saichetanreddy07/ecommerce-sql-bi-platform',
    theme: { themeKey: 'analytics', accent: 'warning', surface: 'ink-900', pattern: 'dashboard' },
    additionalScreenshots: [
      { label: 'Database Schema Mart', caption: 'Normalized 4-table star schema optimized for analytical query workloads' },
      { label: 'Executive Power BI Canvas', caption: 'Multi-page analytical dashboard with customer retention cohort visuals' },
    ],
  },
  {
    id: 'restaurant-ai',
    index: '04',
    title: 'RestaurantAI',
    category: 'Full-Stack AI',
    year: '2026',
    shortDescription:
      'Restaurant inventory backend with FEFO stock consumption and real-time dish availability.',
    overview:
      'A backend engine and real-time management dashboard for commercial kitchens featuring First-Expired-First-Out (FEFO) inventory consumption, immutable audit ledgers, and dynamic dish availability.',
    problem:
      'Commercial restaurants lose significant margin to unmonitored perishable spoilage and guest disappointment from ordering dishes whose core ingredients ran out mid-service.',
    approach:
      'Constructed a high-throughput FastAPI, SQLAlchemy, and MySQL backend implementing automated FEFO consumption algorithms, an append-only audit trail, and reactive dish availability calculation, paired with a React 19 frontend.',
    highlights: [
      'Automated FEFO (First-Expired-First-Out) stock consumption algorithm.',
      'Cryptographically verifiable, immutable audit ledger for inventory operations.',
      'Sub-15ms real-time dish availability calculation based on ingredient batches.',
      'React 19 + TypeScript frontend dashboard currently in active development.',
    ],
    technologies: ['FastAPI', 'SQLAlchemy', 'MySQL', 'React 19', 'TypeScript', 'Pydantic'],
    featuredTechnologies: ['FastAPI', 'MySQL', 'React 19'],
    challenges:
      'Preventing race conditions and inventory double-allocation during concurrent peak dinner order rushes using database row-level locking.',
    lessonsLearned:
      'Implementing strict FEFO inventory logic, database transaction locking for concurrent orders, and designing reactive frontend state in React 19.',
    githubUrl: 'https://github.com/saichetanreddy07/Restaurant-AI',
    status: { label: 'In progress', tone: 'warning' },
    theme: { themeKey: 'restaurant', accent: 'amber', surface: 'ink-900', pattern: 'tiles' },
    additionalScreenshots: [
      { label: 'Real-time FEFO Batch Ledger', caption: 'Visual breakdown of perishable stock batches with expiration thresholds' },
      { label: 'Kitchen Service Monitor', caption: 'Instant dish availability status derived from live inventory levels' },
    ],
  },
]
