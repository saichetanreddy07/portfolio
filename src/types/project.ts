export type ProjectCategory = "ai" | "backend" | "data";

export interface ProjectLink {
  github?: string;
  demo?: string;
}

export interface ProjectMetadata {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  priority: number;
  featured: boolean;
  tagline: string;
  techStack: string[];
  links: ProjectLink;
}

