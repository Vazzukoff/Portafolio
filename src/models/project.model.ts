export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  deployUrl?: string;
  isProduction?: boolean
}

export interface ProjectProps {
  projectRef: React.RefObject<HTMLDivElement | null>;
}