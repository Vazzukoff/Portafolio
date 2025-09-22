import { motion } from 'framer-motion';
import { cardVariants } from '../animations/variants';
import type { StackCategory } from '@/data/stack.data';

interface StackCardProps {
  category: StackCategory;
}

export default function StackCard({ category }: StackCardProps) {
  const { title, technologies, gridCols = "" } = category;
  
  return (
    <motion.div
      className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-black/60"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileTap={{ scale: 0.98 }}
    >
      <h3 className="text-2xl font-light text-white mb-6 tracking-tight border-b border-white/10 pb-3">
        {title}
      </h3>
      <ul
        className={
          gridCols
            ? `grid ${gridCols} gap-4 font-light`
            : "space-y-4 font-light"
        }
      >
        {technologies.map((tech) => {
          const IconComponent = tech.icon;
          return (
            <li
              key={tech.name}
              className="flex items-center gap-3 text-white/90 hover:text-white transition-colors duration-300 group"
            >
              <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <IconComponent
                  color={tech.color}
                  size={20}
                />
              </div>
              <span className="text-sm font-medium tracking-wide">
                {tech.name}
              </span>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
}