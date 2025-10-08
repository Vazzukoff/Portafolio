import { 
  SiJavascript, 
  SiTypescript,
  SiReact, 
  SiHtml5, 
  SiCss3,
  SiNodedotjs, 
  SiExpress,
  SiTailwindcss, 
  SiPostgresql,
  SiPrisma,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiDocker
} from 'react-icons/si';

export interface Technology {
  name: string;
  icon: React.ComponentType<{ color?: string }>;
  color: string;
}

export interface StackCategory {
  title: string;
  technologies: Technology[];
  gridCols?: string;
}

export const stackData: StackCategory[] = [
  
  {
    title: "Frontend",
    technologies: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss3, color: "#1572B6" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" }
    ]
  },
  {
    title: "Backend y bases de datos",
    technologies: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "white" },
      { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" }
    ]
  },

  {
    title: "Tools",
    technologies: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "white" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Vercel", icon: SiVercel, color: "white" },
      { name: "Docker", icon: SiDocker, color: "#06B6D4" }
    ],
    gridCols: "grid-cols-2"
  }
]