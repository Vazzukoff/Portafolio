import { SiJavascript, SiTypescript,
         SiReact, SiHtml5, SiCss3,
         SiNodedotjs, SiExpress, 
         SiTailwindcss, SiPostgresql,
        SiPrisma } 
from 'react-icons/si';


interface AboutProps {
  aboutRef: React.RefObject<HTMLDivElement | null>;
}

export default function About( {aboutRef}: AboutProps) {
  return (
    <section ref={aboutRef} className="flex flex-col items-center justify-center px-4 h-screen">
      <div className="text-center mb-8">
        <h2 className="font-title text-4xl">About Me</h2>
        <div className="relative w-full max-w-[300px] h-[2px] mx-auto my-4">
        <div className="absolute inset-0 mx-auto h-full bg-gradient-to-r from-transparent via-white to-transparent scale-y-150 blur-[1px] rounded-full" />
        </div>
        <p className="max-w-3xl text-gray-400 font-body leading-relaxed text-xl">
        Soy desarrollador web con una formación sólida en frontend y backend. Trabajo con tecnologías modernas y frameworks actuales como React, Node.js y Express, 
        aplicando buenas prácticas de desarrollo y escribiendo código limpio y mantenible. Me apasiona aprender y crecer profesionalmente, y busco contribuir en 
        proyectos que representen un desafío y una oportunidad de seguir mejorando.
        </p>
      </div>
  
        <div className="text-center">
          <h2 className="font-title text-4xl mb-4">Stack</h2>
          <div className="relative w-full max-w-[300px] h-[2px] mx-auto my-4">
          <div className="absolute inset-0 mx-auto h-full bg-gradient-to-r from-transparent via-white to-transparent scale-y-150 blur-[1px] rounded-full" />
          </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        <div className="bg-neutral-800 rounded-xl p-6 shadow-md border border-neutral-800 hover:border-white transform hover:scale-105 transition-all duration-300">
          <h3 className="text-xl underline font-subtitle font-semibold mb-2">Frontend</h3>
          <ul className="grid grid-cols-3 gap-2 font-body">
            <li className="flex items-center gap-2 justify-center"><SiJavascript color="#F7DF1E" /> JavaScript</li>
            <li className="flex items-center gap-2 justify-center"><SiTypescript color="#3178C6" /> TypeScript</li>
            <li className="flex items-center gap-2 justify-center"><SiReact color="#61DAFB" /> React</li>
            <li className="flex items-center gap-2 justify-center"><SiHtml5 color="#E34F26" /> HTML</li>
            <li className="flex items-center gap-2 justify-center"><SiCss3 color="#1572B6" /> CSS</li>
            <li className="flex items-center gap-2 justify-center"><SiTailwindcss color="#06B6D4" /> Tailwind</li>
          </ul>
        </div>

        <div className="bg-neutral-800 rounded-xl p-6 shadow-md border border-neutral-800 hover:border-white transform hover:scale-105 transition-all duration-300">
          <h3 className="text-xl underline font-subtitle font-semibold mb-2">Backend</h3>
          <ul className="space-y-2 font-body">
            <li className="flex items-center gap-2 justify-center"><SiNodedotjs color="#339933" /> Node.js</li>
            <li className="flex items-center gap-2 justify-center"><SiExpress color="#000000" /> Express</li>
          </ul>
        </div>

        <div className="bg-neutral-800 rounded-xl p-6 shadow-md border border-neutral-800 hover:border-white transform hover:scale-105 transition-all duration-300">
          <h3 className="text-xl underline font-subtitle font-semibold mb-2">Databases</h3>
          <ul className="space-y-2 font-body">
            <li className="flex items-center gap-2 justify-center text-body"><SiPostgresql color="#4169E1" /> PostgreSQL</li>
            <li className="flex items-center gap-2 justify-center text-body"><SiPrisma />Prisma</li>
          </ul>
        </div>
        </div>
      </div>
    </section>
  );
}