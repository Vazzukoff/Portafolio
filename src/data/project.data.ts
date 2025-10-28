import type { Project } from '@/models/project.model';

export const projectsData: Project[] = [
  {
    id: 'intranet',
    title: 'Intranet',
    description: 'Aplicación interna para gestión de tareas y archivos con sistema de roles (admin y empleado). Los administradores pueden crear, revisar y eliminar tareas y archivos; los empleados completan tareas subiendo evidencias obligatorias. Incluye autenticación con JWT, subida de archivos con Multer y tareas automáticas programadas con node-cron.',
    technologies: [
      'React',
      'TypeScript',
      'TailwindCSS',
      'Radix UI',
      'Node.js',
      'Express',
      'PostgreSQL',
      'JWT',
      'Multer',
      'node-cron',
      'Zod'
    ],
    githubUrl: 'https://github.com/Vazzukoff/Intranet.git',
    deployUrl: 'https://intranet-six-steel.vercel.app/'
  },
  {
    id: 'educational-center',
    title: 'Sitio web "El Mundo de Gru"',
    description: 'Sitio web informativo y responsive para un centro educativo de nivel inicial. Presenta los servicios, la ubicación y el equipo de trabajo del centro, con animaciones fluidas y diseño moderno. Incluye un formulario de contacto funcional que envía mensajes directamente al correo de la institución mediante Nodemailer y Express.',
    technologies: [
      'React',
      'Node.js',
      'Express',
      'Nodemailer'
    ],
    githubUrl: 'https://github.com/Vazzukoff/Web-Mundo-de-Gru.git',
    deployUrl: 'https://web-mundo-de-gru.vercel.app'
  },
  {
    id: 'portfolio',
    title: 'Portafolio',
    description: 'Sitio web personal diseñado para presentar mi perfil profesional, habilidades y proyectos destacados. Incluye secciones dinámicas sobre mí, experiencia, trabajos realizados y un formulario de contacto. Desarrollado con enfoque en rendimiento, accesibilidad y animaciones fluidas.',
    technologies: [
      'React',
      'TypeScript',
      'TailwindCSS',
      'Motion (Framer Motion)'
    ],
    githubUrl: 'https://github.com/Vazzukoff/Portafolio.git'
  },
  {
    id: 'mentor-ai',
    title: 'Mentor AI',
    description: 'Mentor AI es un chatbot educativo desarrollado para asistir en el estudio. Implementé la integración con la API de Gemini, diseñé la interfaz en React con TailwindCSS, y configuré la arquitectura del proyecto utilizando TypeScript y Vite. Además, moldeé la personalidad del chatbot para ofrecer una experiencia de aprendizaje atractiva y efectiva.',
    technologies: [
      'React',
      'TypeScript',
      'TailwindCSS',
      'Vite',
      'React Icons',
      '@google/genai'
    ],
    githubUrl: 'https://github.com/Vazzukoff/MentorAI.git',
    deployUrl: 'https://mentor-ai-phi.vercel.app'
  }
]