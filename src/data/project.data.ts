import type { Project } from '@/models/project.model';

export const projectsData: Project[] = [
  {
    id: 'intranet',
    title: 'Intranet',
    description: `Aplicación interna para gestión de tareas y archivos con sistema de roles (admin y empleado). Los administradores pueden crear, revisar 
                  y eliminar tareas y archivos; los empleados completan tareas subiendo evidencias obligatorias. Incluye autenticación con JWT, subida de 
                  archivos con Multer y tareas automáticas programadas con node-cron.`,
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
    description: `Mentor AI es una beta de un proyecto más grande, actualmente es un chatbot educativo desarrollado para asistir en el estudio. Implementé la 
                  integración con la API de Gemini, diseñé la interfaz en React con TailwindCSS, y configuré la arquitectura del proyecto utilizando TypeScript 
                  y Vite. Además, moldeé la personalidad del chatbot para ofrecer una experiencia de aprendizaje atractiva y efectiva.`,
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
    description: `Sitio web informativo, responsive y actualmente en producción para un centro educativo de nivel inicial. 
                Desarrollado con Next.js, implementando prácticas de SEO para mejorar el posicionamiento y la visibilidad del sitio. 
                Presenta los servicios, la ubicación y el equipo de trabajo de la institución, acompañado de animaciones fluidas 
                y un diseño moderno acorde al tono del negocio. Incluye un formulario de contacto funcional integrado con Nodemailer y Express, el cual 
                ya está generando leads reales para la institución.`,
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
    description: `Sitio web personal diseñado para presentar mi perfil profesional, habilidades y proyectos destacados. Incluye secciones dinámicas sobre 
                  mí, experiencia, trabajos realizados y un formulario de contacto. Desarrollado con enfoque en rendimiento, accesibilidad y animaciones fluidas.`,
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