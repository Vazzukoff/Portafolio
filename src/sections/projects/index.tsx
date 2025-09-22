import { motion } from 'framer-motion';
import { containerVariants } from '@/animations/variants';
import type { ProjectProps } from '@/models/project.model';
import ProjectsHeader from '@/components/projects/project.header';
import ProjectsGrid from '@/components/projects/project.grid';
import { projectsData } from '@/data/project.data';

export default function Projects({ projectRef }: ProjectProps) {
  const projects = projectsData;

  return (
    <motion.section
      ref={projectRef}
      className="min-h-screen bg-black text-white px-6 md:px-16 py-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-6xl mx-auto h-full flex flex-col justify-center space-y-16">
        <ProjectsHeader />
        <ProjectsGrid projects={projects} />
      </div>
    </motion.section>
  );
}