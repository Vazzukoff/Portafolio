import type { Project } from '@/models/project.model';

export const projectsData: Project[] = [
  {
    id: 'intranet',
    title: 'Intranet',
    description: 'Aplicación interna con sistema de roles: admin y empleado. Los admins crean y revisan tareas y archivos; los empleados completan tareas y suben evidencias. Funcionalidades automáticas usando Multer y node-cron.',
    githubUrl: 'https://github.com/Vazzukoff/Intranet.git',
    deployUrl: 'https://intranet-vazzukoff.vercel.app/'
  },
  {
    id: 'educational-center',
    title: 'Sitio para centro educativo',
    description: 'Website informativo, visualmente atractivo y responsive. Presenta servicios, ubicación y equipo. Incluye formulario de contacto funcional conectado a backend con Nodemailer.',
    githubUrl: 'https://github.com/Vazzukoff/Web-Mundo-de-Gru.git',
    deployUrl: 'https://web-mundo-de-gru.vercel.app'
  },
  {
    id: 'portfolio',
    title: 'Portafolio',
    description: 'Sitio web personal que muestra proyectos, habilidades y experiencia laboral. Incluye secciones sobre mí, mis trabajos y un formulario de contacto.',
    githubUrl: 'https://github.com/Vazzukoff/Portafolio.git'
  },
  {
    id: 'e-commerce',
    title: 'Fullstock E-commerce',
    description: 'Tienda online con catálogo de productos, carrito de compras y sistema de pago integrado. Permite a los usuarios buscar, filtrar y comprar productos de manera segura.',
    githubUrl: 'https://github.com/Vazzukoff/Ecommerce.git',
    deployUrl: 'https://ecommerce-vazzukoff.vercel.app/'
  }
]