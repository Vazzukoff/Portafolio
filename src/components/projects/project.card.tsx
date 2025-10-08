import type { Project } from '@/models/project.model';
import { FaCode } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiJsonwebtokens,
  SiReactrouter
} from 'react-icons/si';
import { TbBrandFramerMotion } from 'react-icons/tb';

interface ProjectCardProps {
  project: Project;
}

// Mapeo de nombres de tecnologías a sus iconos y colores
const techIconMap: Record<string, { icon: React.ComponentType<{ className?: string; color?: string }>, color: string }> = {
  'React': { icon: SiReact, color: '#61DAFB' },
  'Node.js': { icon: SiNodedotjs, color: '#339933' },
  'Express': { icon: SiExpress, color: 'white' },
  'MongoDB': { icon: SiMongodb, color: '#47A248' },
  'PostgreSQL': { icon: SiPostgresql, color: '#4169E1' },
  'Next.js': { icon: SiNextdotjs, color: 'white' },
  'TailwindCSS': { icon: SiTailwindcss, color: '#06B6D4' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#06B6D4' },
  'JavaScript': { icon: SiJavascript, color: '#F7DF1E' },
  'TypeScript': { icon: SiTypescript, color: '#3178C6' },
  'Prisma': { icon: SiPrisma, color: '#2D3748' },
  'JWT': { icon: SiJsonwebtokens, color: '#000000' },
  'Multer': { icon: SiNodedotjs, color: '#339933' },
  'node-cron': { icon: SiNodedotjs, color: '#339933' },
  'Nodemailer': { icon: SiNodedotjs, color: '#339933' },
  'Framer Motion': { icon: TbBrandFramerMotion, color: '#0055FF' },
  'Motion (Framer Motion)': { icon: TbBrandFramerMotion, color: '#0055FF' },
  'Radix UI': { icon: SiReact, color: '#61DAFB' },
  'React Router v7': { icon: SiReactrouter, color: '#CA4245' },
  'React Hook Form': { icon: SiReact, color: '#61DAFB' },
  'Zod': { icon: SiTypescript, color: '#3178C6' }
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group bg-black/40 backdrop-blur-sm border border-white/30 hover:border-emerald-400/60 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:bg-black/60 h-[550px] flex flex-col">
      <div className="flex flex-col flex-1">
        <h3 className="text-3xl font-light text-white tracking-tight group-hover:text-emerald-400 transition-colors duration-300 mb-6">
          {project.title}
        </h3>
        
        <div className="h-px bg-gradient-to-r from-emerald-400/40 via-white/20 to-transparent mb-6"></div>
        
        <p className="text-white/80 font-light leading-relaxed text-base group-hover:text-white/90 transition-colors duration-300 mb-6 flex-1">
          {project.description}
        </p>

        {/* Tecnologías usadas */}
        <div className="flex flex-wrap gap-3 mb-6">
          {project.technologies.map((tech) => {
            const techInfo = techIconMap[tech];
            if (!techInfo) return null;
            
            const IconComponent = techInfo.icon;
            
            return (
              <div
                key={tech}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-emerald-400/40 hover:bg-white/10 transition-colors duration-300 group/tech flex-shrink-0 cursor-default"
                title={tech}
              >
                <IconComponent 
                  className="w-4 h-4 flex-shrink-0" 
                  color={techInfo.color}
                />
                <span className="text-xs font-medium text-white/70 group-hover/tech:text-white/90 transition-colors duration-300 whitespace-nowrap">
                  {tech}
                </span>
              </div>
            );
          })}
        </div>
        
        <div className="flex items-center gap-8 mt-auto">
          <a
            href={project.githubUrl}
            className="inline-flex items-center gap-2 text-white/70 hover:text-emerald-400 font-medium tracking-wide transition-colors duration-300 group/link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver proyecto ${project.title} en GitHub`}
          >
            <span className="text-sm">Ver código</span>
            <FaCode className="w-4 h-4 flex-shrink-0" />
          </a>
          
          {project.deployUrl && (
            <a
              href={project.deployUrl}
              className="inline-flex items-center gap-2 text-white/70 hover:text-emerald-400 font-medium tracking-wide transition-colors duration-300 group/link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-sm">Ver demo</span>
              <svg
                className="w-4 h-4 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}