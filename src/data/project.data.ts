import type { Project } from '@/models/project.model';

export const projectsData: Project[] = [
  {
    id: 'intranet',
    title: 'Intranet',
    description: `Aplicación interna tipo “mini ERP” para gestionar tareas y archivos entre administradores y empleados. Incluye autenticación con JWT, control 
                  de roles y subida de archivos con Multer. Implementé una API completa con Express, PostgreSQL y validaciones con Zod, además de automatizaciones 
                  programadas con node-cron. En el frontend desarrollé una interfaz moderna en React + TypeScript con Tailwind y Radix UI. Este proyecto demuestra 
                  dominio full-stack, flujos completos de trabajo y manejo de background jobs y permisos avanzados.`,
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
    deployUrl: 'https://intranet-six-steel.vercel.app/',
    isProduction: false
  },
  {
    id: 'mentor-ai',
    title: 'Mentor AI',
    description: `Chatbot educativo diseñado para asistir en el estudio, construido con React + TypeScript e integrado con la API de Gemini. Implementé diseño 
                  conversacional, control de prompts y personalidad del asistente para lograr una experiencia fluida. La interfaz está optimizada con TailwindCSS 
                  y Vite, logrando un entorno rápido y limpio. Este proyecto demuestra integración de LLMs en aplicaciones prácticas.`,
    technologies: [
      'React',
      'TypeScript',
      'TailwindCSS',
      'Vite',
      'React Icons',
      '@google/genai'
    ],
    githubUrl: 'https://github.com/Vazzukoff/MentorAI.git',
    deployUrl: 'https://mentor-ai-phi.vercel.app',
    isProduction: false
  },
  {
    id: 'educational-center',
    title: 'Sitio web "El Mundo de Gru"',
    description: `Sitio web institucional desarrollado con Next.js para un centro educativo, enfocado en visibilidad y captación de leads. Optimicé SEO 
                  técnico logrando un puntaje 99/100 en Lighthouse, incluí un formulario de contacto funcional con Node + Express + Nodemailer, y configuré 
                  el dominio y despliegue en producción. El sitio ya está generando leads reales y ofrece una experiencia moderna y responsive acorde al negocio.`,
    technologies: [
      'Next.js',
      'React',
      'Node.js',
      'Express',
      'Nodemailer'
    ],
    githubUrl: 'https://github.com/Vazzukoff/Web-Mundo-de-Gru.git',
    deployUrl: 'https://www.nidomundodegru.com',
    isProduction: true
  },
  {
    id: 'portfolio',
    title: 'Portafolio',
    description: `Sitio personal para mostrar mi perfil, habilidades y proyectos destacados. Fue creado con énfasis en rendimiento, accesibilidad y una 
                  experiencia visual animada mediante Framer Motion. Incluye secciones dinámicas, navegación clara y un diseño moderno construido con React + 
                  TypeScript y TailwindCSS.`,
    technologies: [
      'React',
      'TypeScript',
      'TailwindCSS',
      'Motion (Framer Motion)'
    ],
    githubUrl: 'https://github.com/Vazzukoff/Portafolio.git',
    isProduction: false
  },
]