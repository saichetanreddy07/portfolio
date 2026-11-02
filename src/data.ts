export const navigation = [
  { label: 'Home', href: '#home', index: '00' },
  { label: 'About', href: '#about', index: '01' },
  { label: 'Projects', href: '#projects', index: '02' },
  { label: 'Loadout', href: '#skills', index: '03' },
  { label: 'Beyond code', href: '#beyond-code', index: '04' },
  { label: 'Contact', href: '#contact', index: '05' },
]

export const siteText = {
  brandName: 'Sai Chetan Reddy',
  brandHomeLabel: 'Sai Chetan Reddy — home',
  primaryNavigationLabel: 'Primary navigation',
  openMenuLabel: 'Open navigation menu',
  closeMenuLabel: 'Close navigation menu',
  skipToMainLabel: 'Skip to main content',
  socialNavigationLabel: 'Social links',
  portfolioEyebrow: 'Portfolio',
}

export const contact = {
  email: 'badvel.saichetanreddy@gmail.com',
  availability: 'Open to AI/ML engineer, Data Analyst and software engineer roles.',
}

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sai-chetan-reddy-a18b4624b/' },
  { label: 'GitHub', href: 'https://github.com/saichetanreddy07' },
  { label: 'Email', href: `mailto:${contact.email}` },
]

export const footerText = {
  eyebrow: 'Next move',
  heading: 'Have a role or a problem worth solving?',
  contactAction: 'Get in touch',
  copyrightSymbol: '©',
  backToTop: 'Back to top',
}

export const hero = {
  name: siteText.brandName,
  eyebrow: siteText.portfolioEyebrow,
  tagline: 'AI Engineer | Machine Learning | Generative AI',
  description:
    'Recent B.Tech graduate in Computer Science (Artificial Intelligence) passionate about building intelligent applications using Machine Learning, Generative AI, and Data Analytics. I enjoy transforming complex problems into practical, scalable software solutions.',
  links: [
    { label: 'GitHub', href: 'https://github.com/saichetanreddy07', external: true },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sai-chetan-reddy-a18b4624b/', external: true },
    {
      label: 'Resume',
      href: '/Sai_Chetan_Resume.pdf',
      external: false,
      download: 'Sai_Chetan_Resume.pdf',
    },
  ],
}

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
