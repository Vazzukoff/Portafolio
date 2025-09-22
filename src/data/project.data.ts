import type { Project } from '@/models/project.model';

export const projectsData: Project[] = [
  {
    id: 'intranet',
    title: 'Intranet',
    description: 'Aplicación interna con sistema de roles: admin y empleado. Los admins crean y revisan tareas y archivos; los empleados completan tareas y suben evidencias. Funcionalidades automáticas usando Multer y node-cron.',
    githubUrl: 'https://github.com/Vazzukoff/Intranet.git'
  },
  {
    id: 'educational-center',
    title: 'Sitio para centro educativo',
    description: 'Website informativo, visualmente atractivo y responsive. Presenta servicios, ubicación y equipo. Incluye formulario de contacto funcional conectado a backend con Nodemailer.',
    githubUrl: 'https://github.com/Vazzukoff/Web-Mundo-de-Gru.git'
  }
];