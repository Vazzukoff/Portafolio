import { motion } from 'framer-motion';
import { itemVariants } from '@/animations/variants';
import SectionDivider from '@/components/section.divider';

const ABOUT_TEXT = `Soy un desarrollador web con una sólida formación en frontend y backend. Trabajo con tecnologías modernas y frameworks como React, Node.js y Express, enfocándome en escribir código limpio, mantenible y orientado a buenas prácticas.
Me apasiona el aprendizaje continuo y la mejora constante. Busco formar parte de proyectos desafiantes que me permitan aportar valor, crecer profesionalmente y crear soluciones tecnológicas de calidad.`;

export default function AboutSection() {
  return (
    <motion.div
      className="text-center mb-8"
      variants={itemVariants}
    >
      <motion.h2
        className="font-title text-4xl md:text-6xl text-white tracking-tight mb-2 group inline-block"
        variants={itemVariants}
      >
        Sobre{' '}
        <span className="text-emerald-400 transition-colors duration-300 hover:text-emerald-300">
          mí
        </span>
      </motion.h2>
      
      <SectionDivider />
      
      <motion.p
        className="max-w-3xl mx-auto text-white/70 font-body leading-relaxed text-xl hover:text-white/90 transition-colors duration-300"
        variants={itemVariants}
      >
        {ABOUT_TEXT}
      </motion.p>
    </motion.div>
  );
}