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
    deployUrl: 'https://intranet-vazzukoff.vercel.app/'
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
    id: 'e-commerce',
    title: 'Fullstock E-commerce',
    description: 'Proyecto grupal que simula una tienda online completa con catálogo, carrito de compras, autenticación de usuarios y pasarela de pagos. Participé en la migración de estilos a TailwindCSS, la actualización a React Router v7, y la implementación de variantes de productos, lo que requirió modificar la base de datos y adaptar el frontend. También colaboré en la refactorización de componentes para mejorar mantenibilidad y rendimiento.',
    technologies: [
      'React',
      'TypeScript',
      'TailwindCSS',
      'React Router v7',
      'Prisma',
      'PostgreSQL',
      'Node.js',
      'JWT',
      'React Hook Form',
      'Zod'
    ],
    githubUrl: 'https://github.com/Vazzukoff/Ecommerce.git',
    deployUrl: 'https://ecommerce-vazzukoff.vercel.app/'
  }
];