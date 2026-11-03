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
  greeting: "Hi, I'm Sai.",
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
