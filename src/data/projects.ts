export type ProjectPattern = 'scanlines' | 'waveform' | 'dashboard' | 'tiles'
export type ProjectAccent = 'danger' | 'teal' | 'warning' | 'amber'

export interface ProjectTheme {
  themeKey: string
  accent: ProjectAccent
  surface: 'ink-900' | 'ink-950'
  pattern: ProjectPattern
}

export interface Project {
  id: string
  index: string
  title: string
  category: string
  year: string
  shortDescription: string
  problem: string
  motivation?: string
  approach: string
  highlights: readonly string[]
  technologies: readonly string[]
  featuredTechnologies: readonly string[]
  lessonsLearned: string
  githubUrl?: string
  liveDemoUrl?: string
  imageUrl?: string
  status?: { label: string; tone: 'warning' }
  theme: ProjectTheme
}

export const projectsSection = {
  eyebrow: '02 / Projects',
  title: "Things I've Built",
  introduction:
    'A selection of projects that challenged me to learn, solve problems, and build practical AI and software solutions.',
  openDetails: 'Explore project',
  closeDetails: 'Close project details',
  problemLabel: 'Problem',
  motivationLabel: 'Why I built it',
  solutionLabel: 'Solution',
  approachLabel: 'Solution / Approach',
  highlightsLabel: 'Key highlights',
  technologiesLabel: 'Technologies',
  lessonsLabel: 'Key learnings',
  liveDemoLabel: 'Live Demo',
  liveDemoComingSoon: 'Live Demo (Coming Soon)',
  githubLabel: 'View on GitHub',
  detailsDialogLabel: 'Project details',
  problemTodo: 'TODO: add the problem this project set out to solve.',
  lessonsTodo: 'TODO: add what I learned while building this project.',
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
    problem: 'What if we had an IRL Pokédex to instantly answer complex creature synergy questions?',
    motivation: 'A way to learn RAG and its features.',
    approach:
      'Built a local RAG pipeline with Q&A, recommender, team builder, and analyzer over 1,576 PokéAPI documents using ChromaDB, SentenceTransformers, and Phi-3 via Ollama.',
    highlights: [
      '1,576 documents: 151 Pokémon, 592 moves, and 78 evolution chains.',
      'Four-tab Gradio interface with sub-second vector search.',
    ],
    technologies: ['ChromaDB', 'SentenceTransformers', 'Phi-3', 'Ollama', 'FastAPI', 'Gradio', 'PokéAPI'],
    featuredTechnologies: ['ChromaDB', 'Phi-3', 'FastAPI'],
    lessonsLearned:
      'Optimizing chunking and embedding pipelines over structured game data, reducing ChromaDB vector retrieval latency, and serving local SLMs reliably.',
    githubUrl: 'https://github.com/saichetanreddy07/pokedex-ai-rag',
    theme: { themeKey: 'pokedex', accent: 'danger', surface: 'ink-900', pattern: 'scanlines' },
  },
  {
    id: 'meta-learning-time-series',
    index: '02',
    title: 'Meta-Learning for Time-Series Model Selection',
    category: 'Machine Learning',
    year: '2026',
    shortDescription:
      'Predicts whether ARIMA or Prophet will forecast a series better, without fitting both.',
    problem: 'Selecting whether ARIMA or Prophet will forecast a series better without the high compute cost of fitting both models.',
    approach:
      'Extracted 10 statistical meta-features across 1,359 M4 series to train a Random Forest meta-classifier achieving 69.12% holdout accuracy.',
    highlights: [
      'Evaluated on 1,359 M4 benchmark series.',
      '69.12% holdout accuracy without dual-model fitting.',
      'Interactive Streamlit application.',
    ],
    technologies: ['ARIMA', 'Prophet', 'Random Forest', 'Streamlit', 'Python', 'Scikit-Learn'],
    featuredTechnologies: ['ARIMA', 'Prophet', 'Random Forest'],
    lessonsLearned:
      'Meta-feature engineering across diverse time horizons, handling dataset variance, and deploying lightweight inference pipelines in Streamlit.',
    githubUrl: 'https://github.com/saichetanreddy07/Meta-Learning-Time-Series-Forecasting',
    theme: { themeKey: 'time-series', accent: 'teal', surface: 'ink-950', pattern: 'waveform' },
  },
  {
    id: 'enterprise-sql-analytics',
    index: '03',
    title: 'Enterprise SQL Analytics & BI Platform',
    category: 'Data Analytics & BI',
    year: '2026',
    shortDescription:
      'Python ETL, PostgreSQL analytics, and a Power BI dashboard for e-commerce data.',
    problem: 'Extracting actionable business intelligence from 5+ GB of e-commerce transactional data across 300K+ records.',
    approach:
      'Engineered Python ETL for 309,967 records, designed a 4-table normalized PostgreSQL schema, solved 39 complex business queries with window functions, and delivered a 4-page Power BI dashboard.',
    highlights: [
      '5+ GB e-commerce dataset with 309,967 sampled records.',
      '39 SQL business questions using window functions.',
      'Four-page interactive Power BI dashboard.',
    ],
    technologies: ['Python ETL', 'PostgreSQL', 'SQL window functions', 'Power BI', 'Data Modeling'],
    featuredTechnologies: ['Python ETL', 'PostgreSQL', 'Power BI'],
    lessonsLearned:
      'Optimizing SQL window functions on large datasets, star schema design, and translating analytical findings into executive-ready dashboards.',
    githubUrl: 'https://github.com/saichetanreddy07/ecommerce-sql-bi-platform',
    theme: { themeKey: 'analytics', accent: 'warning', surface: 'ink-900', pattern: 'dashboard' },
  },
  {
    id: 'restaurant-ai',
    index: '04',
    title: 'RestaurantAI',
    category: 'Full-Stack AI',
    year: '2026',
    shortDescription:
      'Restaurant inventory backend with FEFO stock consumption and real-time dish availability.',
    problem: 'Minimizing commercial kitchen food waste and stockouts caused by untracked perishable inventory and dish dependencies.',
    approach:
      'Architected FastAPI + SQLAlchemy + MySQL backend with First-Expired-First-Out (FEFO) consumption, immutable audit ledger, and real-time dish availability calculation.',
    highlights: [
      'FEFO automated stock consumption algorithm.',
      'Immutable audit ledger for regulatory compliance.',
      'Real-time dish availability calculation based on batch levels.',
      'React 19 + TypeScript dashboard currently in progress.',
    ],
    technologies: ['FastAPI', 'SQLAlchemy', 'MySQL', 'React 19', 'TypeScript', 'Pydantic'],
    featuredTechnologies: ['FastAPI', 'MySQL', 'React 19'],
    lessonsLearned:
      'Implementing strict FEFO inventory logic, database transaction locking for concurrent orders, and designing reactive frontend state in React 19.',
    githubUrl: 'https://github.com/saichetanreddy07/Restaurant-AI',
    status: { label: 'In progress', tone: 'warning' },
    theme: { themeKey: 'restaurant', accent: 'amber', surface: 'ink-900', pattern: 'tiles' },
  },
]
