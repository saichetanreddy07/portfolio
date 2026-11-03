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
  status?: { label: string; tone: 'warning' }
  theme: ProjectTheme
}

export const projectsSection = {
  title: "Things I've Built",
  introduction:
    'A selection of projects that challenged me to learn, solve problems, and build practical AI and software solutions.',
  openDetails: 'Explore project',
  closeDetails: 'Close project details',
  problemLabel: 'Problem',
  motivationLabel: 'Why I built it',
  approachLabel: 'Solution / Approach',
  highlightsLabel: 'Key highlights',
  technologiesLabel: 'Technologies',
  lessonsLabel: 'Lessons learned',
  liveDemoLabel: 'Live Demo',
  githubLabel: 'View on GitHub',
  detailsDialogLabel: 'Project details',
  problemTodo: 'TODO: add the problem this project set out to solve.',
  lessonsTodo: 'TODO: add what I learned while building this project.',
} as const

export const projects = [
  {
    id: 'pokedex-ai',
    index: '01',
    title: 'PokéDex AI',
    shortDescription:
      'Local RAG Q&A, recommender, team builder, and analyzer over 1,576 PokéAPI documents.',
    problem: 'What if we had an IRL Pokédex?',
    motivation: 'A way to learn RAG and its features.',
    approach:
      'A local RAG application with Q&A, a recommender, a team builder, and an analyzer over PokéAPI data.',
    highlights: [
      '1,576 documents: 151 Pokémon, 592 moves, and 78 evolution chains.',
      'Four-tab Gradio interface.',
    ],
    technologies: ['ChromaDB', 'SentenceTransformers', 'Phi-3', 'Ollama', 'FastAPI', 'Gradio', 'PokéAPI'],
    featuredTechnologies: ['ChromaDB', 'Phi-3', 'FastAPI'],
    lessonsLearned: projectsSection.lessonsTodo,
    githubUrl: 'https://github.com/saichetanreddy07/pokedex-ai-rag',
    theme: { themeKey: 'pokedex', accent: 'danger', surface: 'ink-900', pattern: 'scanlines' },
  },
  {
    id: 'meta-learning-time-series',
    index: '02',
    title: 'Meta-Learning for Time-Series Model Selection',
    shortDescription:
      'Predicts whether ARIMA or Prophet will forecast a series better, without fitting both.',
    problem: 'Choose whether ARIMA or Prophet will forecast a series better without fitting both.',
    approach: 'Uses 10 statistical meta-features and a Random Forest meta-classifier.',
    highlights: [
      'Evaluated on 1,359 M4 series.',
      '69.12% holdout accuracy.',
      'Streamlit app.',
    ],
    technologies: ['ARIMA', 'Prophet', 'Random Forest', 'Streamlit'],
    featuredTechnologies: ['ARIMA', 'Prophet', 'Random Forest'],
    lessonsLearned: projectsSection.lessonsTodo,
    githubUrl: 'https://github.com/saichetanreddy07/Meta-Learning-Time-Series-Forecasting',
    theme: { themeKey: 'time-series', accent: 'teal', surface: 'ink-950', pattern: 'waveform' },
  },
  {
    id: 'enterprise-sql-analytics',
    index: '03',
    title: 'Enterprise SQL Analytics & BI Platform',
    shortDescription:
      'Python ETL, PostgreSQL analytics, and a Power BI dashboard for e-commerce data.',
    problem: projectsSection.problemTodo,
    approach:
      'Python ETL on an e-commerce dataset, a four-table PostgreSQL schema, 39 SQL business questions, and a four-page Power BI dashboard.',
    highlights: [
      '5+ GB e-commerce dataset with 309,967 sampled records.',
      '39 SQL business questions using window functions.',
      'Four-page Power BI dashboard.',
    ],
    technologies: ['Python ETL', 'PostgreSQL', 'SQL window functions', 'Power BI'],
    featuredTechnologies: ['Python ETL', 'PostgreSQL', 'Power BI'],
    lessonsLearned: projectsSection.lessonsTodo,
    githubUrl: 'https://github.com/saichetanreddy07/ecommerce-sql-bi-platform',
    theme: { themeKey: 'analytics', accent: 'warning', surface: 'ink-900', pattern: 'dashboard' },
  },
  {
    id: 'restaurant-ai',
    index: '04',
    title: 'RestaurantAI',
    shortDescription:
      'Restaurant inventory backend with FEFO stock consumption and real-time dish availability.',
    problem: projectsSection.problemTodo,
    approach:
      'FastAPI, SQLAlchemy, and MySQL backend; React 19 and TypeScript dashboard in progress.',
    highlights: [
      'FEFO stock consumption.',
      'Immutable audit ledger.',
      'Real-time dish availability.',
      'React 19 + TypeScript dashboard in progress.',
    ],
    technologies: ['FastAPI', 'SQLAlchemy', 'MySQL', 'React 19', 'TypeScript'],
    featuredTechnologies: ['FastAPI', 'MySQL', 'React 19'],
    lessonsLearned: projectsSection.lessonsTodo,
    githubUrl: 'https://github.com/saichetanreddy07/Restaurant-AI',
    status: { label: 'In progress', tone: 'warning' },
    theme: { themeKey: 'restaurant', accent: 'amber', surface: 'ink-900', pattern: 'tiles' },
  },
] as const satisfies readonly Project[]
