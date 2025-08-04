interface ProjectProps {
  projectRef: React.RefObject<HTMLDivElement | null>;
}


export default function Projects({ projectRef }: ProjectProps) {
  return (
    <section ref={projectRef} className="h-screen bg-black text-white px-6 md:px-16 py-10">
      <div className="max-w-5xl mx-auto h-full flex flex-col justify-center space-y-12">
  
        {/* Título y descripción */}
        <header className="space-y-4">
          <h2 className="font-semibold text-4xl md:text-5xl text-white">
            This is what I’m capable of:
          </h2>
          <p className="text-lg font-body text-gray-400 leading-relaxed max-w-2xl">
            Here are some of the projects I’ve worked on, showcasing my skills in web development and design.
          </p>
        </header>
  
        {/* Lista de 2 proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Proyecto 1 */}
          <div className="border border-neutral-700 bg-[#111111] rounded-xl p-6 shadow-sm hover:shadow-lg hover:shadow-white/10 transition-all duration-300">
            <h3 className="text-2xl font-medium text-white mb-2">Intranet</h3>
            <p className="text-gray-400 font-body leading-relaxed text-sm">
              Aplicación interna con sistema de roles: admin y empleado. Los admins crean y revisan tareas y archivos; los empleados completan tareas y suben evidencias. Funcionalidades automáticas usando Multer y node-cron.
            </p>
          </div>
  
          {/* Proyecto 2 */}
          <div className="border border-neutral-700 bg-[#111111] rounded-xl p-6 shadow-sm hover:shadow-lg hover:shadow-white/10 transition-all duration-300">
            <h3 className="text-2xl font-medium text-white mb-2">Sitio para centro educativo</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Website informativo, visualmente atractivo y responsive. Presenta servicios, ubicación y equipo. Incluye formulario de contacto funcional conectado a backend con Nodemailer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
  
  
  
  
}