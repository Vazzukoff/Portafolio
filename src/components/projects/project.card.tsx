import type { Project } from '@/models/project.model';
import { FaCode } from "react-icons/fa";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group bg-black/40 backdrop-blur-sm border border-white/30 hover:border-emerald-400/60 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:bg-black/60 hover:-translate-y-2">
      <div className="space-y-6">
        <h3 className="text-3xl font-light text-white tracking-tight group-hover:text-emerald-400 transition-colors duration-300">
          {project.title}
        </h3>
        
        <div className="h-px bg-gradient-to-r from-emerald-400/40 via-white/20 to-transparent"></div>
        
        <p className="text-white/80 font-light leading-relaxed text-base group-hover:text-white/90 transition-colors duration-300">
          {project.description}
        </p>
        
        <div className="pt-4 flex items-center gap-8">
          <a
            href={project.githubUrl}
            className="inline-flex items-center gap-2 text-white/70 hover:text-emerald-400 font-medium tracking-wide transition-all duration-300 group/link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver proyecto ${project.title} en GitHub`}
          >
            <span className="text-sm">Ver código</span>
            <FaCode className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
          </a>
          
          <a
            href={project.deployUrl}
            className="inline-flex items-center gap-2 text-white/70 hover:text-emerald-400 font-medium tracking-wide transition-all duration-300 group/link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-sm">Ver demo</span>
            <svg
              className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}