export const navigation = [
  { label: 'Home', href: '#home', index: '00' },
  { label: 'About', href: '#about', index: '01' },
  { label: 'Projects', href: '#projects', index: '02' },
  { label: 'Loadout', href: '#skills', index: '03' },
  { label: 'Beyond code', href: '#beyond-code', index: '04' },
  { label: 'Contact', href: '#contact', index: '05', emphasis: 'primary' },
]

export const siteText = {
  brandName: 'Sai Chetan Reddy',
  brandHomeLabel: 'Sai Chetan Reddy — home',
  primaryNavigationLabel: 'Primary navigation',
  openMenuLabel: 'Open navigation menu',
  closeMenuLabel: 'Close navigation menu',
  skipToMainLabel: 'Skip to main content',
  socialNavigationLabel: 'Social links',
}

export const contact = {
  email: 'badvel.saichetanreddy@gmail.com',
  availability: 'Open to AI/ML engineer, Data Analyst and software engineer roles.',
}

export const socialLinks = [
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/sai-chetan-reddy-a18b4624b/' },
  { id: 'github', label: 'GitHub', href: 'https://github.com/saichetanreddy07' },
  { id: 'email', label: 'Email', href: `mailto:${contact.email}` },
] as const

export const footerText = {
  eyebrow: 'Next move',
  heading: 'Have a role or a problem worth solving?',
  contactAction: 'Get in touch',
  copyrightSymbol: '©',
  backToTop: 'Back to top',
}

export const hero = {
  greeting: "Hi, I'm Sai Chetan Reddy.",
  rotatingPrefix: "I'm happiest when I'm",
  rotatingWords: ['building.', 'exploring.', 'learning something new.'],
  focus: 'AI Engineer • Machine Learning • Generative AI',
  description:
    'Recent B.Tech graduate in Computer Science (Artificial Intelligence) passionate about building intelligent applications using Machine Learning, Generative AI, and Data Analytics. I enjoy transforming complex problems into practical, scalable software solutions.',
  viewWorkLabel: 'View My Work',
  viewWorkHref: '#projects',
  socialLinkIds: ['github', 'linkedin'] as const,
  resume: {
    label: 'Resume',
    href: '/Sai_Chetan_Resume.pdf',
    download: 'Sai_Chetan_Resume.pdf',
  },
}

export const heroSocialLinks = hero.socialLinkIds.flatMap((id) =>
  socialLinks.filter((link) => link.id === id),
)

export const about = {
  eyebrow: 'About Me',
  title: 'Turning ideas into AI-powered applications.',
  paragraphs: [
    'I recently graduated with a B.Tech in Computer Science (Artificial Intelligence) from Manipal Institute of Technology, Bengaluru. My interests include Machine Learning, Generative AI, Data Engineering, and Backend Development.',
    "I enjoy building projects that solve real-world problems while continuously improving my software engineering and AI skills. I'm currently seeking opportunities where I can contribute, learn, and grow as an AI Engineer.",
  ],
  details: [
    { label: 'Location', value: 'Hyderabad, India' },
    { label: 'Graduation', value: '2026' },
    { label: 'Focus', value: 'AI / ML • Generative AI • Data Analytics' },
  ],
}

export const skills = {
  eyebrow: 'Skills / Loadout',
  title: 'Skills',
  categories: [
    { name: 'AI / LLMs', items: ['RAG', 'SentenceTransformers', 'Phi-3', 'Ollama'] },
    { name: 'ML', items: ['ARIMA', 'Prophet', 'Random Forest'] },
    { name: 'Backend', items: ['FastAPI', 'SQLAlchemy'] },
    { name: 'Data', items: ['Python ETL', 'SQL', 'Power BI'] },
    { name: 'Databases', items: ['ChromaDB', 'PostgreSQL', 'MySQL'] },
    { name: 'Tools', items: ['Gradio', 'Streamlit', 'React', 'TypeScript'] },
  ],
}

export const currentlyExploring = {
  eyebrow: 'Continuous Learning',
  title: 'Currently Exploring',
  introduction:
    "I'm always learning. These are a few areas I'm actively exploring and excited about.",
  items: [
    {
      id: 'ai-agents',
      title: 'AI Agents',
      tag: 'Autonomous Systems',
      description:
        'Experimenting with multi-agent orchestration, tool use, and self-correcting reasoning loops to move beyond static prompt-response pipelines.',
    },
    {
      id: 'react',
      title: 'React',
      tag: 'Frontend Engineering',
      description:
        'Deepening my practical knowledge of React 19, Server Components, and optimistic UI updates while building dashboards for my backend APIs.',
    },
    {
      id: 'cloud',
      title: 'Cloud',
      tag: 'DevOps & Scaling',
      description:
        'Learning containerized deployments, serverless workflows, and cloud primitives to host and scale machine learning models reliably.',
    },
    {
      id: 'system-design',
      title: 'System Design',
      tag: 'Distributed Systems',
      description:
        'Studying distributed systems architectures, caching strategies, and event-driven patterns to build software that scales cleanly under heavy load.',
    },
    {
      id: 'wildlife-photography',
      title: 'Wildlife Photography',
      tag: 'Field Observation',
      description:
        'Practicing patience and rapid manual framing outdoors to capture local birds and wildlife in their natural habitats.',
    },
    {
      id: 'running',
      title: 'Running',
      tag: 'Endurance & Mindset',
      description:
        'Building cardiovascular endurance and mental grit one morning 5K at a time to stay clear-headed and energized away from my desk.',
    },
  ],
}

export const beyondTheScreen = {
  eyebrow: '04 / Beyond the Screen',
  title: 'Beyond the Screen',
  introduction:
    'A few things that keep me curious, energized and inspired beyond building software.',
  items: [
    {
      id: 'photography',
      index: '01',
      title: 'Photography',
      tagline: 'Visual Stories & Framing',
      description:
        'Taking a camera on walks forces me to slow down and observe the subtle details of light, texture, and everyday life. It sharpens my design instincts and teaches me how composition and perspective shape human perception. Whether wandering through city streets or quiet nature trails, it is my favorite way to stay present.',
      cue: 'Light, geometry & perspective',
    },
    {
      id: 'wildlife-conservation',
      index: '02',
      title: 'Wildlife Conservation',
      tagline: 'Biodiversity & Future Vision',
      description:
        "I've always been fascinated by nature's resilience—from my love for cats to how axolotls can regenerate complex neural and heart tissue. My long-term aspiration is to channel computer vision and machine learning into wildlife monitoring and habitat protection. Technology is at its best when it safeguards the natural world.",
      cue: 'AI for habitat preservation',
    },
    {
      id: 'cricket',
      index: '03',
      title: 'Cricket',
      tagline: 'Discipline, Strategy & Composure',
      description:
        'Cricket is an enduring masterclass in patience, tactical anticipation, and adapting to momentum shifts over long spells. Bowling a consistent line or reading match pressure requires deep mental composure and focus. That same discipline and calm under pressure directly translates to how I approach software engineering.',
      cue: 'Patience, pace & match strategy',
    },
  ],
}
