export default function ProjectsHeader() {
  return (
    <header className="space-y-6 text-center md:text-left">
      <h2 className="font-light text-5xl md:text-6xl text-white tracking-tight leading-tight group inline-block">
        Esto es lo que soy{' '}
        <span className="text-emerald-400 transition-colors duration-300 hover:text-emerald-300">
          capaz de hacer
        </span>
      </h2>
      
      <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full mx-auto md:mx-0"></div>
      
      <p className="text-xl font-light text-white/70 leading-relaxed max-w-3xl mx-auto md:mx-0 hover:text-white/90 transition-colors duration-300">
        Aquí hay algunos de los proyectos en los que he trabajado, mostrando mis habilidades en desarrollo web y diseño.
      </p>
    </header>
  );
}