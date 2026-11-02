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
  tagline: '<TAGLINE>',
  description: '<SHORT_DESCRIPTION>',
  profileImage: '<PROFILE_IMAGE>',
  links: [
    { label: 'GitHub', placeholder: '<GITHUB_URL>' },
    { label: 'LinkedIn', placeholder: '<LINKEDIN_URL>' },
    { label: 'Resume', placeholder: '<RESUME_URL>' },
  ],
}

export const about = {
  eyebrow: '<ABOUT_EYEBROW>',
  title: '<ABOUT_TITLE>',
  paragraphs: ['<ABOUT_PARAGRAPH_1>', '<ABOUT_PARAGRAPH_2>'],
  details: [
    { label: '<ABOUT_DETAIL_LABEL_1>', value: '<ABOUT_DETAIL_VALUE_1>' },
    { label: '<ABOUT_DETAIL_LABEL_2>', value: '<ABOUT_DETAIL_VALUE_2>' },
    { label: '<ABOUT_DETAIL_LABEL_3>', value: '<ABOUT_DETAIL_VALUE_3>' },
  ],
}
