import { motion } from 'framer-motion';
import { itemVariants } from '@/animations/variants';
import SectionDivider from '@/components/section.divider';

const ABOUT_TEXT = `Soy desarrollador web con una formación sólida en frontend y backend. 
Trabajo con tecnologías modernas y frameworks actuales como React, Node.js y Express,
aplicando buenas prácticas de desarrollo y escribiendo código limpio y mantenible. 
Me apasiona aprender y crecer profesionalmente, y busco contribuir en proyectos que 
representen un desafío y una oportunidad de seguir mejorando.`;

export default function AboutSection() {
  return (
    <motion.div 
      className="text-center mb-8"
      variants={itemVariants}
    >
      <motion.h2 
        className="font-title text-4xl"
        variants={itemVariants}
      >
        About Me
      </motion.h2>
      
      <SectionDivider />
      
      <motion.p 
        className="max-w-3xl text-gray-400 font-body leading-relaxed text-xl"
        variants={itemVariants}
      >
        {ABOUT_TEXT}
      </motion.p>
    </motion.div>
  );
}