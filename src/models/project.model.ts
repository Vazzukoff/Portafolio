export interface Project {
  id: string;
  title: string;
  description: string;
  githubUrl: string;
}

export interface ProjectProps {
  projectRef: React.RefObject<HTMLDivElement | null>;
}