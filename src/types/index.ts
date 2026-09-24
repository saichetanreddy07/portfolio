export interface NavItem {
  name: string;
  href: string;
  isExternal?: boolean;
}

export interface SocialLink {
  name: string;
  href: string;
  ariaLabel: string;
  icon: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  tagline: string;
  summary: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  status: string;
  education: {
    institution: string;
    degree: string;
    period: string;
    location: string;
  };
}

